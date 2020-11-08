import React from 'react';
import {gql, useQuery} from "@apollo/client";
import NumberStat from "../../NumberStat";
import {faClock, faCoffee, faLightbulb} from "@fortawesome/free-solid-svg-icons";

export const SAMPLE_QUERY = gql`
    query SampleQuery
    {
        articles(first:1, page:1){
            paginatorInfo{
                count
            }
            data {
                id
                title
                content
            }
        }
    }
`;

const Home = () => {
    const {loading, error, data} = useQuery(SAMPLE_QUERY);

    if (loading) {
        return (
            <div>
                <h1>LOADING</h1>
            </div>
        );
    }

    if (error) {
        return (
            <div>
                <h1>ERROR</h1>
            </div>
        );
    }

    // mock data for now
    const data1 = {
        name: 'Latest Number of Tests',
        value: 12,
        icon: faCoffee
    }
    const data2 = {
        name: 'Latest Number of Failure/Error',
        value: 1,
        icon: faLightbulb
    }
    const data3 = {
        name: 'Latest Number of Tests',
        value: 16,
        icon: faClock
    }
    const data4 = {
        name: 'Latest Number of Tests',
        value: 6,
        icon: faCoffee
    }
    const data5 = {
        name: 'Latest Number of Tests',
        value: 11,
        icon: faLightbulb
    }
    const data6 = {
        name: 'Latest Number of Tests',
        value: 6,
        icon: faClock
    }

    return (
        <div id={'app-wrapper'}>
            {/*<Header />*/}
            <NumberStat componentIdx={1} key={1} {...data1}/>
            <NumberStat componentIdx={2} key={2} {...data2}/>
            <NumberStat componentIdx={3} key={3} {...data3}/>
            <NumberStat componentIdx={4} key={4} {...data4}/>
            <NumberStat componentIdx={5} key={5} {...data5}/>
            <NumberStat componentIdx={6} key={6} {...data6}/>
        </div>
    )
}

export default Home;
