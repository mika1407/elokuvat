import styled from 'styled-components';

export const Wrapper = styled.div`
  background: var(--harmaa);
  padding: 0 20px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--maxWidth);
  padding: 20px 0;
  margin: 0 auto;
  color: var(--darkGrey);

  a {
    color: var(--darkGrey);
    text-decoration: none;
  }
`;

export const Otsikko = styled.div`
  color: var(--darkGrey);
  font-size: var(--fontBig);
  margin: 8px 0;
  padding: 0 0 0 60px;
  width: 95%;
  height: 40px;
`;

export const LogoImg = styled.img`
  width: 200px;
  

  @media screen and (max-width: 500px) {
    width: 150px;
  }
`;

export const TMDBLogoImg = styled.img`
  width: 100px;
  margin: 0px 10px;

  @media screen and (max-width: 500px) {
    width: 80px;
  }
`;