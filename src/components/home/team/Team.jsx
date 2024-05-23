import React, { useState } from 'react';
import Heading from "../../common/Heading"
import { team } from "../../data/Data"
import "./team.css"

const Team = () => {
  const [showDialog, setShowDialog] = useState(false);
  const sampleMessage = "This is a sample message.";
  const handleOpenDialog = () => {
    window.location.href = 'sms:1234567890'; // Replace with the actual phone number of the message center
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
  };

  const handlePhoneButtonClick = () => {
    window.location.href = 'tel:1234567890'; // Replace with the actual phone number of the call center
  };

  return (
    <>
      <section className='team background'>
        <div className='container'>
          <Heading title='Meet Our Top Volunteers' subtitle='At Organizations we are grateful for the tireless efforts of our dedicated volunteers who make a difference in our community every day. Among our thousands of volunteers, we are proud to recognize a few exceptional individuals who have gone above and beyond to make a lasting impact.' />

          <div className='content mtop grid3'>
            {team.map((val, index) => (
              <div className='box' key={index}>
                <div className='details'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                    <i className='fa-solid fa-circle-check'></i>
                  </div>
                  <i className='fa fa-location-dot'></i>
                  <label>{val.address}</label>
                  <h4>{val.name}</h4>

                  <ul>
                    {val.icon.map((iconObj, index) => (
                      <li key={index}>
                        <a href={iconObj.href} target='_blank' rel='noopener noreferrer'>
                          {iconObj.icon}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <div className='button flex'>
                    <button onClick={handleOpenDialog}>
                      <i className='fa fa-envelope'></i>
                      Message
                    </button>
                    <button className='btn4' onClick={handlePhoneButtonClick}>
                      <i className='fa fa-phone-alt'></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {showDialog && (
            <div className='dialog'>
              <div className='dialog-content'>
                <p>{sampleMessage}</p>
                <button onClick={handleCloseDialog}>Close</button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
export default Team;
