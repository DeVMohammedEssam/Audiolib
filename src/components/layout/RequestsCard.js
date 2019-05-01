import React from 'react'

export default function RequestCatd(props) {
  return (
    <div className="card mb-4">
      <h3 className="text-center card-header"> {props.title}</h3>
      <div className="card-body">
        <ul className="requests__card__header" data-lang="en">
          <li className="list-group-item" >
            <span className="text-muted card-subtitle">Email</span>: {props.email}
          </li >
          <li className="list-group-item" ><span className="text-muted ">Name</span>: {props.name}</li >
          <li className="list-group-item"><span className="text-muted">Phone</span>: {props.phone}</li >

        </ul>

      </div>
      <div className="card-footer">
        <p >
          {props.message}
        </p>
      </div>
    </div>
  )
}
