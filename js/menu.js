$(window).scroll(function(){
    if($(window).scrollTop() >= 50){
        $('.navbar').css('background','black');
        $('.nav-link').css('color','white');
        $('.nav-link').hover(function(){
            $(this).css('color','#32a852');
        
        },function(){
            $(this).css('color','white');
        })

    }
    else {
        $('.navbar').css('background','transparent');
        $('.nav-link').css('color','black');
        $('.nav-link').hover(function(){
            $(this).css('color','#32a852');
        
        },function(){
            $(this).css('color','black');
        })

        }
})