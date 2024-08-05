import React,{useState} from 'react'
import {database} from "../database/data";


const Quize = () => {
    const questionArray = database.category.javascript.data;

    const [selectedAnswers,setSelectedAnswers] = useState({});
    const [showResults,setResults] = useState({});

    const handleAnswersChange = (questionIndex,optionKey)=>{
        setSelectedAnswers(
            {
                ...selectedAnswers,
                [questionIndex]:optionKey
            },
        )
        setResults(
            {
            ...showResults,
            [questionIndex]:true

    })
    }
    return (
        <div>
            <h1>javascript</h1>
            {questionArray.map((arrayItemObj,index)=>(
                <div key={index}> 
                    <h2>Q:{index+1} {arrayItemObj.question}</h2>
                    <ul>
                        {Object.keys(arrayItemObj.options).map((optionsKeys)=>(
                            <li key={optionsKeys}>
                               {optionsKeys}: {arrayItemObj.options[optionsKeys]}
                               <input name={index} type="radio" onChange={()=>handleAnswersChange(index,optionsKeys)}/>
                            </li>
                        ))}
                    </ul>
                    {showResults[index] && (
                        <p style={{marginLeft:"20px"}}>
                        {selectedAnswers[index] === arrayItemObj.correctAnswer
                            ? <span  style={{color:"green"}}>Correct Answer</span>
                            : <span style={{color:"red"}}>invalid answer1 correct answer is: ${arrayItemObj.correctAnswer}</span>
                        }
                        </p>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Quize;