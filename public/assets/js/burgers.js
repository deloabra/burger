$(".devour-button").on("click", function(event){
    var id = $(this).data("id");

    $.ajax({
        url: "/api/burgers/" + id,
        type: "PATCH",
    })
    .then(() => {
        console.log("Moved a burger to devoured.");
        location.reload();
    });
});

$(".delete-button").on("click", function(event){
    var id = $(this).data("id");

    $.ajax({
        url: "/api/burgers/" + id,
        type: "DELETE"
    })
    .then(() => {
        console.log("Deleted a burger");
        location.reload();
    });
})

$(".create-form").on("submit", function(event){
    event.preventDefault();

    var newBurger = {
        name: $("#ba").val().trim()
    }

    $.ajax({
        url: "/api/burgers",
        type: "POST",
        data: newBurger
    })
    .then(() => {
        console.log("Added new burger");
        location.reload();
    })
})