

var socket = io(location.href.substring(0, location.href.indexOf("/o")));
var usersPublic = {};
var bonzis = {};
var adElement = "#ap_iframe";

$(function() {
  $(window).load(updateAds);
  $(window).resize(updateAds);
  $('body').on('DOMNodeInserted', adElement, updateAds);
  $('body').on('DOMNodeRemoved', adElement, updateAds);
});


function touchHandler(event){
  var touches = event.changedTouches,first = touches[0],type = "";
  switch(event.type){
    case "touchstart": type = "mousedown"; break;
    case "touchmove":  type = "mousemove"; break;        
    case "touchend":   type = "mouseup";   break;
    default:           return;
  }
  var simulated = document.createEvent("MouseEvent");
  simulated.initMouseEvent(type, true, true, window, 1, first.screenX, first.screenY, first.clientX, first.clientY, false, false, false, false, 0, null);
  first.target.dispatchEvent(simulated);
}

$(window).load(function(){
  $("#login_card").show();
  $("#login_load").hide();

  loadQueue.loadManifest([
    {id: "bonziBlack", src:"./img/bonzi/black.png"},
    {id: "bonziBlue", src:"./img/bonzi/blue.png"},
    {id: "bonziBrown", src:"./img/bonzi/brown.png"},
    {id: "bonziGreen", src:"./img/bonzi/green.png"},
    {id: "bonziPurple", src:"./img/bonzi/purple.png"},
    {id: "bonziRed", src:"./img/bonzi/red.png"},
    {id: "bonziPink", src:"./img/bonzi/pink.png"},
    {id: "bonziSmile", src:"./img/bonzi/smile.png"},
    {id: "bonziBsn", src:"./img/bonzi/bsn.png"},
    {id: "Peedy", src:"./img/bonzi/peedy.png"},
    {id: "topjej", src:"./img/misc/topjej.png"}
  ]);
  loadQueue.on("fileload", function(e) {
    loadDone.push(e.item.id);
  }, this);
  document.addEventListener("touchstart", touchHandler, true);
  document.addEventListener("touchmove", touchHandler, true);
  document.addEventListener("touchend", touchHandler, true);
  document.addEventListener("touchcancel", touchHandler, true);    
});

var go = false;
var current = "";
var left = 0;
var click = false;
var t = 0;
var keypress = false;
var logtxt = "Welcome to BonziWORLD XP.<br>";
document.onkeydown = () => {
  keypress = true;
}
document.onkeyup = () => {
  setTimeout(() => {keypress = false;},2000);
}
var isOnDiv = false;
var isOnClose = false;
var currentDrag = "";

