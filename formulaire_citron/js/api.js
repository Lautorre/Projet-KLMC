$(function() {

    $.ajax("http://localhost:8000/categorie/api")
        .done(function(result) {

            
            console.log(result)
        })
})