'use strict'
const timers = require('timers');
const setInterval = timers.setInterval;
const request = require('request');
const express = require('express');
const path = require('path');
const SerialPort = require('serialport');

const WEBHOOK_URL_MEDICAL_USERS = 'https://car-production-app.herokuapp.com/api/cars/getAssociatedQRs';
const WEBHOOK_URL_UPDATE = 'https://car-production-app.herokuapp.com/api/cars/update';
const WEBHOOK_URL_REQUEST = 'https://car-production-app.herokuapp.com/api/cars/request';
//this is an important flag, if some accident happened, we shall not update accident status with anything that's
//returned from the device since except the GPS location.
let accidentHappened = 'false';
//This is where the local car data exists, it's directly updated from the serial port.
const carInfoLocal = {
    carId: 'cqowieucop98034ckle65689cwer2132we', //CHANGE THIS BETWEEN BOTH RASPBERRIES
    longitude: 0,
    latitude: 0,
    accidentStatus: 0,
    speed: 70
};
let issueConnectingToDevice = 0;
//this is where other nearby cars exist, it's updated from the server
const otherNearbyCars = [

];
//this is the notifications array, it contains all notifications
const notificationsArray = [

];
//SECTION RESPONSIBLE FOR MAP//
//loading app
const app = express();
//loading static files
app.use(express.static(path.join(__dirname, 'maps/dist')));
//internal endpointss
app.get('/getNearbyCars', (req, res) => res.json({
    nearbyCars: otherNearbyCars,
    thisCar: {
        lng: carInfoLocal.longitude,
        lat: carInfoLocal.latitude,
        accidentStatus: carInfoLocal.accidentStatus
    }
}));
app.get('/getMedicalUsers', (req, res) => {
    request.post(WEBHOOK_URL_MEDICAL_USERS, {
        json: {
            carId: carInfoLocal.carId,
        }
    }, function(err, response, body) {
        console.log(err)
        console.log(body)
        return res.json(body);
    });
});
app.post('/myOwnCarInfo', (req, res) => {
    res.json(carInfoLocal);
})
app.get('/getNofifications', (req, res) => {
    res.json({
        notifications: notificationsArray
    });
});
//open internal communication port
app.listen(43421, () => console.log('Example app listening on port 43421!'));


//////////////////////////////////SERIAL COMMUNICATIONS SETCION//////////////////////////
//parsers
const Delimiter = SerialPort.parsers.Delimiter;
const port = new SerialPort('/dev/ttyACM0', {
    baudRate: 115200,
    autoOpen: false
});
const parser = port.pipe(new Delimiter({
    delimiter: Buffer.from('\r\n'),
    encoding: 'ascii'
}))

portOpening();

//this should be also sent with the car data if there is any error in the connection
let MasterConnectionErrorCounter = 0;
let previousStateIsError = true;

function portOpening() {
    port.open((error) => {
        if (error) {
            setTimeout(() => {
                portOpening();
                MasterConnectionErrorCounter++;
                previousStateIsError = true;
            }, 1000);
        } else {
            previousStateIsError = false;
        }
    })
}

port.on('open', () => {
    console.log('Port opened.');
    port.flush();
})

//this is what gets data from the serial port.
parser.on('data', (data) => {
    let stringifiedBuffer = data.toString();
    console.log(stringifiedBuffer);
    //here's the data
    let locationData = stringifiedBuffer.split(',');
    let longitude = locationData[0];
    let latitude = locationData[1];
    let speed = locationData[2];
    let accidentFlag = 0;


    if (locationData.hasOwnProperty('length') && locationData.length === 4 && speed === '7' && longitude.hasOwnProperty('length') && longitude.length === 10 &&
        latitude.hasOwnProperty('length') && latitude.length === 10) {
        //use of accidentFlag
        //no accident already happened - flag is false - should send 0

        // if (accidentHappened == 'false') {
        //     if (locationData[3] && locationData[3] != 0) {
        //         accidentHappened = locationData[3];
        //         console.log("ASASDASDASDASDASD" + accidentHappened);
        //         accidentFlag = locationData[3].split('\r')[0];
        //     } else {
        //         accidentFlag = 0;
        //     }
        // } else {
        //     accidentFlag = accidentHappened;
        // }
        console.log('a: lng' + longitude + ' b: lat' + latitude + ' c:  ' + speed + ' d: ' + accidentFlag);
        carInfoLocal.longitude = parseFloat(parseFloat(longitude).toFixed(6));
        carInfoLocal.latitude = parseFloat(parseFloat(latitude).toFixed(6));
        carInfoLocal.speed = parseInt(speed);
        //carInfoLocal.accidentStatus = accidentFlag;
        console.log(locationData[3])
        if (locationData[3].split('\r').length === 2) {
            try {
                carInfoLocal.accidentStatus = parseInt(locationData[3].split('\r')[0]);
                console.log(carInfoLocal.accidentStatus);
            } catch (ex) {
                console.log(ex)
            }

        }
        //port.update();
    } else {
        port.flush();
    }


});

port.on('error', (err) => {
    console.log(err);
});

let i = 0;
setInterval(() => {
    updateData();
}, 1200);
setInterval(() => {
    //getUpdates();
}, 2000);
///////////////////END TEST////////////////////////////////
function updateData() {
    if (carInfoLocal.latitude !== 0 && !Number.isNaN(carInfoLocal.latitude) && typeof carInfoLocal.latitude === 'number' &&
        carInfoLocal.longitude !== 0 && !Number.isNaN(carInfoLocal.longitude) && typeof carInfoLocal.longitude === 'number' &&
        previousStateIsError === false) {
        console.log(carInfoLocal)
        request.post(WEBHOOK_URL_UPDATE, {
            timeout: 1000,
            json: {
                carId: carInfoLocal.carId,
                speed: carInfoLocal.speed,
                accidentStatus: carInfoLocal.accidentStatus,
                location: {
                    longitude: carInfoLocal.longitude,
                    latitude: carInfoLocal.latitude
                }
            }
        }, function(err, response, body) {
            console.log(err)
            console.log('body: ' + body) //should display OK
        });
    }
}

function getUpdates() {

    request.post(WEBHOOK_URL_REQUEST, {
        timeout: 1000,
        json: {
            carId: carInfoLocal.carId
        }
    }, function(err, response, body) {
        console.log(body);
    });
}