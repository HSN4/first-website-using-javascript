let aaa = document.querySelector('.spa')
let toggler = document.querySelector('.toggler')
let nav = document.querySelector('nav')
let close = document.querySelector('.close')


toggler.onclick = function(){
    nav.classList.add('open')
    aaa.classList.add('shadow')
}
close.onclick =function(){
    nav.classList.remove('open')
    aaa.classList.remove('shadow')
}

// srart slider
var sliderImage = Array.from(document.querySelectorAll('.slider-con img'))

var currentSlide= 1;

var count = sliderImage.length;
 
var nextButton =document.getElementById('next');
var prevButton = document.getElementById('prev');

nextButton.onclick=prevSlide;
prevButton.onclick=nextSlide;

// ul
var paginationElement = document.createElement('ul');
paginationElement.setAttribute('id','pagination-ul' );
for (var i=1 ; i<=count ; i++){

    var paginationItem = document.createElement('li');
    paginationItem.setAttribute('data-index', i);
   
    paginationElement.appendChild(paginationItem); 
}
document.getElementById("indicators").appendChild(paginationElement);

var paginationUl=document.getElementById('pagination-ul')

var paginationBullets = Array.from(document.querySelectorAll('#pagination-ul li'))

checker();

function nextSlide(){
    if(currentSlide == 5){
        currentSlide = 1;
        checker();
    }else{
        currentSlide++;
        checker();
    }
   
}
function prevSlide(){
    if(currentSlide == 1){
        currentSlide = 5;
        checker();
    }else{
        currentSlide--;
        checker();
    }
}
function checker(){
 
    removeall();

    sliderImage[currentSlide - 1].classList.add('active');

    paginationUl.children[currentSlide - 1].classList.add('active')
}
function removeall(){
    sliderImage.forEach(function(img){
        img.classList.remove('active');
    });

    paginationBullets.forEach(function(lii){
        lii.classList.remove('active')
    })
}

var clos=document.querySelector('.clos')
document.querySelectorAll('.images img').forEach(im =>{
    im.onclick = () =>{
        document.querySelector('.img1 img').classList.add('oop')
        document.querySelector('.img1').classList.add('op')
        document.querySelector('.img1 img').src=im.getAttribute('src') 
        clos.style.display='block';
        
  
    }
})
clos.onclick = function(){
    document.querySelector('.img1 img').classList.remove('oop')
    document.querySelector('.img1').classList.remove('op')
    document.querySelector('.img1 img').src="images/pexels-photo-4545253.jpeg";
    clos.style.display='none';
}
//////////
var butto = document.querySelector('.des');
var butt = document.querySelector('.de');
var but = document.querySelector('.d');
var dis = document.getElementById('info');
var dis1 = document.getElementById('info1');
var dis2 = document.getElementById('info2');

butto.onclick=function(){
    dis.style.display='flex';
    dis1.style.display='none';
    dis2.style.display='none';
    butt.classList.remove('active')
    but.classList.remove('active')
    butto.classList.add('active')
}
butt.onclick=function(){
    dis1.style.display='flex';
    dis.style.display='none'
    dis2.style.display='none'
    butto.classList.remove('active')
    but.classList.remove('active')
    butt.classList.add('active')
}
but.onclick=function(){
    dis2.style.display='flex';
    dis1.style.display='none';
    dis.style.display='none'
    butto.classList.remove('active')
    butt.classList.remove('active')
    but.classList.add('active')
}

// comment 

var allbox = Array.from(document.querySelectorAll('.user'));
currentbox = 0;
var leftbutt = document.querySelector('#left');
var rightbutt = document.querySelector('#right');
var circle =Array.from(document.querySelectorAll('.circle ul li'));
console.table(circle);


checkbox()


leftbutt.onclick=function(){
    if(currentbox == 0){
        currentbox=1
        checkbox()
    }else{
        currentbox--
        checkbox()
    }  
}
rightbutt.onclick=function(){
    if(currentbox == 1){
        currentbox = 0
        checkbox()
    }else{
        currentbox++
        checkbox()
    }
}
function checkbox(){
    deletebox()
    allbox[currentbox].classList.add('active');
    circle[currentbox].classList.add('active');
}
function deletebox(){
    allbox.forEach(function(a){
        a.classList.remove('active');
    });
    circle.forEach(function(li){
        li.classList.remove('active')
    })

}

