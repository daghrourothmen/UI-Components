const ProgressBar = document.getElementsByClassName('Progress-bar')[0];

setInterval(()=>{
  const ComputedStyle = getComputedStyle(ProgressBar);
  const width = parseFloat(ComputedStyle.getPropertyValue('--width')) || 0 ;
  ProgressBar.style.setProperty('--width',width + .1);
},1)

// console.log(ProgressBar);