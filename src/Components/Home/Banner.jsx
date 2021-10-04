import styled from 'styled-components'
import React from 'react'
import { ReactComponent as SvgHeader } from '../../Assets/headerIllustration.svg'
const Banner = () => {
    return (
        <Container>
            <Div1>
                <H2>welcome to  notoSchool</H2>
                <P>we are pretty confident to tell you on no diploma era.</P>
            </Div1>
            <SvgHeader style={{width:"60rem"}} />
        </Container>
    )
}

export default Banner


const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  //  box-shadow: ${props=>props.theme.boxShadows.boxShadow1};
    @media ${props=>props.theme.breakpoints.sm}{
        position:relative;
    }
`;
const Div1 = styled.div`
    display: flex;
    flex-direction: column;  
    padding:3rem;
    margin: 2rem;
    box-shadow: ${props=>props.theme.boxShadows.boxShadow1};
`;
const H2 = styled.h2`
    text-transform: capitalize;
    text-align: center;
`
const P = styled.p`
    margin-top: 1rem;
    text-align: center;
`;