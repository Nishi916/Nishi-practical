import React from "react";

const TabOne : React.FC = () => {
  return (
    <div className="container">
      <h3>Embedded Content</h3>
      <iframe
        id="googleForm"
        title="Google Form"
        width="300"
        height="200"
        src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik"
      ></iframe>
    </div>
  );
};

export default TabOne;
