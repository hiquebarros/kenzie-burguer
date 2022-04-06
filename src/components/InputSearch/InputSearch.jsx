import './styles.css'

function InputSearch({searchItem, setSearchItem, filterCards, setFilterOn, handleChange}){
    return(
        <div className='input-search'>
            <input placeholder='Digitar pesquisa' onChange={(evt) => handleChange(evt.target.value)}></input>
            <button onClick={()=> filterCards(searchItem)}>Pesquisar</button>
        </div>
    )
}

export default InputSearch