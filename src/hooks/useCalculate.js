import {useState} from 'react';

export const useCalculate = () => {
    const [ex, setEx] = useState({
        num1: 0,
        num2: 0,
        processing_number: 1,
        tmpStr1: '',
        tmpStr2: '',
        operator_string: '',
        display_string: ''
    });

    const handlePush = (value) => {
        const {processing_number, tmpStr1, tmpStr2, num1, num2, operator_string} = ex
        
        if(processing_number === 1) {
            let tmpStr = tmpStr1.concat(value)
            const regex1 = /^\-$/
            const regex2 = /^((\-)?[1-9]{1,}[0-9]{0,})$/
            const regex3 = /^((\-)?[1-9]{1,}[0-9]{0,}[\+\-\*\/])$/

          
            if(regex1.test(tmpStr) || regex2.test(tmpStr)) {
                const updatingObj = {
                    tmpStr1: tmpStr,
                    num1: parseInt(tmpStr)
                }
                setEx({
                    ...ex,
                    ...updatingObj
                })
            } 
            else {
                if(regex3.test(tmpStr)) { 
                    const updatingObj = {
                        operator_string: value,
                        processing_number: 2,
                        num1: parseInt(tmpStr)
                    }
                    setEx({
                        ...ex,
                        ...updatingObj
                    })
                }
            }
        } else {
            let tmpStr = tmpStr2.concat(value)
            const regex = /^([1-9]{1,}[0-9]{0,})$/
            if(regex.test(tmpStr)) {
                const updatingObj = {
                    tmpStr2: tmpStr,
                    num2: parseInt(tmpStr)
                }
                setEx({
                    ...ex,
                    ...updatingObj
                })
            } else {
                const calculatedValue = calculate(num1, num2, operator_string)
                if(calculatedValue === 0 ) {
                    setEx({
                        num1: 0,
                        num2: 0,
                        processing_number: 1,
                        tmpStr1: '',
                        tmpStr2: '',
                        operator_string: '',
                        display_string: ''
                    })
                } else {
                    const updatingObj = {
                        num1: calculatedValue,
                        num2: 0,
                        processing_number: 2,
                        tmpStr1: calculatedValue.toString(),
                        tmpStr2: '',
                        operator_string: value
                    }
                    setEx({
                        ...ex,
                        ...updatingObj
                    })
                }
                
            }
        }
    }


    const handleClear = () => {
        const {processing_number, tmpStr1, tmpStr2} = ex
        if(processing_number === 1) {
            const tmpStr = tmpStr1.length >= 1 ? tmpStr1.substring(0, tmpStr1.length - 1) : ''
            const tmpNum = tmpStr.length >= 1 ? parseInt(tmpStr) : 0
            setEx({
                ...ex,
                tmpStr1: tmpStr,
                num1: tmpNum
            })
        } else {
            const tmpStr = tmpStr2.length >= 1 ? tmpStr2.substring(0, tmpStr2.length - 1) : ''
            const tmpNum = tmpStr.length >= 1 ? parseInt(tmpStr) : 0
            setEx({
                ...ex,
                tmpStr2: tmpStr,
                num2: tmpNum
            })
        }
    }

    const handleCalculate = () => {
        let {num1, num2, operator_string} = ex
        const calculatedValue = calculate(num1, num2, operator_string)
        const updatingObj = {
            num1: calculatedValue,
            num2: 0,
            processing_number: 1,
            tmpStr1: calculatedValue.toString(),
            operator_string: '',
            tmpStr2: '',
        }
        setEx({
            ...ex,
            ...updatingObj
        })
    }

    return { ex, handlePush, handleClear, handleCalculate }
}

const calculate = (x, y, o) => {
    let result = 0
    switch(o) {
        case '+':
            result = x + y;
            break;
        case '-':
            result = x - y;
            break;
        case '*':
            result = x * y;
            break;
        case '/':
            result = x / y;
            break;
        default:
            break;
    }
    return result
}