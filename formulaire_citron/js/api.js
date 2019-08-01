$(document).ready(function() {


    
    $('form').on('submit', function(){

        const reponse = $(this).children('input[type="checkbox"]').val();
        const nextSlide = $(this).children('input[type="checkbox"]').attr('data-id');
        const formId = $(this).attr('id');
        const monTableau = [];
        monTableau['question' + formId] = reponse;
        e.preventDefault();
        console.log(monTableau);
        $(this).parent().fadeOut();
        $('#' + nextSlide).parent().fadeIn();

        if(formId == $('form').lenght){

        $.ajax({
    
        type: 'POST',
        url: "reponse/result",
        dataType: 'json',
        data: {
            'reponse': $(this).children('input[type="checkbox"]').val(),
            'monTableau': ['question' + formId] = reponse,
        },

        success : function(){


        }

    })
            .done(function (result) {
                console.log(result);
                const nextSlide = $(this).children('input[type="checkbox"]').attr('data-id');
                console.log(result)
            })
    })
   
})

}
/* .ajax 

type
url
dataType
data: {

}

