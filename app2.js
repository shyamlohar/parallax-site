var v = $('.image')
var lay1 = $('#layer1')
var lay2 = $('#layer2')
var lay3 = $('#layer3')
var lay4 = $('#layer4')
var lay5 = $('#layer5')
var lay6 = $('#layer6')
var lay7 = $('#layer7')
var para = $('.paragraph')
var mainPara = $('.parallax')



$(window).scroll(function(){
    var top = $(this).scrollTop()

    var layers = $(".layers");
    var layer, speed, yPos;
    for (var i = 0; i < layers.length; i++) {
        layer = layers[i];
        speed = layer.getAttribute('data-speed');
        var yPos = -(top * speed / 100);
        layer.setAttribute('style', 'transform: translate3d(0px, ' + yPos + 'px, 0px)')

    }

    if (top > $('.profile').offset().top- $(window).height()/3.2){
        console.log('kek')
        $('.bio h3').css({'transform':'translateY(0%)'})
    }

    if (top > $('.works').offset().top - $(window).height()) {
        var offset = (Math.min(0, top - $('.works').offset().top + $(window).height() - 350)).toFixed();

        $('.works a:nth-child(1)').css({ 'transform': 'translate(' + offset + 'px, ' + Math.abs(offset * 0.2) + 'px)' });

        $('.works a:nth-child(3)').css({ 'transform': 'translate(' + Math.abs(offset) + 'px, ' + Math.abs(offset * 0.2) + 'px)' });
    }
})

