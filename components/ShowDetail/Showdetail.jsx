import React from 'react'

export const Showdetail = ({data,setClicked}) => {
    const {url,title,price,oldPrice,percentage,dayLeft} = data.e;
    console.log(data.e);
  return (
    <div className="container">
        <img src={url} alt="Cart"  />
        <div className='innerContainer'>
            <h1>{title}</h1>
            <span style={{marginRight:10,marginTop:10, fontSize:25}}>Price: {price}Rs</span>
            <span style={{textDecoration:"line-through", fontSize:25}}>{oldPrice}Rs</span>
            <p style={{marginRight:10, fontSize:25}}>Discount: {percentage}</p>
            <p style={{marginRight:10, fontSize:25}}>{dayLeft}</p><br />
            <button onClick={()=>{setClicked(false)}} className='Button'>Back To Page</button>
        </div>
      </div>
  )
}
