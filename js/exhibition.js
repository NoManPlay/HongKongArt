


$(function(){
    $('.act1_img').on('mouseover', function(){       
        var url = $(this).attr('src');             
        var urlarr = url.split('/');
        var text = $('.nav_text > a > span').text();
        if( text == '简体中文' ){
            $(this).attr('src', 'img/icon1/mask_ft/'+urlarr[2]);
        }else{
            $(this).attr('src', 'img/icon1/mask_jt/'+urlarr[2]);
        }

    });
    $('.act1_img').on('mouseout', function(){       
        var url = $(this).attr('src');      
        var urlarr = url.split('/');
        $(this).attr('src', 'img/icon1/'+urlarr[3]);       
    });


    $('.act2_img').on('mouseover', function(){       
        var url = $(this).attr('src');             
        var urlarr = url.split('/');
        var text = $('.nav_text > a > span').text();
        if( text == '简体中文' ){
            $(this).attr('src', 'img/icon2/mask_ft/'+urlarr[2]);
        }else{
            $(this).attr('src', 'img/icon2/mask_jt/'+urlarr[2]);
        }
    });
    $('.act2_img').on('mouseout', function(){       
        var url = $(this).attr('src');      
        var urlarr = url.split('/');
        $(this).attr('src', 'img/icon2/'+urlarr[3]);  
    });

});
