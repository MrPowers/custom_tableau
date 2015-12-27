$(function() {

  var facts = $.parseJSON(json);

  $(".datamaps-subunit").click(function() {
    var classes = $(this).attr("class");
    var state = classes.substring(17);

    var hash = facts[state];

    $("#name").text(hash["name"]);
    $("#population").text(hash["population"]);
    $("#statehood").text(hash["statehood"]);
  })


});

