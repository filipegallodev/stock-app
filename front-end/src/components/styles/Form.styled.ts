import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 24px 0px;
`;

export const StyledLabel = styled.label`
  display: block;
  font-size: 1rem;
  margin-bottom: 6px;
`;

export const StyledInput = styled.input`
  display: block;
  font-size: 1rem;
  border: none;
  box-shadow: 0px 0px 0px 2px #00000050;
  border-radius: 4px;
  padding: 8px 12px;
  transition: 0.15s;
  &:hover {
    box-shadow: 0px 0px 0px 2px #000000;
  }
  &:focus {
    outline: none;
    box-shadow: 0px 0px 0px 2px #2c3dda;
  }
`;

export const InputBox = styled.div`
  display: flex;
  align-items: left;
  justify-content: left;
  flex-direction: column;
  max-width: 600px;
`;
