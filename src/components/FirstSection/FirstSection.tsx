import React, { FC } from "react";
import Image from "next/image";
import cn from "classnames";
import styles from "@/components/FirstSection/FirstSection.module.scss";

const FirstSection: FC = () => {
  return (
    <section className="flex flex-col px-8">
      <div className={styles.firstSection}>
        <div className={styles.container}>
          <div className={styles.left}>
            <p>
              Make Money <br />
              Smart: <span>JOIN</span> the <span>SEEDSTARTER</span> Revolution!
            </p>
            <div className={styles["btn-group"]}>
              <a href="#" className="btn-link">
                Secured Token Offering
              </a>
              <a href="#" className="btn-link btn-link--inverse">
                Contact
              </a>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <Image src="/engine.png" alt="engine" width={718} height={694} />
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles["bottom-item"]}>
          <span>Powered By:</span>
          <Image
            src="/bnb_chain_logo.png"
            alt="bnb chain"
            width={130}
            height={20}
          />
        </div>
        <div className={styles["bottom-item"]}>
          <span>Audited By:</span>
          <Image
            src="/audit.png"
            alt="audit by hacken"
            width={130}
            height={15}
          />
        </div>
      </div>
    </section>
  );
};

export { FirstSection };
