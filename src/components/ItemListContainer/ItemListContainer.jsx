import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../Service/Firebase/firebaseConfig";

function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const collectionRef = categoryId
                    ? query(collection(db, 'productos'), where('category', '==', categoryId))
                    : collection(db, 'productos');
                const response = await getDocs(collectionRef);
                const productsAdapted = response.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setProducts(productsAdapted);
            } catch (error) {
                console.error("Error fetching products: ", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [categoryId]);

    return (
        <div className="container">
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ItemList products={products} />
            )}
        </div>
    );
}

export default ItemListContainer;
