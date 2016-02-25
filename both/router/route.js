/**
 * Created by Bukhtawar Elahi on 2/23/16.
 */
FlowRouter.route(['/','/home'],{
    action:function() {
        FlowLayout.render('layout', {sidebar: 'sidebar', main: 'home', cart: 'cart'})
    }
});

FlowRouter.route('/admin',{
    action:function(){
        if(Roles.userIsInRole(Meteor.userId(),'admin')){
            FlowLayout.render('layout', {sidebar: '', main: 'admin', cart: ''})
        }
        else{
            FlowLayout.render('layout', {sidebar: '', main: 'unauthorized', cart: ''})
        }
    }
});

FlowRouter.route('/register',{
    action:function() {
        FlowLayout.render('layout', {sidebar: '', main: 'register', cart: ''})    }
});
FlowRouter.route('/signin',{
    action:function() {
        FlowLayout.render('layout', {sidebar: '', main: 'signin', cart: ''})
    }
});

FlowRouter.route('/profile',{
    action:function(){
         FlowLayout.render('layout', {sidebar: '', main: 'profile', cart: ''})
    }
});

FlowRouter.route('/signout',{
    action:function() {
        Meteor.logout(function(error){
            if(!error){
                FlowRouter.go('/signin');
            }
        });
    }
});

FlowRouter.route('/checkout',{
    action:function() {
        FlowLayout.render('layout', {sidebar: '', main: 'checkout', cart: ''})
    }
});
FlowRouter.route('/category/:categoryName', {
    subscriptions:function(params){
        console.log("SUBSCRIBE",params);
        //make sure subsc exists
    },
    triggersEnter:function(params){
        console.log("ENTER",params);
        //check user is logged in or not
    },
    triggersExit:function(params){
        console.log("EXIT",params);
    },
    action:function (){
        FlowLayout.render('layout',{sidebar:'sidebar',main:'category',cart:'cart'});
    }
});