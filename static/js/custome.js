$(document).ready(function() {
    var options = {
        menu : ['Profile','About','Skills', 'Portfolio'],
        position : 'right',
        themeColor : '#1ed1dc',
        id : 'exampleSide',
        afterInit : function(){
            var currentIndex = parseInt($('#fullpage').find('.fp-section.active').attr('data-anchor'));
            sidenav.activeMenuAndTag(currentIndex);
        }
    }
    var sidenav = new SideNavi(options);
    $('#fullpage').fullpage({
        sectionsColor: ['#2979ff', '#e6e6e6', '#e0e0e0', '#fff'],
        anchors: ['1', '2', '3', '4'],
        onLeave: function(index,nextIndex){
            sidenav.activeMenuAndTag(nextIndex);
        }
    });
});


var section_1 = new Typed('#tel > span', {
    strings: ['Hello !', 'I am Yoshan Amarathunga' ,'I am working as a<strong> Full Stack Developer</strong>'],
    typeSpeed: 70,
    backSpeed: 70,
    smartBackspace: true,
    loop: true
});
