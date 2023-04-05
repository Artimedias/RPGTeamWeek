
import Player from './js/player.js';
import Inventory from './js/inventory.js';
import SetPiece from './js/setpiece.js';
import Character from './js/character.js';
import Room from './js/room.js';
import Connector from './js/connector.js';
import Item from './js/item.js';




//Defining Connectors

//C for connector, 1 for room 1, N for north

//C for connector, 1 for room 1, N for north
//1 is north, 2 is east, 3 is south, 4 is west
const C1N = new Connector(1, 2); 
const C2S = new Connector(3, 1); 
const C2N = new Connector(1, 3);
const C2W = new Connector(4, 4); 
const C3S = new Connector(3, 2); 
const C3W = new Connector(4, 8);
const C4N = new Connector(1, 8); 
const C4E = new Connector(2, 3);
const C4W = new Connector(4, 5); 
const C5E = new Connector(2, 4); 
const C5W = new Connector(4, 7); 
const C5N = new Connector(1, 6); 
const C6E = new Connector(2, 8);
const C6S = new Connector(3, 5); 
const C7E = new Connector(2, 5);  
const C8E = new Connector(4, 3); 
const C8N = new Connector(1, 9); 
const C8W = new Connector(4, 6); 
const C8S = new Connector(3, 4); 
const C9N = new Connector(1, 10);
const C9S = new Connector(3, 8); 
const C10S = new Connector(3, 9); 
const C10W = new Connector(4, 11); 
const C10E = new Connector(2, 13); 
const C10N = new Connector(1, 15);
const C11E = new Connector(2, 10);
const C11S = new Connector(2, 10);
const C13W = new Connector(4, 14);
const C13E = new Connector(2, 10);
const C14W = new Connector(4, 13);
const C15S = new Connector(3,10);
const C15N = new Connector(1,16);






//Making arrays out of the connectors for each room
const roomOneCons = [];
const roomTwoCons = [C2S, C2W, C2N];
const roomThreeCons = [C3S];
const roomFourCons = [C4E, C4W];
const roomFiveCons = [C5W, C5N, C5E];
const roomSixCons = [C6S, C6E];
const roomSevenCons = [C7E];
const roomEightCons = [C8W, C8E, C8S, C8N];
const roomNineCons = [C9N, C9S];
const roomTenCons = [C10W, C10S, C10E];
const roomElevenCons = [C11E, C11S];
const roomTwelveCons = [];
const roomThirteenCons = [C13W, C13E];
const roomFourteenCons = [C14W];
const roomFifteenCons = [C15N, C15S];




//Defining items

/*
The players hand
The key to the chest in the first room
The flashdrive which is used in room 14
The bunny mask in room 3
The bottle of whiskey
The blue key in the kids room
The file in the cabin
the axe in the cabin
the sunglasses in the ballroom
the flashlight in the gas station
the fire exstinguisher in the hallway
the fox mask in the riddle room
the cat mask in the computer room
*/
let hand = new Item("Hand", ["\n How did you manage to drop your hand on the floor?", "\nThis is your hand. It's very handy"], "tools", 0);
let firstKey = new Item("Key", ["\n There is a key on the ground", "\n This is a key. It is the first one you have found."], "keys", 88);
let flashdrive = new Item("Flashdrive", ["\n There is a flashdrive laying on a desk", "\n This a computer flash drive."], "objects", 2);
let axe = new Item("Axe", ["\n There is an axe leaning against a tree nearby.", "\n The axe is sharp and glistening"], "tools", 7);
let whiskey = new Item("Whiskey", ["\n There is a botttle of whiskey on the counter in front of you.", "\n A bottle of whiskey that you are tempted to drink."], "objects", 88);
let bunnymask = new Item("Bunnymask", ["\n There is a bunny mask on the table", "\n The bunny mask is cute yet unsettling"], "objects", 3);
let bluekey = new Item("Bluekey", ["\n A shiny blue key lies on the carpeted floor", "\n The key glints a shiny blue off it's metallic surface."], "keys", 5);
let file = new Item("File", ["\n You see a file sitting on the floor of the cabin", "\n A file used to shave or remove metal."], "objects", 7);
let sunglasses = new Item("Sunglasses", ["\n A pair of sunglasses drop from above onto the table in front of you.",
"\n A very cool looking and stylish pair of sunglasses"], "objects", 88);
let flashlight = new Item("Flashlight", ["\n Behind the bars in the electronics case is a flashlight.", "\n The flashlight is new with what appears to be full batteries."], "tools", 88);
let fireextinguisher = new Item("Fireextinguisher", ["\n On the wall is a fire extinguisher encased in glass.",
"\n The extinguisher is heavy and cumbersome, obviously made to last."], "tools", 88);
let foxmask = new Item("Foxmask", ["\n There is now a fox mask in you inventory.", "\n The mask just like the bunny mask is adorable yet creepy."], "objects", 88);
let catmask = new Item("Catmask", ["\n There is an image of a cat mask on the computer screen", "\n The cat mask is beautiful and ornate."], "objects", 88);




