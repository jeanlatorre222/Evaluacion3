function CardVehiculo({ vehiculo }) {
    return (
        <div className={`tarjeta-vehiculo ${vehiculo.permanente ? 'es-permanente' : ''}`}>
            <h4>Patente: {vehiculo.patente}</h4>
            <p>Tipo: {vehiculo.permanente ? 'Cliente Permanente' : 'Visita General'}</p>
        </div>
    );
}

export default CardVehiculo;