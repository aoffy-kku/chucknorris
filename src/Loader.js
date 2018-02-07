import React from 'react';

const Loader = () => (
  <div style={{
    position: 'absolute', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'rgba(0,0,0,0.8)',
  }}
  >
    <i className="fas fa-spinner fa-spin fa-3x" style={{color: 'white'}} />
  </div>
);

export default Loader;
