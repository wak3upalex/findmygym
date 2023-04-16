import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import '../../styles/LoginPage.css'

export default function SignUpPage() {
	const [first_name, setName] = useState('')
	const [last_name, setSurname] = useState('')
	const [role, setRole] = useState('Пользователь')
	const [user, setUser] = useState(true)
	const [coach, setCoach] = useState(false)
	const [phone, setPhone] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault()
		axios.post('http://localhost:5000/register', { first_name, last_name, phone, email, password, user, coach }, {
			headers: {
				'Content-Type': 'application/json'
			}
		})
		.then((response) => {
			console.log('Успешная регистрация:', response.data)
			// здесь можно добавить код для перенаправления на другую страницу или для обновления состояния приложения
		})
		.catch((error) => {
			console.error('Ошибка регистрации:', error)
			// здесь можно добавить код для обработки ошибок, например, для вывода сообщения об ошибке на экране
		})
	}

	const handleRoleChange = (e) => {
		setRole(e.target.value)
		if (e.target.value === 'Пользователь') {
			setUser(true)
			setCoach(false)
		} else if (e.target.value === 'Тренер') {
			setUser(false)
			setCoach(true)
		}
	}

    return (
		<section class="h-100">
			<div class="container h-100">
				<div class="row justify-content-sm-center h-100">
					<div class="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
						<div class="text-center my-5">
							<img src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg" alt="logo" width="100" />
						</div>
						<div class="card shadow-lg">
							<div class="card-body p-5">
								<h1 class="fs-4 card-title fw-bold mb-4">Регистрация</h1>
								<form method="POST" onSubmit={handleSubmit} class="needs-validation" novalidate="" autocomplete="off">
									<div class="mb-3">
										<label class="mb-2 text-muted" for="name">Имя</label>
										<input id="first_name" type="text" class="form-control" name="first_name" required autofocus onChange={(e) => setName(e.target.value)} />
											<div class="invalid-feedback">
												Обязательное поле
											</div>
									</div>

									<div class="mb-3">
										<label class="mb-2 text-muted" for="name">Фамилия</label>
										<input id="last_name" type="text" class="form-control" name="last_name" required onChange={(e) => setSurname(e.target.value)} />
										<div class="invalid-feedback">
											Обязательное поле
										</div>
									</div>

									<div class="mb-3">
										<label class="mb-2 text-muted">Роль</label>
										<select class="form-select" aria-label="Default select example" onChange={ handleRoleChange }>
											<option selected>Пользователь</option>
											<option value="1">Тренер</option>
										</select>
									</div> 

									<div class="mb-3">
										<label class="mb-2 text-muted" for="phone">Телефон</label>
										<input id="phone" type="tel" class="form-control" name="phone" required onChange={(e) => setPhone(e.target.value)} />
										<div class="invalid-feedback">
											Обязательное поле
										</div>
									</div>

									<div class="mb-3">
										<label class="mb-2 text-muted" for="email">Email</label>
										<input id="email" type="email" class="form-control" name="email" required onChange={(e) => setEmail(e.target.value)} />
											<div class="invalid-feedback">
												Обязательное поле
											</div>
									</div>

									<div class="mb-3">
										<label class="mb-2 text-muted" for="password">Пароль</label>
										<input id="password" type="password" class="form-control" name="password" required onChange={(e) => setPassword(e.target.value)} />
											<div class="invalid-feedback">
												Обязательное поле
											</div>
									</div>

									<p class="form-text text-muted mb-3">
										Нажимая "Отправить" Вы соглашаетесь с нашей политикой конфиденциальности.
									</p>

									<div class="align-items-center d-flex">
										<button type="submit" class="btn btn-primary ms-auto">
											Отправить
										</button>
									</div>
								</form>
							</div>
							<div class="card-footer py-3 border-0">
								<div class="text-center">
									Уже есть аккаунт? <Link to="/login" class="text-dark">Войти</Link>
								</div>
							</div>
						</div>
						<div class="text-center mt-5 text-muted">
							Copyright &copy; 2023-2100 &mdash; Find My Gym
						</div>
					</div>
				</div>
			</div>
		</section>
    )

}
