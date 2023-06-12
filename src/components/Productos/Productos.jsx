import './Productos.css'
import { useState, useEffect } from 'react';
import { getDocs, collection, query, doc, updateDoc } from "firebase/firestore";
import { db } from '../../services/config';

const Productos = () => {
  const [Productos, setProductos] = useState([]);
  useEffect(() => {
    const misProductos = query(collection(db, "productos"))
    getDocs(misProductos)
      .then((response) => {
        setProductos(response.docs.map((doc) => ( {id: doc.id, ...doc.data()})));

  })

}, [Productos])

const descontarStock = async (producto) => {
  const productoRef = doc(db, "productos", producto.id);
  const newStock = producto.stock - 1;
  await updateDoc(productoRef, {stock: newStock});


}

return (
  <>
    <h2>Productos</h2>
    <div className='productos-container'>
      {
        Productos.map((producto) => (
          <div className='producto-card' key={producto.id}>
            <h2> {producto.nombre} </h2>
            <p>Precio: $ {producto.precio}</p>
            <p>Stock: {producto.stock}</p>
            <button onClick={() => descontarStock(producto)}>Comprar</button>

          </div>
        ))
      }

    </div>
  </>
)
}

export default Productos
