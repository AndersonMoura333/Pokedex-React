import React from "react"
import './index.css'
const Pagination = ({page, totalPages, onLeftClick, onRightClick}) =>{
    return (
        <div className="pagination-conteiner">
            <button onClick={onLeftClick} className='iPexDg'>
                <h3>

              &#8249;
                </h3>
            </button>
            <div>{page+1} de {totalPages}</div>
            <button onClick={onRightClick } className='iPexDg'><h3>&#8250;</h3></button>
        </div>
    )
}

export default Pagination