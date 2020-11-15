import React from 'react';
import {gql, useQuery} from "@apollo/client";
import NumberStat from "../NumberStat/NumberStat";
import './Home.css';

export const QUERY_HOME_DATA = gql`
    query queryHomeData
    {
        homedata{
            id
            name
            value
            icon
            created_at
        }
    }

`;

const Home = () => {
    const getClassName = () => 'home-wrapper';

    const {loading, error, data} = useQuery(QUERY_HOME_DATA);

    if (loading) {
        return (
            <div>
                <h1>LOADING</h1>
            </div>
        );
    }

    if (error || !data) {
        return (
            <div>
                {JSON.stringify(error)}

                <h1>ERROR</h1>
            </div>
        );
    }

    return (
        <div className={getClassName()}>
            { data.homedata.map((item) => <NumberStat componentIdx={item.id} key={item.id} {...item} />) }
        </div>
    )
}

export default Home;
