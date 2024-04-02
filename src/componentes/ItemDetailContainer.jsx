import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productos from '../Data/productos.json';
import { ItemDetail } from './ItemDetail';

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const newItem = productos.productos.find(product => product.id === parseInt(id));
        setItem(newItem);
      } catch (error) {
        console.error('Error al obtener el producto:', error);
      }
    };
    if (id) {
      fetchItem();
    } else {
      setItem(null);
    }
  }, [id]);

  return (
    <div className="item-detail-container">
      {item && <ItemDetail item={item} />}
    </div>
  );
};