import "../styles/Experiencia.scss";
import Object_Experiencia from './Objects/ObjExperiencia';
import { useState } from 'react';

function Experiencia() {

    const [experiencia, setExperiencia] = useState(Object_Experiencia);

    return (
        <div id='Experiencia'>
            <h1 className="titulo">Mi Experiencia</h1><br />
            <div id='Experiencia_map'>

                {/*trabajo 1------------------------------------------------------ */}
                {experiencia.map((p) => (
                    <div key={p.id} id="trabajo">
                        <span id="indicador_mapa"></span>
                        <div className="content_titulo_trabajo">
                            <div id="titulo_trabajo">
                                <h2 className="txt_box_trabajo">{p.Puesto}</h2>
                                <h3 className="txt_box_trabajo">{p.Empresa}</h3>
                                <h4 className="txt_box_trabajo">{p.TiempoInicio} - {p.TiempoFin}</h4>
                            </div>
                        </div>
                        <p id="descripcion_trabajo">{p.desc}</p>
                    </div>
                ))}

            </div>
        </div>
    )
};

export default Experiencia;