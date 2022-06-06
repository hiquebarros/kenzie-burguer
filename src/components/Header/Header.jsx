import "./styles.css";
import Logo from "../Logo/Logo";
import InputSearch from "../InputSearch/InputSearch";

function Header({
  searchItem,
  setSearchItem,
  filterCards,
  setFilterOn,
  handleChange,
}) {
  return (
    <div className="header-container">
      <div className="header-content">
        <Logo />
        <InputSearch
          searchItem={searchItem}
          setSearchItem={setSearchItem}
          filterCards={filterCards}
          setFilterOn={setFilterOn}
          handleChange={handleChange}
        ></InputSearch>
      </div>
    </div>
  );
}

export default Header;
