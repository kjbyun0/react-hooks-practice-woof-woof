import React, { useState, useEffect } from "react";
import PupButton from './PupButton';
import PupDesc from './PupDesc';

function App() {
  const [pups, setPups] = useState([]);
  const [pup, setPup] = useState({
    name: '',
    isGoodDog: true,
    image: '',
  });
  const [isGoodDogsFilterOn, setIsGoodDogsFilterOn] = useState(false);

  function handleUpdatePup(pupObj) {
    // console.log('in App, pupObj: ', pupObj);
    setPups(pups.map(pupElem => {
      if (pupElem.id === pupObj.id) {
        return pupObj;
      } else {
        return pupElem;
      }
    }));

    setPup(pupObj);
  }

  function handleToggleFilter() {
    setIsGoodDogsFilterOn(!isGoodDogsFilterOn);
  }

  useEffect(() => {
    fetch('http://localhost:3001/pups')
    .then(resp => resp.json())
    .then(data => setPups([...data]));
  }, []);

  // console.log('in App, pup: ', pup, ', pups: ', pups);
  // console.log('in App, isGoodDogsFilterOn: ', isGoodDogsFilterOn);

  const filteredPups = pups.filter(pupElm => isGoodDogsFilterOn ? pupElm.isGoodDog : true);
  const dispPups = filteredPups.map(pupElem => <PupButton key={pupElem.id} pup={pupElem} onPupClick={setPup} />);

  return (
    <div className="App">
      <div id="filter-div">
        <button id="good-dog-filter" onClick={handleToggleFilter}>
          {isGoodDogsFilterOn ? 'Filter good dogs: OFF' : 'Filter good dogs: ON'}
        </button>
      </div>
      <div id="dog-bar">
        {dispPups}
      </div>
      <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <div id="dog-info">
          <PupDesc pup={pup} onUpdatePup={handleUpdatePup}/>
        </div>
      </div>
    </div>
  );
}

export default App;
