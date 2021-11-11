// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyC223mtTBp360bnvzhqSKHfvArNNFz0du8",
    authDomain: "emtunes-76b79.firebaseapp.com",
    databaseURL: "https://emtunes-76b79.firebaseio.com",
    projectId: "emtunes-76b79",
    storageBucket: "emtunes-76b79.appspot.com",
    messagingSenderId: "259210349086",
    appId: "1:259210349086:web:25d8b6fbb653e177d1fc0f"
  };
  // Get the modal
// Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  function signUp(){
//alert("hello");
		var email = document.getElementById("email1").value;
		var f_password = document.getElementById("password1").value;
var s_password = document.getElementById("password2").value;
if(f_password==s_password )
{
if(f_password>=6)
{
		const promise = auth.createUserWithEmailAndPassword(email1.value, password1.value);
		promise.catch(e => alert(e.message));

		alert("Signed Up");
		}
		else
		{
		alert("Your password shold be greater than 8");
		}
		}
		else
		{
		alert(+f_password);
		alert("Password does not match");
		}

	}

	function signIn(){

		var email = document.getElementById("email");
		var password = document.getElementById("password");

		const promise = auth.signInWithEmailAndPassword(email.value, password.value);
		promise.catch(e => alert(e.message));
		alert("signed in");
	}

	function signOut(){

		auth.signOut();
		alert("Signed Out");

	}

 function googleSignIn() {
		var provider = new firebase.auth.GoogleAuthProvider();
		firebase.auth().signInWithPopup(provider).then(function () {
		//console.log(result);
			window.location = "index.html";
		}).catch(function (error){
			var errorMessage=error.message;
			alert(errorMessage);

		})}

var songrun=false;
var count=1;
var mod=1;
// var path=["audio\\angry1.mp3"
// ,"audio\\angry2.mp3"
// ,"audio\\dummy-audio.mp3"
// ,"audio\\happy1.mp3"
// ,"audio\\happy2.mp3"
// 	,"audio\\sad1.mp3"
// ,"audio\\sad2.mp3"
// 	,"audio\\dummy-audio.mp3"
// ,"audio\\neutral1.mp3"
// ,"audio\\neutral2.mp3"];

var path=["audio\\angry1.mp3"
,"audio\\angry2.mp3"
,"audio\\angry3.mp3"
,"audio\\happy1.mp3"
,"audio\\happy2.mp3"
,"audio\\sad1.mp3"
,"audio\\sad2.mp3"
,"audio\\sad3.mp3"
,"audio\\neutral1.mp3"
,"audio\\neutral2.mp3"];

var sname=["8 Mile",
"Crows 0",
"Changing Lanes",
"Spiderman:Homecoming",
"Dumb and the Dumber",
"The Fault in our stars",
"500 Days of Summer",
"Five Feet Apart",
"Toy Story",
"Charlie and the Chocolate factory"
];

var artist=["Eminem",
"Korean",
"Ben Affleck",
"Tom Holland",
"Jim Carrey",
"John Green",
"Joseph Gordon Lewitt",
"Cole Sprouse",
"Disney Pictures",
"Johnny Depp"
];

var movies=["The Marshall Mathers LP",
"When We All Fall Asleep, Where Do We Go?",
"Roots",
"Don't suppose",
"The lion king",
"Never Gone",
"Hold on",
"Scars and stories",
"Heard It in a Past Life",
"Love Tracks"
];

