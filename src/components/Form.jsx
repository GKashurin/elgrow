import React from "react";
import {Formik} from "formik";
import * as Yup from "yup";

const Form = () => {
	const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/

	const validationSchema = Yup.object().shape({
		name: Yup.string().typeError('Должно быть строкой').required('Поле обязательно'),
		phone: Yup.string().matches(phoneRegExp, 'Введите верный номер телефона').min(11, 'Введите верный номер телефона').required('Введите номер телефона'),
		email: Yup.string().email('Введите верный email').required('Поле обязательно'),
	})

	const handleSubmit = (values) => {
		console.log(values);
	}
	return (
		<div>
			<Formik initialValues={{
				name: '',
				phone: '',
				email: '',
				addition: '',
			}
			}
				onSubmit={handleSubmit}
					validateOnBlur
					validationSchema={validationSchema}
			>
				{({
					  values,
					  errors,
					  touched,
					  handleChange,
					  handleBlur,
					  isValid,
					  handleSubmit,
					  dirty
				  }) => (
					<div className='form' data-aos="example-anim1">
						<p>
							<input
								className={'input'}
								type='text'
								name='name'
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.name}
								placeholder="Вас зовут"
							/>
						</p>
						{touched.name && errors.name && <p className={'error'}>{errors.name}</p>}

						<p>
							<input
								className={'input'}
								type='tel'
								name='phone'
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.phone}
								placeholder="Ваш телефон"
							/>
						</p>
						{touched.phone && errors.phone && <p className={'error'}>{errors.phone}</p>}

						<p>
							<input
								className={'input'}
								type='text'
								name='email'
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.email}
								placeholder="E-mail"
							/>
						</p>
						{touched.email && errors.email && <p className={'error'}>{errors.email}</p>}

						<p>
							<input
								className={'input'}
								type='text'
								name='addition'
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.text}
								placeholder="Дополнительные сведения"
							/>
						</p>
						{touched.addition && errors.addition && <p className={'error'}>{errors.addition}</p>}

						<button
							className="button"
							disabled={!isValid && !dirty}
							onClick={handleSubmit}
							type='submit'
						>Отправить
						</button>
						<p className="feedback">Или отправьте все, что вам нужно</p>
						<address>
							<a className="mail" href="mailto:info@elgrow.ru" >info@elgrow.ru</a>
						</address>
					</div>
				)}
			</Formik>
		</div>
	)
}
export default Form