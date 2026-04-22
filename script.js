class Intro extends Phaser.Scene {
    constructor() {
        super('intro');
    }

    preload() {
        this.load.path = 'assets/';
        this.load.image('logo', 'sillyguy.png');
        this.load.image('logoText', 'sillytextnew.png');
    }
    create() {

        this.imageObject = this.add.image(400, 800, 'logoText');
        this.imageObject.setScale(0.4);
        this.tweens.add({
            targets: this.imageObject,
            y: 400,
            duration: 500,
            delay: 2000,
        });
        

        this.imageObject = this.add.image(400, 200, 'logo');
        this.imageObject.setScale(0);
        // based on example of tweening text size from labs.phaser.io
        this.tweens.addCounter({
            from: 0,
            to: 0.4,
            duration: 2000,
            onUpdate: (tween) => {
                const v = tween.getValue();
                this.imageObject.setScale(v);
                this.imageObject.setAngle(v*5*180);
            }
        });

        this.time.delayedCall(3500, () => {
            this.cameras.main.fadeOut();
        });

        this.time.delayedCall(4500, () => {
            this.scene.start('mainScreen');
        });
    }
    update() {}
}

class MainScreen extends Phaser.Scene {
    constructor() {
        super('mainScreen');
    }

    preload() {
        this.load.path = 'assets/';
        this.load.image('mainScreen', 'mainscreenbg.png');
        this.load.audio('gamestart', 'gamestart.wav');
    }

    create() {
        this.imageObject = this.add.image(-100, 300, 'mainScreen');
        this.cameras.main.fadeIn();
        this.uiRect = this.add.rectangle(-400, 300, 400, 600, 0xBFAAE5, 1);
        this.tweens.add({
            targets: this.uiRect,
            x: 200,
            delay: 1000,
        });

        this.textObject = this.add.text(
            50,
            100,
            "New Game",
            { font: "36px Trebuchet MS", color: "#ffffff" }
        );
        this.textObject.alpha = 0;
        this.tweens.add({
            targets: this.textObject,
            alpha: 1,
            delay: 2000,
            duration: 500,
        });

        this.textObject = this.add.text(
            50,
            175,
            "Load Game",
            { font: "36px Trebuchet MS", color: "#ffffff" }
        );
        this.textObject.alpha = 0;
        this.tweens.add({
            targets: this.textObject,
            alpha: 1,
            delay: 2500,
            duration: 500,
        });

        this.textObject = this.add.text(
            50,
            250,
            "Options",
            { font: "36px Trebuchet MS", color: "#ffffff" }
        );
        this.textObject.alpha = 0;
        this.tweens.add({
            targets: this.textObject,
            alpha: 1,
            delay: 3000,
            duration: 500,
        });

        this.textObject = this.add.text(
            50,
            325,
            "Credits",
            { font: "36px Trebuchet MS", color: "#ffffff" }
        );
        this.textObject.alpha = 0;
        this.tweens.add({
            targets: this.textObject,
            alpha: 1,
            delay: 3500,
            duration: 500,
        });

        this.textObject = this.add.text(
            50,
            400,
            "Quit",
            { font: "36px Trebuchet MS", color: "#ffffff" }
        );
        this.textObject.alpha = 0;
        this.tweens.add({
            targets: this.textObject,
            alpha: 1,
            delay: 4000,
            duration: 500,
        });

        this.input.once('pointerdown', () => {
            this.sound.play('gamestart');
            this.cameras.main.fadeOut();
            this.time.delayedCall(1000, () => {
                this.scene.start('loadingScreen');
            });
        });

    }

    update() {

    }
}

class LoadingScreen extends Phaser.Scene {
    constructor() {
        super('loadingScreen');
    }

    preload() {

    }

    create() {
        this.cameras.main.fadeIn();
        this.textObject = this.add.text(
            600,
            500,
            "Loading...",
            { font: "36px Trebuchet MS", color: "#ffffff" }
        );
        this.time.delayedCall(3000, () => {
            this.cameras.main.fadeOut();
            this.time.delayedCall(1000, () => {
                this.scene.start('opening1');
            });
        });
    }

    update() {
        
    }


}

