import logo from './logo.svg';
import './App.css';
import Header from './component/header';
import SideBar from './component/sidebar';
import ListItem from './component/ListItem'
import Dashbord from './component/dashbord'
import FolderItem from './component/FolderItem'

import { Flexwrapper, MainWrapper } from './style'

function App() {
  return (
    <div className="App">
      <Header />
      <Flexwrapper>
        <SideBar />
        <MainWrapper>
          <Dashbord />
          <ListItem />
          <br/><br/>
          <FolderItem />
        </MainWrapper>
      </Flexwrapper>
    </div>
  );
}

export default App;
