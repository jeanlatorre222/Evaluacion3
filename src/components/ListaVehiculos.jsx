import CardVehiculo from './CardVehiculo';

function ListaVehiculos({ lista }) {
    return (
        <div>
            <h3 style={{ textAlign: 'center' }}>Vehículos Estacionados</h3>
            
            <div className="contenedor-tarjetas">
                {lista.map((auto) => (
                    <CardVehiculo key={auto.patente} vehiculo={auto} />
                ))}
            </div>
        </div>
    );
}

export default ListaVehiculos;