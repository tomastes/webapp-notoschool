import styled from "styled-components"
import { ButtonBack, ButtonFront } from "../../../styles/GlobalComponents";

const Plan = ({name,id,price}) => {
    return (
        
        <Container>
          <H2> {name} </H2>
            
                {name === "Premium Plan" &&<> 
                
                <P>✅ access to our discord channel </P>
                <P>✅ 3 x in a week live call's with the community  </P>
                <P>✅ 2 times private call with me on request.  </P>
                <P>✅ full access to our e-learning platform  </P>
                </>}
                {name === "Basic Plan" &&<>
                 <P>basic Plan</P>
                <P>✅ access to our discord channel </P>
                <P>✅ 3 x in a week live call's with the community  </P>
                <P>❌ 2 times private call with me on request.  </P>
                <P>👉🏾 partail access to our e-learning platform  </P>
                 </>}
                {name === "Standard Plan" &&<>
                 <P>Standard Plan</P>
                 <P>✅ access to our discord channel </P>
                <P>✅ 3 x in a week live call's with the community  </P>
                <P>❌ 2 times private call with me on request.  </P>
                <P>✅ full access to our e-learning platform  </P>
                 </>}
            <P>{price/100} <Span>/month</Span></P>
            <Button>Subscribe</Button>
         
        </Container>
    )
}

export default Plan

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${Props=>Props.theme.colors.planBg};
    width: 25rem;
   // background-color: forestgreen;
    background-color:$${props=>props.theme.colors.planBg};
    min-height: 45rem;
    min-width: 30rem;
  //  padding: 1rem;
    border-radius: 4px;
    margin: 1rem;
    box-shadow: ${props=>props.theme.boxShadows.boxShadow1};
    justify-content: space-between;
    @media ${props=>props.theme.breakpoints.sm}{
        width:100%;
    }
`;
const Button = styled.button`
    padding:1rem 2rem;
    margin: 15px 15px 5px 15px;
    background: none;
    border: none;
    outline:none;
    cursor: pointer;
    border-radius: 40px;
    text-transform: uppercase;
    padding:2rem 1rem ;
    background-color: ${props=>props.theme.colors.btnSubscribeBg};
    transition: .4s ease-out all;
    letter-spacing: 1px;
    &:hover{
        transform: scale(1.05);
        transition: .4s ease-out all;
    }
    
// `;
const Span = styled.span``;
const P = styled.p`
padding: 1rem;
letter-spacing: 1px;
text-transform: capitalize;
`;
const H2 = styled.h2`
    margin: 0 0 1rem 0;
    background-color: ${props=>props.theme.colors.titleBg};
    width: 100%;
    padding: 1rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    word-spacing: 5px;
    font-family: ${props=>props.theme.fonts.title};
    color: gray;  
`;