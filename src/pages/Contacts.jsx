 import React, { Suspense, useState } from "react"
 import { useRef } from "react";
 import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import Fox from '../models/fox'
import  Loader  from  "../Components/Loader";
import useAlert from "../hooks/useAlert";
import Alert from "../Components/Alert";


const Contacts = () => {

const formRef= useRef(null);
const [form, setForm] = useState({name:'', email:'',message:''});
const [isloading, setisLoading] = useState(false);
const [currentAnimation, setcurrentAnimation] = useState('idle');
const {alert,showAlert,hideAlert}=useAlert();

const HandleChange = (e)=>{
 setForm({...form,[e.target.name] : e.target.value})

};
const HandleFocus = ()=> setcurrentAnimation('walk');
const HandleBlur = ()=> setcurrentAnimation('idle');
const HandleSubmit =(e)=>{
  e.preventDefault();
  setisLoading(true);
  setcurrentAnimation('hit');
  emailjs.send(
   import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
   import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,{
    from_name : form.name,
    to_name : 'Arsh',
    from_email:form.email,
    to_email:'arshnoorsinghkairon@gmail.com',
    message:form.message
   },
   import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,

  ).then(()=>{
    setisLoading(false);
    setForm({name:'',email:'',message:''})
    showAlert({show:true, text:'Massege sent successfuly!',type:'success'})
    
    setTimeout(()=>{
      hideAlert(false);
      setcurrentAnimation('idle');
      setForm({name:'',email:'',message:''})
    },[3000])


   
  }, (error)=>{
     setisLoading(false);
     setcurrentAnimation('idle');
     console.error(error);
     showAlert({show:true, text:'Dindt recieve',type:'danger'})

    
  });

};

  return (
    <section className="relative flex lg:flex-row flex-col max-container">
       

    <div className="flex-1 min-w-[50%] flex flex-col">
      <h1>
      <b>Welcome to the get in touch page of my portfolio!!
         <br/>
         this fox is really friendly.... <br/> Go on type in your messege and see what happens and once i get your message it will stop running!</b>
      </h1>
      <form className="w-full flex flex-col gap-7 mt-14"
         
         onSubmit={HandleSubmit}
      >


       <label className="text-black-500 font-semibold">
        Name
         <input  className="input"
         type="text"
         name="name"
         placeholder="type your name here"
         required
         value={form.name}
         onChange={HandleChange}
         onFocus={HandleFocus}
         onBlur={HandleBlur}

         />
        
      </label>
      <label className="text-black-500 font-semibold">
        Email
        <input  className="input"
         type="text"
         name="email"
         placeholder="abcd@gmial.com"
         required
         value={form.email}
         onChange={HandleChange}
         onFocus={HandleFocus}
         onBlur={HandleBlur}

        />
        
      </label>
      <label className="text-black-500 font-semibold">
        Message
        <textarea  className="textarea"
         rows={4}
         name="message"
         placeholder="type your Massege here"
         required
         value={form.message}
         onChange={HandleChange}
         onFocus={HandleFocus}
         onBlur={HandleBlur}

        />
        
      </label>
      <button 
      type="submit" 
      className="btn"
      onFocus={HandleFocus}
      onBlur={HandleBlur}
      disabled={isloading}
      >
        {isloading? 'Sending...' : 'Send Massege'}
      </button>
      </form>
    </div>

    <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
     <Canvas
     camera={{
      position:[0,0,5],
      fov: 75,
      near: 0.1,
      far:1000
     }}
     >

      <directionalLight intensity={2.5} position={[0,0,1]} />
      <ambientLight intensity={0.5}/>
      <Suspense fallback={<Loader/>}>
       <Fox
        position={[0.5,0.35,0]}
        rotation={[12.6,-0.6,0]}
        scale={[0.5,0.5,0.5]}
        currentAnimation={currentAnimation}
       />
      </Suspense>
       
     </Canvas>

    </div>

    </section>
  )
}

export default Contacts