({
   onLoad : function(component,helper){   
  var cntrlAction = component.get("c.methodname");   
 cntrlAction.setCallback(this,function(response){   
    
  if(component.isValid() && response.getState() == "SUCCESS"){   
    
 }   
  });   
     
   $A.enqueueAction(cntrlAction);   
     
  /*    var action = component.get("c.CntrlMethodName");   
  action.setParams({ firstName : component.get("v.attributename") });   
   action.setCallback(this, function(response) {   
  var state = response.getState();   
  if (state === "SUCCESS") {   
   component.set("v.attributename",response.getReturnValue());      
     
   }   
 else if (state === "INCOMPLETE") {   
   }   
   else if (state === "ERROR") {   
   var errors = response.getError();   
   }   
   });   
   $A.enqueueAction(action); */   
   },   
    
  submitAction : function(component,helper){ 
   var action = component.get("c.methodname");   
   action.setParams({   
   "param1": component.get("v.auraid")   
   });   
   action.setCallback(this,function(response){   
   if(component.isValid() && response.getState() === "SUCCESS"){   
   
   }else{ }
   });   
   if(!$A.util.isEmpty(component.find("auraid").get("v.value")) &&   
   (!$A.util.isEmpty(component.find("auraid").get("v.value"))))   
   {   
   $A.enqueueAction(action);   
   }
   else{
   if($A.util.isEmpty(component.find("auraid").get("v.value")))   
   { 
   var cmtError = $A.get("$Label.c.LTNG_TXN_Comments_Required_Error");   
   component.find("comments").set("v.errors",[{message:cmtError}]);   
   }
   else{   
   component.find("comments").set("v.errors", null)}   
   }
   },   
     
    
    
  })