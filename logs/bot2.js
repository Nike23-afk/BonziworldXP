function sendMsg(msgcontent,user){
  setTimeout(() => {
    setTimeout(() => {socket.emit("talk",{text: (user + ", " + msgcontent)}); })
  },3000);
}

var messag = [
  "hey what up",
  "i cant believe it",
  "this is so cool",
  "can you help me",
  "where are you",
  "get on game multiplayer",
  "just finished it all",
  "lets go",
  "i am so tired",
  "what time is it in here",
  "i cant wait for it",
  "cant wait for the time",
  "this is not going to work",
  "do you know",
  "how are you feeling",
  "its so hot",
  "have you heard",
  "i am so confused",
  "that awesome",
  "i need a break",
  "what are you doing",
  "im bored",
  "lets play a game",
  "im so excited",
  "this is weird",
  "i cant find it",
  "im hungry",
  "you wont believe this",
  "thats so sad",
  "can you believe it",
  "im nervos",
  "i forgot keys",
  "what did you say",
  "are you serious",
  "this is amazing",
  "im so cold",
  "im almost there",
  "do you like it",
  "this is crazy",
  "im on my way",
  "im really sorry",
  "this is unbelievable",
  "i have good news"
];

var time = Math.floor(Math.random() * 20);