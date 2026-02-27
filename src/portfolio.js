const header = {
    // all the properties are optional - can be left empty or deleted
    homepage: 'https://I-Dobiro.github.io/Portfolio',
    title: '',
}

const about = {
    // all the properties are optional - can be left empty or deleted
    name: 'Isaac Dobiro',
    role: 'Software Developer',
    picture: 'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png',

    description: 'Full-Stack Developer passionate about creating fast, scalable, and user-focused web applications',
    resume: 'https://example.com',
    social: {
        linkedin: 'https://linkedin.com',
        github: 'https://github.com',
    },
}

const projects = [
    // projects can be added an removed
    // if there are no projects, Projects section won't show up
    {
        name: 'E-Commerce Store',
        description:'',
        stack: ['HTML', 'CSS', 'JavaScript', 'React', 'Typescript', 'Node', 'Express', 'Postgresql (via Neon & Drizzle)'],
        sourceCode: 'https://github.com/I-Dobiro/e-commerce-store',
        livePreview: 'https://e-commerce-store-vw9d.onrender.com/',
        image: '',
    },
    {
        name: 'Bugeting App',
        description: '',
        stack: ['HTML', 'CSS', 'JavaScript', 'React'],
        sourceCode: 'https://github.com',
        livePreview: 'https://github.com',
        image: '',
    },
    {
        name: 'Business Consultancy Website',
        description: '',
        stack: ['HTML', 'CSS', 'Javascript'],
        sourceCode: 'https://github.com',
        livePreview: 'https://github.com',
        image: '',
    },
]

// tech store on render https://techstore-becw.onrender.com/

const skills = [
    // skills can be added or removed
    // if there are no skills, Skills section won't show up
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Express',
    'Node',
    'Git',
    'Tailwind CSS',
    '',

]

const contact = {
    // email is optional - if left empty Contact section won't show up
    email: 'DobiroIsaac@gmail.com',
}

export { header, about, projects, skills, contact }