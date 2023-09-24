import { sum } from "../components/Sum"

test("sum function should calculate the sum of two number",()=>{
    const result = sum(4,3)
    expect(result).toBe(7)
})