const home = {
    name: 'Syamsundar Ramesh Bonthu',
    roles: ['Full Stack Developer', 'AI/ML Enthusiast', 'Problem Slover'],
}

const about = {
    content: `An enthusiastic and dedicated Computer Science student at GMR Institute of Technology, passionate about Full Stack Development and Artificial Intelligence.
    Driven by innovation and continuous learning, I thrive on solving complex problems and creating impactful solutions.
    Thank you for visiting my portfolio! Feel free to explore my projects and reach out for collaboration.`,
}

const projects_skills = {
    projects_list: ['ai_chatbot', 'travel_companion'],
    projects: {
        ai_chatbot: {
            name: 'AI Q&A Chatbot using OLLAMA & LangChain',
            short_description: 'Intelligent chatbot powered by open-source LLMs',
            long_description: `
            <p>An advanced AI Q&A Chatbot built using OLLAMA, LangChain, and open-source Large Language Models (Gemma, LLAMA3).</p>
            <br />
            <p>This chatbot leverages prompt-based response generation to provide intelligent and context-aware answers to user queries.</p>
            <br />
            <p>Key Features:</p>
            <ul>
                <li><strong>Open-Source LLMs:</strong> Integrated Gemma and LLAMA3 models through OLLAMA for cost-effective and privacy-focused AI solutions.</li>
                <li><strong>Streamlit Interface:</strong> Built a user-friendly web interface with Streamlit, featuring configurable parameters for customized interactions.</li>
                <li><strong>LangSmith Monitoring:</strong> Integrated LangSmith for comprehensive logging and monitoring of model performance and interactions.</li>
                <li><strong>Scalable Architecture:</strong> Designed with extensibility in mind, providing a foundation for future enhancements like Retrieval-Augmented Generation (RAG) and conversation memory.</li>
            </ul>
            <br />
            <p>Technologies Used: Python, OLLAMA, LangChain, Gemma, LLAMA3, Streamlit, LangSmith</p>
            <br />
            <p>This project demonstrates my expertise in AI engineering, prompt design, and building production-ready AI applications.</p>
            `,
            thumbnail: '/images/ai_chatbot.jpeg',
            images: ['/images/ai_chatbot.jpeg'],
            techStack: ['Python', 'OLLAMA', 'LangChain', 'Streamlit', 'LLM'],
            demo: '#',
            source: '#',
            link: '#',
        },
        travel_companion: {
            name: 'Travel Companion Website',
            short_description: 'Full-stack travel assistance web application',
            long_description: `
            <p>A comprehensive full-stack travel assistance web application designed to help users plan their trips effectively.</p>
            <br />
            <p>Built with React, Node.js, and MySQL, this platform offers personalized travel recommendations and real-time information.</p>
            <br />
            <p>Key Features:</p>
            <ul>
                <li><strong>Personalized Travel Guides:</strong> Get customized recommendations for restaurants, events, and attractions based on location and preferences.</li>
                <li><strong>Real-time Weather Forecasts:</strong> Integrated weather API to provide accurate weather information for travel destinations.</li>
                <li><strong>Google Maps Integration:</strong> Intuitive navigation with integrated Google Maps for easy route planning and location discovery.</li>
                <li><strong>Responsive Design:</strong> Modern, responsive UI built with React for seamless experience across all devices.</li>
                <li><strong>Robust Backend:</strong> Node.js backend with MySQL database for reliable data management and user profile handling.</li>
            </ul>
            <br />
            <p>Technologies Used: React, Node.js, MySQL, HTML, CSS, JavaScript, Google Maps API, Weather API</p>
            <br />
            <p>This project showcases my full-stack development skills and ability to integrate third-party APIs for enhanced functionality.</p>
            `,
            thumbnail: '/images/travel_camp.jpeg',
            images: ['/images/travel_camp.jpeg'],
            techStack: ['React', 'Node.js', 'MySQL', 'HTML', 'CSS', 'JS'],
            demo: '#',
            source: '#',
            link: '#',
        },
    },
    skills: [
        {
            name: 'Python',
            path: 'python',
            description: 'High-level programming language for AI/ML and backend development.',
        },
        {
            name: 'JavaScript',
            path : 'js',
            description: 'Essential programming language for interactive web development.',
        },
        {
            name: 'HTML',
            path: 'html',
            description: 'Standard markup language for creating web pages.',
        },
        {
            name: 'CSS',
            path: 'css',
            description: 'Style sheet language for web design and layout.',
        },
        {
            name: 'React',
            path: 'react',
            description: 'JavaScript library for building dynamic user interfaces.',
        },
        {
            name: 'Java',
            path: 'java',
            description: 'High-level programming language for backend and Android development.',
        },
        {
            name: 'C',
            path: 'cpp',
            description: 'Fundamental programming language for systems and algorithms.',
        },
        {
            name: 'MySQL',
            path: 'mysql',
            description: 'Open-source relational database management system.',
        },
        {
            name: 'Git',
            path: 'git',
            description: 'Distributed version control system for code management.',
        },
        {
            name: 'TensorFlow',
            path: 'tensorflow',
            description: 'Open-source library for machine learning and neural networks.',
        },
        {
            name: 'Pandas',
            path: 'pandas',
            description: 'Data analysis and manipulation library for Python.',
        },
        {
            name: 'Scikit-learn',
            path: 'scikit-learn',
            description: 'Machine learning library for data mining and analysis.',
        },
        {
            name: 'Numpy',
            path: 'numpy',
            description: 'Numerical computing library for scientific computing.',
        },
    ],
}

