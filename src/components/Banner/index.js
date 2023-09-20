import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png';

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>Olá, Dev!</h1>
                <p className="paragrafo">Boas vindas ao meu espaço pessoal! Eu sou Geovanni Santos, Desenvolvedor Full Stack. ;)</p>
            </div>
            <div className={styles.imagens}>

                <img className={styles.circuloColorido}
                    src={circuloColorido}
                    alt=""
                    aria-hidden={true}
                />

                <img className={styles.minhaFoto}
                    src="https://github.com/geovannifsantos.png"
                    alt="Foto do criador da pagina"
                />

            </div>
        </div>
    )
}
