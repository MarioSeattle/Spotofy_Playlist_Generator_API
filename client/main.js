import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

//Create event search

Template.search.events({
    'keyup #searchArtist':function(){

        let searchText = event.target.value;

        console.log(searchText);

    }

});