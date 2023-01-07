import React from "react";
// import API from "./API";
import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";

export default function App() {

  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect( () => {
    axios.get('https://dog.ceo/api/breeds/image/random/10').then( (res) => {
      // console.log(data);
      setImages(res.data.message)
    });
  
    // .catch( err => {
    //   console.log(err)
    // })

  }, [])

  // console.log('Images log',images);


  return (
    <MainContainer >
      <Container> 
        
          <MainImage src={images[index]} />
       
      </Container>
    </MainContainer>
  );
}


const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
`;
const MainImage = styled.img`
  width: 500px;
`;
const Nav = styled.div`
  color: black;
  font-size: 30px;
  margin: 30px;
  cursor: pointer;
`;
const Dots = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;
const Dot = styled.div`
  width: 20px;
  height: 20px;
  margin: 5px;
  border-radius: 50%;
  background-color: darkgray;
  cursor: pointer;
`;

