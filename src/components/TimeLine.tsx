import React from 'react';

type Experience = {
    id: number;
    title: string;
    company: string;
    period: string;
    description: string;
    skills?: string[];
    logo?: string;
    side: 'left' | 'right';
};

const Timeline: React.FC = () => {
    const experiences: Experience[] = [
        {
            id: 1,
            title: "Développeur Full Stack",
            company: "Tech Innovate",
            period: "2023 - Présent",
            description: "Développement d'applications web modernes avec React, Node.js et PostgreSQL. Amélioration de l'expérience utilisateur et optimisation des performances.",
            skills: ["React", "Node.js", "PostgreSQL", "TypeScript"],
            logo: "./images/logos/company1.png",
            side: "right"
        },
        {
            id: 2,
            title: "Développeur Front-End",
            company: "Digital Solutions",
            period: "2021 - 2023",
            description: "Conception et implémentation d'interfaces utilisateur réactives pour des applications web et mobiles.",
            skills: ["JavaScript", "React", "Sass", "Tailwind"],
            logo: "./images/logos/company2.png",
            side: "left"
        },
        {
            id: 3,
            title: "Développeur Back-End",
            company: "DataTech",
            period: "2019 - 2021",
            description: "Création d'APIs RESTful et gestion de bases de données pour des applications d'entreprise à haute performance.",
            skills: ["PHP", "Symfony", "MySQL", "Docker"],
            logo: "./images/logos/company3.png",
            side: "right"
        },
        {
            id: 4,
            title: "Développeur Web Junior",
            company: "WebStudio",
            period: "2017 - 2019",
            description: "Développement de sites web et d'applications basiques, maintenance et débogage de code existant.",
            skills: ["HTML", "CSS", "JavaScript", "PHP"],
            logo: "./images/logos/company4.png",
            side: "left"
        },
        {
            id: 5,
            title: "Stagiaire Développeur",
            company: "StartupHub",
            period: "2016 - 2017",
            description: "Première expérience professionnelle en développement web, acquisition des compétences fondamentales.",
            skills: ["HTML", "CSS", "JavaScript"],
            logo: "./images/logos/company5.png",
            side: "right"
        },
    ];

    return (
        <section className="py-16 bg-custom-black">
            <div className="container mx-auto px-4">
                <h2 className="text-5xl font-dosis mb-20 text-center text-custom-white opacity-90">
                    💼 <p className="p-5">Parcours Professionnel</p>
                </h2>

                <div className="relative">
                    {/* Ligne centrale verticale */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-red-500 via-red-400 to-red-500 opacity-60"></div>

                    {/* Expériences */}
                    <div className="relative z-10">
                        {experiences.map((exp) => (
                            <div
                                key={exp.id}
                                className={`mb-16 flex items-center justify-center ${exp.id === experiences.length ? 'mb-0' : ''}`}
                                data-aos={exp.side === 'left' ? 'fade-right' : 'fade-left'}
                                data-aos-duration="600"
                            >
                                <div className="flex items-center w-full">
                                    {/* Contenu à gauche ou à droite selon 'side' */}
                                    <div className={`w-full lg:w-5/12 ${exp.side === 'right' ? 'lg:order-1 lg:ml-16' : 'lg:order-3 lg:mr-16 lg:text-right'}`}>
                                        <div className="bg-neutral-200 p-6 rounded-2xl border border-1 border-neutral-400 border-opacity-50
                                   hover:border-black hover:border-opacity-100 hover:border-2
                                   hover:ring-2 hover:ring-black hover:ring-opacity-20 transition-all group shadow-lg">
                                            <div className="flex items-center mb-4">
                                                {exp.logo && exp.side === 'left' && (
                                                    <div className="ml-auto">
                                                        <img src={exp.logo} alt={exp.company} className="h-12 w-12 object-contain" />
                                                    </div>
                                                )}
                                                {exp.logo && exp.side === 'right' && (
                                                    <div className="mr-4">
                                                        <img src={exp.logo} alt={exp.company} className="h-12 w-12 object-contain" />
                                                    </div>
                                                )}
                                                <div className={exp.side === 'left' ? 'mr-auto' : ''}>
                                                    <h3 className="font-bold text-2xl text-neutral-700">{exp.title}</h3>
                                                    <div className="flex flex-col lg:flex-row lg:items-center">
                                                        <p className="text-xl font-semibold text-neutral-600">{exp.company}</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <p className="text-neutral-600 mb-4">{exp.description}</p>

                                            {exp.skills && (
                                                <div className={`flex flex-wrap gap-2 ${exp.side === 'left' ? 'justify-end' : 'justify-start'}`}>
                                                    {exp.skills.map((skill, index) => (
                                                        <span
                                                            key={index}
                                                            className="bg-neutral-300 text-neutral-700 px-3 py-1 rounded-full text-sm"
                                                        >
                                                            {skill}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Point central avec la date */}
                                    <div className="hidden lg:flex lg:w-2/12 items-center justify-center lg:order-2 relative">
                                        {/* Ligne horizontale reliant l'expérience au point */}
                                        <div className={`absolute h-0.5 ${exp.side === 'left' ? 'right-1/2 w-16' : 'left-1/2 w-16'} bg-red-400 top-1/2 -translate-y-1/2`}></div>

                                        {/* Point principal */}
                                        <div className="w-8 h-8 bg-red-500 rounded-full border-4 border-neutral-800 z-10 transform transition-all hover:scale-125 hover:bg-red-600 shadow-lg"></div>

                                        {/* Point central */}
                                        <div className="absolute w-3 h-3 bg-white rounded-full z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>

                                        {/* Année au-dessus du point */}
                                        <div className="absolute -top-8 text-white text-sm font-bold whitespace-nowrap">
                                            {exp.period.split(' - ')[0]}
                                        </div>
                                    </div>

                                    {/* Espace vide pour l'alternance */}
                                    <div className={`hidden lg:block lg:w-5/12 ${exp.side === 'left' ? 'lg:order-2' : 'lg:order-1'}`}></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Point de début */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                        <div className="w-8 h-8 bg-neutral-800 rounded-full flex items-center justify-center">
                            <div className="w-5 h-5 bg-red-500 rounded-full animate-pulse"></div>
                        </div>
                    </div>

                    {/* Point de fin */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-20">
                        <div className="w-8 h-8 bg-neutral-800 rounded-full flex items-center justify-center">
                            <div className="w-5 h-5 bg-red-500 rounded-full animate-pulse"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;