$(document).ready(function(){

    function EasyPeasyParallax() {
        let scrollPos = $(document).scrollTop();
        let targetOpacity = 0;

        let userHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        scrollPos > 0.20*userHeight ? ( targetOpacity = '0.'+ (scrollPos*100)/10 ) : 1;

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



    var quantity=0;
        $('.quantity-right-plus').click(function(e){
            
            // Stop acting like a button
            e.preventDefault();
            // Get the field name
            var quantity = parseInt($('#quantity').val());
            
            // If is not undefined
                
                $('#quantity').val(quantity + 1);
    
                
                // Increment
            
        });
    
            $('.quantity-left-minus').click(function(e){
            // Stop acting like a button
            e.preventDefault();
            // Get the field name
            var quantity = parseInt($('#quantity').val());
            
            // If is not undefined
            
                // Increment
                if(quantity>0){
                $('#quantity').val(quantity - 1);
                }
    });       
});
