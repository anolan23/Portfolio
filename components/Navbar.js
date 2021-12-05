import Link from 'next/link';
import styles from '../sass/Navbar.module.scss';
import Icon from './Icon';
import { useIsDark } from '../context/theme';

function Navbar() {
  const [isDark, setIsDark] = useIsDark();

  return (
    <header className={styles['navbar']}>
      <Link href="/">
        <a className={styles['navbar__logo']}>Aaron Nolan</a>
      </Link>
      <nav className={styles['navbar__nav']}>
        <ul className={styles['navbar__nav__list']}>
          <li className={styles['navbar__nav__list__item']}>
            <Link href="/">
              <a className="link">Projects</a>
            </Link>
          </li>
          <li className={styles['navbar__nav__list__item']}>
            <Link href="/">
              <a className="link">Blog</a>
            </Link>
          </li>
          <li className={styles['navbar__nav__list__item']}>
            <Icon
              className={styles['navbar__nav__list__item__icon']}
              icon="/sprites.svg#icon-moon-filled"
              onClick={() => {
                const current = isDark ? 'dark' : 'light';
                const theme = isDark ? 'light' : 'dark';
                document.body.classList.add(theme);
                document.body.classList.remove(current);
                setIsDark(!isDark);
              }}
            />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
