/*
 * modified from http://www.voidware.com/moon_phase.htm
 */

function getMoonPhase(year, month, day)
{
    var c = e = jd = b = 0;

    if (month < 3) {
        year--;
        month += 12;
    }

    ++month;

    c = 365.25 * year;

    e = 30.6 * month;

    jd = c + e + day - 694039.09; //jd is total days elapsed

    jd /= 29.5305882; //divide by the moon cycle

    b = parseInt(jd); //int(jd) -> b, take integer part of jd

    jd -= b; //subtract integer part to leave fractional part of original jd

    b = Math.round(jd * 8); //scale fraction from 0-8 and round

    if (b >= 8 ) {
        b = 0; //0 and 8 are the same so turn 8 into 0
    }

    // 0 => New Moon
    // 1 => Waxing Crescent Moon
    // 2 => Quarter Moon
    // 3 => Waxing Gibbous Moon
    // 4 => Full Moon
    // 5 => Waning Gibbous Moon
    // 6 => Last Quarter Moon
    // 7 => Waning Crescent Moon

    return b;
}

function getMoonPhaseDescription(moonPhase){

var description;

switch(moonPhase) {

  case 0:
    description = "New Moon";
    break;
  case 1:
    description = "Waxing Crescent Moon";
    break;
  case 2:
    description = "Quarter Moon";
    break;
  case 3:
    description = "Waxing Gibbous Moon";
    break;
  case 4:
    description = "Full Moon";
    break;
  case 5:
    description = "Waning Gibbous Moon";
    break;
  case 6:
    description = "Last Quarter Moon";
    break;
  case 7:
    description = "Waning Crescent Moon";
    break;

}


return description;

}


var currentDate = new Date();
var day = currentDate.getDate();
var month = currentDate.getMonth() + 1;
var year = currentDate.getFullYear();

//console.log(day + "/" + month + "/" + year);
//console.log(getMoonPhase(year, month, day));
//var moonPhase = document.getElementById("dc_moonphase")
//moonPhase.innerHTML = "<h2>Current Moon Phase </h2><h3>" + getMoonPhaseDescription(getMoonPhase(year, month, day)) + "</h3>";
