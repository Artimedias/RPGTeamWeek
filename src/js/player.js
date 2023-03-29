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

    //toDO: add the checking if you actually have the item to another function, its kinda messy here ngl
    interact(item, target) {

        const itemKeys = Object.keys(this.inventory);
       for(let i = 0; i < itemKeys.length; i++)
       {
            const found = this.inventory[itemKeys[i]].find(element => element.name === item);
            if(found)
            {
                //const itemTarget = setPieceArray.find(element => element.name === targetInput.value);
                target.actions(found);
            }
    }
}
    pickUp(item) {
        switch (item.tag) {
            case keys: 
            item.location = 0

        }
    }
    attack(target) {
        //this will check the targeted object if its a character, and if it is a character, to turn it hostile and then do damage to it. 
    }
}