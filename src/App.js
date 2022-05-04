import logo from './logo.svg';
import './App.css';
import Header from './Pages/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import Navbar from './Pages/Navbar/Navbar';
import Inventory from './Pages/Inventory/Inventory';
import ManageInventories from './Pages/ManageInventories/ManageInventories';
import AddInventoryItems from './Pages/AddInventoryItems/AddInventoryItems';
import RequireAuth from './Pages/Shared/RequireAuth/RequireAuth';
import MyItems from './Pages/MyItems/MyItems';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Footer from './Pages/Shared/Footer.js/Footer';
import Blogs from './Pages/Blogs/Blogs';
import AddBlogs from './Pages/AddBlogs/AddBlogs';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Header />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/inventory/:id' element={
          <RequireAuth>
            <Inventory />
          </RequireAuth>
        }></Route>
        <Route path='/manageInventories' element={
          <RequireAuth>
            <ManageInventories />
          </RequireAuth>
        }></Route>
        <Route path='/myitems' element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>
        }>
        </Route>
        <Route path='/additems' element={<AddInventoryItems />}></Route>
        <Route path='blogs' element={<Blogs />}></Route>
        <Route path='blog' element={<AddBlogs />}> </Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
