import React from "react";
import tw from "tailwind-styled-components";

const signup = () => {
  return (
    <Wrapper>
      <Header>
        <Menu>
          <Logo>Uber</Logo>
          <List>Company</List>
          <List>Safety</List>
          <List>Help</List>
          <List>COVID-19 resources</List>
          <List>EN</List>
          <List>Products</List>
          <RList>Login</RList>
          <RList>Sign up</RList>
        </Menu>
      </Header>
    </Wrapper>
  );
};

export default signup;

const Wrapper = tw.div`
    bg-white h-screen
`;
const Header = tw.div`
 flex bg-black text-white flex-row h-16 text-center
`;
const Menu = tw.div`
    flex justify-between text-center px-5 pt-4 gap-[0.25px] ml-10
`;
const Logo = tw.p`
    text-2xl flex ml-4 mr-[20px] text-center
`;
const RightMenu = tw.ul`
    item-center flex ml-10 justify-between
`;

const LeftMenu = tw.ul`
    flex text-center 
`;

const List = tw.li`
    flex text-center no-wrap mr-5 ml-10
`;

const RList = tw.li`
    flex no-wrap mr-50
`;
