function showSidebar(){
     const sidebar = document.querySelector('.sidebar')
     sidebar.style.display = 'flex'
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

// FOR SKILLS SECTION
let numbers = document.getElementsByClassName("number");
if (numbers.length > 0) {
  let counter = 0;
  let intervalId = setInterval(() => {
    if (counter === 65) {
      clearInterval(intervalId);
      numbers[0].classList.add("completed");
    } else {
      counter += 1;
      for (let i = 0; i < numbers.length; i++) {
        numbers[i].innerHTML = counter + "%";
      }
    }
  }, 20);
}


// CONTACT

