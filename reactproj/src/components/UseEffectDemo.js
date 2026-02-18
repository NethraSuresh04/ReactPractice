import { useEffect, useState } from "react";

function UseEffectDemo(){
    const[count, setCount] = useState(0);
    useEffect(()=> {
        setTimeout(()=> {
            setCount((count)=>count+1);
        },1000); 
        // 1000 milliseconds
    },[]);
    // empty array causes it only to run once 
    return(
        <h1>The page has rendered {count} times! </h1>
    );
}
export default UseEffectDemo