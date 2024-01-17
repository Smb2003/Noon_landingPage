import React from 'react'
import img1 from "/src/assets/Images/640da032-9952-4e34-88b5-80f4711cbe63.jpg"
import img2 from "/src/assets/Images/N52953363A_1.jpg"
import img3 from "/src/assets/Images/N52535496A_1.jpg"
import img4 from "/src/assets/Images/N41247606A_1.jpg"
import img5 from "/src/assets/Images/N41247610A_1.jpg"
import img6 from "../../assets/Images/N53346628A_1.jpg"
import Heading from '../Heading/Header'
import Cards from '../Cards/Cards'
export const MobilePhones = ({data, setData, clicked, setClicked}) => {
    const arr = [
        {
            url:img1,
            title:"IPhone 14 Pro Max 256GB Deep Purple 5G",
            price:"4,600",
            oldPrice:"5,099",
            percentage:"9%",
            dayLeft:"Only 3 days left"
        },
        {
            url:img2,
            title:"Samsung S10 Ultra 256gb (New version)",
            price:"7,554",
            oldPrice:"7,999",
            percentage:"5% off",
            dayLeft:"Only 1 days left"
        },
        {
            url:img3,
            title:"Samsung S22 Ultra Pro 128gb 60MP camera",
            price:"7,924",
            oldPrice:"8,099",
            percentage:"10% off"
        },
        {
            url:img4,
            title:"Iphone 11 Pro 128gb 12MP camera",
            price:"5,554",
            oldPrice:"5,999",
            percentage:"5% off",
            dayLeft:"Only 3 days left"
        },
        {
            url:img5,
            title:"Iphone 11 Pro 256gb 12MP camera",
            price:"7,924",
            oldPrice:"8,099",
            percentage:"10% off",
            dayLeft:"Only 3 days left"
        },
        {
            url:img6,
            title:"Iphone 11 Pro 516gb 12MP camera",
            price:"1,9013",
            oldPrice:"2,105",
            percentage:"20% off",
            dayLeft:"Only 3 days left"
        },
    
    
    ];
  return (
    <div>
    <Heading title="Mobile Phones"/>
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
