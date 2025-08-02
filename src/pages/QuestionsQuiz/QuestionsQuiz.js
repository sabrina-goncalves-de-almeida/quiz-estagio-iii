import { useEffect, useState } from "react";
import api from "../../services/api";
import TextQuestion from "../../components/TextQuestion";
import Questions from "../../components/Questions";
// import styles from './QuestionsQuiz.module.css';

function QuestionsQuiz(){

    const [questions, setQuestions] = useState([]);

    async function getQuestions() {

        const questionsFromApi = await api.get('/exams/2020/questions/1');

        setQuestions(questionsFromApi.data);
        
    }

    useEffect(()=>{
        getQuestions();
    },[])

    
    return(
        <>
            <TextQuestion textQuestion={questions.context}/>
            {console.log(questions)}
            <Questions answers={questions.alternatives}/>
        </>
    );
}

export default QuestionsQuiz;
