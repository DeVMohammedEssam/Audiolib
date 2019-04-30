import React, { Component } from 'react'
import { connect } from "react-redux"
import { startGetAllBooks } from "../redux/actions/dashboard"
import BookCard from "./layout/BookCard"
import { Link } from "react-router-dom"
import { booksFilter } from "../filterations/book"
import AddCard from "./layout/AddCard"
class Books extends Component {
  constructor(props) {
    super(props)
    this.state = {
      books: [],
      loaded: false

    }
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(nextProps)
    if (nextProps.books !== prevState.books) {
      return { books: nextProps.books };
    }
    else return null;
  }
  componentDidMount = () => {
    this.props.dispatch(startGetAllBooks()).then(() => {
      this.setState({ loaded: true })
    })
  }
  render() {
    return (
      <div className="books">
        {this.state.loaded ?
          <div className="row">

            <div className="col-3">
              <Link to="/dashboard/books/new">
                <AddCard title="اضافه كتاب " icon="fa fa-plus" />
              </Link>
            </div>
            {booksFilter(this.state.books).map((book) => (
              <div className="col-3">
                <Link to={"/book/" + book._id}>
                  <BookCard 
                  clickable = {true}
                  hasDelete={true}
                  url={book.image}
                  name={book.title} 
                  desc={book.abstract}
                  id={book._id}
                      />
                </Link>
              </div>
            ))}
          </div> :
          <div className="loader">

            <img src="/805(2).gif" />
          </div>

        }
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  books: state.dashboard.books
})
export default connect(mapStateToProps)(Books)