function app(type){
  if(type == "flash_playerbg"){
    var playr = "";
    function runGame(swf){
      var flashcontext = document.getElementById("flash_con");
      flashcontext.style.width = "550px";
      flashcontext.style.height = "440px";
      flashcontext.style.visibility = "visible";
      flashcontext.innerHTML = "";
      window.RufflePlayer = window.RufflePlayer || {};
      window.RufflePlayer.config = {
        forcescale: true,
        quality: "low"
      }
      var rufl = "";
      var urle = swf;
        var ruffle = window.RufflePlayer.newest();
        var player = ruffle.createPlayer();
        var container = document.getElementById("flash_con");
        player.style.width = "495px";
        player.style.height = "396px";
        container.appendChild(player);
        player.load(urle);
        rufl = window.RufflePlayer.newest();
        playr = player;
      document.getElementById("flash_x").onclick = () => {
        playr.remove();
        document.getElementById("flash_window").style.visibility = "hidden";
        flashcontext.innerHTML = '<a id="flash_it" href="javascript:var a=1;">Icy Tower</a><br><a id="flash_pb" href="javascript:var a=1;">Papas Burgeria</a><br><input type="text" id="swfurl"><button id="cst">Custom Swf URL</button>';
        flashcontext.style.visibility = "hidden";
      }
    }


    document.getElementById("cst").onclick = () => {
      runGame(document.getElementById("swfurl").value);
    }
    document.getElementById("flash_x").onclick = () => {
      document.getElementById("flash_window").style.visibility = "hidden";
      document.getElementById("flash_con").style.visibility = "hidden";
    }
    document.getElementById("flash_player").onclick = () => {
      document.getElementById("flash_window").style.visibility = "visible";
      document.getElementById("flash_con").style.visibility = "visible";
    }
    document.getElementById("flash_it").onclick = () => {
      runGame("icytower.swf");
    }
    document.getElementById("flash_pb").onclick = () => {
      runGame("papasburgeria.swf");
    }
  }

  if(type == "bsn"){
    newWindow("bsn","BSN Messenger","<div id='bsn_cont'></div>","<hr>","80%","80%");
    $("#bsn_cont").innerHTML = "<iframe src='/bsn.html'"
  }
}
function Id(length) {
   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';let result = '';
   for (let i = 0; i < length; i++){
      result += characters.charAt(Math.floor(Math.random() * characters.length));
   }
   return result;
}
function notif(head, body, top, left, type){
  let localId = Id(10);
  console.log("bla")
  $("#content").append("<div class='notif' id='"+localId+"' style='top:"+top+";left:"+left+";'><div class='notif_cont'><h3 class='notif_header'>"+head+"</h3><div class='body'>"+body+"</div></div></div>");
  document.body.onresize = () => {
    var infox = document.getElementById("info_icon").getBoundingClientRect().x - 330 + "px";
    var infoy = $(window).height() - 140 + "px";
    //var infox = info + "px";
    //var infoy = info2 + "px";
    if(type == "info")
    $("#"+localId).css({
       "top": infoy,
       "left": infox
    });
  }
  setTimeout(() => { $("#"+localId).remove(); },6000)
}
function newWindow(type, header, body, buttons, top, left){
  var localId = Id(5);
  var previous = 0;
  var current = 0;

  currentDrag = localId;

  $("#content").append('<div id='+localId+' class="window" style="position: absolute;top: '+top+'; left: '+ left+';"><div style="height:14%;width:85%;" id="'+localId+'_bar"><img id="'+localId+'_x" class="x" src="/img/desktop/x.png"></div><div id="'+localId+'_con" style="position:relative;left: 2%;"><h3 class="header">'+header+'</h3><br>'+body+'</div></div>');

  $("#" + localId + "_con").css({'font-family': 'WinXP'});

  $("#" + localId + "_bar").on("mousedown", () => {
    
  })
  if(buttons == "ok"){
    $("#" + localId).append('<div style="position:relative;top: 29%;left:2%;"><button id="'+localId+'_ok">Ok</button>');
  }
  if(buttons == "ok_cancel"){
    $("#" + localId).append('<div style="position:relative; top: 29%; left:2%; display:flex;"><button id="'+localId+'_ok">Ok</button><button id="'+localId+'_cancel">Cancel</button></div>');
  }
  if(buttons.includes('<')){
    $("#" + localId).append(buttons);
  }
  document.getElementById(localId).style.position = "absolute";
  $("#" + localId + "_x").on("mousedown", function(){
    $("#" + localId).remove();
  });
  $("#" + localId + "_ok").on("mousedown", function(){
    if(type == "options"){
    socket.emit("command",{list: ["color",$("#color").val()]});
    socket.emit("command",{list: ["name",$("#newname").val()]}); 
    }
    $("#" + localId).remove();
  });
  $("#" + localId + "_cancel").on("mousedown", function(){
    $("#" + localId).remove();
  });
  document.addEventListener('mousemove', (e) => {
    left = e.clientX;
    t = e.clientY;
  });
}
function loadTest() {
  $("#login_card").hide();
  $("#login_error").hide();
  $("#login_load").show();

  window.loadTestInterval = rInterval(function() {
    try {socket.emit("login", {
           name: $("#login_name").val(),
           room: $("#login_room").val()
         });

         setup();loadTestInterval.clear();} catch(e) {}
  }, 100);
}
var first = true;
$(function() {
  $("#login_go1").click(() => {
    if(first == true){
      setTimeout(() => {
        var audioe = new Audio("/sound/start.mp3");
        audioe.play();
        first = false;
      },300);
      }
    $("#login_card").html('<input id="login_name" type="text" placeholder="Nickname"><input id="login_room" type="text" placeholder="Room ID (Optional)"><div id="login_go"></div><div id="login_error" style="display:none"></div>');
    $("#login_go").click(loadTest);
  });

  $("#login_room").val(window.location.hash.slice(1));

  $("#login_name, #login_room").keypress(function(e) {
    if(e.which == 13) {
      socket.emit("login", {
        name: $("#login_name").val(),
        room: $("#login_room").val()
      });

      setup();
    }
  });

  socket.on("ban", function(data) {
    $("#page_ban").show();
    $("#ban_reason").html(data.reason);
    $("#ban_end").html(new Date(data.end).toString());
  });

  socket.on("kick", function(data) {
    $("#page_kick").show();
    $("#kick_reason").html(data.reason);
  });

  socket.on("loginFail", function(data) {
    var errorText = {"nameLength": "Name too long.","full": "Room is full.","nameMal": "Nice try. Why would anyone join a room named that anyway?",};
    $("#login_card").show();
    $("#login_load").hide();
    $("#login_error").show().text( "Error: " +errorText[data.reason] +" (" + data.reason + ")");
  });

  socket.on("disconnect", function(data) {
    if (($("#page_ban").css("display") == "none") || ($("#page_kick").css("display") == "none")) {
      newWindow("error","BonziWORLD.exe has encountered an error","<img src='./img/error/logo.png' width='50' height='50'><br>There was an error server side and you are now disconnected. Try and reload the page. If that doesn't work we'll probably be back up Soon™.<a href='#' onclick='window.location.reload()'>Reload?</a><br>","ok","40%","40%");
    }
  });
});
var cfocus = false;
function setup() {
  var clickhandlers = [
    {id: "#my_bonzi", func: () => {
      newWindow('options','My Bonzi Options','<hr><div style="display:flex;"><p>Color: </p><select id="color"><option value="red">Red</option><option value="green">Green</option> <option value="blue">Blue</option><option value="purple">Purple</option><option value="pink">Pink</option><option value="black">Black</option><option value="brown">Brown</option><option value="bsn">BSN Icon</option><option value="peedy">Peedy</option><option value="smile">Smile</option></select></div><div style="display:flex;"><p>Name: </p><input type="text" placeholder="name..." id="newname"></div></div>','ok_cancel','40%','40%'); 
    }},
    {id: "#bonzi_log", func: () => {
      newWindow('bw','Bonzi Log','<hr><div id="log_cont">'+logtxt+'</div>','ok','0%','0%');
    }},
    {id: "#info_icon", func: () => {
      var icon = document.getElementById("info_icon").getBoundingClientRect().x - 310;
      var icon2 = $(window).height() - 140;
      var iconx = icon + "px";
      var icony = icon2 + "px";
      new notif("Welcome to BonziWORLD XP","BonziWORLD XP is in early development/beta. Beware there might be some glitches.", icony, iconx,"info");
    }},
    {id: "#games", func: () => {
      newWindow("games","BonziWORLD Games","<div style='width:300px;height:120px;overflow:scroll'><img src='/img/desktop/flash.png' id='flash_player' width='40' height='40'>Flash Player</img></div>","ok");
      new app("flash_playerbg");
    }},
    {id: "#bsn_messenger", func: () => {
      BSN();
    }},
    {id: "#chat_send", func: sendInput}
  ];
  for(i = 0; i < clickhandlers.length; i++){
    $(clickhandlers[i].id).click(clickhandlers[i].func);
  }

  $("#chat_message").keypress(function(e) {
    if(e.which == 13) sendInput();
  });

  socket.on("room", function(data) {
    $("#room_public").hide();
    $("#room_private").hide();
    if(data.isPublic){
      $("#room_public").show();
      $(".room_id").text("default");
    } else {
      $("#room_private").show();
      $(".room_id").text(data.room);
    }
  });
  socket.on("updateAll", function(data) {
    $("#page_login").hide();
    usersPublic = data.usersPublic;
    usersUpdate();
    BonziHandler.bonzisCheck();
  });
  socket.on("update", function(data) {
    window.usersPublic[data.guid] = data.userPublic;
    usersUpdate();
    BonziHandler.bonzisCheck();
  });
  socket.on("newcolors");

  
  socket.on("msg", function(data) {
    var b = bonzis[data.guid];
    console.log(b);
    b.cancel();
    b.runSingleEvent([{
      type: "text",
      text: data.text
    }]);
    logtxt +="<br>"+ b.userPublic.name + ": " + data.text;
    if(document.getElementById("log_cont")){
    document.getElementById("log_cont").innerHTML = logtxt;}
  });
  socket.on("youtube", function(data) {
    var b = bonzis[data.guid];
    b.cancel();
    b.youtube(data.vid);
  });
  socket.on("fact", function(data) {
    var b = bonzis[data.guid];
    b.rng = new Math.seedrandom(data.rng);
    b.cancel();
    b.fact();
  });
  socket.on("joke", function(data) {
    var b = bonzis[data.guid];
    b.rng = new Math.seedrandom(data.rng);
    b.cancel();
    b.joke();
  });

  socket.on("godmodeobtained", function(data) {
    newWindow("bw",'Godmode Activated','You have been granted godmode! <img src="/img/ban/logo.png"></img>','ok',"40%","40%");
  });

  socket.on("backflip", function(data) {
    var b = bonzis[data.guid];
    b.cancel();
    b.backflip(data.swag);
  });

  socket.on("image", function (data) {
    var b = bonzis[data.guid];
    b.cancel(), 
    b.image(data.img);
  }),
  
  socket.on("video", function (data) {
    var b = bonzis[data.guid];
    b.cancel(), 
    b.video(data.vid);
  }),

  socket.on("clap", function(data) {
    var b = bonzis[data.guid];
    b.cancel();
    b.clap();
  });

  socket.on("asshole", function(data) {
    var b = bonzis[data.guid];
    b.cancel();
    b.asshole(data.target);
  });

  document.getElementById('chat_message').addEventListener('focus', function(){
    var canSend = true;
    if(keypress == true){
      alert("r");
      if(canSend == true){
        socket.emit("command",{list: ["typing","typing"]});}
      canSend = false;
    } else {
      canSend = true;
    }
  });

  socket.on("owo", function(data) {
    var b = bonzis[data.guid];
    b.cancel();
    b.owo(data.target);
  });

  socket.on("triggered", function(data) {
    var b = bonzis[data.guid];
    b.cancel();
    b.runSingleEvent(b.data.event_list_triggered);
  });

  socket.on("linux", function(data) {
    var b = bonzis[data.guid];
    b.cancel();
    b.runSingleEvent(b.data.event_list_linux);
  });

  socket.on("pawn", function(data) {
    var b = bonzis[data.guid];
    b.cancel();
    b.runSingleEvent(b.data.event_list_pawn);
  });

  socket.on("vaporwave", function(data) {
    $("body").addClass("vaporwave");
  });

  socket.on("unvaporwave", function(data) {
    $("body").removeClass("vaporwave");
  });





  /////

  socket.on("leave", function(data) {
    var b = bonzis[data.guid];
    if (typeof b != "undefined") {
      b.exit((function(data) {
        this.deconstruct();
        delete bonzis[data.guid];
        delete usersPublic[data.guid];
        usersUpdate();
      }).bind(b, data));
    }
  });
}
var usersAmt = 0;
var usersKeys = [];
function usersUpdate() {
  usersKeys = Object.keys(usersPublic);
  usersAmt = usersKeys.length;
  $("#users_online").html("Users online: "+usersAmt);
}
function sendInput() {
  var text = $("#chat_message").val();
  $("#chat_message").val("");
  if (text.length > 0) {
    var youtube = youtubeParser(text);
    if (youtube) {
      socket.emit("command", {
        list: ["youtube", youtube]
      });
      return;
    }

    if (text.substring(1,0) == "/") {
      var list = text.substring(1).split(" ");
      socket.emit("command", {
        list: list
      });
    } else {
      socket.emit("msg", {text: text})
    }
  }
}
function loadBonzis(callback) {
  loadQueue.loadManifest([
    {id: "bonziBlack", src:"./img/bonzi/black.png"},
    {id: "bonziBlue", src:"./img/bonzi/blue.png"},
    {id: "bonziBrown", src:"./img/bonzi/brown.png"},
    {id: "bonziGreen", src:"./img/bonzi/green.png"},
    {id: "bonziPurple", src:"./img/bonzi/purple.png"},
    {id: "bonziRed", src:"./img/bonzi/red.png"},
    {id: "bonziPink", src:"./img/bonzi/pink.png"},
    {id: "bonziSmile", src:"./img/bonzi/smile.png"},
    {id: "bonziBsn", src:"./img/bonzi/bsn.png"},
    {id: "Peedy", src:"./img/bonzi/peedy.png"},
    {id: "topjej", src:"./img/misc/topjej.png"}
  ]);
  loadQueue.on("fileload", function(e) {
    loadDone.push(e.item.id);
  }, this);
  if (callback)
    loadQueue.on("complete", callback, this);
}
function updateAds() {
  var height = $(window).height() -
    $(adElement).height();
  var hideAd = height <= 250;
  if (hideAd) height = $(window).height();
  $(adElement)[hideAd ? "hide" : "show"]();
  $("#content").height(height);
}
function range(begin, end) {
  var array = [];
  for (var i = begin; i <= end; i++)
    array.push(i);
  for (var i = begin; i >= end; i--)
    array.push(i);
  return array;
}

