import React, { Component } from 'react'
import $ from "jquery"
import { connect } from "react-redux"
import { startGetBook } from "../redux/actions/index"
import { withRouter } from "react-router-dom"
import GetBookModal from './layout/GetBookModal';
class BookView extends Component {

  constructor(props) {
    super(props)
    this.state = {
      book: {}
    }
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(nextProps)
    if (nextProps.book !== prevState.book && nextProps.book != undefined) {
      return { book: nextProps.book }

    }
    else return null;
  }
  componentDidMount = () => {
    //for play Voice recored
    
        $(window).keydown((e) => {
          if(e.key=="99"){
            console.log("FFFF")
document.getElementById('voice').play();
          }
          if(e.keyCode=="27"){
                       window.location.href = "/"

       //     this.props.history.push("");
          }
        })
    
    this.props.dispatch(startGetBook(this.props.match.params.id))
  }


  render() {
    let book = this.state.book
    return this.state.book ? (
      <div className="book-form pt-5" style={{
        marginBottom: "150px"
      }}>
        <div className="container">
          <GetBookModal title={book.title} />
          <div className="row">
            <div className="col-md-3">
              <div className="book-form__aside">
                <div className="book-form__aside__up">
                  <div className="book-form__aside__up__image" style={{
                    backgroundImage: `url(${book.image})`
                  }}>


                  </div>
                </div>
                <div className="book-form__aside__info">
                  <p>معلومات عن الكتاب</p>
                  <hr />
                  <div className="book-form__inside__info__row mb-3">
                    <span className="font-weight-bold"> اسم الكتاب</span> : {book.title}
                  </div>
                  <div className="book-form__inside__info__row mb-3">
                    <span className="font-weight-bold"> اسم المؤلف </span>: {book.writer_name}
                  </div>

                  <div className="book-form__inside__info__row mb-3">

                    <span className="font-weight-bold">  دار النشر </span>: {book.publisher}
                  </div>
                  <div className="book-form__inside__info__row mb-3">
                    <span className="font-weight-bold"> سنه النشر </span>: {book.year}
                  </div>
                  <div className="book-form__inside__info__row">
                    <span className="font-weight-bold"> مكان النشر  </span>: {book.address}
                  </div>
                </div>


              </div>
            </div>
            <div className="col-md-9">
              <div className="book-form__content " >
                <div
                  className="book-form__content__abstract"
                  style={{ minHeight: "300px", overflow: "hidden", position: "relative", paddingBottom: "6rem" }}
                >
                  <h3>مستلخص الكتاب</h3>
                  <hr />
                  <p>
                    {book.abstract}
                  </p>
                  <div className="wrapper">
                    <div className="book-form__content__btn" style={{ position: "absolute", bottom: "10px", left: "10px" }}>
                      <button
                        type="button"
                        className="blank-button"
                        data-toggle="modal"
                        data-target="#getBookModal"
                      >
                        الحصول على الكتاب
                  </button>



                    </div>
                  </div>
                </div>

                <div className="book-form__content__panel" >

                  <audio id="voice" src={book.voiceUrl} controls autoPlay />

                </div>
                <div className="book-form__content__video">
                  <iframe width="100%" height="450" src={book.videoUrl}>
                  </iframe>

                </div>



              </div>
            </div>
          </div>
        </div>
      </div>

    ) : (
        <div className="loader">
          <img src="/loadingGif.gif" alt="not loaderd" />
        </div>
      )

  }
}
const mapStateToProps = (state) => ({
  books: state.dashboard.books,
  book: state.index.book
})

export default connect(mapStateToProps)(BookView)