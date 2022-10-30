import React, { useCallback } from 'react'
import Footer from '../common/footer/Footer'
import Header from '../common/header/Header'
import Background from "../about/about.jpg";
import 'survey-core/modern.min.css';
import './survey.css'
import { StylesManager,Model } from 'survey-core';
import { Survey } from 'survey-react-ui';

StylesManager.applyTheme("modern");

const surveyJson = {
  elements: [{
    name: "FirstName",
    title: "Enter your first name:",
    type: "text"
  }, {
    name: "LastName",
    title: "Enter your last name:",
    type: "text"
  }]

  
};

const SurveyTest = () => {
  const survey = new Model(surveyJson);

  const alertResults = useCallback((sender) => {
    const results = JSON.stringify(sender.data);
    alert(results);
    // saveSurveyResults(
    //   "https://your-web-service.com/" + SURVEY_ID,
    //   sender.data
    // )
  }, []);
  survey.onComplete.add(alertResults);
  return (
    <>
     <Header />

     <div className="main">
        <div
          className="site-breadcrumb"
          style={{ backgroundImage: `url(${Background})` }}
        >
          <div className="container">
            <h2 className="breadcrumb-title">Contact Us</h2>
          </div>
        </div>
      </div>
      <div className="contact-area py-120">
        <div className="container">
            <h3 >Implementing Survey js</h3>
            <div className="surveyModel">
               <Survey model={survey} />
            </div>
           
        </div>
        </div>
     <Footer/>
    </>
  )
}

export default SurveyTest