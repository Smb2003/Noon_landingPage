import Logo from "../logo/Logo";
import Footer_Links from "./Footer_Links";

const Footer_ImageSection = () => {
    return(
        <div style={{margin:10, textAlign:"center"}}>
            <Logo/>
            <p style={{marginTop:15}}>Follow us.</p>
            <Footer_Links/>
        </div>
    )
};
export default Footer_ImageSection;