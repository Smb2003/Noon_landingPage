
import Footer_ImageSection from "./Footer_ImageSection";
import Footer_Items from "./Footer_Items";
const Footer = () => {
    return(
        <div className="Footer">
            <Footer_ImageSection/>
            <Footer_Items list={["Shopping Cart","Wishlist","CheckOut","Support"]} List_heading ="USEFUL LINK"/>
            <Footer_Items list={["About","Products","Terms and Conditions","Help Center"]} List_heading ="ABOUT US"/>
        </div>
    )
}; 
export default Footer;