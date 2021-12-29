class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.buttonReset = createButton('Reset');
    this.pronto = createButton('Pronto')
    this.aqui = createElement('h2');
   
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
    this.aqui.hide()
    this.pronto.hide()

  }


  display(){
    
  
 
   
    
   
    this.title.html("Villager game");
    this.title.position(displayWidth/2 - 50, 0);

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    this.buttonReset.position(displayWidth -150,20);
    

    aldeao = createSprite(displayWidth/2, displayHeight/2);
   
    
 
    //aldeaoo = createSprite(300, 200);
    //assassino = createSprite(500, 200);
    //anjo = createSprite(700, 200);

   // persona = [aldeao, aldeaoo, assassino, anjo];


    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      this.title.hide();
     

      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Ola " + player.name);
      this.greeting.position(displayWidth/2 - 50, 0);

     
      
     
       
      var rand = Math.round(random(1,5));
    
     switch(rand){

       case 1: aldeao.addImage(imganjo);  
         break;
       case 2: aldeao.addImage(imgassassino); 
         break; 
       case 3:  aldeao.addImage(imgaldeao); 
         break; 
       case 4:  aldeao.addImage(imgaldeao);  
         break;
       case 5: aldeao.addImage(imgaldeao);
       break;
       default: break;

     }
    
     aldeao.scale = 1.5

     if( playerCount === 5 ){

      this.pronto.position(displayWidth/2 + -750, 20);

      this.aqui.html("⇧ clique aqui quando estiver pronto " );
      this.aqui.position(displayWidth/2 + -750, 20);



    }
    

     drawSprites();
    });
    this.buttonReset.mousePressed(()=>{
     player.updateCount(0);
     game.update(0);
 


    });




   this.pronto.mousePressed(()=>{
   
      game.play();
      game.update(1);

     
   });

  }
}
