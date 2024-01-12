
// import MyContacts from './Contacts/MyContacts';


// const App = () => {
//   return (
//     <div>
//       <MyContacts />
//     </div>
//   );
// };

// export default App;
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { current } from './Redux/auth/auth-operations.js';

import Navbar from './NavBar/Navbar';
import UserRoutes from './userRoutes';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <UserRoutes />
    </div>
  );
};
