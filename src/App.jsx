import styled from "styled-components"
import {Input} from "./components/Input"
import {Select} from "./components/Select"
import React from "react"
import {Table} from "./components/Table"

const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 64px;
  background: rgb(108, 150, 188);
  color: white;
  text-align: center;

  > p {
    margin: 2px 0;
  }
`
const Label = styled.label`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid rgba(230, 230, 230, 1);
  margin-bottom: 16px;

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
  > textarea {
    border: none;
  }
`
const Main = styled.main`
  margin-left: 16px;
`
const Footer = styled.footer`

  display: flex;
  justify-content: center;
  align-items: center;

  > input {
    width: 90%;
    height: 36px;
    border: none;
    border-radius: 4px;
    background: rgb(108, 150, 188);
    color: white;
    letter-spacing: 0.5em;
  }

`

function App() {
  return (
    <>
      <Header>
        <p>杭州方大丝绸有限公司</p>
        <p>应聘登记表</p>
      </Header>
      <Main>
        <form action="" method="post" id="form1">
          <Input title="应聘岗位" placeholder="请输入"/>
          <Input title="姓名" placeholder="请输入"/>
          <Select title="性别">
            <option value="male">男</option>
            <option value="female">女</option>
          </Select>
          <Input title="出生年月" type="date"/>
          <Input title="民族" placeholder="请输入"/>
          <Input title="政治面貌" placeholder="请输入"/>
          <Select title="婚否">
            <option value="married">已婚</option>
            <option value="unmarried">未婚</option>
          </Select>
          <Input title='健康状况' placeholder="请输入"/>
          <Input title='籍贯(省、市)' placeholder="请输入"/>
          <Input title='联系方式' placeholder="请输入" type="number"/>
          <Input title='电子邮件' placeholder="请输入" type="email"/>
          <Input title='学历' placeholder="请输入"/>
          <Input title='现住地' placeholder="请输入"/>
          <Input title='目前是否在职' placeholder="请输入"/>
          <Select title="预计到岗时间"/>
          <Input title="期望薪资" placeholder="请输入"/>
          <Input title='外语水平' placeholder="请输入"/>
          <Input title='计算机水平' placeholder="请输入"/>
          <Table title="教育经历（至少完整填写一行）" headLine={{head1: "时间", head2: "毕业院校", head3: "专业", head4: "详细情况"}}/>
          <Table title="工作经历（至少完整填写一行，没有则写" headLine={{head1: "时间", head2: "公司名称", head3: "职务", head4: "职责"}}>
            <span className="single-word">`无`</span>
            <span>）</span>
          </Table>
          <Input title='个人荣誉' placeholder="请输入"/>
          <Input title='兴趣特长' placeholder="请输入"/>
          <Label>
            <span>自我评价</span>
            <textarea placeholder="请输入" rows='8'/>
          </Label>
        </form>
      </Main>
      <Footer>
        <input type="submit" form='form1'/>
      </Footer>
    </>
  );
}

export default App;
