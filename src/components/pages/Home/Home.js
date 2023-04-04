import React from 'react';
import PageTitle from '../../shared/PageTitle/PageTitle';

const Home = () => {
    const [loading, setLoading] = useState(false);

    // Set loading status;
    if(loading) <Loading />;

    
    return (
        <div>
            <PageTitle text='Home' />
            
        </div>
    );
};

export default Home;