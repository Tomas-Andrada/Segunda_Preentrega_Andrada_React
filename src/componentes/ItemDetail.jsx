export const ItemDetail = ({ item }) => {
    return (
      <div className="item-detail">
        <img src={item.imagen} alt={item.nombre} />
        <h3>{item.nombre}</h3>
        <p>{item.descripcion}</p>
        <p>Stock {item.stock}</p>
        <p>Precio: ${item.precio}</p>
      </div>
    );
  };