import React, {useState, useEffect} from 'react';
import * as axios from 'axios';

import 'antd/dist/antd.css';

import { Form, Input, Button, Upload } from 'antd';
import { UserOutlined, LockOutlined, UploadOutlined } from '@ant-design/icons';
import s from "../LoginPage/LoginPage.module.css";
import {NavLink} from "react-router-dom";

const RegisterPage = ({LoginAuthThunk, isSuccess, login, isAuthenticated, history}) => {

    useEffect(() => {
        if (!!isSuccess && isSuccess.status === 200) {
            login(isSuccess.data.token, isSuccess.data.userId, isSuccess.data.avatar)
        }
    }, [isSuccess])

    if (!!isAuthenticated) {
        history.push('/')
    }
/*
    const normFile = (e) => {
        console.log('Upload event:', e);

        if (Array.isArray(e)) {
            return e;
        }

        return e && e.fileList;
    };
*/


    const onFinish = (values) => {
        if (!!values.upload) {
            values.upload = file;
            alert('Доработать загрузку фото')
     /*       axios.post("https://dzianiskor-travel-app-server.herokuapp.com/api/auth/register", {
                email:values.email,
                password:values.password
            }).then(res => {
                axios.post("https://dzianiskor-travel-app-server.herokuapp.com/api/auth/login", {email:values.email,
                    password:values.password}).then(r => {
                    axios.post("https://dzianiskor-travel-app-server.herokuapp.com/api/uploads/avatar", file, {
                        headers: {'Authorization': `Bear ${r.data.token}` }
                })}).then(() => {
                    LoginAuthThunk({
                        email:values.email,
                        password:values.password
                    })
                })



            })*/
        } else {
            delete values.upload;
            axios.post("https://dzianiskor-travel-app-server.herokuapp.com/api/auth/register", values).then(res => {
                if (res.status === 201) {
                    LoginAuthThunk(values)
                }
            })

        }
        console.log('values', values)

    };

    const [file, setFile] = useState(null)
    async function prepareFileToUpload(event) {
        const data = new FormData();
        data.append('file', event.target.files[0]);
        setFile(data)
    }


    return (
        <div className={s.login}>
            <input type="file" onChange={prepareFileToUpload}/>
        <button onClick={()=>console.log('file', file)}>hhh</button>
            <div className={s.modal}>
                <div className={s.wrapp}>
                    <h1>Регистрация</h1>
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
                            rules={[{ required: true, message: 'Please input your Password!' }]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
{/*
                        {!!isError && <div className={s.red}>Логин или пароль не верный</div>}
*/}
                        <Form.Item
                            name="upload"
                            label="Upload"
                            //valuePropName="fileList"
                            //valuePropName={file}
                            //getValueFromEvent={normFile}
                            onChange={prepareFileToUpload}
                        >
                            <Upload name="logo" action="/upload.do" listType="picture">
                                <Button icon={<UploadOutlined />}>Click to upload</Button>
                            </Upload>
                        </Form.Item>
                        <Form.Item>
                            {/*{!isFetching && <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>}*/}
                            {/*{!!isFetching && <Button type="primary" loading className="login-form-button">
                                Log in
                            </Button>}*/}
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Sign Up
                            </Button>
                             <NavLink to={'/login'}>Уже есть аккаунт?</NavLink>
                        </Form.Item>
                    </Form>
                </div>


            </div>

        </div>

    );
};

export default RegisterPage;