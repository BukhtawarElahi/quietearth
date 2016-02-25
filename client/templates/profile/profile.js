/**
 * Created by bukhtawar on 2/24/16.
 */
Template.profile.events({
    'change .myFileInput':function(event,tmpl){
        FS.Utility.eachFile(event,function(file){
            Images.insert(file,function(error,fileObj){
                if(!error){
                    var userId = Meteor.userId();
                    var imageurl = {
                        'profile.avatar':'/cfs/files/images/' + fileObj._id
                    };
                    setTimeout(function(){
                        Meteor.users.update(userId,{$set:imageurl});
                    },2000);
                }
            })
        })
    }
});