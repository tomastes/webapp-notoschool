import React from 'react'
import {  useSelector } from 'react-redux'
import { selectPlans,  } from '../../../features/plansSlice'
import styled from 'styled-components';
import Plan from './Plan'
const Plans = () => {
    const plans = useSelector(selectPlans)
  

    return (
        <Section>
           {
               plans?.map((plan)=>(
                   console.log(plan),
                   <div key={plan.id}>
                       <Plan id={plan.id} name={plan.name} price={plan.productPrice} />
                   </div>
               ))
           }  
        </Section>
    )
}

export default Plans 
 const Section = styled.section`
    display: flex;
    flex-wrap: wrap;
   justify-content: space-evenly;
   align-items: flex-start;
   margin-top: 1rem;
 `;
