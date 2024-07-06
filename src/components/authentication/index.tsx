import logo from '../../../public/assets/Logo.svg'
export default function Authentication(){
    return(
        <div className="h-full p-8 bg-slate-200">
            <div className="h-full rounded-2xl px-8 bg-white">
                <div className="h-[30%] items-center flex">
                    <img src={logo} />
                </div>
                <div className="h-[70%] grid grid-cols-2">
                    <div className='font-serif'>
                        <p>STEP1</p>
                        <p className='text-bold text-4xl'>Enter your email address to continue</p>
                        <p>Login to your account.If you don't have one, you will be prompted to create one.</p>
                    </div>
                    <div className='px-16 pt-8'>
                        <input className='w-full border border-slate-400 h-12 placeholder:pl-8 outline outline-none rounded' placeholder='Email'/>
                        <button className='bg-black text-white float-right mt-4 w-24 p-2 rounded'>Continue</button>
                    </div>
                </div>
            </div>
        </div>
    )
}