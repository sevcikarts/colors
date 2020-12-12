
import React,{ useEffect,useState } from 'react'
import Values from 'values.js'
import rgbToHex from "./rgbToHex"


const RangeColor = ({setList}) => {
    const [colors, setColors] = useState({red:200,
    green:100,blue:35})

 
   

   useEffect(() => {
    const color = rgbToHex(colors.red,colors.green,colors.blue)
   setList(new Values(color).all(10))
   }, [colors.red,colors.green,colors.blue])

 const handleChange = (e) =>{
        const value = e.target.value;
        setColors({
          ...colors,
          [e.target.name]: value
        });
      }

    return (
        <div className="rangeColor">
            <div className="colorbars">
            <label htmlFor="customRange">RED<br></br> <small>{colors.red}</small></label>
            <input type="range" name="red" className="red" min="0" max="255"
            value={colors.red}
            onChange={handleChange}
            ></input></div>
            <div className="colorbars">
            <label htmlFor="customRange" >GREEN<br></br><small>{colors.green}</small></label>
            <input type="range"  name="green" className="green" min="0" max="255"
            value={colors.green}
            onChange={handleChange}
            ></input></div>
            <div className="colorbars">
            <label htmlFor="customRange" >BLUE <br></br><small>{colors.blue}</small></label>
            <input type="range" className="blue" name="blue"  min="0" max="255"
             value={colors.blue}
            onChange={handleChange}
            ></input></div>
       </div>
    )
}

export default RangeColor
