//your JS code here. If required.
let code = document.querySelectorAll(".code");
code.forEach(element => {

  element.addEventListener("keyup", (event) => {
    if (event.key >= '0' && event.key <= '9') {
        // event.target.value=event.target.value.slice(-1,2);
    //   console.log(`Number key pressed: ${event.key}`);
      if(event.target.nextElementSibling)
      event.target.nextElementSibling.focus();
    }
    else
    if(event.key=="Backspace")
    {
        if(event.target.previousElementSibling)
      event.target.previousElementSibling.focus();
    }
  });
  element.addEventListener("keydown", (event) => {
    if (event.key >= '0' && event.key <= '9') {
        // event.target.value=event.target.value.slice(-1,2);
    //   console.log(`Number key pressed: ${event.key}`);
        event.target.value="";
    }
  });
});