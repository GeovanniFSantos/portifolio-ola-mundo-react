import AgendamentoModelo from "components/AgendamentoModelo"
import fotoCapa from 'assets/agendamento.jpg'
import Formulario from "components/Formulario"

function Agendamento() {
    return (
        <AgendamentoModelo
            fotoCapa={fotoCapa}
            titulo="Agendamento"
        >
            <Formulario>

            </Formulario>
        </AgendamentoModelo>
    )
}

export default Agendamento