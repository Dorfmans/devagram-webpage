import { useEffect, useRef } from "react";

const ImageUpload = ({
    className= '',
    setImage,
    imagePreview,
    imagePreviewClassName= '',
    inSetRef
}) => {

    const inputRef = useRef(null);

    useEffect(() => {
        if(!inSetRef){
            return;
        }

        inRefSet(inputRef?.current);
    }, [inputRef?.current]);

    const fileSelector = () => {
        inputRef?.current?.click();
    }

    const inImageUpload = () => {

        if(!inputRef?.current?.files?.length){
            return;
        }

        const file = inputRef?.current?.files[0];
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onloadend = () => {
            setImage({
                preview: fileReader.result,
                file
            });
        }   
    }

    return (
        <div className={`uploadImageContainer ${className}`} onClick={fileSelector}>
            {imagePreview && (
                <div className="imagePreviewContainer">
                    <img
                        src={imagePreview}
                        alt='Image Preview'
                        className={imagePreviewClassName}
                    />
                </div>
            )}

            <input 
                type='file' 
                className='hidden' 
                accept="image/*"
                ref={inputRef}
                onChange={inImageUpload}
            /> 
        </div>
    );
};

export default ImageUpload;