var date=["2017",
"2017",
"2017",
"2017",
"2016",
"2017",
"2017",
"2019",
"2017",
"2016"
];
//var sd=["Artist: Guru Randhawa<br>Movie: Tumhari Sulu<br>Released: 2017",
//"Artists: Ash King, Jigar Saraiya<br>Featured artists: Sidharth Malhotra, Raftaar<br>Movie: A Gentleman<br>Released: 2017"
//,"Artists: Ash King, Shashaa Tirupati<br>Movie: Half Girlfriend<br>Released: 2017<br>Awards: Zee Cine Award for Song of the Year"
//,"Artist: Arijit Singh<br>Movie: Meri Pyaari Bindu<br>Released: 2017<br>Nominations: Mirchi Music Awards for Best Song Producer - Programming & Arranging"
//,"Artist: Arijit Singh<br>Movie: Raabta<br>Released: 2017"
//,"Artists: Arijit Singh, Neha Kakkar, Meet Bros<br>Movie: Raabta<br>Released: 2017<br>Composer(s): : Sohrabbudin (Original); Sourav Roy (Revamped).<br>Genre: Dance music"
//,"Artist: Badshah<br>Released: 2017<br>Nominations: Mirchi Music Awards for Best Song Engineer - Recording and Mixing"
//,"Artist: KK<br>Movie: Shab<br>Released: 2017"
//,"Artist: Arijit Singh<br>Movie: Shab<br>Released: 2017"
//,"Artists: Arijit Singh, Shashaa Tirupati<br>Movie: Half Girlfriend<br>Released: 2017<br>Written: 2001 (lyrics)<br>Lyricist(s): Manoj Muntashir<br>Composer(s): Mithoon"];

var bool=[];
for(var i=0; i<movies.length; i++)
bool[i]=false;

//var icon=["images\\\\1.jpg",
//"images\\\\2.jpg",
//"images\\\\3.jpg",
//"images\\\\4.jpg",
//"images\\\\5.jpg",
//"images\\\\6.jpg",
//"images\\\\7.jpg",
//"images\\\\8.jpg",
//"images\\\\9.jpg",
//"images\\\\10.jpg"];

var mood=[["1","2","3"],["4","5"],["6","7","8"],["9","10"]];
var mmm=["category:Angry","category:Angry","category:Angry","category:Happy","category:Happy","category:Sad","category:Sad","category:Sad","category:Neutral","category:Neutral"];

var songs=new Array(sname.length);
for (var i = 0; i<sname.length; i++) {
	songs[i]=new Array(6);
	songs[i][0]=path[i];

	songs[i][1]=sname[i];
	songs[i][2]=artist[i];
	songs[i][3]=movies[i];
	songs[i][4]=date[i];
    songs[i][5]=mmm[i];
	console.log(songs[i][0]);
	console.log(songs[i][1]);
	console.log(songs[i][2]);
	console.log(songs[i][3]);
	console.log(songs[i][4]);
	console.log(songs[i][5]);
//	console.log(songs[i][2]);
//	var ins=document.createElement("div");
//	ins.id='b'+i;
//	//ins.onclick=function(){
//	//next(this);
//  	//};
//	ins.setAttribute("class", "song");
//	document.body.appendChild(ins);
//document.getElementById('b'+i).innerHTML='<div id="pic" style=\'background-image: url(\"'+songs[i][2]+'\");\'>  <input type="button" id="'+"a"+i+'" class="play" > <input type="button" id="'+"c"+i+'" class="add">  </div><div id="data"><br><br>'+songs[i][1]+'</div>';
//	document.getElementById('a'+i).onclick=function(){
//	play(this);
//	};
//	document.getElementById('c'+i).onclick=function(){
//	addq(this);
//	};
}




function setmod(elem){

	mod=elem.value;
//alert("inside set mode");

//	if(!songrun)
//	{
		if(mod==2)
		{

	//alert("inside mode=2");
			getTime();
		}
		if(mod==1)
		{
	//alert("inside mode =1");
			rand_play();
		}

//	}
}

//function play(elem){
//	console.log(elem.id);
//	var x=elem.id.charAt(1);
//	var z=songs[x][0];
//	document.getElementById("sname").innerHTML=sname[x];
//	document.getElementById("sel").src= z;
//	document.getElementById("main_slider").load();
//	document.getElementById("main_slider").play();
//	document.getElementById("emoji").style.backgroundImage="url('"+songs[x][3]+"')";
//	songrun=true;
//
//}

