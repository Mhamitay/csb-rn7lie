console.log("To infinity and beyond.");

// write your JavaScript here

document.querySelector("#btn").addEventListener("click", function (event) {
  var val = document.querySelector("#txt");

  alert("Thank you for providing us with the rating of :" + val.value);
  console.log("a new rating of " + val.value + " was recived");
});
