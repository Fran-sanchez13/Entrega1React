import styled from "styled-components";

export const TaskContainerStyled = styled.div`
  color: #131415;
  border: solid 4px white;
  border-radius: 1rem;
  width: 700px;
  margin: 20px auto;
  padding: 20px;
  background-color: var(--lettering);
  text-align: center;
  
  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const TitleStyled = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const InputContainerStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const InputStyled = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 70%;
  background-color: #f0f0f0;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ButtonStyled = styled.button`
  background-color: blue;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 100%;
  }

  &:disabled {
    background-color: gray;
    cursor: not-allowed;
  }
`;

export const TaskListStyled = styled.ul`
  list-style: none;
  padding: 0;
`;

export const TaskItemStyled = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f9f9f9;
  margin-bottom: 5px;
  padding: 10px;
  border-radius: 5px;
  color: black;
`;

export const DeleteButtonStyled = styled.button`
  background-color: red;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
`;

export const ClearButtonStyled = styled.button`
  background-color: red;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  width: 100%;
  margin-top: 10px;
`;
