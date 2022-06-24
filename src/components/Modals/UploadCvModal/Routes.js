import React from "react";
import AboutTheJob from "./components/AboutTheJob/AboutTheJob";

import Contacts from "./components/Contacts/Contacts";
import FullName from "./components/FullName/FullName";
import UploadCV from "./components/UploadCV/UploadCV";

function Routes({ counter }) {
  const switchCounter = () => {
    switch (counter) {
      case 1:
        return <UploadCV />;

      case 2:
        return <FullName />;

      case 3:
        return <Contacts />;

      case 4:
        return <AboutTheJob />;

      case 5:
        return (
          <div className="d-flex justify-content-center align-items-center mt-5 mb-5">
            <h5>Merci pour votre temps et bonne chance. 🤞</h5>
          </div>
        );

      default:
        <UploadCV />;
    }
  };

  return <div>{switchCounter()}</div>;
}

export default Routes;