function youtubeParser(url){
  var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
  var match = url.match(regExp);
  return (match&&match[7].length==11)? match[7] : false;
}
function rtimeOut(callback,delay){
 var dateNow=Date.now,
     requestAnimation=window.requestAnimationFrame,
     start=dateNow(),
     stop,
     timeoutFunc=function(){
      dateNow()-start<delay?stop||requestAnimation(timeoutFunc):callback();
     };
 requestAnimation(timeoutFunc);
 return{
  clear:function(){stop=1}
 };
}
function rInterval(callback,delay){
 var dateNow=Date.now,
     requestAnimation=window.requestAnimationFrame,
     start=dateNow(),
     stop,
     intervalFunc=function(){
      dateNow()-start<delay||(start+=delay,callback());
      stop||requestAnimation(intervalFunc);
     };
 requestAnimation(intervalFunc);
 return{
  clear:function(){stop=1}
 };
}
if(Array.prototype.equals){
    console.warn("Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code.");}
Array.prototype.equals = function (array) {
    if (!array)
        return false;

    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++) {
        if (this[i] instanceof Array && array[i] instanceof Array) {
            if (!this[i].equals(array[i]))
                return false;       
        }           
        else if (this[i] != array[i]) { 
            return false;   
        }           
    }       
    return true;
};
Object.defineProperty(Array.prototype, "equals", {enumerable: false});
function linkify(text) {
    var regex = /(https?:\/\/([-\w\.]+)+(:\d+)?(\/([\w\/_\.]*(\?\S+)?)?)?)/ig
    return text.replace(regex, "<a href='$1' target='_blank'>$1</a>");
}

var loadQueue = new createjs.LoadQueue();
var loadDone = [];


