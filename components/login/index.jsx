import PublicInput from "../publicInput";
import Button from "../buttons";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link"

import mail from "../../public/images/mail.svg";
import key from "../../public/images/key.svg";
import hireMi from "../../public/images/hireMi.svg";



const Login = () => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
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

                <form>

                    <PublicInput
                        image={mail}
                        placeholder="Email..."
                        type="email"
                        inValueChange={e => setEmail(e.target.value)}
                        value={email}

                    />

                    <PublicInput
                        image={key}
                        placeholder="Password..."
                        type="password"
                        inValueChange={e => setPassword(e.target.value)}
                        value={password}
                    />

                    <Button 
                        text="Login"
                        type="submit"
                        disabled={false}
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