$(document).ready(function() {

    $.ajax({
        type: 'GET',
        url: "http://127.0.0.1:8000/categorie/api",
    }).done(function(res) {
        console.log(res);

        /**
         * Affichage première question
         */
        let startFirstQuestion = '<div class="enfant">' +
            '<form id="1">' +
            '<legend>' +
            'De quoi avez vous besoin ?' +
            '</legend>';
        
        let suiteFirstQuestion = '';

        $.each(res, function(category, value) {
            console.log(category);
            console.log(value);

            let categoryHtml = '<input data-id="' + category + '" value="' + category + '" type="checkbox" name="choiceCategory" id="' + category +'">'+
                                '<label for="' + category +'">'+category+'</label>';

            suiteFirstQuestion += categoryHtml;
        });

        let endFirstQuestion = '<input type="submit" value="envoyer"></form></div>';

        let fullFirstQuestion = startFirstQuestion + suiteFirstQuestion + endFirstQuestion;

        /**
         * Affichage questions conditionnées
         */

        let questionsSuivantes = '';
        $.each(res, function (category, value) {
            console.log(category);
            console.log(value);

            let categoryHtml = '<div class="enfant">'+
                                '<form id="'+category+'">'+
                                '<legend>'+
                                value.question +
                                '</legend>';

            let reponses = '';
                
            $.each(value.reponses, function (key, reponse) {

                let reponseHtml = '<input data-id="4" value="categorie_id_5" type="checkbox" name="reponse_3" id="id_3_1">' +
                    '<label for="id_3_1">'+reponse+'</label>';

                reponses += reponseHtml;
            });


            let finCategoryHtml = '<input type="submit" value="envoyer">'+
                                    '</form>'+
                                    '</div>';

            questionsSuivantes = categoryHtml + reponses + finCategoryHtml;
        })
    
        $('#questions').html(fullFirstQuestion + questionsSuivantes);
    })
})
