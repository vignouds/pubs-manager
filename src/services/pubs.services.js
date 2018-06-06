import pubs from "../mocks/pubs.json";
import moment from "moment";
import {Beer} from "../classes/Beer";
import {Owner} from "../classes/Owner";
import {Pub} from "../classes/Pub";
import {OpenHours} from "../classes/OpenHours";
export default {
    listerPubs,
    listerPubsOuverts,
    insererPub
  }

function convertIntoPub() {
  var pubsArray = [];
  pubs.forEach(pub => {
    var owner = new Owner(pub.owner.firstName, pub.owner.lastName, pub.owner.mail);
    var bieres = [];

    pub.beers.forEach(beer => {
      let biere = new Beer(beer.type, beer.name);
      bieres.push(biere);
    });

    var openHours = new OpenHours(pub.openHours.start, pub.openHours.end);

    var bar = new Pub(pub.name, owner, pub.openDays, openHours, bieres);

    pubsArray.push(bar);
  });
  return pubsArray;
}

function writePub(pub) {
  let texte = `Le pub ${pub.name} appartient à ${pub.owner.firstName} ${pub.owner.lastName} `;
  let li = document.createElement("li");
  li.innerHTML = texte;
  document.getElementById('liste').appendChild(li);
}

function listerPubs() {
  convertIntoPub().forEach(function(pub){
    writePub(pub);
  })
}

function listerPubsOuverts() {
  // localStorage.clear();
  if (localStorage.length == 0) {
    convertIntoPub().forEach(function(pub){
      if (pub.openDays.includes(moment().format("dddd"))) {
        writePub(pub);
      }
    })
    localStorage.setItem("pubs", JSON.stringify(convertIntoPub()));
  }
  else {
    for (var i = 0; i < localStorage.length; i++) {
      let pubObjet = JSON.parse(localStorage.getItem(localStorage.key(i)));
      writePub(pubObjet);
    }
  }
}

function insererPub() {
  var nom = document.getElementById('nom').value;
  var prenomProp = document.getElementById('prenomProp').value;
  var nomProp = document.getElementById('nomProp').value;
  var mailProp = document.getElementById('mailProp').value;
  var prop = new Owner(prenomProp, nomProp, mailProp);
  var newPub = new Pub(nom, prop);
  myStorage.setItem('newPub', JSON.stringify(newPub));
}
