import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const Login = () => {
    const [account, setAccount] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (account === "admin@gmail.com" && password === "letmein") {
            alert("Đăng nhập thành công!")
            navigate('/home', {state: {account: account}});
        } else {
            alert("Sai tài khoản hoặc mật khẩu!");
        }
    }

    return (
        <>
            <form onSubmit={handleLogin}>
                <table>
                    <tbody>
                    <tr>
                        <td>Account</td>
                        <td>
                            <input type="text"
                                   name="account"
                                   onChange={(e) => setAccount(e.target.value)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td>
                            <input type="password"
                                   name="password"
                                   onChange={(e) => setPassword(e.target.value)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <button type={"submit"}>Login</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </form>

        </>
    )
}

export default Login;