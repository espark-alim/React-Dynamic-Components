import React from 'react'

const Table = ({ data }) => {
    return (
        <table class="table">
            <thead>
                <tr>
                    {Object.keys(data[0]).map((key, index) => (
                        <th key={index}>{key}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        {Object.values(item).map((value, valueIndex) => (
                            <td key={valueIndex}>{value}</td>
                        ))}
                    </tr>
                ))}

            </tbody>
        </table>
    )
}
export default Table;