const experience = [
    {
        company: 'Lomma IT Solutions',
        role: 'Intern',
        location: 'Online',
        duration: '1 month',
        image: '/images/lomaa_it.jpeg',
        link: 'https://lommait.com/'
    },
    {
        company: 'GMR Institute of Technology',
        role: 'Student Co-ordinator, ACM Student Chapter',
        location: 'Srikakulam',
        duration: 'Sep 2024 – Till now',
        image: '/images/GMRIT_Logo.jpg',
        link: 'https://www.gmrit.edu.in/'
    }
]

const education = [
    {
        title: 'GMRIT',
        name: 'GMR Institute of Technology',
        location: 'Rajam, India',
        degree: 'B.TECH in CSE – AI & ML',
        grade: '9.21',
        description: 'Pursuing B.Tech in Computer Science with specialization in Artificial Intelligence and Machine Learning. Gaining in-depth technical knowledge in core CS concepts, AI/ML fundamentals, and hands-on experience with modern development technologies.',
        duration: `'2023-2027'`,
        image: '/images/gmrit.png',
        link: 'https://www.gmrit.edu.in/'
    },
    {
        title: 'GCSR',
        name: 'Sri GCSR College',
        location: 'Rajam, India',
        degree: 'Intermediate (MPC)',
        description: 'Completed Intermediate education with focus on Mathematics, Physics, and Chemistry, building strong foundational knowledge in STEM subjects.',
        grade: '97.9%',
        board: 'Board of Intermediate Education',
        duration: `'2021-2023'`,
        image: '/images/gscr.jpeg',
        link: '#'
    },
    {
        title: 'St. Dominic',
        name: 'St. Dominic E.M School',
        location: 'Attali, India',
        degree: 'Secondary Education',
        description: 'Completed secondary education with excellent academic performance and developed strong problem-solving and logical thinking skills.',
        grade: '93.2%',
        board: 'Board of Secondary Education',
        duration: `'2016-2021'`,
        image: '/images/jpeg.jpg',
        link: '#'
    }
]

const contact = {
    description: `<p>Thank you for taking the time to explore my portfolio! Whether you have a question about my work, want to discuss a potential collaboration, or just want to say hello, I'd love to hear from you.</p>
    <br />
    <p>Feel free to reach out using the contact form below or connect with me through my social media channels. You can also call me at <strong>9391761098</strong> or email me directly. I make it a priority to respond to all inquiries promptly.</p>`,
    socials: [
        {
            name: 'Gmail',
            link: 'mailto:rameshbonthu77@gmail.com',
            icon: '/images/gmail.svg',
        },
    ]
}

export { home, about, projects_skills, experience, education, contact };