import React, { cloneElement, useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import { db } from "./configs/firebase_config";
import { collection, getDocs } from "@firebase/firestore";
import QuestionList from "./components/QuestionList";


function App() {
  const [showForm, setShowForm] = useState(0)
  const [questionList, setQuestionLst] = useState([])

  const getData = async()=>{
    const array = []
    const questions = await getDocs(collection(db, "form-data"))
      questions.forEach((doc) => {
      const id = doc.id
      const data = doc.data()
      data["id"] = id
      array.push(data);
    })
    setQuestionLst(array)
    console.log("loop?");
  }

  useEffect(()=>{
    getData()
  },[])


  useEffect(()=>{
    getData()
  },[showForm])



  return (
    <div className="App">
      <header>
      <button onClick={()=>setShowForm(showForm?0:1)}>contact-form</button>
      </header>
      <Form showForm={showForm} setShowForm={setShowForm}/>
      <QuestionList questionList={questionList}/>
    </div>
  );
}

export default App;
