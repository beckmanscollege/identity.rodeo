(function() {
  const interval = 1000;
  const timeout = 30;
  let idleCounter = 0;
  window.onload = document.onmousemove = document.onkeypress = function() {
    idleCounter = 0;
    document.documentElement.classList.remove('idle');
  };
  window.setInterval(function() {
    if (++idleCounter >= timeout) {
      document.documentElement.classList.add('idle');
      idleCounter = 0;
    }
  }, interval);
})();


function visaSvar() {
  event.preventDefault();
  const allaSvar = ["index.html","websave.html"];
  const randomSvar = allaSvar[getRandomInt(allaSvar.length)];
  location.assign(randomSvar);
}
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
