export function NameInput({register}:{register:any}):JSX.Element{
    return(
        <div className={`flex items-center`}>
            <label htmlFor='name'
            className={`px-1 sm:px-2 text-lg sm:text-xl
            font-serif text-[#343434]`}>Name:</label>
            <input id='name' type='text' placeholder="enter your name"
            {...register}/>
        </div>
    )
}