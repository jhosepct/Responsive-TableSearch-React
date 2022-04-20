import React from 'react'

function Detail(props) {
    return (
        <div className='detail-container'>
            <article className='media'>
                <figure className='media-left'>
                    <div>
                        {props.code}
                    </div>
                </figure>
                <div className='media-content'>
                    <p>
                        <strong>{props.name}</strong>
                        <br />
                        {props.detail}
                    </p>
                </div>
            </article>
        </div>
    )
}

export default Detail