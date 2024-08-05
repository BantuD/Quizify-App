import React,{useState} from 'react'
import {database} from "../database/data";


const Quize = () => {
    const questionArray = database.category.javascript.data;

    const [selectedAnswers,setSelectedAnswers] = useState({});
    const [showResults,setResults] = useState(false);

    const handleAnswersChange = (questionIndex,optionKey)=>{
        setSelectedAnswers(
            {
                ...selectedAnswers,
                [questionIndex]:optionKey
            }
        )
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
                    {showResults && (
                        <p>
                        {selectedAnswers[index] === arrayItemObj.correctAnswer
                            ? "Correct Answer"
                            : `invalid answer1 correct answer is: ${arrayItemObj.correctAnswer}`
                        }
                        </p>
                    )}
                </div>
            ))}
            <button onClick={()=>{setResults(true)}}>Show Answers</button>
        </div>
    );
};

export default Quize;