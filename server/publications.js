/**
 * Created by jason.sima on 2016/12/22.
 */
Meteor.publish('posts', function () {
    return Posts.find();
});