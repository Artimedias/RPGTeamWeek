export default class SetPiece {
    constructor(state, description, name, actions)
    {
        this.state = state;
        this.description = description;
        this.name = name;
        this.actions = actions;
    }

    describe()
    {
       console.log(this.description[this.state])
    }

    actions(item)
    {
        /*
        switch(id)

        case 1: 


        */
        //will call the code that we pass into it as actions, as a function
    }
}