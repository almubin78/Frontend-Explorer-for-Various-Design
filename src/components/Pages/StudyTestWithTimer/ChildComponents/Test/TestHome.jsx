import React, { useState } from 'react';

const TestHome = () => {
    const [showBatchSelector, setShowBatchSelector] = useState(false);
    return (
        <div className='relative min-h-screen bg-gray-50'>
            <button
                className='rounded-r-lg z-20 fixed bg-blue-600'
                onClick={()=>setShowBatchSelector(!showBatchSelector)}
            >
                 {showBatchSelector ? "◄" : "⚙️"}
            </button>
        </div>
    );
};

export default TestHome;