import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const Navigation = () => {
    return (
        <Nav>
            <NavItem to="/">Home</NavItem>
            <NavItem to="/somewhere">About</NavItem>
            <NavItem to="s">Shop</NavItem>
        </Nav>
    )
}

export default Navigation

const Nav = styled.nav`
display: flex;
justify-content: space-between;
background-color: whitesmoke;
width: 100%;
`;
const NavItem = styled(NavLink)`
    text-transform: uppercase;
    //margin-left: 9rem;
    letter-spacing: 1px;
    

`;