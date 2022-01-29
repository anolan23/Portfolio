import Image from 'next/image';

import styles from '../sass/Project.module.scss';
import Icon from './Icon';

function Project({ project }) {
  const { title, src = '/', href, description, repoUrl } = project;

  return (
    <div
      className={styles['project']}
      onClick={() => {
        if (typeof window !== 'undefined') {
          if (!href) return;
          window.open(href, '_blank');
        }
      }}
    >
      <img className={styles['project__image']} src={src} alt="item" />
      <label className={styles['project__label']}>{title}</label>
      {repoUrl ? (
        <Icon
          icon="/sprites.svg/#icon-github"
          className={styles['project__icon']}
          onClick={(e) => {
            e.stopPropagation();
            if (typeof window !== 'undefined') {
              window.open(repoUrl, '_blank');
            }
          }}
        />
      ) : null}
    </div>
  );
}
export default Project;
