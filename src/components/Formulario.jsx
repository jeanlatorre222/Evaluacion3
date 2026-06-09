import { useState } from 'react';

function Formulario({ onAgregar }) {
    const [patente, setPatente] = useState('');
    const [permanente, setPermanente] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (patente.trim() === '') {
            setError('Por favor, ingrese una patente.');
            return;
        }

        const regexPatente = /^[a-zA-Z]{4}[0-9]{2}$/;
        if (!regexPatente.test(patente.trim())) {
            setError('Formato de patente inválido. Deben ser 4 letras seguidas de 2 números (Ej: ABCD12).');
            return;
        }

        const nuevoVehiculo = {
            patente: patente.toUpperCase().trim(),
            permanente: permanente
        };

        const resultado = onAgregar(nuevoVehiculo);

        if (resultado === 'duplicado') {
            setError('¡Error: Este vehículo ya se encuentra registrado en el estacionamiento!');
            return; 
        }

        if (resultado === 'lleno') {
            setError('¡Error: Estacionamiento lleno, no quedan cupos disponibles!');
            return;
        }

        setPatente('');
        setPermanente(false);
        setError(''); 
    };

    return (
        <form onSubmit={handleSubmit} style={{ background: '#fff', padding: '1.5rem', borderRadius: '4px', marginBottom: '2rem' }}>
            <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem' }}>Patente Vehículo:</label>
                <input 
                    type="text" 
                    placeholder="AAAA11"
                    value={patente}
                    onChange={(e) => {
                        setPatente(e.target.value);
                        if (error) setError(''); 
                    }}
                    style={{ width: '100%', padding: '0.5rem' }}
                />
            </div>

            <div style={{ marginBottom: '1rem' }}>
                <label>
                    <input 
                        type="checkbox" 
                        checked={permanente}
                        onChange={(e) => setPermanente(e.target.checked)}
                    />
                     {' '}¿Es Cliente Permanente?
                </label>
            </div>

            <button type="submit" style={{ background: '#2c3e50', color: 'white', padding: '0.6rem 1.2rem', border: 'none', cursor: 'pointer', width: '100%' }}>
                Registrar Ingreso
            </button>

            {error && (
                <p style={{ color: 'red', marginTop: '1rem', fontSize: '0.9rem', fontWeight: 'bold', textAlign: 'center' }}>
                    {error}
                </p>
            )}
        </form>
    );
}

export default Formulario;