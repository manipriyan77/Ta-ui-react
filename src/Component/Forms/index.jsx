import React from 'react'
import './index.scss'
import { FaSearch } from "react-icons/fa";


export default function FormInputs(props) {
    const { type, name, id, value, onChange, placeholder } = props;

    return (
        <>
            <div className='form-group search-container'>
                <input
                    type={type}
                    name={name}
                    id={id}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className='form-control'
                />
                <div className='search-icon '>
                    <FaSearch/>
                </div>
            </div>
        </>
    );
}

