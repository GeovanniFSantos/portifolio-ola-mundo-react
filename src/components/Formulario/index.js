import Botao from '../Botao'
import './Formulario.css'


const Formulario = ({ aoCadastrar, times }) => {

    return (
        <section className='formulario-container'>
            <form className='formulario'>
                <h2>Agende Seu horário</h2>
                <div className='campo'>
                    <label >Serviço</label>
                    <input type='text'></input>
                    <label >Date</label>
                    <input type='date'></input>
                    <label >Horário</label>
                    <input type='time'></input>
                </div>
                <Botao>
                    Agendar
                </Botao>
            </form>
        </section>
    )
}

export default Formulario