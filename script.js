const displayBox = document.getElementById('display');

function screenDisplay(el){
  if (el === 'c') displayBox.value="";
  else displayBox.value += el;
}

function answer(){
  const result = eval(displayBox.value);
  displayBox.value = result;
}

function backspace(){
  const newDisplay = displayBox.value.substring(0,(displayBox.value.length)-1);
  displayBox.value = newDisplay;
}

function power(b){
  const powerResult = Math.pow(displayBox.value,b);
  displayBox.value = powerResult;
}
