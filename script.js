let textarea_container = document.querySelector(".textarea");
const button = document.querySelector(".button");

function myFunction() {
  let inputValue = textarea_container;
  if (
    inputValue.value === "yash" ||
    inputValue.value === "Yash" ||
    inputValue.value === "YASH"
  ) {
    let name = `${inputValue.value} ek baar bol de dhananjay ko tere maa ko bhosda nahi hai kyaa`;
    responsiveVoice.speak(name, "Hindi Female");
  } else if (
    inputValue.value === "chirag" ||
    inputValue.value === "Chirag" ||
    inputValue.value === "CHIRAG"
  ) {
    let name = `${inputValue.value} bhai pinki ke baap se shaadi ki baat kab karni hai`;
    responsiveVoice.speak(name, "Hindi Female");
  } else if (
    inputValue.value === "vivek" ||
    inputValue.value === "Vivek" ||
    inputValue.value === "VIVEK"
  ) {
    let name = `${inputValue.value} bhai teri wali to bahut hii dumb hai`;
    responsiveVoice.speak(name, "Hindi Female");
  } else if (
    inputValue.value === "shreyas" ||
    inputValue.value === "Shreyas" ||
    inputValue.value === "SHREYAS"
  ) {
    let name = `${inputValue.value} bhai tu aur aditya girlfriend ke mamle mei bhai bhai hai`;
    responsiveVoice.speak(name, "Hindi Female");
  } else {
    let name = `${inputValue.value} tu chutiya hai`;
    responsiveVoice.speak(name, "Hindi Female");
  }
}
