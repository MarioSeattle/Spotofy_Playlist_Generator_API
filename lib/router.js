Router.configure({
    layoutTemplate: 'layout'

});

Router.map(function(){
    this.route('/', function(){
        this.render('search');
    });

});

