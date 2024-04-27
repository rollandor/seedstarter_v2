import classNames from "classnames";
import React, { FC } from "react";
import Image from "next/image";

import styles from "@/components/About/About.module.scss";

export const About: FC = () => {
  return (
    <section className={styles["about"]}>
      <div className={styles["container"]}>
        <div className={styles["about__info"]}>
          <p>
            <span>SEEDSTARTER -</span>
            <br />
            <strong>decentralized </strong>
            private
            <br />
            investors
            <strong> venture fund</strong>
          </p>
          <ul>
            <li>Fair participation</li>
            <li>Deficit tokenomics</li>
            <li>Decentralized control</li>
          </ul>
        </div>

        <div className={styles["about__main"]}>
          <p>
            <strong>JOIN </strong>
            <span>
              the closed investment <br /> community{" "}
            </span>
            and become a
            <b>
              <span> SEED </span>
            </b>
            <br />
            investor with
            <b>
              <span> SEEDSTARTER</span>
            </b>
          </p>
          <div className={styles["about__main-actions"]}>
            <a
              href="#"
              className={classNames(
                styles["btn-link"],
                styles["btn-link--inverse"]
              )}
            >
              Explore
            </a>
            <a href="#" className={styles["btn-link"]}>
              Participate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
