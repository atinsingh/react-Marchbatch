import "./App.css";
import { Layout } from "./components/Layout";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
    errorElement: <div>NOT FOUND</div>,
  },
]);
function App() {
  return (
    <Layout>
      <h1>Welcome to our App</h1>
    </Layout>
  );
}

export default App;
