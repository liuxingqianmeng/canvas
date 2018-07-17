function d2a(n){
	return n*Math.PI/180;
}
function a2d(n){
    return n*180/Math.PI;
}

var resource=['fish1','fish2','fish3','fish4','fish5','fish6','fish7','fish8','fish9','fish10','fish11','fish12','fish13','fish14','fish15','bottom-bar','cannon1','cannon2','cannon3','cannon4','cannon5','cannon6','cannon7','bullet','coinAni1','coinAni2','web','cannon_minus','cannon_plus','energy-bar','number_black','super','coinText'];

		var JSON={};
		function loadImage(arr,fnSucc){

		    var count=0;
		    for(var i=0;i<arr.length;i++){
		        var oImg=new Image();
		        //加载所有鱼的资源
		        (function(index){
		            oImg.onload=function(){
		                JSON[arr[index]]=this;
		                count++;
		                if(count==arr.length){
		                    fnSucc && fnSucc();
		                }
		            };
		        })(i);
		        oImg.src='img/'+arr[i]+'.png';
		    }
		}
		
function rn(min,max){
              	return Math.round(Math.random()*(max-min)+min)
        };
        
var cannon=[
    null,
    {w: 74, h: 74},
    {w: 74, h: 76},
    {w: 74, h: 76},
    {w: 74, h: 83},
    {w: 74, h: 85},
    {w: 74, h: 90},
    {w: 74, h: 94}
];
var bullet=[
    null,
     {x: 62, y: 0, w: 25, h: 29},
    {x: 62, y: 0, w: 25, h: 29},
    {x: 30, y: 0, w: 31, h: 35},
    {x: 32, y: 35, w: 27, h: 31},
    {x: 30, y: 82, w: 29, h: 33},
    {x: 0, y: 82, w: 30, h: 34},
    {x: 0, y: 0, w: 30, h: 44}
];

var fishKind=[
    null,
    {w: 55, h: 37, collR: 17},
    {w: 78, h: 64, collR: 24},
    {w: 72, h: 56, collR: 20},
    {w: 77, h: 59, collR: 22},
    {w: 107, h: 122, collR: 29},
	 {w: 107, h: 78, collR: 30},
    {w: 88, h: 150, collR:35},
    {w: 180, h: 126, collR: 35},
    {w: 154, h: 180, collR: 76},
    {w: 180, h: 186, collR: 60},
     {w: 510, h: 278, collR: 80},
   {w: 510, h: 278, collR: 80},
    {w: 180, h: 80, collR: 22},
      {w: 480, h: 225, collR: 100},
    {w: 498, h: 215, collR: 88}
];

var web=[
    null,
    {x:13,y:413,w:108,h:106},
    {x:177,y:369,w:125,h:124},
    {x:252,y:179,w:149,h:149},
    {x:1,y:244,w:160,h:154},
    {x:21,y:22,w:198,h:199},
    {x:241,y:0,w:180,h:179},
     {x:332,y:373,w:87,h:86},
];