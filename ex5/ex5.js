// THING

var thing = {
    update : function (state) {
        
    },
    draw : function (state) {
        fill(this.color);
        noStroke();
        ellipse(mouseX, mouseY, 50, 50);
    }
};

// GAME

var PAUSED = 'paused';
var PLAYING = 'playing';

var game = {
    state : PLAYING,
    update : function () {
        
    },
    react : function () {

    },
    draw : function () {
        background(255);
    },
    loop : function () {
       this.update();
       this.react();
       this.draw();
    }
};

// SETUP AND DRAW

var setup = function() {
    createCanvas(window.innerWidth, window.innerHeight);
};

var draw = function() {
    game.loop();
};
