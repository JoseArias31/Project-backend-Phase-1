import { double, rectangleArea, hello,isMature, iteratesOne } from "./helper.js"



describe("Ability to double provided number", () => {
    test("should double the provided number", () => {
        expect(double(2)).toEqual(4)
    })

    test("Should double negative number", () => {
        expect(double(-5)).toEqual(-10)
    })
})


describe("Rectangle area calculations", () => {
    it("Should calculate the area of rectangle with given height and width", () => {
        expect(rectangleArea(10, 15)).toEqual(150)
    })

    it("Should calculate the area of rectangle with given height and width of a house", () => {
        expect(rectangleArea(19, 10)).toEqual(190)
    })
})

describe("Ability to call my name", () => {
   let name = "Jose"
    test("Should call my first name", () => {
    expect(hello(name).toString("Hello, Jose"))
   })
})

describe("Ability to access to the party", () => {
   test("Should be able to access to the party", () => {
    expect(isMature(18)).toEqual(true)
   })
 })


 describe("Ability to iterate to given array", () => {
    it("should add 1 to given array", () => {
        expect(iteratesOne([2,3,4])).toEqual([3,4,5])
    })
    it("should output a null if the array is empty", () => {
        expect(iteratesOne([""])).toEqual([null])
    })
  })