import React, { useState, useEffect } from 'react'
import axios from "axios"

// import components
import Card from '../components/Card';

function CatList() {
    const [ cats, setCats ] = useState([]);

    useEffect(() => {
        axios.get("https://api.thecatapi.com/v1/images/search?limit=100&order=ASC&api_key=live_bAU3tApuFqxOLdQjT6JM3yuLtSAbv77uvpWqLgpUinRm8zCI0CqVsn2hGqF7mhsi")
            .then((res) => {
                setCats(res.data)
            });
    }, []);

    return (
        <div className='CatList'>
            <div className='List'>
            {
                cats.map((cat) => {
                    return <Card key={ cat.id }
                        url={ cat.url }
                        id={ cat.id }
                    />
                })
            }
            </div>
        </div>
    )
}

export default CatList