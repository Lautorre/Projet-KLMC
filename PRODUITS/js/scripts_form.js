$(document).ready(function(){

    // FOND PROGRESSIF

    

    function EasyPeasyParallax() {
        let scrollPos = $(document).scrollTop();
        let targetOpacity = 0;
        console.log('scroll position:'+(scrollPos*100)/10);
        
        let userHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        scrollPos > 0.20*userHeight ? ( targetOpacity = ((scrollPos*100)/10 ) / 10000) : 1;

        console.log(targetOpacity)
        $('#produit').css({
            'background-color': 'rgba(252, 220, 78, '+ targetOpacity +')'
        });
        console.log(scrollPos,targetOpacity);
    };
    
    $(function(){
        $(window).scroll(function() {
            EasyPeasyParallax();
        });
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
    
    // MENU DESCRIPTION

    $('.cara_produits_1').css('display', 'none');
    $('.cara_butn_1').on('click',function(){
        $('.cara_produits_1').slideToggle(200);
    })
    $('.cara_produits_2').css('display', 'none');
    $('.cara_butn_2').on('click',function(){
        $('.cara_produits_2').slideToggle(200);
    })

    $('.cara_produits_3').css('display', 'none');
    $('.cara_butn_3').on('click',function(){
        $('.cara_produits_3').slideToggle(200);
    })

    // SLIDER
    $('.autoplay').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
        });
    });