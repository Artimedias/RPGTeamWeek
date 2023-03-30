
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
const C1E = new Connector(2, 11); 
const C2S = new Connector(3, 1); 
const C2W = new Connector(4, 3);
const C3N = new Connector(1, 4); 
const C3E = new Connector(2, 2); 
const C4N = new Connector(1, 5); 
const C4S = new Connector(3, 3); 
const C5N = new Connector(1, 6); 
const C5S = new Connector(3, 4); 
const C6N = new Connector(1, 7); 
const C6S = new Connector(3, 5); 
const C7E = new Connector(2, 8); 
const C7S = new Connector(3, 6); 
const C8E = new Connector(2, 9); 
const C8W = new Connector(4, 7); 
const C9E = new Connector(2, 10); 
const C9W = new Connector(4, 8); 
const C10S = new Connector(3, 18); 
const C10W = new Connector(2, 9); 
const C11W = new Connector(4,1);
const C11E = new Connector(3,12);
const C12W = new Connector(4,11);
const C12E = new Connector(2,13);
const C13W = new Connector(4,12);
const C13N = new Connector(1,14);
const C14N = new Connector(1,15);
const C14S = new Connector(3,13);
const C15N = new Connector(1,16);
const C15S = new Connector(3,14);
const C16N = new Connector(1,17);
const C16S = new Connector(3,15);
const C17S = new Connector(3,16);
const C17W = new Connector(4,18)
const C18E = new Connector(2,17)
const C18N = new Connector(1,10)





//Making arrays out of the connectors for each room
const roomOneCons = [C1N, C1E];
const roomTwoCons = [C2S, C2W];
const roomThreeCons = [C3E, C3N];
const roomFourCons = [C4S, C4N];
const roomFiveCons = [C5S, C5N];
const roomSixCons = [C6S, C6N];
const roomSevenCons = [C7S, C7E];
const roomEightCons = [C8W, C8E];
const roomNineCons = [C9W, C9E];
const roomTenCons = [C10W, C10S];
const roomElevenCons = [C11W, C11E];
const roomTwelveCons = [C12W, C12E];
const roomThirteenCons = [C13W, C13N];
const roomFourteenCons = [C14N,C14S];
const roomFifteenCons = [C15N, C15S];
const roomSixteenCons = [C16N, C16S];
const roomSeventeenCons = [C17W, C17S];
const roomEighteenCons = [C18N, C18E]



//Defining items
let hand = new Item("Hand", ["How did you manage to drop your hand on the floor?", "This is your hand. It's very handy"], "tools", 0);
let firstKey = new Item("First key", ["There is a key on the ground", "This is a key. It is the first one you have found."], "keys", 88);
let secondKey = new Item("Second key", ["There is another key on the ground","This is the second key you have found."], "keys", 88);
let thirdKey = new Item("Third key", ["You see a key lying on the ground", "This is the third key you have found."], "keys", 88);
let fourthKey = new Item("Fourth key", ["A key is glinting in the sunlight", "This is the fourth key you have found."], "keys", 88);



//Defining setpieces
let roomOneChest = new SetPiece(0, ["There is a locked chest in the room", "There is an already opened chest in the room"], "unlocked chest", (item) => {
  if(item.name === "Hand")
  {
    firstKey.location = 1;
    console.log("The chest opens! There is a key inside!");
    roomOneChest.state = 1;
    firstKey.describe();
  }
  else
  {
    console.log(`your ${item} does nothing to the chest`);
  }
});



