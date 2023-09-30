import { Layout } from "components/Layout/Layout";
import { NavLink, Route, Routes } from "react-router-dom";
import { Contacts } from "./Contacts/Contacts";
import { Register } from "./Register/Register";
import { Home } from "./Home/Home";
import { Login } from "./Login/Login";
import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { UserMenu } from "./UserMenu/UserMenu";
import { useAuth } from "redux/auth/useAuth";
import { refresh } from "redux/auth/operations";

export const App = () => {

  const isRefreshing = useSelector(state => state.auth.isRefreshing)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(refresh())
  },[dispatch]
  )

  const { isLoggedIn } = useAuth()
  const LoginRegister = () => {
    return (<>
      <NavLink to="register">Register</NavLink>
      <NavLink to="login">Login</NavLink>
    </>)
    
  }
  const NavLogic = () => {
    // const {isLoggedIn} = useAuth() 
    // console.log(isLoggedIn)
    const a = isLoggedIn ? <UserMenu /> : LoginRegister()
    return (
      a
    )
  }
  return (
    !isRefreshing &&
    <div>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="contacts">Contacts</NavLink>}
      {NavLogic()}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path="contacts" element={<PrivateRoute component={<Contacts />} redirectTo="/login"/>} />
          <Route path="register" element={<RestrictedRoute component={<Register />} redirectTo="/contacts"/>} />
          <Route path="login" element={<RestrictedRoute component={<Login/>} redirectTo="/contacts"/>} />  
        </Route>
      </Routes> 
    </div>
  
  );
};