import styled from 'styled-components';

export const FilterSection = styled.section`
  margin: 70px auto 0;
  @media (min-width: 576px) {
    width: 450px;
  }
`;

export const TitleH2 = styled.h2`
  text-align: center;
  font-size: 28px;
  font-weight: 700;
  color: rgb(17, 54, 133);
  margin-bottom: 40px;
  @media (min-width: 476px) {
    font-size: 38px;
  }
`;

export const SearchLabel = styled.label`
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 40px;
  width: 450px;
`;
export const SearchInput = styled.input`
  border-radius: 5px;
  padding: 4px;
  border: 1px solid #000;
   &:hover{
    border:1px solid lightblue;
  }
`;