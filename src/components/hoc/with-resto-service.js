import React from 'react';
import RestoServiceContext from '../resto-service-context';

const WithRestoService = () => (Wrapped) => {
    return (props) => {
        return (
                <RestoServiceContext.Consumer>
                   
                    { 
                    //Прив'язуєм контекст сюди 
                        (RestoService) => {
                             // Render - фунція 
                            return <Wrapped {...props} RestoService={RestoService} /> 
                        }
                    }
                </RestoServiceContext.Consumer>
        )
    }
}

export default WithRestoService;