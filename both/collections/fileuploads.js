/**
 * Created by root on 2/24/16.
 */
var imageStorage = new FS.Store.GridFS("images");
Images = new FS.Collection("images",{
    stores:[imageStorage]
});