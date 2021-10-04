import React from 'react'
import styled from 'styled-components'
import Logo from '../../Assets/logo1.png'
import { useDispatch, useSelector } from "react-redux";
import { Switch } from '@material-ui/core'
import { NightsStayRounded, WbSunnyRounded,  } from '@material-ui/icons'
import { NavLink } from 'react-router-dom'
import { selectAppState, setTheme } from '../../features/appSlice'
const Header = () => {
const dispatch = useDispatch()
const mode = useSelector(selectAppState)
//setmode
    const setMode = e => {
        e.target.checked?localStorage.setItem("mode","dark"):localStorage.setItem("mode","white")
       dispatch( setTheme(localStorage.getItem("mode")))
    }
    return (
        <Container>
            <Img src={Logo} alt="logo" />
            <Div1>
            <NavItem to="/">Home</NavItem>
            <NavItem to="/somewhere">About</NavItem>
            <NavItem to="s">Shop</NavItem>
            </Div1>
            <Div2>
            <StyledSwitch onChange={e=>setMode(e)}
                checked={mode ==="dark"?true:false}
                color="primary"
                icon={<Span>☀️</Span>}
                checkedIcon={<Span>🌙</Span>}
            />
            </Div2>
         {/* // <HeaderSvg /> */}
        </Container>
    )
}

export default Header;

const Container = styled.header`
display: flex;
justify-content: space-around;
align-items: center;
background-color: ${props=>props.theme.colors.background1};
padding: 1rem 0;
flex-wrap: wrap;
`;
const Img = styled.img`
max-height: 5rem;
`;

const Div1 = styled.div`
display: flex;
align-items: flex-start;
justify-content: space-evenly;
flex: .9;

@media ${(props)=>props.theme.breakpoints.sm}{
    flex-direction: column;

}
`;
const Div2 = styled.div``;
const StyledSwitch = styled(Switch)`
transform: scale(1.7);
color: whitesmoke;

`;
const NavItem = styled(NavLink)`
    text-transform: uppercase;
    //margin-left: 9rem;
    letter-spacing: 1px;
    color:${props=>props.dark?"whitesmoke":"gray"}
    ;
    font-weight:500;
    

`;
const Span = styled.span`
font-size: 12px;
margin-top: 3px;
padding-left: 4px;
`