import Image from 'next/image';

import styles from '../sass/Project.module.scss';
import Icon from './Icon';

function Project({ project }) {
  const { title, src = '/', href = '/', description, repoUrl } = project;

  return (
    <a
      className={styles['project']}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img className={styles['project__image']} src={src} alt="item" />
      <label className={styles['project__label']}>{title}</label>
    </a>
  );
}
export default Project;
