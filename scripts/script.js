const playerShip = document.querySelector('.player');
const playArea = document.querySelector('#main-play-area');
const aliensImg = ['../img/monster-1.png','../img/monster-2.png', '../img/monster-3.png'];

function flyShip(event){
    switch(event.key){
        case 'ArrowUp':
            event.preventDefault();
            moveUp();
            break;
        case 'ArrowDown':
            event.preventDefault();
            moveDown();
            break;
        case ' ':
                 event.preventDefault();
                 shootLazer();
                break;
    }
}

function moveUp(){
    let topPosition = getComputedStyle(playerShip).getPropertyValue('top');
    let position = parseInt(topPosition);
    if(position<=0){
        position=0;
        playerShip.style.top='${position}px';
    }
    else{
        position-=50;
        playerShip.style.top=`${position}px`;

    }
}

function moveDown(){
    let topPosition = getComputedStyle(playerShip).getPropertyValue('top');
    let position = parseInt(topPosition);
    let shipHeight = parseInt(getComputedStyle(playerShip).getPropertyValue('height'));
    let mapHeight = parseInt(getComputedStyle(playArea).getPropertyValue('height'));
    let heightLimit = mapHeight - shipHeight; 
    if(position>=heightLimit){
        position=heightLimit;
        playerShip.style.top=`${position}px`;
    }
    else{
        position+=50;
        playerShip.style.top=`${position}px`;
    }
}


function shootLazer(){
    let lazer = createLazerElement();
    playArea.appendChild(lazer);
    moveLazer(lazer);
}

function createLazerElement(){
    let xPosition = parseInt(getComputedStyle(playerShip).getPropertyValue('left'));
    let yPosition = parseInt(getComputedStyle(playerShip).getPropertyValue('top'));
    let newLazer = document.createElement('img');
    newLazer.src = '../images/shoot.png';
    newLazer.classList.add('lazer');
    newLazer.style.left = `${xPosition}px`;
    newLazer.style.top = `${yPosition-10}px`;
    return newLazer;
}

function moveLazer(lazer){
    let lazerInterval = setInterval(()=>{
        let xPosition = parseInt(lazer.style.left);
        let aliens = document.querySelectorAll('.alien');

        aliens;forEach(alien)=>{
            if(checkLazerCollision(lazer,alien){
                alien.src = '..img/explostion.png';
                alien.classList.remove('alien');
                alien.classList.add('dead-alien');
            })
        }
        if(xPosition===340){
            lazer.remove();
        }
        else{
            lazer.style.left = `${xPosition+8}px`;
        }
    },10);
}

function createAliens(){
    let newAlien = document.createElement('img');
    let alienSprite = aliensImg[Math.floor(Math.random*aliensImg.length)];
    newAlien.src=alienSprite;
    newAlien.classList.add('alien');
    newAlien.classList.add('alien-transition');
    newAlien.style.left='370px';
    newAlien.style.top=`${Math.random()*330)+30}`;
    playArea.appendChild(newAlien);
    moveAlien(newAlien);
}

function moveAlien(alien){
    let moveAlienInterval = setInterval(() =>{
        let xPosition = parseInt(getComputedStyle(alien).getPropertyValue('left'));
        if(xPosition <=50){
            if(Array.from(alien.classList.includes('dead-alien'))){
                alien.remove();
            }else{
                gameOver();
            ]
        }else{
            alien.style.left=`${xPosition-4}px`;
        }
    },30)
}

function checkLazerCollision(lazer,alien){
    let lazerTop = parseInt(lazer.style.top);
    let lazerleft = parseInt(lazer.style.left);
    let lazerBottom = lazertop-20;
    let alienTop = parseInt(alient.style.top);
    let alientLeft=parseint(alien.style.left);
    let alienBottom = alienTop-30;
    if9lazerLeft !=340 && lazerL4eft +40>=alienLeft){
        if(laserTop <=alienTop && lazerTop >=alienBottom){
            return true;
        }else{
            return false;
        }
    }else{
        return false;
    }
    
}
 





window.addEventListener('keydown', flyShip);