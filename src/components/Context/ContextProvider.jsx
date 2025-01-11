
import PropTypes from 'prop-types';
import { Context } from './Context';

export const ContextProvider = ({ children }) => {

    

    return(
        <Context.Provider value={{

        }}>
            {children}
        </Context.Provider>
    );
}

ContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};