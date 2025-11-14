import Object_Trabajos from './Objects/Trabajos';
import Object_Proyectos from './Objects/Proyectos';
import Object_Skills from './Objects/Skills';
import { useState } from 'react';
import '../styles/Portfolio.scss';

function Portfolio() {

    const [trabajos, setTrabajos] = useState(Object_Trabajos);
    const [proyectos, setProyectos] = useState(Object_Proyectos);
    const [skills, setSkills] = useState(Object_Skills);

    // Estado para controlar qué sección está activa
    const [activeTab, setActiveTab] = useState("trabajos");


    return (
        <div id="Portfolio">
            <h1 id="titulo_portfolio">Mi Portfolio</h1>

            <div id="flex_portfolio">

                <div id="navbar_portfolio">

                    <button
                        className={`btn_trabajos backgdn_gray ${activeTab === "trabajos" ? "active" : ""}`}
                        onClick={() => setActiveTab("trabajos")}
                    >
                        Trabajos Realizados
                    </button>

                    <button
                        className={`btn_proyectos backgdn_gray ${activeTab === "proyectos" ? "active" : ""}`}
                        onClick={() => setActiveTab("proyectos")}
                    >
                        Proyectos
                    </button>

                    <button
                        className={`btn_skills backgdn_gray ${activeTab === "skills" ? "active" : ""}`}
                        onClick={() => setActiveTab("skills")}
                    >
                        Skills
                    </button>
                </div>

                {/* Sección TRABAJOS */}
                {activeTab === "trabajos" && (
                    <div className="contenedor-portfolio" id='trabajos'>
                        {trabajos.map((p) => (
                            <div
                                key={p.id}
                                className="project_portfolio backgdn_gray"
                            >
                                <div className="row_1_p_t"><img src={p.img}  alt={p.title} /></div>
                                <div className="row_2_p_t">
                                    <div className='cont_txt_row'>
                                        <h2 className="row_1_project">{p.title}</h2>
                                        <p className="row_2_project">{p.desc}</p>
                                    </div>
                                    <div className="row_3_project">
                                        <div className="skills_project">
                                            {p.skills.map((skill, i) => (
                                                <img key={i} src={skill} alt={skill} />
                                            ))}
                                        </div>
                                        <a href={p.link} target="_blank" rel="noreferrer">
                                            Ver más
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Sección PROYECTOS */}
                {activeTab === "proyectos" && (
                    <div className="contenedor-portfolio" id='proyectos'>
                        {proyectos.map((p) => (
                            <div
                                key={p.id}
                                className="project_portfolio backgdn_gray"
                            >
                                <div className="row_1_p_t"><img src={p.img}  alt={p.title} /></div>
                                <div className="row_2_p_t">
                                    <div className='cont_txt_row'>
                                        <h2 className="row_1_project">{p.title}</h2>
                                        <p className="row_2_project">{p.desc}</p>
                                    </div><br />
                                    <div className="row_3_project">
                                        <div className="skills_project">
                                            {p.skills.map((skill, i) => (
                                                <img key={i} src={skill} alt={skill} />
                                            ))}
                                        </div>
                                        <a href={p.link} target="_blank" rel="noreferrer">
                                            Ver más
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}


                {/* Sección SKILLS */}
                {activeTab === "skills" && (
                    <div className="contenedor-portfolio" id='skills'>
                        {skills.map((p) => (
                            <div key={p.id} id='skills_portofolio'>
                                <img src={p.img} className="row_1_p_t" id='skill_img' alt={p.title} />
                            </div>
                        ))}
                    </div>
                )}

            </div>
        </div>
    );
}

export default Portfolio;