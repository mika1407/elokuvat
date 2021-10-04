import styled from 'styled-components';

export const Wrapper = styled.div`

button {
  background: #3A549E;
  width: 25%;
  min-width: 70px;
  height: 50px;
  border-radius: 10px;
  color: var(--white);
  border: 0;
  font-size: var(--fontBig);
  margin: 20px auto;
  transition: all 0.3s;
  outline: none;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
}
`