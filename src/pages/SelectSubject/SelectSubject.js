import { Link } from 'react-router-dom';
import SubjectSelection from '../../components/SubjectSelection';
// import styles from './SelectSubject.module.css';

function SelectSubject(){
    return(
        <>
            <SubjectSelection />
            <Link to={"/questions-quiz"}>Question Quiz</Link>
        </>
    );
}

export default SelectSubject;
