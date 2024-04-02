import React from 'react';
import { Link } from 'react-router-dom';
import { ItemCount } from './ItemCount';

export const Item = ({ item }) => {
  const handleAddToCart = (quantity) => {
    console.log(`Agregado al carrito: ${quantity} unidades de ${item.nombre}`);
  };

  return (
    <div className="item">
      <img src={item.imagen} alt={item.nombre} />
      <h3>{item.nombre}</h3>
      <p>Precio: ${item.precio}</p>
      <ItemCount stock={item.stock} onAdd={handleAddToCart} />
      <Link to={`/item/${item.id}`}>
        <button>Ver detalles</button>
      </Link>
    </div>
  );
};