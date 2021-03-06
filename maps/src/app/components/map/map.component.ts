import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MapService } from './map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  // these are where we center the user in the map.
  // these should be the user's location
  lat = 0; // 31.206611;
  lng = 0; // 29.923000;
  arr: string[] = [
    'Accident - Ambulance and Rescue on the way. Area Warning for nearby cars.',
    'Cooling Problem within your car',
    'Engine Shutdown. Rescue on the way.',
    'Pedal issue and the speed equals 0',
    'Cooling problem. Pedal issue and the speed equals 0',
    'Engine Shutdown. Pedal issue and the speed equals 0. Rescue on the way.',
    'Pedal issue and the speed is larger than 0. Area warning for nearby cars and Rescue on the way.',
    'Engine Shutdown. Pedal issue and the speed is larger than 0. Rescue on the way. Area warning for nearby cars.',
    'Cooling problem. Pedal issue and the speed is larger than 0. Area warning was sent to nearby cars.',
    'Device malfunction. We will hold off sending data from your car.'
  ];
  iter = 0;
  accidentFlag = 0;
  @Output() accidentDetected: EventEmitter<number> = new EventEmitter<number>();
  otherCarMarkers = [];
  /**
   * {
    lat:30.851235,
    lng:29.5706148,
    i:1
  },
  {
    lat:30.851235,
    lng:29.5766148,
    i:9
  },
  {
    lat:30.851235,
    lng:29.5806148,
    i:18
  },
  {
    lat:30.851235,
    lng:29.5806148,
    i:18
  }
    // tslint:disable-next-line:max-line-length
    //simulationArray = [{"lon":29.5621114,"lat":30.837624,"ele":62},{"lon":29.561996622915963,"lat":30.837774466622097,"ele":63},{"lon":29.561881845831927,"lat":30.837924933244192,"ele":65},{"lon":29.56176706874789,"lat":30.838075399866288,"ele":67},{"lon":29.561652291663854,"lat":30.838225866488383,"ele":67},{"lon":29.56153751457982,"lat":30.838376333110478,"ele":68},{"lon":29.561422737495782,"lat":30.838526799732573,"ele":67},{"lon":29.561307960411746,"lat":30.83867726635467,"ele":66},{"lon":29.56119318332771,"lat":30.838827732976764,"ele":64},{"lon":29.561078406243674,"lat":30.83897819959886,"ele":64},{"lon":29.560963629159637,"lat":30.839128666220954,"ele":64},{"lon":29.5608488520756,"lat":30.83927913284305,"ele":66},{"lon":29.560734074991565,"lat":30.839429599465145,"ele":67},{"lon":29.56061929790753,"lat":30.83958006608724,"ele":69},{"lon":29.560504520823493,"lat":30.839730532709336,"ele":69},{"lon":29.560389743739456,"lat":30.83988099933143,"ele":71},{"lon":29.56027496665542,"lat":30.840031465953526,"ele":72},{"lon":29.560160189571384,"lat":30.84018193257562,"ele":73},{"lon":29.560045412487348,"lat":30.840332399197717,"ele":73},{"lon":29.559930635403312,"lat":30.840482865819812,"ele":73},{"lon":29.559815858319276,"lat":30.840633332441907,"ele":73},{"lon":29.55970108123524,"lat":30.840783799064003,"ele":73},{"lon":29.559586304151203,"lat":30.840934265686098,"ele":72},{"lon":29.559471527067167,"lat":30.841084732308193,"ele":72},{"lon":29.55935674998313,"lat":30.84123519893029,"ele":71},{"lon":29.559241972899095,"lat":30.841385665552384,"ele":71},{"lon":29.55912719581506,"lat":30.84153613217448,"ele":71},{"lon":29.559012418731022,"lat":30.841686598796574,"ele":72},{"lon":29.558897641646986,"lat":30.84183706541867,"ele":72},{"lon":29.55878286456295,"lat":30.841987532040765,"ele":71},{"lon":29.558668087478914,"lat":30.84213799866286,"ele":71},{"lon":29.558553310394878,"lat":30.842288465284955,"ele":72},{"lon":29.55843853331084,"lat":30.84243893190705,"ele":73},{"lon":29.558323756226805,"lat":30.842589398529146,"ele":74},{"lon":29.55820897914277,"lat":30.84273986515124,"ele":75},{"lon":29.558094202058733,"lat":30.842890331773336,"ele":75},{"lon":29.557979424974697,"lat":30.843040798395432,"ele":73},{"lon":29.55786464789066,"lat":30.843191265017527,"ele":71},{"lon":29.557749870806624,"lat":30.843341731639622,"ele":68},{"lon":29.55763509372259,"lat":30.843492198261718,"ele":69},{"lon":29.557520316638552,"lat":30.843642664883813,"ele":71},{"lon":29.557405539554512,"lat":30.843793131505908,"ele":74},{"lon":29.557290762470476,"lat":30.843943598128003,"ele":76},{"lon":29.557175985386436,"lat":30.8440940647501,"ele":78},{"lon":29.5570612083024,"lat":30.844244531372194,"ele":78},{"lon":29.55694643121836,"lat":30.84439499799429,"ele":79},{"lon":29.556831654134324,"lat":30.844545464616385,"ele":80},{"lon":29.556716877050285,"lat":30.84469593123848,"ele":81},{"lon":29.55660209996625,"lat":30.844846397860575,"ele":79},{"lon":29.55648732288221,"lat":30.844996864482667,"ele":76},{"lon":29.556372545798173,"lat":30.845147331104762,"ele":73},{"lon":29.556257768714133,"lat":30.845297797726854,"ele":71},{"lon":29.556142991630097,"lat":30.84544826434895,"ele":69},{"lon":29.556028214546057,"lat":30.84559873097104,"ele":68},{"lon":29.55591343746202,"lat":30.845749197593136,"ele":68},{"lon":29.55579866037798,"lat":30.845899664215228,"ele":70},{"lon":29.555683883293945,"lat":30.846050130837323,"ele":73},{"lon":29.555569106209905,"lat":30.846200597459415,"ele":77},{"lon":29.55545432912587,"lat":30.84635106408151,"ele":79},{"lon":29.55533955204183,"lat":30.846501530703602,"ele":79},{"lon":29.555224774957793,"lat":30.846651997325697,"ele":79},{"lon":29.555109997873753,"lat":30.84680246394779,"ele":76},{"lon":29.554995220789717,"lat":30.846952930569884,"ele":71},{"lon":29.554880443705677,"lat":30.847103397191976,"ele":71},{"lon":29.55476566662164,"lat":30.84725386381407,"ele":70},{"lon":29.5546508895376,"lat":30.847404330436163,"ele":71},{"lon":29.554536112453565,"lat":30.847554797058258,"ele":70},{"lon":29.554421335369526,"lat":30.84770526368035,"ele":70},{"lon":29.55430655828549,"lat":30.847855730302445,"ele":68},{"lon":29.55419178120145,"lat":30.848006196924537,"ele":67},{"lon":29.554077004117413,"lat":30.848156663546632,"ele":67},{"lon":29.553962227033374,"lat":30.848307130168724,"ele":67},{"lon":29.553847449949338,"lat":30.84845759679082,"ele":69},{"lon":29.553732672865298,"lat":30.84860806341291,"ele":70},{"lon":29.55361789578126,"lat":30.848758530035006,"ele":69},{"lon":29.553503118697222,"lat":30.848908996657098,"ele":68},{"lon":29.553388341613186,"lat":30.849059463279193,"ele":67},{"lon":29.553273564529146,"lat":30.849209929901285,"ele":68},{"lon":29.55315878744511,"lat":30.84936039652338,"ele":68},{"lon":29.5531314,"lat":30.8493963,"ele":68}];

   */

  constructor(private mapService: MapService) { }

  ngOnInit() {
    this.defaultCall();

  }
  defaultCall() {
    const that = this;
    setTimeout(function(){
      that.mapService.getNearbyCars(function(value){
        if (value && value.thisCar && value.thisCar.lng && value.thisCar.lat) {
          that.lng  = value.thisCar.lng;
          that.lat = value.thisCar.lat;
          that.accidentFlag = value.thisCar.accidentStatus;
          that.accidentDetected.emit(that.accidentFlag);  
        }
        // if(that.iter<that.simulationArray.length){
        //   that.otherCarMarkers[3] =({
        //     lat:that.simulationArray[that.iter].lat,
        //     lng:that.simulationArray[that.iter].lon,
        //     i:that.iter
        //   })
        //   that.iter++;
        // }
      });
     // that.otherCarMarkers[0].lat += 0.0001;
      that.defaultCall();
    }, 1500);
  }

}
