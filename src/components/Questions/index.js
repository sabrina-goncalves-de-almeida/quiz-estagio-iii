import styles from "./Questions.module.css";

function Questions({answers}){
    return(
        <>
            <div className={styles.questionsContainer}>
                <div className={styles.question}>
                    a) {answers[0].text} 
                </div>

                <div className={styles.question}>
                   b) {answers[1].text}  
                </div>

                <div className={styles.question}>
                   c) {answers[2].text}
                </div>

                <div className={styles.question}>
                   d) {answers[3].text}
                </div>

                <div className={styles.question}>
                   e) {answers[4].text}
                </div>
            </div>
        </>
    );
}

export default Questions;
