import './search-box.styles.css'

const Search = ({ className, placeholder, onChangeHandler }) => {

    return (
        <input
            className={`search-box ${className}`}
            type='search'
            placeholder={placeholder}
            onChange={onChangeHandler} />
    )
}


export default Search