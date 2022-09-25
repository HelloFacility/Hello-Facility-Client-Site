import React, { useState } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { useForm } from "react-hook-form";
import useToken from '../hook/useToken';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Loading from '../Share/Loading/Loading';
import { FcGoogle } from 'react-icons/fc';
import { Button, Divider, TextField } from '@mui/material';


const SignIn = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    // const [token] = useToken(user || gUser);

    let signInError;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    if (user || gUser) {
        navigate('/');
    }

    if (loading || gLoading) {
        return <Loading></Loading>
    }

    if (error || gError) {
        signInError = <p className='text-red-500'><small>{error?.message || gError?.message}</small></p>
    }

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
    }
    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl border-t-2 border-sky-900">
                <div className="card-body">

                    <div className="flex justify-center items-center gap-2 text-lg font-semibold rounded-md border border-gray-200 py-3">
                        <button
                            className='flex items-center gap-2'
                            onClick={() => signInWithGoogle()} > <FcGoogle /> Continue with Google
                        </button>
                    </div>

                    <Divider>OR</Divider>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <TextField id="outlined-basic" label="Email" variant="outlined"
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                            />

                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        <br />
                        <div className="form-control w-full max-w-xs">
                            <TextField id="outlined-basic" label="Password" variant="outlined"
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }
                                })}
                            />

                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>

                        {signInError}

                        <div className='flex justify-center mt-5'>
                            <Button variant="outlined" size="large">
                                <input type="submit" value="Sign In" />
                            </Button>
                        </div>
                    </form>

                    <p className='text-center mt-5'><small> Don't have an Account?</small>
                        <Link className='font-bold pl-2' to="/signUp">Sign Up</Link>
                    </p>
                </div>
            </div>
        </div >
    );
};

export default SignIn;