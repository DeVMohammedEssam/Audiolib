import React, { Component } from 'react'
import {connect} from "react-redux"
import BookCard from "./layout/BookCard"
import {Link } from "react-router-dom"
import AddCard from "./layout/AddCard" 
 class Books extends Component {
  render() {
    return (

         <div className="row">
                 
    <div className="col-3">
         <Link to="/dashboard/books/new">
          <AddCard title="اضافه كتاب " icon="fa fa-plus" />
         </Link>
    </div>
             <div className="col-3">
                <BookCard url="http://placehold.it/100/100" name="احمد كمال" desc={"يتحدث هذا الكتاب عن العصور اهم احداث العصور الوسطى خصيصا الفتره منذ عام"} />

             </div>
               <div className="col-3">
                <BookCard url="http://placehold.it/100/100" name="احمد كمال" desc={"يتحدث هذا الكتاب عن العصور اهم احداث العصور الوسطى خصيصا الفتره منذ عام"} />

             </div>
               <div className="col-3">
                <BookCard url="http://placehold.it/100/100" name="احمد كمال" desc={"يتحدث هذا الكتاب عن العصور اهم احداث العصور الوسطى خصيصا الفتره منذ عام"} />

             </div>
         </div>

    )
  }
}

export default connect()(Books)