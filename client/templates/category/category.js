/**
 * Created by Bukhtawar Elahi on 2/24/16.
 */
Template.category.helpers({
    categoryName:function(){
        return FlowRouter.getParam('categoryName');
    }
});
