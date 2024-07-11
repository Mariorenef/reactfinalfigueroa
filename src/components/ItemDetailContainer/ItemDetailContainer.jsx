import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../Service/Firebase/firebaseConfig";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { itemId } = useParams();

    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true);
            setError(null); // Resetea el estado de error al iniciar la llamada
            try {
                const docRef = doc(db, 'productos', itemId);
                const response = await getDoc(docRef);
                if (response.exists()) {
                    const data = response.data();
                    const productAdapted = { id: response.id, ...data };
                    setProduct(productAdapted);
                } else {
                    console.log('No such document!');
                    setError('No such document!');
                }
            } catch (error) {
                console.error('Error fetching document:', error);
                setError('Error fetching document');
            } finally {
                setLoading(false);
            }
        };

        if (itemId) {
            fetchProduct();
        } else {
            setError('Invalid item ID');
        }
    }, [itemId]);

    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {!loading && !error && product && <ItemDetail {...product} />}
        </div>
    );
};

export default ItemDetailContainer;