//Defining setpieces
let roomOneChest = new SetPiece(0, [`\n There is an unlocked chest in the room`, "\n There is an already opened chest in the room"], "chest", (item, textBox) => {
  if(item.name === "Hand" && roomOneChest.state === 0)
  {
    firstKey.location = 1;
    textBox.innerText += "\n The chest opens! There is a key inside!";
    roomOneChest.state = 1;
    firstKey.describe(textBox);
  }
  else
  {
    textBox.innerText += `\n your ${item} does nothing to the chest`;
  }
});

let roomOneDoor = new SetPiece(0, ["\n There is a door to the north, but it's locked", "\n There is an open door to the north"], "door", (item, textBox) => {
  if(item.name === "Key")
  {
    roomOneCons.push(C1N);
    textBox.innerText += "\n The door creaks open, revealing a hallway to the north";    
  }
  else
  {
    textBox.innerText += `\n your ${item} does nothing to the door`;
  }
});

let roomTwoComputer = new SetPiece(0, ["\n There is a computer in sleep mode on one of the desks", "\n There is a computer in the room. Its screen reads 211441 in a forest green colour"], "computer", (item, textBox) => {
  if(item.name === "Flashdrive")
  {
    textBox.innerText += "\n Did you really just try to stick an unknown flashdrive into a computer? Are you insane?";    
  }
  if(item.name === "Hand")
  {
    textBox.innerText += "\n The computer whirrs to life when you hit the power button!";
    this.state = 1;
    this.describe(textBox);
  }
  else
  {
    textBox.innerText += `\n your ${item} does nothing to the computer`;
  }
});

let roomThreeCloset = new SetPiece(0, ["\n There is a closet locked with a rusty lock in the cabin", "\n The closet has opened, revealing a path to the West inside"], "closet", (item, textBox) => {
  if(item.name === "Hand")
  {
    textBox.innerText += "\n You smash the lock with the axe, allowing you to open the closet";   
    this.state = 1;
    this.describe(textBox);
    roomThreeCons.push(C3W); 
  }
  else
  {
    textBox.innerText += `\n your ${item} does nothing to the closet`;
  }
});

let roomFourBar = new SetPiece(0, ["\n The bar counter is covered in dust", "\n The now empty bar counter is covered in dust"], "bar", (item, textBox) => {
  if(item.name === "Hand")
  {
    textBox.innerText += "\n As you inspect the bar, you find a bottle of whiskey just behind the counter!";
    whiskey.location = 4;
    this.state = 1;
    whiskey.describe(textBox);    
  }
  else
  {
    textBox.innerText += `\n your ${item} does nothing to the bar`;
  }
});

