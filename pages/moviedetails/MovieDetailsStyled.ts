import styled from 'styled-components';
import devices from 'shared/media';

const Wrapper = styled.div`
  display: flex;

  @media ${devices.tabletOnly} {
    flex-direction: column;
  }
`;

export default Wrapper;

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

  @media ${devices.mobileOnly} {
    min-height: 100px;
    margin-bottom: 8px;
  }
`;

export const BackButton = styled.a`
  font-size: 14px;
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

  @media ${devices.mobileOnly} {
    margin-bottom: 16px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 42px;

  @media ${devices.mobileOnly} {
    padding: 28px;
  }
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

  @media ${devices.tabletOnly} {
    display: none;
  }
`;

export const PosterMobile = styled.div`
  @media ${devices.tablet} {
    display: none;
  }

  width: 100%;
  height: 40vh;
  overflow: hidden;

  img {
    width: 100%;
    object-position: center;
  }
`;
