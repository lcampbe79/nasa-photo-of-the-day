import React from "react";
import { MainDiv, WrapperDiv, DescriptionText, Image, Title} from "../Styles/customStyles.js";

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