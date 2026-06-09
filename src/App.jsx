import { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import ListaVehiculos from './components/ListaVehiculos';

function App() {
    
    const [vehiculos, setVehiculos] = useState(() => {
        const guardados = localStorage.getItem('vehiculos_estacionamiento');
        return guardados ? JSON.parse(guardados) : [];
    });

    const CAPACIDAD_MAXIMA = 10;

    useEffect(() => {
        localStorage.setItem('vehiculos_estacionamiento', JSON.stringify(vehiculos));
    }, [vehiculos]);

    const agregarVehiculo = (nuevoVehiculo) => {
        const yaExiste = vehiculos.some(auto => auto.patente === nuevoVehiculo.patente);
        if (yaExiste) {
            return 'duplicado';
        }

        if (vehiculos.length >= CAPACIDAD_MAXIMA) {
            return 'lleno';
        }

        setVehiculos([...vehiculos, nuevoVehiculo]);
        return 'exito';
    };

    const cuposDisponibles = CAPACIDAD_MAXIMA - vehiculos.length;

    return (
        <>
            <header>
                <h1>Sistema de Gestión de Estacionamientos</h1>
            </header>

            <main>
                <section style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                    <h2>Cupos Disponibles: {cuposDisponibles} / {CAPACIDAD_MAXIMA}</h2>
                </section>

                <Formulario onAgregar={agregarVehiculo} />
                
                <ListaVehiculos lista={vehiculos} />
            </main>

            <footer>
                <p>&copy; 2026 - Control de Flujo Vehicular Integral</p>
            </footer>
        </>
    );
}

export default App;