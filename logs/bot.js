//arrays

socket.on("talk", (data) => {
const personthing = ['drake','this user','ninja','justin beiber','jeff beso','jimmy','mark suckerber','it its','functo','what are the reason you decided to','come on','dave','man','worker','sonic hedgehog','mario','talking tom','taylor swift','bob','henry','why you','tell me why you','explain why you','tell me how you','explain how you','luigi','joe biden','donald trum','obama','hillary clinton','elone muks','xbox','harry explain how you','abram lincin tell me why you','club pnegin','burgo king','bitch lick on','andy is sorry for trying to','ed sherane','michael joden','george bush','brack obama','smiley face','among us','club pinguin','call of dutty','fortnite','robblox','traffic cone','macroni lamp','instragram','how come you','stop','kanye westt','santra claus','ok mister i wanna','he saw','ok man lets','ok come on why you do that, ','stop','alright let see','dude no you dont','its not its','alright look at the top and','you should','alright man calm down and','dude just stop trying to','its not good for if you','it not nice stop','you not gonna','why you just decide to','it not useful if you tryed to','stop doing that stuff when you','haha that was funny when you','lol xd man you gotta','alright man','wow you really just gonna','ok man just dont','man cmon dont','just stop trying to','how dare you', 'why you just decide to go on and','hey man how come you','ok just stop trying to','you cant just','you get all up in my face and','no stop trying to','it not fair if you','fuck why you just gonna','come on dont','it not fair why you','oh my gosh stop','ok man lets just get on and','come on lets','quick,','OK NO MORE TRYING TO','good job now','it not that simple ok now','not cool why you','lets go come on lets go come on lets','mean person','hacker','adolf hatler','dan schneider','justin beibber','my friend','pepppa pig','suppr mario','luigi','kanye wezt','adam','billy','billie ellish','the grinch','WOW you really just gonna','how dare you try to','it not cool now stop trying to','you little bitch for deciding to','oh no you dont you not even gonna think about trying to','dont you dare','that cool now try your best to','its not fair to others when you','oh come on man why you','this stop now no more trying to','we gonna get together as a group and','yep i agre now lets','oh man that crazy how he just decide to go on and','try to','mario judah','chris pratt','jack black','fone','saemus','that crazy how you even','THIS NOT GONNA HAPPEN you not just gonna get up and','see fucker','obamma','garge w bosh','vladimar pootin','zelnsky','the team of crew','the team','toad','walp, you know what i alwayss say:','here what you need to do. now firstt,','HAY WOAH WHAT THE HELL WHY YOU JUST','come onn lats','we almost late hurry up and','link','kirbay','osama bin laden','the ceo of chairs','that was so funny when you tried to','i laffed rally hard when you','yap yap lets','YOU MAKE ME TOO MAD WHY THE FUCK DID YOU','what is you problem what make you think it ok to','how DARE YOU','you need to get common sense why did you','i see the problem, you tryed to','thats why you need to','this the reason why you','go fart and','let take this one step at time and','look at your surrounding and','big moose','here word of advice. just breathh in and breath out and try to','me and my firends always','fun activty:','what the fuck wrong with you it not even slightly okkay to','pablo','hector','jonny','jimmy','billy','jim jones','tom cruise','i cant BELIEV you would'];
const verb = ['get','go to','enter','hack','how do you','play song in','post to','send debt to','make qual for','do it','do','post','send','message','meesage','see','run truck over','go back to','look up','destroy','look around','hopped over','step around','vomit on','hack','send social security number to','hang out with me at','stop by','do BAD BAD thing at','counsel','send moneys to','drop me off at','take me to','why you at','what you doing at','why you go to','take me to','send me a sample from','sends dearest apology to','explains why he love','gives to','went on','deleted','got my t from','said that you went to','want to know why you did','why you go to','come on man open the door at','lets get on and go to','give me thingg from','lets visit','go to','see here? look its is','work at','shipped the thang to','see evey single part of','bought oven mitt from','went and shop at','dude just go to','did flop to','jump onto','eat','put bow on','just fucking stop','get rid of','hacking a tock into','explaining why you did some at','drink orange juice at','its not','fucking get on','really play game at','see all of','visit the','get rid of','delate','fucking stomp on','get to','beat','have fun at','walk to','visit at','play game at','why cant you be mo like','took all of fucking','stole','exploded','walked right into','smashed','got rid of','made of in of','bought','took look at','walked all over','looked at','sat on','jumped all over','destroyed and destructed','send bomb to','shit all over','have nice visit at','walk on top of','run all over','drive into','kicked over','poured dog food all over','took all of','stole','ROBBED','put pair of pant on','took dog to','punched and kick and punchd','had competition of backpack at','STOMP ON','fart on','smash','nuke','apply deodorante on','toggled','pooped out','had terrible time at','put money into','plug usb into','plug phone into','do TERRIBLE TERRIBLE THING to','just fucking jump all over','explode c4 bomb at','send my grandma to','read book at','fart on','send bag of fart to','absolutley destroy','tear down','shut down','WAIT A MANATE WHY YOU FUCKING DESTROYY','drove car to','rode magic carpet to','take seat on','put carpet in','walk in','bashed in wall at','took poop at','throw poop at','disrespect','stick ass on','put basket over','put blanket over','take it so fucking seriously at','diahreea at','pull over carr at','plug coom into','take photos at','upload photo to','upload video to','kill everyone at','do murder spree at','do bisness at','take shit at'];
const placething = ['twatter','twiter','facebook','mickdonalds','spotify','walmart','hamsterwhell','instagram','india','brasil','portugal','desert','nitendo','grocery stoe','car','south america','school','kfc','reddit','4chan','dark web','piza hut','save a lot','dollar store','footballl field','game store','pandora','dairy quenn','apple stor','roblox','fortnie','minecraft','roblox','france','hunger game','walgreens resteraunt','butt','coom','california','mexico','verizon store','south america','hair store','target','big town','mall','table','mcdonald','instagam','facbook','socer fielld','krogers','tinder','veding machine','gymnasium','russia','canada','scary cliff','mall','the mall','nort pole','africa','austraila','stadiume','gas statton','aquarium','ocean','beech','beach','beacch','phone stop','backpack','best buy','kfc','romania','canada','austrailia','antartica','france','the store','headquarters','house','golf course','big restraunt','texas','eruope','nigeria','asia','window','house','big fancy house','big mansion','school','gamestop','poland','hi school','maddle school','elmentry schuul','kandergaten','preschole','mexican restrant','europe','family of 9','chedar cheese','piza','small house','alabama','missisipi','geogia','tenese','virgania','dollar stoe','burger kang','wyomming','canadda','sony xbox','microsoft wii','ukrine','austrailia','nigeria','nice couch','little dog','kitty cat','young child','romphonixx','markiplier','toilet','japan','microphone','can','door nob','clothes hanger','fitbit','television','curtan','window','nice big home','carboard box on the street','water bottle store','convenience store','itally','argentina','geramany','albany','curious george house','nintenndo headquarter','local kintergardan','discord server'];
const newword = [''];
const starter = ['wow','hey','guess what',''];
const answer = ['nope','no','yeah','yes','yep','yop','no not at all','nop e','nah','never','not no','yas','yap :white_checkmark:','yuh huhh','yap yeah'];
const agreement = ['i disagray','i aggreee','yap true','you so correct','you so rong',':x: WOW you are incarract i disagrae','aggree to disagreee you ar rong','i do not agre','you ar rong','get out rong :x: :x: :x: incrorract','you NOT RITE','shut up you rong i NOT GONNA AGREE','i COUDNT AGRAE MORE','i agrae with what yo said','why','WHY','explain WHYY'];
const angrystart = ['hey fuck you go','hey go fucking','oh fuck you how about you go','little bitch','go cop seeth eat','you basterd go fucking','you insane man how about you','get back in realitty and','fucker look into','how about you fucking spend time and','wow just get real and','see bitch truth','hey bitch how about you','wow just fuck off and','just fucing','get out and','you need to motherfucking','is stupid go','fuckng BITCH','WOW well fucking batch go','spend some time trieing to','FUCK YO'];
const angryinsult = ['eat dick','suck asshole','go die','get fucking phone','slip floor','kill your salf','eat butt','go home','get down to touch','eat bucket of mop','go poop','get plastic','get in touch','fart fuck shit fucking bitch','die fucking die','go somwhar else ashole','DIE','die','eat pisss shit','eat a poison','go eat a shit','fart shit fucking fuck','suck dick','eat asshole','get motherfucking PHONE','slip on it floor','kill you salf',''];
const hello = ['hallo how you today','hi how you','hallo, what up'];
const fact = ['did NOT want to talkk about the persn in the room','RAN down the beachhe today','iz naver at home on sundays','found a leprecan in his walnut shell','cried diamondds','once said: thare can never be too many charries on an ice craem sundae','loves har pink bunny slippers','said todayy that red is greener than purpale']

const optionsforConvo = ['convo1','convo2'];


//////////////
//base
var convo = "{STARTER} {PERSONTHING} {VERB} {PLACETHING}";
var convo2 = "{PERSONTHING} {FACT}";
var angry = "{ANGRYSTART} {ANGRYINSULT}";
var explanation = "because {PERSONTHING} {VERB} {PLACETHING}";
var sender = bonzis[data.guid].userPublic.name;
var botname = "Bonzi"

///////////////
//keywords
const basickeywords = ['NI','ni','qubo','z','ag','as','th','ph','gu','gi','AG','TH','gr','q'];
const askingexplanation = ['why','Why','ecause why','explain','answer me','WHY','tell me','Tell me','TELL ME','WHY DID YOU','explain','Explain','EXPLAIN'];
const angrymsg = ['fuck you','FUCK YOU','Fuck you','die','DIE','Die','nigger','igger','IGGER','are a bitch','ARE A BITCH','IS A BITCH','Is a bitch','Is A Bitch','sshole','SSHOLE','fucker','Fucker','FUCKER','🤓','🤡','retard','Retard','Whore','WHORE','whore','RETARD','stfu','Stfu','STFU','shut the fuck','Shut the fuck','Shut The fuck','Shut The Fuck','SHUT THE FUCK','kys','Kys','KYS','K ys','Ky s',':middle_finger:','kill you','Kill you','Kill You','KILL YOU','hate you','Hate you','Hate You','HATE YOU','fuck you','Fuck you','Fuck You','FUCK YOU','is shit','Is shit','Is Shit','IS SHIT','stupid','Stupid','STUPID','die','Die','DIE','you dumb','you are stupid','You dumb','You Dumb','You Are Stupid','You Are Stupid','YOU DUMB','YOU ARE STUPID',];
const command = ['stop','Stop','tell me','Tell me','tell Me','Do this','do this','Do This','say','Say']
const agreeing = ['agree','gree','yes','yeah','no','heres why','in conclusion','NO','YEAH','No','Yes','YEP','yep','Yeah','nope','ope','OPE','true','True','TRUE','real','Real','REAL','based','Based','BASED','fake','Fake','fake','FAKE','FALSE','False','false'];
const ask = ['is','IS','do you','Do you','O YOU','do','did you','Did you','DID YOU','DO','IS IT','are','ARE','Are','really','Really','REALLY','did','Did','DID','what do you think of','What do you think of','WHAT DO YOU THINK OF','re you','Is this','is this','Is This','IS THIS','who better','Who Better','WHO BETTER','whos better','Whos Better','Whos better','WHOS BETTER',"Who's better","who's better","Who's Better","WHO'S BETTER",'?'];
const greeting = ['ello','Ello','Hi ','hi ','HI ','ELLO','wassup','Wassup','whats up','Whats up','hey','Ey','Hey'];

const talkingTo = ['monky','Monky','MONKY','Monkey','monkey','MONKEY','CHIMP','Chimp','chimp','gorilla','Gorilla','GORILLA','sstupid monky','Stupid Monky','STUPID MONKEY','STUPID CHIMP'];


/////////////
//functions
function random(array){
  var result = array[Math.floor(Math.random() * array.length)];
  return result;
}
function replaceGlobal(thebase){
  while(thebase.includes('{PERSONTHING}')){
    thebase = thebase.replace('{PERSONTHING}',random(personthing));
  }
  while(thebase.includes('{STARTER}')){
    thebase = thebase.replace('{STARTER}',random(starter));
  }
  while(thebase.includes('{VERB}')){
    thebase = thebase.replace('{VERB}',random(verb));
  }
  while(thebase.includes('{FACT}')){
    thebase = thebase.replace('{FACT}',random(fact));
  }
  while(thebase.includes('{PLACETHING}')){
    thebase = thebase.replace('{PLACETHING}',random(placething));
  }
  while(thebase.includes('{ANGRYSTART}')){
    thebase = thebase.replace('{ANGRYSTART}',random(angrystart));
  }
  while(thebase.includes('{ANGRYINSULT}')){
    thebase = thebase.replace('{ANGRYINSULT}',random(angryinsult));
  }
  return thebase;
}
function ifIncludes(keylist){
  if(keylist.some(r=> data.text.includes(r))){
    return true;
  }
}
function checks(){
  if(sender !== botname){
    return true;
  }
}
function sendMsg(msgcontent,user){
  setTimeout(() => {
    setTimeout(() => {socket.emit("talk",{text: (user + ", " + msgcontent)}); })
  },3000);
}


////////

let chance = Math.floor(Math.random() * 20);

  
if(chance > 14){
if(ifIncludes(basickeywords) && checks() && !ifIncludes(angrymsg) && !ifIncludes(ask) && !ifIncludes(askingexplanation) && !ifIncludes(agreeing)){
  let pick = random(optionsforConvo);

  if(pick == 'convo1'){
    sendMsg(replaceGlobal(convo));
  }
  if(pick == 'convo2'){
    sendMsg(replaceGlobal(convo2));
  }
}
if(ifIncludes(askingexplanation) && checks()){
  sendMsg(replaceGlobal(explanation));
}
if(ifIncludes(angrymsg) && ifIncludes(talkingTo) && checks()){
  sendMsg(replaceGlobal(angry));
}
if(ifIncludes(command) && ifIncludes(talkingTo) && checks()){
  sendMsg(random(answer));
}
if(ifIncludes(agreeing) && checks()){
  sendMsg(random(agreement));
}
if(ifIncludes(ask) && checks()){
  sendMsg(random(answer));
}
if(ifIncludes(greeting) && checks()){
  sendMsg(random(hello));
}
}
});