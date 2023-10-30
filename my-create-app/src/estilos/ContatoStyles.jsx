import styled from 'styled-components';

// Estilização condicional com base em uma prop
const FormInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  background-color: ${(props) => (props.error ? '#FFC0CB' : 'white')};
  color: ${(props) => (props.error ? 'red' : 'black')};

  &:focus {
    outline: none;
    border-color: #007BFF;
  }
`;

// Estilização aninhada
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 8px;
  }

  button {
    background-color: #007BFF;
    color: white;
    padding: 10px;
    border: none;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

export { FormInput, FormContainer };
