import styled from 'styled-components';

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}


export const Container = styled.div`
  width: 100%;
  max-width: 750px;
  margin: auto;
  display: flex;
  padding: 50px 0;

  @media (max-width: ${size.tablet}) {
    flex-direction: column;
  }

`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;

  @media (max-width: ${size.tablet}) {
    margin-bottom: 50px;
   
    align-items: center;
  }
`;

export const LogoLink = styled.a`
  display: block`;

export const InfoArea = styled.div`
  width: 100%;
  margin: 10px 0;

  @media (max-width: ${size.tablet}) {
    display: flex;
    justify-content: space-around;
    text-align: center;
  }
`;

export const GridArea = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;

  @media (max-width: ${size.tablet}) {
    justify-content: center;
    margin: 0 20px;
  }
`;

export const Grid = styled.div`
  width: 430px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;