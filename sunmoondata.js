function getMoonPhaseImage(moonPhase) {

var description;

switch(moonPhase) {

  case "New Moon":
    description = "newmoon.png";
    break;
  case "Waxing Crescent":
    description = "waxingcrescent.png";
    break;
  case "First Quarter":
    description = "firstquarter.png";
    break;
  case "Waxing Gibbous":
    description = "waxinggibbous.png";
    break;
  case "Full Moon":
    description = "fullmoon.png";
    break;
  case "Waning Gibbous":
    description = "waninggibbous.png";
    break;
  case "Last Quarter":
    description = "lastquarter.png";
    break;
  case "Waning Crescent":
    description = "waningcrescent.png";
    break;

  }

return description;

}


function convertPhen(phen) {

  var description;

  switch(phen) {

    case "BC":
      description = "Begin Civil Twilight";
      break;
    case "R":
      description = "Rise";
      break;
    case "U":
      description = "Upper Transit";
      break;
    case "S":
      description = "Set";
      break;
    case "EC":
      description = "End Civil Twilight";
      break;

  }

  return description;

}

function showMoonPhase(moonjsonObj) {

  var moonphase;
  var closestmoonphase = moonjsonObj['closestphase'].phase;
  var curmoonphase = moonjsonObj['curphase'];

  //console.log(curmoonphase, closestmoonphase);
  if (curmoonphase === undefined) {
    moonphase = closestmoonphase;
    }
    else {
      moonphase = curmoonphase;
    }
  //console.log(moonphase);

  var moonPhase_p = document.getElementById("dc_moonphase")
  moonPhase_p.innerHTML = "<h2>Current Moon Phase </h2><h3>" + moonphase + "</h3>";

  var moonPhaseImage = document.getElementById("dc_moonphaseimage")
  moonPhaseImage.innerHTML = "<center><img class=mp src=images/moon/" + getMoonPhaseImage(moonphase) + " width=150 height=150></center>"


}

function showMoonData(moonjsonObj) {
  var moondata = moonjsonObj['moondata'];
  var moondata_p = document.getElementById("dc_moondata");
  var moondatatable = '<table class="w3-table-all">';

  for (var i = 0; i < moondata.length; i++) {

    //sundata_p.innerHTML(sundata[i]);
    moondatatable = moondatatable + "<tr><td>";
    moondatatable = moondatatable + convertPhen(moondata[i].phen) + "</td>";
    moondatatable = moondatatable + "<td>" + moondata[i].time;
    moondatatable = moondatatable + "</td></tr>";
    }

  moondatatable = moondatatable + "</table>";
  moondata_p.innerHTML= moondatatable;
}

function showSunData(sunjsonObj) {
  var sundata = sunjsonObj['sundata'];
  var sundata_p = document.getElementById("dc_sundata");
  var sundatatable = '<table class="w3-table-all">';

  for (var i = 0; i < sundata.length; i++) {

    //sundata_p.innerHTML(sundata[i]);
    sundatatable = sundatatable + "<tr><td>";
    sundatatable = sundatatable + convertPhen(sundata[i].phen) + "</td>";
    sundatatable = sundatatable + "<td>" + sundata[i].time;
    sundatatable = sundatatable + "</td></tr>";
    }

  sundatatable = sundatatable + "</table>";
  sundata_p.innerHTML= sundatatable;

  }



var requestURL = 'http://api.usno.navy.mil/rstt/oneday?date=today&coords=33.4244S,151.343994E&tz=10';

var todaySunMoonData;

var request1 = new XMLHttpRequest();
request1.open('GET', requestURL);
request1.responseType = 'json';
request1.send();

request1.onload = function(){
    todaySunMoonData = request1.response;
    //console.log(allEvents);
    showMoonData(todaySunMoonData);
    showMoonPhase(todaySunMoonData);
    showSunData(todaySunMoonData);


}
