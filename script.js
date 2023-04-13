/**************** RESIZE ****************/ 

let userDevice = document.querySelector('#deviceMessage');
switch(true) {
    case (0 < window.innerWidth && window.innerWidth < 768):
        userDevice.innerHTML = 'small device';
        break;
    case (768 <= window.innerWidth && window.innerWidth < 1200):
        userDevice.innerHTML = 'medium device';
        break;
    case (1200 <= window.innerWidth):
        userDevice.innerHTML = 'large device';
        break;
}

window.addEventListener('resize', () => {
    switch(true) {
        case (0 < window.innerWidth && window.innerWidth < 768):
            userDevice.innerHTML = 'small device';
            break;
        case (768 <= window.innerWidth && window.innerWidth < 1200):
            userDevice.innerHTML = 'medium device';
            break;
        case (1200 <= window.innerWidth):
            userDevice.innerHTML = 'large device';
            break;
    }
})


/**************** CLICK & CHANGE ****************/ 

let iconDefaultColor = 'black';
let iconUserColor = document.querySelector('#borderFill__controls__input');
iconUserColor.addEventListener('change', (event) => {
    iconDefaultColor = event.target.value;
})

let iconButtons = document.querySelectorAll('.borderFill__controls button');
let iconShapeContainers = document.querySelectorAll('.borderFill__icons__icon');
let iconShapes = document.querySelectorAll('.borderFill__icons__icon span');

iconButtons.forEach((iconButton) => {
    iconButton.addEventListener('click', (event) => {
        switch(event.target.innerHTML) {
            case 'BORDER MODE':
                iconShapeContainers.forEach((iconShapeContainer) => {   
                    iconShapeContainer.style.border = `4px solid ${iconDefaultColor}`;
                    iconShapeContainer.style.backgroundColor = 'white';
                    iconShapes.forEach((iconShape) => {
                        iconShape.style.color = iconDefaultColor;
                    })
                })
                break;
            case 'FILL MODE':
                iconShapeContainers.forEach((iconShapeContainer) => {
                    iconShapeContainer.style.backgroundColor = iconDefaultColor;
                    iconShapeContainer.style.border = 'white';
                    iconShapes.forEach((iconShape) => {
                        iconShape.style.color = 'white';
                    })
                })
                break;   
            case 'RESET':
                iconShapeContainers.forEach((iconShapeContainer) => {
                    iconShapeContainer.style.border = '4px solid black';
                    iconShapeContainer.style.backgroundColor = 'white';
                    iconShapes.forEach((iconShape) => {
                        iconShape.style.color = 'black';
                    })
                })
                iconDefaultColor = 'rgb(0,0,0)';
                iconUserColor.value = 'rgb(0,0,0)';
                break;
        }  
    })
})


/**************** CHANGE ****************/ 

let selectedOption = document.querySelector('.optionSelect__dropwmenu select');
let selectedOptionOutput = document.querySelector('.optionSelect__output');
selectedOption.addEventListener('change', (event) => {
    selectedOptionOutput.innerHTML = `Your choice is <strong>${event.target.value}</strong>`;
})

/**************** CLICK ****************/ 

let colorSelectContainer = document.querySelector('.colorPick__list div');
let colorSelectText = document.querySelector('.colorPick__list div p');
let colorOptionsContainer = document.querySelector('.colorPick__list ul');
let colorOptionsItems = document.querySelectorAll('.colorPick__list ul li');
let colorSelectOutput = document.querySelector('.colorPick__output');

colorSelectContainer.addEventListener('click', (event) => {
    if(colorOptionsContainer.classList.contains('showClass')) {
        colorOptionsContainer.classList.remove('showClass');
    } else {
        colorOptionsContainer.classList.add('showClass');
    }
})

colorOptionsItems.forEach((colorOptionsItem) => {
    colorOptionsItem.addEventListener('click', (event) => {
        switch(colorOptionsItem.innerHTML) {
            case 'Orange':
                colorSelectContainer.style.backgroundColor = '#ffd280';
                break;
            case 'Blue':
                colorSelectContainer.style.backgroundColor = '#99d6ff';
                break;
            case 'Yellow':
                colorSelectContainer.style.backgroundColor = '#ffffb3';
                break;
            case 'Brown':  
                colorSelectContainer.style.backgroundColor = '#c38d8d';
                break;         
        }
            
        colorSelectText.setAttribute('value', event.target.innerHTML);
        colorSelectText.innerHTML = event.target.innerHTML;
        colorSelectOutput.innerHTML = `You are <strong>${colorSelectText.innerHTML}</strong>`;
        colorOptionsContainer.classList.remove('showClass');
    })
})


