import styles from './comp.module.css'

export default function Comp({children, titulo, texto, rotacao}) {
  
    return (
        <div className={styles.container}>
            <h4 className={styles.titulo}>{titulo}</h4>
            <div className={styles.comp_container}>
                {children}
            </div>
            <div>
                <p>{texto}</p>
            </div>
            <div>
                <p><b>Rotação:</b> {rotacao}</p>
            </div>
        </div>
    )
}