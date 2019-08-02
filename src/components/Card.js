import React from "react";
import styled from "styled-components";

const MainDiv = styled.div`
  padding: 20px;
  background-color: black;
  color: white;
`;

const WrapperDiv = styled.div`
  display: flex;
`;

const DescriptionText = styled.p`
  width: 50%;
  font-size: 1.5em;
  text-align: justify;
  padding: 10px 10px 10px 10px;
  
`;

const Image = styled.img`
  width: 50%;
`;

const Title = styled.h3`
  font-size: 3em;
`;

export default function Card(props) {
  if (!props.img) {
    return <h3>Loading.....</h3>
  }

  //console.log(props)
  return (
    <MainDiv >
      <div>
        <Title>{props.copyright}</Title>
        <Title>{props.title}</Title>
        <Title>{props.date}</Title>
      </div>
      <WrapperDiv >
        <Image src={props.img} alt=""></Image>
        <DescriptionText >{props.explanation}</DescriptionText>
      </WrapperDiv >
    </MainDiv >
   
  )

}

//this comp