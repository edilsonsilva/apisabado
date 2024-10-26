# API para aplicação de fontend
### temos quatro endpoints:
> 
    1 - para listar os clientes cadastrados em banco de dados
    2 - para cadastrar os clientes
    3 - para atualizar os clientes
    4 - para deletar os clientes

#### Para utilizar esta api você deve instalar:
> 
    1 - Instalar o XAMPP para ter acesso a o banco de dados Mysql
    você pode fazer o download em:
    <a href="https://sourceforge.net/projects/xampp/files/XAMPP%20Windows/8.2.12/xampp-windows-x64-8.2.12-0-VS16-installer.exe">
    depois de instalado é só clicar nos botões start do APACHE e MYSQL
    para ter acesso ao banco de dados você deve clicar no botão ADMIN do MYSQL. Ele vai abrir o PHPMYADMIN

    2 - pegue o script abaixo e execute na guia SQL do php my admin

    ```sql
    create database apidb;
    use apidb;
    create table cliente(
    idcliente int auto_increment primary key,
    nome varchar(100) not null,
    email varchar(100) not null,
    endereco varchar(100) not null,
    telefone varchar(20),
    idade int);
    ```
    3 - Clique no botão executar para ter o banco de dados

    - * Para o funcionamento da api é necessário instalar o nodejs
        clique neste link: https://nodejs.org/dist/v20.18.0/node-v20.18.0-x64.msi
        faça a instalação do node.
    - * Para testar este projeto faça o download dele e o abra no VSCode.
        Depois de aberto, faça as combinações de teclas CTRL+J para abrir o terminal e execute o comando
        ```
        npm i
        ```
        Isso fará a instalação das dependência.
        Agora, basta executar o projeto com o comando 
        ```
        node index.js
        ```
        Para testar é bom usar o POSTMan

