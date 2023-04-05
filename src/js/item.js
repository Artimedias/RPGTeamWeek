export default class Item {
  constructor(name, description, tag, location)
  {
    this.name = name;
    this.description = description;
    this.tag = tag;
    this.location = location;
  }

  describe(textBox)
  {
    if(this.location != 0)
    {
      console.log(this.description[0]);
      textBox.innerText += this.description[0];
    }
    else
    {
      console.log(this.description[1]);
      textBox.innerText += this.description[1];
    }
  }
}