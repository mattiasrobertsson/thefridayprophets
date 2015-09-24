if ($(window).width() < 361) {
        $(function() {
        	$('body').vegas({
                slides: [
                    { src: 'img/socialwreck.jpg' },
                      	]
                    });
                });
            } else {
        	$(function() {
                $('body').vegas({
                  slides: [
                    { src: 'img/jojo2.jpg' },
                  ]
                });
            });
            }

$(".animsition").animsition({
        inClass: 'fade-in-down-lg',
        outClass: 'fade-out-down-lg',
        inDuration: 1000,
        outDuration: 500
});
