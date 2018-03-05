import React, { Component } from "react";
import styled from "react-emotion";
import MenuIcon from "../menu";
import Logo from "../logo";

const dark = "#171718";
const light = "#FFF";

const Nav = styled.div({
  display: "flex",
  flex: "1 0 auto",
  alignItems: "center",
  padding: "15px",
  color: light,
  background: dark,
  position: "relative",
  "@media (max-width: 768px)": {
    flexDirection: "column",
    alignItems: "center",
  },
});

const LeftNav = styled.div({
  display: "flex",
  flex: "1",
  alignItems: "center",
  justifyContent: "flex-end",
  "@media (max-width: 768px)": {
    display: "none",
  },
});

const Title = styled.div({
  display: "flex",
  alignSelf: "center",
  justifyContent: "center",
  position: "relative",
});

const TitleBox = styled.a({
  padding: "3px 45px",
  cursor: "pointer",
  textDecoration: "none",
  color: "#FFF",
  borderBottom: "0",
  ":hover": {
    borderBottom: "0",
  },
});

const RightNav = styled.div({
  display: "flex",
  flex: "1",
  justifyContent: "flex-end",
  alignItems: "center",
  "@media (max-width: 768px)": {
    display: "none",
  },
});

const NavLink = styled.a({
  margin: "0 15px",
  cursor: "pointer",
  color: light,
  textDecoration: "none",
  fontWeight: "400",
  ":hover": {
    textDecoration: "underline",
  },
  "@media (max-width: 768px)": {
    margin: "15px 0",
  },
});

const MenuItem = styled.div({
  display: "none",
  position: "absolute",
  left: "15px",
  top: "15px",
  "@media (max-width: 768px)": {
    display: "inline-block",
  },
});

const DropdownMenu = styled.div({
  display: "none",
  "@media (max-width: 768px)": {
    paddingTop: "15px",
    display: "flex",
    flexDirection: "column",
    flex: "1 0 auto",
    alignItems: "center",
  },
});

const SmallLogo = styled(Logo)({
  width: "60px",
  height: "60px",
});

const Triangle = styled.div({
  width: "0",
  height: "0",
  borderStyle: "solid",
  borderWidth: "12px 100px 0 100px",
  borderColor: "#171718 transparent transparent transparent",
  position: "absolute",
  top: "100%",
  left: "50%",
  marginLeft: "-100px",
});

const HeaderLink = ({ href, children }) =>
  <NavLink href={href}>
    {children}
  </NavLink>;

class TopNav extends Component {
  state = {
    menuOpen: false,
  };
  toggleMenu = () => {
    this.setState(state => ({
      menuOpen: !state.menuOpen,
    }));
  };
  render() {
    const { user } = this.props;
    return (
      <Nav>
        <MenuItem>
          <MenuIcon onClick={this.toggleMenu} />
        </MenuItem>
        <LeftNav>
          <HeaderLink href="https://codedaily.io/tutorials">Tutorials</HeaderLink>
          <HeaderLink href="https://codedaily.io/screencasts">Screencasts</HeaderLink>
          <HeaderLink href="https://codedaily.io/courses">Courses</HeaderLink>
        </LeftNav>
        <Title>
          <TitleBox href="https://codedaily.io/">
            <SmallLogo />
          </TitleBox>
        </Title>
        <RightNav>
          {user && <HeaderLink href="https://codedaily.io/profile/courses">My Courses</HeaderLink>}
          {user && user.admin && <HeaderLink href="/admin">Admin</HeaderLink>}
          {user && <HeaderLink href="https://codedaily.io/profile">Profile</HeaderLink>}
          {!user && <HeaderLink href="https://codedaily.io/login">Login</HeaderLink>}
          {!user && <HeaderLink href="https://codedaily.io/register">Sign Up</HeaderLink>}
        </RightNav>
        {this.state.menuOpen &&
          <DropdownMenu>
            <HeaderLink href="https://codedaily.io/tutorials">Tutorials</HeaderLink>
            <HeaderLink href="https://codedaily.io/screencasts">Screencasts</HeaderLink>
            <HeaderLink href="https://codedaily.io/courses">Courses</HeaderLink>
            {user &&
              <HeaderLink href="https://codedaily.io/profile/courses">My Courses</HeaderLink>}
            {user && <HeaderLink href="https://codedaily.io/profile">Profile</HeaderLink>}
            {!user && <HeaderLink href="https://codedaily.io/login">Login</HeaderLink>}
            {!user && <HeaderLink href="https://codedaily.io/register">Sign Up</HeaderLink>}
          </DropdownMenu>}
        <Triangle />
      </Nav>
    );
  }
}

export default TopNav;
