import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

//Artist helper function
Template.artists.helpers({
    artists(){
        return Session.get('artists');
    }
});


//Create event search
Template.search.events({
    'keyup #searchArtists':function(){
        let searchText = event.target.value;

        if(searchText == ''){
            Session.set('artists', null);



        }

        Meteor.call('searchArtists', searchText, (err, artists) => {
            if(err){
                console.log(err);
            } else {
                console.log(artists);
                Session.set('artists', artists);
            }
        });
    }
});