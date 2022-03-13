
import React from "react";
import Footer from "./footer";
import Header from "./header";
import RegForm from "./regForm";
import ProgContent from "./progContent";
import ProgHighlight from "./progHighlight";
import timer from "/Users/manas/Downloads/projectnile/src/Images/timer.webp";
import vector1 from "/Users/manas/Downloads/projectnile/src/Images/01-vector.svg";
import vector3 from "/Users/manas/Downloads/projectnile/src/Images/03-vector.svg";
import bannerWeb from "/Users/manas/Downloads/projectnile/src/Images/banner-web.webp";
import bannerMob from "/Users/manas/Downloads/projectnile/src/Images/banner-mob.webp";

const Main = () =>
{
    return ( <main>

        <Header />
			
			<section className="banner_wrp mb-4">
				<div className="bannerPic">
				<img src={bannerWeb} alt="Banner" className="d-md-block d-none" />	
				<img src={bannerMob} alt="Banner" className="d-md-none d-block" />	
				</div>
				<div className="banner_content">
					<div className="row mx-0 align-items-end">
						<div className="col-lg-7 pl-0">
							<div className="banner_txt">
								<h1>Executive Certificate Programme in <span> Product & Brand Management (ECPPBM) </span> </h1>
								<div className="d-flex my-3 text-white date no-gutters">
									<div className="col-auto mr-4"><img src={vector1} className="w-auto mr-2" alt="" /> 7 Months</div>
									<div className="col-auto"><img src={vector3} className="w-auto mr-2" alt="" /> Starts 8th May, 2022</div>
									
								</div>
								<p className="text-white m-0">Last date to apply <strong>13th February, 2022</strong> </p>
							</div>
						</div>
						
						<div className="col-lg-5 col-xl-3 form_wrapper">

							<div className="d-flex h-100">

								<div className="my-auto">
									
									<div id="top-application-form" className="form_box">
                                         <RegForm />
									</div>

								</div>

							</div>
							
						</div>	

					</div>

				</div>

			</section>

			<section className="mb-4">
				<div className="container-lg">
					<p className="para_text">The product or service offered by any business or organisation is the most critical component of its existence, and all other organisational roles and functions are built on and around it. A need-fulfilling, distinctive product/service can be elevated into a desirable and aspirational experience by branding. <strong> IIM Kashipur’s Executive Certificate Programme in Product & Brand Management (ECPPBM) </strong> is an unbeatable combination of product and brand lifecycle management knowledge, skills and competencies, designed to give you an unmatchable edge.</p>
				</div>
			</section>

            {/* Programme HighLights */}

            <ProgHighlight />

            {/* Programme Content */}

			<ProgContent />

			<section className="mb-4">
				<div className="container-lg">
					<div className="row">
						<div className="col-md-7">
							<h2 className="title mb-3">className Schedule</h2>
							<p>The academic sessions will start from 15th May, 2022. Two sessions will be held every Saturday. Each session shall be of 90 minutes duration. The normal timing of the sessions will be as follows:</p>

							<p> <strong> Saturday – Session I: 12:15 p.m. to 01:45 p.m </strong> </p>

							<p> <strong> Saturday – Session II: 02:00 p.m. to 03:15 p.m.</strong> </p>

							<p> The time gap between two consecutive sessions is to give the participants a break. On some days, the classNamees may extend beyond the mentioned time. In addition to attending interactive sessions, participants have to undertake online quizzes, assignments, and examinations.</p>

							<h2 className="title mb-3">Eligibility Criteria</h2>

							<ul className="pl-3 mb-3">
								<li>Diploma (10+2+3) / Bachelor’s Degree (10+2+3 or 10+2+4) / 2-Year Master’s Degree or its equivalent from Universities recognised university (UGC/ AICTE/DEC/AIU/State Government) in any discipline</li>
								<li>2 years of work experience after completion of qualifying education as above </li>
								<li>Participants who fulfil the above criteria but are not working currently are also eligible for the programme</li>
							</ul>
							
						</div>
						<div className="col-md-5">
							
							<div className="application_timer mb-4">
              					<h3>Application Closes in</h3>
             					<div className="d-flex align-items-center"> 
             						<img src={timer} className="mr-3" alt="" />
             						<span id="ml-3 demo" className="exp-span">EXPIRED</span> 
             					</div>
            				</div>

            				<div className="application_timer fee_box">
              					<h3>Programme Fee</h3>
             					<h4>₹1,40,000 + GST</h4>
             					<span>(Exclusive of Registration Fee)</span>
            				</div>

						</div>
					</div>
				</div>
			
			</section>

            <Footer />

		</main>)
}

export default Main

