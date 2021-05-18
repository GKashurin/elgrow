import React from "react";

const Table = () => {
	return (
		<div className="table">
			<div className="services">
				<div className="service__name">
					<span>#&nbsp;</span><p>Mobile</p>
				</div>
				<div className="service__stack service__stack_mobile">
					<div className="stack__item">React Native</div>
					<div className="stack__item">Flutter</div>
				</div>
				<div className="service__skill">
					<span>MIDDLE</span>
					<span>SENIOR</span>
				</div>
			</div>
			<div className="services">
				<div className="service__name">
					<span>#&nbsp;</span><p>Frontend</p>
				</div>
				<div className="service__stack service__stack_frontend">
					<div className="stack__item">React JS
						<div>Redux</div>
						<div>redux-saga</div>
						<div>redux-thunk</div>
						<div>react-hooks</div>
					</div>
					<div className="stack__item">Vue JS
						<div>Vuex, vue-router</div>
					</div>
					<div className="stack__item">Angular</div>
				</div>
				<div className="service__skill">
					<span>MIDDLE</span>
					<span>SENIOR</span>
				</div>
			</div>
			<div className="services services_backend">
				<div className="service__name">
					<span>#&nbsp;</span><p>Backend</p>
				</div>
				<div className="service__stack service__stack_backend">
					<div className="stack__item stack__item_python">Python
						<div>Django, Flask</div>
					</div>
					<div className="stack__item">PHP
						<div>Laravel, Yii2</div>
					</div>
					<div className="stack__item">.Net</div>
					<div className="stack__item stack__item">.Node JS</div>
				</div>
				<div className="service__skill">
					<span>MIDDLE</span>
					<span>SENIOR</span>
				</div>
			</div>
			<div className="services">
				<div className="service__name">
					<span>#&nbsp;</span><p>Blockchain</p>
				</div>
				<div className="service__stack service__stack_blockchain">
					<div className="stack__item">ERC-20</div>
					<div className="stack__item">Wallets development</div>
					<div className="stack__item">Infura</div>
				</div>
				<div className="service__skill">
					<span>MIDDLE</span>
					<span>SENIOR</span>
				</div>
			</div>
			<div className="services">
				<div className="service__name">
					<span>#&nbsp;</span><p>UX / UI</p>
				</div>
				<div className="service__stack service__stack_ux">
					<div className="stack__item">Figma</div>
					<div className="stack__item">Adobe XD</div>
					<div className="stack__item">Sketch</div>
				</div>
				<div className="service__skill">
					<span>MIDDLE</span>
					<span>SENIOR</span>
				</div>
			</div>
			<div className="services">
				<div className="service__name">
					<span>#&nbsp;</span><p>Project Management</p>
				</div>
				<div className="service__stack service__stack_management">
					<div className="stack__item">Scrum/Waterfall</div>
					<div className="stack__item">Jira</div>
					<div className="stack__item">Agile</div>
					<div className="stack__item">Risk management</div>
				</div>
				<div className="service__skill">
					<span>MIDDLE</span>
					<span>SENIOR</span>
				</div>
			</div>
		</div>
	);
}

export default Table;
