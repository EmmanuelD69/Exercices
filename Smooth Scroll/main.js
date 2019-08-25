function smoothScroll(targetToReach, durationAnim) {
  var target = document.querySelection(targetToReach);
  var targetPosition = target.getBoundingClientRect().top;
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;
  var startTime = null;
}

function animation(currentTime) {
  if (startTime === null) {
    startTime = currentTime;
  }

  requestAnimationFrame(animation);
}

smoothScroll(".section2; 1000");
