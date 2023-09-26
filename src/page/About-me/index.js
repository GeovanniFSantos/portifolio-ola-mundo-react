import styles from "./SobreMim.module.css"
import PostModelo from "components/PostModelo"
import fotoCapa from "assets/foto-sobre-mim.png"
import fotoSobreMim from "assets/minha-foto.jpeg"

function AboutMe() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo='Sobre mim....'
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou Geovania!
            </h3>
            <img
                src={fotoSobreMim}
                alt="Foto de Geovania Sobre Mim"
                className={styles.fotoSobreMim}
            />
            <p className={styles.paragrafo}>
                Oi, Tudo bem? Eu sou cabelereira e manicure aqui no (EstúdioGeo). e estou feliz por te ver aqui.
            </p>
            <p className={styles.paragrafo}>
                Minha história como Cabelereira começou na Bahia (BA), quando fiz cursos integrado a cabelo e depilação a cera.
                Eu aprendi durante uma formação de 2 anos. Eu gostava muito de corte de cabelo,
                mas não fazia ideia de que trabalharia com isso hoje.
            </p>
        </PostModelo>
    )
}

export default AboutMe