import React from 'react';

const Home = () => {
    return (
        <div>
            <div>I'm a very special home component</div>
            <button onClick={() => console.log('Hi there, buddy!')}>Press me!</button>
        </div>
    )
};

export default Home;