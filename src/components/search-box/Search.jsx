import { Component } from "react";
import './search-box.styles.css'

class Search extends Component {
    render() {
        const { onChangeHandler, placeholder } = this.props;

        return (
            <input
                className={`search-box ${this.props.className}`}
                type='search'
                placeholder={placeholder}
                onChange={onChangeHandler} />
        )
    }
}

export default Search