//var eqc=1;
//var sqc=1;

//function addq(elem){
//	console.log(elem.id);
//	var x=elem.id.charAt(1);
//	if(!songrun){
//		var z=songs[x][0];
//		document.getElementById("sname").innerHTML=sname[x];
//		document.getElementById("sel").src= z;
//		document.getElementById("main_slider").load();
//		document.getElementById("main_slider").play();
//		document.getElementById("emoji").style.backgroundImage="url('"+songs[x][3]+"')";
//		songrun=true;
//		return;
//	}
//	if(bool[x]==true)
//		return;
//
//	bool[x]=true;
//	var l=document.createElement("label");
//	l.id="e"+eqc;
//	l.name=x;
//	l.innerHTML=sname[x]+"<br>";
//	//var text=document.createTextNode(sname[x]+"<br>");
//	//l.appendChild(text);
//	document.getElementById("queue").appendChild(l);
//	eqc=eqc+1;
//}

//function nextsong(){
//	if(sqc==eqc){
//				alert("Queue is empty.");
//				return;
//		}
//		var elem=document.getElementById("e"+sqc);
//			var xa=elem.name;
//			var pa=songs[xa][0];
//			bool[xa]=false;
//			document.getElementById("sname").innerHTML=sname[xa];
//			document.getElementById("sel").src= pa;
//			document.getElementById("main_slider").load();
//			document.getElementById("main_slider").play();
//			document.getElementById("emoji").style.backgroundImage="url('"+songs[xa][3]+"')";
//
//			songrun=true;
//			document.getElementById("queue").removeChild(elem);
//			sqc=sqc+1;
//
//}

//function next_in_Q(){
//			songrun=false;
//			if(sqc==eqc){
//				alert("Queue is empty.");
//				return;
//			}
//			var elem=document.getElementById("e"+sqc);
//			var xa=elem.name;
//			var pa=songs[xa][0];
////			document.getElementById("sname").innerHTML=sname[xa];
////			document.getElementById("sel").src= pa;
//			document.getElementById("main_slider").load();
//			document.getElementById("main_slider").play();
//			document.getElementById("emoji").style.backgroundImage="url('"+songs[xa][3]+"')";
//			songrun=true;
//			document.getElementById("queue").removeChild(elem);
//			sqc=sqc+1;
//			}

function rand_play(){
	var index=Math.random()*path.length;
	index=parseInt(index);
	var pa=songs[index][0];
    document.getElementById("cat").innerHTML=songs[index][5];
    document.getElementById("songname").innerHTML=songs[index][1];
    document.getElementById("art").innerHTML=songs[index][2];
    document.getElementById("movname").innerHTML=songs[index][3];
    // document.getElementById("sel").src= pa;
	document.getElementById("main_slider").setAttribute('src', pa);
	document.getElementById("main_slider").load();
	document.getElementById("main_slider").play();
//	document.getElementById("emoji").style.backgroundImage="url('"+songs[index][3]+"')";
	songrun=true;

}
function moody(val){
	var index=Math.random()*mood[val].length;
	index=parseInt(index);
	var pa=songs[mood[val][index]-1][0];
	document.getElementById("cat").innerHTML=songs[mood[val][index]-1][5];
	document.getElementById("songname").innerHTML=songs[mood[val][index]-1][1];
	document.getElementById("art").innerHTML=songs[mood[val][index]-1][2];
	document.getElementById("movname").innerHTML=songs[mood[val][index]-1][3];

	document.getElementById("sel").src= pa;
	document.getElementById("main_slider").load();
	document.getElementById("main_slider").play();
//	document.getElementById("emoji").style.backgroundImage="url('"+songs[mood[val][index]-1][3]+"')";
	songrun=true;
}

async function getTime() {
                let value = await eel.getEmotion()();
                if(value=="angry")
                	moody(0);
                else if(value=="happy")
                	moody(1);
                else if(value=="sad")
                	moody(2);
                else
                	moody(3);
            }