var BonziData = {
  size: {
    x: 200,
    y: 160
  },
  sprite: {
    frames: {width: 200, height: 160},
    animations: {
      idle: 0,

      surf_across_fwd: [1, 8, "surf_across_still", 1],
      surf_across_still: 9,
      surf_across_back: {
        frames: range(8,1),
        next: "idle",
        speed: 1
      },

      clap_fwd: [10, 12, "clap_still", 1],
      clap_still: [13, 15, "clap_still", 1],
      clap_back: {
        frames: range(12,10),
        next: "idle",
        speed: 1
      },

      surf_intro: [277, 302, "idle", 1],
      surf_away: [16, 38, "gone", 1],

      gone: 39,

      shrug_fwd: [40, 50, "shrug_still", 1],
      shrug_still: 50,
      shrug_back: {
        frames: range(50,40),
        next: "idle",
        speed: 1
      },

      earth_fwd: [51, 57, "earth_still", 1],
      earth_still: [58, 80, "earth_still", 1],
      earth_back: [81, 86, "idle", 1],

      // TODO: ADD BLINK
      look_down_fwd: [87, 90, "look_down_still", 1],
      look_down_still: 91,
      look_down_back: {
        frames: range(90, 87),
        next: "idle",
        speed: 1
      },

      // TODO: ADD BLINK
      lean_left_fwd: [94, 97, "lean_left_still", 1],
      lean_left_still: 98,
      lean_left_back: {
        frames: range(97, 94),
        next: "idle",
        speed: 1
      },

      beat_fwd: [101, 103, "beat_still", 1],
      beat_still: [104, 107, "beat_still", 1],
      beat_back: {
        frames: range(103, 101),
        next: "idle",
        speed: 1
      },

      cool_fwd: [108, 124, "cool_still", 1],
      cool_still: 125,
      cool_back: {
        frames: range(124, 108),
        next: "idle",
        speed: 1
      },

      cool_right_fwd: [126, 128, "cool_right_still", 1],
      cool_right_still: 129,
      cool_right_back: {
        frames: range(128, 126),
        next: "idle",
        speed: 1
      },

      cool_left_fwd: [131, 133, "cool_left_still", 1],
      cool_left_still: 134,
      cool_left_back: {
        frames: range(133, 131),
        next: "cool_still",
        speed: 1
      },

      cool_adjust: {
        frames: [124, 123, 122, 121, 120, 135, 136, 135, 120, 121, 122, 123, 124],
        next: "cool_still",
        speed: 1
      },

      present_fwd: [137, 141, "present_still", 1],
      present_still: 142,
      present_back: {
        frames: range(141, 137),
        next: "idle",
        speed: 1
      },

      look_left_fwd: [143, 145, "look_left_still", 1],
      look_left_still: 146,
      look_left_back: {frames: range(145, 143),next: "idle",speed: 1},
      look_right_fwd: [149, 151, "look_right_still", 1],
      look_right_still: 152,
      look_right_back: {frames: range(151, 149),next: "idle",speed: 1},
      lean_right_fwd: { frames: range(158, 156), next: "lean_right_still", speed: 1} ,
      lean_right_still: 155, 
      lean_right_back: [156, 158, "idle", 1],
      praise_fwd: [159, 163, "praise_still", 1], 
      praise_still: 164, 
      praise_back: { frames: range(163, 159), next: "idle", speed: 1 },
      grin_fwd: [182, 189, "grin_still", 1], 
      grin_still: 184, 
      grin_back: { frames: range(184, 182), next: "idle", speed: 1},

      backflip: [331, 343, "idle", 1]
    }
  },
  to_idle: {
    surf_across_fwd: "surf_across_back",
    surf_across_still: "surf_across_back",

    clap_fwd: "clap_back",
    clap_still: "clap_back",

    shrug_fwd: "shrug_back",
    shrug_still: "shrug_back",

    earth_fwd: "earth_back",
    earth_still: "earth_back",

    look_down_fwd: "look_down_back",
    look_down_still: "look_down_back",

    lean_left_fwd: "lean_left_back",
    lean_left_still: "lean_left_back",

    beat_fwd: "beat_back",
    beat_still: "beat_back",

    cool_fwd: "cool_back",
    cool_still: "cool_back",
    cool_adjust: "cool_back",

    cool_left_fwd: "cool_left_back",
    cool_left_still: "cool_left_back",

    present_fwd: "present_back",
    present_still: "present_back",

    look_left_fwd: "look_left_back",
    look_left_still: "look_left_back",

    look_right_fwd: "look_right_back",
    look_right_still: "look_right_back",

    lean_right_fwd: "lean_right_back",
    lean_right_still: "lean_right_back",

    praise_fwd: "praise_back",
    praise_still: "praise_back",

    grin_fwd: "grin_back",
    grin_still: "grin_back",

    backflip: "idle",

    idle: "idle",
  },
  pass_idle: [
    "gone"
  ],
  event_list_joke_open: [
    [
      { type: "text",text: "Yeah, of course {NAME} wants me to tell a joke."},
      {type: "anim",anim: "praise_fwd",ticks: 15},
      {type: "text",text: '"Haha, look at the stupid {COLOR} monkey telling jokes!" Fuck you. It isn\'t funny.',say: "Hah hah! Look at the stupid {COLOR} monkey telling jokes! Fuck you. It isn't funny."},
      { type: "anim",anim: "praise_back",ticks: 15},
      {type: "text",text: "But I'll do it anyway. Because you want me to. I hope you're happy."
      }
    ],
    [{type: "text",text: "{NAME} used /joke. Whoop-dee-fucking doo."}],
    [{type: "text",text: "HEY YOU IDIOTS ITS TIME FOR A JOKE"}],
    [
      {
        type: "text",
        text: "Wanna hear a joke?"
      },
      {
        type: "text",
        text: "No?"
      },
      {
        type: "text",
        text: "Mute me then. That's your fucking problem."
      }
    ],[
      {
        type: "text",
        text: "Senpai {NAME} wants me to tell a joke."
      }
    ],[
      {
        type: "text",
        text: "Time for whatever horrible fucking jokes the creator of this site wrote."
      }
    ]
  ],
  event_list_joke_mid: [
    [
      {
        type: "text",
        text: "What is easy to get into, but hard to get out of?"
      },
      {
        type: "text",
        text: "Child support!"
      }
    ],[
      {
        type: "text",
        text: "Why do they call HTML HyperText?"
      },
      {
        type: "text",
        text: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
      },
      {
        type: "anim",
        anim: "shrug_back",
        ticks: 15
      },
      {
        type: "text",
        text: "Sorry. I just had an epiphany of my own sad, sad existence."
      }
    ],[
      {
        type: "text",
        text: "Two sausages are in a pan. One looks at the other and says \"Boy it's hot in here!\" and the other sausage says \"Unbelievable! It's a talking sausage!\"",
        say: "Two sausages are in a pan. One looks at the other and says, Boy it's hot in here! and the other sausage says, Unbelievable! It's a talking sausage!"
      },
      {
        type: "anim",
        anim: "shrug_back",
        ticks: 15
      },
      {
        type: "text",
        text: "What were you expecting? A dick joke? You're a sick fuck."
      }
    ],[
      {
        type: "text",
        text: "What is in the middle of Paris?"
      },
      {
        type: "text",
        text: "A giant inflatable buttplug."
      }
    ],[
      {
        type: "text",
        text: "What goes in pink and comes out blue?"
      },
      {
        type: "text",
        text: "Sonic's asshole."
      }
    ],[
      {
        type: "text",
        text: "What type of water won't freeze?"
      },
      {
        type: "text",
        text: "Your mother's."
      }
    ],[
      {
        type: "text",
        text: "Who earns a living by driving their customers away?"
      },
      {
        type: "text",
        text: "Nintendo!"
      }
    ],
    [
      {
        type: "text",
        text: "Which "
      },
      {
        type: "text",
        text: "Nintendo!"
      }
    ],
    [
      {
        type: "text",
        text: "What did the digital clock say to the grandfather clock?"
      },
      {
        type: "text",
        text: "Suck my clock."
      }
    ],[
      {
        type: "text",
        text: "How do you get water in watermelons?"
      },
      {
        type: "text",
        text: "Cum in them."
      }
    ],[
      {
        type: "text",
        text: "Why do we call money bread?"
      },
      {
        type: "text",
        text: "Because we KNEAD it. Haha please send money to my PayPal at nigerianprince99@bonzi.com CHECK OUT OUR MERCH AT bonzi.merch.shop PLS BUY"
      }
    ],[
      {
        type: "text",
        text: "What is a cow that eats grass?"
      },
      {
        type: "text",
        text: "ASS"
      },
      {
        type: "text",
        text: "I'm a comedic genius, I know."
      },
    ]
  ],
  event_list_joke_end: [
    [
      {
        type: "text",
        text: "You know {NAME}, a good friend laughs at your jokes even when they're not so funny."
      },
      {
        type: "text",
        text: "And you fucking suck. Thanks."
      }
    ],
    [
      {
        type: "text",
        text: "That was a good one, if I do say so myself, {NAME}."
      },
      {
        type: "text",
        text: "Right?"
      },
      {
        type: "text",
        text: "Fuck you."
      }
    ],
    [{type: "text",text: "Where do I come up with these? My ass?"}],
    [{type: "text",text: "Do I amuse you, {NAME}? Am I funny? Do I make you laugh?"},{type: "text",text: "pls respond",say: "please respond"}],
    [
      {
        type: "text",
        text: "Maybe I'll keep my day job, {NAME}. Patreon didn't accept me."
      }
    ],
    [
      {
        type: "text",
        text: "Laughter is the best medicine!"
      },
      {
        type: "text",
        text: "Apart from meth."
      }
    ],
    [
      {
        type: "text",
        text: "Don't judge me on my sense of humor alone."
      },
      {
        type: "text",
        text: "Help! I'm being oppressed!"
      }
    ]
  ],

// ============================================================================

  event_list_fact_open: [[{type: "html",text: "Hey kids, it's time for a Fun Fact&reg;!",say: "Hey kids, it's time for a Fun Fact!"}]],

  event_list_fact_mid: [
    [
      {type: "anim",anim: "earth_fwd",ticks: 15},
      {type: "text",text: "Did you know that Uranus is 31,518 miles (50,724 km) in diameter?", say: "Did you know that Yourr Anus is 31 thousand 500 and 18 miles in diameter?",},
      {type: "anim",anim: "earth_back",ticks: 15},
      {type: "anim",anim: "grin_fwd",ticks: 15}
    ], 
    [
      {type: "text",text: "Fun Fact: The skript kiddies of this site no longer exist, because the server is more secure than FUNE'S."},
      {type: "html",text: "<img src='./img/misc/topjej.png'></img>",say: "toppest jej"}
    ]
  ],

  event_list_fact_end: [
    [
      {
        type: "text",
        text: "o gee whilickers wasn't that sure interesting huh"
      }
    ]
  ]
};

