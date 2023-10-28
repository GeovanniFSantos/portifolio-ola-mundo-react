import Botao from '../Botao'
import './Formulario.css'



const Formulario = ({ servico, data, horario }) => {


    return (
        <section className='formulario-container'>
            <form className='formulario'>
                <h2>Agende Seu horário</h2>
                <div className='campo'>

                    <label id='servico' >Serviço</label>
                    <input type='text' value={servico} placeholder="Digite o tipo de Serviço...."></input>

                    <label id='data'>Date</label>
                    <input type='date' value={data}></input>

                    <label id='horario'>Horário</label>
                    <input type='time' value={horario}></input>

                </div>
                <Botao >
                    Agendar
                </Botao>
            </form>
        </section>
    )
}

export default Formulario