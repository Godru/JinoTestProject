var activeSlide = 0;
var descriptionActive =[];
for(var i=0;i<8;i++)
    descriptionActive[i] = false;

function submitClick() {
    var inputButton = document.form.submit;
    var inputData = '';
    var inputHelp =  document.querySelector('.top__help');
    inputButton.onclick = function(){
        inputData = document.form.site.value;
        if(inputData !== '') {
            inputHelp.style.paddingTop = '15px';
            inputHelp.style.paddingBottom = '15px';
            inputHelp.innerHTML = 'Домен ' + inputData + '.ru — свободен. <a href="#" class="link">Зарегистрировать за 39₽</a>';
        }
    }
}

function scrollDown() {
    var scrolledDistance = 0;
    document.querySelector('.top__button').onclick = function(){
        scrolledDistance = parseFloat(getComputedStyle(document.querySelector('.top')).height) + parseFloat(getComputedStyle(document.querySelector('.center')).height) - window.pageYOffset;
        console.log(window.pageYOffset);
        window.scrollBy(0, scrolledDistance);
    }
}
function setScrollButtons(active){
    var buttons = document.querySelectorAll('.scroll__button');
    for(var i=0;i<3;i++){
        buttons[i].style.borderColor = 'black';
        buttons[i].style.backgroundColor = 'white';
    }
    buttons[active].style.borderColor = 'white';
    buttons[active].style.backgroundColor = 'black';
}
function scrollButtonsChange() {
    window.onscroll = function(){
        if(window.pageYOffset + screen.height/2 < parseFloat(getComputedStyle(document.querySelector('.top')).height)){
            if(activeSlide !== 0) {
                activeSlide = 0;
                setScrollButtons(activeSlide);
            }
        }
        else if(window.pageYOffset + screen.height/2 < parseFloat(getComputedStyle(document.querySelector('.top')).height) + parseFloat(getComputedStyle(document.querySelector('.center')).height)){
            if(activeSlide !== 1) {
                activeSlide = 1;
                setScrollButtons(activeSlide);
            }
        }
        else{
            if(activeSlide !== 2) {
                activeSlide = 2;
                setScrollButtons(activeSlide);
            }
        }
    }

}
function scrollButtonsClick(){
    var buttons = document.querySelectorAll('.scroll__button');
    for(var i=0;i<3;i++) {
        (function (buttonNumber) {
            buttons[buttonNumber].onclick = function () {
                switch(buttonNumber){
                    case 0:{
                        activeSlide = buttonNumber;
                        setScrollButtons(buttonNumber);
                        window.scrollBy(0, -window.pageYOffset);
                        break;
                    }
                    case 1:{
                        activeSlide = buttonNumber;
                        setScrollButtons(buttonNumber);
                        window.scrollBy(0, -window.pageYOffset + parseFloat(getComputedStyle(document.querySelector('.top')).height));
                        break;
                    }
                    case 2:{
                        activeSlide = buttonNumber;
                        setScrollButtons(buttonNumber);
                        window.scrollBy(0, -window.pageYOffset + parseFloat(getComputedStyle(document.querySelector('.top')).height) + parseFloat(getComputedStyle(document.querySelector('.center')).height));
                        break;
                    }
                }
            };
        })(i);
    }
}
function descriptionOpenClose(){
    var buttons = document.querySelectorAll('.description__button');
    var text = document.querySelectorAll('.description__text');
    var block = document.querySelectorAll('.description__block');
    var triangle = document.querySelectorAll('.description__triangle');
    for(var i=0;i<8;i++) {
        (function (buttonNumber) {
            buttons[buttonNumber].onclick = function () {
                if(descriptionActive[buttonNumber] === false) {
                    for (var i = 0; i < 8; i++) {
                        descriptionActive[i] = false;
                        text[i].style.display = 'none';
                        triangle[i].style.display = 'none';
                        block[i].style.height = '155px';
                    }
                    descriptionActive[buttonNumber] = true;
                    text[buttonNumber].style.display = 'block';
                    triangle[buttonNumber].style.display = 'block';
                    block[buttonNumber].style.height = parseFloat(getComputedStyle(text[buttonNumber]).height) + 200 + 'px';
                }else{
                    descriptionActive[buttonNumber] = false;
                    text[buttonNumber].style.display = 'none';
                    triangle[buttonNumber].style.display = 'none';
                    block[buttonNumber].style.height = '155px';
                }
            };
        })(i);
    }
}
descriptionOpenClose();
setScrollButtons(activeSlide);
scrollButtonsChange();
scrollButtonsClick();
scrollDown();
submitClick();

