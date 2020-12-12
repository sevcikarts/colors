import React,{useState} from 'react'
import SingleColor from './SingleColor'
import RangeColor from './RangeColor'


import Values from 'values.js'

const ColorBox = () => {

    const [list, setList] = useState(new Values('#191919').all(10))
   
    return (
        <div className='colors'>
            <section className='colorsbox'>
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
      <RangeColor setList={setList}/>
        </div>
    )
}
export default ColorBox
