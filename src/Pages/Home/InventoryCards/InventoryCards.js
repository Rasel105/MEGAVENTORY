import useAllProducts from '../../../hooks/useAllProducts';
import InventoryCard from '../InventoryCard/InventoryCard';

const InventoryCards = () => {
    const [products] = useAllProducts();
    return (
        <div>
            <h3 className='text-center text-3xl my-2 underline text-lime-500'>Inventory Products List</h3>
            <div className='container grid md:grid-cols-3 gap-5 px-5 w-full mx-auto sm:grid-cols-1'>
                {
                    products.slice(0, 6).map(product => <InventoryCard
                        key={product._id}
                        product={product}
                    />)
                }
            </div>
        </div>
    );
};

export default InventoryCards;