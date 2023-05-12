
import { useState } from 'react'


/**
 * To-do
 * 
 * [ ] Validação / transformações
 * [ ] Field Arrays
 * [ ] Upload de arquivos
 * [ ] Composition Pattern
 */

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

// Indexando o tipo de cada informação contida no formulario;
const createUserFormScheme = z.object({
  email: z.string()
    .nonempty('O e-mail é obrigatório')
    .email('Formato de e-mail inválido'),
  password: z.string()
    .min(6, 'Míinimo 6 caracteres'),
})


export default function App(){
  // Estado pra armazenar os dados retornado pela função do handleSubmit
  const [output, setOutput] = useState('')
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(createUserFormScheme)
  })


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
          <label className='text-zinc-50' htmlFor="email">E-mail</label>
          <input 
            type="email" 
            {...register('email')}
            className="border border-zinc-200 bg-zinc-800 outline-none shadow-sm rounded h-10 px-3 "
          />
          { errors.email && 
          <span 
            className='text-red-400 text-sm font-bold'
          >
            {errors.email.message}
          </span>
          }
        </div>

        <div className="flex flex-col gap-1 font-semibold">
          <label className='text-zinc-50' htmlFor="senha">Senha</label>
          <input 
            type="password" 
            {...register('password')}
            className="border outline-none border-zinc-200 bg-zinc-800 shadow-sm rounded h-10 px-3 "  
          />
          { errors.password && 
          <span 
            className='text-red-400 text-sm font-bold'
          >
            {errors.password.message}
          </span>
          }
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