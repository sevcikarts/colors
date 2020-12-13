import React,{useState} from 'react'
import SingleColor from './SingleColor'
import RangeColor from './RangeColor'


import Values from 'values.js'

const ColorBox = () => {

    const [list, setList] = useState(new Values('#191919').all(30))
    const [secList, setSecList] = useState(new Values('#191919').all(30))
    const [thirdList, setThirdList] = useState(new Values('#191919').all(30))
   

    
    return (
        <div className='colors'>
          <p>PRIMARY COLOR</p>
            <section className='colorsbox primary'>
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          )
        })}
      </section>
      <p className="sec">SECONDARY COLORS</p>
      <section className='colorsbox'>
        {secList.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          )
        })}
      </section>
      <section className='colorsbox'>
        {thirdList.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          )
        })}
      </section>
      
       
      <RangeColor setList={setList} setSecList={setSecList} setThirdList={setThirdList}/>
        </div>
    )
}
export default ColorBox