class Opening1 extends Phaser.Scene {
    constructor() {
        super('opening1');
    }

    preload() {
        this.load.path = 'assets/';
        this.load.image('paperbg', 'paper.png');
        this.load.audio('papersfx', 'papersfx.wav');
    }

    create() {
        this.sound.play('papersfx');

        this.imageObject = this.add.image(400, 300, 'paperbg');
        this.imageObject.setScale(0.5);
        this.imageObject.alpha = 0;
        this.tweens.add({
            targets: this.imageObject,
            alpha: 1,
            delay: 1500,
        });

        

        this.textObject = this.add.text(
            25,
            25,
            "Somewhere, in the middle of the wilderness, lies a mystical kingdom, one seemingly eternally peaceful and bathed in light.",
            { font: "24px Trebuchet MS", color: "#68553B", wordWrap: { width: 750 } }
        );
        this.textObject.alpha = 0;
        this.tweens.add({
            targets: this.textObject,
            alpha: 1,
            delay: 2500,
        });

        this.textObject = this.add.text(
            25,
            100,
            "Many have tried to uncover this kingdom’s secrets, but those who return have nothing new to show.",
            { font: "24px Trebuchet MS", color: "#68553B", wordWrap: { width: 750 } }
        );
        this.textObject.alpha = 0;
        this.tweens.add({
            targets: this.textObject,
            alpha: 1,
            delay: 4500,
        });

        this.textObject = this.add.text(
            25,
            175,
            "It is said, though, that somewhere out there is a destined hero who is pure of heart. On their journey, they shall gather the power they need to bring this light to the entire world.",
            { font: "24px Trebuchet MS", color: "#68553B", wordWrap: { width: 750 } }
        );
        this.textObject.alpha = 0;
        this.tweens.add({
            targets: this.textObject,
            alpha: 1,
            delay: 6500,
        });

        this.textObject = this.add.text(
            25,
            275,
            "One can only hope that this destined hero has any idea of what they must do and any skill in actually doing it.",
            { font: "24px Trebuchet MS", color: "#68553B", wordWrap: { width: 750 } }
        );
        this.textObject.alpha = 0;
        this.tweens.add({
            targets: this.textObject,
            alpha: 1,
            delay: 8500,
        });

        
        this.time.delayedCall(13000, () => {
            this.cameras.main.fadeOut();
            this.time.delayedCall(1000, () => {
                this.scene.start('opening2');
            });
        });
    
    }

    update() {

    }
}

class Opening2 extends Phaser.Scene{
    constructor() {
        super('opening2');
    }

    preload() {
        this.load.path = 'assets/';
        this.load.image("holdingpaper", 'holdingpaper.png');
    }

    create() {
        this.cameras.main.fadeIn();
        this.graphics = this.add.graphics();
        this.graphics.fillStyle(0x765CB8, 1);
        this.graphics.fillRect(0, 0, 800, 600);
        this.imageObject = this.add.image(400, 350, 'holdingpaper');
        this.imageObject.setScale(0.4);
        this.dialogueRect = this.add.rectangle(400, 500, 650, 150, 0xBFAAE5, 1);
        this.dialogueRect.alpha = 0;
        this.tweens.add({
            targets: this.dialogueRect,
            alpha: 1,
            delay: 1500,
            duration: 500,
        });

        this.markerRect = this.add.rectangle(100, 450, 15, 15, 0xffffff, 1);
        this.markerRect.angle = 45;
        this.markerRect.alpha = 0;
        this.tweens.add({
            targets: this.markerRect,
            alpha: 1,
            delay: 2000,
            duration: 500,
        });

        this.textObject = this.add.text(
            125,
            440,
            "“And somehow, everyone here is still waiting for some hero that only exists in old fables for all I care. What a joke.”",
            { font: "24px Trebuchet MS", color: "#ffffff", wordWrap: { width: 575 } }
        );

        this.textObject.alpha = 0;
        this.tweens.add({
            targets: this.textObject,
            alpha: 1,
            delay: 2500,
            duration: 500,
        });

    }

    update() {

    }
}

let config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: 0x000000,
    scene: [Intro, MainScreen, LoadingScreen, Opening1, Opening2],
}

let game = new Phaser.Game(config);