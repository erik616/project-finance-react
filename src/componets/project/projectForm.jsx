import { useEffect, useState } from 'react'

import { API_URL } from '../config'

import styles from './projectform.module.css'
import Input from '../form/input'
import Select from '../form/select'
import Submit from '../form/submit'


function ProjectForm({ handleSubmit, btnText, projectData }) {

    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || {})

    useEffect(() => {
        function getFechSetCategories() {
            fetch(`${API_URL}/categories`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then((resp) => resp.json())
                .then((data) => {
                    setCategories(data)
                })
                .catch(err => console.log(err))
        }

        getFechSetCategories();
    }, [])

    const submit = (e) => {
        e.preventDefault()
        console.log(project)
        handleSubmit(project)
    }

    function handleChange(e) {
        setProject({ ...project, [e.target.name]: e.target.value })
    }

    function handleCategory(e) {
        setProject({
            ...project, category: {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text,
            },
        })
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input
                type='text'
                text='Nome do Projeto'
                name='nome'
                id='nome'
                placeholder="Insira o nome do projeto"
                handleOnchange={handleChange}
                value={project.nome ? project.name : ''}
            />
            <Input
                type='number'
                text='Orçamento do Projeto'
                name='budget'
                id='budget'
                placeholder="Insira o orçamento total"
                handleOnchange={handleChange}
                value={project.budget ? project.budget : ''}
            />
            <Select
                name='categorie_id'
                text='Selecione a categoria'
                options={categories}
                handleOnchange={handleCategory}
                value={project.category ? project.category.id : ''}
            />

            <Submit text={btnText} />
        </form>
    )
}

export default ProjectForm