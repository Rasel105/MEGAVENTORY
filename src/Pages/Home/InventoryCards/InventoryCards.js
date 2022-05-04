import { Link } from 'react-router-dom';
import useAllProducts from '../../../hooks/useAllProducts';
import InventoryCard from '../InventoryCard/InventoryCard';

const InventoryCards = () => {
    const [products] = useAllProducts();
    return (
        <div className='container w-full mx-auto '>
            <h3 className='text-center text-3xl my-4 text-gray-700'>Top <span className='text-sky-400'>Sale</span> Products</h3>
            <div className='grid md:grid-cols-3 gap-5 px-5 sm:grid-cols-1'>
                {
                    products.slice(0, 6).map(product => <InventoryCard
                        key={product._id}
                        product={product}
                    />
                    )}
            </div>
            <div className='flex justify-end m-5 sm:m-5'>
                <Link to='/manageInventories' className=' inline-flex items-center justify-center bg-sky-500/100 hover:bg-blue-800 py-3 px-3 rounded-md text-white text-xl'>
                    Manage Inventories
                    <svg className="ml-2 mr-1 w-8 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </Link>

            </div>
        </div>
    );
};

export default InventoryCards;