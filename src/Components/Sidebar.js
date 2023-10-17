import React from 'react';
import { FaHome, FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="h-screen w-1/5 bg-gray-900 text-white p-8 flex flex-col rounded-md">
      <div className="text-2xl mb-4">✘</div>
      <ul className="space-y-4">
        <li className="flex items-center">
          <FaHome className="text-white mr-3" />
          <Link to="/home" className="text-white hover:underline">Inicio</Link>
        </li>
        <li className="flex items-center">
          <FaUser className="text-white mr-3" />
          <Link to="/profile" className="text-white hover:underline">Perfil</Link>
        </li>
        <li className="flex items-center">
          <FaCog className="text-white mr-3" />
          <Link to="/configuracion" className="text-white hover:underline">Configuración</Link>
        </li>
        <li className="flex items-center">
          <FaCog className="text-white mr-3" />
          <Link to="/" className="text-white hover:underline">Cerrar sesión</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
