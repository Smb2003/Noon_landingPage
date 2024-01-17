import React from 'react'
import img1 from "/src/assets/Images/7aa3d9c4-869e-49f4-b7ec-bf53342486dc.jpg"
import img2 from "/src/assets/Images/3df5f22c-cbc7-4f60-9648-7a8d5e6c6ce7.jpg"
import img3 from "/src/assets/Images/N30695949A_1.jpg"
import img4 from "/src/assets/Images/N50272689A_1.jpg"
import img5 from "/src/assets/Images/N45016386A_7.jpg"
import img6 from "../../assets/Images/N43028831A_1.jpg"
import Heading from '../Heading/Header';
import Cards from '../Cards/Cards';
export const ElectronicItems = ({data, setData, clicked, setClicked}) => {
    const arr = [
        {
            url:img1,
            title:"DEEPAS Microwave with 100% fresh looking",
            price:"4,600",
            oldPrice:"5,099",
            percentage:"9%",
            dayLeft:"Only 3 days left"
        },
        {
            url:img2,
            title:"PAK DC Fan with Low Voltage Input Upto 5DC",
            price:"1,872",
            oldPrice:"3,999",
            percentage:"9% off",
            dayLeft:"Only 3 days left"
        },
        {
            url:img3,
            title:"Bluetooth Wireless Handfree with Ultra Base Noise",
            price:"18.90",
            oldPrice:"89.00",
            percentage:"78% off",
            dayLeft:"Only 4 days left"
        },
        {
            url:img4,
            title:"5 Mode Coffee Mixer with Good Quality",
            price:"7,554",
            oldPrice:"7,999",
            percentage:"5% off",
            dayLeft:"Only 3 days left"
        },
        {
            url:img5,
            title:"3 In 1 VGR Shaving Machine with Items",
            price:"7,924",
            oldPrice:"8,099",
            percentage:"10% off",
            dayLeft:"Only 1 days left"
        },
        {
            url:img6,
            title:"Philips Grinder Machine (All in One Piece) ",
            price:"1,9013",
            oldPrice:"2,105",
            percentage:"20% off",
            dayLeft:"Only 5 days left"
        },
    
    
    ];
  return (
    <div>
    <Heading title="Electronic Items"/>
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
