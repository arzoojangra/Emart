import React, { useState } from "react";
import "./Form.css";

//https://www.jotform.com/build/230260645785459

function Form() {
  const [personData, setPersonData] = useState({});

  const handleChange = (event) => {
    setPersonData({ ...personData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    console.log(personData);
    event.preventDefault();
  };

  return (
    <div className="background">
      <div className="main">
        <form className="form" onSubmit={(event) => handleSubmit(event)}>
          <div className="heading">
            <h2>Sample Job Application Form</h2>
            <br />
            We are an Equal Opportunity Employer and committed to excellence
            through diversity.
          </div>
          <hr />
          <hr />
          <h3>Personal Information</h3>
          <hr />
          <br />
          <label>Name: </label>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={(event) => handleChange(event)}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={(event) => handleChange(event)}
          />
          <br />
          <br />
          <label>Phone Number: </label>
          <input
            type="text"
            name="phone"
            onChange={(event) => handleChange(event)}
          />
          <br />
          <br />
          <label>Email: </label>
          <input
            className="email"
            type="email"
            name="email"
            placeholder="example@example.com"
            onChange={(event) => handleChange(event)}
          />
          <br />
          <br />
          <label>Address: </label>
          <input
            className="address"
            type="text"
            name="address"
            placeholder="Street address"
            onChange={(event) => handleChange(event)}
          />
          <br />
          <br />
          <input
            className="address2"
            type="text"
            name="address2"
            placeholder="Street address line 2"
            onChange={(event) => handleChange(event)}
          />
          <br />
          <br />
          <input
            className="city"
            type="text"
            name="city"
            placeholder="City"
            onChange={(event) => handleChange(event)}
          />
          <input
            type="text"
            name="state"
            placeholder="State/Province"
            onChange={(event) => handleChange(event)}
          />
          <br />
          <br />
          <input
            className="city"
            type="text"
            name="pinCode"
            placeholder="Pin Code"
            onChange={(event) => handleChange(event)}
          />
          <br />
          <br />
          What is the best time to contact you?
          <select name="contactTime" onChange={(event) => handleChange(event)}>
            <option>Please select</option>
            <option>Morning</option>
            <option>Afternoon</option>
            <option>Evening</option>
            <option>Doesn't Matter</option>
          </select>
          <br />
          <br />
          <hr />
          <hr />
          <br />
          What is your social security number?
          <input
            type="text"
            name="phone"
            onChange={(event) => handleChange(event)}
          />
          <br />
          <br />
          Are you currently legally entitled to work in the country where the
          job is based?
          <br />
          <input
            className="radio"
            type="radio"
            id="sameCountry"
            name="sameCountry"
            onChange={(event) => handleChange(event)}
          />
          <label className="radio" htmlFor="sameCountry">
            Yes
          </label>
          <br />
          <input
            className="radio"
            type="radio"
            id="sameCountry"
            name="sameCountry"
            onChange={(event) => handleChange(event)}
          />
          <label className="radio" htmlFor="sameCountry">
            No
          </label>
          <br />
          <br />
          If applicable, please detail any restrictions:
          <br />
          <br />
          <textarea
            name="restrictions"
            onChange={(event) => handleChange(event)}
          ></textarea>
          <br />
          <br />
          If selected for employment are you willing to submit a background
          check?
          <br />
          <input
            className="radio"
            type="radio"
            id="backgroundYes"
            name="backroundYes"
            onChange={(event) => handleChange(event)}
          />
          <label className="radio" htmlFor="workYes">
            Yes
          </label>
          <br />
          <input
            className="radio"
            type="radio"
            id="backgroundNo"
            name="backgroundNo"
            onChange={(event) => handleChange(event)}
          />
          <label className="radio" htmlFor="workNo">
            No
          </label>
          <br />
          <br />
          <hr />
          <hr />
          <h3>Position Information</h3>
          <hr />
          <br />
          What position are you applying for?
          <select name="Position" onChange={(event) => handleChange(event)}>
            <option>Please select</option>
            <option>Sales</option>
            <option>Marketing</option>
            <option>Human Resource</option>
            <option>IT</option>
            <option>Customer Service</option>
          </select>
          <br />
          <br />
          What is your desired employment?
          <select name="Employment" onChange={(event) => handleChange(event)}>
            <option>Please select</option>
            <option>Full-time</option>
            <option>Part-time</option>
            <option>Internship</option>
          </select>
          <br />
          <br />
          What is your desired pay? (Monthly)
          <input
            type="text"
            name="desiredPay"
            placeholder="ex: 50,000 INR"
            onChange={(event) => handleChange(event)}
          />
          <br />
          <br />
          What is your available start date?
          <input
            type="date"
            name="joinDate"
            onChange={(event) => handleChange(event)}
          />
          <br />
          <br />
          Have you worked for Company before?
          <br />
          <input
            className="radio"
            type="radio"
            id="workedYes"
            name="workedYes"
            onChange={(event) => handleChange(event)}
          />
          <label className="radio" htmlFor="workedYes">
            Yes
          </label>
          <br />
          <input
            className="radio"
            type="radio"
            id="workedNo"
            name="workedNo"
            onChange={(event) => handleChange(event)}
          />
          <label className="radio" htmlFor="workedNo">
            No
          </label>
          <br />
          <br />
          Please provide your department, manager, the time period you have
          worked for Company and reason of leave below
          <br />
          <br />
          <textarea
            name="restrictions"
            onChange={(event) => handleChange(event)}
          ></textarea>
          <br />
          <br />
          <hr />
          <hr />
          <h3>Education</h3>
          <hr />
          <br />
          <label>College/Institution: </label>
          <input
            type="text"
            name="institution"
            onChange={(event) => handleChange(event)}
          />
          <br />
          <br />
          <label>Department: </label>
          <input
            type="text"
            name="department"
            onChange={(event) => handleChange(event)}
          />
          <br />
          <br />
          Start date
          <input
            type="date"
            name="startDate"
            onChange={(event) => handleChange(event)}
          />
          <br />
          <br />
          End date
          <input
            type="date"
            name="endDate"
            onChange={(event) => handleChange(event)}
          />
          <br />
          <br />
          <hr />
          <hr />
          <h3>Work Experience</h3>
          <hr />
          <br />
          <label>Company: </label>
          <input
            type="text"
            name="company"
            onChange={(event) => handleChange(event)}
          />
          <br />
          <br />
          <label>Position: </label>
          <input
            type="text"
            name="position"
            onChange={(event) => handleChange(event)}
          />
          <br />
          <br />
          Start date
          <input
            type="date"
            name="startDate"
            onChange={(event) => handleChange(event)}
          />
          <br />
          <br />
          End date
          <input
            type="date"
            name="endDate"
            onChange={(event) => handleChange(event)}
          />
          <br />
          <br />
          <hr />
          <hr />
          <h3>Qualifications</h3>
          <hr />
          <br />
          <label>Achievements: </label>
          <input
            type="text"
            name="achievements"
            onChange={(event) => handleChange(event)}
          />
          <br />
          <br />
          <label>Institution: </label>
          <input
            type="text"
            name="institutions"
            onChange={(event) => handleChange(event)}
          />
          <br />
          <br />
          Microsoft Office
          <input
            type="range"
            id="msOffice"
            name="msOffice"
            list="markers"
            min="0"
            max="5"
            onChange={(event) => handleChange(event)}
          />
          <datalist id="markers">
            <option value="0"></option>
            <option value="1"></option>
            <option value="2"></option>
            <option value="3"></option>
            <option value="4"></option>
            <option value="5"></option>
          </datalist>
          <br />
          <br />
          Communication Skills
          <input
            type="range"
            id="msOffice"
            name="msOffice"
            list="markers"
            min="0"
            max="5"
            onChange={(event) => handleChange(event)}
          />
          <datalist id="markers">
            <option value="0"></option>
            <option value="1"></option>
            <option value="2"></option>
            <option value="3"></option>
            <option value="4"></option>
            <option value="5"></option>
          </datalist>
          <br />
          <br />
          SEO
          <input
            type="range"
            id="msOffice"
            name="msOffice"
            list="markers"
            min="0"
            max="5"
            onChange={(event) => handleChange(event)}
          />
          <datalist id="markers">
            <option value="0"></option>
            <option value="1"></option>
            <option value="2"></option>
            <option value="3"></option>
            <option value="4"></option>
            <option value="5"></option>
          </datalist>
          <br />
          <br />
          <hr />
          <hr />
          <h3>References</h3>
          <hr />
          <br />
          <label>Reference Name: </label>
          <input
            type="text"
            name="referenceName"
            onChange={(event) => handleChange(event)}
          />
          <br />
          <br />
          Relationship
          <select name="relationship" onChange={(event) => handleChange(event)}>
            <option>Family</option>
            <option>Friend</option>
            <option>You managed him/her</option>
            <option>You reported him/her</option>
            <option>You worked together in the same group</option>
            <option>You worked in different group</option>
            <option>He/she was a cient of yours</option>
            <option>You were a client of him/her</option>
            <option>You studied together</option>
          </select>
          <br />
          <br />
          <label>Contact Information</label>
          <input
            type="text"
            name="contactInfo"
            onChange={(event) => handleChange(event)}
          />
          <br />
          <br />
          <hr />
          <br />
          <br />
          Please upload your CV here
          <input type="file" id="myFile" name="filename" />
          <br />
          Please upload your Cover Letter here
          <input type="file" id="myFile" name="filename" />
          <hr />
          <input className="checkbox" type="checkbox" id="tNc" name="tNc" />
          <label className="checkbox" htmlFor="tNc">
            I agree to terms & conditions.
          </label>
          <br />
          <br />
          <br />
          Date
          <input
            type="date"
            name="date"
            onChange={(event) => handleChange(event)}
          />
          <br />
          <br />
          <br />
          <center>
            <button type="submit">Submit</button>

            <button type="reset">Reset</button>
          </center>
        </form>
      </div>
    </div>
  );
}

export default Form;
