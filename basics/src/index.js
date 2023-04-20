import React from 'react'
import  ReactDOM  from 'react-dom/client'
import { Slider } from './Slider/Slider'
import { Accordion } from './Accordion'

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <div>
            {/* call components  */}
         <Slider/>
        </div>
    </React.StrictMode>

)
