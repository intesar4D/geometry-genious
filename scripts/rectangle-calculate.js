function calculateRectangleArea(){
    //get length of the rectangle
    
const lengthInput = document.getElementById('rectangle-length')
const lengthText = lengthInput.value 
const length = parseFloat(lengthText)
console.log(length)

//get width of the rectangle
const widthInput = document.getElementById('rectangle-width')
const widthText = widthInput.value
const width = parseFloat(widthText)
console.log(width)

//calculate rectangle area

const area = width * length
console.log('area of the rectangle :', area)

//desplay rectangle area
const RectangleAreaSpan = document.getElementById('rectangle-area')
RectangleAreaSpan.innerText = area
}   