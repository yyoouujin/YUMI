import CustomerList from './CustomerList';
//import CustomerUpdate from './CustomerUpdate';
import CustomerUpdate2 from './CustomerUpdate_copy';
import { useState } from "react"; //아이디값을 공유
/*
리액트용 부트스트랩 : https://react-bootstrap.netlify.app/
->
설치 후 사용
> npm i react-bootstrap
> npm i bootstrap
*/
import {Container, Row, Col, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; //css는 제일 바깥에만 해줘도된다!

export default function CustomerComponent() {

  let [id, setId] = useState();

  return (
    <Container>
      <Card>
        <Row>
          <Col>
            <CustomerList onClick={(_id) => {setId(_id);}} />
          </Col>
          <Col>
            <CustomerUpdate2  id={id} />
          </Col>
        </Row>
      </Card>
    </Container>
  )

}