import { Fragment } from 'react'
import Body from './components/body/Body';
import Footer from './components/footer/footer';
import Header from './components/Header/Header';
import Nabar from './components/NavBar/NavBar';
function App() {

 
  return (
    <Fragment>
      <Nabar/>
      
      <Header/>
      <Body/>
      <Footer/>

    </Fragment>
  );
}

export default App;
