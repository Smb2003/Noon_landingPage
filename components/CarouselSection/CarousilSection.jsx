import React from 'react'
import img1 from '/src/assets/Images/af899b2f-1f12-4c9e-a3dd-5ebb0d93b6ce.gif';
import img2 from '/src/assets/Images/c59719bc-b52f-4694-bff6-660177fdca74.png';
import img3 from '/src/assets/Images/aac48369-b009-4b8b-ad11-b402928bb756.png';
import img4 from '/src/assets/Images/52a25365-3d6c-43f1-896e-80e56cf2012b.png';



const CarousilSection = () => {
  return (
    <div>
        <div id="carouselExampleInterval " className=" Slider carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active " data-bs-interval="500">
            <img src={img1} className="d-block w-100 Slider"  alt="..."/>
            </div>
            <div className="carousel-item" data-bs-interval="1000">
            <img src={img2} className="d-block w-100 Slider" alt="..."/>
            </div>
            <div className="carousel-item" >
            <img src={img3} className="d-block w-100 Slider"  alt="..."/>
            </div>
            <div className="carousel-item" >
            <img src={img4} className="d-block w-100 Slider"  alt="..."/>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>
    </div>
  )
}
export default CarousilSection;