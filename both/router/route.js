/**
 * Created by Bukhtawar Elahi on 2/23/16.
 */
FlowRouter.route(['/','/home'],{
    action:function() {
        console.log("running '/' action to rnder layouts");
        FlowLayout.render('layout', {sidebar: 'sidebar', main: 'home', cart: 'cart'})
    }
});
FlowRouter.route('/register',{
    action:function() {
        console.log("running 'register' action to render layouts");
        FlowLayout.render('layout', {sidebar: '', main: 'register', cart: ''})    }
});
FlowRouter.route('/signin',{
    action:function() {
        console.log("running 'signin' action to rnder layouts");
        FlowLayout.render('layout', {sidebar: '', main: 'signin', cart: ''})
    }
});
FlowRouter.route('/checkout',{
    action:function() {
        console.log("running action checkout to rnder layouts");
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