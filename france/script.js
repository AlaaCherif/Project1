//Comment management
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  inputValue = inputValue + ":" + document.getElementById("myInput1").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);

  document.getElementById("myUL").appendChild(li);

  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
}
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  inputValue = inputValue + ":" + document.getElementById("myInput1").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);

  document.getElementById("myUL").appendChild(li);

  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
}



//Nutritional facts dialog box
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}