import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ItemList } from './ItemList';
import productos from './productos.json';

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    const fetchItems = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(productos.productos);
        }, 2000);
      });
    };

    fetchItems().then((data) => {
      const filteredItems = id ? data.filter((item) => item.id_categoria === parseInt(id)) : data;
      setItems(filteredItems);
      setLoading(false);
    });
  }, [id]);

  return (
    <div>
      {loading ? (
        <div className="loading-container">
          <p>Cargando productos...</p>
        </div>
      ) : (
        <>
          <h2>Bienvenidos a la página</h2>
          <ItemList items={items} />
        </>
      )}
    </div>
  );
};
