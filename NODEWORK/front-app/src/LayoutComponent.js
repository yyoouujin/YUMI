import React, { useState } from 'react';
import { useRoutes } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Container
} from 'reactstrap';

import route from "./route/index";
import { createContext, useContext } from 'react';

//로그인 정보
let login = {userid:"채유진", isLogin:true};
const loginContext = createContext(login);




export default function LayoutComponent(args) {

  const routes = useRoutes(route);
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);

  return(
    <div>
      
      <Navbar {...args}>
        <NavbarBrand href="/">낼롱</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            
          <NavItem>
              <NavLink href="/condition">Condition</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/book">Book</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/event">Event</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/effect">Effect</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/boardlist">Board</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/boardinsert">BoardInsert</NavLink>
            </NavItem>


            <NavItem>
              <NavLink href="/customer">CustomerComponent</NavLink>
            </NavItem>


            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                낼롱 컬렉션
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>민철이 낼롱</DropdownItem>
                <DropdownItem>인준넴 낼롱</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>모코코 핥짝</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>석기시대 쩝쩝</NavbarText>
        </Collapse>
      </Navbar>
      <Container>
      {routes}
      </Container>
    </div>
  );
}

/*
reactstrap ?
: > npm install reactstrap 설치 후 사용!
https://reactstrap.github.io/  (사이트 참고!)

+) 부트스트랩 -> "bootstrap": "^5.3.3" 도 설치!
import 'bootstrap/dist/css/bootstrap.min.css'; (css 적용 가능 : index.js 에 넣어둠!)

라우터 (route) 폴더 내 라우터 만들기!(useRoutes)
import Routes from "./route/index";
*/


/*
            <NavItem>
              <NavLink href="/condition">Condition</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/book">Book</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/event">Event</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/effect">Effect</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/effect">Effect</NavLink>
            </NavItem>
*/

