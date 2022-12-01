import React from 'react';
import cl from './Loader.module.css';

const Loader = () => {
   return (
      <div className={cl.loader}>
         <span className={cl.circle}></span>
      </div>
   )
}

export default Loader
