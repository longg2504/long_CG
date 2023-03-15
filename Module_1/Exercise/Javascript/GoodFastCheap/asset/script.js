// grab all the switches
let switches = document.querySelectorAll('.switch');

Array.from(switches).forEach((el, i) => {
  el.addEventListener('click', () => {
    // check if all switches are toggled
    // if all switches are toggled, 
    // turn off the next switch
    if (checkToggled() === 3) {
      if (i === 0) {
        switches[2].checked = false;
      } else if (i === 1) {
        switches[0].checked = false;
      } else {
        switches[1].checked = false;
      }
    }   
  });
});

// return # of toggled switches
function checkToggled() {
  let k = 0;
  for (let i = 0; i < switches.length; i++) {
    if (switches[i].checked) {
      k++;
    }
  }
  return k;
}