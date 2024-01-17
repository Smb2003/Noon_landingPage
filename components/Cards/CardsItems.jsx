import React from 'react'
import img1 from "/src/assets/Images/640da032-9952-4e34-88b5-80f4711cbe63.jpg"
import img2 from "/src/assets/Images/N53355106A_1.jpg" 
import img3 from "/src/assets/Images/N43241184A_1.jpg" 
import img4 from "/src/assets/Images/N52953363A_1.jpg" 
import img5 from "/src/assets/Images/N52535496A_1.jpg" 
import img6 from "/src/assets/Images/N28431692A_1.jpg" 
// import img7 from "src/assets/Images/N20979562A_1.jpg" 
import Cards from './Cards'
import Heading from '../Heading/Header'



export const CardsItems = ({data, setData, clicked, setClicked}) => {
    const arr = [
        {
            url:img1,
            title:"iPhone 14 Pro Max 256GB Deep Purple 5G",
            price:"4,600",
            oldPrice:"5,099",
            percentage:"9%",
            dayLeft:"Only 3 days left"
        },
        {
            url:img2,
            title:"Sony PlayStation 5 Console (Disc version)",
            price:"1,872",
            oldPrice:"3,999",
            percentage:"9% off",
            dayLeft:"Only 3 days left"
        },
        {
            url:img3,
            title:"Bluetooth Full Touch Call Smartwatch",
            price:"18.90",
            oldPrice:"89.00",
            percentage:"78% off",
            dayLeft:"Only 3 days left"
        },
        {
            url:img4,
            title:"Samsung S10 Ultra 256gb (New version)",
            price:"7,554",
            oldPrice:"7,999",
            percentage:"5% off"
        },
        {
            url:img5,
            title:"Samsung S22 Ultra Pro 128gb 60MP camera",
            price:"7,924",
            oldPrice:"8,099",
            percentage:"10% off"
        },
        {
            url:img6,
            title:"Electric Hair Drayer with steam generated ",
            price:"1,9013",
            oldPrice:"2,105",
            percentage:"20% off"
        },
    
    
    ];
  return (
    <div>
        <Heading title ="Recommended for you"/>
        <div style={{display:"flex" ,flexWrap:"wrap", justifyContent:"center", alignItems:"center", padding:20}} >
        {
            arr.map((item,index)=>{
                return(
                    <Cards key={index} item={item} data={data} setData={setData} clicked={clicked} setClicked={setClicked}/>
                )
            })
        }
        </div>
    </div>
  )
}
