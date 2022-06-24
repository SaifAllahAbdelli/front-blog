import React from "react";

import styles from "./clientfooter.module.css";

function ClientFooter() {
  const year = new Date().getFullYear();
  return (
    <div
      className={`d-flex justify-content-center align-items-center ${styles.container}`}
    >
      <p>©</p>
      <span className="mx-1">
        <a
          href="https://www.adn-expertise.fr/"
          target="_blank"
          rel="noreferrer"
        >
          ADN Expertise
        </a>
      </span>
      <p>{year}</p>
    </div>
  );
}

export default ClientFooter;
