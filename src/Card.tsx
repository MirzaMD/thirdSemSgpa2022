import bc1 from './assets/backgrounds/https___bear-images.sfo2.cdn.digitaloceanspaces.com_manuel-1679490599-0.jpeg'
import bc2 from './assets/backgrounds/istockphoto-1065485678-612x612.jpg'
import bc3 from './assets/backgrounds/software-development-icon-outline-icon-style-vector.jpg'
import bc4 from './assets/backgrounds/software-engineering-concept-is-linear-icon-on-white-background-vector_665522_wh1200.png'
import astroWorld from './assets/astroWorld.jpg'
import { useState, useEffect } from 'react'
import { SgpaCal } from './SgpaCal'
export function Card({marks, name, picture}:{ marks:number[],name:string,picture:string|null}):JSX.Element{
    const subjects:string[]=['Maths','DDCO','OS','DSA','C++','DSA Labs','Excel','SCR','PE']
    const sgpa=SgpaCal(marks);
    const texty:React.CSSProperties={
      textShadow:"3px 3px 5px black"
    }
    const textty:React.CSSProperties={
      textShadow:"1px 2px 3px white"
    }
    const texttty:React.CSSProperties={
      textShadow:"1px 2px 3px black"
    }
const backgrounds:string[]=[bc1,bc2,bc3,bc4]
const [photo,setPhoto]=useState<string>('');
useEffect(()=>{
  setPhoto(()=>{
    const rand:number=Math.floor(Math.random()*4);
    console.log(rand)
    return backgrounds[rand];
  })

},[photo])
const box:React.CSSProperties={
  backgroundImage:`url(${photo})`,
  backgroundSize:'cover',
  backgroundAttachment:'fixed',
  backgroundPosition:'center',
  backgroundRepeat:'no-repeat',
}
const containerShadow:React.CSSProperties={
  boxShadow:'4px 4px 6px #191970'
}
    return(
          <section className={`flex flex-col w-[250px] sm:w-[300px] h-[500px] gap-y-1 bg-yellow-500
          justify-center items-center rounded-lg border-3 border-[#301934] mt-2`} style={{...box,...containerShadow}}>
            <img src={picture?picture:astroWorld} alt='profile picture' className='h-[150px] sm:h-[200px] rounded-full mt-1'/>
            <h1 className={`font-serif text-md sm:text-xl text-[black] font-extrabold`} style={textty}>
              {name}</h1>
            <div  className={`grid grid-cols-2 bg-[linear-gradient(black,#36454F,#36454F,#28282B,#353935)] gap-y-3 w-[80%]
              rounded-md`}>
           {subjects.map((subs,index)=>(
             <p key={index}
             className={`font-mono text-sm sm:text-md text-white font-extrabold `}
             style={texty}>{subs}:{marks[index]}</p>
           ))}
           </div>
           <h1 
           className={`font-mono font-bold text-md sm:text-xl text-[white] bg-[#00000066] rounded-sm`} 
           style={texttty}>Sgpa:{sgpa}</h1>
          </section>
          )
}