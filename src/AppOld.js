import React from 'react';
import { Helmet } from 'react-helmet';

// function MyComponent() {
//   return (
//     <>
//       <Helmet>
//         <title> My Page Title</title>
//       </Helmet>
//       </>
//   )
// }





import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
// function MyDropdown() {
//   const [selectedOption, setSelectedOption] = useState('');

//   const handleChange = (event) => {
//     setSelectedOption(event.target.value);
//    };


export function MyDropdown() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <label htmlFor="dropdown">Select an option:</label>
      <select id="dropdown" value={selectedOption} onChange={handleChange}>
        <option value="">Choose an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
    </div>
  );
}


function App() {
    const [selectedOption, setSelectedOption] = useState('');

//   const handleChange = (event) => {
//     setSelectedOption(event.target.value);
//    };

  const mike = 3;
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };
  return (
    <>
       <div>
      <label htmlFor="dropdown">Select an option:</label>
      <select id="dropdown" value={selectedOption} onChange={handleChange}>
        <option value="">Choose an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
    </div>
      <title> data intelliscence</title>
      <h1>Fascination at its fullest</h1>
      <p>Come along and be wowed!!</p>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Smith</td>
            <td>32</td>
            <td>john.smith@example.com</td>
          </tr>
          <tr>
            <td>Jane Doe</td>
            <td>28</td>
            <td>jane.doe@example.com</td>
          </tr>
        </tbody>
      </table>
      <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Contact Us</legend>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange}></textarea>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </fieldset>
    </form>


      <MyDropdown/>
      </>
  );
}
// }
export default App;

