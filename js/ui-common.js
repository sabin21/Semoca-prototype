
// Scroll Top Button
var btnPageTop = document.querySelector('.btn-page-top');
var actionBar = document.querySelector('.action-bar');
var actionBarSticky = actionBar.offsetTop;
var actionBarTitle = document.querySelector('#action-bar-title');

function scrollTop(){
    if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
        btnPageTop.style.opacity = "1";
    }else{
        btnPageTop.style.opacity = "0";
    };
    if(window.pageYOffset >= actionBarSticky){
        actionBar.classList.add("sticky")
    }else{
        actionBar.classList.remove("sticky");
    };
}
window.onscroll = function(){ scrollTop()};

// GNB Submenu
var gnbMenus = document.getElementsByClassName('gnb-menu');
var gnbSubMenus = document.getElementsByClassName('sub-nav');

for(var i = 0; i < gnbMenus.length; i++){
    gnbMenus[i].addEventListener('mouseenter', function(){
        gnbSubMenus[0].classList.add('active');                
    });
    gnbMenus[i].addEventListener('mouseleave', function(){
        gnbSubMenus[0].classList.remove('active');
    });
}