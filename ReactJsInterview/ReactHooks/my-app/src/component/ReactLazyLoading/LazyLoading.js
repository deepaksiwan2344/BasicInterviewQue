import React from 'react'
import MyComponent from './MyComponent'


//React Lazy Loading is a technique used to improve the performance of React applications 
//by splitting the application 

//some reason use Lazy loading 
//1: Faster Initial Load Page
//2: Code Splitting 
//3: Reduce memory consumption
//4: Optimizing Mobile and Low-Bandwidth Experiences:
//5: Easier Maintenance and Development:

const LazyLoading = () => {
  return (
    <div>
      <MyComponent />
  </div>
  )
}

export default LazyLoading