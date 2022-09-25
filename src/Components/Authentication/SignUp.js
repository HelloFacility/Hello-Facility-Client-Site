import { Button, Divider, TextField } from '@mui/material';
import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../Images/ColorLogo.png';
import auth from '../firebase.init';
import useToken from '../hook/useToken';
import AuthenticationNavbar from '../Share/AuthenticationNavber/AuthenticationNavbar';
import Footer from '../Share/Footer/Footer';
import Loading from '../Share/Loading/Loading';

const SignUp = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    console.log(user);

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const [token] = useToken(user || gUser);
    console.log(token);

    const navigate = useNavigate();

    let signInError;

    if (loading || gLoading || updating) {
        return <Loading></Loading>
    }

    if (error || gError || updateError) {
        signInError = <p className='text-red-500'><small>{error?.message || gError?.message || updateError?.message}</small></p>
    }

    if (token) {
        navigate('/');
    }


    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        console.log('update done');
    }
    return (
        <div>
            <AuthenticationNavbar/>
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
                                <TextField id="outlined-basic" label="Your Name" variant="outlined"
                                    type="text"
                                    placeholder="Your Name"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'Name is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                </label>
                            </div>
                            <br />
                            <div className="form-control w-full max-w-xs">
                                <TextField id="outlined-basic" label="Your Email" variant="outlined"
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
                                    <input type="submit" value="Sign Up" />
                                </Button>
                            </div>
                        </form>

                        <p className='text-center mt-5'><small> Already have an Account?</small> <Link className='font-bold' to="/signIn">Sign In</Link></p>
                    </div>
                </div>
            </div >
            <Footer/>
        </div>
    );
};

export default SignUp;