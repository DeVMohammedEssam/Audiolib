import React, { Component } from 'react'
export default class BookTemplate extends Component {
  render() {
    return (
     <div className="book-template">
          <div className="container">
            <div className="row">
                <div className="col-3">
                    <div className="book-template__aside">
                        <div className="book-template__aside__image">
                           {asideImage}
                        </div>
                        <div className="book-template__aside__info">
                                <p>معلومات عن الكتاب</p>
                                <hr />

                        </div>

                    </div>
                </div>
                 <div className="col-9">
                    <div className="book-template__content">
                        <div className="book-template__content__abstract">

                        </div>
                        
                    </div>
                </div>
            </div>
      </div>
     </div>
        
   
    )
  }
}
