import React,{useState,useEffect} from 'react'


const SingleColor = ({rgb, weight, hexColor}) => {

    
  const [alert, setAlert] = useState(false)
  const bcg = rgb.join(',')
  const hexValue = `#${hexColor}`


  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
    }, 1000)
    return () => clearTimeout(timeout)
  }, [alert])


    return (
        <div className="oneColor">
             <article
      className="singleColor"
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true)
        navigator.clipboard.writeText(hexValue)
      }}
    >
      <p className='percent-value'>{weight}%</p>
      {alert ? <p className='alert'>copied to clipboard</p>: <p className='color-value'>{hexValue}</p>}
    </article>
        </div>
    )
}

export default SingleColor
