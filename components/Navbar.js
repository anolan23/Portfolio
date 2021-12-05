import Link from 'next/link';
import styles from '../sass/Navbar.module.scss';
import Icon from './Icon';

function Navbar() {
  return (
    <header className={styles['navbar']}>
      <Link href="/">
        <a className={styles['navbar__logo']}>Aaron Nolan</a>
      </Link>
      <nav className={styles['navbar__nav']}>
        <ul className={styles['navbar__nav__list']}>
          <li className={styles['navbar__nav__list__item']}>
            <Link href="/">
              <a>Projects</a>
            </Link>
          </li>
          <li className={styles['navbar__nav__list__item']}>
            <Link href="/">
              <a>Blog</a>
            </Link>
          </li>
          <li className={styles['navbar__nav__list__item']}>
            <Icon
              className={styles['navbar__nav__list__item__icon']}
              icon="/sprites.svg#icon-moon-filled"
            />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
