import React, { useState } from "react";
import "./App.scss";
import { Provider, useDispatch, useSelector } from "react-redux";
import store, { AppDispatch, RootState } from "./store";
import Tab from "./components/Tab";
import { fetchUsers } from "./store/actions/dataActions";
import 'bootstrap/dist/css/bootstrap.min.css';
import TabOne from "./components/TabOne";
import TabTwo from "./components/TabTwo";
import TabThree from "./components/TabThree";


function App() {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <Provider store={store}>
      <div className="container">
        <nav>
          <div className="nav nav-tabs">
            <Tab
              title="Tab 1"
              active={activeTab === 1}
              onClick={() => setActiveTab(1)}
            />
            <Tab
              title="Tab 2"
              active={activeTab === 2}
              onClick={() => setActiveTab(2)}
            />
            <Tab
              title="Tab 3"
              active={activeTab === 3}
              onClick={() => setActiveTab(3)}
            />
          </div>
        </nav>
        <div className="tab-content">
          {activeTab === 1 && <TabOne />}
          {activeTab === 2 && <TabTwo onNavigate={() => setActiveTab(3)} />}
          {activeTab === 3 && <TabThree />}
        </div>
      </div>
    </Provider>
  );
}

export default App;
