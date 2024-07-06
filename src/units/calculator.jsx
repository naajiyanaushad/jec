import { useState } from "react";
import axios from 'axios';

function Calculator() {
    let [num1, setNum1] = useState(0);
    let [num2, setNum2] = useState(0);
    let [operator, setOperator] = useState('');
    let [result, setResult] = useState(0);

    // function calculate input values
    function calculate(input) {
        if(num1 === 0) {
            setNum1(input);
        } else {
            setNum2(input);
        }
    }

    //clear

    function clear() {
        setResult(0);
        setOperator('');
        setNum1(0)
        setNum1(0)
    }

    // operator chhoseer function

    function ChooseOperator(operend) {
        setOperator(operend);
    }
    async function handleResult()  {
        const response = await axios.post('https://project-baf7.onrender.com/calculate', {num1,num2, operator});
        setResult(response.data)
    }

    // result function

    function handleResult() {
        if( operator === 'add') {
            setResult(num1+num2)
        } else if(operator === 'sub') {
            setResult(num1-num2)
        }else if(operator === 'mul') {
            setResult(num1*num2)
        }else if(operator === 'div') {
            setResult(num1/num2)
        }
    }


    return(
<div style={{display: 'flex ' ,justifyContent: 'center',alignItems: 'center',height: '100vh'}}>
<div style={{border: '5px solid silver',width: '400px',display:' flex',flexDirection: 'column',justifyContent: 'center',backgroundColor: 'palevioletred',borderRadius: '7px'}}>
<div style={{display:'flex', justifyContent:'center', alignItems: 'center', flexDirection: 'column', gap: '10px'}}>
    <h1 style={{fontStyle: 'oblique',fontSize:'xx-large',color:'white',height: '50px'}}>Calculator</h1>
   
    <div style={{display:'flex', justifyContent:'center', alignItems: 'center', gap: '8px'}}>
        <button style={{border: '2px solid gray',borderRadius: '10px',padding:'10px',fontWeight:'bold',width:'40px'}} onClick={() => calculate(7)}>7</button>
        <button style={{border: '2px solid gray',borderRadius: '10px',padding:'10px',fontWeight:'bold',width:'40px'}} onClick={() => calculate(8)}>8</button>
        <button style={{border: '2px solid gray',borderRadius: '10px',padding:'10px',fontWeight:'bold',width:'40px'}} onClick={() => calculate(9)}>9</button>
        <button style={{padding:'10px', background: 'blue', border: '1px solid black', borderRadius: '10px', color:'white', fontWeight:'bolder',width:'40px'}} onClick={() => ChooseOperator('add')}> + </button>
    </div>

    <div style={{display:'flex', justifyContent:'center', alignItems: 'center', gap: '8px'}}>
        <button style={{border: '2px solid gray',borderRadius: '10px',padding:'10px',fontWeight:'bold',width:'40px'}} onClick={() => calculate(4)}>4</button>
        <button style={{border: '2px solid gray',borderRadius: '10px',padding:'10px',fontWeight:'bold',width:'40px'}} onClick={() => calculate(5)}>5</button>
        <button style={{border: '2px solid gray',borderRadius: '10px',padding:'10px',fontWeight:'bold',width:'40px'}} onClick={() => calculate(6)}>6</button>
        <button style={{padding:'10px', background: 'blue', border: '1px solid black', borderRadius: '10px', color:'white', fontWeight:'bolder',width:'40px'}} onClick={() => ChooseOperator('sub')}> - </button>
    </div>

    <div style={{display:'flex', justifyContent:'center', alignItems: 'center', gap: '8px'}}>
        <button style={{border: '2px solid gray',borderRadius: '10px',padding:'10px',fontWeight:'bold',width:'40px'}} onClick={() => calculate(1)}>1</button>
        <button style={{border: '2px solid gray',borderRadius: '10px',padding:'10px',fontWeight:'bold',width:'40px'}} onClick={() => calculate(2)}>2</button>
        <button style={{border: '2px solid gray',borderRadius: '10px',padding:'10px',fontWeight:'bold',width:'40px'}} onClick={() => calculate(3)}>3</button>
        <button style={{padding:'10px', background: 'blue', border: '1px solid black', borderRadius: '10px', color:'white', fontWeight:'bolder',width:'40px'}} onClick={() => ChooseOperator('mul')}> * </button>
    </div>
    
    <div style={{display:'flex', justifyContent:'center', alignItems: 'center', gap: '8px'}}>
    <button style={{border: '2px solid gray',borderRadius: '10px',padding:'10px',fontWeight:'bold',width:'33px'}} onClick={() => calculate(0)}>0</button>
    <button style={{padding:'10px', background: 'blue', border: '1px solid black', borderRadius: '10px', color:'white', fontWeight:'bolder',width:'64px'}} onClick={handleResult}> = </button>
    <button style={{padding:'10px', background: 'blue', border: '1px solid black', borderRadius: '10px', color:'white', fontWeight:'bolder',width:'40px'}} onClick={() => ChooseOperator('div')}> / </button>
    </div>

   
 

    <button style={{padding:'10px', background: 'blue', border: '1px solid black', borderRadius: '10px', color:'white', fontWeight:'bolder',width:'100px'}} onClick={clear}>AC</button>

   
    {result}
</div>
</div>
</div>

    )
}

export default Calculator