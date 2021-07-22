import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import styles from "../../../styles/Nav.module.scss";
import btnStyles from "../../../styles/Buttons.module.scss";
import logo from "../../../public/images/labs196_logo_black.svg";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(!isOpen);
  const handleClickAway = () => {
    setIsOpen(false);
  };

  return (
    <>
      <ClickAwayListener onClickAway={handleClickAway}>
        <header className={styles.header}>
          <nav className={styles.navbar}>
            <Link href="/">
              <a className={styles.navlogo}>
                {" "}
                <Image src={logo} alt="Labs196 logo" />
              </a>
            </Link>
            <Link href="/programs#accelerator-form" scroll={false}>
              <a className={btnStyles.navApplyBtn}>Apply Now</a>
            </Link>
            <Link href="/" scroll={false}>
              <a className={btnStyles.navApplyBtn}>Learn More</a>
            </Link>

            {/* Start of Nav Menu List Items */}
            <ul
              className={
                isOpen === false
                  ? styles.navmenu
                  : styles.navmenu + " " + styles.active
              }
            >
              <li className={styles.navitem}>
                <Link
                  href="/"
                  className={
                    isOpen === false
                      ? styles.navlink
                      : styles.navlink + " " + styles.active
                  }
                  onClick={openMenu}
                >
                  Home
                </Link>
              </li>
              <li className={styles.navitem}>
                <Link
                  href="/programs"
                  className={
                    isOpen === false
                      ? styles.navlink
                      : styles.navlink + " " + styles.active
                  }
                  onClick={openMenu}
                >
                  Programs
                </Link>
              </li>
              <li className={styles.navitem}>
                <Link
                  href="/rewards"
                  className={
                    isOpen === false
                      ? styles.navlink
                      : styles.navlink + " " + styles.active
                  }
                  onClick={openMenu}
                >
                  Rewards
                </Link>
              </li>
              <li className={styles.navitem}>
                <Link
                  href="/about"
                  className={
                    isOpen === false
                      ? styles.navlink
                      : styles.navlink + " " + styles.active
                  }
                  onClick={openMenu}
                >
                  About Us
                </Link>
              </li>
            </ul>

            <a
              className={
                isOpen === false
                  ? styles.hamburger
                  : styles.hamburger + " " + styles.active
              }
              onClick={openMenu}
            >
              <span className={styles.bar}></span>
              <span className={styles.bar}></span>
              <span className={styles.bar}></span>
            </a>
          </nav>
        </header>
      </ClickAwayListener>
    </>
  );
}
