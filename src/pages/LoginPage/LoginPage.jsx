import React, {useState, useEffect} from 'react';
import s from './LoginPage.module.css';
import * as axios from 'axios';

/*import {Button, Form, Input} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";*/



/*const LoginPage = ({login}) => {

    const [form] = Form.useForm();
    const [, forceUpdate] = useState({});

    useEffect(() => {
        forceUpdate({});
    }, []);



    return (
        <div>
            <h1>Login Page</h1>
            <Form form={form} name="horizontal_login" layout="inline" onFinish={onFinish}>
                <Form.Item
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item shouldUpdate={true}>
                    {() => (
                        <Button
                            type="primary"
                            htmlType="submit"
                            disabled={
                                !form.isFieldsTouched(true) ||
                                !!form.getFieldsError().filter(({ errors }) => errors.length).length
                            }
                        >
                            Ввойти
                        </Button>
                    )}
                </Form.Item>
            </Form>

        </div>
    );
};*/

import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {apiLogin} from "../../API/apiCountry";
import {useAuth} from "../../hooks/auth.hook";
import {Redirect} from "react-router";
import {NavLink} from "react-router-dom";

const LoginPage = ({isFetching, LoginAuthThunk, isError,
                       history,
                       isSuccess, IsSuccess, isAuthenticated,
                       ava, logout, userId,
                       login}) => {

    useEffect(() => {
        if (!!isSuccess && isSuccess.status === 200) {
            login(isSuccess.data.token, isSuccess.data.userId, isSuccess.data.avatar, isSuccess.data.name)
        }
    }, [isSuccess])

    useEffect(() => {
        if (!!isAuthenticated) {
            history.push('/')
        }
    }, [isAuthenticated])
    


    const onFinish = (values) => {
        IsSuccess(null)
        LoginAuthThunk(values)

    };

    return (
        <div className={s.login}>
            <div className={s.modal}>
                <div className={s.wrapp}>
                <h1>Вход</h1>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="email"
                        rules={[{ required: true, message: 'Please input your email!' }]}
                    >
                        <Input type={'email'} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your Password!' },
                            { min: 6, message: 'Password must be minimum 6 characters.' }]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    {!!isError && <div className={s.red}>Логин или пароль не верный</div>}

                    <Form.Item>
                        {!isFetching && <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>}
                        {!!isFetching && <Button type="primary" loading className="login-form-button">
                            Log in
                        </Button>}
                        Or <NavLink to={'/register'}>register now!</NavLink>
                    </Form.Item>
                </Form>
                </div>


            </div>

        </div>
    );
};

export default LoginPage;