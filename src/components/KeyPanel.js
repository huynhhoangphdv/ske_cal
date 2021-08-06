import React from 'react';
import KeyPad from './KeyPad';

const KeyPanel = ({onPush, onClear, onCalculate}) => 
    <>
        <KeyPad value="7" styleClass="button digits" actionHandler={onPush}/>
        <KeyPad value="8" styleClass="button digits" actionHandler={onPush}/>
        <KeyPad value="9" styleClass="button digits" actionHandler={onPush}/>
        <KeyPad value="+" styleClass="button mathButtons" actionHandler={onPush}/>

        <KeyPad value="4" styleClass="button digits" actionHandler={onPush}/>
        <KeyPad value="5" styleClass="button digits" actionHandler={onPush}/>
        <KeyPad value="6" styleClass="button digits" actionHandler={onPush}/>
        <KeyPad value="-" styleClass="button mathButtons" actionHandler={onPush}/>

        <KeyPad value="1" styleClass="button digits" actionHandler={onPush}/>
        <KeyPad value="2" styleClass="button digits" actionHandler={onPush}/>
        <KeyPad value="3" styleClass="button digits" actionHandler={onPush}/>
        <KeyPad value="*" styleClass="button mathButtons" actionHandler={onPush}/>

        <KeyPad value="C" styleClass="button clearButton" actionHandler={onClear}/>
        <KeyPad value="0" styleClass="button digits" actionHandler={onPush}/>
        <KeyPad value="=" styleClass="button mathButtons" actionHandler={onCalculate}/>
        <KeyPad value="/" styleClass="button mathButtons" actionHandler={onPush}/>
    </>

export default KeyPanel