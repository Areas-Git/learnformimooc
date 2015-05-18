var sounds = [];
var ev = document.createEvent('HTMLEvents');
ev.initEvent('LoveMusic',false,false);
document.addEventListener("LoveMusic",changeSong,false);

function init(){
	if(!createjs.Sound.initializeDefaultPlugins()){return;}

	var audioPath = "music/";
	 sounds = [
		{id:"樱花樱花想见你",src:"sakura.mp3"},
		{id:"不想和你做朋友",src:"not friends.mp3"},
		{id:"吵架歌",src:"quarrle.mp3"}
	];

	createjs.Sound.alternateExtensions = ["mp3"];
	//添加监听器，音乐加载后播放
	createjs.Sound.addEventListener("fileLoad",handleLoad);
	createjs.Sound.registerSounds(sounds,audioPath);
}

function handleLoad(event){
	createjs.Sound.stop();
	createjs.Sound.play(event.src);
}


//==========
function changeSong(){
	var sing = document.getElementsByTagName("textarea")[0].value;
	console.log(sing);
	if(!sing){return;}
	for(var i in sounds ){
		if(sounds[i].id===sing){createjs.Sound.stop();createjs.Sound.play(sing);break;}
	}
}