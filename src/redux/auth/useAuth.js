import { selectIsLoggedIn, selectIsRefreshing, selectUser } from "./selectors"

const { useSelector } = require("react-redux")

export const useAuth = () => { 
    return ({
        isLoggedIn: useSelector(selectIsLoggedIn),
        isRefreshing: useSelector(selectIsRefreshing),
        user: useSelector(selectUser)
    })
    
}
