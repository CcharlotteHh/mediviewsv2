import {
  createBrowserRouter,
  Route,
  // NavLink,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";
//style
import './style.css';
//pages
import Home from "./pages/Home";
import About from "./pages/About";

//layout
import RootLayout from "./layout/RootLayout";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      {/* <Route path="Projects" element={<ProjectsLayout/>}>
        <Route path="faq" element={<Faq/>}/>
        <Route path="contact" element={<Contact/>}/>
      </Route> */}
    </Route>
  )
);

function App() {
  return (
  
    <RouterProvider router={router}/>
  );
}

export default App;