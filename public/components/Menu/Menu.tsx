'use client'

import styled from "styled-components";



export function Menu() {

  const menuItems = ["About Me", "My Projects","Contacts","GitHub"];
 
    const MenuList = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: #d1cacc;
  display: flex;
  flex-direction: row;
  justify-content: space-around; 
  background-color: black;
  height: 1cm;
  align-items: center;
`;


  return (
    <MenuList>
    {menuItems.map(item => <div>{item}</div>)}
    </MenuList>
  );
}