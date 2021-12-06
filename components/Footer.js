import Link from 'next/link';
import styles from '../sass/Footer.module.scss';

function Footer() {
  return (
    <footer className={styles['footer']}>
      <nav className={styles['footer__nav']}>
        <ul className={styles['footer__nav__list']}>
          <li className={styles['footer__nav__list__item']}>
            <Link href="/">
              <a>Projects</a>
            </Link>
          </li>
          <li className={styles['footer__nav__list__item']}>
            <Link href="/">
              <a>Blog</a>
            </Link>
          </li>
          <li className={styles['footer__nav__list__item--copyright']}>
            <Link href="/">
              <a>Aaron Nolan &copy;{new Date().getFullYear()}</a>
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles['footer__contact']}>
        <div className={styles['footer__contact__email']}>
          <span className={styles['footer__contact__email__field']}>
            email:
          </span>
          &nbsp;
          <Link href="/">
            <a className={styles['footer__contact__email__value']}>
              aaron.nolan24@gmail.com
            </a>
          </Link>
        </div>
        <Link href="/">
          <a className={styles['footer__contact__twitter']}>Twitter</a>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
