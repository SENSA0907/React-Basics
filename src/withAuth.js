import React from 'react';
import Login from './Login'

const withAuth = (Component) => {
    const loggedIn = false;
    
    class NewComponent extends React.Component {
      render() {
        return (
          <Component />
        )
      }
    }
    

    if (loggedIn == true) {
        return NewComponent
    }

    return Login
    
}

export default withAuth;