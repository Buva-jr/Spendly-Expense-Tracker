import DashBoard from "./pages/DashBoard";
import Login from "./pages/Login";
import { useState } from "react";
import SlideBar from "./components/SlideBar";
import AddTransaction from "./pages/AddTransaction"
import History from "./pages/History"
import Budget from "./pages/Budget"
import { TransactionProvider } from "./context/TransactionContext";


function App(){

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activePage, setActivePage] = useState('dashboard');

  return(
    <TransactionProvider>
    <>
    {isLoggedIn ?(
      <>
      <SlideBar activePage={activePage} setActivePage={setActivePage} />
      {activePage == 'dashboard' ? <DashBoard /> :
      activePage == 'add' ? <AddTransaction /> :
      activePage == 'history' ? <History /> :
      activePage == 'budget' ? <Budget /> : null}
      </>
    ): ( 
      <>
    <Login onLogin={()=> setIsLoggedIn(true)} />
      </>
    )} 
     </>
    </TransactionProvider>
    );
}

export default App