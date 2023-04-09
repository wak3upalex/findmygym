import React from 'react'
import { Link } from 'react-router-dom'

import '../../styles/LoginPage.css'

export default function SignInPage() {
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
								<form method="POST" class="needs-validation" novalidate="" autocomplete="off">
									<div class="mb-3">
										<label class="mb-2 text-muted" for="email">Email</label>
										<input id="email" type="email" class="form-control" name="email" value="" required autofocus />
											<div class="invalid-feedback">
												Неверная почта.
											</div>
									</div>

									<div class="mb-3">
										<div class="mb-2 w-100">
											<label class="text-muted" for="password">Пароль</label>
											<a href="" class="float-end">
												Забыли пароль?
											</a>
										</div>
										<input id="password" type="password" class="form-control" name="password" required />
											<div class="invalid-feedback">
												Неверный пароль.
											</div>
									</div>

									<div class="d-flex align-items-center">
										<div class="form-check">
											<input type="checkbox" name="remember" id="remember" class="form-check-input" />
												<label for="remember" class="form-check-label">Запомнить меня</label>
										</div>
										<button type="submit" class="btn btn-primary btn-style ms-auto">
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