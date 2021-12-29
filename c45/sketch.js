var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

var track, car1_img,car2_img,car3_img,car4_img, ground;

var imganjo
var imgassassino
var imgaldeao

var anjo
var assassino
var aldeao
var aldeaoo

var imgvila_dia, vila_dia;
var imgvila_noite, vila_noite;

var img_fundo1, img_fundo2, img_fundo3, img_fundo4, img_fundo5, img_fundo6;


var persona = []

function preload(){

  imganjo = loadImage("images/anjo.png");
   imgassassino = loadImage("images/assasino.png");
   imgaldeao = loadImage("images/aldeao.png");
   imgvila_dia = loadImage("images/vila dia.png");
   imgvila_noite = loadImage("images/vila noite.png");
   
  img_fundo1 = loadImage("images/Fundo jogo.png");
  img_fundo2 = loadImage("images/fundo1.png");
  img_fundo3 = loadImage("images/fundo2.png");
  img_fundo4 = loadImage("images/fundo3.png");
  img_fundo6 = loadImage("images/fundo5.png");



}

function setup(){
  canvas = createCanvas(displayWidth + 10, displayHeight +30);

  var rande = Math.round(random(1,5));
    
     switch(rande){

       case 1: background(img_fundo1);  
         break;
       case 2: background(img_fundo2);   
         break; 
       case 3:  background(img_fundo3);  
         break; 
       case 4: background(img_fundo4); 
         break;
       case 5: background(img_fundo6);  
        break
       default: break;

     }
  

 
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){

  
 //if( playerCount === 89 ){
 // game.update(1);
  //}
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}

function mousePressed(){
  if(allPlayers ){

    
  }
}
