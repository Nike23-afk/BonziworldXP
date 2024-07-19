//trollbox21986
const names = ["Dee From PBS Kids","Diogo","Pope Savior Moderator","Ryker","Bladoclete","Anti-Ogolding","KlaskyCsupoFan3753","Zander Charles Stansell","IUS","Numbers Arena","Tasos, expunged and bambi","Pizza Boi The Plushie"];
//,"HACKED BY PWNSEC","PWNSEC RAID #9","PWNSEC RAID #4","PWNSEC RAID #5","HACKED BY PWNSEC!","PWNSEC RAID","PWNSECBOT (RAID)","PWNSEC FLOOD","C2X'S FLOODBOT"

document.getElementById("nickname").value = names[Math.floor(Math.random() * names.length)];
document.getElementById("login_button").click();


var menu = document.createElement("button");
document.getElementById("content").appendChild(menu);
var manualstop = false;

function send(txt){
   document.getElementById("chatbar").value = txt;
   document.getElementById('send_button').dispatchEvent(new MouseEvent('click'));
}

function Id(length) {
   const characters = 'ABCD EFGHI JKLM NOPQRS TUVWXYZa bcde fghijklm nopqrs tuvwxyz012 3456 789!@#$% ^&*()_+ -=[]{}|;:,.<>?';
   let result = '';   
   for (let i = 0; i < length; i++) { 
      let comb = characters.charAt(Math.floor(Math.random() * characters.length));

      result += comb;
   }
   return result;
}
var stopall = false;
setTimeout(() => {

   menu.style.backgroundColor = "white";
   menu.style.position = "absolute";
   menu.style.left = "80%";
   menu.innerHTML = "<button id='run'>Run</button><br><br><input type='number' id='rate' min='1' max='10'></input><br><h4>Rate Of Spam (1 is fast, 5 is medium, more is slower)</h4><br><button id='stop'>Stop Spam</button>";
  document.getElementById("run").onclick = () => {
    let txt = Id(50);
    let ratedif = Math.floor(Math.random() * 501)
    let rate1 = document.getElementById("rate").value;
    let rate2 = parseInt(rate1);
    let rate = rate2 * 1000 + ratedif;
    setInterval(() => {
      if(stopall == false){
      txt = Id(Math.floor(Math.random() * (70 - 30 + 1) ) + 30);

      send(txt + Id(Math.floor(Math.random() * 31)));
      }
    },rate);
  }
   document.getElementById("stop").onclick = () => {
       if(manualstop == false){
          stopall = true;
          manualstop = true;
          console.log("manualstop:" + manualstop);
          document.getElementById("stop").innerHTML = "Continue Spam";
          return;
       } else {
         stopall = false;
         manualstop = false;
         console.log("manualstop:" + manualstop);
         document.getElementById("stop").innerHTML = "Stop Spam";
       }
    }
},600)

var timed =  Math.floor(Math.random() * (17 - 8 + 1) ) + 8;
var time = timed * 1000;
setInterval(() => {
   if(manualstop == false){
   stopall = true;
   timed = Math.floor(Math.random() * (17 - 8 + 1) ) + 8;
   time = timed * 1000;
   let chanc = Math.floor(Math.random() * 20);
   if(chanc > 14){
   send("/color");}
   setTimeout(() => {stopall = false},4000)
   }
},time)

