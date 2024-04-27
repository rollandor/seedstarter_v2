import React, { FC } from "react";

import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import { links } from "@/lib/data";
import styles from "./Header.module.scss";

export const Header: FC = () => {
  return (
    <header className={styles["app-header"]}>
      <Image
        className={styles["app-header__logo"]}
        src="/logo.png"
        alt="logo"
        width={274}
        height={40}
      />

      <nav className={styles["navbar"]}>
        <ul className={styles["navbar__list"]}>
          {links.map((link) => (
            <Link
              href={link.hash}
              className={styles["navbar__list-item"]}
              key={link.name}
            >
              {link.name}
            </Link>
          ))}
        </ul>

        <a href="#" className={styles["navbar__button"]}>
          Participate
        </a>

        <div className={styles["navbar__vertical-line"]}></div>

        <div className={styles["navbar__social-media"]}>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
      </nav>
    </header>
  );
};
