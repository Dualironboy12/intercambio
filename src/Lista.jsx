import regalos from "./assets/json/regalos.json";

export default function ListaRegalos() {
    return (
        <div>
            <h2>Lista</h2>
            {regalos.map(persona => (
                <section key={persona.nombre}>
                    <h3 className="nameHeader">{persona.nombre}</h3>
                    <ul>
                        {persona.regalos.map(gift => (
                            <li className="regaloText" key={gift}>{gift}</li>
                        ))}
                    </ul>
                </section>
            ))}
        </div>
    );
}
