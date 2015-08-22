$(document).ready(function () {
    
    var $qFish = $('.qFish');
    var $qFishWidth = $('.qFish').css('width');
    var $qFishHeight = $('.qFish').css('height');
    var $qFishPosX;
    var $qFishPosY;
    
    function getPlayerX() {
        return $('.qFish').offset().left;
    }
    
    function getPlayerY() {
        return $('.qFish').offset().top;
    }
    
    function getLittleFishX() {
        return $('.lFish').offset().left;
    }
    
    function getLittleFishY() {
        return $('.lFish').offset().top;
    }
    
    function swimUp(fish) {
        if(fish.hasClass('swimUp1'))
        {
            fish.removeClass('swimUp1');
            if(getPlayerY() > 11)
            {
                fish.addClass('swimUp2').css({ marginTop:'-=10px' });
            }
            else
            {
                fish.addClass('swimUp2').css({ marginTop:'-=0px' });
            }
        }
        else if(fish.hasClass('swimUp2'))
        {
            fish.removeClass('swimUp2');
            if(getPlayerY() > 11)
            {
                fish.addClass('swimUp3').css({ marginTop:'-=10px' });
            }
            else
            {
                fish.addClass('swimUp3').css({ marginTop:'-=0px' });
            }
        }
        else if(fish.hasClass('swimUp3'))
        {
            fish.removeClass('swimUp3');
            if(getPlayerY() > 11)
            {
                fish.addClass('swimUp4').css({ marginTop:'-=10px' });
            }
            else
            {
                fish.addClass('swimUp4').css({ marginTop:'-=0px' });
            }
        }
        else if(fish.hasClass('swimUp4'))
        {
            fish.removeClass('swimUp4');
            if(getPlayerY() > 11)
            {
                fish.addClass('swimUp1').css({ marginTop:'-=10px' });
            }
            else
            {
                fish.addClass('swimUp1').css({ marginTop:'-=0px' });
            }
        }
        else if(fish.hasClass('idle') ||
                fish.hasClass('swimRight1') ||
                fish.hasClass('swimDown1') ||
                fish.hasClass('swimLeft1') ||
                fish.hasClass('swimRight2') ||
                fish.hasClass('swimDown2') ||
                fish.hasClass('swimLeft2') ||
                fish.hasClass('swimRight3') ||
                fish.hasClass('swimDown3') ||
                fish.hasClass('swimLeft3') ||
                fish.hasClass('swimRight4') ||
                fish.hasClass('swimDown4') ||
                fish.hasClass('swimLeft4'))
        {
            fish.removeClass('idle swimRight1 swimDown1 swimLeft1 swimRight2 swimDown2 swimLeft2');
            fish.removeClass('swimRight3 swimDown3 swimLeft3 swimRight4 swimDown4 swimLeft4');
            if(getPlayerY() > 11)
            {
                fish.addClass('swimUp1').css({ marginTop:'-=10px' });
            }
            else
            {
                fish.addClass('swimUp1').css({ marginTop:'-=0px' });
            }
        }
    }
    
    function swimDown(fish) {
        if(fish.hasClass('swimDown1'))
        {
            fish.removeClass('swimDown1');
            if(getPlayerY() <= 515)
            {
                fish.addClass('swimDown2').css({ marginTop:'+=10px' });
            }
            else
            {
                fish.addClass('swimDown2').css({ marginTop:'+=0px' });
            }
        }
        else if(fish.hasClass('swimDown2'))
        {
            fish.removeClass('swimDown2');
            if(getPlayerY() <= 515)
            {
                fish.addClass('swimDown3').css({ marginTop:'+=10px' });
            }
            else
            {
                fish.addClass('swimDown3').css({ marginTop:'+=0px' });
            }
        }
        else if(fish.hasClass('swimDown3'))
        {
            fish.removeClass('swimDown3');
            if(getPlayerY() <= 515)
            {
                fish.addClass('swimDown4').css({ marginTop:'+=10px' });
            }
            else
            {
                fish.addClass('swimDown4').css({ marginTop:'+=0px' });
            }
        }
        else if(fish.hasClass('swimDown4'))
        {
            fish.removeClass('swimDown4');
            if(getPlayerY() <= 515)
            {
                fish.addClass('swimDown1').css({ marginTop:'+=10px' });
            }
            else
            {
                fish.addClass('swimDown1').css({ marginTop:'+=0px' });
            }
        }
        else if(fish.hasClass('idle') ||
                fish.hasClass('swimRight1') ||
                fish.hasClass('swimUp1') ||
                fish.hasClass('swimLeft1') ||
                fish.hasClass('swimRight2') ||
                fish.hasClass('swimUp2') ||
                fish.hasClass('swimLeft2') ||
                fish.hasClass('swimRight3') ||
                fish.hasClass('swimUp3') ||
                fish.hasClass('swimLeft3') ||
                fish.hasClass('swimRight4') ||
                fish.hasClass('swimUp4') ||
                fish.hasClass('swimLeft4'))
        {
            fish.removeClass('idle swimRight1 swimUp1 swimLeft1 swimRight2 swimUp2 swimLeft2');
            fish.removeClass('swimRight3 swimUp3 swimLeft3 swimRight4 swimUp4 swimLeft4');
            if(getPlayerY() <= 515)
            {
                fish.addClass('swimDown1').css({ marginTop:'+=10px' });
            }
            else
            {
                fish.addClass('swimDown1').css({ marginTop:'+=0px' });
            }
        }
    }
    
    function swimLeft(fish) {
        if(fish.hasClass('swimLeft1'))
        {
            fish.removeClass('swimLeft1');
            if(getPlayerX() > 11)
            {
                fish.addClass('swimLeft2').css({ marginLeft:'-=10px' });
            }
            else
            {
                fish.addClass('swimLeft2').css({ marginLeft:'-=0px' });
            }
        }
        else if(fish.hasClass('swimLeft2'))
        {
            fish.removeClass('swimLeft2');
            if(getPlayerX() > 11)
            {
                fish.addClass('swimLeft3').css({ marginLeft:'-=10px' });
            }
            else
            {
                fish.addClass('swimLeft3').css({ marginLeft:'-=0px' });
            }
        }
        else if(fish.hasClass('swimLeft3'))
        {
            fish.removeClass('swimLeft3');
            if(getPlayerX() > 11)
            {
                fish.addClass('swimLeft4').css({ marginLeft:'-=10px' });
            }
            else
            {
                fish.addClass('swimLeft4').css({ marginLeft:'-=0px' });
            }
        }
        else if(fish.hasClass('swimLeft4'))
        {
            fish.removeClass('swimLeft4');
            if(getPlayerX() > 11)
            {
                fish.addClass('swimLeft1').css({ marginLeft:'-=10px' });
            }
            else
            {
                fish.addClass('swimLeft1').css({ marginLeft:'-=0px' });
            }
        }
        else if(fish.hasClass('idle') ||
                fish.hasClass('swimRight1') ||
                fish.hasClass('swimUp1') ||
                fish.hasClass('swimDown1') ||
                fish.hasClass('swimRight2') ||
                fish.hasClass('swimUp2') ||
                fish.hasClass('swimDown2') ||
                fish.hasClass('swimRight3') ||
                fish.hasClass('swimUp3') ||
                fish.hasClass('swimDown3') ||
                fish.hasClass('swimRight4') ||
                fish.hasClass('swimUp4') ||
                fish.hasClass('swimDown4'))
        {
            fish.removeClass('idle swimRight1 swimUp1 swimDown1 swimRight2 swimUp2 swimDown2');
            fish.removeClass('swimRight3 swimUp3 swimDown3 swimRight4 swimUp4 swimDown4');
            if(getPlayerX() > 11)
            {
                fish.addClass('swimLeft1').css({ marginLeft:'-=10px' });
            }
            else
            {
                fish.addClass('swimLeft1').css({ marginLeft:'-=0px' });
            }
        }
    }
    
    function swimRight(fish) {
        if(fish.hasClass('swimRight1'))
        {
            fish.removeClass('swimRight1');
            if(getPlayerX() <= 715)
            {
                fish.addClass('swimRight2').css({ marginLeft:'+=10px' });
            }
            else
            {
                fish.addClass('swimRight2').css({ marginLeft:'+=0px' });
            }
        }
        else if(fish.hasClass('swimRight2'))
        {
            fish.removeClass('swimRight2');
            if(getPlayerX() <= 715)
            {
                fish.addClass('swimRight3').css({ marginLeft:'+=10px' });
            }
            else
            {
                fish.addClass('swimRight3').css({ marginLeft:'+=0px' });
            }
        }
        else if(fish.hasClass('swimRight3'))
        {
            fish.removeClass('swimRight3');
            if(getPlayerX() <= 715)
            {
                fish.addClass('swimRight4').css({ marginLeft:'+=10px' });
            }
            else
            {
                fish.addClass('swimRight4').css({ marginLeft:'+=0px' });
            }
        }
        else if(fish.hasClass('swimRight4'))
        {
            fish.removeClass('swimRight4');
            if(getPlayerX() <= 715)
            {
                fish.addClass('swimRight1').css({ marginLeft:'+=10px' });
            }
            else
            {
                fish.addClass('swimRight1').css({ marginLeft:'+=0px' });
            }
        }
        else if(fish.hasClass('idle') ||
                fish.hasClass('swimLeft1') ||
                fish.hasClass('swimUp1') ||
                fish.hasClass('swimDown1') ||
                fish.hasClass('swimLeft2') ||
                fish.hasClass('swimUp2') ||
                fish.hasClass('swimDown2') ||
                fish.hasClass('swimLeft3') ||
                fish.hasClass('swimUp3') ||
                fish.hasClass('swimDown3') ||
                fish.hasClass('swimLeft4') ||
                fish.hasClass('swimUp4') ||
                fish.hasClass('swimDown4'))
        {
            fish.removeClass('idle swimLeft1 swimUp1 swimDown1 swimLeft2 swimUp2 swimDown2');
            fish.removeClass('swimLeft3 swimUp3 swimDown3 swimLeft4 swimUp4 swimDown4');
            if(getPlayerX() <= 715)
            {
                fish.addClass('swimRight1').css({ marginLeft:'+=10px' });
            }
            else
            {
                fish.addClass('swimRight1').css({ marginLeft:'+=0px' });
            }
        }
    }
    
    $(document).on('keydown keyup', function (e) {
    if (e.type == 'keydown') {
        console.log(getPlayerX());
        console.log(getPlayerY());
        // swim
        if(e.keyCode == '37')
        {
            swimLeft( $('.qFish') );
        }
        if(e.keyCode == '38')
        {
            swimUp( $('.qFish') );
        }
        if(e.keyCode == '39')
        {
            swimRight( $('.qFish') );
        }
        if(e.keyCode == '40')
        {
            swimDown( $('.qFish') );
        }
    }
    // keyup
    else
    {
        // stop
        if($('.qFish').hasClass('swimRight1') ||
           $('.qFish').hasClass('swimRight2') ||
           $('.qFish').hasClass('swimRight3') ||
           $('.qFish').hasClass('swimRight4'))
        {
            $qFish.removeClass('swimRight1 swimRight2 swimRight3 swimRight4');
            $qFish.addClass('swimRight1');
        }
        else if($('.qFish').hasClass('swimLeft1') ||
                $('.qFish').hasClass('swimLeft2') ||
                $('.qFish').hasClass('swimLeft3') ||
                $('.qFish').hasClass('swimLeft4'))
        {
            $qFish.removeClass('swimLeft1 swimLeft2 swimLeft3 swimLeft4');
            $qFish.addClass('swimLeft1');
        }
        else if($('.qFish').hasClass('swimUp1') ||
                $('.qFish').hasClass('swimUp2') ||
                $('.qFish').hasClass('swimUp3') ||
                $('.qFish').hasClass('swimUp4'))
        {
            $qFish.removeClass('swimUp1 swimUp2 swimUp3 swimUp4');
            $qFish.addClass('swimUp1');
        }
        else if($('.qFish').hasClass('swimDown1') ||
                $('.qFish').hasClass('swimDown2') ||
                $('.qFish').hasClass('swimDown3') ||
                $('.qFish').hasClass('swimDown4'))
        {
            $qFish.removeClass('swimDown1 swimDown2 swimDown3 swimDown4');
            $qFish.addClass('swimDown1');
        }
    }
    return false;
    //console.log(e.keyCode);
    });
});