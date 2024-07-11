
import Item from "../Item/Item";

const ItemList = ({ products }) => {
    return (
        <>
            <div className="mt-5 row row-cols-sm-2 row-cols-lg-3">
                {products.map((prod) => (
                    <Item key={prod.id} {...prod} />
                ))}
            </div>
        </>
    );
};

export default ItemList;