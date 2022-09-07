import React from 'react';
import Carousel from 'components/Carousel';
import CustomerFavorites from 'components/CustomerFavorites';
import Video from 'components/Video/Video';
import Featured from 'components/Featured';

function Home() {
    return (
        <>
            <Carousel />
            <CustomerFavorites />
            <Video />
            <Featured />
        </>
    );
}

export default Home;
