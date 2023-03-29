

    confirmButton.addEventListener("click", () => {

        const found = setPieceArray.find(element => element.name === targetInput.value);
        if(found)
        {
        //const targetThing = setPieceArray.find(element => element.name === targetInput.value);
        Henry.interact(itemInput.value, found);
        }
        else
        {
            console.log("That is not a valid target")
        }
      })
      
  })







}

>>>>>>> b15d94731cc7ed2ac321cf82244f6200e846e912
