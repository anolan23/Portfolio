import Image from 'next/image';

import styles from '../sass/Project.module.scss';

function Project({ project }) {
  const { title, src = '/', href, description } = project;

  function renderCaption() {
    if (!href) return;
    return (
      <div className={styles['project__caption']}>
        <span className={styles['project__caption__title']} href={href}>
          {title}
        </span>
        <span> | {description} | </span>
        <a className={'link'} href={href}>
          Demo
        </a>
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
