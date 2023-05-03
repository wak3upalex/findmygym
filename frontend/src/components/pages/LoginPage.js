import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post(
                'http://localhost:5000/login',
                { email, password },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            )
            .then((response) => {
                console.log('Успешная авторизация:', response.data);
                // здесь можно добавить код для перенаправления на другую страницу или для обновления состояния приложения
            })
            .catch((error) => {
                console.error('Ошибка авторизации:', error);
                // здесь можно добавить код для обработки ошибок, например, для вывода сообщения об ошибке на экране
            });
    };

    return (
        <section className="h-100">
            <Container className="h-100">
                <Row className="justify-content-sm-center h-100">
                    <Col
                        xxl={4}
                        xl={5}
                        lg={5}
                        md={7}
                        sm={9}
                        className="d-flex flex-column justify-content-between"
                    >
                        <div className="text-center my-5">
                            <img
                                src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg"
                                alt="logo"
                                width="100"
                            />
                        </div>
                        <Card className="shadow-lg">
                            <Card.Body className="p-5">
                                <h1 className="fs-4 card-title fw-bold mb-4">Вход</h1>
                                <Form
                                    onSubmit={handleSubmit}
                                    className="needs-validation"
                                    noValidate
                                    autoComplete="off"
                                >
                                    <Form.Group controlId="email" className="mb-3">
                                        <Form.Label className="mb-2 text-muted">
                                            Email
                                        </Form.Label>
                                        <Form.Control
                                            type="email"
                                            name="email"
                                            required
                                            autoFocus
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            isInvalid={false} // здесь можно добавить логику для отображения ошибки
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Неверная почта.
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group controlId="password" className="mb-3">
                                        <div className="mb-2 w-100 d-flex justify-content-between align-items-center">
                                            <Form.Label className="text-muted">
                                                Пароль
                                            </Form.Label>
                                            <Link to="" className="link-primary">
                                                Забыли пароль?
                                            </Link>
                                        </div>
                                        <Form.Control
                                            type="password"
                                            name="password"
                                            required
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            isInvalid={false} // здесь можно добавить логику для отображения ошибки
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Неверный пароль.
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group controlId="remember" className="mb-3">
                                        <Form.Check type="checkbox" label="Запомнить меня" />
                                    </Form.Group>

                                    <Button type="submit" variant="primary" className="ms-auto">
                                        Войти
                                    </Button>
                                </Form>
                            </Card.Body>
                            <Card.Footer className="py-3 border-0">
                                <div className="text-center">
                                    Нет аккаунта?{' '}
                                    <Link to="/register" className="text-dark">
                                        Создать
                                    </Link>
                                </div>
                            </Card.Footer>
                        </Card>
                        <div className="text-center mt-5 text-muted">
                            &copy; 2023-2100 &mdash; Find My Gym
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}