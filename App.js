import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';


import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import {FaPen} from 'react-icons/fa'


 function App() {

    // OS States NOS PERMITE MANIPULAR OS DADOS
   //CRIAR UM STATE PARA LISTA GERAL
   const [lista, setLista ] = useState([]);
   //CRIAR UM STATE PARA USUARIOS que vai ser um nome (string) e não uma lista
   const [nome, setNome ] = useState('');

  //CRIAR UM STATE PARA EMAIL que vai ser um email (string) e não uma lista
  const [email, setEmail ] = useState('');
  //CRIAR UM STATE PARA SENHA que vai ser um senha (string) e não uma lista
  const [senha, setSenha ] = useState('');
  ///CRIAR O STATE ID PARA NO CASO PODER PASSAR  DE EDITAR OU DELETAR
  const [id, setId ] = useState('');


  //ASSIM QUE FOR CARREGADO A TELA CHAMA A FUNÇÃO listarDados
  useEffect( ()=> {

 //CRIAR METODO PARA LISTAR
 listarDados ()
    
  }, [])
 
//VAMOS FAZER A FUNÇÃO listarDados, COMO VAI CHAMAR UMA API ela tem que ser ASYNC

async function listarDados (){
  /* CRIAR UMA CONSTATNTE CHAMADA res 
  QUE VAI PEGAR RESULTADO LA NA API (QUE ESTA NO SERVIDOR LOCAL)
*/
const res = await axios.get('http://localhost/apireact/listar.php')
//Depois que veio o resultado passa os dados para o setLista (nesse caso passa o resultode 2 paramentro, suceeso e reesult)
setLista(res.data.result);
//Vamos exibir no console.log para testar e pq  Ainda não temos TELA para MOSTRAR
console.log(res.data.result)
}
return (

  // DIV DO BROOTSTRAP, PODERIA FAZER O Sttyled. 
  // RECEBER DADOS (lista)
 <div className = "container">
  <span className=""> lista de USUARIOS</span>
<div className="col-md-6 p-2">

    <ul class = "list-group">
      
      {lista.map(item => (
        <li class = "list-group-item">{item.nome}</li>
      ))}
      
    </ul>
</div>

 </div>


)


}
export default App;