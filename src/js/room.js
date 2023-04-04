export default class Room {
  constructor(location, description, connection)
  {
    this.location = location;
    this.description = description;
    this.connection = connection;
    this.setpiece = [];
  }

  describe()
  {
    console.log(this.description);

    this.setpiece.forEach(element => {
      element.describe();
    });
    /*items.forEach(element => {
            element.describe();
        });*/
  }
}