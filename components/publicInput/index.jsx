import Image from "next/image";

const PublicInput = ({
    image,
    type,
    placeholder,
    value ="",
    showValidateMessage = false,
    validateMessage ="",
    inValueChange

}) => {
    return(
        <div className="publicInputContainer">
            
            <div className="publicInput">
                
                <Image 
                    src={image}
                    alt="Input Icon"
                    className="publicInputIcon"
                    width={20}
                    height={20}
                /> 

                <input 
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={inValueChange}
                />

            </div>

                {showValidateMessage && <p className="validateMessage">{validateMessage}</p>}

        </div>
    );
};


export default PublicInput