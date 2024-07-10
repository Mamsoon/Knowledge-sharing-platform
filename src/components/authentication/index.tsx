import logo from '../../../public/assets/Logo.svg'
export default function Authentication({handleAuthActions,setAuthState,authState,setProcess,process}:any){
    console.log('process',process)
    return(
        <div className="h-full p-8 bg-slate-200">
            <div className="h-full rounded-2xl px-8 bg-white">
                <div className="h-[30%] items-center flex">
                    <img src={logo} />
                </div>
                <div className="h-[60%] grid grid-cols-2">
                    <div className='font-serif'>
                    <p>{process === 'email' ? 'STEP2': 'STEP1'}</p>
                    <p className='text-bold text-4xl'>{process === 'email' ? 'Create an account to continue': 'Enter your email address to continue'}</p>
                    <p>{process === 'email' ? 'You’ll be able to log in to Dingoo with this email address and password.': 'Login to your account.If you dont have one, you will be prompted to create one.'}</p>
                </div> 
                    <div className='px-16 pt-4'>
                        {process === 'email' ? <><p>Enter a password to create your account with</p><input type='password'
                        className='w-full border border-slate-400 h-12 placeholder:pl-8 outline outline-none rounded' 
                        onChange={(event) => handleAuthActions('password',event)} 
                        value={authState.password}
                        placeholder='Choose a password'/></> : <input type='text' 
                        className='w-full border border-slate-400 h-12 placeholder:pl-8 outline outline-none rounded' 
                        onChange={(event) => handleAuthActions('email',event)} 
                        value={authState.mailId}
                        placeholder='Email'/>}
                        <div className='flex flex-row mt-4'>
                        <p className='text-xs basis-2/3'> {process === 'email' ? 'Use a minimum of 6 characters (case sensitive) with at least one number or special character.' : ''}</p> 
                        <button className='bg-black text-white p-2 basis-1/3 rounded' onClick={() => setProcess('email')}>{process === 'email' ? 'Agree & Continue': 'Continue'}</button>
                        </div>
                    </div>
                </div>
                {process === 'email' && <p className='h-[10%] text-[10px]'>Dingoo will use your data to personalise and improve your Dingoo experience and to send you information about Dingoo. You can change your communication preferences anytime. We may use your data as described in our Privacy Policy, including sharing it with The Test of Companies. By clicking "Agree & Continue", you agree to our Subscriber Agreement and acknowledge that you have read our Privacy Policy and Collection Statement.</p>}
            </div>
        </div>
    )
}