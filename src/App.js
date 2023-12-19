import React, { useState } from 'react';
import './App.css'
import { Button, Col, Row } from 'react-bootstrap';
function App() {
  const [loanAmount, setLoanAmount] = useState('')
  const [interest,SetImterest] = useState('')
  const [months,SetMonths] = useState('')
  const[totalAmount,setTotalAmount] = useState(null)
  const [emi, setEmi] = useState(null);
  

  const calculateEMI = () => {
    if (loanAmount !== '' && interest !== '' && months !== '') {
      let amount = loanAmount / 100
      let rate = (interest / 12)
      let time = (months);

      let result = eval((amount*rate*time) + parseInt(loanAmount))
      let emi = Math.round(result / months)
            console.log(rate);
            console.log(emi);
  
      let totalAmountvalue = emi * time;
  
      setEmi(emi);
      setTotalAmount(totalAmountvalue);
    } else {
      alert("Please enter all the details");
    }
  };
  

  

  

  const resetInputs = () => {
    setLoanAmount(' ')
    SetImterest(' ')
    SetMonths(' ')
    setEmi(null)
    setTotalAmount(null)
  };


  return (
    <div style={{height:'100vh'}} className='container-fluid d-flex justify-content-center align-items-center w-100'>
      <div  style={{width:'650px'}}  className=' bg-secondary rounded text-white '>

        <Row><h1 className='text-center text-white p-5 mt-4'>EMI - Calculator</h1></Row>
        <Row className='justify-content-evenly text-center'>
          <Col md={4} sm={12}> <h4>loan amount</h4> <input               style={{ width: '140px', padding: '7px', borderRadius: '5px', border: '1px solid blue' }} value={loanAmount} onChange={(e)=>setLoanAmount(e.target.value)} type="text" /></Col>
          <Col md={3} sm={12}> <h4>interest(%)</h4> <input               style={{ width: '140px', padding: '7px', borderRadius: '5px', border: '1px solid blue' }} value={interest} onChange={(e)=>SetImterest(e.target.value)} type="text" /></Col>
          <Col md={4} sm={12}> <h4>months</h4> <input               style={{ width: '140px', padding: '7px', borderRadius: '5px', border: '1px solid blue' }} value={months} onChange={(e)=>SetMonths(e.target.value)} type="text" /></Col>
        </Row>
        <Row className='justify-content-evenly text-center mt-5 mb-5 ms-5'>
          <Col className='p-3'><button class="button" onClick={calculateEMI}>Calculate</button></Col>
          <Col className='p-3'><button class="button" onClick={resetInputs} >Reset</button></Col>
        </Row>
        {emi !== null && (
            <div className='bg-primary m-4 p-5'>
            <h1 className='text-center'>{`EMI: ₹${emi} / month`}</h1>
            <h5 className='text-center'>{`Total Amount: ₹${totalAmount}`}</h5>
          </div>
        )}

      </div>
      </div>

  )
}

export default App