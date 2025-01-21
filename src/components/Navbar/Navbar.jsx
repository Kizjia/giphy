import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.scss';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? `${styles.navItem} ${styles.active}` : styles.navItem
        }
      >
        Search
      </NavLink>
      <NavLink
        to="/random"
        className={({ isActive }) =>
          isActive ? `${styles.navItem} ${styles.active}` : styles.navItem
        }
      >
        Random
      </NavLink>
      <NavLink
        to="/trend"
        className={({ isActive }) =>
          isActive ? `${styles.navItem} ${styles.active}` : styles.navItem
        }
      >
        Trend
      </NavLink>
    </nav>
  );
}
