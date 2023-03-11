import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const ContactsSection = styled.section`
  margin: 70px auto 0;
  width: 100%;
  @media (min-width: 576px) {
    max-width: 800px;
  }
`;

export const TitleH2 = styled.h2`
  text-align: center;
  font-size: 28px;
  font-weight: 700;
  color: rgb(17, 54, 133);
  margin-bottom: 70px;
  @media (min-width: 576px) {
    font-size: 38px;
  }
`;
