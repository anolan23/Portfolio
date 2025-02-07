import Head from 'next/head';
import Project from '../../components/Project';

import styles from '../../sass/pages/Projects.module.scss';

function Projects() {
  const projects = [
    {
      title: 'Shoppingify',
      src: '/shoppingify.png',
      description: 'Shopping list tracker',
      href: 'https://shoppingify-aaron.herokuapp.com/dashboard',
      repoUrl: 'https://github.com/anolan23/shoppingify',
    },
    {
      title: 'chat-app',
      src: '/chat-app.jpg',
      description: 'Chat app',
      href: 'https://chat-app-aaron.herokuapp.com/channels/1',
      repoUrl: 'https://github.com/anolan23/chat-app',
    },
    {
      title: 'my-unsplash',
      src: '/my-unsplash.jpg',
      description: 'Unsplash replica',
      href: 'https://aaron-my-unsplash.herokuapp.com/',
      repoUrl: 'https://github.com/anolan23/my-unsplash',
    },
    {
      title: 'Yesla',
      src: '/yesla.jpg',
      description: 'Copy of Telsa site',
      href: 'https://yesla.vercel.app',
      repoUrl: 'https://github.com/anolan23/yesla',
    },

    {
      title: 'auth',
      src: '/auth.png',
      description: 'Auth app',
      href: 'https://aaron-auth-app.herokuapp.com/signup',
      repoUrl: 'https://github.com/anolan23/auth',
    },
    {
      title: 'twitleague',
      src: '/twit.png',
      description: 'Social media',
      href: 'https://twitleague-next-js.vercel.app',
      repoUrl: 'https://github.com/anolan23/twitleagueNextJS',
    },

    {
      title: 'CatWiki',
      src: '/cat-wiki.jpg',
      description: 'Cat breeds wikipedia',
      href: 'https://aaron-cat-wiki.herokuapp.com/',
      repoUrl: 'https://github.com/anolan23/CatWiki',
    },
    {
      title: 'CrowdCoin',
      src: '/crowdcoin.png',
      description: 'Decentralized Kickstarter',
      href: 'https://crowd-coin-almhd4ydx-anolan23.vercel.app/',
      repoUrl: 'https://github.com/anolan23/crowd-coin',
    },

    {
      title: 'Mybnb',
      src: '/mybnb.jpg',
      description: 'Decentralized Airbnb F/E',
      href: null,
    },
    {
      title: 'Nexter',
      src: '/nexter.jpeg',
      description: 'Real estate F/E',
      href: 'https://nexter-ecru.vercel.app',
      repoUrl: 'https://github.com/anolan23/Nexter',
    },
    {
      title: 'Forkify',
      src: '/forkify.jpeg',
      description: 'Bookmark recipes',
      href: 'https://forkify-nine.vercel.app/',
      repoUrl: 'https://github.com/anolan23/Forkify',
    },
    {
      title: 'Trillo',
      src: '/trillo.jpeg',
      description: 'Hotel finder F/E',
      href: 'https://trillo-mu-sable.vercel.app',
      repoUrl: 'https://github.com/anolan23/Trillo',
    },
    {
      title: 'Natours',
      src: '/natours.jpeg',
      description: 'Adventure tours F/E',
      href: 'https://natours-rust-zeta.vercel.app',
      repoUrl: 'https://github.com/anolan23/Natours',
    },
    {
      title: 'image-uploader',
      src: '/image-uploader.png',
      description: 'Drag & drop image uploader',
      href: 'https://aaron-image-uploader.herokuapp.com/',
      repoUrl: 'https://github.com/anolan23/image-uploader',
    },
  ];

  function renderProjects() {
    return projects.map((project, index) => {
      return <Project key={project.title} project={project} />;
    });
  }

  return (
    <div>
      <Head>
        <title>Project Gallery · Aaron Nolan</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className={styles['projects__main']}>
        <h1 className={styles['projects__main__title']}>Project Gallery</h1>
        <section className={styles['projects__main__section']}>
          <div className={styles['projects__main__section__grid']}>
            {renderProjects()}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Projects;
