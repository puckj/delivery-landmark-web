import React from 'react'
import NavBar from '../../components/NavBar/NavBar'

export default function MainScreen({
    history
}) {
    console.log(history);
    return (
        <NavBar history={history} >
            <p>ทดสอบ</p>
        </NavBar>
    )
}
