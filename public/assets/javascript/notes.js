$("#addNote").on("click", function() {
    var addNote = $("#addNote").val().trim();

    addNote = addNote.replace(/\s+/g, "").toLowerCase();

    var div = $("<div>");

   
    $.get("/api/notes/" + addNote, function(data) {
      console.log(data);
      if (data) {
        $("#showNote").append();
        $("#title").append(data.title);
        $("#body").append(data.body);
      }
      else {
        $("#title").text("No Notes");
        $("#body").hide();
      }
    });
  });