export default class Character {
    constructor(state, description, actions, location, stats)
    {
        this.state = state;
        this.description = description;
        this.actions = actions;
        this.location = location;
        this.stats = stats;
    }


    describe() {
        //this will print out the description for the character
    }

    attack() {
        //attacks the player, using its stats block
    }
    
    actions(item) {
        //will call the code that we pass into it as actions, as a function
    }
}