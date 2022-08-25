import { useLocation } from "react-router-dom";

import Message from "../layout/message";

function Projects() {

    const location = useLocation()
    let message = ''
    if(location.state) {
        message = location.state.msg
    }

    return (
        <div>
            <h1>Meus Projetos </h1>
            {message && <Message type='sucess' mensg={message} />}

        </div>
    )
}

export default Projects;