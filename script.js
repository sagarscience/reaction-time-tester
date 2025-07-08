
      var start = new Date().getTime();
      function getRandomColor() {
        var letters = "0123456789ABCDEF";
        var color = "#";
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
      function move() {
        var left;
        var top;
        var wh;
        left = Math.random() * 200;
        top = top = Math.random() * (window.innerHeight - 300) + 150;
        // ensures box appears at least 150px below top

        wh = Math.random() * 300 + 100;
        document.getElementById("box").style.left = left + "px";
        document.getElementById("box").style.top = top + "px";
        document.getElementById("box").style.width = wh + "px";
        document.getElementById("box").style.height = wh + "px";
        document.getElementById("box").style.display = "block";
        document.getElementById("box").style.backgroundColor = getRandomColor();
        start = new Date().getTime();
      }
      move();
      document.getElementById("box").onclick = () => {
        document.getElementById("box").style.display = "none";
        var end = new Date().getTime();
        var timeTaken = (end - start) / 1000;
        document.getElementById("reactionTime").innerHTML =
          "Reaction Time: -- " + timeTaken + " seconds";
        move();
      };