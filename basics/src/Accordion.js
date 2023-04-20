// concepts: 
// Toggling state with useState
// Conditionals (&&)
// Passing data to components via props
// Displaying multiple components with .map()

import React, { useState } from 'react'
import "./Accordion.css"


const questions = [
    { title: "How are you?", ans: "I'm good" },
    { title: "How are you doing?", ans: "Well" }
]

function Question({ title, ans }) {
    const [isOpen, setOpen] = useState(false);
    return(
    <section className='question'>
        <div>{title}</div>
        <div className='symbol' onClick={() => setOpen(!isOpen)}>{
            isOpen ? "-" : "+"
        }</div>

        {isOpen && <div className='answer'>{ans}</div>}
    </section>
    )
}
export const Accordion = () => {
    return (
        <div className='container'>
            <div className='sub-container'>
                <h1>Accordion</h1>
                {questions.map(q => 
                    <Question title={q.title} ans={q.ans} />
                )}
            </div>
        </div>

    )
}
