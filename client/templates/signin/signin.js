/**
 * Created by Bukhtawar on 2/24/16.
 */
Template.signin.events({
   'submit form':function(event){
       event.preventDefault();
       var email=event.target.email.value;
       var password=event.target.password.value;
       Meteor.loginWithPassword(email,password);
       FlowRouter.go('/');
   }

});