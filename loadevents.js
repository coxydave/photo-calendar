


function populateHeader(eventjsonObj) {
  //var myH1 = document.createElement('h1');
  //myH1.textContent = jsonObj['squadName'];
  //header.appendChild(myH1);

  //var myPara = document.createElement('p');
  //myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
  //header.appendChild(myPara);
    //console.log("populate headers");
}

function showEvents(eventjsonObj) {
  var events = eventjsonObj['events'];
   	//console.log(events);


  for (var i = 0; i < events.length; i++) {

	//var listItem = document.createElement('li');
	//listItem.textContent = events[i].name;
	//console.log(listItem);
	//eventList.appendChild(listItem);

	var event = document.createElement('article');
	var eventHeader = document.createElement('div');
  var eventName = document.createElement('h2');
  var eventDetail = document.createElement('div');
  var eventURL = document.createElement('a');
	var eventDate = document.createElement('p');
	var eventDescription = document.createElement('p');

    //var myArticle = document.createElement('article');
    //var myH2 = document.createElement('h2');
    //var myPara1 = document.createElement('p');
    //var myPara2 = document.createElement('p');
    //var myPara3 = document.createElement('p');
    //var myList = document.createElement('ul');

    eventHeader.className = "w3-container w3-gray";
    eventDetail.className = "w3-container w3-light-gray w3-border";
    eventName.textContent = events[i].name;
    eventURL.setAttribute("href", events[i].url);
	  eventURL.innerHTML = "Event Site";
    eventURL.className = "w3-button  w3-round-large w3-gray";
    eventDate.textContent = events[i].startdate +  " - " + events[i].enddate;
    eventDescription.textContent = events[i].description;
    eventDescription.className = "eventDescription";

    //var superPowers = heroes[i].powers;
    //for (var j = 0; j < superPowers.length; j++) {
    //  var listItem = document.createElement('li');
    // listItem.textContent = superPowers[j];
    //  myList.appendChild(listItem);

    event.className = "w3-container"
    eventHeader.appendChild(eventName);
    eventDetail.appendChild(eventDate);
	  eventDetail.appendChild(eventDescription);
    eventDetail.appendChild(eventURL);
    eventDetail.appendChild(document.createElement('p'));

    event.appendChild(eventHeader);
	  event.appendChild(eventDetail);

    section.appendChild(event);
    section.appendChild(document.createElement('br'));
    }


  }

var header = document.querySelector('header');
var section = document.querySelector('section');

var requestURL = 'http://127.0.0.3/get_events_api2.php';

var allEvents;

var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function(){
    allEvents = request.response;
    //console.log(allEvents);
    populateHeader(allEvents);
    showEvents(allEvents);

}