let roomFourJukebox = new SetPiece(0, ["\n There is a jukebox in the bar, silent", "\n The jukebox plays Knocking on heavens door by Guns and Roses. As it does, a door to the north has opened!", "\nThe jukebox plays Africa by Toto", "\nThe jukebox plays ThunderStruck by AC/DC"], "closet", (item, textBox) => {
  if(item.name === "Hand")
  {
    textBox.innerText += "\n You inspect the jukebox, and see three options for songs. Which one would you like to play?";    

    const doorButton = document.createElement('button');
    const africaButton = document.createElement('button');
    const thunderButton = document.createElement('button');

    doorButton.innerText = "Knocking on Heavens Door";
    africaButton.innerText = "Africa";
    thunderButton.innerText = "Thunderstruck";

    document.appendChild(doorButton);
    document.appendChild(africaButton);
    document.appendChild(thunderButton);

    doorButton.addEventListener("click", () => {
      this.state = 1;
      this.describe(textBox);
      roomFourCons.push(C4N);
      document.removeChild(doorButton);
      document.removeChild(africaButton);
      document.removeChild(thunderButton);
    })

    africaButton.addEventListener("click", () => {
      this.state = 2;
      this.describe(textBox);
      document.removeChild(doorButton);
      document.removeChild(africaButton);
      document.removeChild(thunderButton);
    })

    thunderButton.addEventListener("click", () => {
      this.state = 3;
      this.describe(textBox);
      document.removeChild(doorButton);
      document.removeChild(africaButton);
      document.removeChild(thunderButton);
    })

    //document.body.appendChild(itemInput);
  }
  else
  {
    textBox.innerText += `\n your ${item} does nothing to the bar`;
  }
});

let roomFiveMess = new SetPiece(0, ["\n There is a massive mess of toys and trash on the ground", "\n The mess has been cleaned away, now sorted neatly into organizers"], "mess", (item, textBox) => {
  if(item.name === "Hand")
  {
    textBox.innerText += "\n You clean up the mess, though it takes great effort. Underneath all the toys and mess though, you find a shiny blue key!";
    bluekey.location = 5;
    this.state = 1;
    bluekey.describe(textBox);    
  }
  else
  {
    textBox.innerText += `\n your ${item} does nothing to the mess`;
  }
});

let roomEightBars = new SetPiece(0, ["\n The set of bars covering the eletronics section seem to be worn thin", "The bars on the eletronics section are on the verge of breaking", "The bars covering the eletronics section have been removed"], "bars", (item, textBox) => {
  if(item.name === "File" && this.state === 0)
  {
    textBox.innerText += "\n You use the file to slowly whittle away at the bars. You think you're making progress, but you can't be sure";
    this.state = 1;
    this.describe(textBox);    
  }
  else if(item.name === "File" && this.state === 1)
  {
    textBox.innerText += "\n You use the file to slowly whittle away at the bars. Finally, they break away, letting you get to what inside";
    this.state = 2;
    this.describe(textBox);
    flashlight.location = 8;
    flashlight.describe(textBox);    
  }
  else
  {
    textBox.innerText += `\n your ${item} does nothing to the bars`;
  }
});

let roomNineFire = new SetPiece(0, ["\n There is a fire extinguisher on the wall, protected by a sturdy hard plastic shell", "The shell around the extinguisher has been shattered"], "bars", (item, textBox) => {
  if(item.name === "Axe" && this.state === 0)
  {
    textBox.innerText += "\n You swing the axe on the encasement of the extinguisher, and it falls to the ground, making a loud clattering noise";
    this.state = 1;
    fireextinguisher.location = 9;
    fireextinguisher.describe(textBox);
  }
  else
  {
    textBox.innerText += `\n your ${item.name} does nothing to the shell`;
  }
});




