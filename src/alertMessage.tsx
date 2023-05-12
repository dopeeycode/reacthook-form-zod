import { toast } from 'react-toastify'

export default function alertMessageAfterCreatedUser() {
  return (
    {
      toast.sucess('😍 Usuário criado com sucesso.', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })
    }
  )
}
