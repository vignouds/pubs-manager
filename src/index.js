import pubService from "./services/pubs.services"

pubService.listerPubsOuverts();
document.getElementById('monBouton').addEventListener("click", function() {
  pubService.insererPub();
});
