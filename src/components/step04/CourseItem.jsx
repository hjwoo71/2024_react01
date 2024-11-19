import React from 'react';

function CourseItem({ title, description , img  }) {
    return (
        <article className="course">
            <img className="course__img" src={img} alt="" style={{ width: "100px"}}/>
            <div className="course__body">
                <div className="course__title">{title}</div>
                <div className="course__description">{description}</div>
            </div>
        </article>
                      
    );
}

export default CourseItem;