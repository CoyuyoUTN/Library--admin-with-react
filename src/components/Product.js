import { useEffect, useState } from "react";
import { database } from "../firebase/firebase";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { Button } from "react-bootstrap";

const Product = () => {
  const [products, setProducts] = useState([]);

  console.log("database", database);

  const productsCollection = collection(database, "products");
  console.log("Coleccion de productos database", productsCollection);

  const getProducts = async () => {
    const dataProdcuts = await getDocs(productsCollection);
    console.log("dataProdcuts", dataProdcuts);
    setProducts(dataProdcuts.docs.map((doc) => ({ ...doc.data, id: doc.id })));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return <h1>Prodcuto</h1>;
};

export default Product;
