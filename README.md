*Para poder rodar os testes utilizando o cypress, é primeiro necessário instalar o node.js presente em: https://nodejs.org/en/learn/getting-started/how-to-install-nodejs*
*Para instalar o cypress, você utiliza o comando "npm install cypress".*

*A página que foi testada está presente em ../teste.html, o teste está em ../cypress/e2e/spec.cy, ambos estão presentes no mesmo diretório.*

No diretório, você vai em "abrir no terminal". Após isso será aberto o terminal para digitar os comandos seguintes.

![image](https://github.com/user-attachments/assets/15a7b4ab-79bf-4ffd-840a-cbda54c3253b)

- Open
  
![image](https://github.com/user-attachments/assets/53c0e2ed-f4a3-494d-8aa2-589e9f7e0f5a)

Exeuta o teste podendo visualizar a página. 

Caso for selecionado essa opção, deve-se selecionar a opção abaixo:

![image](https://github.com/user-attachments/assets/f9edf441-f3f6-4771-8881-a9b7f7a2d4c6)

Selecionar a opção chrome e depois prosseguir.

![image](https://github.com/user-attachments/assets/0e6a9249-d609-4f62-982b-c798ac7cfbd9)

Selecionar a opção Specs e escolher o teste desejado, nesse caso é o spec.cy.js

![image](https://github.com/user-attachments/assets/baf357c9-edc1-4221-958d-ab0a3dc87400)

Executando esse passo a passo, é só esperar a execução dos testes.

![image](https://github.com/user-attachments/assets/5ada95d8-9dd8-421c-b025-af829e2ddd72)


- Run
- 
![image](https://github.com/user-attachments/assets/041b5e44-4819-47a1-8a22-4c7ffb334007)

Utilizando o run, somente executa o teste sem a simulação. Esta opção automaticamente tira foto da tela e é armazenado no caminho ..\cypress\screenshots\spec.cy.js


*Abaixo está o exemplo de como é demonstrado o resultado dos testes.*
Quando o teste não passa:
![image](https://github.com/user-attachments/assets/fcac19f0-e38f-4c96-9ad8-bf069aa28aca)

Quando o teste passa:
![image](https://github.com/user-attachments/assets/8f67e2fb-1793-47a9-9570-875c96a07c8b)
