import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png';
import minhaFoto from "assets/minha-foto.jpeg"

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>Olá!</h1>
                <p className="paragrafo">Boas vindas ao meu espaço pessoal! Eu sou Geovania Almeida, CEO do Studio Geo. ;)</p>
            </div>
            <div className={styles.imagens}>

                <img className={styles.circuloColorido}
                    src={circuloColorido}
                    alt=""
                    aria-hidden={true}
                />

                <img className={styles.minhaFoto}
                    src={minhaFoto}
                    alt="Foto do criador da pagina"
                />

            </div>
        </div>
    )
}