//Defining rooms
const roomOne = new Room(1, "\n You enter a dark and gloomy room that looks like a bunker. The only source of light is a flickering fluorescent lamp on the ceiling. The floor and walls are made of cold and rough concrete. \n", roomOneCons);
const roomTwo = new Room(2, "\n You use the key on the door to the east and enter a large office floor. You are surprised by the contrast bewtween this room and the previous one. This room looks modern and bright, with rows of desks and computers lining the walls and windows. \n There is a path to the South and a path to the West", roomTwoCons);
const roomThree = new Room(3, "\n You look for another door and find one to the west. You open it and enter a small cabin. You are shocked by the sudden change of scenery. \n You see a violent snowstorm raging outside the windows, which are boarded up with planks. You wonder how you got an office to a cabin in the middele of nowhere. \n You look around the room and see a fireplace, a sofa, a table and a closet. \n There is a path to the East and a path to the North", roomThreeCons);
const roomFour = new Room(4, "\n You open the closet and see a dark passage inside. You walk through the passage and emerge in a dusty old bar. You are confused again by the sudden change of atmosphere. \n You see some flickering neon lights and aging 80s decor. You hear some music playing from a jukebox in the corner. \n You wonder what this place is and why it's connected to the cabin. You look around and see some stools, tables, chairs and a counter. \n There is a path to the East and a path to the West", roomFourCons);
const roomFive = new Room(5, "\n You walk into what looks like a childs room. \n There is a path to the North, East, and West", roomFiveCons);
const roomSix = new Room(6, "\n You walk through the door and enter a large spacious banquet hall, adorned with beautiful decorations and elegant furniture. The room is lit by chandleirs hagning from the ceiling, casting a warm and welcoming glow throughout the hall. \n The centerpiece of the room is a long and ornate dining table, set with a delectable feast that seems to always move just out of reach.\n There is a path to the South and a path to the East", roomSixCons);
const roomSeven = new Room(7, "\n As you enter the room you are transported to the heart of a massive forest. \n As you step inside, the room disolves around you and you find yourself standing in a clearing surrounded by towering trees and lush undergrowth. \n There is a path in all directions", roomSevenCons);
const roomEight = new Room(8, "\n You enter what appears to be a gas station that has seen better days as much of the merchandise is secured behind metal bars.The atomosphere in the room is slightly ominous, as the bars seem to suggest a sense of danger or insecurity. \n There is a path in all directions", roomEightCons);
const roomNine = new Room(9, "\n You walk through the door and enter a school hallway that stretches out to an extraordinary legnth, with rows of lockers lining each side of the passageway. The sounds of teenagers conversing and laughing can be heard in the distance yet no one is present.\n There is a mural on the wall. It reads \n  \n There is a path to the North and to the South", roomNineCons);
const roomTen = new Room(10, "\n As you enter this room it opens up into an ancient temple with three large statues inside. The statues are a fox, a cat and a bunny. \n There is a path to the South and to the West", roomTenCons);
const roomEleven = new Room(11, "\n Going through the door you enter a nightmare. You are trapped on a thin ledge that hangs over a bottomless abyss. \n The darkness is suffocating and oppressive and you can hear the wind howling and the rocks crumbling \n You have no idea where you are or how to escape. If you have a flashlight you might see something you wish you didn't. Without it you are at the mercy of whatever lurks in the shadows. \n There is a path to the East and to the West", roomElevenCons);
const roomTwelve = new Room(12, "\n As you pentrate the next doorway you realize there is no way out. \n The only thing in the room are a table and mirror. The mirror is no ordinary mirror but a puzzle. The table is not an ordinary table but a pun. \n There is a path to the East and to the West", roomTwelveCons);
const roomThirteen = new Room(13, "\n Once you enter the next room you find yourself facing a huge chessboard that covers the entire floor. You see four pieces on the chessboard: a black king on the eighth rank and the fifth file \n A black queen on the first rank and the fourth file and a white knight on the sixth rank and fifth file. \n There is a rook on the seventh rank and eighth file but it is not on the board. The rook hangs from a rope above the board with a sign that says Move Me. \n You realize this is a chess puzzle and you have to find the only move that will checkmate the black king to open the door to the next room.  \n There is a path to the North and to the West", roomThirteenCons);
const roomFourteen = new Room(14, "\n This room is dimly lit with a single computer screen on a desk. The screen displays a cryptic message. \n Do You Remember What You What You Were Told? Do the opposite.  \n There is a path to the South and a path to the North", roomFourteenCons);
const roomFifteen = new Room(15, "\n As you enter the next room it seems to be a deceptive paradise with a lush garden. A wooden gate appears to be the only path forward but in front of it is a maniacal man in a weird uniform holding a gun. \n The man snarls at you to get back in your prison or he will blow your brains out. \n There is a path to the South and a path to the North", roomFifteenCons);
const roomSixteen = new Room(16, "\n You take the gate and walk forward, back to the normal world. \n\n\n\n You win!")
const roomSeventeen = new Room(17, "\n You find yourself still in the forest, upon a clearing with a large boulder in the center.")
const roomEighteen = new Room(17, "\n The forest continues, a shallow stream flowing from West to East crossing your way.")
const roomNineteen = new Room(17, "\n The stream ends in a small pond deep within the woods, dotted by lily pads and cattails.")
const roomTwenty = new Room(17, "\n The stream's source is shown as a small spring within a rocky outcropping between three large trees.")
const roomTwentyOne = new Room(17, "\n The forest continues unabated, its rows of towering pines obscuring any attempts to view far into the distance.")
const roomTwentyTwo = new Room(17, "\n After what felt like endless trees and shrubs, you happen upon a small wooden cabin within the heart of the forest, lit from within.")



