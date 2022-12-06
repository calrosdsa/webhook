import { getRole } from "../../../context/selectors"
import { useAppSelector } from "../../../utils/hooks.ts/reduxHooks"
import { Roles } from "../redux-models/auth-model"




export interface FilterLocalProps {
  name?:string,
  value?:string
}

export const Ordering:FilterLocalProps[] = [
  { name: 'Fecha creacion',value: '-created' },
  { name: 'Ultima actualizacion',value: '-updated'},
]

export const Estado= () => {
  const role = useAppSelector(getRole)
  const isCliente = role == Roles.cliente || role == Roles.cliente_admin
  // const isFuncionario = role == Roles.funcionario || role ==Roles.funcionario_admin
  const EstadoValue:FilterLocalProps[] = [
    { name: 'Estado',value: '' },
    { name: 'Pendiente',value: '0'},
    { name: `${isCliente? "Esperando respuesta":"Por responder"}`,value: '1'},
    { name: `${isCliente? "Por responder":"Esperando respuesta"}`,value: '2'},
    { name: 'Resuelto',value: '3'},
    { name: 'No resueltos',value: '4'},
  ]
  return EstadoValue
}

export const Prioridad:FilterLocalProps[] = [
    { name: 'Prioridad',value: '' },
    { name: 'Prioridad Baja',value: '0' },
    { name: 'Prioridad Media',value: '1' },
    { name: 'Prioridad Alta',value: '2' },
]
  