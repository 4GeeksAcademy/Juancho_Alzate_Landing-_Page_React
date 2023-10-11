import React from 'react'

const Cards = (props) => {
  return (
    
    <div class="card text-center">
        <img src="https://picsum.photos/500/325" class="card-img-top" alt="Img Card" />
        <div class="card-body">
            <h5 class="card-title">{props.title}</h5>
            <p class="card-text">{props.description}</p>
        </div>
        <div className="card-footer">
            <div className="d-flex justify-content-center align-items-center border p-3">
                <button type="button" class="btn btn-primary">Find Out More!</button>
            </div>
        </div>
    </div>     
  )
}

export default Cards