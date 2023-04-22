// useEffect, conditional chaining, Http request using fetch
import React,{useEffect, useState} from 'react'
import "./QuoteGenerator.css"

export const QuoteGenerator = () =>{
    const [quotes, setQuotes] = useState([])
    const [quote, setQuote] = useState({})

    function newQuote(){
        const index = Math.floor(Math.random()*quotes.length)
        setQuote(quotes[index])
    }

    useEffect(()=>{
        fetch("https://type.fit/api/quotes")
        .then((res)=> res.json())
        .then((json)=>{
            setQuotes(json)
            setQuote(json[0])
        })
    },[]
    )
    return(
        <div className='main'>
            <div className= 'item'>
                <p className='quote'>
                    <span>"</span>{quote?.text}</p>
                <p className='author'> -{quote?.author}</p>
            </div>
            <button className='button-submit' onClick={newQuote}>New Quote</button>

        </div>

    )
}