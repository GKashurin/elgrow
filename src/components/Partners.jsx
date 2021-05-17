import React from 'react'
import open from "../assets/open.png";
import kfc from "../assets/kfc.png";
import vtb from "../assets/vtb.png";
import asos from "../assets/asos.png";
import openDark from "../assets/open-dark.png";
import kfcDark from "../assets/kfc-dark.png";
import vtbDark from "../assets/vtb-dark.png";
import asosDark from "../assets/asos-dark.png";

const Partners = ({ theme }) => {
	return (
		<ul data-aos="example-anim1" className="partners">
			<li className="partners__item">
				{theme === 'light' ? <img className="partners__img" src={open} alt="icon"/> : <img className="partners__img" src={openDark} alt="icon"/>}
			</li>
			<li className="partners__item">
				{theme === 'light' ? <img className="partners__img" src={kfc} alt="icon"/> : <img className="partners__img" src={kfcDark} alt="icon"/>}
			</li>
			<li className="partners__item">
				{theme === 'light' ? <img className="partners__img" src={vtb} alt="icon"/> : <img className="partners__img" src={vtbDark} alt="icon"/>}
			</li>
			<li className="partners__item">
				{theme === 'light' ? <img className="partners__img" src={asos} alt="icon"/> : <img className="partners__img" src={asosDark} alt="icon"/>}
			</li>
		</ul>
	);
}

export default Partners;
