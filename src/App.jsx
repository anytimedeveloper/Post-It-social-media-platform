import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Sidebar from './Components/Sidebar';
import PostListProvider from './store/PostListStore';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import message from './assets/message.gif';

function App() {
  let [selectedTab, setSelectedTab] = useState('Home');

  return (
    <PostListProvider>
      <div className="appcontainer">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="content">
          <Header />
          <div className="imageshow">
            <div className='flexing1' >
              <Outlet />
            </div>
            <div className='flexing2' >
              <img src={message} alt="messages" className="gif" />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
