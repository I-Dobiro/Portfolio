
import uniqid from 'uniqid'
import GitHubIcon from '@mui/icons-material/Github'
import LaunchIcon from '@mui/icons-material/Launch'
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => (
    <div className='project'>

        {project.image && (<img
            src={
                project.image.startsWith("http")
                    ? project.image
                    : `${import.meta.env.BASE_URL}/images/${project.image}`
            }
            alt={`${project.name} screenshot`}
            style={{ width: '100%', objectFit: 'cover' }}
        />
        )}

        <h3>{project.name}</h3>

        <p className='project__description'>{project.description}</p>
        {project.stack && (
            <ul className='project__stack'>
                {project.stack.map((item) => (
                    <li key={uniqid()} className='project__stack-item'>
                        {item}
                    </li>
                ))}
            </ul>
        )}

        {project.sourceCode && (
            <a
                href={project.sourceCode}
                aria-label='source code'
                className='link link--icon'
            >
                <GitHubIcon />
            </a>
        )}

        {project.livePreview && (
            <a
                href={project.livePreview}
                aria-label='live preview'
                className='link link--icon'
            >
                <LaunchIcon />
            </a>
        )}
    </div>
)

export default ProjectContainer
