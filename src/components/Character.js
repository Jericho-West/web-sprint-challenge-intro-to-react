// Write your Character component here
import App from "../App";

function Char(slice0) {
    let slice = slice0
    console.log("A")
    console.log(slice.slice0)
    console.log("a")
    let a = <div></div>;
    let b = []
    
    slice.slice0.forEach(element => {
        a = <div>{element.name}</div>
        b.push(a)
        });

        return b
}

export default Char