import React from "react";

const Hello = () => {
    // return(
    //     <div>
    //         <h1>Hello Gaurav</h1>
    //     </div>
    // )
    return React.createElement('div', {id:'Hello', className:'dummyClass'}, React.createElement('h1', null, 'Hello Gaurav'))
}

export default Hello