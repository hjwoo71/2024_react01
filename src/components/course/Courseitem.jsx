function Courseitem({ img , title, description}) {
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
/* function Courseitem(props) {
    return (
        <article className="course">
            <img className="course__img" src={props.img} alt="" style={{ width: "100px"}}/>
            <div className="course__body">
                <div className="course__title">{props.title}</div>
                <div className="course__description">{props.description}</div>
            </div>
        </article>
                      
    );
} */
export default Courseitem;