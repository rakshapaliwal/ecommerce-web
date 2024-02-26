import React from 'react';
import { Link } from 'react-router-dom';


const WishlistPage = ({ wishlistItems }) => {

    const products = [
        // { id: 1, url: 'https://cdn.pixabay.com/photo/2016/12/26/06/16/i-phone-1931557_1280.jpg', CompName: 'ABC Electronics', ProductName: 'Smartphone X', price: 599.99, priceOff: 50.00 },
        // { id: 2, url: 'https://cdn.pixabay.com/photo/2020/01/15/06/36/acer-aspire-5700-4766992_640.jpg', CompName: 'Tech Innovators', ProductName: 'Laptop Pro', price: 1299.99, priceOff: 100.00 },
        { id: 3, url: 'https://cdn.pixabay.com/photo/2015/06/25/17/21/smart-watch-821557_640.jpg', CompName: 'Fashion Haven', ProductName: 'Stylish Watch', price: 89.99, priceOff: 10.00 },
        { id: 4, url: 'https://cdn.pixabay.com/photo/2019/04/28/22/00/heating-costs-4164538_640.jpg', CompName: 'Home Essentials', ProductName: 'Smart Thermostat', price: 149.99, priceOff: 15.00 },
        { id: 5, url: 'https://cdn.pixabay.com/photo/2016/04/12/14/31/backpack-1324445_640.jpg', CompName: 'Outdoor Adventures', ProductName: 'Hiking Backpack', price: 49.99, priceOff: 5.00 },
        { id: 6, url: 'https://cdn.pixabay.com/photo/2016/12/13/12/37/heart-rate-monitoring-device-1903997_640.jpg', CompName: 'Fitness Gear Co.', ProductName: 'Fitness Tracker', price: 79.99, priceOff: 7.00 },
        { id: 7, url: 'https://cdn.pixabay.com/photo/2011/12/05/14/51/blender-10935_640.jpg', CompName: 'Kitchen Delights', ProductName: 'Blender Master', price: 39.99, priceOff: 3.00 },
        // { id: 8, url: 'https://cdn.pixabay.com/photo/2017/05/08/02/22/game-2294201_640.jpg', CompName: 'Gaming Galaxy', ProductName: 'Gaming Console X', price: 299.99, priceOff: 30.00 },
        // { id: 9, url: 'https://cdn.pixabay.com/photo/2015/08/17/08/21/book-892136_640.jpg', CompName: 'Bookworm Treasures', ProductName: 'Bestseller Book Set', price: 59.99, priceOff: 6.00 },
        // { id: 10, url: 'https://cdn.pixabay.com/photo/2016/10/16/10/38/color-of-lead-1744817_640.jpg', CompName: 'Artistry Creations', ProductName: 'Canvas Painting Kit', price: 89.99, priceOff: 8.00 },
        // { id: 11, url: 'https://cdn.pixabay.com/photo/2016/03/27/19/43/samsung-1283938_640.jpg', CompName: 'Tech Innovators', ProductName: 'Smartphone Pro', price: 699.99, priceOff: 50.00 },
        // { id: 12, url: 'https://cdn.pixabay.com/photo/2016/06/16/16/44/clock-1461689_640.jpg', CompName: 'Fashion Trends', ProductName: 'Designer Watch', price: 129.99, priceOff: 20.00 },
        ];




  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Wishlist</h1>
       
        <ul className="list-disc pl-4 flex gap-8 m-6 mb-5 ">
          {products.map((item) => (
            <li key={item.id} className="mb-4">
              <img className="w-60 h-50 object-cover mr-6" src={item.url} alt={item.ProductName} />
              <div className="inline-block">
                <h2 className="text-lg font-bold">{item.ProductName}</h2>
                <p className="text-gray-700">{item.CompName}</p>
                <p className="text-green-500 font-bold">
                  {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(item.price)}
                </p>
                <Link to="/checkout" className="text-blue-500">
                  Buy Now
                </Link>
              </div>
            </li>
          ))}
        </ul>
    </div>
  );
};
export default WishlistPage;