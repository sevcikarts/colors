
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
            <label htmlFor="customRange" className="form-label">RED<br></br> <small>{colors.red}</small></label>
            <input type="range" name="red"className="form-range"   min="0" max="255"
            value={colors.red}
            onChange={handleChange}
            ></input>
            <label htmlFor="customRange" className="form-label">GREEN<br></br><small>{colors.green}</small></label>
            <input type="range"  name="green" className="form-range"   min="0" max="255"
            value={colors.green}
            onChange={handleChange}
            ></input>
            <label htmlFor="customRange" className="form-label">BLUE <br></br><small>{colors.blue}</small></label>
            <input type="range"  name="blue" className="form-range"  min="0" max="255"
             value={colors.blue}
            onChange={handleChange}
            ></input>
       </div>
    )
}

export default RangeColor
