(function () {
    'use strict';

    function trackScroll() {
        var scrolled = window.pageYOffset;
        var coords = document.documentElement.clientHeight;

        if (scrolled > coords) {
            goTopBtn.classList.add('back_to_top-show');
        }
        if (scrolled < coords) {
            goTopBtn.classList.remove('back_to_top-show');
        }
    }

    function backToTop() {
        if (window.pageYOffset > 0) {
            window.scrollBy(0, -80);
            setTimeout(backToTop, 0);
        }
    }

    var goTopBtn = document.querySelector('.back_to_top');

    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);
})();

var largeImg = document.getElementById('largeImg');

var thumbs = document.getElementById('thumbs');

thumbs.onclick = function (e) {
    var target = e.target;

    while (target != this) {

        if (target.nodeName == 'A') {
            showThumbnail(target.href, target.title);
            return false;
        }

        target = target.parentNode;
    }

}

function showThumbnail(href, title) {
    largeImg.src = href;
    largeImg.alt = title;
}


/* предзагрузка */
var imgs = thumbs.getElementsByTagName('img');
for (var i = 0; i < imgs.length; i++) {
    var url = imgs[i].parentNode.href;
    var img = document.createElement('img');
    img.src = url;
}

function setBigImage(foto) {
    document.getElementById("bigimg").src = foto.src;
    document.body.scrollTop = document.documentElement.scrollTop = 0;
}