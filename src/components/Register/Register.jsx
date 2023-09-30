import { useDispatch } from "react-redux";
import { register } from "redux/auth/operations";

export const Register = () => { 

    const dispatch = useDispatch()

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget
        dispatch(register({
            name: form.elements.name.value,
            email: form.elements.email.value,
            password: form.elements.password.value
        }))


        form.reset()
    }
    return (
        <>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <label>Name
                    <input type="text" name="name"/>
                </label>
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