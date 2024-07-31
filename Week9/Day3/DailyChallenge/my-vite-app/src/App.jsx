import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    age: "",
    num: "-1",
    gender: "",
    dietaryRestrictions: {
      nutsFree: false,
      lactoseFree: false,
      vegan: false
    }
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData(prev => ({
        ...prev,
        dietaryRestrictions: {
          ...prev.dietaryRestrictions,
          [name]: checked
        }
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log("Sign up function called");
    const queryString = new URLSearchParams(formData).toString();
    console.log("Query string:", queryString);
    window.location.href = `${window.location.origin}?${queryString}`;
  };

  return (
    <div className="App">
      <FormComponent 
        formData={formData} 
        handleChange={handleChange}
        handleSignUp={handleSignUp}
      />
      <EnteredInfo formData={formData} />
    </div>
  );
}
function FormComponent({ formData, handleChange, handleSignUp }) {
  return (
    <div className="form-container">
      <h2>Sign Up Form</h2>
      <form onSubmit={handleSignUp}>
        <input 
          className="form-input"
          placeholder="First Name" 
          name="fname" 
          onChange={handleChange}
          value={formData.fname}
        />
        <input 
          className="form-input"
          placeholder="Last Name" 
          name="lname" 
          onChange={handleChange}
          value={formData.lname}
        />
        <input 
          className="form-input"
          placeholder="Age" 
          name="age" 
          onChange={handleChange}
          value={formData.age}
        />
        <div className="gender-selection">
          <label>Gender:</label>
          <input 
            type="radio" 
            id="male" 
            name="gender" 
            value="male" 
            checked={formData.gender === "male"}
            onChange={handleChange}
          />
          <label htmlFor="male">Male</label>
          
          <input 
            type="radio" 
            id="female" 
            name="gender" 
            value="female" 
            checked={formData.gender === "female"}
            onChange={handleChange}
          />
          <label htmlFor="female">Female</label>
        </div>
        <select 
          className="form-select"
          name="num" 
          value={formData.num} 
          onChange={handleChange}
        >
          <option value="-1">-- Please Choose a destination --</option>
          <option value="1">Thailand</option>
          <option value="2">Japan</option>
          <option value="3">Brazil</option>
        </select>
        <div className="dietary-restrictions">
          <label>Dietary Restrictions:</label>
          <div className="checkbox-group">
            <input 
              type="checkbox" 
              name="nutsFree" 
              checked={formData.dietaryRestrictions.nutsFree}
              onChange={handleChange}
            />
            <label>Nuts free</label>
            
            <input 
              type="checkbox" 
              name="lactoseFree" 
              checked={formData.dietaryRestrictions.lactoseFree}
              onChange={handleChange}
            />
            <label>Lactose free</label>
            
            <input 
              type="checkbox" 
              name="vegan" 
              checked={formData.dietaryRestrictions.vegan}
              onChange={handleChange}
            />
            <label>Vegan</label>
          </div>
        </div>
        <input type="submit" value='Sign up' className="submit-button" />
      </form>
    </div>
  );
}

function EnteredInfo({ formData }) {
  const { fname, lname, age, num, gender, dietaryRestrictions } = formData;
  
  return (
    <div className="entered-info">
      <h2>Entered Information:</h2>
      <p><strong>First Name:</strong> {fname}</p>
      <p><strong>Last Name:</strong> {lname}</p>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Gender:</strong> {gender ? gender.charAt(0).toUpperCase() + gender.slice(1) : "Not selected"}</p>
      <p><strong>Destination:</strong> {num === "-1" ? "Not selected" : ["Thailand", "Japan", "Brazil"][parseInt(num) - 1]}</p>
      <p><strong>Dietary Restrictions:</strong></p>
      <p>Nuts free: {dietaryRestrictions.nutsFree ? "Yes" : "No"}</p>
      <p>Lactose free: {dietaryRestrictions.lactoseFree ? "Yes" : "No"}</p>
      <p>Vegan: {dietaryRestrictions.vegan ? "Yes" : "No"}</p>
    </div>
  );
}

export default App;