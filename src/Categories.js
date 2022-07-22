import React from 'react'

const Categories = ({filterBtn, allCategories}) => {
  return (
    <div className='btns'>
        {allCategories.map((category, index) => {
            return(
                <button className='buttons' onClick={() => filterBtn(category)} key={index}>{category}</button>
            )
        })}
    </div>
  )
}

export default Categories