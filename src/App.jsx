import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './Button/Button.jsx'
import Student from './Student.jsx'
import UserGreeting from './UserGreeting.jsx'
import UserGreetingTernary from './UserGreetingTernary.jsx'
import List from './List.jsx'

function App() {
  return(
    <>
    <Header/>
    <Food/>
    <UserGreeting isLoggedIn={true} username="Manuel"/>
    <UserGreetingTernary/>
    <UserGreetingTernary isLoggedIn={false} username="Manuel"/>
    <List/>
    <Card/>
    <Button/>
    <Student name="Bob Esponja" age={30} isStudent={true}/>
    <Student name="Patricio" age={42} isStudent={false}/>
    <Student name="Calamardo" age={50} isStudent={false}/>
    <Student name="Arenita" age={27} isStudent={true}/>
    <Student/>
    <Footer/>
    </>
  );
}
export default App
