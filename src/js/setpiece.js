export default class SetPiece {
  constructor(location, state, description, name, actions)
  {
    this.location = location;
    this.state = state;
    this.description = description;
    this.name = name;
    this.actions = actions;
  }

  describe(textBox)
  {
    console.log(this.description[this.state]);
    textBox.innerText += this.description[this.state];
  }

  actions(item, textBox)
  {
    /*
        switch(id)

        case 1: 


        */
    //will call the code that we pass into it as actions, as a function
  }
}