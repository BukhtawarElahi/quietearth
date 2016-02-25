/**
 * Created by BukhtawarElahi on 2/24/16.
 */
Meteor.startup(function(){
    Accounts.onCreateUser(function (options,user){
        if(!user.profile){
            user.profile={};
        }
        user.profile.firstName=options.firstName;
        user.profile.lastName=options.lastName;
        return user;
    });
    var users=Meteor.users.find().fetch();
    _.forEach(users,function(userData){
        if(userData.emails[0].address==='bukhtawar@gmail.com'){
            Roles.addUsersToRoles(userData,['admin']);
        }

    })

});
