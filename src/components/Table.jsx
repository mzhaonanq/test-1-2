import React from "react";
import styled from "styled-components";
import {Input} from "./Input";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid rgba(230,230,230,1);
  padding-bottom: 16px;
  padding-right:16px;
  > span {
    font-size:14px;
    margin-top: 16px;
    margin-bottom: 8px;
    .single-word{
      color:red;
    }
    &::before {
      content: '*';
      color: red;
    }
  }
`

const TableWrapper = styled.table`
  border-collapse: separate;
  border-spacing: 0;
  border: 1px solid #000;
  border-radius: 10px;
  th{
    border-right: 1px solid #000;
    height: 32px;
    &:last-child{
      border-right: none;
    }
  }
  td {
    text-align: center;
    border-right: 1px solid #000;
    border-top: 1px solid #000;
    &:last-child {
      border-right: 0;
    }
  }
`

const Table = (props) => {
  const {headLine} = props
  return (
    <Wrapper>
      <span>{props.title}{props.children}</span>
      <TableWrapper>
        <thead>
        <tr>
          <th>{headLine["head1"]}</th>
          <th>{headLine["head2"]}</th>
          <th>{headLine["head3"]}</th>
          <th>{headLine["head4"]}</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>
            <Input/>
          </td>
          <td>
            <Input/>
          </td>
          <td>
            <Input/>
          </td>
          <td>
            <Input/>
          </td>
        </tr>
        </tbody>
        <tbody>
        <tr>
          <td>
            <Input/>
          </td>
          <td>
            <Input/>
          </td>
          <td>
            <Input/>
          </td>
          <td>
            <Input/>
          </td>
        </tr>
        </tbody>
        <tbody>
        <tr>
          <td>
            <Input/>
          </td>
          <td>
            <Input/>
          </td>
          <td>
            <Input/>
          </td>
          <td>
            <Input/>
          </td>
        </tr>
        </tbody>
      </TableWrapper>
    </Wrapper>
  )
}
export {Table}