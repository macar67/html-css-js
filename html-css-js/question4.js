// ASSESSMENT:
// There is a div in the index.html file which will be animated
// Edit question4.css and this file for this assessment(You should do the css part in css file)

// Before animating, center this div both vertically and horizontally in the middle of viewport
// After that, when we click the buttons inside of this div
// The div should animate
// For 'Rotate 360' button, it should do 360° rotation on its center in 1 second
// For 'Go Up and Down' button, it should go up touch the top of the viewport and return to middle in 1 second
// Example is presented in question4.gif
// Don't forget to add your css and javascript to index.html file

//rotate 360 deg.
 let deg=360;
document.getElementById('rotate-button').onclick=()=>{
    let element= document.getElementById('to-be-animated');
    element.style.transform = "rotate("+deg+"deg)";
    deg += 360;
}

//upDown 
document.getElementById('up-down-button').onclick=()=>{
     
  let id = null;
  const elem = document.getElementById("to-be-animated");   
  let pos = document.getElementById('to-be-animated').offsetTop;
    let a=pos;
  clearInterval(id);
  id = setInterval(frame, 1);
  function frame() {
    if (pos <= 0) {
      clearInterval(id);
        setInterval(comeBack,1)
        
    } else {
      pos-=5; 
      elem.style.top = pos + "px"; 
    }
  }
  function comeBack(){
      if (pos >= a) {
      clearInterval(id);
      }else{
      pos+=5; 
      elem.style.top = pos + "px"; 
      }
      
  }
}

