import Image from 'next/image';

import styles from '../sass/Project.module.scss';
import Icon from './Icon';

function Project({ project }) {
  const { title, src = '/', href, description, repoUrl } = project;

  function renderCaption() {
    if (!href) return;
    return (
      <div className={styles['project__caption']}>
        <div className={styles['project__caption__text']}>
          <span className={styles['project__caption__text__title']}>
            {title}
          </span>
          &nbsp;&nbsp;
          <span className={styles['project__caption__text__description']}>
            {description}
          </span>
        </div>
        <div className={styles['project__caption__links']}>
          <a
            className={`${styles['project__caption__demo']} link`}
            href={href}
            target="_blank"
          >
            Demo
          </a>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <a
            className={`${styles['project__caption__demo']} link`}
            href={repoUrl}
            target="_blank"
          >
            Github
          </a>
          &nbsp;&nbsp;
          <Icon
            className={styles['project__icon']}
            icon="/sprites.svg#icon-github"
            href={repoUrl}
          />
        </div>
      </div>
    );
  }
  return (
    <div className={styles['project']}>
      <div className={styles['project__image']}>
        <Image src={src} layout="fill" objectFit="cover" objectPosition="top" />
      </div>
      {renderCaption()}
    </div>
  );
}
export default Project;
