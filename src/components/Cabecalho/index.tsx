import { HeaderT } from './styles'

export type Props = {
  children: string
}

const Cabecalho = ({ children }: Props) => <HeaderT>{children}</HeaderT>

export default Cabecalho
