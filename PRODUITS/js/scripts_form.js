$(document).ready(function(){
    
    // $(window).scroll(function(e) {

    //     let opacite= 1 - ($(this).scrollTop() /$(window).height());
    //     $('#produit').css('background-color', opacite);
        
    // });

    function EasyPeasyParallax() {
        let scrollPos = $(document).scrollTop();
        let targetOpacity = 0;
        scrollPos > 100 ? ( targetOpacity = '0.'+ (scrollPos*100)/10 ) : 1;

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
    
});
