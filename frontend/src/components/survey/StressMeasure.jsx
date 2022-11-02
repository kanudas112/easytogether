import React, { useCallback } from "react";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
import Background from "../about/about.jpg";
import "survey-core/modern.min.css";
import "./survey.css";
import { StylesManager, Model } from "survey-core";
import { Survey } from "survey-react-ui";

StylesManager.applyTheme("modern");

const surveyJson = {
  title: "Perceived Stress Scale",
  description:
    "A more precise measure of personal stress can be determined by using a variety of instruments that\nhave been designed to help measure individual stress levels. The first of these is called the Perceived\nStress Scale.\nThe Perceived Stress Scale (PSS) is a classic stress assessment instrument. The tool, while originally\ndeveloped in 1983, remains a popular choice for helping us understand how different situations affect\nour feelings and our perceived stress. The questions in this scale ask about your feelings and thoughts\nduring the last month. In each case, you will be asked to indicate how often you felt or thought a certain\nway. Although some of the questions are similar, there are differences between them and you should\ntreat each one as a separate question. The best approach is to answer fairly quickly. That is, don’t try to\ncount up the number of times you felt a particular way; rather indicate the alternative that seems like\na reasonable estimate",
  logoPosition: "right",
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "rating",
          name: "In the last month, how often have you been upset because of something that  happened unexpectedly?",
          isRequired: true,
          rateValues: [
            { value: "0", text: "never" },
            { value: "1", text: "almost never" },
            { value: "2", text: "sometimes" },
            { value: "3", text: "fairly often" },
            { value: "4", text: "very often" },
          ],
        },
      ],
    },
    {
      name: "page2",
      elements: [
        {
          type: "rating",
          name: "In the last month, how often have you felt that you were unable to control the  important things in your life?",
          isRequired: true,
          rateValues: [
            { value: "0", text: "never" },
            { value: "1", text: "almost never" },
            { value: "2", text: "sometimes" },
            { value: "3", text: "fairly often" },
            { value: "4", text: "very often" },
          ],
        },
      ],
    },
    {
      name: "page3",
      elements: [
        {
          type: "rating",
          name: "In the last month, how often have you felt nervous and stressed?",
          isRequired: true,
          rateValues: [
            { value: "0", text: "never" },
            { value: "1", text: "almost never" },
            { value: "2", text: "sometimes" },
            { value: "3", text: "fairly often" },
            { value: "4", text: "very often" },
          ],
        },
      ],
    },
    {
      name: "page4",
      elements: [
        {
          type: "rating",
          name: "In the last month, how often have you felt confident about your ability to handle  your personal problems?",
          isRequired: true,
          rateValues: [
            { value: "0", text: "never" },
            { value: "1", text: "almost never" },
            { value: "2", text: "sometimes" },
            { value: "3", text: "fairly often" },
            { value: "4", text: "very often" },
          ],
        },
      ],
    },
    {
      name: "page5",
      elements: [
        {
          type: "rating",
          name: "In the last month, how often have you felt that things were going your way?",
          isRequired: true,
          rateValues: [
            { value: "0", text: "never" },
            { value: "1", text: "almost never" },
            { value: "2", text: "sometimes" },
            { value: "3", text: "fairly often" },
            { value: "4", text: "very often" },
          ],
        },
      ],
    },
    {
      name: "page6",
      elements: [
        {
          type: "rating",
          name: "In the last month, how often have you found that you could not cope with  all the things that you had to do?",
          isRequired: true,
          rateValues: [
            { value: "0", text: "never" },
            { value: "1", text: "almost never" },
            { value: "2", text: "sometimes" },
            { value: "3", text: "fairly often" },
            { value: "4", text: "very often" },
          ],
        },
      ],
    },
    {
      name: "page7",
      elements: [
        {
          type: "rating",
          name: "In the last month, how often have you been able to control irritations in  your life?",
          isRequired: true,
          rateValues: [
            { value: "0", text: "never" },
            { value: "1", text: "almost never" },
            { value: "2", text: "sometimes" },
            { value: "3", text: "fairly often" },
            { value: "4", text: "very often" },
          ],
        },
      ],
    },
    {
      name: "page8",
      elements: [
        {
          type: "rating",
          name: "In the last month, how often have you felt that you were on top of things?",
          isRequired: true,
          rateValues: [
            { value: "0", text: "never" },
            { value: "1", text: "almost never" },
            { value: "2", text: "sometimes" },
            { value: "3", text: "fairly often" },
            { value: "4", text: "very often" },
          ],
        },
      ],
    },
    {
      name: "page9",
      elements: [
        {
          type: "rating",
          name: "In the last month, how often have you been angered because of things that  happened that were outside of your control?",
          isRequired: true,
          rateValues: [
            { value: "0", text: "never" },
            { value: "1", text: "almost never" },
            { value: "2", text: "sometimes" },
            { value: "3", text: "fairly often" },
            { value: "4", text: "very often" },
          ],
        },
      ],
    },
    {
      name: "page10",
      elements: [
        {
          type: "rating",
          name: "In the last month, how often have you felt difficulties were piling up so high that  you could not overcome them?",
          isRequired: true,
          rateValues: [
            { value: "0", text: "never" },
            { value: "1", text: "almost never" },
            { value: "2", text: "sometimes" },
            { value: "3", text: "fairly often" },
            { value: "4", text: "very often" },
          ],
        },
      ],
    },
  ],
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
          <h3>Implementing Survey js</h3>
          <div className="surveyModel">
            <Survey model={survey} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SurveyTest;
