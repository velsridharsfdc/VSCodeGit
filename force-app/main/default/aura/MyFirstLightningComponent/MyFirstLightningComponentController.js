({
 doInit: function(component,event,helper) {   

  //Initialize component   
   helper.onLoad(component,helper);   
  },   
    
 submit: function(component,event,helper) {
  helper.submitAction(component,helper);
  },   
   
 })