import React, { useEffect } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import {
    getLandmarkDetail
} from '../../services/services.js'

export default function ReportScreen({
    history
}) {
    useEffect(() => {
        const firstLoad = async () => {
            await getLandmarkDetail(null)
                .then(res => {
                    console.log(res, 'TAG01');
                })
                .catch(err => {
                    console.error(err, 'TAG_ERR');
                })
        }
        firstLoad()
    }, [])
    return (
        <NavBar history={history} >
            <p>report test</p>
        </NavBar>
    )
}
