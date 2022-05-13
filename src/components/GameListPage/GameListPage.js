import React, { useState, useEffect } from 'react';
import GameDetailPage from '../GameDetailPage/GameDetailPage';
import { GameListStyle } from './GameListPageStyled';

const GameListPage = (props) => {
  const [gameInputValue, setGameInputValue] = useState('');
  const [newGameList, setNewGameList] = useState(props.gameList);
  const [selectedPage, setSelectedPage] = useState('gameList');
  const [gameData, setGameData] = useState([]);

  const filterGameList = (event) => {
    setGameInputValue(event.target.value);
  };

  useEffect(() => {
    const newList = props.gameList
      .filter((game) => {
        return game.name.toLowerCase().match(gameInputValue.toLowerCase());
      })
      .map((game) => {
        return game;
      });
    setNewGameList(newList);
  }, [gameInputValue]);

  const goToGameDetailPage = (id) => {
    const gameDetail = newGameList
      .filter((game) => {
        return game.id === id;
      })
      .map((game) => {
        return game;
      });

    setGameData(gameDetail);
    setSelectedPage('gameDetail');
  };

  const showGameList = newGameList.map((game) => {
    return (
      <p key={game.id} onClick={() => goToGameDetailPage(game.id)}>
        {game.name}
      </p>
    );
  });

  const backPage = () => {
    setSelectedPage('gameList');
  };

  var page;

  if (selectedPage === 'gameList') {
    page = (
      <GameListStyle>
        <h2>GAME LIST</h2>
        <button onClick={props.backPage}>BACK</button>
        <br />
        <br />

        <div>
          <h3>Filter Game List:</h3>
          <input onChange={filterGameList} value={gameInputValue} />
        </div>
        {showGameList}
      </GameListStyle>
    );
  } else {
    page = <GameDetailPage gameData={gameData} backPage={backPage} />;
  }
  return <>{page}</>;
};

export default GameListPage;
