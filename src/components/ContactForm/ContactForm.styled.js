import styled from 'styled-components';

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

export const AddSection = styled.section`
  margin: 70px auto 0;
  @media (min-width: 576px) {
    width: 450px;
  }
`;

export const Form = styled.form`
  width: 450px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 50px;
`;
export const FormLabel = styled.label`
  line-height: 1.8;
  font-size: 16px;
  font-weight: 400;
`;
export const FormInput = styled.input`
  border-radius: 5px;
  padding: 10px;
  border: 1px solid #000;
  outline: transparent;
  
  }
`;
export const AddButton = styled.button`
  width: 100px;
  cursor: pointer;
  padding: 5px;
  border-radius: 5px;  
  font-size: 16px;
  font-weight: 400;
  &:hover{
    background: lightblue;
  }
`;