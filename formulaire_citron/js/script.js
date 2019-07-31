

$('form').on('submit', function(e){

    const reponse = $(this).children('input[type="checkbox"]').val();

    const nextSlide = $(this).children('input[type="checkbox"]').attr('data-id');
    const formId = $(this).attr('id');
    const monTableau = [];
    monTableau['question'+formId] = reponse;
    e.preventDefault();
    console.log(monTableau);
    $(this).parent().fadeOut();
    $('#'+nextSlide).parent().fadeIn();

})


