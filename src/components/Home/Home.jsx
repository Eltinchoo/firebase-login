import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Home(props) {
  return (
    <div>
      <div>
        <div>
          <h1>
            <Link to="/login">Login</Link>
          </h1>
          <br />
          <h1>
            <Link to="/singup">Registrarse</Link>
          </h1>
        </div>
      </div>
      <h2>{props.name ? `Bienvenido ${props.name}` : "Iniciar sesión"}</h2>
    </div>
  );
}
Home.propTypes = {
  name: PropTypes.string.isRequired,
};
