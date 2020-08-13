import React, {useEffect, useState} from 'react';
import {listIrregularVerbs} from './API/api_verbs';

const App = () => {
    const [allVerbs, setVerb]= useState([]);

    const getVerbs = async () => {
        const allVerbs = await listIrregularVerbs();
        setVerb(allVerbs);
    }

      useEffect(() => {
        getVerbs();
      }, []);

    return (
     <div>
     <h1>Irregular verbs : </h1>
     {
      allVerbs.map(verb =>{
          const field = ['base','pastSimple','pastParticiple']
        return <pre>{JSON.stringify(verb.verbs[Math.floor(Math.random() * Math.floor(verb.verbs.length))][field[Math.floor(Math.random() * Math.floor(field.length))]])}</pre>
      })
     }
     </div>
    )
}

export default App;
