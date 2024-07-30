/**Button */
// import Counter from './components/Counter'
// import './App.css'

// function App() {
//   return (
//     <>
//       <Counter />
//     </>
//   );
// }

// export default App
/**
 * 1. Create a Counter component:
 *    - This component should have a state variable named 'count' initialized to 0.
 *    - Display the value of 'count' in the Counter component.
 *
 * 2. Create a Button component:
 *    - This component should increase the 'count' by one each time it is clicked.
 *
 * 3. Use the Counter in App, Button components in Counter.
 */
/**Child parent */
// import { useState} from "react";
// import Parent from "./components/Parent";
// import Child from "./components/Child";

// function App(){
//   return (
//     <>
//       <Parent auth="not admin">
//         <Child />
//       </Parent>
//     </>
//   )
// }

// export default App


/** */
// import Counter from './components/Counter'
// import './App.css'
// import ErrorBoundary from './ErrorBoundary'

// function App() {
//   return (
//     <>
//     <p>Please limit to five adds!</p>
//     <ErrorBoundary fallback={<h2>Counter one has gone down</h2>}>
//       <Counter />
//     </ErrorBoundary>

//     <ErrorBoundary fallback={<h2>Counter two has gone down</h2>}>
//       <Counter />
//       </ErrorBoundary>
  
//       {/* <ErrorBoundary>
//       <Parent auth="admin">
//          <Child />
//        </Parent>
//        </ErrorBoundary> */}

//     </>  
//   );
// }

// export default App

import { useState, useEffect, useRef } from "react";
import "./App.css";

function App(){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [num, setNum] = useState("");
  const [yesno, setYesNo] = useState(false);
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordRequirements, setPasswordRequirements] = useState({
    hasSpecialChar: false,
    hasCapitalLetter: false,
    hasNumber: false
  });
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const passwordInputRef = useRef(null);

  const validatePassword = (password) => {
    const newRequirements = {
      hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
      hasCapitalLetter: /[A-Z]/.test(password),
      hasNumber: /[0-9]/.test(password)
    };
    setPasswordRequirements(newRequirements);
    return Object.values(newRequirements).every(Boolean);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validatePassword(password)) {
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    console.log(name, email, num, yesno, text, password);
    
    // Reset form fields
    setName("");
    setEmail("");
    setNum("-1");
    setYesNo(false);
    setText("");
    setPassword("");
    setConfirmPassword("");
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  }

  return(
    <>
    <h2>Sign up</h2>
    <form onSubmit={handleSubmit} onKeyDown={handleKeyDown}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '300px' }}>
        <input 
          style={{ width: '100%', padding: '5px' }}
          placeholder="Name" 
          name="name" 
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input 
          style={{ width: '100%', padding: '5px' }}
          placeholder="Email" 
          name="email" 
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
          <input 
            ref={passwordInputRef}
            style={{ width: '100%', padding: '5px' }}
            type={showPassword ? "text" : "password"} 
            name="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => {
              setPassword(e.target.value);
              validatePassword(e.target.value);
            }}
            onFocus={() => setIsPasswordFocused(true)}
            onBlur={() => setIsPasswordFocused(false)}
          />
          <button 
            type="button" 
            onClick={() => setShowPassword(!showPassword)}
            style={{ 
              background: 'none', 
              border: 'none', 
              cursor: 'pointer', 
              fontSize: '20px', 
              padding: '0 5px' 
            }}
          >
            {showPassword ? '👁️' : '👁️‍🗨️'}
          </button>
          {isPasswordFocused && password.length > 0 && !Object.values(passwordRequirements).every(Boolean) && (
            <div style={{
              position: 'absolute',
              top: '100%',
              right: '0',
              backgroundColor: 'white',
              padding: '10px',
              borderRadius: '5px',
              boxShadow: '0 0 10px rgba(0,0,0,0.1)',
              zIndex: 1000,
              marginTop: '5px'
            }}>
              <h4 style={{ margin: '0 0 5px' }}>Password Requirements:</h4>
              <ul style={{ margin: 0, paddingLeft: '20px' }}>
                <li style={{ color: passwordRequirements.hasSpecialChar ? 'green' : 'red' }}>
                  Special character
                </li>
                <li style={{ color: passwordRequirements.hasCapitalLetter ? 'green' : 'red' }}>
                  Capital letter
                </li>
                <li style={{ color: passwordRequirements.hasNumber ? 'green' : 'red' }}>
                  Number
                </li>
              </ul>
            </div>
          )}
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input 
            style={{ width: '100%', padding: '5px' }}
            type={showConfirmPassword ? "text" : "password"} 
            name="confirmPassword" 
            placeholder="Confirm Password" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
          />
          <button 
            type="button" 
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            style={{ 
              background: 'none', 
              border: 'none', 
              cursor: 'pointer', 
              fontSize: '20px', 
              padding: '0 5px' 
            }}
          >
            {showConfirmPassword ? '👁️' : '👁️‍🗨️'}
          </button>
        </div>
        <select 
          style={{ width: '100%', padding: '5px' }}
          name="num" 
          value={num} 
          onChange={(e) => setNum(e.target.value)}
        >
          <option value={-1}>Gender</option>
          <option value={1}>Male</option>
          <option value={2}>Female</option>
          <option value={3}>Other</option>
        </select>
        <div>
          <label>
            I am a US citizen or green card holder: 
            <input 
              type="checkbox" 
              name="yesno" 
              checked={yesno}
              onChange={(e) => setYesNo(e.target.checked)}
            />
          </label>
        </div>
        <textarea 
          style={{ width: '100%', padding: '5px' }}
          name="text" 
          placeholder="Comments"
          value={text} 
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <input type="submit" value='Sign up' style={{ width: '100%', padding: '5px' }} />
      </div>
    </form>
    </>
  )
}
export default App