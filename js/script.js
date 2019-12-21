var n=1
var pic= document.getElementById('pic')
var div= document.getElementById('div')
var drag= document.getElementById('drag')
var scroll= document.getElementById('scroll')
function swap() {
  n+=1;
  if (n<10){
    pic.src = 'img/'+n+'.png'
  };
  // if (n==10){
  //   ChangeToDrag()
  //   console.log('div changed');
  // };
  // if (n==4||n==5||n==6){
  //   pic.style.opacity = '0'
  //   moreTheOpacity()

  if (n==4){
    ChangeToScroll();
  }
};


function goBack() {
  if (n>1){
    n-=1
    document.getElementById('pic').src = 'img/'+n+'.png'
  }
};

function moreTheOpacity()
{
  var opArray = ["1", ,"0.9","0.8", "0.7", "0.6", "0.5", "0.4", "0.3", "0.2", "0.1"];
  var x = 10;
  (function next() {
    pic.style.opacity = opArray[x];

    if(x-- >0) {
      setTimeout(next, 150); //depending on how fast you want to fade
    }
  })();
}

function ChangeToDrag() {
  div.style.display = 'none';
  drag.style.display = 'flex';
  drag.style.flexWrap = 'wrap';

}

function ChangeToScroll(){
    div.style.display = 'none';
    scroll.style.display= 'block';

}

function walk(){
  var y=scroll.scrollBottom;
  console.log(y);
  if (y==0) {
    div.style.display = 'block';
    scroll.style.display= 'none';
  }
}
function lessTheOpacity()
{
  var opArray = ["0.9", "0.8", "0.7", "0.6", "0.5", "0.4", "0.3", "0.2", "0.1", "0"];
  var x = 0;
  (function next() {
    pic.style.opacity = opArray[x];

    if(x++ < opArray.length) {
      setTimeout(next, 100); //depending on how fast you want to fade
    }
  })
}



var img1Placed = false;
var img2Placed = false;
var img3Placed = false;

var imgBox1 = document.getElementById('image-box-1');
var imgBox2 = document.getElementById('image-box-2');
var imgBox3 = document.getElementById('image-box-3');

// imgBox1.addEventListener('eventName', fnName)

imgBox1.addEventListener('dragstart', dragStart);
imgBox1.addEventListener('dragend', img1_dragEnd);
imgBox2.addEventListener('dragstart', dragStart);
imgBox2.addEventListener('dragend', img2_dragEnd);
imgBox3.addEventListener('dragstart', dragStart);
imgBox3.addEventListener('dragend', img3_dragEnd);

function dragStart(){
  console.log("drag started!");
}


function img1_dragEnd(){
  console.log("drag ended!");
  // console.log( this );
  var x = event.clientX;
  var y = event.clientY;
  imgBox1.style.left = x - 100 + "px";
  imgBox1.style.top = y -100 + "px";


  if ( x > 400 && x < 400 + 500 && y > 300 && y < 300 + 450){

    console.log("box in the area!");
    img1Placed = true;
    checkBoxPositions();
  } else {
    img1Placed = false;
  }
}
function img2_dragEnd(){
  console.log("drag ended!");
  // console.log( this );
  var x = event.clientX;
  var y = event.clientY;
  imgBox2.style.left = x - 100 + "px";
  imgBox2.style.top = y -100 + "px";


  if ( x > 400 && x < 400 + 500 &&  y > 300 && y < 300 + 450){

    console.log("box in the area!");
    img2Placed = true;
    checkBoxPositions();
  } else {
    img2Placed = false;
  }
}
function img3_dragEnd(){
  console.log("drag ended!");
  // console.log( this );
  var x = event.clientX;
  var y = event.clientY;
  imgBox3.style.left = x - 100 + "px";
  imgBox3.style.top = y -100 + "px";


  if ( x > 400 && x < 400 + 500 &&  y > 300 && y < 300 + 450){

    console.log("box in the area!");
    img3Placed = true;
    checkBoxPositions();
  } else {
    img3Placed = false;
  }
}
  function checkBoxPositions(){
    if (img1Placed == true && img2Placed == true && img3Placed == true){
      console.log("yay!");
document.getElementById('div');
    }
  }
