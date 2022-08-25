import { useNavigate } from 'react-router-dom';
import { API_URL } from '../config';

import styles from './newproject.module.css'
import ProjectForm from '../project/projectForm';

function NewProject() {

    const navigate = useNavigate();

    function creatPost(project) {
        project.cost = 0
        project.services = []

        fetch(`${API_URL}/projects`, {
            method: 'POSt',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(project)
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                navigate(`/projects`, { msg: 'Projeto criado com sucesso!' })
            })
            .catch(err => console.log(err))
    }

    return (
        <div className={styles.newproject_cont}>
            <h1>Criar Projeto </h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={creatPost} btnText='Criar Projeto' />
        </div>
    )
}

export default NewProject;