import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {
    Container,
    Row,
    Col,
    Card,
    Form,
    FormGroup,
    FormLabel,
    FormControl,
    FormText,
    FormSelect,
    Button,
} from 'react-bootstrap';

export default function SignUpPage() {
    const [first_name, setName] = useState('');
    const [last_name, setSurname] = useState('');
    const [role, setRole] = useState('Пользователь');
    const [user, setUser] = useState(true);
    const [coach, setCoach] = useState(false);
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post(
                'http://localhost:5000/register',
                { first_name, last_name, phone, email, password, user, coach },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            )
            .then((response) => {
                console.log('Успешная регистрация:', response.data);
                // здесь можно добавить код для перенаправления на другую страницу или для обновления состояния приложения
            })
            .catch((error) => {
                console.error('Ошибка регистрации:', error);
                // здесь можно добавить код для обработки ошибок, например, для вывода сообщения об ошибке на экране
            });
    };

    const handleRoleChange = (e) => {
        setRole(e.target.value);
        if (e.target.value === 'Пользователь') {
            setUser(true);
            setCoach(false);
        } else if (e.target.value === 'Тренер') {
            setUser(false);
            setCoach(true);
        }
    };

    return (
        <section className="h-100">
            <Container className="h-100">
                <Row className="justify-content-sm-center h-100">
                    <Col xxl={4} xl={5} lg={5} md={7} sm={9}>
                        <div className="text-center my-5">
                            <img
                                src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg"
                                alt="logo"
                                width="100"
                            />
                        </div>
                        <Card className="shadow-lg">
                            <Card.Body className="p-5">
                                <h1 className="fs-4 card-title fw-bold mb-4">Регистрация</h1>
                                <Form
                                    method="POST"
                                    onSubmit={handleSubmit}
                                    className="needs-validation"
                                    noValidate=""
                                    autoComplete="off"
                                >
                                    <FormGroup className="mb-3">
                                        <FormLabel className="mb-2 text-muted" htmlFor="first_name">
                                            Имя
                                        </FormLabel>
                                        <FormControl
                                            id="first_name"
                                            type="text"
                                            name="first_name"
                                            required
                                            autoFocus
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                        <div className="invalid-feedback">Обязательное поле</div>
                                    </FormGroup>

                                    <FormGroup className="mb-3">
                                        <FormLabel className="mb-2 text-muted" htmlFor="last_name">
                                            Фамилия
                                        </FormLabel>
                                        <FormControl
                                            id="last_name"
                                            type="text"
                                            name="last_name"
                                            required
                                            onChange={(e) => setSurname(e.target.value)}
                                        />
                                        <div className="invalid-feedback">Обязательное поле</div>
                                    </FormGroup>

                                    <FormGroup className="mb-3">
                                        <FormLabel className="mb-2 text-muted">Роль</FormLabel>
                                        <FormSelect
                                            aria-label="Default select example"
                                            onChange={handleRoleChange}
                                        >
                                            <option selected>Пользователь</option>
                                            <option value="1">Тренер</option>
                                        </FormSelect>
                                    </FormGroup>

                                    <FormGroup className="mb-3">
                                        <FormLabel className="mb-2 text-muted" htmlFor="phone">
                                            Телефон
                                        </FormLabel>
                                        <FormControl
                                            id="phone"
                                            type="tel"
                                            name="phone"
                                            required
                                            onChange={(e) => setPhone(e.target.value)}
                                        />
                                        <div className="invalid-feedback">Обязательное поле</div>
                                    </FormGroup>

                                    <FormGroup className="mb-3">
                                        <FormLabel className="mb-2 text-muted" htmlFor="email">
                                            Email
                                        </FormLabel>
                                        <FormControl
                                            id="email"
                                            type="email"
                                            name="email"
                                            required
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        <div className="invalid-feedback">Обязательное поле</div>
                                    </FormGroup>

                                    <FormGroup className="mb-3">
                                        <FormLabel className="mb-2 text-muted" htmlFor="password">
                                            Пароль
                                        </FormLabel>
                                        <FormControl
                                            id="password"
                                            type="password"
                                            name="password"
                                            required
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                        <div className="invalid-feedback">Обязательное поле</div>
                                    </FormGroup>

                                    <Form.Group className="mb-3">
                                        <Form.Text className="text-muted">
                                            Нажимая "Отправить" Вы соглашаетесь с нашей политикой конфиденциальности.
                                        </Form.Text>
                                    </Form.Group>
                                    <Row className="justify-content-start">
                                        <Col xs="auto">
                                            <Button type="submit" variant="primary">
                                                Отправить
                                            </Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </Card.Body>
                            <Card.Footer className="py-3 border-0">
                                <div className="text-center">
                                    Уже есть аккаунт? <Link to="/login" className="text-dark">Войти</Link>
                                </div>
                            </Card.Footer>
                        </Card>
                        <div className="text-center mt-5 text-muted">
                            Copyright &copy; 2023-2100 &mdash; Find My Gym
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}