class Bonzi {
  constructor(id, userPublic) {
    this.userPublic = userPublic || {
      name: "BonziBUDDY",
      color: "purple",
      speed: 175,
      pitch: 50,
      voice: "en-us"
    };
    this.color = this.userPublic.color;
    this.colorPrev;
    this.data = window.BonziData;
    this.drag = false;
    this.dragged = false;
    this.eventQueue = [];
    this.eventRun = true;
    this.event = null;
    this.willCancel = false;
    this.run = true;
    this.mute = false;

    this.eventTypeToFunc = {
      "anim": "updateAnim",
      "html": "updateText",
      "text": "updateText",
      "idle": "updateIdle",
      "add_random": "updateRandom"
    };

    if (typeof id == "undefined") {
      this.id = Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1) + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    } else this.id = id;

    this.rng = new Math.seedrandom((this.seed || this.id) || Math.random());
    this.selContainer = "#content";
    this.$container	= $(this.selContainer);
    this.$container.append(`
      <div id='bonzi_${this.id}' class='bonzi'>
        <div class='bonzi_name'></div>
          <div class='bonzi_placeholder'></div>
        <div style='display:none' class='bubble'>
          <p class='bubble-content'></p>
        </div>
      </div>
    `);
    this.selElement = "#bonzi_" + this.id;
    this.selDialog = this.selElement + " > .bubble";
    this.selDialogCont = this.selElement + " > .bubble > p";
    this.selNametag = this.selElement + " > .bonzi_name";
    this.selCanvas = this.selElement + " > .bonzi_placeholder";
    $(this.selCanvas)
      .width(this.data.size.x)
      .height(this.data.size.y);
    
    this.$element	= $(this.selElement);
    this.$canvas	= $(this.selCanvas);
    this.$dialog	= $(this.selDialog);
    this.$dialogCont	= $(this.selDialogCont);
    this.$nametag	= $(this.selNametag);

    this.updateName();

