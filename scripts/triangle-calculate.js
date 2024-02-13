/**
 * objective:get base,height of a triangle .calculate the area by using the provided formula
 * 
 * step-1: get the base value of the traingle
 * step-2: added an id in the base input field
 * step-3: use getElementById to access the input field
 * step-4: get value from the input field(value is string now)
 * step-5: convert the value to a number.use parseFloat
 */




function calculateTriangleArea(){
    //get triangle base value
    const triangleBaseInput = document.getElementById('triangle-base')
     const triangleBaseText = triangleBaseInput.value
     const base = parseFloat(triangleBaseText)
     console.log(base)

     //get triangle height value
     const triangleHeightInput = document.getElementById('triangle-height')
     const trangleHeightText = triangleHeightInput.value
     const height = parseFloat(trangleHeightText)
     console.log(height)

//calculate triangle area
     const area = 0.5 * base * height
     console.log('area of the triangle :', area)

     //display triangle arearectangle-width

     const triangleAreaSpan = document.getElementById('trangle-area')
     triangleAreaSpan.innerHTML = area;
}