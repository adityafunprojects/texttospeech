let textarea_container = document.querySelector(".textarea");
const button = document.querySelector(".button");

function myFunction() {
  let inputValue = textarea_container;
  let name = `${inputValue.value} behenchod`;
  //   console.log(inputValue.value);
  responsiveVoice.speak(name);
}
