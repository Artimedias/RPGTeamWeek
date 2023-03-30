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
let C1N = new Connector(1, 2); 
let C1E = new Connector(2, 3); 
let C2S = new Connector(3, 4); 



//Making arrays out of the connectors for each room
const roomOneCons = [C1N, C1E];
const roomTwoCons = [C2S, C2W];
const roomThreeCons = [C3W, C3N];
const roomFourCons = [C4S, C4E];
const roomFiveCons = [C5S];
const roomSixCons = [C6E, C6N];
const roomSevenCons = [C7W, C7S];
const roomEightCons = [C8N, C8E];
const roomNineCons = [C9W, C9S];
const roomTenCons = [C10E, C10S];
const roomElevenCons = [C11W, C11N];



//Defining items
let hand = new Item("Hand", ["How did you manage to drop your hand on the floor?", "This is your hand. It's very handy"], "tool", 0)
let firstKey = new Item("First key", ["There is a key on the ground", "This is a key. It is the first one you have found."], "key", 88)
let secondKey = new Item("Second key", ["There is another key on the ground","This is the second key you have found."], "key", 88);
let thirdKey = new Item("Third key", ["You see a key lying on the ground", "This is the third key you have found."], "key", 88);
let fourthKey = new Item("Fourth key", ["A key is glinting in the sunlight", "This is the fourth key you have found."], "key", 88);



//Defining setpieces
let roomOneChest = new SetPiece(0, ["There is a locked chest in the room", "There is an already opened chest in the room"], "unlocked chest", (item) => {
    if(item.name === "Hand")
{
    firstKey.location = 1;
    console.log("The chest opens! There is a key inside!")
    roomOneChest.state = 1;
    firstKey.describe();
}
  else
  {
    console.log(`your ${item} does nothing to the chest`)
  }
});



//Defining rooms
let roomOne = new Room(1, "You are in a dark gray room. \n There is a path to the North and a path to the East", roomOneCons);
let roomTwo = new Room(2, "You are in a room with brown wallpaper. \n There is a path to the South and a path to the West", roomTwoCons);
//let roomThree = new Room(3, "You are in a brightly lit room with colorful paintings on the walls \n There is a path to the West and a path to the North", roomThreeCons);
//let roomFour = new Room(4, "You are in a dark room. \n There is a path to the South and a path to the East, roomFourCons);
//let roomFive = new Room(5 "You are in a circular room with a fountain in the center. \n There is a path to the South" roomFiveCons);
//let roomSix = new Room(6 "You are in a room with a fireplace and a cozy sofa. \n There is a path to the East and a path to the North", roomSixCons);
//let roomSeven = new Room(7 "You are in a chamber with a bookshelf and a desk. \n There is a scroll on the desk and a wooden door to the West", roomSevenCons);
//let roomEight = new Room(8 "You are in a chamber with a chess board and two chairs. \n There is a crown on the board and a wooden door to the South", roomEightCons);
//let roomNine = new Room(9 "You are in a chamber with a billiard table and a bar. \n There is a bottle of wine on the bar and a wooden door to the East", roomNineCons);
//let roomTen = new Room(10 "You are in a chamber with a piano and a chandelier. \There is a sheet of music on the piano and a wooden door to the North", roomTenCons);
//let roomEleven = new Room(11 "You are in a chamber with a mirror and a closet. \n There is a cloak in the closet and a wooden door to the West", roomElevenCons);
//let roomTwelve = new Room(12 "You are in a chamber with a bed and a nightstand. \n There is a ring on the nightstand and a wooden door to the South", roomTwelveCons);
//let roomThirteen = new Room(13 "You are in a chamber with a bathtub and a sink. \n There is a soap on the sink and a wooden door to the East", roomThirteenCons);
//let roomFourteen = new Room(14 "You are in a chamber with a dining table and cabinet. \n There is a plate of food on the table and a iron door to the North", roomFourteenCons);
//let roomFifteen = new Room(15 "You are in the throne room of the castle. \n There is an evil king and the throne and no exit", roomFifteenCons);



//Pushing setpieces into their rooms
roomOne.setpiece.push(roomOneChest);

//Pushing the rooms into the roomArray
let setPieceArray = [roomOneChest];

//pushing items into the itemarray
let itemArray = [hand, firstKey];

let inv = new Inventory([], [], [], [], [])
inv.tools.push(hand);
let Henry = new Player("Henry", 1, [5, 5, 5, 25], inv)
let roomArray = [Henry.inventory, roomOne, roomTwo];


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

  northButton.addEventListener("click", () => {Henry.move(1, roomArray)});
  eastButton.addEventListener("click", () => {Henry.move(2, roomArray)});
  southButton.addEventListener("click", () => {Henry.move(3, roomArray)});
  westButton.addEventListener("click", () => {Henry.move(4, roomArray)});


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
          console.log(found instanceof SetPiece)
        //const targetThing = setPieceArray.find(element => element.name === targetInput.value);
        Henry.interact(itemInput.value, found);
        }
        else
        {
          const foundItem = itemArray.find(element => element.name === targetInput.value);
          if(found instanceof Item)
          {
            console.log(found instanceof SetPiece)
          //const targetThing = setPieceArray.find(element => element.name === targetInput.value);
          Henry.pickUp(foundItem);
          }
          else
          {
            console.log("Nope!")
          }
        }
      })
      
  })
}

