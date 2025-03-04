import { useState } from 'react'


function App() {
  
  const [height, setHeight] = useState("")
  const [weight, setWeight] = useState("")
  const [bmi, setBmi] = useState(null)
  const [status, setStatus] = useState("")
  const [errormsg, setErrorMsg] = useState("")
  const validHeightValue = /^\d+$/.test(height) 
  const validWeightValue = /^\d+$/.test(weight)

  const clearScreen = () => {
    setHeight("")
    setWeight("")
    setBmi(null)
    setStatus("")
    setErrorMsg("")
  }

  const calculateBMI = () => {
    if (validHeightValue && validWeightValue) {
      const heightInMeters = height / 100
      const bmiValue = weight / (heightInMeters * heightInMeters)
      setBmi(bmiValue.toFixed(2))
      if (bmiValue < 18.5 ){
        setStatus("Under Weight")
      }
      else if(bmiValue >= 18.5 && bmiValue < 24.9){
        setStatus("Normal Weight")
      }
      else if(bmiValue >= 25 && bmiValue < 29.9){
        setStatus("Over Weight")
      }
      else{
        setStatus("Obese")
      }
      setErrorMsg("")
    }
    else{
      setBmi(null)
      setStatus("")
      setErrorMsg("Please enter a valid height and weight value")
    }
  };
  return (
    <>
      <div className='bmi-box'>
        <div className="bmi-img">
          <img src="./public/bmi.png" alt="bmi" />
        </div>
        <div className="bmi-calc">
          <h1>BMI CALCULATOR</h1>
          <p id="error">{errormsg}</p>
          <div className="bmi-inputs">
            <div className='components'>
              <label htmlFor="height">Height in (cm):</label>
              <input type="text" id='height' value={height} onChange= {(e) => setHeight(e.target.value)} />
            </div>
            <div className='components'>
              <label htmlFor="height">Weight in (kg):</label>
              <input type="text" id='weight' value={weight} onChange={ (e) => setWeight(e.target.value)}/>
            </div>
            <button id="calc" onClick={calculateBMI}>CALCULATE</button>
            <button id="clear" onClick={clearScreen}>CLEAR</button>

          </div>
          <div className="msg">
            <p>Your BMI is : {bmi}</p>
            <p>Status: {status}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
