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
  logoPosition: "right",
  completedHtmlOnCondition: [
    {
      html: 'survey.onComplete = function(survey) {\n  //save my data on the server\n  window.location.href = "http://stackoverflow.com";\n}',
    },
    {
      expression:
        "{Hmm.. it might be something you want to talk about or understand further..} = ['Understand better with some scales']",
      html: "Please proceed to next questionnaire",
    },
    {
      expression:
        "{How would you like us to be there for you?} = ['Talk to a professional before booking a session']",
      html: "please redirect to booking session page",
    },
    {
      expression:
        "{Hmm, looks there might be something concerning. Would you want to} = ['Check with yourself']",
      html: "please redirect user to next questionnaire with user id",
    },
    {
      expression:
        "{Hmm, looks there might be something concerning. Would you want to} notcontains 'Check with yourself'",
      html: "please redirect them to book a session page",
    },
  ],
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "checkbox",
          name: "1.\tSM (or whatever the name), How are you feeling right now?",
          title: " SM (or whatever the name), How are you feeling right now?",
          choices: [
            "sad",
            "angry ",
            "hurt",
            "frustrated ",
            "confused ",
            "depressed ",
            "furious",
            "disappointed ",
            "giving up",
            "no energy ",
            "hollow",
            "Don’t know",
          ],
        },
      ],
    },
    {
      name: "page2",
      elements: [
        {
          type: "checkbox",
          name: "How would you like us to be there for you?",
          title: "How would you like us to be there for you?",
          enableIf:
            "{1.\tSM (or whatever the name), How are you feeling right now?} anyof ['sad', 'hurt', 'angry ', 'frustrated ', 'confused ', 'depressed ', 'furious', 'disappointed ', 'giving up', 'no energy ', 'hollow']",
          choices: [
            "Talk to a professional before booking a session",
            "Explore further myself",
            "Book a session",
          ],
        },
      ],
    },
    {
      name: "page3",
      elements: [
        {
          type: "checkbox",
          name: "Since how long have you been feeling this way?",
          title: "Sincehow long have you been feeling this way?",
          choices: [
            "2 weeks or more",
            "Less than 2 weeks",
            "Today",
            "Since the past few hours",
          ],
        },
      ],
    },
    {
      name: "page4",
      elements: [
        {
          type: "checkbox",
          name: "Hmm, looks there might be something concerning. Would you want to",
          choices: [
            "Have us call you",
            "Chat with us over text",
            "Book a session",
            "Check with yourself",
          ],
        },
      ],
    },
    {
      name: "page5",
      elements: [
        {
          type: "checkbox",
          name: "Hmm.. it might be something you want to talk about or understand further..",
          choices: [
            "Book a session",
            "Understand better with some scales",
            "Have some self-help resources",
          ],
        },
      ],
    },
    {
      name: "page6",
      elements: [
        {
          type: "checkbox",
          name: "Oh! Don’t worry.. We shall explore and understand what you are feeling together!",
          title:
            "Oh! Don’t worry.. We shall explore and understand what you are feeling together! a)    Are you feeling anything similar to:",
          choices: [
            "Scared",
            "Helpless",
            "Panicking",
            "Restless",
            "Inferior",
            "Inadequate",
            "Anxious",
            "Terrified",
            "None of these",
          ],
        },
      ],
    },
    {
      name: "page7",
      elements: [
        {
          type: "checkbox",
          name: "It’s okay.. It’s okay to take time and understand what’s going on inside Is what you are experiencing closer to these?",
          choices: [
            "Agitated",
            "Aggressive",
            "Resentful",
            "Guilty",
            "isolated/lonely",
          ],
        },
      ],
    },
    {
      name: "page8",
      elements: [
        {
          type: "checkbox",
          name: "Hmm.. based on your responses, are you feeling mostly",
          visibleIf:
            "{It’s okay.. It’s okay to take time and understand what’s going on inside Is what you are experiencing closer to these?} notempty",
          title: "Hmm.. based on your responses, are you feeling mostly",
          choices: ["Anger", "Disgusted", "Sad", "neglected"],
        },
      ],
    },
  ],
  triggers: [
    {
      type: "skip",
      expression:
        "{How would you like us to be there for you?} = ['Explore further myself']",
      gotoName: "Since how long have you been feeling this way?",
    },
    {
      type: "skip",
      expression:
        "{Since how long have you been feeling this way?} = ['2 weeks or more']",
      gotoName:
        "Hmm, looks there might be something concerning. Would you want to",
    },
    {
      type: "skip",
      expression:
        "{Oh! Don’t worry.. We shall explore and understand what you are feeling together!} notcontains 'None of these'",
      gotoName: "How would you like us to be there for you?",
    },
    {
      type: "skip",
      expression:
        "{Oh! Don’t worry.. We shall explore and understand what you are feeling together!} = ['None of these']",
      gotoName:
        "It’s okay.. It’s okay to take time and understand what’s going on inside Is what you are experiencing closer to these?",
    },
    {
      type: "skip",
      expression:
        "{1.\tSM (or whatever the name), How are you feeling right now?} = ['Don’t know']",
      gotoName:
        "Oh! Don’t worry.. We shall explore and understand what you are feeling together!",
    },
    {
      type: "complete",
      expression:
        "{How would you like us to be there for you?} = ['Book a session']",
    },
    {
      type: "complete",
      expression:
        "{How would you like us to be there for you?} = ['Talk to a professional before booking a session']",
    },
    {
      type: "complete",
      expression:
        "{Hmm, looks there might be something concerning. Would you want to} = ['Check with yourself']",
    },
    {
      type: "complete",
      expression:
        "{Hmm, looks there might be something concerning. Would you want to} notcontains 'Check with yourself'",
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
