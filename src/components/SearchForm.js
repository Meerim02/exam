import React,{useState} from 'react';

const SearchForm = ({filterBook}) => {


    const [search,setSearch] = useState("")

    const onChange = (e)=> {
        setSearch(e.target.value)
    }

    const onSubmit=(e) => {
        e.preventDefault()
        filterBook('')
    }
    
    return (
        <div>
            <form onSubmit={onSubmit} action="" >
            <input value={search} onChange={onChange} className="from-control mr-4" type="search" name="search" id="search"/>
            <button className="btn btn-primary">Search</button>
            </form>
            
        </div>
    );
};

export default SearchForm;