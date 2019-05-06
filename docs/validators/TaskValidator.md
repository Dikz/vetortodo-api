# TaskValidator
> O TaskValidator foi criado para validar campos da tarefa passados na requisição. Essa classe usa o TaskFields como modelos de campos que são permitidos.

## Como usar o TaskValidator:
```js
TaskValidator.validate(req.body)
```
Passando o req.body como no exemplo acima, ele vai pegar as keys do objeto e verificar se os campos passados por req.body são campos válidos para criar uma tarefa.

### Será retornado então:
#### Se os todos os campos forem válidos:
```json
{
  "id": "Z0idtS1Yo",
  "name": "Nome da tarefa",
  "description": "Descrição da tarefa",
  "amount": 1,
  "createdAt": "2019-05-06T14:05:12.305Z",
  "validate": {
    "invalidFields": [],
    "result": true
  }
}
```
> Em **_invalidFields_** ele retorna uma array vazio pois validou e criou a tarefa e não há campos inválidos. <br />
> Em **_result_** é retornado true pois todos os campos são válidos.

#### Se algum dos campos passados não for válido:
```json
{
  "invalidFields": [
    "campoDeTeste"
  ],
  "validate": false
}
```
> Em **_invalidFields_** ele retorna uma array com os campos que são invalidos. <br />
>Em **_result_** é retornado false pois a validação dos campos encontrou um campo inválido.
