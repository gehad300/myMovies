import React, { useState } from "react";
import { AiFillEye } from "react-icons/ai";


import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from "yup"
export default function LoginForm(field) {
    const [showHidePassword, changeShowHidePassword] = useState(false);


    return (
        
        <Formik
            initialValues={{

                email: '',
                password: '',

            }}
            validationSchema={Yup.object().shape({
                email: Yup.string()
                    .email('Email is invalid')
                    .required('Email is required'),
                password: Yup.string()
                    .min(8, 'Password must be at least 8 characters')
                    .required('Password is required'),

            })}
            onSubmit={fields => {
                console.log(JSON.stringify(fields))
            }}
            render={({ errors, status, touched }) => (
                <Form>


                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                        <ErrorMessage name="email" component="div" className="invalid-feedback" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <div id="showpassword"

                            onClick={() => changeShowHidePassword(!showHidePassword)}
                        ><AiFillEye /></div>
                        <Field name="password" type={showHidePassword ? "text" : "password"}         {...field}
                            className={'form-control' + (errors.password && touched.password ? ' is-invalid': '')} />
                        <ErrorMessage name="password" component="div" className="invalid-feedback" />
                    </div>

                    <div className="form-group">
                        <button type="submit" className="btn btn-primary mr-2">Login</button>
                    </div>

                </Form>
            )}
        />)
}