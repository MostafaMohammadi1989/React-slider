import axios from "axios";
import { useState, useEffact } from "react";
import styled from "styled-components";

export default function APIIMG () {

    const [image, setImage] = useState([])
    const [index, setIndex] = useState(0)

    useEffact ( () => {
        axios.get('https://dog.ceo/api/breeds/image/random/10').then( res => {
            console.log(res);
            setImage(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    })

    return (
        <Container>
            <h1>API IMG</h1>

        </Container>
    )

}



const Container = styled.div`
    
`