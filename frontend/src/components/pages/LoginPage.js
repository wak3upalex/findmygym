import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function SignInPage() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault()
		axios.post('http://localhost:5000/login', { email, password }, {
			headers: {
				'Content-Type': 'application/json'
			}
		})
		.then((response) => {
			console.log('Успешная авторизация:', response.data)
				// здесь можно добавить код для перенаправления на другую страницу или для обновления состояния приложения
		})
		.catch((error) => {
			console.error('Ошибка авторизации:', error)
			// здесь можно добавить код для обработки ошибок, например, для вывода сообщения об ошибке на экране
		})
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
								<h1 class="fs-4 card-title fw-bold mb-4">Вход</h1>
								<form method="POST" onSubmit={handleSubmit} class="needs-validation" novalidate="" autocomplete="off">
									<div class="mb-3">
										<label class="mb-2 text-muted" for="email">Email</label>
										<input id="email" type="email" class="form-control" name="email" required autofocus onChange={(e) => setEmail(e.target.value)} />
											<div class="invalid-feedback">
												Неверная почта.
											</div>
									</div>

									<div class="mb-3">
										<div class="mb-2 w-100">
											<label class="text-muted" for="password">Пароль</label>
											<Link to="" class="float-end link-primary">Забыли пароль?</Link>
										</div>
										<input id="password" type="password" class="form-control" name="password" required onChange={(e) => setPassword(e.target.value)} />
											<div class="invalid-feedback">
												Неверный пароль.
											</div>
									</div>

									<div class="d-flex align-items-center">
										<div class="form-check">
											<input type="checkbox" name="remember" id="remember" class="form-check-input" />
												<label for="remember" class="form-check-label">Запомнить меня</label>
										</div>
										<button type="submit" class="btn btn-primary ms-auto">
											Войти
										</button>
									</div>
								</form>
							</div>
							<div class="card-footer py-3 border-0">
								<div class="text-center">
									Нет аккаунта? <Link to="/register" class="text-dark">Создать</Link>
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