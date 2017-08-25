import { Meteor } from 'meteor/meteor';

Meteor.methods({
    "searchArtists"(searchText){
        const result = HTTP.call('GET', 'https://api.spotify.com/v1/search?query='+searchText+'&offset=0&limit=20&type=artist&market=US');
        return result.data.artists.items;
    }
});