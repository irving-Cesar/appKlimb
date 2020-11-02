import { Observable } from 'rxjs';
import { IUsuarioService } from 'src/interfaces/IUsuarioService';
import { Usuario } from 'src/models/Usuario';

export class UsuarioService implements IUsuarioService {
    cadastrar(usuario: Usuario): Observable<Usuario> {
        throw new Error('Method not implemented.');
    }
    atualizar(usuario: Usuario): Observable<Usuario> {
        throw new Error('Method not implemented.');
    }
    logar(usuario: Usuario): void {
        throw new Error('Method not implemented.');
    }
    retornarUsuarioLogado(): Usuario {
        throw new Error('Method not implemented.');
    }
    
}