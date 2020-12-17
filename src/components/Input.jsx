import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  display: flex;
  flex-direction: column;

  > span {
    white-space: nowrap;
    font-size: 14px;
    margin-top:16px;
    margin-bottom:8px;

    &::before {
      content: '*';
      color: red;
    }
  }

  > input {
    width: 100%;
    height: 32px;
    border: none;
    background: none;
    border-bottom: 1px solid rgba(230,230,230,1);
  }`

const Input = (props) => {
  const {title, children, ...rest} = props
  return (
    <Label>
      <span>{title}</span>
      <input {...rest} />
    </Label>
  )
}
export {Input}