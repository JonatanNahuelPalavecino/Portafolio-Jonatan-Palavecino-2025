import "./footer.scss";

const Footer = () => {
  const year = new Date().getFullYear();
  const url = import.meta.env.VITE_SERVER

  return (
    <footer className="footer">
      <img src={`${url}/public/logo/logo-portafolio.png`} alt="img-logo" className="footer-img" />
      <p className="footer-title">
        Copyright {year}. Desarrollado por Jonatan Palavecino
      </p>
    </footer>
  );
};

export default Footer;
