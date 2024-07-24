
var typed = new Typed('#element', {
    strings: ['about frontend and backend technologies', '&amp; Drive impactful contributions in web development.'],
    typeSpeed: 60,

});

let tablinks = document.getElementsByClassName('tab-links');
let tabContents = document.getElementsByClassName('tab-contents')


const opentab = (tabname)=>{
    for(link of tablinks){
        link.classList.remove("active-links");
    }
    for(content of tabContents){
        content.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-links");
    document.getElementById(tabname).classList.add("active-tab");
}

let sidemenu = document.getElementById('sideMenu');

const openMenu = ()=>{
    sidemenu.style.right = "0";
    
}
const closeMenu = ()=>{
    sidemenu.style.right = "-200px";

}