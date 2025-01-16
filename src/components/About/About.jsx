import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3 style={{color : '#90EE90'}}>Full stack Web developer</h3>
              <p>
              I am full stack developer with knowledge of MERN stack.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3 style={{color : '#90EE90'}}>Data Structures and Algortihms</h3>
              <p>
              I have a strong grasp of solving real-life problems with data structures and algorithms.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3 style={{color : '#90EE90'}}>ML and Blockchain</h3>
              <p>
              I'm passionate about machine learning and blockchain technology, staying updated with the latest trends.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
