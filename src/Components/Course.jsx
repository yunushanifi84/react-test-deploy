import React from 'react'


function Course({ course }) {
    const { id, title, description, price, link, image } = course;




    return (
        <div className='course'>
            <div>
                <img src={image} height={180} width={200} className='course-image' />
                <p className='course-title'>{title}</p>
                <h5 className='course-desc'>{description}</h5>
                <h3 className='course-price'>{price} ₺</h3>
                <button className='course-link-button' onClick={() => { window.location.href = link }}>Satın almak için tıklayınız.</button>
            </div>

        </div>
    )
}

export default Course