import './App.css';
import Main from './components/Main';
import Footer from './components/Footer';
import Header from './components/Header';
import Courseitem from './components/course/Courseitem';
import CourseListCard from './components/course/CourseListCard';
import Library from './components/step01/Library';

/* function Header() {
  return(
    <header>
    <h2>Header</h2>
    </header>
  );
}
function Main() {
  return(
    <main>
      <Counter />
    </main>
  );
}
function Footer() {
  return(
    <footer>
    <h2>Footer</h2>
    </footer>
  );
}
//파스칼 케이스 사용해야 한다.(첫글자 대문자 단어 첫글자 대문자)
function Counter() {
  return(
    <button>Counter</button>
    
  );
}*/

// 리액트에서는 class 예약어이기 때문에 사용 못하고,
// class 대신 className 이라고 사용한다.
function App() {
  return (
    <div>
  {/* <main>
    <Header />
   <Main/>
   <Footer /> 
   <Footer /> 
    <CourseListCard />
   

   
   </main> */}
    <Library />
</div>
  );
}

export default App;
