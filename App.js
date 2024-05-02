import "./styles.css";
import {useState} from "react"
export default function App() {
  return (
    <div className="App">
      <FlashCards />
    </div>
  );
}

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript"
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components"
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX"
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props"
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook"
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element"
  }
];

function FlashCards() {
  const [ques,ans]= useState()
  // function clickHandler(){
  //   ans("answer")
  // }
  
  return <div className="flashcards">
    {questions.map((any)=><div  key={any.id} onClick={()=>ans(any.id)} className={ques==any.id ? "selected" : ""}> {/* consition explained below */}
      {/* now ans(any.id) will set ques to id of that question which is clicked */}
      {ques==any.id ? any.answer : any.question}
      {/* the above will make sure if ques is equal to id of the question clicked 
      and ques being the id of question clicked
      it will display answer for the questoin clicked others will have questions as per condition says
      only for the one clicked the above statement of ques==id would be true
      others would display else condition */}
    {/* {any.question} */}
    {/* {ques} */}
    {/* comment out above and see the question u click id of that will be printed */}
    </div>)}
    {/* <div onClick={clickHandler}>{ques}</div> */}
  </div>;

}
