import { useState, useEffect } from 'react'

import styles from './message.module.css'

function Message({ type, mensg }) {

    const [visible, setVisible] = useState(false)

    useEffect(() => {
       function getVisible() {
        if(!mensg) {
            setVisible(false)
            return
        }
        
        setVisible(true)

        let timer = setTimeout(() => {
            setVisible(false)
        }, 3000)

        return () => clearTimeout(timer)
    }

    getVisible()
        
    }, [mensg])

    return (
        <>
            {visible && (
                <div className={`${styles.msg} ${styles[type]}`}>
                    {mensg}
                </div>
            )}
        </>
    )
}

export default Message