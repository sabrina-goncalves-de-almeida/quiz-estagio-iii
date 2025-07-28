import styles from "./TextQuestions.module.css";

function TextQuestions(){
    return(
        <>
            <div className={styles.textContainer}>
                <div className={styles.textBox}>
                    (Enem 2022) Uma cozinheira produz docinhos especiais por encomenda. Usando uma receita-base de massa, ela prepara uma porção, com a qual produz 50 docinhos maciços de formato esférico, com 2 cm de diâmetro. Um cliente encomenda 150 desses docinhos, mas pede que cada um tenha formato esférico com 4 cm de diâmetro. A cozinheira pretende preparar o número exato de porções da receita-base de massa necessário para produzir os docinhos dessa encomenda.

                    Quantas porções da receita-base de massa ela deve preparar para atender esse cliente?
                </div>
            </div>
        </>
    );
}

export default TextQuestions;
