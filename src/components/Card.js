import React, { useState } from 'react'
import Heart from './Heart'

function Card(props) {
    const [ hoveredBlock, setHoveredBlock ] = useState(false);

    return (
        <div className="Card"
            onMouseEnter={() => setHoveredBlock(true)}
            onMouseLeave={() => setHoveredBlock(false)}
        >
            <div className="Image"
                style={{ 
                    backgroundImage: `url(${ props.url })`
            }}>
                { hoveredBlock 
                &&  
                <Heart 
                    id={ props.id }
                    url={ props.url }
                /> }
            </div>
        </div>
    )
}

export default Card