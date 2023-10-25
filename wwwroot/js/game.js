let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade'
    },
    scene: {
        init: init,
        preload: preload,
        create: create,
        update: update
    },
    autoCenter: true
};

let game = new Phaser.Game(config);
let currentIndex;
let state;
let upText = [];
let downText = [];

function init(){
    state = 0;
    currentIndex = 0
}

function preload() {
    this.load.image('arrow', './assets/white_arrow.png');
    
    this.load.json('steps', './data/options.json'); 

    this.load.spritesheet('book', './assets/book_sheet.png', {
        frameWidth: 64,
        frameHeight: 64
    });    
}

function create() {
    stepsJSON = this.cache.json.get('steps');
    
    welcomeText = this.add.text(170, 200, stepsJSON.options[currentIndex].answer,
        { fontFamily: 'Arial', fontSize: 18, color: '#ffffff' }); 
        
    for(i=1; i<16; i++){
        upText[i] = this.add.text(150, 210, stepsJSON.options[currentIndex + i].answer[0],
            { fontFamily: 'Arial', fontSize: 18, color: '#ffffff' });
        upText[i].alpha = 0;
    }

    for(i=1; i<16; i++){
        downText[i] = this.add.text(150, 370, stepsJSON.options[currentIndex + i].answer[1],
            { fontFamily: 'Arial', fontSize: 18, color: '#ffffff' });
        downText[i].alpha = 0;
    }

    arrowStart = this.add.image(280, 460, 'arrow').setInteractive();
    arrowStart.setScale(0.17);
    arrowStart.setVisible(true);
    arrowStart.on('pointerdown', changeState);
        
    bookPageAnim = this.anims.create({
        key: 'bookPage',
        frames: this.anims.generateFrameNumbers('book'),
        frameRate: 5,
        repeat: -1,
        hideOnComplete: true
    });
        
    bookAnim = this.add.sprite(400, 450, 'book');
    bookAnim.play('bookPage');
    bookAnim.setVisible(true);
        
    arrowButton1 = this.add.image(100, 220, 'arrow').setInteractive();
    arrowButton1.setScale(0.17);
    arrowButton1.setVisible(false);
    arrowButton1.on('pointerdown', changeStateUp);
        
    arrowButton2 = this.add.image(100, 380, 'arrow').setInteractive();
    arrowButton2.setScale(0.17);
    arrowButton2.setVisible(false);
    arrowButton2.on('pointerdown', changeStateDown);
}
    
function update() {
}

function changeState(){
    state += 1;
    updateScreen();
}

function changeStateUp(){
    switch(state){
        case 1:
            state = 2;
            updateScreen();
            break;
        case 2:
            state = 4;
            updateScreen();
            break;
        case 3:
            state = 6;
            updateScreen();
            break;
        case 4:
            state = 8;
            updateScreen();
            break;
        case 5:
            state = 10;
            updateScreen();
            break;
        case 6:
            state = 12;
            updateScreen();
            break;
        case 7:
            state = 14;
            updateScreen();
            break;
        case 8:
            updateScreen();
            break;
        case 10:
            updateScreen();
            break;
        case 12:
            updateScreen();
            break;
        case 14:
            updateScreen();
            break;
    }
}

function changeStateDown(){
    switch(state){
        case 1:
            state = 3;
            updateScreen();
            break;
        case 2:
            state = 5;
            updateScreen();
            break;
        case 3:
            state = 7;
            updateScreen();
            break;
        case 4:
            state = 9;
            updateScreen();
            break;
        case 5:
            state = 11;
            updateScreen();
            break;
        case 6:
            state = 13;
            updateScreen();
            break;
        case 7:
            state = 15;
            updateScreen();
            break;
        case 9:
            updateScreen();
            break;
        case 11:
            updateScreen();
            break;
        case 13:
            updateScreen();
            break;
        case 15:
            updateScreen();
            break;
    }
}

function updateScreen(){

    switch(state){
        case 1:
            welcomeText.alpha = 0;
            currentIndex += 1;
            bookAnim.setVisible(false);
            arrowStart.setVisible(false);
        
            arrowButton1.setVisible(true);
            arrowButton2.setVisible(true);
        
            upText[1].alpha = 1;
            downText[1].alpha = 1;

            break;

        case 2:
            upText[1].alpha = 0;
            downText[1].alpha = 0;

            upText[2].alpha = 1;
            downText[2].alpha = 1;

            break;

        case 3 :
            upText[1].alpha = 0;
            downText[1].alpha = 0;

            upText[3].alpha = 1;
            downText[3].alpha = 1;

            break;

        case 4:
            upText[2].alpha = 0;
            downText[2].alpha = 0;

            upText[4].alpha = 1;
            downText[4].alpha = 1;

            break;
        
        case 5:
            upText[2].alpha = 0;
            downText[2].alpha = 0;

            upText[5].alpha = 1;
            downText[5].alpha = 1;

            break;

        case 6:
            upText[3].alpha = 0;
            downText[3].alpha = 0;

            upText[6].alpha = 1;
            downText[6].alpha = 1;

            break;

        case 7:
            upText[3].alpha = 0;
            downText[3].alpha = 0;

            upText[7].alpha = 1;
            downText[7].alpha = 1;

            break;

        case 8:
            upText[4].alpha = 0;
            downText[4].alpha = 0;

            arrowButton1.setVisible(false);
            arrowButton2.setVisible(false);

            upText[8].alpha = 1;

            break;

        case 9:
            upText[4].alpha = 0;
            downText[4].alpha = 0;

            arrowButton1.setVisible(false);
            arrowButton2.setVisible(false);

            upText[9].alpha = 1;

            break;

        case 10:
            upText[5].alpha = 0;
            downText[5].alpha = 0;

            arrowButton1.setVisible(false);
            arrowButton2.setVisible(false);

            upText[10].alpha = 1;

            break;

        case 11:
            upText[5].alpha = 0;
            downText[5].alpha = 0;

            arrowButton1.setVisible(false);
            arrowButton2.setVisible(false);

            upText[11].alpha = 1;

            break;

        case 12:
            upText[6].alpha = 0;
            downText[6].alpha = 0;

            arrowButton1.setVisible(false);
            arrowButton2.setVisible(false);

            upText[12].alpha = 1;

            break;

        case 13:
            upText[6].alpha = 0;
            downText[6].alpha = 0;

            arrowButton1.setVisible(false);
            arrowButton2.setVisible(false);

            upText[13].alpha = 1;

            break;

        case 14:
            upText[7].alpha = 0;
            downText[7].alpha = 0;

            arrowButton1.setVisible(false);
            arrowButton2.setVisible(false);

            upText[14].alpha = 1;

            break;

        case 15:
            upText[7].alpha = 0;
            downText[7].alpha = 0;

            arrowButton1.setVisible(false);
            arrowButton2.setVisible(false);

            upText[15].alpha = 1;

            break;
    }
}