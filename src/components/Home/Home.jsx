import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { auth } from "../../firebase";

export default function Home(props) {
  const navigate = useNavigate();
  const logOut = () => {
    navigate("/");
    return auth.signOut();
  };

  return (
    <div>
      <div>
        <h1>
          <Link to="/login">Accede</Link>
        </h1>
        <br />
        <h1>
          <Link to="/signup">Registrarse</Link>
        </h1>
      </div>
      <h2>{props.name ? `Bienvenido ${props.name}` : "Iniciar sesión"}</h2>
      <button onClick={logOut}>Salir</button>
    </div>
  );
}

Home.propTypes = {
  name: PropTypes.string.isRequired,
};
