import { useState } from 'react';
import styles from './careertimeline.module.scss';
import globalStyles from '../../../styles/styles.module.scss';
import FadeInWhenVisible from '../../../lib/components/fade-in-visible';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import useWindowSize from '../../../lib/hooks/window-size';

export const CareerTimeline = () => {
  const careerInfo = [
    {
      company: "oasis cc",
      title: "Volunteer Web Developer",
      date: "2015",
      comment: "Designed and developed web page by html/php for oasis community centre in Cairo within an international student volunteer team.",
      state: useState(false),
    },
    {
      company: "thinkplace",
      title: "Digital Data Analyst Intern",
      comment: "Collab with ANU school of pyschology, produced the individual BI insight analysis machine learning project for federal goverment policy plan demo",
      date: "2018",
      state: useState(false),
    },
    {
      company: "appen",
      title: "Associate AI Data Collection Specialist",
      comment: "Worked for languaged-related express ML crowdsouring data collection projects of big co chatbot, smart automobile, computer vision, configuring and managing the ETL process and automation tool developments." ,
      date: "2019",
      state: useState(false),
    },
    {
      company: "_nology.io",
      title: "Junior Software Developer",
      comment: "Frontend and software development for client business after upskilling",
      date: "2021",
      state: useState(false),
    },
    {
      company: "Accenture",
      title: "Full Stack Developer",
      comment: "Backend Java API and Frontend React Development for Codeless Automation Framework",
      date: "2021",
      state: useState(false),
    }
  ]

  const isMobile = useWindowSize();

  const careerInfoComponent = careerInfo.map((career) => {
    return (
      <div className={styles.career} key={career.company}>
        <div className={`${globalStyles.annotationStyle} ${styles.company}`}>{career.company}</div>
        <div className={styles.lineWrapper}>
          { !career?.first ? (
            <div className={styles.line} />
          )
          : (
            <div className={styles.fill} />
          )}
          
          <FadeInWhenVisible hover>
            <div className={styles.circle} onMouseOver={() => career.state[1](true)} onMouseLeave={() => career.state[1](false)} >
              { career.state[0] && (
                <div className={styles.comment}>
                  <div className={`${globalStyles.annotationStyle} ${styles.title}`} >{ career.title }</div>
                  { career.comment }
                </div>
              )}
            </div>
          </FadeInWhenVisible>
          <div className={styles.line} />
        </div>
        <div className={`${globalStyles.annotationStyle} ${styles.date}`}>{career.date}</div>
      </div>
    )
  })

  return (
    <div className={styles.timelineWrapper}>
      <div className={styles.timeline}>
      { isMobile && (
        <div className={`${globalStyles.infoStyle} ${styles.info}`}><BsFillInfoCircleFill /><span>tap for more info</span></div>
      )}
        { careerInfoComponent }
        <div className={styles.line} />
        <div className={styles.arrow} />
      </div>
      { !isMobile && (
        <div className={`${globalStyles.infoStyle} ${styles.info}`}><BsFillInfoCircleFill /><span>hover for more info</span></div>
      )}
    </div>
  )
}

export default CareerTimeline;
