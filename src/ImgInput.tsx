import { useRef } from 'react'
import { FaUpload } from "react-icons/fa";
export function ImgInput({register,getImage}:{register:any , getImage:any}):JSX.Element{
    const imgRef=useRef<HTMLInputElement | null>(null);
    function handleClick():void{
        imgRef.current?.click();
    }
    return(
        <div className='flex gap-x-1 justify-center items-center'>
        <input type='file' hidden {...register} ref={imgRef} onChange={getImage}/>
        <label className={`font-serif text-md sm:text-lg px-1 sm:px-2
            text-[#343434] `}>Upload Image:</label>
        <FaUpload onClick={handleClick}
        className={` text-md sm:text-lg text-[#36454F]`}/>
        </div>
    )
}