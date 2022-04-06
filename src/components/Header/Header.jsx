import './styles.css'
import Logo from '../Logo/Logo'
import InputSearch from '../InputSearch/InputSearch'

function Header({searchItem, setSearchItem, filterCards, setFilterOn, handleChange}){
    return(
        <div className='header'>
            <Logo></Logo>
            <InputSearch searchItem={searchItem} setSearchItem={setSearchItem} filterCards={filterCards} setFilterOn={setFilterOn} handleChange={handleChange}></InputSearch>
        </div>
    )
}

export default Header