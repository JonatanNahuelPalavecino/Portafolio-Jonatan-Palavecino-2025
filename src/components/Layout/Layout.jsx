import { useContext, useEffect } from "react";
import { Context } from "../Context/Context";
import verifyToken from "../../helpers/validation/verifyToken";
import { useLocation } from "react-router-dom";
import handleVisit from "../../helpers/peticiones/handleVisit";
import PropTypes from "prop-types"
const Layout = ({children}) => {

  const { setUser, user } = useContext(Context);
  const url = import.meta.env.VITE_SERVER
  const location = useLocation()
  
  useEffect(() => {
    document.title = "Portfolio Jonatan Palavecino - Desarrollador Fullstack"
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    
    const checkAuth = async () => {
      await verifyToken(setUser);
    };
    checkAuth();

    const registerVisit = async () => {
      await handleVisit(url, location.pathname, user)
    }
    registerVisit()
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);
  
  return (
    <>
      {children}
    </>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};