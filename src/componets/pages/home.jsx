import styles from './home.module.css'
import savings from '../../imgs/savings.svg'
import LinkButtom from '../layout/linkButton';

function Home() {
    return (
        <section className={styles.home_container}>
            <h1>Bem-vindo ao <span>Costs</span></h1>
            <p>Comece a gerenciar os seus projetos agora mesmo!</p>
            <LinkButtom to='/newproject' text='Criar projeto'/>
            <img src={savings} alt="Costs" />

        </section>
    )
}

export default Home;