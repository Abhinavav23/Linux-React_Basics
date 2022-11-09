import './SearchBar.css';

export function SearchBar(){
    return (
        <div>
            <input className="search" type="text" placeholder="search here"/>
            <button>search</button>
        </div>
    )
}