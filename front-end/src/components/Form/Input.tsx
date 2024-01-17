import React from "react";
import styled from "styled-components";

interface IProps {
  id: string;
  type?: string;
  [key: string]: any;
}

const Input = ({ id, type = "text", ...args }: IProps) => {
  return <StyledInput id={id} type={type} {...args} />;
};

const StyledInput = styled.input`
  display: block;
  font-size: 1.125rem;
  border: 1px solid black;
  border-radius: 4px;
  padding: 8px 12px;
`;

export default Input;