/**************** HOVER ****************/ 

/**************** ANIMATION/TRANSITION ****************/ 

let animationColorContainers = document.querySelectorAll('.colorPalette__wrapper_animation div');
animationColorContainers.forEach((canimationColorContainer) => {
    canimationColorContainer.addEventListener('mouseover', (event) => {
        console.log(event.target);
        switch(event.target.className) {
            case 'dirtyBlue':
                event.target.style.backgroundColor = '#2e8e9e';
                event.target.style.color = 'white';
                break;
            case 'bone':
                event.target.style.backgroundColor = '#E8DBC9';
                event.target.style.color = 'white';
                break;
            case 'summerGreen':
                event.target.style.backgroundColor = '#9cb9b5';
                event.target.style.color = 'white';
                break;   
        }             
    })
})

animationColorContainers.forEach((canimationColorContainer) => {
    canimationColorContainer.addEventListener('transitionend', (event) => {
        switch(event.target.className) {
            case 'dirtyBlue':
                event.target.style.backgroundColor = 'rgba(46, 142, 158, 0.5)';
                event.target.style.color = 'white';
                break;
            case 'bone':
                event.target.style.backgroundColor = 'rgba(232, 219, 201, 0.5)';
                event.target.style.color = 'white';
                break;
            case 'summerGreen':
                event.target.style.backgroundColor = 'rgba(156, 185, 181, .5)';
                event.target.style.color = 'white';
                break;   
        }             
    })
})


/**************** MOUSEOVER/MOUSEOUT ****************/ 

let hoverColorContainers = document.querySelectorAll('.colorPalette__wrapper_mouseout div');
hoverColorContainers.forEach((hoverColorContainer) => {
    hoverColorContainer.addEventListener('mouseover', (event) => {
        switch(event.target.className) {
            case 'dirtyBlue':
                event.target.style.backgroundColor = '#2e8e9e';
                event.target.style.color = 'white';
                break;
            case 'bone':
                event.target.style.backgroundColor = '#E8DBC9';
                event.target.style.color = 'white';
                break;
            case 'summerGreen':
                event.target.style.backgroundColor = '#9cb9b5';
                event.target.style.color = 'white';
                break;   
        }             
    })
})

hoverColorContainers.forEach((hoverColorContainer) => {
    hoverColorContainer.addEventListener('mouseout', (event) => {
        switch(event.target.className) {
            case 'dirtyBlue':
                event.target.style.backgroundColor = 'rgba(46, 142, 158, 0.5)';
                event.target.style.color = 'white';
                break;
            case 'bone':
                event.target.style.backgroundColor = 'rgba(232, 219, 201, 0.5)';
                event.target.style.color = 'white';
                break;
            case 'summerGreen':
                event.target.style.backgroundColor = 'rgba(156, 185, 181, 0.5)';
                event.target.style.color = 'white';
                break;   
        }             
    })
})


// keydown
let keydownInput = document.querySelector('#keydownEvent__input');
let keydownOutput = document.querySelector('.keydownEvent__userOutput');
keydownInput.addEventListener('keydown', (event) => {
    switch(event.key) {
        case 'Enter':
        case 'ArrowUp':
        case 'ArrowDown':
        case 'ArrowLeft':
        case 'ArrowRight':  
        case 'Tab':
        case 'CapsLock':  
        case 'Shift':
        case 'Alt': 
        case 'Control': 
        case 'Meta': 
        case 'Escape': 
        case 'Insert':
        case 'Delete':
        case 'End':
        case 'Home':
        case 'PageUp':
        case 'PageDown':
        case 'NumLock':
        case 'Clear':
            return;
        default:
            keydownOutput.innerText += event.key;
    }

    if(event.key == 'Backspace') {
        keydownOutput.innerText = keydownOutput.innerText.substr(0, keydownOutput.innerText.length-10);
    }
})








