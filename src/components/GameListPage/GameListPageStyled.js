import styled from 'styled-components';

export const GameListStyle = styled.div`
  h2 {
    font-size: 50px;
    margin-top: 20px;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
  }

  input {
    font-size: 20px;
    padding: 10px;
    margin-left: 20px;
    width: 400px;
    border: none;
  }

  h3 {
    font-size: 30px;
  }

  p {
    margin: 20px 0;
    font-size: 22px;
    background-color: black;
    padding: 5px 10px;
    cursor: pointer;
  }

  p:hover {
    background-color: #00bfed;
    transition: 0.6s;
  }
`;
