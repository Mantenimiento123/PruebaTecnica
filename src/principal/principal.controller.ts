import { Controller, Get} from '@nestjs/common';

@Controller({})
export class PrincipalController {
    @Get('/')
    index(){
        return 'Hola desde el controlador principal';
    }
}
