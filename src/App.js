import React, { useState } from 'react';
import Categories from './Categories';
import './App.css'
import {data} from './data'
const allCategories = ['all', ...new Set(data.map((menu) => menu.category))]

const App = () => {
  
  const [menu, setMenu] = useState(data)

  const filterBtn = (category) => {
    if(category === "all") {
      return setMenu(data)
    }
    let newCategory = data.filter((menus) => menus.category === category)
    setMenu(newCategory)
  }

  return (
    <div className='container'>
      <h1 className='heading'>Our menu</h1>
      <div className='underline'></div>
      <Categories filterBtn={filterBtn} allCategories={allCategories} />
      <div className='menu-content'>
      {
          menu.map(({id, title, price, img, desc}) => {
            return(
              <div key={id} className="contents">
                <img src={img} alt=""/>
                <div className="infos">
                  <div className="title-price">
                    <h3>{title}</h3>
                    <span>{price}</span>
                  </div>
                  <div className="dotted-line"></div>
                  <p>{desc}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;