import React, { useState, useEffect } from 'react';

const Board = () => {
  const [ gameAPI, setGameAPI ] = useState([]);

  useEffect(() => {
    async function fetchIt() {
      try {
        console.log('hello');
        const api = await fetch('GameAPI.json');
        const apiJSON = await api.json();
        setGameAPI(apiJSON);
      } catch (error) {
        console.log('An error has occurred on fetching');
      }
    }
    fetchIt();

    console.log(gameAPI);
  }, []);

  return <div>HALLOW WORLD</div>;
};

export default Board;
