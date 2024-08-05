import gamestackTexture2Large from '~/assets/netflix-sc2.jpg'; //gamestack-list-large
import gamestackTexture2Placeholder from '~/assets/gamestack-list-placeholder.jpg';
import gamestackTexture2 from '~/assets/netflix-sc2.jpg'; //gamestack-list
import gamestackTextureLarge from '~/assets/netflix-sc1.jpg'; //gamestack-login-large
import gamestackTexturePlaceholder from '~/assets/gamestack-login-placeholder.jpg';
import gamestackTexture from '~/assets/netflix-sc1.jpg'; // gamestack-login
import madadgarTextureLarge from '~/assets/madadgar-s1.png'; //gamestack-login-large
import madadgarTexturePlaceholder from '~/assets/gamestack-login-placeholder.jpg';
import madadgarTexture from '~/assets/madadgar-s1.png'; // gamestack-login
import madadgarTexture2Large from '~/assets/madadgar-s2.jpg'; //gamestack-login-large
import madadgarTexture2Placeholder from '~/assets/gamestack-login-placeholder.jpg';
import madadgarTexture2 from '~/assets/madadgar-s2.jpg'; // gamestack-login
import sliceTextureLarge from '~/assets/segula.png'; //slice-app-large.jpg
import sliceTexturePlaceholder from '~/assets/slice-app-placeholder.jpg';
import sliceTexture from '~/assets/segula.png';  // slice-app.jpg 
import sprTextureLarge from '~/assets/homebridge.png'; 
import sprTexturePlaceholder from '~/assets/spr-lesson-builder-dark-placeholder.jpg';
import sprTexture from '~/assets/homebridge.png';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';

// Prefetch draco decoader wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: 'Software Engineer',
    description: `Design portfolio of ${config.name} — a product designer working on web & mobile apps with a focus on motion, experience design, and accessibility.`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree,projectFour, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Homebridge: Foreigner Job & Accommodation Platform"
        description="A platform to provide job and accommodation solutions for foreigners in Korea."
        buttonText="Visit Website" // View Project
        buttonLink="https://home-bridge-website.vercel.app/" //  /projects/smart-sparrow
        model={{
          type: 'laptop',
          alt: 'Homebridge',
          textures: [
            {
              srcSet: `${sprTexture} 1280w, ${sprTextureLarge} 2560w`,
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Netflix Clone App"
        description="Design and development for a Movie Streaming app built in Flutter"
        buttonText="View Project"
        buttonLink="https://github.com/arshan-alee/Netflix-Clone-Mobile-App" //https://gamestack.hamishw.com
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: `${gamestackTexture} 375w, ${gamestackTextureLarge} 750w`,
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: `${gamestackTexture2} 375w, ${gamestackTexture2Large} 750w`,
              placeholder: gamestackTexture2Placeholder,
            }
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Segula Vacations"
        description="Frontend designed for enabling rental bookings and managing check-ins and check-outs."
        buttonText="View project"
        buttonLink="https://segula-vacations.vercel.app/" // /projects/slice
        model={{
          type: 'laptop',
          alt: 'Segula Vacation', // Annotating a biomedical image in the Slice app
          textures: [
            {
              srcSet: `${sliceTexture} 800w, ${sliceTextureLarge} 1920w`,
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-4"
        alternate
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={4}
        title="Madadgar-Hath App"
        description="A platform to connect trustworthy labor and housekeeping service provider built in Flutter"
        buttonText="View Project"
        buttonLink="https://github.com/arshan-alee/Madadgar-Hath-Mobile-App" //https://gamestack.hamishw.com
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: `${madadgarTexture} 375w, ${madadgarTextureLarge} 750w`,
              placeholder: madadgarTexturePlaceholder,
            },
            {
              srcSet: `${madadgarTexture2} 375w, ${madadgarTexture2Large} 750w`,
              placeholder: madadgarTexture2Placeholder,
            }
          ],
        }}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
