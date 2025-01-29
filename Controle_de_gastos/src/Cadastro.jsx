import { useState } from "react"

export default function Cadastro(){
    const [nome,setNome] = useState('')
    const [valor,setValor] = useState(0)
    const [data,setData] = useState('')
    const [categoria,setCategoria] = useState('')

    function validar_campos(){
        // Data atual
        const data_atual = new Date()
        // Pegando campos do formulário
        const name = document.getElementById('nome')
        const value = document.getElementById('valor')
        const category = document.getElementById('categoria')
        const date = document.getElementById('data')
        // Verificando se todos os campos foram preenchidos
        if( name !== '' && value !== 0 && category !== '' && date !==''){
            // 'Setando' os 'states'
            setNome(name.value)
            setValor(value.value)
            setCategoria(category.value)
            setData(date.value)
            // Verificar se o valor é válido
            if(valor<=0){
                alert('Valor inválido')
            }
            // Verificar se a data digitada é anterior a data atual
            if(data.split('-')[0]< data_atual.getFullYear()){
                alert("Data passada")
            }
            // limpar campos
            name.value = ''
            value.value = 0
            category.value = ''
            date.value = ''
        }else{
            alert('Preencha todos os campos')
        }
        

    }

    return(
        <div>
            <label htmlFor="nome">Despesa: </label>
            <input type="text" name="nome" id="nome" />
            <label htmlFor="valor">Valor:</label>
            <input type="number" name="valor" id="valor"/>
            <label htmlFor="data">Data:</label>
            <input type="date" name="data" id="data"/>
            <select name="categoria" id="categoria">
                <option value="compras">Compras</option>
                <option value="cursos">Cursos</option>
                <option value="streaming">Streaming</option>
                <option value="alimentacao">Alimentação</option>
                <option value="transporte">Transporte</option>
            </select>
            <button id="btn_adicionar" onClick={validar_campos}>Adicionar</button>
        </div>
    )
}