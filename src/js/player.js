export default class Player {
  constructor(name, location, stats, inventory)
  {
    this.name = name;
    this.location = location;
    this.stats = stats;
    this.inventory = inventory;
  }

  move(direction, roomAt, textBox, itemArray) {
    let succsess = false;
    //this will check the room object if the direction that the player wishes to move is valid, and then will change the players location to that room
    //it then will tell the room object to run its describe method

    //if the room at the location the player is in has a connector with the same direction as the direction we just passed here
    for(let i = 0; i < roomAt[this.location].connection.length; i++)
    {
      if(roomAt[this.location].connection[i].direction === direction && succsess != true)
      {
        this.location = roomAt[this.location].connection[i].destination; 
        console.log(this.location);
        roomAt[this.location].describe(textBox, itemArray);
        succsess = true;
      }
    }
    if(succsess === false);
    {
      console.log("You can't go that way");
    }
  }

  interact(item, target, textBox) {

    const itemKeys = Object.keys(this.inventory);
    for(let i = 0; i < itemKeys.length; i++)
    {
      const found = this.inventory[itemKeys[i]].find(element => element.name === item);
      if(found)
      {
        //const itemTarget = setPieceArray.find(element => element.name === targetInput.value);
        target.actions(found, textBox);
        break;
      }
    }
  }
  pickUp(item) {
    item.location = 0;
    switch (item.tag) {
    case "keys": 
      this.inventory.keys.push(item);
      break;
    case "tools": 
      this.inventory.tools.push(item);
      break;
    case "objects": 
      this.inventory.objects.push(item);
      break;
    case "food": 
      this.inventory.food.push(item);
      break;
    case "weapons": 
      this.inventory.weapons.push(item);
      break;
    }

  }
}