import {Link} from 'react-router-dom'
import styles from '../Nav/Nav.module.css'
export default function Nav(){
    return(
        <nav>
            <ul>
                <li><Link to="/cadastro">Cadastro</Link></li>
                <li><Link to="/grafico">Gráfico</Link></li>
            </ul>
        </nav>
    )
}