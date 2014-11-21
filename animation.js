<html>
<body>
  <canvas id="the_canvas" width="400" height="400"></canvas>
  <script>
    var canvas = document.getElementById('the_canvas');
    var ctx = canvas.getContext('2d');
    
    var x = 0;
    
    var draw = function() {
    	ctx.fillStyle = "red";
    	ctx.fillRect (x, 10, 55, 50);
    	x++;
	};	
    setInterval(draw, 20);

  </script>
</body>
</html>