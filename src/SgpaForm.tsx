import { useForm } from 'react-hook-form';
import { z } from 'zod'
import { useState } from 'react'
import { MarksInput } from './MarksInput';
import { NameInput } from './NameInput';
import { ImgInput } from './ImgInput';
import { zodResolver } from '@hookform/resolvers/zod';
import { Card } from './Card';
import { SgpaHeader } from './SgpaHeader';
const DetailsSchema=z.object({
name:z.string().min(1,"enter your name").max(10,"name length can exceed 10 characters"),
pic:z.instanceof(File,{
    message:'Upload your image'
}),    
maths:z.string().transform((val)=>Number(val))
       .refine((val)=>(val>=0 && val<=100),{
        message:"Enter valid marks..."
       }),
ddco:z.string().transform((val)=>Number(val))
      .refine((val)=>(val>=0 && val<=100),{
       message:"Enter valid marks..."
       }),
os:z.string().transform((val)=>Number(val))
.refine((val)=>(val>=0 && val<=100),{
 message:"Enter valid marks..."
 }),
 dsa:z.string().transform((val)=>Number(val))
 .refine((val)=>(val>=0 && val<=100),{
  message:"Enter valid marks..."
  }),
cpp:z.string().transform((val)=>Number(val))
.refine((val)=>(val>=0 && val<=100),{
 message:"Enter valid marks..."
 }),  
labs:z.string().transform((val)=>Number(val))
.refine((val)=>(val>=0 && val<=100),{
 message:"Enter valid marks..."
 }),
excel:z.string().transform((val)=>Number(val))
.refine((val)=>(val>=0 && val<=100),{
 message:"Enter valid marks..."
 }),
scr:z.string().transform((val)=>Number(val))
.refine((val)=>(val>=0 && val<=100),{
 message:"Enter valid marks..."
 }),
pe:z.string().transform((val)=>Number(val)).optional()
})
export function SgpaForm():JSX.Element{
    const [marks,setMarks]=useState<number[]>(Array(9).fill(0));
    const [name,setName]=useState<string>('');
    const [picture,setPicture]=useState<string |null>(null)
    const [displayCard,setDisplayCard]=useState<boolean>(false)
    const subjects:string[]=['Mathematics ||| for CSE stream', 'Digital design computer organization'
        , 'Operating systems', 'Data structures and applications' , 'Object oriented programming with C++',
        'DSA Labroratory','Data analytics with Microsoft Excel','Social connect and responsibility',
         'Physical education/NSS/Yoga']
    const regs:string[]=['maths','ddco','os','dsa','cpp','labs','excel','scr','pe']
    const { register, handleSubmit, reset, setValue, 
        formState:{errors,isSubmitting}}=useForm<any>({
        resolver:zodResolver(DetailsSchema),
    })  
    async function sending(data:any):Promise<void>{
        setMarks([
            data.maths,
            data.ddco,
            data.os,
            data.dsa,
            data.cpp,
            data.labs,
            data.excel,
            data.scr,
            data.pe
        ])
        setName(data.name)
        await new Promise((resolve)=>{
            setTimeout(()=>{
                setDisplayCard(true);
                resolve(null)
            },3000)
        })
        reset();
    } 
    function getImage(event:React.ChangeEvent<HTMLInputElement>):void{
          const file=event.target.files?.[0];
          if(file){
            setValue("pic",file)
            setPicture(URL.createObjectURL(file))
          }
    }   
    return(
    <section className='w-full h-full flex flex-col items-center'>
        <SgpaHeader/>
        {!displayCard?
        ( <form onSubmit={handleSubmit(sending)}
        className='w-full flex flex-col items-center gap-y-4'> 
           <div className='flex items-start
            w-full flex-col '>
           <NameInput register={register("name")}/>
           {errors.name && 
           (<p className='text-red-600 font-bold font-serif text-center'>{`${errors.name.message}`}</p>)}
           <ImgInput register={register("pic")} getImage={getImage}/>
           {errors.pic && 
           (<p className='text-red-600 font-bold font-serif text-center'>{`${errors.pic.message}`}</p>)}
           </div>
        <div className='w-[90%] flex flex-col gap-y-4 mt-2'>
       {subjects.map((subs,index)=>(
           <div key={index} >
               <MarksInput subject={subs} register={register(regs[index])}/>
               {errors[regs[index]] && 
               (
                   <p className='text-red-600 font-bold font-serif text-center'>{`${errors[regs[index]]?.message}`}</p>
               )}
           </div>
       ))}
       </div>
       <button
       disabled={isSubmitting}
       className={`${isSubmitting?'bg-[#36454F]':'bg-[#252571]'} text-[whitesmoke] font-serif w-[80px] rounded-sm`}
       >{isSubmitting?'Loading...':'Submit'}</button> 
       </form>)
       :
       <Card marks={marks} name={name} picture={picture}/>
       }
    </section>
    )
}