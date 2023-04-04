export default class Item {
  constructor(name, description, tag, location)
  {
    this.name = name;
    this.description = description;
    this.tag = tag;
    this.location = location;
  }

  describe()
  {
    if(this.location != 0)
    {
      console.log(this.description[0]);
    }
    else
    {
      console.log(this.description[1]);
    }
  }
}