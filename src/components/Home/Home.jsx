import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { auth } from "../../firebase";
import styles from "./Home.module.css";

export default function Home(props) {
  const navigate = useNavigate();
  const logOut = () => {
    navigate("/");
    return auth.signOut();
  };

  return (
    <div className={styles["home-container"]}>
      <div className={styles["home-box"]}>
        <h1>
          <Link to="/login">Accede</Link>
        </h1>
        <h1>
          <Link to="/signup">Registrarse</Link>
        </h1>
        <h2>{props.name ? `Bienvenido ${props.name}` : "Iniciar sesión"}</h2>
        <button className={styles["logout-button"]} onClick={logOut}>
          Salir
        </button>
      </div>
    </div>
  );
}

Home.propTypes = {
  name: PropTypes.string.isRequired,
};
