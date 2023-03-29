export default class Room {
    constructor(location, description, connection, setpiece)
    {
        this.location = location;
        this.description = description;
        this.connection = connection;
        this.setpiece = setpiece;
    }

    describe()
    {
        console.log(this.description);
    }
}