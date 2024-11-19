import Courseitem from "./Courseitem";

 function CourseListCard() {
    return (
    <>
        <div class="card">
			<div class="card__header">강의 목록</div>
      <div> 
            <Courseitem img="./img/coffee-blue.jpg" title="입문자를 위한, HTML&CSS 웹 개발 입문" description="웹 개발에 필요한 기본 지식을 배웁니다."/> <hr/>
            <Courseitem img="./img/mysql.png" title="입문자를 위한, MySQL 입문" description="MySQL 기본 지식을 배웁니다."/> <hr/>
            <Courseitem img="./img/springboot.png" title="입문자를 위한, Spring Boot 개발 입문" description="Spring Boot 개발에 필요한 기본 지식을 배웁니다."/> <hr/>
            
        </div>
      </div>  
    </>
    );
} 

    
export default CourseListCard;