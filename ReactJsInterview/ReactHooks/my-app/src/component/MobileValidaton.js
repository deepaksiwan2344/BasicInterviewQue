import React, {useState} from 'react';

const  MobileValidaton = () =>{
  
  const [mobileNumber, setMobileNumber] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleMobileNumberChange = (e) => {
    const inputValue = e.target.value;
    setMobileNumber(inputValue);

    // Regular expression to match a 10-digit number
    const mobileNumberPattern = /^\d{10}$/;

    if (inputValue.length === 0) {
      // Empty input
      setIsValid(true);
    } else if (!/^\d+$/.test(inputValue) || inputValue.length !== 10) {
      // Invalid input (contains non-digit characters or not 10 digits)
      setIsValid(false);
    } else {
      // Valid input
      setIsValid(true);
    }
  };

  return (
    <div>
      <label>Mobile Number:</label>
      <input
        type="number"
        value={mobileNumber}
        onChange={handleMobileNumberChange}
      />
      {!isValid && (
        <p style={{ color: 'red' }}>Invalid mobile number. Please enter a valid 10-digit number.</p>
      )}
    </div>
  );
}

export default MobileValidaton;