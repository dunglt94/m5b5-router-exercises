import {useNavigate, useLocation} from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    const {state} = useLocation();
    console.log(state);

    const handleLogout = () => {
        alert("Goodbye!")
        navigate("/")  ;
    }

    return (
        <div>
            <h1>Hello {state.account}!!! </h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Home;