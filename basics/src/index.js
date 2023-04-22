import React from 'react'
import  ReactDOM  from 'react-dom/client'
import { Slider } from './Slider/Slider'
import { Accordion } from './Accordion'
import { QuoteGenerator } from './QuoteGenerator/QuoteGenerator'

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <div>
            {/* call components  */}
         {/* <Accordion/> */}
         <QuoteGenerator/>
        </div>
    </React.StrictMode>

)
