import React from "react";
import foot2 from "/Users/manas/Downloads/projectnile/src/Images/foot_logo.webp";
import foot1 from "/Users/manas/Downloads/projectnile/src/Images/timesTsw_logo.webp";

const Footer = () =>
{
    return ( <footer>
                <h3>THIS PROGRAMME IS OFFERED BY</h3>
                    <div className="mt-3 d-flex align-items-center justify-content-center footer_logo">
                        <div className="col-6 col-sm-auto pr-4"><img className="foot-img" src={foot1} alt="" /></div>
                        <div className="col-6 col-sm-auto"><img src={foot2} alt="" /> </div>
                     </div>
            </footer>)
}

export default Footer