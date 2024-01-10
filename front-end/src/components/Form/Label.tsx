import React from "react";
import styled from "styled-components";

const Label = ({ text, id }: { text: string; id: string }) => {
  return <LabelInput htmlFor={id}>{text}</LabelInput>;
};

const LabelInput = styled.label`
  display: block;
`;

export default Label;
