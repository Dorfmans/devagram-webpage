import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import ImageUpload from "../../components/imageUpload"
import PublicInput from "../../components/publicInput"
import Button from "../../components/buttons"
import { validatePassword, validateEmail, validateName, validateConfirmPassword} from "../../utils/validations"


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

    const signUpIsValid = () => {
        validateName(name)
        && validateEmail(email)
        && validatePassword(password)
        && validateConfirmPassword(password, confirmPassword)
    }
    

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
                        setImage={setImage}
                        imagePreview={image?.preview || avatar.src}
                        imagePreviewClassName="avatar avatarPreview"
                        />

                    <PublicInput
                        image={profileON}
                        placeholder="Name..."
                        type="text"
                        inValueChange={e => setName(e.target.value)}
                        value={name}
                        validateMessage="Name must have at least 3 characters"
                        showValidateMessage={name && !validateName(name)}/>

                    <PublicInput
                        image={mail}
                        placeholder="Email..."
                        type="email"
                        inValueChange={e => setEmail(e.target.value)}
                        value={email}
                        validateMessage="Insert a valid Email"
                        showValidateMessage={email && !validateEmail(email)}/>

                    <PublicInput
                        image={key}
                        placeholder="Password..."
                        type="password"
                        inValueChange={e => setPassword(e.target.value)}
                        value={password}
                        validateMessage="Password must have at least 8 characters"
                        showValidateMessage={password && !validatePassword(password)}/>

                    <PublicInput
                        image={key}
                        placeholder="Confirm Password..."
                        type="password"
                        inValueChange={e => setConfirmPassword(e.target.value)}
                        value={confirmPassword}
                        validateMessage="Please Confirm the Password"
                        showValidateMessage={confirmPassword && !validateConfirmPassword(password, confirmPassword)}/>

                    <Button
                        text="Sign Up"
                        type="submit"
                        disabled={!signUpIsValid()}
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