$(document).ready(function(){
  function start(){
    var beginTime = new Date().getTime();

    // Update the count every 0,01 second
    var x = setInterval(function() {
      var now = new Date().getTime();
      var distance = now - beginTime;
      
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      var centiseconds = Math.floor((distance % 1000) / 10);

      document.getElementById("minute").innerHTML = minutes;
      document.getElementById("second").innerHTML = seconds;
      document.getElementById("centi").innerHTML = centiseconds;
    });
    type = 1;
    $(document).keydown(function(e){
      clearInterval(x);
    });
  };
  function reset(){
      document.getElementById("minute").innerHTML = 0;
      document.getElementById("second").innerHTML = 0;
      document.getElementById("centi").innerHTML = 0;
  };
  var type = 0;
  $(document).keyup(function(e){
    if ((e.keyCode == 32)&&(type == 0))
      start();
  });
  $(document).keypress(function(e){
    if (e.keyCode == 13){
      reset();
      type = 0;
    }
  });
});
