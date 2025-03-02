import PropTypes from 'prop-types';
import { Context } from './Context';
import { useState } from 'react';

export const ContextProvider = ({ children }) => {

    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState({
        auth: false
    })

    return(
        <Context.Provider value={{
            loading,
            setLoading,
            user,
            setUser
        }}>
            {children}
        </Context.Provider>
    );
}

ContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};