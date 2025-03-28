
import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFoundPage: React.FC = () => {
    const navigate = useNavigate()

    const redirectToHomePage = () => {
        navigate("/products")
    }

    return (
        <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <h1 style={{ fontSize: '4em' }}>Oops 404!</h1>
            <span style={{ cursor: 'pointer' }} onClick={() => redirectToHomePage()}>
                Homepage
            </span>
            <button onClick={() => redirectToHomePage()}>Products</button>
        </div>
    )
}

export default NotFoundPage
