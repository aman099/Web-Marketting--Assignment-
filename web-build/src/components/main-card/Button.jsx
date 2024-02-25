function Button({ children, classNameContainer, classNameBtn }) {
  return (
    <div className={classNameContainer}>
      <button className={classNameBtn}>{children}</button>
    </div>
  );
}

export default Button;
