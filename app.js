'use strict'
const timers = require('timers');
const setInterval = timers.setInterval;
const request = require('request');
const express = require('express');

const SerialPort = require('serialport'); //TODO: remove /test from here in prod.
const WEBHOOK_URL = 'https://car-production-app.herokuapp.com/api/cars/update';
const carInfoLocal = {
    carId: 'cqowieucop98034ckle65689cwer2132we', //CHANGE THIS BETWEEN BOTH RASPBERRIES
    longitude: 0.0,
    latitude: 0.0,
    accidentLevel: 0,
    speed: 70
};

//SECTION RESPONSIBLE FOR MAP//

const app = express();

app.get('/getNearbyCars', (req, res) => res.json({
    nearbyCars: otherNearbyCars
}))

app.listen(43421, () => console.log('Example app listening on port 43421!'));
//should fetch them //can hack the way and add a way to fetch them through the update request in the response.
const otherNearbyCars = [

];

//////////////////////////////////////////////////

//////////////////////////////////SERIAL COMMUNICATIONS SETCION//////////////////////////
////////////////////////only uncomment from the /* section //////////////////////////////
//parsers
const Delimiter = SerialPort.parsers.Delimiter;

// const MockBinding = SerialPort.Binding;
// MockBinding.createPort('/dev/ROBOT', { echo: false, record: false })
//TODO:
// use for test: /dev/ROBOT
// use for prod: /dev/tty-usbserial1
const port = new SerialPort('/dev/ttyACM1', {
    baudRate: 115200
});
const parser = port.pipe(new Delimiter({ delimiter: Buffer.from('\r\n') }))
port.pipe(parser);

port.open((status) => {
    if (status) {
        return console.log('Status - Serial port: ' + status.message);
    }
})

port.on('open', () => {
    console.log('Port opened.');
    //updateData();

})

port.on('open', () => {
    // To pretend to receive data (only works on open ports)
    // executeFakeData();
});

function executeFakeData() {
    port.binding.emitData(Buffer.from('ANC'));
    setInterval(executeFakeData, 1000);
}


port.on('data', (data) => {
    let stringifiedBuffer = data.toString('utf8');
    console.log(stringifiedBuffer);
    //here's the data
    let locationData = stringifiedBuffer.split(',');
    let longitude = locationData[0];
    let latitude = locationData[1];
    carInfoLocal.longitude = parseFloat(longitude);
    carInfoLocal.latitude = parseFloat(latitude);
});
//////////////////////////////////////////////////////////////////////////////////////
//////COMMENT HERE 

/////////////////////TEST//////////////////////////////////
let fakeDataFrameId = 0;
const fakeDataArray = require('./fakedata').fakeDataArray;

function fakeDataFrameGenerator() {
    //POSSIBLE Timer_leakage -> NEEDS FIX(but yolo this is just for a test)
    if (fakeDataFrameId < fakeDataArray.length - 1) {
        carInfoLocal.latitude = (fakeDataArray[fakeDataFrameId].lat);
        carInfoLocal.longitude = (fakeDataArray[fakeDataFrameId].long);
        fakeDataFrameId++;
    } else {
        console.log('End of test data');
    }
    timers.setTimeout(fakeDataFrameGenerator, 400);
}

function theTesterAwesomeMegaFunction() {
    fakeDataFrameGenerator();
    updateData();
}
//theTesterAwesomeMegaFunction();
///////////////////END TEST////////////////////////////////
function updateData() {
    if (carInfoLocal.latitude != 0 && carInfoLocal.longitude != 0) {
        request.post(WEBHOOK_URL, {
            timeout: 400,
            json: {
                carId: carInfoLocal.carId,
                speed: carInfoLocal.speed,
                accidentFlag: carInfoLocal.accidentLevel,
                location: {
                    lng: carInfoLocal.longitude,
                    lat: carInfoLocal.latitude
                }
            }
        }, function(err, response, body) {
            console.log(body)
        });
    }
    //timers.setInterval(updateData, 500);
}