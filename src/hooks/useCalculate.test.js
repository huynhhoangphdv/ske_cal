import { useCalculate } from "./useCalculate";
import { action, renderHook } from "@testing-library/react-hooks";
import { act } from "react-dom/test-utils";


describe('Default Calculate', () => {
    it('intial value', () => {
        const { result } = renderHook(useCalculate)
        expect(result.current.ex).toEqual({
            num1: 0,
            num2: 0,
            processing_number: 1,
            tmpStr1: '',
            tmpStr2: '',
            operator_string: '',
            display_string: ''
        })
    })


})

describe('Clear', () => {
    it('clear -1', () => {
        const { result } = renderHook(useCalculate)
        act(() => {
            result.current.handlePush('-')
        })
        act(() => {
            result.current.handlePush('1')
        })
        act(() => {
            result.current.handleClear()
        })
        expect(result.current.ex).toEqual({
            num1: NaN,
            num2: 0,
            processing_number: 1,
            tmpStr1: '-',
            tmpStr2: '',
            operator_string: '',
            display_string: ''
        })
    })

    it('clear -1-', () => {
        const { result } = renderHook(useCalculate)
        act(() => {
            result.current.handlePush('-')
        })
        act(() => {
            result.current.handlePush('1')
        })
         act(() => {
            result.current.handlePush('-')
        })
        act(() => {
            result.current.handleClear()
        })
        expect(result.current.ex).toEqual({
            num1: -1,
            num2: 0,
            processing_number: 2,
            tmpStr1: '-1',
            tmpStr2: '',
            operator_string: '-',
            display_string: ''
        })
    })


})

describe('First Calculate', () => {
    it('with - value', () => {
        const { result } = renderHook(useCalculate)
        act(() => {
            result.current.handlePush('-')
        })
        expect(result.current.ex).toEqual({
            num1: NaN,
            num2: 0,
            processing_number: 1,
            tmpStr1: '-',
            tmpStr2: '',
            operator_string: '',
            display_string: ''
        })
    })

    it('with + value', () => {
        const { result } = renderHook(useCalculate)
        act(() => {
            result.current.handlePush('+')
        })
        console.log()
        expect(result.current.ex).toEqual({
            num1: 0,
            num2: 0,
            processing_number: 1,
            tmpStr1: '',
            tmpStr2: '',
            operator_string: '',
            display_string: ''
        })
    })

    it('with normal value', () => {
        const { result } = renderHook(useCalculate)
        act(() => {
            result.current.handlePush('0')
        })
        expect(result.current.ex).toEqual({
            num1: 0,
            num2: 0,
            processing_number: 1,
            tmpStr1: '',
            tmpStr2: '',
            operator_string: '',
            display_string: ''
        })
    })
})


describe('Second Operator Calculate', () => {
    it('First is - Second is Number', () => {
        const { result } = renderHook(useCalculate)
        act(() => {
            result.current.handlePush('-')
        })
        act(() => {
            result.current.handlePush('1')
        })
        expect(result.current.ex).toEqual({
            num1: -1,
            num2: 0,
            processing_number: 1,
            tmpStr1: '-1',
            tmpStr2: '',
            operator_string: '',
            display_string: ''
        })
    })

    it('First is - Second is 0', () => {
        const { result } = renderHook(useCalculate)
        act(() => {
            result.current.handlePush('-')
        })
        act(() => {
            result.current.handlePush('0')
        })
        expect(result.current.ex).toEqual({
            num1: NaN,
            num2: 0,
            processing_number: 1,
            tmpStr1: '-',
            tmpStr2: '',
            operator_string: '',
            display_string: ''
        })
    })

    it('First is - Second is another operator', () => {
        const { result } = renderHook(useCalculate)
        act(() => {
            result.current.handlePush('-')
        })
        act(() => {
            result.current.handlePush('+')
        })
        expect(result.current.ex).toEqual({
            num1: NaN,
            num2: 0,
            processing_number: 1,
            tmpStr1: '-',
            tmpStr2: '',
            operator_string: '',
            display_string: ''
        })
    })
})

describe('Third Operator Calculate', () => {
    it('-1+', () => {
        const { result } = renderHook(useCalculate)
        act(() => {
            result.current.handlePush('-')
        })
        act(() => {
            result.current.handlePush('1')
        })
        act(() => {
            result.current.handlePush('+')
        })
        expect(result.current.ex).toEqual({
            num1: -1,
            num2: 0,
            processing_number: 2,
            tmpStr1: '-1',
            tmpStr2: '',
            operator_string: '+',
            display_string: ''
        })
    })

    it('-1+- => -1-', () => {
        const { result } = renderHook(useCalculate)
        act(() => {
            result.current.handlePush('-')
        })
        act(() => {
            result.current.handlePush('1')
        })
        act(() => {
            result.current.handlePush('+')
        })
        act(() => {
            result.current.handlePush('-')
        })
        expect(result.current.ex).toEqual({
            num1: -1,
            num2: 0,
            processing_number: 2,
            tmpStr1: '-1',
            tmpStr2: '',
            operator_string: '-',
            display_string: ''
        })
    })

})

describe('4 Operator Calculate', () => {
    it('-1+4 => -1+4', () => {
        const { result } = renderHook(useCalculate)
        act(() => {
            result.current.handlePush('-')
        })
        act(() => {
            result.current.handlePush('1')
        })
        act(() => {
            result.current.handlePush('+')
        })
        act(() => {
            result.current.handlePush('4')
        })
        expect(result.current.ex).toEqual({
            num1: -1,
            num2: 4,
            processing_number: 2,
            tmpStr1: '-1',
            tmpStr2: '4',
            operator_string: '+',
            display_string: ''
        })
    })

    it('-1+-4 => -1-4', () => {
        const { result } = renderHook(useCalculate)
        act(() => {
            result.current.handlePush('-')
        })
        act(() => {
            result.current.handlePush('1')
        })
        act(() => {
            result.current.handlePush('+')
        })
        act(() => {
            result.current.handlePush('-')
        })
        act(() => {
            result.current.handlePush('4')
        })
        expect(result.current.ex).toEqual({
            num1: -1,
            num2: 4,
            processing_number: 2,
            tmpStr1: '-1',
            tmpStr2: '4',
            operator_string: '-',
            display_string: ''
        })
    })

})

describe('Calculating', () => {
    it('-1+4= => 3', () => {
        const { result } = renderHook(useCalculate)
        act(() => {
            result.current.handlePush('-')
        })
        act(() => {
            result.current.handlePush('1')
        })
        act(() => {
            result.current.handlePush('+')
        })
        act(() => {
            result.current.handlePush('4')
        })
        act(() => {
            result.current.handleCalculate()
        })
        expect(result.current.ex).toEqual({
            num1: 3,
            num2: 0,
            processing_number: 1,
            tmpStr1: '3',
            tmpStr2: '',
            operator_string: '',
            display_string: ''
        })
    })

    it('-1+-4+ => -1-4', () => {
        const { result } = renderHook(useCalculate)
        act(() => {
            result.current.handlePush('-')
        })
        act(() => {
            result.current.handlePush('1')
        })
        act(() => {
            result.current.handlePush('+')
        })
        act(() => {
            result.current.handlePush('-')
        })
        act(() => {
            result.current.handlePush('4')
        })
        act(() => {
            result.current.handlePush('+')
        })
        expect(result.current.ex).toEqual({
            num1: -5,
            num2: 0,
            processing_number: 2,
            tmpStr1: '-5',
            tmpStr2: '',
            operator_string: '+',
            display_string: ''
        })
    })

})

