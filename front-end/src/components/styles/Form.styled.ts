import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 400px;
  width: 100%;
  padding: 24px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 8px #00000025;
  color: #222;
`;

export const FormTitle = styled.h2`
  margin-bottom: 24px;
  font-size: 1.75rem;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const StyledLabel = styled.label`
  display: block;
  font-size: 1rem;
  margin-bottom: 6px;
`;

export const StyledInput = styled.input`
  display: block;
  font-size: 1.125rem;
  border: none;
  box-shadow: 0px 0px 0px 2px #00000050;
  border-radius: 4px;
  padding: 10px 14px;
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

export const Warning = styled.span`
  font-size: 1rem;
  font-weight: 500;
  color: #f00;
`;
