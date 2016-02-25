/**
 * Created by Bukhtawar on 2/24/16.
 */

Template.register.events({
    'submit form':function(event){
        var email=event.target.email.value;
        var password=event.target.password.value;
        var firstName=event.target.firstName.value;
        var lastName=event.target.lastName.value;

        Accounts.createUser({
            email:email,
            password:password,
            firstName:firstName,
            lastName:lastName
        })


    }
});