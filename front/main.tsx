import React from 'react'
import ReactDOM from 'react-dom'

import Basic from 'components/Basic'
import PassProps from 'components/PassProps'
import Mixin from 'components/Mixin'

ReactDOM.render(
    <Basic />,
    document.querySelector('#basic')
);

ReactDOM.render(
    <PassProps>No Props</PassProps>,
    document.querySelector('#props1')
);

ReactDOM.render(
    <PassProps backColor={"#E91E63"}>Red</PassProps>,
    document.querySelector('#props2')
);

ReactDOM.render(
    <PassProps backColor={"#3F51B5"}>Blue</PassProps>,
    document.querySelector('#props3')
);

ReactDOM.render(
    <PassProps backColor={"#009688"}>Green</PassProps>,
    document.querySelector('#props4')
);

ReactDOM.render(
    <Mixin>hello Responsive Block</Mixin>,
    document.querySelector('#mixin')
);

