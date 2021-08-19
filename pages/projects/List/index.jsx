import Link from 'next/link';
import globalStyles from '../../../styles/styles.module.scss';
import styles from './listproject.module.scss';

const ulproject = [
    {
        name: "mothdx",
        description: "nology LIMS client project"
    },
    {
        name: "googlebook",
        description: "nology frontend project"
    },
    {
        name: "morsedecoder",
        description: "nology frontend project"
    },
    {
        name: "calculator",
        description: "nology frontend project"
    },
    {
        name: "raiden",
        description: "uni android project"
    }
]

export const ListProject = () => {
  return (
    <div className={styles.listWrapper}>
      <ul className={`${styles.list} ${globalStyles.contentPadding}`}>
        { ulproject.map((project) => (
        <li key={project.name} >
          <Link href={`/projects/${project.name}`}>
            <a className={`${globalStyles.subtitleStyle} ${styles.listItem}`}>
              {project.name}
            </a>
          </Link>
          <br />
          <small className={globalStyles.annotationStyle}>
            {project.description}
          </small>
          <br/>
        </li>
        ))}
        <li key="puzzle" >
          <Link href="https://github.com/panteneyoo/JavaPuzzleGameUni">
            <a className={`${globalStyles.subtitleStyle} ${styles.listItem}`}>
              iq steps puzzle 
            </a>
          </Link>
          <br />
          <small className={globalStyles.annotationStyle}>
            uni javafx project
          </small>
        </li>
      </ul>
    </div>
  )
}

export default ListProject;