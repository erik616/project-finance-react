import { Link } from 'react-router-dom'

import styles from './linkbuttton.module.css'

function LinkButtom({ to, text }) {
    return (
        <Link className={styles.btn} to={to}>{text}</Link>
    )
}

export default LinkButtom