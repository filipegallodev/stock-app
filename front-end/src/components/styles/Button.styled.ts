import styled from "styled-components";

export const StyledButton = styled.button`
  display: block;
  margin: 12px 0px;
  background-color: #f70;
  border: none;
  padding: 12px 40px;
  border-radius: 10px;
  color: #f5f5f5;
  font-size: 1.25rem;
  text-align: center;
  cursor: pointer;
  transition: 0.1s;
  &:hover {
    background-color: #f50;
  }
  &:active {
    background-color: #f20;
  }
`;

export const SecondaryButton = styled(StyledButton)`
  font-size: 1rem;
  background-color: #fff;
  color: #f70;
  box-shadow: 0px 0px 0px 1px #f70;
  &:hover {
    color: #fff;
  }
`;
