import { Title } from "@mantine/core";
import { Login } from "./components/login";

const routes = [
    {path: '/', element: <Title>Home Page</Title>},
    {path: '/login', element: <Login />},
    {path: '/products', element: <Title align="center">Products Page</Title>},
    {path: '/reviews', element: <Title align="center">Reviews Page</Title>},
    {path: '/filtered', element: <Title align="center">Filtered Page</Title>},
    {path: '/deleted', element: <Title align="center">Deleted Page</Title>},
    {path: '/about', element: <Title align="center">About Page</Title>},
    {path: '*', element: <Title align="center">404 Error</Title>},
]

export default routes;
