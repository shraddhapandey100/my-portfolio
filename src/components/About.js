import React from "react";
import styles from '../css/About.css';

const About = () => {
  return (
    <div name="about" className={styles.aboutContainer}>
      <div className={styles.contentContainer}>
        <div className="pb-8">
          <p className={styles.title}>About</p>
        </div>

        <p className={styles.paragraph}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius,
          deserunt illum mollitia officiis qui exercitationem perferendis neque
          quasi a recusandae necessitatibus tempora iusto! Blanditiis error
          iste, totam fugiat recusandae rerum laborum perferendis molestiae
          aperiam asperiores nemo. Magni dolor maxime debitis vitae, eaque hic
          ab mollitia voluptatibus, a nostrum eveniet laborum!
        </p>

        <br />

        <p className={styles.paragraph}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
          pariatur, vel similique sint, nobis aspernatur ut praesentium
          explicabo ipsam aliquid quasi laboriosam et culpa possimus repudiandae
          quisquam ullam maiores ab unde. Fugiat odio mollitia nemo alias.
          Commodi facilis atque nulla vero voluptatem explicabo. Quibusdam,
          magni quo! Eum cupiditate debitis labore.
        </p>
      </div>
    </div>
  );
};

export default About;
