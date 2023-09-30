import { useDispatch } from "react-redux"
import { logout } from "redux/auth/operations"
import { useAuth } from "redux/auth/useAuth"

export const UserMenu = () => {
    const { user } = useAuth()
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(logout())
    }
    return (
        <div>
            <p>Hi "{user.name}"</p><button onClick={handleClick}>Logout</button>
        </div>
    )
}