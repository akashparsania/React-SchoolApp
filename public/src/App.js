import logo from './logo.svg';
import './App.css';
import { Footer } from './common/Footer/Footer';
import { Header } from './common/Header/Header'; 
import BeforeLogin from './components/BeforeLogin'
import  AfterLogin  from './components/AfterLogin';
import { connect } from 'react-redux';
import { Loader } from './common/Loader/Loader';
import { appStore } from './store/appStore';
 


function App(props) {

  if(localStorage.token){
    appStore.dispatch({type:'AUT',payload:true})
  }
  const {isLoggedIn,isShowLodder}=props;
  return (
    <div className="App">
      <Header/>
      {isLoggedIn ? <AfterLogin/>:<BeforeLogin/>}
      
      <Footer/>
     {isShowLodder&&<Loader/>}
    </div>
  );
}

App=connect((state)=>{
return {
 isLoggedIn:state.appReducer.isLoggedIn,
 isShowLodder:state.appReducer.isShowLodder
}
})(App)

export default App;
