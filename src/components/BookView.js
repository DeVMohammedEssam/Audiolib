import React, { Component } from 'react'
import $ from "jquery"
import { connect } from "react-redux"
import { startGetBook } from "../redux/actions/index"
import { withRouter } from "react-router-dom"
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
    this.props.dispatch(startGetBook(this.props.match.params.id))
  }


  render() {
    let book = this.state.book
    return this.state.book ? (
      <div className="book-form" style={{
        marginBottom: "150px;"
      }}>
        <div className="container">
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
                  <div className="book-form__inside__info__row">
                    اسم الكتاب : {book.title}
                  </div>
                  <div className="book-form__inside__info__row">
                    اسم المؤلف : {book.writer_name}
                  </div>

                  <div className="book-form__inside__info__row">
                    دار النشر: {book.publisher}
                  </div>
                  <div className="book-form__inside__info__row">
                    سنه النشر: {book.year}
                  </div>
                  <div className="book-form__inside__info__row">
                    مكان النشر: {book.address}
                  </div>

                </div>

              </div>
            </div>
            <div className="col-md-9">
              <div className="book-form__content">
                <div className="book-form__content__abstract">
                  <h3>مستلخص الكتاب</h3>
                  <hr />
                  <p>
                    {book.abstract}
                  </p>
                </div>

                <div className="book-form__content__panel">

                  <div className="">
                    <button type="button" data-toggle="modal" data-target="#exampleModal" className="book-form__content__btn__pop blank-button">
                      احصل على الكتاب

                               </button>
                  </div>

                  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          ...
      </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                          <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <audio src={book.voiceUrl} controls />

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