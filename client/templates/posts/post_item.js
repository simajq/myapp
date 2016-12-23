/**
 * Created by jason.sima on 2016/12/22.
 */
Template.postItem.helpers({
   domain: function() {
       var a = document.createElement('a');
       a.href = this.url;
       return a.hostname;
   }
});