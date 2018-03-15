var v = document.querySelector('.image')
var lay1 = document.querySelector('#layer1')
var lay2 = document.querySelector('#layer2')
var lay3 = document.querySelector('#layer3')
var lay4 = document.querySelector('#layer4')
var lay5 = document.querySelector('#layer5')
var lay6 = document.querySelector('#layer6')
var lay7 = document.querySelector('#layer7')
var para = document.querySelector('.paragraph')
var mainPara = document.querySelector('.parallax')
var activeFloat = false

// window.addEventListener('scroll', function () {
//     var x = this.pageYOffset;
//     console.log(top)
//     lay7.style.transform = `translate3d(0px,-${x * 1}px,0px)`
//     console.log(x*1)
//     lay6.style.transform = `translate3d(0px,-${x * 0.6}px,0px)`
//     console.log(x * 0.8)
//     lay5.style.transform = `translate3d(0px,-${x * 0.6}px,0px)`
//     console.log(x * 0.6)
//     lay4.style.transform = `translate3d(0px,-${x * 0.4}px,0px)`
//     console.log(x * 0.4)
//     lay3.style.transform = `translate3d(0px,-${x * 0.3}px,0px)`
//     console.log(x * 0.3)
//     lay2.style.transform = `translate3d(0px,-${x * 0.2}px,0px)`
//     console.log(x * 0.2)
//     lay1.style.transform = `translate3d(0px,-${x * 0.1}px,0px)`
//     console.log(x * 0.1)
    

// })

window.addEventListener("scroll", function (event) {

    var top = this.pageYOffset;

    var layers = document.getElementsByClassName("layers");
    var layer, speed, yPos;
    for (var i = 0; i < layers.length; i++) {
        layer = layers[i];
        speed = layer.getAttribute('data-speed');
        var yPos = -(top * speed / 100);
        layer.setAttribute('style', 'transform: translate3d(0px, ' + yPos + 'px, 0px)');

    }

    if(activeFloat){
        var a = 200
        while(a > 0){
            document.querySelector('.works a:nth-child(1)').style.transform = `translate(-${a},${a})`
            a-=10;
        }
    }

})

var waypoint = new Waypoint({
    element: document.querySelector('.profile'),
    handler: function () {
        document.querySelector('.bio h3').style.transform = 'translateY(0%)'
    },
    offset: 80
})

var waypoint1 = new Waypoint({
    element: document.querySelector('.works'),
    handler: function () {
        console.log(this.options.offset)
        activeFloat = true;
    },
    offset: '70%'
})
