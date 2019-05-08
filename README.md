# Vetor TODO API
> Aplicação / API de tarefas da Vetor
> **[ Usa lowdb para armazenar os dados em um banco de dados JSON. A aplicação liga a API, e fornece um log de uso e funcionamento.]**

## Para desenvolvedores
> ## Clone & Instalação
> Antes de baixar e instalar, certifique-se de que tem o git e node instalados.
> Após instalados pode seguir com os passos abaixo no seu terminal:

```console
git clone https://github.com/Dikz/vetortodo-api.git
cd vetortodo-api
npm install
npm start
```


> ## Após iniciar
> A rota principal é: http://localhost:3080/api/tasks
#### Metodos:
* **[GET]** ➡️ _/tasks_ - Lista todas as tarefas
* **[GET]** ➡️ _/tasks/{id}_ - Mostra uma tarefa
* **[POST]** ➡️ _/tasks_ - Cria uma nova tarefa
* **[PUT]** ➡️ _/tasks/{id}_ - Edita uma tarefa
* **[DELETE]** ➡️ _/tasks/{id}_ - Apaga uma tarefa
