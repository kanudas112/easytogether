import React from 'react'
import './price.css'

const Price = () => {
  return (
    <section id="pricing" className="our_pricing section-padding">
	<div className="container">
		<div className="row">
			<div className="section-title text-center">
				<h1 className="section-title-white">Pricing plan</h1>
				<p className="section-title-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus nec dui venenatis dignissim. Aenean vitae metus in augue pretium ultrices.</p>
			</div>				
			<div className="col-xs-12 col-sm-4 col-lg-4">
				<div className="pricingTable pricingTable-2">
					<div className="pricingTable-header">
						<h3 className="title">Standard</h3>
						<h5 className="price-month">Per Month</h5>
						<h1 className="price-value">30 <span className="value-bg">$30</span></h1>							
					</div>
					<ul className="pricing-content">
						<li>5 website</li>
						<li>10 Subdomains</li>
						<li>15 Domains</li>
						<li>Unlimited Support</li>
					</ul>
					<a href="#" className="btn btn-lg btn-price-bg">Sign Up</a>
				</div>
			</div>
			<div className="col-xs-12 col-sm-4 col-lg-4">
				<div className="pricingTable pricingTabletop pricingTable-2">
					<div className="pricingTable-header">
						<h3 className="title">Business</h3>
						<h5 className="price-month">Per Month</h5>
						<h1 className="price-value">60 <span className="value-bg">$60</span></h1>		
					</div>
					<ul className="pricing-content">
						<li>5 website</li>
						<li>10 Subdomains</li>
						<li>15 Domains</li>
						<li>Unlimited Support</li>
					</ul>
					<a href="#" className="btn btn-lg btn-price-bg">Sign Up</a>
				</div>
			</div>
			<div className="col-xs-12 col-sm-4 col-lg-4">
				<div className="pricingTable pricingTable-2">
					<div className="pricingTable-header">
						<h3 className="title">Premium</h3>
						<h5 className="price-month">Per Month</h5>
						<h1 className="price-value">90 <span className="value-bg">$90</span></h1>		
					</div>
					<ul className="pricing-content">
						<li>5 website</li>
						<li>10 Subdomains</li>
						<li>15 Domains</li>
						<li>Unlimited Support</li>
					</ul>
					<a href="#" className="btn btn-lg btn-price-bg">Sign Up</a>
				</div>
			</div>
		</div>
	</div>
</section>
  )
}

export default Price