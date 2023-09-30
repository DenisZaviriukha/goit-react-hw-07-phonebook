import { useDispatch } from "react-redux";
import { login } from "redux/auth/operations";

export const Login = () => { 

    const dispatch = useDispatch()

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget
        dispatch(login({
            email: form.elements.email.value,
            password: form.elements.password.value
        }))
    }
    
    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>Email
                    <input type="email" name="email" ></input>
                </label>
                <label>Password
                    <input type="password" name="password"></input>
                </label>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}