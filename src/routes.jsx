import { Title } from "@mantine/core";
import { Login } from "./components/login";
import { Error } from "./components/error";
import { Products } from "./components/products";
import { Reviews } from "./components/reviews";
import { Deleted } from "./components/deleted";

const routes = [
    {path: '/', element: <Title>Home Page</Title>},
    {path: '/login', element: <Login />},
    {path: '/signup', element: <Login />},
    {path: '/products', element: <Products />},
    {path: '/products/:pk', element: <Reviews />},
    {path: '/filtered', element: <Title align="center">Filtered Page</Title>},
    {path: '/deleted', element: <Deleted />},
    {path: '/about', element: <Title align="center">About Page</Title>},
    {path: '*', element: <Error/>},
]

export default routes;
