import "./form.scss"
export const FormLogin = () => {
  return (
    <form action="">
      <label htmlFor="nombre">
        Introduce tu nombre:
        <input type="text" placeholder="nombre" />
      </label><label htmlFor="email">
        Introduce tu correo:
        <input type="email" placeholder="email" />
      </label>
      <label htmlFor="password">
        Introduce tu password:
        <input type="password" placeholder="password" />
      </label>
      <button type="submit">Iniciar Sesión</button>
    </form>
  );
};
