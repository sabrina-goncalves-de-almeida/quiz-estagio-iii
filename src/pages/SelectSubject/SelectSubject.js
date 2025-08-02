import { Link } from 'react-router-dom';
// import styles from './SelectSubject.module.css';

function SelectSubject(){
    return(
        <>
            <Link to={"/questions-quiz"}>Question Quiz</Link>
        </>
    );
}

export default SelectSubject;
