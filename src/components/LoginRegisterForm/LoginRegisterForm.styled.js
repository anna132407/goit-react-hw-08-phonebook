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
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 50px;

  @media (min-width: 576px) {
    width: 450px;
  }
`;
export const FormLabel = styled.label`
  line-height: 1.8;
  color: rgb(17, 54, 133);
  font-size: 24px;
  font-weight: 500;
`;
export const FormInput = styled.input`
  border-radius: 5px;
  padding: 10px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));
  outline: transparent;
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
export const AddButton = styled.button`
  width: 100px;
  border-radius: 5px;
  border: 3px solid rgb(17, 54, 133);
  font-size: 24px;
  font-weight: 500;
  color: rgb(17, 54, 133);
  margin: 20px auto 0;
  }
`;