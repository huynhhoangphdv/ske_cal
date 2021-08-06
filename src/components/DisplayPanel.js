import React from 'react';

const DisplayPanel = ({value}) =>
<input className="display" type="text" name="display" readOnly value={value}/>

export default DisplayPanel