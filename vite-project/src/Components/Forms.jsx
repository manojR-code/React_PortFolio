import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
// import RightImage from './your-image.jpg'; // Replace with your image path
import RightImage from '../Images/make a creative image that can suit to black background.jpg';
const SubmitDetails = () => {
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [Name ,SetName] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('https://serverrq-1.onrender.com',
    { email, description,Name },
    {
      headers: {
        'Content-Type': 'application/json',

      }
    }
  )
  .then(() => {
    notify();
    setEmail('');
    setDescription('');
  })
  .catch((error) => {
    toast.error('Submission failed!');
    toast.error(error.message);
  });

  };
   function notify(variable='success') {
    toast.success('Details submitted successfully!'); 
  }

  return (
     
    <div className="submit-page">
      <div className="submit-form">
        <h2>Submit Your Details</h2>
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={Name}
            onChange={(e) => SetName(e.target.value)}
            required/>
          <label>Description</label>
          <textarea
            placeholder="Tell us more..."
            rows="5"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="submit-image">
        <img src={RightImage} alt="Decorative" />
      </div>
    <ToastContainer/>
    </div>
  );
};

export default SubmitDetails;
