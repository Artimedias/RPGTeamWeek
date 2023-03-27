import Player from './js/player.js';
import Inventory from './js/inventory.js';
import SetPiece from './js/setpiece.js';
import Character from './js/character.js';
import Room from './js/room.js';
import Connector from './js/connector.js';
import Item from './js/item.js';




//Defining Connectors
let C1N = new Connector(1, 2)
let C2S = new Connector(3, 1)

//Making arrays out of the connectors for each room
const roomOneCons = [C1N]
const roomTwoCons = [C2S]

//C for connector, 1 for room 1, N for north

//Defining items
let hand = new Item("Hand", ["How did you manage to drop your hand on the floor?", "This is your hand. It's very handy"], "tool", 0)
let firstKey = new Item("First key", ["There is a key on the ground", "This is a key. It is the first one you have found."], "key", 88)

//Defining setpieces
let roomOneChest = new SetPiece(0, ["There is a locked chest in the room", "There is an already opened chest in the room"], "unlocked chest", (item) => {
    if(item.name === "Hand")
{
    firstKey.location = 1;
    console.log("The chest opens! There is a key inside!")
    roomOneChest.state = 1;
    firstKey.describe();
}
});



//Defining rooms
let roomOne = new Room(1, "You are in a dark gray room. \n There is a path to the North", roomOneCons, roomOneChest);
let roomTwo = new Room(2, "You are in a room with brown wallpaper. \n There is a path to the South", roomTwoCons);

//Pushing the rooms into the roomArray
let setPieceArray = [roomOneChest];

let inv = new Inventory([], [hand], [], [], [])
let Henry = new Player("Henry", 1, [5, 5, 5, 25], inv)
let roomArray = [Henry.inventory, roomOne, roomTwo];


window.addEventListener("load", main);

function main() {
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
        if(found)
        {
        Henry.interact(itemInput.value, targetInput.value);
        }
        else
        {
            console.log("That is not a valid target")
        }
      })
      
  })







}

