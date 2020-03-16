import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
`;

export const ScoreView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 200px;
  margin-bottom: 48px;

  h1 {
    flex: 1;
    margin: 0 20px 0 0;
  }
`;

export const BackButton = styled.a`
  font-size: 12px;
  margin-bottom: 32px;
  cursor: pointer;
  color: blue;

  span {
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(135deg);
    margin-right: 5px;
  }

  &:hover {
    text-decoration: underline;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 42px;
`;

export const Poster = styled.div`
  min-width: 40%;
  height: 100vh;

  img {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    object-fit: cover;
    height: 100%;
    width: 40%;
  }
`;
