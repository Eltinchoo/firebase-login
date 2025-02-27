import styles from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import InputControl from "../InputControl/InputControl";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");

  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const iniciar = () => {
    event.preventDefault();
    if (!values.email || !values.pass) {
      setErrorMsg("*Todos los campos son obligatorios");
      return;
    }
    setErrorMsg("");
    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async () => {
        setSubmitButtonDisabled(false);
        navigate("/signup");
      })
      .catch(() => {
        setSubmitButtonDisabled(false);
        setErrorMsg("Error al iniciar sesión");
      });
  };
  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Accede a tu cuenta</h1>

        <InputControl
          label="Email"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
          placeholder="Ingresa tu email"
        />

        <InputControl
          label="Contraseña"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
          placeholder="Ingresa tu contraseña"
        />

        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button onClick={iniciar} disabled={submitButtonDisabled}>
            Login btn
          </button>
          <p>
            Crear cuenta
            <span>
              <Link to="/signup">Ir</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
