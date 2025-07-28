import { useEffect, useState } from "react";
import Questions from "../../components/Questions";
import TextQuestions from "../../components/TextQuestion";
import api from "../../services/api";

function Home() {
  const [questions, setQuestions] = useState([])
  console.log(questions)

  async function getQuestions() {

    const questionsFromApi = await api.get('/exams/2020/questions/1');

    setQuestions(questionsFromApi.data);
    
  }

  useEffect(()=>{
    getQuestions();
  },[])

  return (
    <>
      <TextQuestions textQuestion={questions.context}/>
      <Questions answers={questions.alternatives}/>
    </>
  );
}

export default Home;
