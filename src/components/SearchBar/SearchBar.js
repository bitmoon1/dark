import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let width = window.innerWidth;
    if (width > 256) {
      return (
        <div class="wrapper">
          <input
            className="search"
            placeholder="🔎 Search Coin"
            type="text"
            onChange={this.props.onChange}
            value={this.props.inputValue}
          />
        </div>
      );
    } else {
      return (
        <div class="wrapper">
          <input
            className="search"
            placeholder="🔎 Search Coin"
            type="text"
            onChange={this.props.onChange}
            value={this.props.inputValue}
          />
        </div>
      );
    }
  }
}
export default SearchBar;
