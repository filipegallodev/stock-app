import styled from "styled-components";

export const Button = styled.button`
  display: block;
  margin: 16px auto;
  background-color: #f70;
  border: none;
  padding: 12px 40px;
  border-radius: 10px;
  color: #f5f5f5;
  font-size: 1.35rem;
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
