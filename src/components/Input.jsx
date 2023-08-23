import React from 'react'

const Input = ({ type, value, onChange, placeholder }) => {
    return (
        <div className="input-group flex-nowrap">
            <input
                type={type}
                className="form-control"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}
export default Input
