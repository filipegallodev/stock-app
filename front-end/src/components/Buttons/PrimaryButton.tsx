import React from "react";
import styled from "styled-components";

const PrimaryButton = ({ text }: { text: string }) => {
  return <Button>{text}</Button>;
};

const Button = styled.div`
  background-color: #333;
  max-width: 160px;
  padding: 16px 32px;
  border-radius: 4px;
  color: #f5f5f5;
  font-size: 1.25rem;
  text-align: center;
  cursor: pointer;
`;

export default PrimaryButton;
