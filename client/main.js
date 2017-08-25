import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

//Create event search
Template.search.events({
    'keyup #searchArtists':function(){
        let searchText = event.target.value;
        Meteor.call('searchArtists', searchText, (err, artists) => {
            if(err){
                console.log(err);
            } else {
                console.log(artists);
            }
        });
    }
});