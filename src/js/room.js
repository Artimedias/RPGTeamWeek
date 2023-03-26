export default class Room {
    constructor(location, description, connection, setpiece)
    {
        this.location = location;
        this.description = description;
        this.connection = connection;
        this.setpiece = setpiece;
    }

    description()
    {
        //this will print out the rooms own description, as well as the description of any characters, items, or setpieces in the room
    }
}