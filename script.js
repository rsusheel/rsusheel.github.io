var blink = true;
var x=0;
var blinkAnim;

function blinkLine(){
    blink = !blink;
    x++;
    if(x%60 > 30){
        document.getElementsByClassName('line')[0].style.opacity = '1';
    }else{
        document.getElementsByClassName('line')[0].style.opacity = '0';
    }
    blinkAnim = window.requestAnimationFrame(blinkLine);
}
var options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0
};



















var observerOne = new IntersectionObserver(
    (entry) => {
        if(entry[0].intersectionRatio > 0.7) {
            blinkLine();
            document.getElementsByClassName('one-name')[0].style.borderBottomColor = '#3838404f';
        }else{
            window.cancelAnimationFrame(blinkAnim);
            document.getElementsByClassName('line')[0].style.opacity = '0';
            document.getElementsByClassName('one-name')[0].style.borderBottomColor = '#383840';
        }
    }, options);

var obsItemOne = document.getElementsByClassName('obs-one')[0];

observerOne.observe(obsItemOne);



var aaa = document.getElementsByClassName('name-here')[0];






var observerTwo = new IntersectionObserver(
    (entry) => {
        if(entry[0].intersectionRatio > 0.7) {
            aaa.innerHTML='S';
        }else if(aaa.innerHTML === 'S' && entry[0].intersectionRatio < 0.6){
            document.getElementsByClassName('name-here')[0].innerHTML='';
        }
    }, options);

var obsItemTwo = document.getElementsByClassName('obs-two')[0];

observerTwo.observe(obsItemTwo);


















var observerThree = new IntersectionObserver(
    (entry) => {
        if(entry[0].intersectionRatio > 0.7) {
            document.getElementsByClassName('name-here')[0].innerHTML='SU';
        }else if(aaa.innerHTML === 'SU' && entry[0].intersectionRatio < 0.6){
            document.getElementsByClassName('name-here')[0].innerHTML='S';
        }
    }, options);

var obsItemThree = document.getElementsByClassName('obs-three')[0];

observerThree.observe(obsItemThree);







var observerFour = new IntersectionObserver(
    (entry) => {
        if(entry[0].intersectionRatio > 0.7) {
            document.getElementsByClassName('name-here')[0].innerHTML='SUS';
        }else if(aaa.innerHTML === 'SUS' && entry[0].intersectionRatio < 0.6){
            document.getElementsByClassName('name-here')[0].innerHTML='SU';
        }
    }, options);

var obsItemFour = document.getElementsByClassName('obs-four')[0];

observerFour.observe(obsItemFour);





var observerFive = new IntersectionObserver(
    (entry) => {
        if(entry[0].intersectionRatio > 0.7) {
            document.getElementsByClassName('name-here')[0].innerHTML='SUSH';
        }else if(aaa.innerHTML === 'SUSH' && entry[0].intersectionRatio < 0.6){
            document.getElementsByClassName('name-here')[0].innerHTML='SUS';
        }
    }, options);

var obsItemFive = document.getElementsByClassName('obs-five')[0];

observerFive.observe(obsItemFive);






var observerSix = new IntersectionObserver(
    (entry) => {
        if(entry[0].intersectionRatio > 0.7) {
            document.getElementsByClassName('name-here')[0].innerHTML='SUSHE';
        }else if(aaa.innerHTML === 'SUSHE' && entry[0].intersectionRatio < 0.6){
            document.getElementsByClassName('name-here')[0].innerHTML='SUSH';
        }
    }, options);

var obsItemSix = document.getElementsByClassName('obs-six')[0];

observerSix.observe(obsItemSix);






var observerSeven = new IntersectionObserver(
    (entry) => {
        if(entry[0].intersectionRatio > 0.7) {
            document.getElementsByClassName('name-here')[0].innerHTML='SUSHEE';
        }else if(aaa.innerHTML === 'SUSHEE' && entry[0].intersectionRatio < 0.6){
            document.getElementsByClassName('name-here')[0].innerHTML='SUSHE';
        }
    }, options);

var obsItemSeven = document.getElementsByClassName('obs-seven')[0];

observerSeven.observe(obsItemSeven);




var observerEight = new IntersectionObserver(
    (entry) => {
        console.log(entry);
        if(entry[0].intersectionRatio > 0.7) {
            document.getElementsByClassName('name-here')[0].innerHTML='SUSHEEL';
        }else if(aaa.innerHTML === 'SUSHEEL' && entry[0].intersectionRatio < 0.6){
            document.getElementsByClassName('name-here')[0].innerHTML='SUSHEE';
        }
    }, options);

var obsItemEight = document.getElementsByClassName('obs-eight')[0];

observerEight.observe(obsItemEight);









var observerNine = new IntersectionObserver(
    (entry) => {
        console.log(entry);
        if(entry[0].intersectionRatio > 0.7){
            document.getElementsByClassName('two-block')[0].style.height = '200px';
        }else{
            document.getElementsByClassName('two-block')[0].style.height = '0px';
        }
        
    }, options);

var obsItemNine = document.getElementsByClassName('obs-nine')[0];

observerNine.observe(obsItemNine);







var observerTen = new IntersectionObserver(
    (entry) => {
        if(entry[0].intersectionRatio > 0.7){
            document.getElementsByClassName('two-block')[0].innerHTML = "I'M A FRONTEND <span class='block-dev'>DEV</span>";
        }else{
            document.getElementsByClassName('two-block')[0].innerHTML = '';
        }
        
    }, options);

var obsItemTen = document.getElementsByClassName('obs-ten')[0];

observerTen.observe(obsItemTen);










var bbb = document.getElementsByClassName('two-block')[0];

var observerEleven = new IntersectionObserver(
    (entry) => {
        if(entry[0].intersectionRatio > 0.7){
            document.getElementsByClassName('two-block')[0].innerHTML = "AND";
        }else if(bbb.innerHTML === "AND" && entry[0].intersectionRatio < 0.6){
            document.getElementsByClassName('two-block')[0].innerHTML = `I'M A FRONTEND <span class="block-dev">DEV</span>`;
        }
        
    }, options);

var obsItemEleven = document.getElementsByClassName('obs-eleven')[0];

observerEleven.observe(obsItemEleven);









var observerTwelve = new IntersectionObserver(
    (entry) => {
        if(entry[0].intersectionRatio > 0.7){ 
            document.getElementsByClassName('two-block')[0].innerHTML = '<span class="thisis">THIS IS MY</span><span class="portfolio">PORTFOLIO</span><span class="resume-pg">Resume</span>';
        }else if(bbb.innerHTML === '<span class="thisis">THIS IS MY</span><span class="portfolio">PORTFOLIO</span>' && entry[0].intersectionRatio < 0.6){
            document.getElementsByClassName('two-block')[0].innerHTML = "AND";
        }
        
    }, options);

var obsItemTwelve = document.getElementsByClassName('obs-twelve')[0];

observerTwelve.observe(obsItemTwelve);
