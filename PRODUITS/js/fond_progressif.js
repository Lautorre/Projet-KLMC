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