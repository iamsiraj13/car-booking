import React from 'react';
import { useSelector } from 'react-redux';
import DefaultLayout from '../components/DefaultLayout';

const Home = () => {

    const {cars} = useSelector((state)=>state.carReducer)

 

    return (
        <div>
            <DefaultLayout>
                <h2>Hello Brother: {cars.length}</h2>
            </DefaultLayout>
        </div>
    );
};

export default Home;