$(document).ready(function() {

  $('.awesomeness_teller').on('click', function() {
    var toldAwesomeness = $(this).data('heading');
    $('#awesomeness_holder').text(toldAwesomeness);
  });

  $('.skill_teller').on('click', function() {
    var urlArray = window.location.pathname.split('/');
    console.log('url')
    console.log(urlArray)
    var skill = $(urlArray).last();
    var skill1 = skill[0];
    console.log(skill1)
    $("#skill_holder").text(skill1);
  });

  $('.meal_teller').on('click', function() {

    var randIndex = Math.floor((Math.random()*meals.length));
    var meal = meals[randIndex]
    // console.log(randIndex)
    // console.log(meal)
    $('#meal_holder').text(meal);
  });
  // What other events do you need to bind to make the other pages work?
});
