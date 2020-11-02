import { Observable } from 'rxjs';
import { ILoginService } from 'src/interfaces/ILoginService';
import { Login } from 'src/models/Login';
import { Usuario } from 'src/models/usuario';


export class LoginService implements ILoginService  {
    login(dados: Login): Observable<Usuario> {
        throw new Error('Method not implemented.');
    }


}