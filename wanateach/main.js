var ts, tmrw, countdown, now, timeleft, days, hours, minutes, seconds, code;

function lkey(event) {
   code = event.code;
   if (event.ctrlKey) {
      switch (code) {
         case "KeyW":
            event.preventDefault();
            document.getElementById('subtext').innerHTML = "lmao ha u thought";
            setTimeout(function() {
               document.getElementById('subtext').innerHTML = "Donate $300 to the Marisa Escamilla fund within";
            }, 1500);
            break;
         default:
            event.preventDefault();
            break;
      }
   }
}

function shuffle() {
   document.getElementById('alert').style.animationName = "fadeout";
   document.getElementById('alert').style.animationDuration = "4s";
   setTimeout(function() {
      document.getElementById('alert').innerHTML = '"The next person to say<br>[Jake Paul] gets homework"<br>- Marisa Escamilla';
      document.getElementById('alert').style.animationName = "fadein";
   }, 4000);
}

window.onload = function() {
   document.body.focus();
   document.getElementById('info').innerHTML = "or all of your files will commit delete!";
   ts = new Date().getTime();
   tmrw = ts + 86400000;
   countdown = setInterval(function() {
      now = new Date().getTime();
      timeleft = tmrw - now;
      days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
      hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
      seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
      document.getElementById('header').innerHTML = days + ":" + hours + ":" + minutes + ":" + seconds;
      if (timeleft < 0) {
         clearInterval(countdown);
         document.getElementById('header').innerHTML = "All of your files just commited delete!";
      }
   }, 500);
};