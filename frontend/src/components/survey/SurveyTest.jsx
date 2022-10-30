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
  title: "Hey there! Good to see you here today.. ",
  description:
    "I understand it is not easy sometimes to understand what’s going on with us. Also, given the fact we don’t often have the space to voice out clearly all that we are feeling and thinking. Most of the people around the globe (more than 970 million people, as per statistics in 2018) struggle to find a safe, reliable space to share and voice out their feelings and thoughts not just to others, but themselves, and struggle with stress, mental health and wellbeing.\n\nLet me understand it better.. ",
  logoPosition: "right",
  completedHtmlOnCondition: [
    {
      expression: "{Do You Want to Continue Further?} = ['No']",
      html: "It’s okay if you don’t feel ready enough to work on your anger just yet; By then you can subscribe to our newsletter and receive relevant materials in your mail.",
    },
    {
      expression:
        "{On a scale of 1-10, how intense is usually your anger?} <= 5",
      html: "‘ Hey there, we feel these resources might help you in managing the anger. Hope you found what you were looking for! Have a nice day",
    },
    {
      expression:
        "{Would you want to} = ['simply manage your anger', 'understand your anger, and work on ways to effectively express anger and maintain the relationships?']",
      html: "go to this link \nhttps://google.com",
    },
  ],
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "text",
          name: "Let’s begin with your name",
          title: "What is Your Name/username?",
          isRequired: true,
        },
      ],
    },
    {
      name: "page2",
      elements: [
        {
          type: "radiogroup",
          name: "question2",
          title: "How are you feeling right now?",
          choices: [
            "happy",
            "sad",
            "angry",
            "frustrated",
            "confused",
            "depressed",
            "furious",
            "disappointed",
            "giving up",
            "no energy,",
            "low",
            "don’t know",
            "empty",
            "hollow",
            "blank",
          ],
        },
      ],
    },
    {
      name: "page3",
      elements: [
        {
          type: "checkbox",
          name: "Angry Topic",
          visibleIf: "{question2} = 'angry'",
          title: "When angry, how do you feel in your body?",
          isRequired: true,
          choices: [
            "Body heating up",
            "Fast breathing",
            "Blood rising",
            "Body shaking",
            "Clenching of jaw",
            "Clenching the fists",
            "Face becoming red",
          ],
          showOtherItem: true,
        },
      ],
    },
    {
      name: "page4",
      elements: [
        {
          type: "checkbox",
          name: "Do you feel comfortable expressing your anger?",
          title: "Do you feel comfortable expressing your anger?",
          isRequired: true,
          choices: ["Yes", "No"],
        },
      ],
    },
    {
      name: "page5",
      elements: [
        {
          type: "text",
          name: "What beliefs do you have around anger?",
          title: "  What beliefs do you have around anger?",
          requiredIf:
            "{Do you feel comfortable expressing your anger?} = ['No']",
        },
      ],
    },
    {
      name: "page6",
      elements: [
        {
          type: "text",
          name: "Is anger a negative emotion?",
          visibleIf: "{What beliefs do you have around anger?} notempty",
          isRequired: true,
        },
      ],
    },
    {
      name: "page7",
      elements: [
        {
          type: "checkbox",
          name: "Is it wrong or a flaw to have anger?",
          visibleIf: "{Is anger a negative emotion?} notempty",
          isRequired: true,
          choices: ["Yes", "No"],
        },
      ],
    },
    {
      name: "page8",
      elements: [
        {
          type: "checkbox",
          name: "Are you allowed to show anger at home?",
          visibleIf: "{Is it wrong or a flaw to have anger?} notempty",
          isRequired: true,
          choices: ["Yes", "No", "Sometimes", "In a Certain Situation"],
        },
      ],
    },
    {
      name: "page9",
      elements: [
        {
          type: "text",
          name: "Growing up, how did you see your parents/family members expressing anger?",
          isRequired: true,
        },
      ],
    },
    {
      name: "page10",
      elements: [
        {
          type: "checkbox",
          name: "Do you react immediately when you are angered?",
          isRequired: true,
          choices: ["Yes", "No", "Sometimes"],
        },
      ],
    },
    {
      name: "page11",
      elements: [
        {
          type: "checkbox",
          name: "question1",
          visibleIf:
            "{Do you react immediately when you are angered?} = ['No']",
          title:
            "Do you allow and tolerate for many situations to pass by, before youfinally lash out?",
          choices: ["Yes", "No", "Sometimes", "Most times"],
        },
      ],
    },
    {
      name: "page12",
      elements: [
        {
          type: "checkbox",
          name: "How do you react/respond in anger to others?",
          isRequired: true,
          choices: [
            "Intentionally say hurtful things",
            "Verbally abusive",
            "Blabbering",
            "Physically aggressive on others",
            "Become violent towards others/myself",
            "Cry",
          ],
          showOtherItem: true,
          showSelectAllItem: true,
        },
      ],
    },
    {
      name: "page13",
      elements: [
        {
          type: "checkbox",
          name: "Would you want to change the way you respond in anger?",
          choices: ["Yes", "No", "I am not sure"],
        },
      ],
    },
    {
      name: "page14",
      elements: [
        {
          type: "checkbox",
          name: "Change, though seems difficult, uncomfortable and impossible, with processing and right tools can be achieved. Awareness is most effective when we act upon it.. Would you want to continue further?",
          requiredIf:
            "{Would you want to change the way you respond in anger?} = ['No', 'I am not sure']",
          choices: ["Yes", "No"],
        },
      ],
    },
    {
      name: "page15",
      elements: [
        {
          type: "checkbox",
          name: "Do You Want to Continue Further?",
          visibleIf:
            "{Change, though seems difficult, uncomfortable and impossible, with processing and right tools can be achieved. Awareness is most effective when we act upon it.. Would you want to continue further?} = ['No']",
          title: "Do You Want to Continue Further?",
          isRequired: true,
          choices: ["Yes", "No"],
        },
      ],
    },
    {
      name: "page16",
      elements: [
        {
          type: "checkbox",
          name: "Do you feel guilty regarding your anger?",
          isRequired: true,
          choices: ["Yes", "No"],
        },
      ],
    },
    {
      name: "page17",
      elements: [
        {
          type: "text",
          name: "What about your anger makes you feel guilty?",
          visibleIf: "{Do you feel guilty regarding your anger?} = ['Yes']",
          title: "What about your anger makes you feel guilty?",
        },
      ],
    },
    {
      name: "page18",
      elements: [
        {
          type: "rating",
          name: "On a scale of 1-10, how intense is usually your anger?",
          isRequired: true,
          rateMax: 10,
          minRateDescription: "5",
        },
      ],
    },
    {
      name: "page19",
      elements: [
        {
          type: "rating",
          name: "At what score would you want your anger to be at in most situations?",
          visibleIf:
            "{On a scale of 1-10, how intense is usually your anger?} >= 6",
          rateMax: 10,
        },
      ],
    },
    {
      name: "page20",
      elements: [
        {
          type: "text",
          name: "What are the situations that usually infuriate you?",
        },
      ],
    },
    {
      name: "page21",
      elements: [
        {
          type: "checkbox",
          name: "Do you feel your anger is creating distance or conflict in your relationship(s)?",
          isRequired: true,
          choices: ["Yes", "No"],
        },
      ],
    },
    {
      name: "page22",
      elements: [
        {
          type: "checkbox",
          name: "Would you want to",
          isRequired: true,
          choices: [
            "simply manage your anger",
            "understand your anger, and work on ways to effectively express anger and maintain the relationships?",
          ],
        },
      ],
    },
  ],
  triggers: [
    {
      type: "skip",
      expression:
        "{Do you feel comfortable expressing your anger?} contains 'Yes'",
      gotoName:
        "Growing up, how did you see your parents/family members expressing anger?",
    },
    {
      type: "complete",
      expression: "{Do You Want to Continue Further?} = ['No']",
    },
    {
      type: "complete",
      expression:
        "{On a scale of 1-10, how intense is usually your anger?} <= 5",
    },
    {
      type: "complete",
      expression:
        "{Would you want to} = ['simply manage your anger', 'understand your anger, and work on ways to effectively express anger and maintain the relationships?']",
    },
    {
      type: "skip",
      expression:
        "{Would you want to change the way you respond in anger?} = ['Yes']",
      gotoName: "Would you want to",
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
