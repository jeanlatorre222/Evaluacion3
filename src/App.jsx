import { useState, useEffect } from 'react';

function App() {
    
    const [vehiculos, setVehiculos] = useState(() => {
        const guardados = localStorage.getItem('vehiculos_estacionamiento');
        return guardados ? JSON.parse(guardados) : [];
    });

  }