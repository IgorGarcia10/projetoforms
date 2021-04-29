//o operador ! se chama
//Definite Assignment Assertions
//Estamos dizendo que a propriedade é obrigatória
//Entretanto, não queremos que o Typescript
//verifique se ela foi inicializada
//estamos prometendo que isso acontecerá em algum momento
export class Pessoa {
    nome!: string;
    fone!: string;
    email!: string;
    profissao!: string;
}