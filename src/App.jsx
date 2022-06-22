import './App.css';
import React, {useState} from "react"


function App() {
  
   const [num1 , setNum1]= useState("");

   const [num2, setNum2]= useState("");

   const [result, setResult]=useState(0);

   const [operando, setOperando]=useState("");

   //llamamos el almacenamiento

   const initial = JSON.parse(localStorage.getItem("hi")) ||[];
      const[historial,sethistorial]=useState(initial)

      



   const limpiar=()=>{

    const valores={n1:num1, n2:num2, ope:operando, re:result }
    const nuevoarray=[...historial,valores]
    sethistorial([...nuevoarray])
    localStorage.setItem("hi", JSON.stringify(nuevoarray));



    setNum1("");
    setNum2("");
    setOperando("");
    setResult(0);
  }


   function oprimir (val){
     if(operando ===""){
       setNum1(num1 + val);  
     }else{
        setNum2(num2 + val);
     } 
   }

   function oprimirOperando (val ){
     setOperando(val);

   }


  

   function getResult (){
    switch(operando){
      case "+":
        setResult(Number(num1) + Number(num2));
        setOperando("+");
        break;
        case "-":
          setResult(Number(num1)- Number(num2));
          setOperando("-");
          break;

          case "*":
           setResult(Number(num1) * Number(num2));
           setOperando("*");
           break; 

      case "/":
        setResult(Number(num1) / Number(num2));
        setOperando("/");
        break;
          default:
        break;
    }
  }

  return (

    <div className='Container'>
      <div className='row'>
        <div className='col'>
    <div className="App">
      <h1 className="tittle">  CALCULADORA </h1>
      <div className="calculador" >
        <div className="output">          
          <div className="numero-pasado">{ operando ? num1 + operando : ""}</div>
            <div className="numero-nuevo">{ result ? result : (! operando ? num1 : num2 )} </div>  

                        
          </div>
      <button   onClick={limpiar} className="doble-espacio">AC</button>
      <button  onClick={() => {}}>DEL</button>
      <button  onClick={() => {oprimirOperando("/")}}>/</button>

      <button  onClick={() => {oprimir (7)}}>7</button>
      <button  onClick={ () => {oprimir(8)}}>8</button>
      <button  onClick={() => {oprimir(9)}}>9</button>
      
      <button  onClick={() => {oprimirOperando("*")}}>*</button>

      <button  onClick={() => {oprimir(4)}}>4</button>
      <button  onClick={() => {oprimir(5)}}>5</button>
      <button  onClick={() => {oprimir(6)}}>6</button>

      <button  onClick={() => {oprimirOperando("+")}}>+</button>

      <button  onClick={() =>  {oprimir(1)}}>1</button>
      <button  onClick={() =>  {oprimir(2)}}>2</button>
      <button  onClick={() =>  {oprimir(3)}}>3</button>

      <button  onClick={() => {oprimirOperando("-")}}>-</button>
      <button  onClick={() => {oprimir(".")}}>.</button>
      

      <button  onClick={() =>  {oprimir(0)}}>0</button>
      <button  onClick={getResult}  className="doble-espacio">=</button>
      </div>
   </div>
        </div>
        <div className='col'>
          <h2>Historial de operacionespm</h2>
          <ol>
            {
              historial.length===0 &&
              "No hay datos disponibles"
            }
            {
              historial.length !==0 &&(
                <div className='tab'>
                <ul>
                  {historial.map((item, index)=>{
                    return(
                      <li key={index}>
                        {item.n1}{item.ope}{item.n2}={item.re}
                      </li>
                    )
                  })}
                </ul>
                </div>
              )
            }
            
          </ol>
        </div>
      </div>
    </div>
    
    
  );
  }


export default App;
 