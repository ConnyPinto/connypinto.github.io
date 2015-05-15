$(document).ready(function(){
   
      var generator= Math.floor(Math.random()*25);
      
      console.log(generator)
      
      $(".words").eq(generator).show();
  
  $("body").click(function(){

      $(".words").hide()
    
      var generator= Math.floor(Math.random()*25);
  
      console.log(generator)
  
      $(".words").eq(generator).show();
    
  });

});


