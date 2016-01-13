$(function() {
  var animal = prompt("What animal do you want to learn about? (turtles, snakes, or insects)");

  if (animal === 'turtle' || animal === 'turtles') {
    $('#turtle').show();
  };

  if (animal === 'snake' || animal === 'snakes') {
    $('#snake').show();
  };

  if (animal === 'insect' || animal === 'insects') {
    $('#insect').show();
  };
})
