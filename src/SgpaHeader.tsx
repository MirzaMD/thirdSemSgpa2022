export function SgpaHeader():JSX.Element{
    return(
        <header className="flex w-full 
        bg-[linear-gradient(#343434,#36454F,#353935,#28282B)] 
        justify-evenly items-center">
            <img src='/logo.png' className="w-[80px] sm:w-[100px]"/>
            <h1
            className="text-lg sm:text-2xl font-serif text-white">SGPA to Card</h1>
        </header>
    )
}