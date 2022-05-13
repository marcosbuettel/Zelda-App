import React, { useState } from 'react';
import CharacterDetailPage from '../CharacterDetailPage/CharacterDetailPage';
import { CharListStyle } from './CharacterListPageStyled';

const CharacterListPage = (props) => {
  const [charData, setCharData] = useState([]);
  const [selectedPage, setSelectedPage] = useState('charList');

  const goToCharDetailPage = (id) => {
    const charDetail = props.charList
      .filter((char) => {
        return char.id === id;
      })
      .map((char) => {
        return char;
      });

    setCharData(charDetail);
    setSelectedPage('charDetail');
  };

  const showCharList = props.charList
    .filter((char) => {
      return char.race === 'Hylian';
    })
    .map((char) => {
      return (
        <p key={char.id} onClick={() => goToCharDetailPage(char.id)}>
          {char.name}
        </p>
      );
    });

  const backPage = () => {
    setSelectedPage('charList');
  };

  var page;

  if (selectedPage === 'charList') {
    page = (
      <CharListStyle>
        <h2>CHAR LIST</h2>
        <button onClick={props.backPage}>BACK</button>
        {showCharList}
      </CharListStyle>
    );
  } else {
    page = <CharacterDetailPage charData={charData} backPage={backPage} />;
  }

  return <>{page}</>;
};

export default CharacterListPage;
