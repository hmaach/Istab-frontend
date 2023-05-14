import React, { useEffect } from 'react'
import { useState } from 'react'
import { RiSearchLine } from 'react-icons/ri'
import { search } from '../../app/api/axios';
import { useDispatch } from 'react-redux';
import { setResult } from '../../features/search/searchSlice';

const Search = () => {

    const [query, setQuery] = useState('');
    const [data, setData] = useState({});
    const dispatch = useDispatch()
    const [err, setErr] = useState();


    const handleInputChange = (e) => {
        setQuery(e.target.value);
    }

    const handleSearch = (e) => {
        e.preventDefault()
        search(query)
            .then((data) => {
                setData(data)
            })
            .catch((error) => {
                setErr(error);
            });
        }
        
        useEffect(() => {
            if (data) {
            dispatch(setResult({ searchData: data }));
            // console.log(data);
        }
    }, [data])



    return (
        <div className="rechercher">
            <form id="search-box">
                <input
                    className='search-input'
                    placeholder=" Rechercher..."
                    id="serch-input"
                    type="text"
                    value={query}
                    onChange={handleInputChange}
                />
                <button
                    type='submit'
                >
                    <RiSearchLine
                        id="search-icon1"
                        onClick={handleSearch}
                    />
                </button>
            </form>
        </div>
    )
}

export default Search
