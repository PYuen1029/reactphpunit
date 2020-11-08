import React from 'react';
import {gql, useQuery} from "@apollo/client";

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

    return (
        <div>
            <h1>{data.articles.data[0].title}</h1>
        </div>
    )
}

export default Home;
