import './main.html';

import { Template } from 'meteor/templating';

import { APIArticle } from '../imports/APIarticle';

Template.hello.created = function(){
  let self = this;
  this.articleArray = new ReactiveArray();
  window.articleArray = this.articleArray;
  Meteor.call("articleList", function(err,succ){
      if(!err){
          self.articleArray.clear();
          _.each(succ,function(i){
              let apiArticle = new APIArticle(i);
              self.articleArray.push(apiArticle);
          });
      }
  });
};

Template.hello.helpers({
  articleArray() { 
    return Template.instance().articleArray.list(); 
  },
  json(arg) {
    return JSON.parse(arg);
  },
});

setTimeout(() => {
  articleArray.push(new APIArticle({name: 'test adding after timeout'}));
}, 3000);
setTimeout(() => {
  var testInstance = new APIArticle({name:'Test adding another unmodified'});
  articleArray.push(testInstance);
  setTimeout(() => {
    testInstance.articleObj.name = "Now I've been modified";
  }, 3000);
}, 5000);