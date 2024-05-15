import { createBrowserRouter, RouterProvider} from "react-router-dom"
import About from "./pages/About";
import Home from "./pages/Home"
import Main from "./layout/Main";
import Products from "./pages/Products";

const router = createBrowserRouter([
  {path: "", 
    element: <Main />,
    children: [
    {
      path : "/", 
      element : <Home />
    },
    {
      path : "/about", 
      element : <About />
    },
    {
      path : "/products", 
      element : <Products/>
    }
  ]},
])


function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
