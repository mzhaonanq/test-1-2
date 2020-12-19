import React from "react";
import styled from "styled-components";

const Label = styled.label`
  display: flex;
  flex-direction: column;

  > span {
    white-space: nowrap;
    font-size: 14px;
    margin-top: 16px;
    margin-bottom: 8px;

    &::before {
      content: '*';
      color: red;
    }
  }

  > div {
    border-bottom: 1px solid rgba(230, 230, 230, 1);
    display: flex;
    justify-content: center;
    align-items: center;
    > select {
      text-align: center;
      text-align-last: center;
      height: 32px;
      width: 92%;
      border-radius: 4px;
      appearance: none;
      -moz-appearance: none;
      -webkit-appearance: none;
      padding-right: 14px;
      /* 右侧添加小箭头的背景图 */
      background: url("../icons/down-arrow.svg") no-repeat scroll right center transparent;
      /* 清除默认边框 */
      background-size: 12px;


    }
  }
`
const Select = (props) => {
  return (
    <Label>
      <span>{props.title}</span>
      <div>
        <select>
          <option value="selection">请选择</option>
          {props.children}
        </select>
      </div>
    </Label>
  )
}

export {Select}