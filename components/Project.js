import Image from 'next/image';

import styles from '../sass/Project.module.scss';

function Project({ project }) {
  const { title, src = '/', href = '/', description } = project;
  return (
    <div className={styles['project']}>
      <div className={styles['project__image']}>
        <Image src={src} layout="fill" objectFit="cover" objectPosition="top" />
      </div>
      <div className={styles['project__caption']}>
        <span className={`${styles['project__caption__title']} link`}>
          {title}
        </span>
        &nbsp;
        <span className={`${styles['project__caption__description']}`}>
          {`- ${description}`}
        </span>
      </div>
    </div>
  );
}
export default Project;
