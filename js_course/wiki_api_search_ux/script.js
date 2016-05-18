$(document).ready(function() {
  $("#searchTerm").on("focus", function() {
    $(this).removeClass("form-start").removeClass("form-close").addClass("form-open").attr("placeholder","");
    $("#send").removeClass("btn-start fadeOut").addClass("animated fadeIn");
  });
  $("#searchTerm").on("focusout", function() {
    $(this).removeClass("form-open").addClass("form-close").addClass("form-start");
    $("#send").removeClass("fadeIn").addClass("fadeOut");
  });

  $("#form").submit(function(e) {
    e.preventDefault();
    $(".results").html("");
    var apiCall = "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=" + $("#searchTerm").val() + "&callback=?";

    $.getJSON(apiCall, function(data) {
      console.log(data);
      $.each(data.query.search, function(p, i) {
        console.log(i);
        var foundItem = '<div class="foundItem foundItem-' + i + ' animated fadeIn"><h2><a href="https://en.wikipedia.org/wiki/' + i.title.replace(" ", "_") + '" target="blank">' + i.title + '</a></h2><p>' + i.snippet + '</div>';
        $(foundItem).appendTo(".results");
      });
    }).fail(function(jqxhr, textStatus, error) {
      var err = textStatus + ", " + error;
      $(err).appendTo(".results");
    });
  });

  $("#randomGen").on("click", function() {
    $(".results").html("");
    var apiCall = "https://en.wikipedia.org/w/api.php?action=query&format=json&list=random&callback=?&utf8=1&formatversion=2&rnnamespace=0&rnlimit=10";

    $.getJSON(apiCall, function(data) {
      console.log(data);
      $.each(data.query.random, function(p, i) {
        console.log(i);
        var foundItem = '<div class="foundItem foundItem-' + i + ' animated fadeIn"><h2><a href="https://en.wikipedia.org/wiki/' + i.title.replace(" ", "_") + '" target="blank">' + i.title + '</a></h2><p></div>';
        $(foundItem).appendTo(".results");
      });
    }).fail(function(jqxhr, textStatus, error) {
      var err = textStatus + ", " + error;
      $(err).appendTo(".results");
    });
  });

});
