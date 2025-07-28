import styles from "./TextQuestions.module.css";

function TextQuestions({textQuestion}){
    return(
        <>
            <div className={styles.textContainer}>
                <div className={styles.textBox}>{textQuestion}
                </div>
            </div>
        </>
    );
}

export default TextQuestions;
