import React from 'react';
import { connect } from 'react-redux';

function Home({data}) {
    console.log('Home({data}):', data)
    return (
        <div>
            Home
        </div>
    );
}
const mapStateToProps = (state, ownProps) => {
    console.log('ownProps:',state)
    return {
        data: state.posts
    }
   };

   export default connect(mapStateToProps)(Home);
