import React from 'react';

interface TabProps {
  title: string;
  active: boolean;
  onClick: () => void;
}

const Tab: React.FC<TabProps> = ({ title, active, onClick }) => {
  return (
    <button
      className={`nav-link ${active ? 'active' : ''}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Tab;