import { Link } from "react-router-dom";

export const Menu = () => {
    return (
    <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/about-us">Sobre Nosostros</Link>
        </li>
        <li>
            <Link to="/tasks">Tareas</Link>
        </li>
    </ul>
    )
}