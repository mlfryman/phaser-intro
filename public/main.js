//- new Game(width, height, renderer, parent, state, transparent, antialias, physicsConfig)
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create});

/* Load assets in memory: fill the preloader with as many assets as your game requires
 * @param: is the unique string to identify the image later in our code
 * @param: is the URL of the image (relative)
 */
function preload(){
  game.load.image('bobafett', 'img/acryl_bobablast.png');
  //- game.load.image('starwars', 'img/unknown-the_starwars_pic.png');
  game.load.image('backscroll', 'img/backscroll.png');
  game.load.atlasJSONHash('bot', 'sprites/running_bot.png', 'sprites/running_bot.json');
}

var s1, s3;

/* Creates a simple sprite that is using our loaded image and displays it on-screen */
function create(){
  //- display the image sprite & render it at specified coordinates
  s3 = game.add.sprite(0, 0, 'backscroll');
  s3.scale.setTo(4)

  s1 = game.add.sprite(155, 0, 'bobafett');
  s1.scale.setTo(1)
  //s1.anchor.set(0.5)
  //s2 = game.add.sprite(400, 0, 'starwars');
  game.physics.enable(s1, Phaser.Physics.ARCADE);
  //game.physics.enable(s2, Phaser.Physics.ARCADE);
  //s2.body.velocity.x=150;

  //  Here we create a tween on the sprite created above
  var tween = game.add.tween(s1);

  //  The object defines the properties to tween.
  //  In this case it will move to x 600
  //  The 6000 is the duration in ms - 6000ms = 6 seconds
  tween.to({ x: 600 }, 1000);

  //  And this starts it going
  tween.start();


  // Create text
  var text = "Bobba Fett! \n Nooooooooooooo........";
  var style = { font: "65px Comic Sans", fill: "#ffffff", align: "center" };
  var t = game.add.text(game.world.centerX-300, 0, text, style);


//  This sprite is using a texture atlas for all of its animation data
  var bot = game.add.sprite(450, 450, 'bot');
  //  Here we add a new animation called 'run'
  //  We haven't specified any frames because it's using every frame in the texture atlas
  bot.animations.add('run');
  //  And this starts the animation playing by using its key ("run")
  //  15 is the frame rate (15fps)
  //  true means it will loop when it finishes
  bot.animations.play('run', 30, true);

  var botTween = game.add.tween(bot);
  botTween.to({ x: 600 }, 1000);
  botTween.start();
}

/* Calls function 60 frames/sec */
// function update(){
//   //  If the sprite is > 8px away from the pointer then let's move to it
//   if(game.physics.arcade.distanceToPointer(s2, game.input.activePointer) > 8)
//   {
//     //  Make the object seek to the active pointer (mouse or touch), at 300ms/sec.
//     game.physics.arcade.moveToPointer(s2, 300);
//   }
//   else
//   {
//     //  Otherwise turn off velocity because we're close enough to the pointer
//     s2.body.velocity.set(0);
//   }
// }

// function render(){
// 	game.debug.inputInfo(32, 32);
//
// }
