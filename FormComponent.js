import React, { Component } from 'react';
import './FormComponent.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null,
    };
  }

  handleOptionSelect = (selectedOption) => {
    this.setState({ selectedOption });
  };

  render() {
    return (
      <div className="App">
       <div className="header">
  <div className="logo">
    <img src="https://effi.com.au/ogimage.jpg" alt="Company Logo" />
  </div>
  <h1>Add Lead</h1>
</div>
<div className="dropdown-container">
          <div className="dropdown">
            <button
              className="dropdown-toggle"
              onClick={() => this.handleOptionSelect('contact')}
            >
              Contact Details
            </button>
          </div>

        {this.state.selectedOption === 'contact' && (
          <div className="form-container">
            <h2>Contact Details</h2>
            <form>
            <div className="form-row">
              <div className="form-field">
                <label>Mobile Number:</label>
                <input type="text" name="mobileNumber" />
              </div>
              <div className="form-field">
                <label>Email Address:</label>
                <input type="email" name="emailAddress" />
              </div>
              </div>
              <div className="form-row">
              <div className="form-field">
                <label>First Name:</label>
                <input type="text" name="firstName" />
              </div>
              <div className="form-field">
                <label>Last Name:</label>
                <input type="text" name="lastName" />
              </div>
              </div>
              <div className="form-row">
              <div className="form-field">
                <label>Next Follow-up Date/Time:</label>
                <input type="text" name="followUpDateTime" />
              </div>
              <div className="form-field">
                <label>Assign To:</label>
                <select name="assignTo">
                  <option>Test Agrigator Testing</option>
                  <option>Salil Test Sub-broker</option>
                  <option>Trent Boulter</option>
                  <option>Test M-broker</option>
                  <option>Team Brokeri</option>
                  <option>Test Broker</option>
                  <option>Effi Broker</option>
                </select>
              </div>
              </div>
              
              <div className="form-field">
                <label>Applicant Type:</label>
                <select name="applicantType">
                  <option>Person</option>
                  <option>Business (Company or Trust)</option>
                </select>
              </div>
              <div className="form-field">
                <label>Send Welcome SMS and Email:</label>
                <input type="checkbox" name="sendWelcome" />
              </div>
              <div className="form-field">
                <label>Comments:</label>
                <textarea name="comments"></textarea>
              </div>
              <div className="form-field">
                <button type="submit" className="form-button">Add</button>
                <button type="button" className="form-button cancel">Cancel</button>
              </div>
            </form>
          </div>
        )}

         <div className="dropdown">
            <button
              className="dropdown-toggle"
              onClick={() => this.handleOptionSelect('enquiry')}
            >
              Enquiry Details
            </button>
          </div>

        {this.state.selectedOption === 'enquiry' && (
          <div className="form-container">
            <h2>Enquiry Details</h2>
            <form>
            <div className='form-row'>
              <div className="form-field">
                <label>Lodgment Type:</label>
                <select name="lodgmentType">
                  <option>Home loan</option>
                  <option>Commercials</option>
                  <option>Short term finance</option>
                  <option>Islamic loan</option>
                  <option>Business finance</option>
                  <option>Personal loan</option>
                </select>
              </div>
              <div className="form-field">
                <label>Loan Type:</label>
                <select name="loanType">
                  <option>TestOnweMahi</option>
                  <option>Investor</option>
                  <option>Owner Occupied</option>
                  <option>Construction</option>
                </select>
              </div>
              </div>
              <div className='form-row'>
              <div className="form-field">
                <label>Enquiry Type:</label>
                <select name="enquiryType">
                  <option>Both</option>
                  <option>Purchase</option>
                  <option>Refinance</option>
                </select>
              </div>
              <div className="form-field">
                <label>Borrower Type:</label>
                <select name="borrowerType">
                  <option>Lo-Doc</option>
                  <option>Bad Credit</option>
                  <option>Non-Resident</option>
                  <option>PAYG</option>
                  <option>Self Employed</option>
                  <option>Upgrader</option>
                  <option>First Home Buyer</option>
                </select>
              </div>
              </div>
              <div className='form-row'>
              <div className="form-field">
                <label>Referral Source:</label>
                <select name="referralSource">
                  <option>Australian Worthy Pvt</option>
                  <option>100000aec000344</option>
                  <option>10000cds988899rds</option>
                  <option>10003rninsfj4454322</option>
                </select>
              </div>
              <div className="form-field">
                <label>Referring Person (Optional):</label>
                <input type="text" name="referringPerson" />
              </div>
              </div>
              <div className="form-field">
                <label>Are You Applying by Yourself or with Another Applicant?</label>
                <select name="applicationType">
                  <option>Only Me</option>
                  <option>Me & Co-Applicant(s)</option>
                </select>
              </div>
              <div className="form-field">
                <label>Comments:</label>
                <textarea name="comments"></textarea>
              </div>
              <div className="form-field">
                <button type="submit" className="form-button">Add</button>
                <button type="button" className="form-button cancel">Cancel</button>
              </div>
            </form>
          </div>
        )}
        </div>
        <div  className="footer">
        <p>&copy; 2023 Efii</p>
        </div>
      </div>
    );
  }
}

export default App;


