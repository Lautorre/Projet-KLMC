$(document).ready(function(){



    function EasyPeasyParallax() {
        let scrollPos = $(document).scrollTop();
        let targetOpacity = 0;
        console.log('scroll position:'+(scrollPos*100)/10);
        
        let userHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        scrollPos > 0.20*userHeight ? ( targetOpacity = ((scrollPos*100)/10 ) / 10000) : 1;

        console.log(targetOpacity)
        $('#shop').css({
            'background-color': 'rgba(196, 226, 245, '+ targetOpacity +')'
        });
        console.log(scrollPos,targetOpacity);
    };
    
    $(function(){
        $(window).scroll(function() {
            EasyPeasyParallax();
        });
    });

        // FOND PROGRESSIF PAGE RESULTAT PRODUIT

        function EasyPeasyParallax2() {
            let scrollPos = $(document).scrollTop();
            let targetOpacity = 0;
            console.log('scroll position:'+(scrollPos*100)/10);
            
            let userHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
            scrollPos > 0.20*userHeight ? ( targetOpacity = ((scrollPos*100)/10 ) / 10000) : 1;
    
            console.log(targetOpacity)
            $('#resultat').css({
                'background-color': 'rgba(242, 189, 222, '+ targetOpacity +')'
            });
            console.log(scrollPos,targetOpacity);
        };
        
        $(function(){
            $(window).scroll(function() {
                EasyPeasyParallax2();
            });
        });

                // FOND PROGRESSIF PAGE Index

                // function EasyPeasyParallax3() {
                //     let scrollPos = $(document).scrollTop();
                //     let targetOpacity = 0;
                //     console.log('scroll position:'+(scrollPos*100)/10);
                    
                //     let userHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
                //     scrollPos > 0.20*userHeight ? ( targetOpacity = ((scrollPos*100)/10 ) / 10000) : 1;
            
                //     console.log(targetOpacity)
                //     $('#index').css({
                //         'background-color': 'rgba(242, 189, 222, '+ targetOpacity +')'
                //     });
                //     console.log(scrollPos,targetOpacity);
                // };
                
                // $(function(){
                //     $(document).scroll(function() {
                //         EasyPeasyParallax3();
                //     });
                // });

        
       // SLIDER
       $('.autoplay').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    // OPEN QUICKVIEW

    $('.quickview').on('click', function(){
        $('#quickview_popup').css({'display': 'block'});
    });

    $('.fermer').on('click', function(){
        $('#quickview_popup').css({'display': 'none'});
    });

        // BOUTON QUANTITE
        var quantity=0;
        $('.quantity-right-plus').click(function(e){
            
            // Stop acting like a button
            e.preventDefault();
            // Get the field name
            let quantity = parseInt($('#quantity').val());
            
            // If is not undefined
                
                $('#quantity').val(quantity + 1);
    
                
                // Increment
            
        });
    
            $('.quantity-left-minus').click(function(e){
            // Stop acting like a button
            e.preventDefault();
            // Get the field name
            let quantity = parseInt($('#quantity').val());
            
            // If is not undefined
            
                // Increment
                if(quantity>0){
                $('#quantity').val(quantity - 1);
                }
    });  
    var granimInstance = new Granim({
        element: '#canvas-basic',
        direction: 'left-right',
        isPausedWhenNotInView: true,
        states : {
            "default-state": {
                gradients: [
                    ['#ff9966', '#ff5e62'],
                    ['#00F260', '#0575E6'],
                    ['#e1eec3', '#f05053']
                ]
            }
        }
    });
    

});