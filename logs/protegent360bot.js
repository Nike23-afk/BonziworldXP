document.getElementById("nickname").value = "Protegent Antivirus";
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
const protegentAds = [
  "Stay secure with Protegent Antivirus. Your data's best friend!",
  "Protect your digital life with Protegent. Safety first!",
  "Protegent: Your shield against cyber threats.",
  "Keep your PC safe with Protegent. Always reliable.",
  "Protegent: Antivirus with built-in data recovery.",
  "Get Protegent and say goodbye to malware!",
  "Protegent Total Security: More than just an antivirus.",
  "Feel safe online with Protegent. Your trusted partner.",
  "Protegent: Where security meets convenience.",
  "Guard your files with Protegent. Stay protected.",
  "Protegent Antivirus: Smart security for smart users.",
  "Your data deserves Protegent. Ultimate protection.",
  "Secure your PC with Protegent Antivirus. Peace of mind.",
  "Protegent: Advanced security for your digital world.",
  "Keep viruses at bay with Protegent. Stay safe.",
  "Protegent Total Security: Complete protection for you.",
  "Safeguard your data with Protegent Antivirus.",
  "Protegent: Because your security matters.",
  "Trust Protegent for top-notch antivirus protection.",
  "Protegent: Your cyber shield.",
  "https://www.youtube.com/watch?v=JpkUcDV_T8Y",
  "Protegent: Security you can rely on.",
  "Choose Protegent for unbeatable protection.",
  "Protegent: The future of antivirus.",
  "Stay ahead of threats with Protegent.",
  "https://www.youtube.com/watch?v=PIp06sdFHLM",
  "Protegent: Because you deserve the best security.",
  "Get Protegent for ultimate peace of mind.",
  "Protegent: Your data's guardian angel.",
  "Protect and recover with Protegent.",
  "Protegent Total Security: The smart choice.",
  "Secure your world with Protegent.",
  "Trust Protegent for comprehensive security.",
  "Protegent: Advanced protection for your PC.",
  "Your safety net: Protegent Antivirus.",
  "Protegent: Where protection meets innovation.",
  "Stay protected with Protegent. Always.",
  "Protegent Total Security: Your all-in-one solution.",
  "Guard your digital life with Protegent.",
  "Protegent: Your first line of defense.",
  "Trust Protegent for superior security.",
  "Protegent Antivirus: Because safety is paramount.",
  "Choose Protegent for top-tier protection.",
  "Protegent: Your reliable security partner.",
  "Stay secure online with Protegent.",
  "Protegent: The best defense against cyber threats.",
  "Protect your PC with Protegent Total Security.",
  "Protegent: Security that never sleeps.",
  "Keep your data safe with Protegent."
];


var stopall = false;
setTimeout(() => {

   menu.style.backgroundColor = "white";
   menu.style.position = "absolute";
   menu.style.left = "80%";
   menu.innerHTML = "<button id='run'>Run</button><br><br><input type='number' id='rate' min='1' max='10'></input><br><h4>Rate Of Spam (1 is fast, 5 is medium, more is slower)</h4><br><button id='stop'>Stop Spam</button>";
  document.getElementById("run").onclick = () => {
    let txt = protegentAds[Math.floor(Math.random() * protegentAds.length)];
    let ratedif = Math.floor(Math.random() * 501)
    let rate1 = document.getElementById("rate").value;
    let rate2 = parseInt(rate1);
    let rate = rate2 * 1000 + ratedif;
    setInterval(() => {
      if(stopall == false){
      txt = protegentAds[Math.floor(Math.random() * protegentAds.length)];

      send(txt);
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

