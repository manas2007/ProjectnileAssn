import React from "react";
import ph01 from "/Users/manas/Downloads/projectnile/src/Images/ph-01.webp";
import ph02 from "/Users/manas/Downloads/projectnile/src/Images/ph-02.webp";
import ph03 from "/Users/manas/Downloads/projectnile/src/Images/ph-03.webp";

const ProgHighlight = () =>
{
    return (   <section className="mb-4">  
				  <div className="container-lg ph_details">
					<h2 className="title text-center mb-4">Programme Highlights</h2>
					<div className="row">
						<div className="col-12 col-sm-4 mb-4 mb-sm-0">
							<div className="row align-items-center">
								<div className="col-auto col-sm-12"><img src={ph01} className="d-table mx-auto" alt="" /></div>
								<div className="col col-sm-12"><p className="text-left text-sm-center">Contextually designed 7-month programme</p></div>
							</div>	
						</div>
						<div className="col-12 col-sm-4 mb-4 mb-sm-0">
							<div className="row align-items-center">
								<div className="col-auto col-sm-12"><img src={ph02} className="d-table mx-auto" alt="" /></div>
								<div className="col col-sm-12"><p className="text-left text-sm-center">Unique combination of Product & Brand Management</p></div>
							</div>	
						</div>
						<div className="col-12 col-sm-4 mb-4 mb-sm-0">
							<div className="row align-items-center">
								<div className="col-auto col-sm-12"><img src={ph03} className="d-table mx-auto" alt="" /></div>
								<div className="col col-sm-12"><p className="text-left text-sm-center">Diverse and experiential pedagogy</p></div>
							</div>	
						</div>
					</div>
				  </div>
			    </section>)
}

export default ProgHighlight