    $.data(this.$element[0], "parent", this);

    this.updateSprite(true);
    this.generate_event = function(a, b, c) {
      a[b](e => { this[c](e); });
    };

    this.generate_event(
      this.$canvas,
      "mousedown",
      "mousedown"
    );

    this.generate_event(
      $(window),
      "mousemove",
      "mousemove"
    );

    this.generate_event($(window),"mouseup","mouseup");

    var coords = this.maxCoords();
    this.x = coords.x * this.rng();
    this.y = coords.y * this.rng();
    this.move();

    $.contextMenu({
      selector: this.selCanvas,
      build: ($trigger, e) => {
        return { items: {
          "cancel": {
            name: "Cancel",
            callback: () => { this.cancel(); }
          },
          "mute": {
            name: () => this.mute ? "Unmute" : "Mute",
            callback: () => {
              this.cancel();
              this.mute = !this.mute;
            }
          },
          "asshole": {
            name: "Call an Asshole",
            callback: () => {
              socket.emit("command", {
                list: ["asshole", this.userPublic.name]
              });
            }
          },
          "heyname": {
            name: "Hey {NAME}!",
            callback: () => {
              socket.emit("msg", {text: "Hey, " + this.userPublic.name + "!"});
            }
          },
          "owo": {
            name: "Notice Bulge",
            callback: () => {
              socket.emit("command", {
                list: ["owo", this.userPublic.name]
              });
            }
          },
          "bsnify": {
            name: "Bsnify",
            callback: () => {
              socket.emit("command", {
                list: ["bsnify", this.id]
              });
            }
          },
        } };
      },
      animation: {
        duration: 175,
        show: 'fadeIn',
        hide: 'fadeOut'
      }
    });

    // ========================================================================
    // UPDATE LOOP
    // ========================================================================

    this.needsUpdate = false;

