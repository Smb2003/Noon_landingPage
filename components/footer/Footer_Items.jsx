const Footer_Items = ({list,List_heading}) => {
    return(
        <div>
            <ul className="Footer_Items">
                <h5>{List_heading}</h5>
                {
                list.map((items,index)=>{
                    return(
                        <li key={index}>{items}</li>
                    )
                })
            }
            </ul>

        </div>
    )
};
export default Footer_Items; 