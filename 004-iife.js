// ERROR: function(){};
;(function(){ console.log("==> not executed"); }); //OK - no errors
   ;(function(param){ console.log("==> executed", param); })("param from outside"); //OK and executed
/* ^
   |
   this helps to not have an sysntax error

    */