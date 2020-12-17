import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  > input {
    width: 100%;
    height: 32px;
    border: none;
    background: none;
  }`

const Input2 = () => {
  return (
    <Label>
      <input/>
    </Label>
  )
}
export {Input2}