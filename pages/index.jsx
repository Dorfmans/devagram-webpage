import { useState, useRef } from "react";
import { Avatar } from "../components/avatar/indes";
import { Button } from "../components/buttons";
import { ImageUpload } from "../components/imageUpload";

export default function Home() {

  const [image, setImage] = useState(null);
  const inputRef = useRef(null)

  console.log(image);

  return (
    <>
      <h1>HireMI</h1>
      <button onClick={() => inputRef?.current?.click()}>Image Upload</button>

      <ImageUpload 
        setImage={setImage} 
        imagePreview={image?.preview}
        inRefSet={(ref) => inputRef.current = ref}/>
      
      <div style={{width: 200}}>
        <Avatar />
        <Button
          text={'Login'}
          color={'primary'}
          handleClick={() => {console.log('clicked')}}/>
      </div>
    </>
  );
}
