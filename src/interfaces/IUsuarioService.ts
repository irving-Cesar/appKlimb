import { Observable } from 'rxjs';
import { Usuario } from 'src/models/Usuario';

export interface IUsuarioService {
    cadastrar(usuario : Usuario) : Observable<Usuario>;
    atualizar(usuario : Usuario) : Observable<Usuario>;
    logar(usuario : Usuario) : void ;
    retornarUsuarioLogado() : Usuario;
} 