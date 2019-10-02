import React from 'react'

const NoMatch = (props) => {
    let test = props.match.params.test_params;
    return (
        <div>
            <h2 className="text-center main-padding">Error</h2>
            <h2 className="text-center">{test}</h2>
        </div>
        
    )
}
export default NoMatch