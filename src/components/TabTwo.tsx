import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { fetchUsers } from "../store/actions/dataActions";

const TabTwo: React.FC<{ onNavigate: () => void }> = ({ onNavigate }) => {
  const dispatch = useDispatch<AppDispatch>();
  const handleClick = () => {
    onNavigate();
    dispatch(fetchUsers());
  };

  return (
    <div className="container">
      <button className="btn btn-primary" onClick={handleClick}>
        Go to Tab 3
      </button>
    </div>
  );
};

export default TabTwo;
