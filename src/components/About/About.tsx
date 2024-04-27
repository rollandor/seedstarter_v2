import classNames from "classnames";
import React, { FC } from "react";

import styles from "@/components/About/About.module.scss";

export const About: FC = () => {
  return (
    <section className="flex flex-col bg-white">
      <div className={styles["about"]}>
        <div className={styles["about-left"]}>
          <h1>About</h1>
          <p>
            The SeedStarter DAO offers an innovative approach to venture funding
            by creating a closed investment community in the form of a
            decentralized autonomous organization (DAO), designed to provide
            participants with the opportunity to explore the market for crypto
            ideas and gain access to closed early investments on exclusive terms
            of a major fund 
            <br />
            <br />
            We providing solution with no mediators, aimed to
            streamline the process of connecting innovative ideas with private
            investor capital. This direct interaction foster greater efficiency
            and transparency in the investment process, benefiting both
            entrepreneurs and investors alike.
          </p>
        </div>
        <div className={styles["about-right"]}></div>
      </div>
    </section>
  );
};
