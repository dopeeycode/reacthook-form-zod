
import { useState } from 'react'
import { useForm } from 'react-hook-form'



export default function App(){
  const [output, setOutput] = useState('')
  const { register, handleSubmit } = useForm()


  function createUser(data: any){
    setOutput(JSON.stringify(data, null, 2));
  }


  return(
    <main className="h-screen font-mono bg-zinc-950 text-zinc-300 gap-10 flex flex-col items-center justify-center">
      <form 
        onSubmit={handleSubmit(createUser)} 
        className="flex flex-col gap-4 w-full max-w-xs"
      >
        <div className="flex flex-col gap-1 font-semibold ">
          <label htmlFor="email">E-mail</label>
          <input 
            type="email" 
            {...register('email')}
            className="border border-zinc-200 outline-none shadow-sm rounded h-10 px-3 text-zinc-800"
          />
        </div>

        <div className="flex flex-col gap-4">
          <label htmlFor="senha">Senha</label>
          <input 
            type="password" 
            {...register('password')}
            className="border outline-none border-zinc-200 shadow-sm rounded h-10 px-3 text-zinc-800"  
          />
        </div>

        <button 
          type="submit"
          className="bg-emerald-500 rounded font-semibold text-white h-10 hover:bg-emerald-600"
        >
          Salvar
        </button>
      </form>
      <pre>{output}</pre>
    </main>
  )
}