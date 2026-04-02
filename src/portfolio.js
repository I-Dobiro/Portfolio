const header = {
    homepage: 'https://I-Dobiro.github.io/Portfolio',
    title: '',
}

const about = {
    name: 'Isaac Dobiro',
    role: 'Software Developer',
    picture: 'https://plus.unsplash.com/premium_photo-1714618831065-8e8dadd8d3df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGVjaG5vbG9neSUyMGJhY2tncm91bmQlMjBzb2Z0d2FyZSUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww',
    description: 'Full-Stack Developer passionate about creating fast, scalable, and user-focused web applications',
    resume: '',
    social: {
        linkedin: '',
        github: 'https://github.com/I-Dobiro',
    },
}

const projects = [
    {
        name: 'E-Commerce Store',
        description: 'This is a full-stack e-commerce application built with React for the frontend and Node.js with Express for the backend. The application allows users to browse products, login securely,add products for sale, and add comments. The backend handles user authentication, product management, and order processing. The database is managed using PostgreSQL via Neon and Drizzle, ensuring efficient data storage and retrieval.',
        stack: ['HTML', 'CSS', 'JavaScript', 'Typescript', 'React', 'Node', 'Express', 'Postgresql (via Neon & Drizzle)'],
        sourceCode: 'https://github.com/I-Dobiro/e-commerce-store',
        livePreview: 'https://e-commerce-store-vw9d.onrender.com/',
        image: '',
    },
    {
        name: 'Budgeting App',
        description: '{ Under Construction } I am Currently building a budgeting app to help users manage their finances effectively. The app will allow users to track their income and expenses, set budgets, and visualize their financial data through charts and graphs with AI integrated for financial insights and recommendations for users. I am using HTML, CSS, JavaScript, Next.js for the frontend, and Postgresql (via Neon & Prisma) for the backend database.',
        stack: ['HTML', 'CSS', 'JavaScript', 'Next.js', 'Postgresql (via Neon & Prisma)'],
        // sourceCode: 'https://github.com/I-Dobiro/budgeting-app',
        // livePreview: 'https://budgeting-app-qx8k.onrender.com/',
        image: '',
    },
    {
        name: 'Job Search App',
        description: 'This is a full stack job search application built with React for the frontend and Node.js with Express for the backend. The application allows users to search for jobs, view job details, edit, and delete jobs. The backend handles job listings. The database is managed using PostgreSQL via Neon, ensuring efficient data storage and retrieval.',
        stack: ['HTML', 'CSS', 'JavaScript', 'React', 'Express', 'Node', 'Postgresql (via Neon)'],
        sourceCode: 'https://github.com/I-Dobiro/jobBoard',
        livePreview: 'https://jobboard-l2ho.onrender.com/',
        image: '',
    },
]

const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Express',
    'Node',
    'Git',
    'Postgresql',
    'Neon',
    'Clerk authentication',
    'Zustand',
    'Helmet',
    'Axios',
    'Tailwind CSS',
    'DaisyUi',
]

const contact = {
    email: 'DobiroIsaac@gmail.com',
}

export { header, about, projects, skills, contact }