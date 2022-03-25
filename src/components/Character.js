// Write your Character component here
import styled from "styled-components"

const Styling = styled.div`
    color: bisque;
    padding: 2%;
    background-color: #443e3e;
    border-width: 10%;
    border-color: burlywood;
    border-style: solid;
    margin: 10px`

function Char(slice0) {
    let slice = slice0
    console.log("A")
    console.log(slice.slice0)
    console.log("a")
    let a = <div></div>;
    let b = []
    
    slice.slice0.forEach(element => {
        a = <Styling class = "name">{element.name}</Styling>
        b.push(a)
        });
        return b
}

export default Char