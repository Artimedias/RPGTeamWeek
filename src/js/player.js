export default class Player {
    constructor(name, location, stats, inventory)
    {
        this.name = name;
        this.location = location;
        this.stats = stats;
        this.inventory = inventory;
    }

    move(direction, roomAt) {
        //this will check the room object if the direction that the player wishes to move is valid, and then will change the players location to that room
        //it then will tell the room object to run its describe method

        //if the room at the location the player is in has a connector with the same direction as the direction we just passed here
        for(let i = 0; i < roomAt[this.location].connection.length; i++)
        {
            if(roomAt[this.location].connection[i].direction === direction)
            {
                this.location = roomAt[this.location].connection[i].destination; 
                roomAt[this.location].describe();
            }
        }
        
    }

    inspect(target) {
        //this will tell the thing being inspected to run its describe method
    }

    interact(target) {
        //this will tell the targeted object to check its actions method to see if the item being used on it is a valid item and to run its action if it is
    }
    attack(target) {
        //this will check the targeted object if its a character, and if it is a character, to turn it hostile and then do damage to it. 
    }
}