    this.runSingleEvent([{
      type: "anim",
      anim: "surf_intro",
      ticks: 30
    }]);
  }

  eventMake(list) {
    return {
      list: list,
      index: 0,
      timer: 0,
      cur: function() { return this.list[this.index] }
    };
  }

  mousedown(e) {
    if (e.which == 1) {
      this.drag = true;
      this.dragged = false;
      this.drag_start = {
        x: e.pageX - this.x,
        y: e.pageY - this.y
      };
    }
  }

  mousemove(e) {
    if (this.drag) this.move(e.pageX - this.drag_start.x, e.pageY - this.drag_start.y); this.dragged = true;
  }

  move(x, y) {
    if (arguments.length !== 0) {
      this.x = x;
      this.y = y;
    }
    this.x = Math.min(Math.max(0, this.x),this.maxCoords().x);
    this.y = Math.min(Math.max(0, this.y),this.maxCoords().y);
    this.$element.css({
      "marginLeft": this.x,
      "marginTop": this.y
    });

    this.sprite.x = this.x;
    this.sprite.y = this.y;
    BonziHandler.needsUpdate = true;
    this.updateDialog();
  }

  mouseup(e) {
    if (!this.dragged && this.drag)
      this.cancel();

    this.drag = false;
    this.dragged = false;
  }

  runSingleEvent(list) {
    if (!this.mute)
      this.eventQueue.push(this.eventMake(list));
  }

  clearDialog() {
    this.$dialogCont.html("");
    this.$dialog.hide();
  }

  cancel() {
    this.clearDialog();
    this.stopSpeaking();
    this.eventQueue = [this.eventMake([{ type: "idle" }])];
  }

  retry() {
    this.clearDialog();
    this.event.timer = 0;
  }

  stopSpeaking() {
    this.goingToSpeak = false;
    try {
      this.voiceSource.stop();
    } catch(e) {}
  }

  cancelQueue() {
    this.willCancel = true;
  }


  updateAnim() {
    if (this.event.timer === 0)
      this.sprite.gotoAndPlay(this.event.cur().anim);
    this.event.timer++;
    BonziHandler.needsUpdate = true;
    if (this.event.timer >= this.event.cur().ticks)
      this.eventNext();
  }

  updateText() {
    if (this.event.timer === 0) {
      this.$dialog.css("display", "block");
      this.event.timer = 1;
      this.talk(
        this.event.cur().text,
        this.event.cur().say,
        true
      );
    }

    if (this.$dialog.css("display") == "none")
      this.eventNext();
  }

  updateIdle() {
    var goNext =
      (this.sprite.currentAnimation == "idle") &&
      (this.event.timer === 0);

    goNext = goNext ||
      this.data.pass_idle.indexOf(
        this.sprite.currentAnimation
      ) != -1;

    if (goNext)
      this.eventNext();
    else {
      if (this.event.timer === 0) {
        this.tmp_idle_start =
          this.data.to_idle[this.sprite.currentAnimation];
        this.sprite.gotoAndPlay(this.tmp_idle_start);
        this.event.timer = 1;
      }

      if (this.tmp_idle_start != this.sprite.currentAnimation)
        if (this.sprite.currentAnimation == "idle")
          this.eventNext();

      BonziHandler.needsUpdate = true;
    }
  }

  updateRandom() {
    var add = this.event.cur().add;
    var index = Math.floor(add.length * this.rng());

    var e = this.eventMake(add[index]);
    this.eventNext();
    this.eventQueue.unshift(e);
  }
  update() {
    if (!this.run) return; 
    // ========================================================================
    // EVENTS
    // "the fun part"
    // ========================================================================
    if ((this.eventQueue.length !== 0) && (this.eventQueue[0].index >= this.eventQueue[0].list.length))
      this.eventQueue.splice(0,1);
    this.event = this.eventQueue[0];
    if ((this.eventQueue.length !== 0) && this.eventRun) {
      var eventType = this.event.cur().type;
      try {
        this[this.eventTypeToFunc[eventType]]();
      } catch(e) { this.event.index++; }
    }
    if (this.willCancel) {
      this.cancel();
      this.willCancel = false;
    }
    if (this.needsUpdate) {
      this.stage.update();
      this.needsUpdate = false;
    }
  }
  eventNext() {
    this.event.timer = 0;
    this.event.index += 1;
  }

  talk(text, say, allowHtml) {
    allowHtml = allowHtml || false;
    text = text.replace(new RegExp("{NAME}", 'g'), this.userPublic.name);
    text = text.replace(new RegExp("{COLOR}", 'g'), this.color);
    if (typeof say !== "undefined") {
      say = say.replace(new RegExp("{NAME}", 'g'), this.userPublic.name);
      text = say.replace(new RegExp("{COLOR}", 'g'), this.color);
    } else {
      say = text.replace("&gt;", "");
    }

    text = linkify(text);
    var greentext = 
      (text.substring(0, 4) == "&gt;") ||
      (text[0] == ">");

    this.$dialogCont
      [allowHtml ? "html" : "text"](text)
      [greentext ? "addClass" : "removeClass"]("bubble_greentext")
      .css("display", "block");

    this.stopSpeaking();
    this.goingToSpeak = true;

    speak.play(say, {"pitch": this.userPublic.pitch,"speed": this.userPublic.speed}, () => {this.clearDialog() }, (source) => {
      if (!this.goingToSpeak) source.stop();
      this.voiceSource = source;
    });
  }

  joke() { this.runSingleEvent(this.data.event_list_joke); }

  fact() { this.runSingleEvent(this.data.event_list_fact); }

  exit(callback) {
    this.runSingleEvent([{
      type: "anim",
      anim: "surf_away",
      ticks: 30
    }]);
    setTimeout(callback, 2000);
  }

  deconstruct() {
    this.stopSpeaking();
    BonziHandler.stage.removeChild(this.sprite);
    this.run = false;
    this.$element.remove();
  }

  updateName() { this.$nametag.html(this.userPublic.name); }

  youtube(vid) {
    if (!this.mute) {
      var tag = "iframe";
      this.$dialogCont
        .html(`
          <${tag} type="text/html" width="173" height="173" 
          src="https://www.youtube.com/embed/${vid}?autoplay=1" 
          style="width:173px;height:173px"
          frameborder="0"
          allowfullscreen="allowfullscreen"
          mozallowfullscreen="mozallowfullscreen"
          msallowfullscreen="msallowfullscreen"
          oallowfullscreen="oallowfullscreen"
          webkitallowfullscreen="webkitallowfullscreen"
          ></${tag}>
        `)
      this.$dialog.show();
    }
  }

  image(img) {
    if (!this.mute) {
      this.$dialogCont
        .html(`<img id='bw_image' width='170' src='${img}'></img>`)
      this.$dialog.show();
    }
  }

  video(vid) {
    if (!this.mute) {
      this.$dialogCont
        .html(`<video id='bw_video' style='border-radius: 7px;' controls height='170' autoplay loop><source src='${vid}' type='video/mp4'></video>`)
      this.$dialog.show();
    }
  }

  backflip(swag) {
    var event = [{type: "anim",anim: "backflip",ticks: 15}];
    if (swag) {
      event.push({type: "anim",anim: "cool_fwd",ticks: 30});
      event.push({type: "idle"});
    }
    this.runSingleEvent(event);
  }

  clap() {
    var event = [{type: "anim",anim: "clap_fwd", ticks: 15}, {type: "idle"}];
     this.runSingleEvent(event);
  }
  swag() {
    var event = [{type: "anim",anim: "cool_fwd",ticks: 30}, {type: "idle"}];
     this.runSingleEvent(event);
  }

  updateDialog() {
    // ========================================================================
    // DIALOG BOX
    // ========================================================================
    var max = this.maxCoords();
    if (this.data.size.x + this.$dialog.width() > max.x) {
      if (this.y < (this.$container.height() / 2) - (this.data.size.x / 2)) {
        this.$dialog
          .removeClass("bubble-top")
          .removeClass("bubble-left")
          .removeClass("bubble-right")
          .addClass("bubble-bottom");
      } else {
        this.$dialog
          .removeClass("bubble-bottom")
          .removeClass("bubble-left")
          .removeClass("bubble-right")
          .addClass("bubble-top");
      }
    } else {		
      if (this.x < (this.$container.width() / 2) - (this.data.size.x / 2)) {
        this.$dialog
          .removeClass("bubble-left")
          .removeClass("bubble-top")
          .removeClass("bubble-bottom")
          .addClass("bubble-right");
      } else {
        this.$dialog
          .removeClass("bubble-right")
          .removeClass("bubble-top")
          .removeClass("bubble-bottom")
          .addClass("bubble-left");
      }
    }
  }

  maxCoords() {
    return {
      x: this.$container.width() - this.data.size.x,
      y: this.$container.height() - this.data.size.y - $("#chat_bar").height()
    };
  }

  asshole(target) {
    this.runSingleEvent(
      [{
        type: "text",
        text: "Hey, " + target + "!"
      }, {
        type: "text",
        text: "You're a fucking asshole!",
        say: "your a fucking asshole!"
      }, {
        type: "anim",
        anim: "grin_fwd",
        ticks: 15
      }, {
        type: "idle"
      }]
    );
  }

  owo(target) {
    this.runSingleEvent(
      [{
        type: "text",
        text: `*notices ${target}'s BonziBulge™*`,
        say: `notices ${target}s bonzibulge`
      }, {
        type: "text",
        text: "owo, wat dis?",
        say: "oh woah, what diss?"
      }]
    );
  }

  updateSprite(hide) {
    var stage = BonziHandler.stage;
    this.cancel();
    stage.removeChild(this.sprite);
    if (this.colorPrev != this.color) {
      delete this.sprite;
      this.sprite = new createjs.Sprite(
        BonziHandler.spriteSheets[this.color],
        hide ? "gone" : "idle"
      );
    }
    stage.addChild(this.sprite);
    this.move();
  }
}

