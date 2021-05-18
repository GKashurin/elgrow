import React, {useEffect, useState} from 'react'

import Aos from "aos";
import "aos/dist/aos.css"
import {ThemeProvider} from "styled-components";
import {animateScroll} from "react-scroll";

import { Header, Form, DotsAnimated, Partners, Table, Footer} from "./components"
import {GlobalStyles} from "./components/globalStyles";
import {lightTheme, darkTheme} from "./components/Theme"

import ContactsSVG from "./assets/arrowSVG.svg"
import ContactsSVGDark from "./assets/arrowSVGDark.svg"

const App = () => {
	const [theme, setTheme] = useState('light');

	const themeToggler = () => {
		const time = new Date()
		const hour = time.getHours()
		hour > 8 && hour <= 21 ? setTheme('light') : setTheme('dark')
	}

	 window.onscroll = function () {
		 Aos.init({ duration: 2000 })
	}

	useEffect(() => {
		themeToggler();
	}, [])

	return (
		<ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
			<>
				<GlobalStyles/>
				<div className="App">
					<div className="wrapper">

						<Header/>

						<section
							className="content">
							<h1 className="content__title">
								<div className="content__title content__title_first">Аутстаффинг</div>
								<div className="content__title content__title_second">и аутсорсинг</div>
								<div className="content__title content__title_third">разработчиков</div>
								<div className="content__title content__title_fourth">уровня <span>middle+</span></div>
							</h1>
							<div className="description">
								<h4 className="description__title">
									Frontend, backend web&mobile apps, UX/UI, Project/Product management
								</h4>
								<div onClick={() => (animateScroll.scrollToBottom())}>
									{theme === 'light' ? <img className="contactSvg" src={ContactsSVG} alt="img"/> : <img className="contactSvg" src={ContactsSVGDark} alt="img"/>}
								</div>
							</div>

							<DotsAnimated />

							<div className="about">
								<div className="messages">
									<span data-aos="example-anim1" className="messages__item">Привет, мы Elgrow!</span>
									<span data-aos="example-anim1" className="messages__item">
								Усилим вашу команду, аккуратно вклинимся в уже существующие бизнес и dev-процессы, подхватим, сделаем,оттестируем и вовремя завершим все поставленные задачи
                    				</span>
									<span data-aos="example-anim1" className="messages__item-green">
                        		Хорошо, а какие у вас компетенции?
                    				</span>
								</div>

								<Table/>

								<div className="messages messages__center">
									<span data-aos="example-anim1" className="messages__item-green">
                        				А с какими клиентами вы работали и работаете?
                    				</span>
									<span data-aos="example-anim1" className="messages__item">
										Наши клиенты - лидирующие компании на рынке
									</span>
								</div>

								<Partners theme={theme}/>

								<div className="messages messages__bottom">
									<span data-aos="example-anim1" className="messages__item-green">
                        				Круто, а как а вами связаться?
                    				</span>
									<span data-aos="example-anim1" className="messages__item">
										Можете оставить заявку прямо на сайте или связаться с нами по указанным контактам ниже
									</span>
								</div>
							</div>

							<Form/>

						</section>
						<Footer/>
					</div>
				</div>
			</>
		</ThemeProvider>
	);
}

export default App;
