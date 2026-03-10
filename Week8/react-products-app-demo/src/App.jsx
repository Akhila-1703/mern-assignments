import { createBrowserRouter, RouterProvider } from 'react-router'
import RootLayout from './components/RootLayout'
import Home from './components/Home.jsx'
import ProductsList from './components/ProductsList.jsx'
import ContactUs from './components/ContactUs.jsx'
import Product from './components/Product.jsx'


function App() {
  
    const routerObj = createBrowserRouter([
      {
        path: "/",
        element: <RootLayout />,
        children: [
          {
            path: "",
            element:<Home />
          },
          {
            path: "products",
            element:<ProductsList />
          },
          {
          path: "contact",
            element: <ContactUs />
          }, {
            path: "product",
            element: <Product />
          }
        ]
      }
    ])

  return <RouterProvider router={routerObj} />
}

export default App