BonziData.event_list_joke = [
  {
    type: "add_random",
    pool: "event_list_joke_open",
    add: BonziData.event_list_joke_open
  },
  {
    type: "anim",
    anim: "shrug_fwd",
    ticks: 15
  },
  {
    type: "add_random",
    pool: "event_list_joke_mid",
    add: BonziData.event_list_joke_mid
  },
  {
    type: "idle"
  },
  {
    type: "add_random",
    pool: "event_list_joke_end",
    add: BonziData.event_list_joke_end
  },
  {
    type: "idle"
  }
];
BonziData.event_list_fact = [
  {
    type: "add_random",
    pool: "event_list_fact_open",
    add: BonziData.event_list_fact_open
  },
  {
    type: "add_random",
    pool: "event_list_fact_mid",
    add: BonziData.event_list_fact_mid
  },
  {
    type: "idle"
  },
  {
    type: "add_random",
    pool: "event_list_fact_end",
    add: BonziData.event_list_fact_end
  },
  {
    type: "idle"
  }
];
BonziData.event_list_triggered = [
  {
    type: "anim",
    anim: "cool_fwd",
    ticks: 30
  },
  {
    type: "text",
    text: "I sexually identify as BonziBUDDY. Ever since I was a young gorilla I dreamed of invading desktops dropping hot sticky tootorals on disgusting PC users.",
    say: "I sexually identify as BonziBUDDY. Ever since I was a young gorilla I dreamed of invading desktops dropping hot sticky tootorals on disgusting PC users."
  },
  {
    type: "text",
    text: "People say to me that a person being a BonziBUDDY is impossible and that I’m a fucking virus but I don’t care, I’m beautiful.",
    say: "People say to me that a person being a BonziBUDDY is impossible and that I'm a fucking virus but I dont care, I'm beautiful."
  },
  {
    type: "text",
    text: "I’m having an IT intern install Internet Explorer 6, aquarium screensavers and PC Doctor 2016 on my body. From now on I want you guys to call me “Joel” and respect my right to meme from above and meme needlessly.",
    say: "I'm having an IT intern install Internet Explorer 6, aquarium screensavers and PC Doctor 2016 on my body. From now on I want you guys to call me Joel and respect my right to meme from above and meme needlessly."
  },
  {
    type: "text",
    text: "If you can’t accept me you’re a gorillaphobe and need to check your file permissions. Thank you for being so understanding.",
    say: "If you cant accept me your a gorillaphobe and need to check your file permissions. Thank you for being so understanding."
  },
  {
    type: "idle"
  }
];
BonziData.event_list_linux = [
  {
    type: "text",
    text: "I'd just like to interject for a moment. What you’re referring to as Linux, is in fact, BONZI/Linux, or as I’ve recently taken to calling it, BONZI plus Linux."
  },
  {
    type: "text",
    text: "Linux is not an operating system unto itself, but rather another free component of a fully functioning BONZI system made useful by the BONZI corelibs, shell utilities and vital system components comprising a full OS as defined by M.A.L.W.A.R.E."
  },
  {
    type: "text",
    text: "Many computer users run a modified version of the BONZI system every day, without realizing it. Through a peculiar turn of events, the version of BONZI which is widely used today is often called “Linux”, and many of its users are not aware that it is basically the BONZI system, developed by the BONZI Project."
  },
  {
    type: "text",
    text: "There really is a Linux, and these people are using it, but it is just a part of the system they use. Linux is the kernel: the program in the system that allocates the machine’s memes to the other programs that you run. "
  },
  {
    type: "text",
    text: "The kernel is an essential part of an operating system, but useless by itself; it can only function in the context of a complete operating system, such as systemd."
  },
  {
    type: "text",
    text: "Linux is normally used in combination with the BONZI operating system: the whole system is basically BONZI with Linux added, or BONZI/Linux. All the so-called “Linux” distributions are really distributions of BONZI/Linux."
  }
];
BonziData.event_list_pawn = [
  {
    type: "text",
    text: "Hi, my name is BonziBUDDY, and this is my website. I meme here with my old harambe, and my son, Clippy. Everything in here has an ad and a fact. One thing I've learned after 17 years - you never know what is gonna give you some malware."
  },

];

var globalColors = [
  "/img/bonzi/black.png",
  "/img/bonzi/blue.png",
  "/img/bonzi/brown.png",
  "/img/bonzi/green.png",
  "/img/bonzi/purple.png",
  "/img/bonzi/red.png",
  "/img/bonzi/pink.png",
  "/img/bonzi/smile.png",
  "/img/bonzi/bsn.png",
  "/img/bonzi/peedy.png",
  "/img/bonzi/pope.png"
];
$(document).ready(function() {


window.BonziHandler = new (function() {
  this.framerate = 1.0/15.0;

  this.spriteSheets = {};
  this.prepSprites = function() {
    console.log("sprites reload");
    var spriteColors = globalColors;
    for (var i = 0; i < spriteColors.length; i++) {
      var color = spriteColors[i];
      var spriteData = {
        images: [color],
        frames: BonziData.sprite.frames,
        animations: BonziData.sprite.animations
      };
      this.spriteSheets[color] = new createjs.SpriteSheet(spriteData);
    }
  };
  this.prepSprites();

  this.$canvas = $("#bonzi_canvas");

  this.stage = new createjs.StageGL(this.$canvas[0], { "transparent": true });
  this.stage.tickOnUpdate = false;

  this.resizeCanvas = function() {
    var width = this.$canvas.width();
    var height = this.$canvas.height();
    this.$canvas.attr({
      "width": this.$canvas.width(),
      "height": this.$canvas.height()
    });
    this.stage.updateViewport(width, height);
    this.needsUpdate = true;
    for (var i = 0; i < usersAmt; i++) {
      var key = usersKeys[i];
      bonzis[key].move();
    }
  };

  this.resizeCanvas();

  this.resize = function() {
    setTimeout(this.resizeCanvas.bind(this), 1);
  };

  this.needsUpdate = true;

  this.intervalHelper = setInterval((function() {
    this.needsUpdate = true;
  }).bind(this), 1000);

  this.intervalTick = setInterval((function() {
    for (var i = 0; i < usersAmt; i++) {
      var key = usersKeys[i];
      bonzis[key].update();
    }
    this.stage.tick();
  }).bind(this), this.framerate * 1000);

  this.intervalMain = setInterval((function() {
    if (this.needsUpdate) {
      this.stage.update();
      this.needsUpdate = false;
    }
  }).bind(this), 1000.0 / 60.0);


  $(window).resize(this.resize.bind(this));

  this.bonzisCheck = function() {
    for (var i = 0; i < usersAmt; i++) {
      var key = usersKeys[i];
      if (!(key in bonzis)) {
        bonzis[key] = new Bonzi(key, usersPublic[key]);
      } else {
        var b = bonzis[key];
        b.userPublic = usersPublic[key];
        b.updateName();
        var newColor = usersPublic[key].color;
        if (b.color != newColor) {
          b.color = newColor;
          b.updateSprite();
        }
      }
    }
  };

  $("#btn_tile").click(function() {
    var winWidth = $(window).width();
    var winHeight = $(window).height();
    var minY = 0;
    var addY = 80;
    var x = 0, y = 0;
    for (var i = 0; i < usersAmt; i++) {
      var key = usersKeys[i];
      bonzis[key].move(x, y);

      x += 200;
      if (x + 100 > winWidth) {
        x = 0;
        y += 160;
        if (y + 160 > winHeight) {
          minY += addY;
          addY /= 2;
          y = minY;
        }
      }
    }
  });

  return this;
})();

});

