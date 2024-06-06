import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  Link,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <Link to="stats">Stats</Link>
        <Link to="reports">Reports</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default Dashboard;

function Stats() {
  return <h1>Stats Page</h1>;
}

function Reports() {
  return <h1>Reports Page</h1>;
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <div>DashBoard</div>,
      },
      {
        path: "nested",
        element: <Dashboard />,
        children: [
          {
            path: "stats",
            element: <Stats />,
          },
          {
            path: "reports",
            element: <Reports />,
          },
        ],
      },
      {
        path: "invoice",
        element: <div>invoice</div>,
        children: [],
      },
      {
        path: "customer",
        element: <div>customer</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
