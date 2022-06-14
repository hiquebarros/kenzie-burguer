import "./styles.css";
import logo from "../../img/logo.svg";
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
        <img src={logo} />
        <InputSearch
          searchItem={searchItem}
          setSearchItem={setSearchItem}
          filterCards={filterCards}
          setFilterOn={setFilterOn}
          handleChange={handleChange}
        />
      </div>
    </div>
  );
}

export default Header;
