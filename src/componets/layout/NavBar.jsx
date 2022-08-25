import styles from './navbar.module.css'
import logo from '../../imgs/costs_logo.png'

import { Link } from 'react-router-dom'

import Container from './Container'

function NavBar() {
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to='/'>
                    <img src={logo} alt="Consts" />
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/projects'>Projetos</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/contact'>Contato</Link >
                    </li>
                    <li className={styles.item}>
                        <Link to='/company'>Compania</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default NavBar;