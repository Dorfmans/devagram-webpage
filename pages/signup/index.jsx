import { useState } from "react"
import Image from "next/image"
import ImageUpload from "../../components/imageUpload"
import PublicInput from "../../components/publicInput"
import Button from "../../components/buttons"
import Link from "next/link"

import hireMi from "../../public/images/hireMi.svg"
import profileON from "../../public/images/profileON.svg"
import mail from "../../public/images/mail.svg"
import key from "../../public/images/key.svg"
import avatar from "../../public/images/avatar.svg"


const SignUp = () => {
    
    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    

    return (


        
        <section className={`signUpPage publicPage`}>

            <div className="logoContainer desktop">
                <Image
                    src={hireMi}
                    alt="Logo"
                    layout="fill"
                    className="logo" />
            </div>

            <div className="publicPageContent">

                <form>

                    <ImageUpload
                        className=""
                        setImage={setImage}
                        imagePreview={image?.preview || avatar.src}
                        imagePreviewClassName="avatar avatarPreview"
                        // inSetRef={}
                        />

                    <PublicInput
                        image={profileON}
                        placeholder="Name..."
                        type="text"
                        inValueChange={e => setName(e.target.value)}
                        value={name}/>

                    <PublicInput
                        image={mail}
                        placeholder="Email..."
                        type="email"
                        inValueChange={e => setEmail(e.target.value)}
                        value={email}/>

                        
                    <PublicInput
                        image={key}
                        placeholder="Password..."
                        type="password"
                        inValueChange={e => setPassword(e.target.value)}
                        value={password}
                    />

                    
                    <PublicInput
                        image={key}
                        placeholder="Confirm Password..."
                        type="password"
                        inValueChange={e => setConfirmPassword(e.target.value)}
                        value={confirmPassword}
                    />

                    <Button
                        text="Sign Up"
                        type="submit"
                        disabled={false}
                    />
                </form>

                <div className="publicPageFooter">
                    <p>Do you have an account?</p>
                    <Link href="/">Login to HireMi</Link>
                </div>
            </div>
        </section>
    )
}

export default SignUp