//Pushing setpieces into their rooms
roomOne.setpiece.push(roomOneChest);
roomOne.setpiece.push(roomOneDoor);
//Pushing the rooms into the roomArray 
let setPieceArray = [roomOneChest, roomOneDoor];

//pushing items into the itemarray
let itemArray = [hand, firstKey, flashdrive, axe, whiskey, bunnymask, bluekey, file, sunglasses, flashlight, fireextinguisher, foxmask, catmask];

let inv = new Inventory([], [], [], [], []);
inv.tools.push(hand);
let Henry = new Player("Henry", 1, [5, 5, 5, 25], inv);
let roomArray = [Henry.inventory, roomOne, roomTwo, roomThree, roomFour, roomFive, roomSix, roomSeven, roomEight, roomNine, roomTen, roomEleven, roomTwelve, roomThirteen, roomFourteen, roomFifteen, roomSixteen];



window.addEventListener("load", main);

function main() {

  let textBox = document.getElementById("text-box");
  roomOne.describe(textBox);
  //declaring individual elements
  const northButton = document.getElementById("1");
  const eastButton = document.getElementById("2");
  const southButton = document.getElementById("3");
  const westButton = document.getElementById("4");
  const interactButton = document.getElementById("interact");
  const confirmButton = document.getElementById("confirm");
  const inventoryButton = document.getElementById("inventory");
  const inspectButton = document.getElementById("inspect");

  northButton.addEventListener("click", () => {console.log("we moving now"); Henry.move(1, roomArray, textBox);});
  eastButton.addEventListener("click", () => {Henry.move(2, roomArray, textBox);});
  southButton.addEventListener("click", () => {Henry.move(3, roomArray, textBox);});
  westButton.addEventListener("click", () => {Henry.move(4, roomArray, textBox);});

  const itemInput = document.getElementById('item-select')
  const targetInput = document.getElementById('target-select');
  const inspectInput = document.getElementById("inspect-select");

  interactButton.addEventListener("click", () => {


    childRemover(itemInput);
    childRemover(targetInput);
    for(let i=0; i<Henry.inventory.tools.length; i++) {
      let option = document.createElement("option");
      option.innerText = Henry.inventory.tools[i].name;
      itemInput.add(option);
    }
    for(let i=0; i<Henry.inventory.keys.length; i++) {
      let option = document.createElement("option");
      option.innerText = Henry.inventory.keys[i].name;
      itemInput.add(option);
    }
    for(let i=0; i<Henry.inventory.objects.length; i++) {
      let option = document.createElement("option");
      option.innerText = Henry.inventory.objects[i].name;
      itemInput.add(option);
    }
    for(let i=1; i<roomArray.length; i++) {
      for(let j = 0; j<roomArray[i].setpiece.length; j++)
      {
        let option = document.createElement("option");
        option.innerText = roomArray[i].setpiece[j].name;
        targetInput.add(option);
      }
    }
    for(let i=0; i<itemArray.length; i++) {
      if(itemArray[i].location === Henry.location)
      {
        let option = document.createElement("option");
        option.innerText = itemArray[i].name;
        targetInput.add(option);
      }
    }
    itemInput.style.visibility = "visible";
    targetInput.style.visibility = "visible";

    confirmButton.addEventListener("click", function Greg() {
      const found = setPieceArray.find(element => element.name === targetInput.value);
      if(found instanceof SetPiece)
      {
        console.log(found instanceof SetPiece);
        Henry.interact(itemInput.value, found, textBox);
      }
      else
      {
        const foundItem = itemArray.find(element => element.name === targetInput.value);
        if(foundItem instanceof Item)
        {
          console.log(found instanceof SetPiece);
          Henry.pickUp(foundItem);
        }
        else
        {
          console.log("Nope!");
        }
      }
      childRemover(itemInput);
      childRemover(targetInput);
      itemInput.style.visibility = "hidden";
      targetInput.style.visibility = "hidden";
      confirmButton.removeEventListener("click", Greg);
    });      
  });

  inspectButton.addEventListener("click", () => {
    childRemover(inspectInput);
    for(let i=0; i<Henry.inventory.tools.length; i++) {
      let option = document.createElement("option");
      option.innerText = Henry.inventory.tools[i].name;
      inspectInput.add(option);
    }
    for(let i=0; i<Henry.inventory.keys.length; i++) {
      let option = document.createElement("option");
      option.innerText = Henry.inventory.keys[i].name;
      inspectInput.add(option);
    }
    for(let i=0; i<Henry.inventory.objects.length; i++) {
      let option = document.createElement("option");
      option.innerText = Henry.inventory.objects[i].name;
      inspectInput.add(option);
    }
    for(let i=1; i<roomArray.length; i++) {
      for(let j = 0; j<roomArray[i].setpiece.length; j++)
      {
        let option = document.createElement("option");
        option.innerText = roomArray[i].setpiece[j].name;
        inspectInput.add(option);
      }
    }
    for(let i=0; i<itemArray.length; i++) {
      if(itemArray[i].location === Henry.location)
      {
        let option = document.createElement("option");
        option.innerText = itemArray[i].name;
        inspectInput.add(option);
      }
    }
    let option = document.createElement("option");
    option.innerText = "Room";
    inspectInput.add(option);

    inspectInput.style.visibility = "visible";
    confirmButton.addEventListener("click", function Ralph() {

      const found = setPieceArray.find(element => element.name === inspectInput.value);
      if(found instanceof SetPiece)
      {
        found.describe(textBox);
      }
      else
      {
        const foundItem = itemArray.find(element => element.name === inspectInput.value);
        if(foundItem instanceof Item)
        {
          foundItem.describe(textBox);
        }
        else
        {
          roomArray[Henry.location].describe(textBox);
        }
      }
      childRemover(inspectInput);
      inspectInput.style.visibility = "hidden";
      confirmButton.removeEventListener("click", Ralph)
    });
  });

  inventoryButton.addEventListener("click", () => {
    textBox.innerText += "\n You are currently in posession of: \n"
    for(let i=0; i<itemArray.length; i++)
    {
      if(itemArray[i].location === 0)
      {
        textBox.innerText += "\n " + itemArray[i].name;
      }
    }
  })

  function childRemover(list) {
    while (list.hasChildNodes()) {
      list.removeChild(list.firstChild);
    }
    return list;
  }
}

