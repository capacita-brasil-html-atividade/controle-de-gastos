import { useState } from "react"

export default function Cadastro(){
    const [nome,setNome] = useState('')
    const [valor,setValor] = useState(0)
    const [data,setData] = useState('')
    const [categoria,setCategoria] = useState('')

    function validar_campos(){
        // Data atual
        const data_atual = new Date()

        console.log(nome,data,categoria,valor)
        if( nome !== '' && valor !== 0 && categoria !== '' && data !==''){
            // Verificar se o valor é válido
            if(valor<=0){
                alert('Valor inválido. Insira um número maior que zero')
            }
            // Verificar se a data digitada é anterior a data atual
            if(data.split('-')[0]< data_atual.getFullYear()){
                alert("Data passada")
            }
            
            // limpar campos
            setNome('')
            setValor(0)
            setData('')
            setCategoria('')
        }else{
            alert('Preencha todos os campos')
        }
        

    }

    return(
        <div>
            <label htmlFor="nome">Despesa: </label>
            <input type="text" name="nome" id="nome" onChange={(event) => setNome(event.target.value) } value={nome}/>
            <label htmlFor="valor">Valor:</label>
            <input type="number" name="valor" id="valor" onChange={ (event) => setValor(event.target.value)} value={valor}/>
            <label htmlFor="data">Data:</label>
            <input type="date" name="data" id="data" onChange={(event) => setData(event.target.value)} value={data}/>
            <select name="categoria" id="categoria" onChange={(event) => setCategoria(event.target.value)} value={categoria}>
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