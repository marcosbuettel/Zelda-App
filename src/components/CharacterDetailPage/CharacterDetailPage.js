import React from 'react';
import { CharDetailStyle } from './CharacterDetailPageStyled';

const CharacterDetailPage = (props) => {
  const showCharData = props.charData.map((char) => {
    return (
      <div key={char.id}>
        <h3>{char.name}</h3>
        <p>{char.race}</p>
        <p>{char.gender}</p>
        <p>{char.description}</p>
      </div>
    );
  });

  return (
    <>
      <h2>CHAR DETAIL PAGE</h2>
      <CharDetailStyle>
        {showCharData}
        <button onClick={props.backPage}>BACK</button>
      </CharDetailStyle>
    </>
  );
};

export default CharacterDetailPage;
