import React from "react";
import styled from "styled-components";

const Label = ({ text, id }: { text: string; id: string }) => {
  return <LabelInput htmlFor={id}>{text}</LabelInput>;
};

const LabelInput = styled.label`
  display: block;
  font-size: 1.25rem;
`;

export default Label;