//Defining rooms
const roomOne = new Room(1, "You are in a dark gray room. \n There is a path to the North and a path to the East", roomOneCons);
const roomTwo = new Room(2, "You are in a room with brown wallpaper. \n There is a path to the South and a path to the West", roomTwoCons);
const roomThree = new Room(3, "You are in a brightly lit room with colorful paintings on the walls \n There is a path to the East and a path to the North", roomThreeCons);
const roomFour = new Room(4, "You are in a dark room. \n There is a path to the South and a path to the North", roomFourCons);
const roomFive = new Room(5, "You are in a circular room with a fountain in the center. \n There is a path to the South and a path to the North", roomFiveCons);
const roomSix = new Room(6, "You are in a room with a fireplace and a cozy sofa. \n There is a path to the South and a path to the North", roomSixCons);
const roomSeven = new Room(7, "You are in a chamber with a bookshelf and a desk. \n There is a parth to the East and to the South", roomSevenCons);
const roomEight = new Room(8, "You are in a chamber with a chess board and two chairs. \n There is a path to the East and to the West", roomEightCons);
const roomNine = new Room(9, "You are in a chamber with a billiard table and a bar. \n There is a path to the East and to the West", roomNineCons);
const roomTen = new Room(10, "You are in a chamber with a piano and a chandelier. \nThere is a path to the South and to the West", roomTenCons);
const roomEleven = new Room(11, "You are in a chamber with a mirror and a closet. \n There is a path to the East and to the West", roomElevenCons);
const roomTwelve = new Room(12, "You are in a chamber with a bed and a nightstand. \n There is a path to the East and to the West", roomTwelveCons);
const roomThirteen = new Room(13, "You are in a chamber with a bathtub and a sink. \n TThere is a path to the North and to the West", roomThirteenCons);
const roomFourteen = new Room(14, "You are in a chamber with a dining table and cabinet. \n There is a path to the South and a path to the North", roomFourteenCons);
const roomFifteen = new Room(15, "You are in the throne room of the castle. \n There is a path to the South and a path to the North", roomFifteenCons);
const roomSixteen = new Room(16, "You are in a dark room with a torch burning on the wall dimly. \n There is a door to the north and south. \n There is a path to the South and a path to the North", roomSixteenCons);
const roomSeventeen = new Room(17, "You are in a room with a frog on the floor staring at you. \n There is a door to the south and to the west.", roomSeventeenCons);
const roomEighteen = new Room(18, "This \n north east whatever lmao ", roomEighteenCons)



//Pushing setpieces into their rooms
roomOne.setpiece.push(roomOneChest);

//Pushing the rooms into the roomArray 
let setPieceArray = [roomOneChest];

//pushing items into the itemarray
let itemArray = [hand, firstKey];

let inv = new Inventory([], [], [], [], []);
inv.tools.push(hand);
let Henry = new Player("Henry", 1, [5, 5, 5, 25], inv);
let roomArray = [Henry.inventory, roomOne, roomTwo, roomThree, roomFour, roomFive, roomSix, roomSeven, roomEight, roomNine, roomTen, roomEleven, roomTwelve, roomThirteen, roomFourteen, roomFifteen, roomSixteen, roomSeventeen, roomEighteen];



window.addEventListener("load", main);

function main() {

  roomOne.describe();
  //declaring individual elements
  const northButton = document.getElementById("1");
  const eastButton = document.getElementById("2");
  const southButton = document.getElementById("3");
  const westButton = document.getElementById("4");
  const interactButton = document.getElementById("interact");
  const confirmButton = document.getElementById("confirm");

  northButton.addEventListener("click", () => {Henry.move(1, roomArray);});
  eastButton.addEventListener("click", () => {Henry.move(2, roomArray);});
  southButton.addEventListener("click", () => {Henry.move(3, roomArray);});
  westButton.addEventListener("click", () => {Henry.move(4, roomArray);});


  interactButton.addEventListener("click", () => {
    const itemInput = document.createElement('input');
    const targetInput = document.createElement('input');
    itemInput.type = 'text';
    targetInput.type = 'text';
    document.body.appendChild(itemInput);
    document.body.appendChild(targetInput);


    confirmButton.addEventListener("click", () => {

      const found = setPieceArray.find(element => element.name === targetInput.value);
      if(found instanceof SetPiece)
      {
        console.log(found instanceof SetPiece);
        //const targetThing = setPieceArray.find(element => element.name === targetInput.value);
        Henry.interact(itemInput.value, found);
      }
      else
      {
        const foundItem = itemArray.find(element => element.name === targetInput.value);
        console.log(foundItem);
        if(foundItem instanceof Item)
        {
          console.log(found instanceof SetPiece);
          //const targetThing = setPieceArray.find(element => element.name === targetInput.value);
          Henry.pickUp(foundItem);
        }
        else
        {
          console.log("Nope!");
        }
      }
    });
      
  });
}

