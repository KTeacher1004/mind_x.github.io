let bigcontainer = document.getElementById("result");


function numberOneTriagle(number) {
  let box = document.createElement("div");
  bigcontainer.appendChild(box);
  let output = "";
  if (number < 1 || number > 10) {
    document.getElementsByTagName('div').innerHTML = "Number should be in range (1 to 10) only";
    return;
  }
  for (let i = 1; i <= number; i++) {
    let docs = "";
    for (let j = 1; j <= i; j++) {
      docs += "* ";
    }
    output += docs + "<br> ";
  }
  box.innerHTML = output; 
}

numberOneTriagle(2);
// numberOneTriagle(4);
