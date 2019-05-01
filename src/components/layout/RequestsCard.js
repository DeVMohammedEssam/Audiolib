import React from 'react'

export default function RequestCatd(props) {
  return (
    <div>
       <div className="requests__card">
                <div className="requests__card__header">
                  <p>Email : {props.email}</p>
                  <p>Name: {props.name}</p>
                  <p>Phone: {props.phone}</p>
                  <p className="text-center"> {props.title}</p>
                  </div>
                  <hr />
                  <div className="requests__card__body">
                    <p className="requests__card__body__text">
{props.message}

                      </p>
                    </div>
                </div>
    </div>
  )
}
