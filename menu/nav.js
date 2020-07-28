/*function onclick(){
(document).ready(function()
{
    ('menu').click(function(){
    ('#icon1').toggle.class('active')
    ('nav').toggle.class('active')
    })
})
}*/

const selectElement=(element) => document.querySelector(element);
selectElement('menu'),addEventListener('click',() =>{
    selectElement ('header').classList.toggle('active')
});

function onclickmenu(){
    document.getElementById("menu").classList.toggle("change-drop")
    document.getElementById("drop").classList.toggle("change-drop")
    /*document.getElementById("nav").classList.toggle("change-nav")*/
}

(function r (win,doc){
    document.getElementById('menu');
console.log(document.getElementById('menu'));
let h=2;
console.log(h)
}

)(window,document);


