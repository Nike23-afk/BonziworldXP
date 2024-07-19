

function send(txt){
   document.getElementById("chatbar").value = txt;
   document.getElementById('send_button').dispatchEvent(new MouseEvent('click'));
}

var menu = document.createElement("button");
document.getElementById("content").appendChild(menu);
var msgLoop = "";

menu.style.position = "absolute";
menu.style.left = "80%";
menu.innerHTML = "Countdown";
menu.onclick = () => {
   send("RETARD BOT ARRIVING IN");
   var currentTime = 3;
   var canSend = true;
   setTimeout(() => {
   msgLoop = setInterval(() => {
      if(currentTime == 0){
         canSend = false;
         return;
      }
      if(canSend == true){send(currentTime); currentTime--;}
   },1100)
   },2000);
};







function send(txt){
   document.getElementById("chatbar").value = txt;
   document.getElementById('send_button').dispatchEvent(new MouseEvent('click'));
}

setInterval(() => {},10000)