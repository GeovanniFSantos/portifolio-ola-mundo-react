import "./Menu.css"
import MenuLink from "../MenuLink/MenuLink.js";

function Menu() {
    return (
        <header>
            <nav className='navegacao'>
                <MenuLink to="/">Início</MenuLink>
                <MenuLink to="/sobremim">Sobre Mim</MenuLink>
                <MenuLink to="/agendamento">Agendamento</MenuLink>
            </nav>
        </header>
    )
}


export default Menu