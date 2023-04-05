export default class Room {
  constructor(location, description, connection)
  {
    this.location = location;
    this.description = description;
    this.connection = connection;
    this.setpiece = [];
  }

  describe(textBox)
  {
    console.log(this.description);
    textBox.innerText += this.description;

    this.setpiece.forEach(element => {
      element.describe(textBox);
    });
    /*items.forEach(element => {
            element.describe();
        });*/
  }
}