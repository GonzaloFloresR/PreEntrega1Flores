import React from 'react';

const BotonVolver = () => {
    const VolverClick = () => {
    window.history.back();
};

return (
    <span className="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-light">
        <button type="button" className="btn-close" aria-label="Close" onClick={VolverClick}></button>
        <span className="visually-hidden">unread messages</span>
    </span>
    );
};

export default BotonVolver;