const userOrder = {};

function getValues(e) {
  // turning elements object into an array
  const elements = Array.prototype.slice.call(e.target.elements);

  // iteratte over the array, storing input name & value pairs
  elements.forEach((el) => {
    if (el.type !== "submit") {
      userOrder[el.name] = el.value;
      userOrder[el.name] = el.value;
      userOrder[el.name] = el.value;
      userOrder[el.name] = el.value;
    }
  });

  //save to localStorage
  localStorage.setItem("userOrder", JSON.stringify(userOrder));
}
//call the function when submit button got clicked
document.getElementById("myform").addEventListener("submit", getValues);




//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 500px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
