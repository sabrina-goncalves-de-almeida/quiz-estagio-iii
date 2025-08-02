import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home/Home";
import QuestionsQuiz from "../src/pages/QuestionsQuiz/QuestionsQuiz";
import SelectSubject from "../src/pages/SelectSubject/SelectSubject";

function App(){
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/select-subject' element={<SelectSubject />}/>
                <Route path='/questions-quiz' element={<QuestionsQuiz />}/>
                <Route path='*' element={<h1>Not Found</h1>}/>
            </Routes>
        
        </BrowserRouter>
    );
}

export default App;
