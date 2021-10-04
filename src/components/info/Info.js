import './info.css';

import foto from './Foto.PNG';

function Info() {

    return(
        <body>
            <div className="foto">
                <img className="img" src={foto} alt="Foto Samuel Cuello"/>
            </div>
            <div className="Info">
                <h2>#Celular:</h2>
                <p className="p">3168540703</p>

                <h2>Fecha De Nacimiento:</h2>
                <p className="p">13/05/2003</p>

                <h2>Corre Electronico:</h2>
                <p className="p">Smcuello8@misena.edu.co</p>

                <h2>Direccion:</h2>
                <p className="p">Cra 160 #133-24</p>
            </div>
        </body>
    )
    
}

export default Info;