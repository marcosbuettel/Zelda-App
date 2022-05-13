import React from 'react';
import { GameDetailStyle } from './GameDetailPageStyled';

const GameDetailPage = (props) => {
  const showGameDetail = props.gameData.map((game) => {
    return (
      <div key={game.id}>
        <h2>{game.name}</h2>
        <p>{game.developer}</p>
        <p>{game.released_date}</p>
        <p>{game.description}</p>
      </div>
    );
  });

  return (
    <>
      <h2>GAME DETAIL PAGE</h2>
      <GameDetailStyle>
        {showGameDetail}
        <button onClick={props.backPage}>BACK</button>
      </GameDetailStyle>
    </>
  );
};

export default GameDetailPage;
