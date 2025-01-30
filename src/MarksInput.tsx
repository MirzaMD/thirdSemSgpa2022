
export function MarksInput({subject,register}:{subject:string,register:any}):JSX.Element{
    return(
<div className={`flex flex-col w-full gap-y-2
    justify-center items-center`}>
 <label htmlFor={subject}
 className={`bg-[#36454F] w-[200px] sm:w-[350px] text-[whitesmoke]
  rounded-xl font-serif text-sm sm:text-lg text-center`}>{subject}</label>
 <input type='number' id={subject} placeholder="enter the marks"
 className={`w-[90%] bg-white rounded-md border-1 border-gray-600`}
 {...register}/>
</div>
    )
}