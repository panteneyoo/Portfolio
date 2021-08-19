import { useState } from 'react';
import styles from './tech.module.scss';
import globalStyles from '../../../styles/styles.module.scss';
import FadeInWhenVisible from '../../../lib/components/fade-in-visible';
import useWindowSize from '../../../lib/hooks/window-size';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import Image from 'next/image';

export const Tech = () => {
  const gridItems = [
    {
      label: "frontend stuff",
      tech: [
        {
            imgsrc: "https://img.icons8.com/color/96/000000/react-native.png",
            name: "react",
            state: useState(false),
            comment: "Awesome for quickly prototyping a frontend for small scale projects, experimenting with NextJS now for production builds."
        },
        {
            imgsrc: "https://img.icons8.com/color/96/000000/html-5--v1.png",
            name: "html",
            state: useState(false),
            comment: "One of the foundamental essentials for frontend design"
        },
        {
            imgsrc: "https://img.icons8.com/color/96/000000/sass.png",
            name: "sass",
            state: useState(false),
            comment: "Prettier formatted css as frontend essential"
        }
      ],
    },
    {
      label: "other stuff",
      tech: [
        {
            imgsrc: "https://img.icons8.com/color/96/000000/spring-logo.png",
            name: "spring",
            state: useState(false),
            comment: "Build my own RESTful api to manage the CRUD easier fetching database for the frontend work"
        },
        {
            imgsrc: "https://img.icons8.com/color/96/000000/android-studio--v2.png",
            name: "android studio",
            state: useState(false),
            comment: "My uni Raiden legacy for canvas style mobile app design"
        },
        {
            imgsrc: "https://img.icons8.com/color/96/000000/git.png",
            name: "git",
            state: useState(false),
            comment: "Must-learn VCS to make everything efficient and team-wise",
        },
        {
            imgsrc: "https://img.icons8.com/color/96/000000/jira.png",
            name: "Jira",
            state: useState(false),
            comment: "Agile system where I learnt all my PM ABCs from my last role spamming tickets to other engineers to make things work and resolved"
        }
      ]
    },
    {
      label: "general purpose languages",
      tech: [
        {
            imgsrc: "https://img.icons8.com/color/96/000000/python.png",
            name: "python",
            state: useState(false),
            comment: "My primary go-to language. The best part about python is how easy it is pick up and providing access to powerful data manipulation libraries like pandas, numpy and all ML libs for my uni spec"
        },
        {
            imgsrc: "https://img.icons8.com/color/96/000000/java-coffee-cup-logo.png",
            name: "java",
            state: useState(false),
            comment: "Essential OO language for a huge range of application dev and way faster than python a lot of times"
        },
        {
            imgsrc: "https://img.icons8.com/color/96/000000/javascript.png",
            name: "javascript",
            state: useState(false),
            comment: "Majorly used for my frontend projects dom but definitely can do more stuff with it"
        }
      ]
    },
    {
      label: "to be revised",
      tech: [
        {
            imgsrc: "https://img.icons8.com/color/100/000000/django.png",
            name: "django",
            state: useState(false),
            comment: "Frontend framework used a bit when learning py back in school"
        },
        {
            imgsrc: "https://img.icons8.com/color/96/000000/c-plus-plus-logo.png",
            name: "c++",
            state: useState(false),
            comment: "Where I started my data stucture and algorithm learning back in uni"
        },
        {
            imgsrc: "https://img.icons8.com/color/96/000000/postgreesql.png",
            name: "postgresql",
            state: useState(false),
            comment: "DB queries to pick up again to reinforce my functional dependency knowledge"
        }
      ]
    },
    {
      label: "data stuff",
      tech: [
        {
            imgsrc: "https://img.icons8.com/color/96/000000/tensorflow.png",
            name: "tensorflow",
            state: useState(false),
            comment: "Mother lib of all my NLP or image processing machine learning projects, easy to build CNN/RNN from scratch and interact with various py lib like pandas, nltk"
        },
        {
            imgsrc: "https://img.icons8.com/color/96/000000/mysql-logo.png",
            name: "mysql",
            state: useState(false),
            comment: "Been using sequel queries on mysql to manage complicated relational database from previous crowdsourcing projects for user analysis. Recently used as backend storage for spring JPA repositories"
        },
        {
            imgsrc: "https://img.icons8.com/color/96/000000/firebase.png",
            name: "firebase",
            state: useState(false),
            comment: "My newly learnt clouding data storage from nology training"
        },
        {
            imgsrc: "https://img.icons8.com/color/96/000000/amazon-s3.png",
            name: "amazon S3",
            state: useState(false),
            comment: "Final stop of my previous role ETL work on s3 bucket in replacement of sftp storage"
        }
      ],
    },
    {
      label: "\"interesting\"",
      tech: [
        {
            imgsrc: "https://img.icons8.com/windows/96/000000/r-project.png",
            name: "r",
            state: useState(false),
            comment: "Pick this up a bit in uni to help finance friends and turned out to be good alt for matplotlib"
        },
        {
            imgsrc: "https://img.icons8.com/dusk/64/000000/scala.png",
            name: "scala",
            state: useState(false),
            comment: "next step to dip in functional programming and expolore more data manipulation methods"
        }
      ]
    }
  ]

  const gridComponents = gridItems.map((item) => {
    return (
      <div key={item.label}>
        <div className={globalStyles.subtitleStyle}>{item.label}</div>
        <div className={styles.techWrapper}>
          { item.tech.map((tech) => {
            return (
              <FadeInWhenVisible key={tech.name} hover>
                <div className={styles.techItemWrapper}>
                  { tech.state[0] && (
                    <div className={styles.comment}>
                      {tech.comment}
                    </div>
                  )}
                  <div className={styles.techItem} onMouseEnter={() => tech.state[1](true)} onMouseLeave={() => tech.state[1](false)}>
                    <div className={styles.imageWrapper}>
                      <img
                        src={tech.imgsrc}
                      />
                    </div>
                    <div className={globalStyles.annotationStyle}>{tech.name}</div>
                  </div>
                </div>
              </FadeInWhenVisible>
            )
          })}
        </div>
      </div>
    )
  })

  const isMobile = useWindowSize();

  return (
    <div>
      { isMobile && (
        <div className={`${globalStyles.infoStyle} ${styles.info}`}><BsFillInfoCircleFill /><span>tap for more info</span></div>
      )}
    <div className={styles.techPageWrapper}>
      { gridComponents }
    </div>
    </div>
  )
}

export default Tech;