import { Observable } from 'rxjs';
import { Login } from 'src/models/Login';
import { Usuario } from 'src/models/usuario';

export interface ILoginService {
    login(dados: Login) : Observable<Usuario>;
}