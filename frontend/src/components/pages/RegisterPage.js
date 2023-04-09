import React from 'react'
import { Link } from 'react-router-dom'

import '../../styles/LoginPage.css'

export default function SignUpPage() {

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
								<form method="POST" class="needs-validation" novalidate="" autocomplete="off">
									<div class="mb-3">
										<label class="mb-2 text-muted" for="name">Имя</label>
										<input id="name" type="text" class="form-control" name="name" value="" required autofocus />
											<div class="invalid-feedback">
												Обязательное поле
											</div>
									</div>

									<div class="mb-3">
										<label class="mb-2 text-muted" for="name">Фамилия</label>
										<input id="name" type="text" class="form-control" name="name" value="" required autofocus />
										<div class="invalid-feedback">
											Обязательное поле
										</div>
									</div>

									<div class="mb-3">
										<label class="mb-2 text-muted">Роль</label>
										<select class="form-select" aria-label="Default select example">
											<option selected>Пользователь</option>
											<option value="1">Тренер</option>
											<option value="2">Организатор</option>
										</select>
									</div> 

									<div class="mb-3">
										<label class="mb-2 text-muted" for="phone">Телефон</label>
										<input id="phone" type="tel" class="form-control" name="phone" value="" />
										<div class="invalid-feedback">
											Обязательное поле
										</div>
									</div>

									<div class="mb-3">
										<label class="mb-2 text-muted" for="email">Email</label>
										<input id="email" type="email" class="form-control" name="email" value="" required />
											<div class="invalid-feedback">
												Обязательное поле
											</div>
									</div>

									<div class="mb-3">
										<label class="mb-2 text-muted" for="password">Пароль</label>
										<input id="password" type="password" class="form-control" name="password" required />
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
