npm start

       const field = ["base","pastSimple","pastParticiple"]
        // Random number between 0 - (MAX-1)
        const randomLine = Math.floor(Math.random()*Math.floor(allVerbs[0].verbs.length));
        const randomField = Math.floor(Math.random()*Math.floor(field.length))
        console.log(allVerbs[0].verbs[randomLine][field[randomField]]);
        setState(allVerbs[0].verbs[randomLine][field[randomField]]) 