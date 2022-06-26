import React from 'react'

const Item = ( {text,remove,update,time,category}) => {
  return (
      <div>
          <div className="item">
              <div className="text">
                <p>  {text}   {category}  {time}</p>
              </div>
              <div className="icons">
                  <i className="ri-pencil-fill" onClick={update}></i>
                  <i className="ri-close-line" onClick={remove}></i>
              </div>
          </div>
      </div>
  )
}

export default Item