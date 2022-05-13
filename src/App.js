import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterListPage from './components/CharacterListPage/CharacterListPage';
import GameListPage from './components/GameListPage/GameListPage';
import styled from 'styled-components';
import background from './images/bg.jpg';

const HomePage = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${background});
  background-size: cover;
  color: white;
  height: 100vh;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  text-align: center;

  h1 {
    margin-bottom: 20px;
  }

  button {
    margin: 20px;
    background-color: black;
    color: white;
    padding: 10px 20px;
    font-size: 20px;
    cursor: pointer;
    border: none;
  }

  button:hover {
    transition: 0.6s;
    background-color: white;
    color: black;
  }
`;

function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const [charList, setCharList] = useState([]);
  const [gameList, setGameList] = useState([]);

  useEffect(() => {
    requestAPI('characters');
  }, []);

  useEffect(() => {
    requestAPI('games');
  }, []);

  const requestAPI = async (request) => {
    try {
      const response = await axios.get(
        `https://zelda.fanapis.com/api/${request}?limit=100`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      if (request === 'characters') {
        setCharList(response.data.data);
      } else {
        setGameList(response.data.data);
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  const backPage = () => {
    setSelectedPage('home');
  };

  const goToCharacterList = () => {
    setSelectedPage('charList');
  };

  const goToGameList = () => {
    setSelectedPage('gameList');
  };

  var page;

  if (selectedPage === 'charList') {
    page = <CharacterListPage charList={charList} backPage={backPage} />;
  } else if (selectedPage === 'gameList') {
    page = <GameListPage gameList={gameList} backPage={backPage} />;
  } else {
    page = (
      <div>
        <button onClick={goToGameList}>GAME LIST</button>
        <button onClick={goToCharacterList}>CHAR LIST</button>
      </div>
    );
  }

  return (
    <HomePage>
      <h1>THE LEGEND OF ZELDA por MARCOS BUETTEL</h1>
      {page}
    </HomePage>
  );
}

export default App;
