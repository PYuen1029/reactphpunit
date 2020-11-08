import React from 'react';
import {graphql, QueryRenderer} from 'react-relay';

const Home = () => {

    return (
        <QueryRenderer
            environment={environment}
            query={graphql`
          query HomeQuery {
              articles(first:1, page:1){
                data {
                  id
                  title
                  content
                }
              }
          }
        `}
            variables={{}}
            render={({error, props}) => {
                if (error) {
                    return <div>Error!</div>;
                }
                if (!props) {
                    return <div>Loading...</div>;
                }
                return <div>User ID: {props.viewer.id}</div>;
            }}
        />
    )
}

export default Home;
