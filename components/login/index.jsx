import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Button from "../buttons";
import PublicInput from "../publicInput";

import { validatePassword, validateEmail} from "../../utils/validations"

import UserService from "../../services/UserService";

import mail from "../../public/images/mail.svg";
import key from "../../public/images/key.svg";
import hireMi from "../../public/images/hireMi.svg";

const userService = new UserService

const Login = ({afterLogin}) => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSubmiting, setIsSubmiting] = useState(false);

    const loginIsValid = () => {
        return (
            validateEmail(email)
            && validatePassword(password)
        )
    }
    
    const onSubmit = async (e) => {
        e.preventDefault();
        if(!loginIsValid()) {
            return;
        }

        setIsSubmiting(true);

        try{

            await userService.login({
                login: email,
                password
            });

            if(afterLogin) {
                afterLogin();
            };
            
        }catch(error){
            alert("Login Error. " + error?.response?.data?.error)
        }

        setIsSubmiting(false);

    }

    return (
        <section className={`loginPage publicPage`}>

            <div className="logoContainer">

                <Image 
                    src={hireMi}
                    alt="Logo"
                    layout="fill"
                    className="logo"
                />

            </div>

            <div className="publicPageContent">

                <form onSubmit={onSubmit}> 

                    <PublicInput
                        image={mail}
                        placeholder="Email..."
                        type="email"
                        inValueChange={e => setEmail(e.target.value)}
                        value={email}
                        validateMessage="Invalid Email"
                        showValidateMessage={email && !validateEmail(email)}
                        />

                    <PublicInput
                        image={key}
                        placeholder="Password..."
                        type="password"
                        inValueChange={e => setPassword(e.target.value)}
                        value={password}
                        validateMessage="Password must have at least 8 characters"
                        showValidateMessage={password && !validatePassword(password)}
                    />

                    <Button 
                        text="Login"
                        type="submit"
                        disabled={!loginIsValid() || isSubmiting}
                    />

                </form>

                <div className="publicPageFooter">
                    <p>Dont you have an account yet?</p>
                    <Link href="/signup">Sign Up to HireMi</Link>
                </div>

            </div>
        </section>
    );
}


export default Login