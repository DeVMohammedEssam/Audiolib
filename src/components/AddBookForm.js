import React, { Component } from 'react'
import $ from "jquery"
import { connect } from "react-redux"
import { startUploadBook } from "../redux/actions/dashboard"
import { withRouter } from "react-router-dom"
class AddBookForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            voice: "",
            image: ""
        }
    }
    onChangeHandler = () => {
        let reader = new FileReader();
        let file = $(".upload-image__file")[0].files[0]
        reader.onloadend = () => {
            console.log(reader.result)
            this.setState({ image: reader.result })
            $(".book-form__aside__up__image").css("background-image", "url(" + reader.result + ")")
            $(".book-form__aside__up__image").css("color", "white")

        }
        reader.readAsDataURL(file);
    }
    onChangeVoice = () => {
        let reader = new FileReader();
        let file = $(".upload-voice")[0].files[0]
        reader.onloadend = () => {
            console.log(reader.result)

            this.setState({ voice: reader.result })

        }
        reader.readAsDataURL(file);
    }
    uploadBook = () => {
        let title = $("#title").val();
        let writer_name = $("#writer_name").val();
        let publisher = $("#publisher").val();
        let year = $("#year").val();
        let address = $("#address").val();
        let abstract = $("#abstract").val();
        let videoUrl = $("#videoUrl").val()
        const book = { title, publisher, writer_name, year, address, voice: this.state.voice, image: this.state.image, videoUrl, abstract }
        this.props.dispatch(startUploadBook(book)).then(() => {
            console.log("Dispatch UploadForm")
            this.props.history.goBack()
        })

        console.log(book, "BOOOOOOK")
    }

    render() {
        return (
            <div className="book-form">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-3">
                            <div className="book-form__aside">
                                <div className="book-form__aside__up">
                                    <div className="book-form__aside__up__image">
                                        <input onChange={this.onChangeHandler} type="file" className="upload-image__file" />
                                        <i className="fa fa-camera"></i>
                                        <p>Upload Image</p>
                                    </div>
                                </div>
                                <div className="book-form__aside__info">
                                    <p>معلومات عن الكتاب</p>
                                    <hr />
                                    <div className="form-group">
                                        <input className="form-control form-control-lg" id="title" placeholder="اسم الكتاب" />
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control form-control-lg" id="publisher-name" placeholder="اسم المؤلف" />
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control form-control-lg" id="publisher" placeholder="دار النشر" />
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control form-control-lg" id="year" placeholder="سنه النشر" />
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control form-control-lg" id="address" placeholder="مكان النشر" />
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-12 col-md-9 ">
                            <div className="book-form__content">
                                <div className="book-form__content__abstract">
                                    <div className="form-group">
                                        <textarea rows={15} className="form-control form-control-lg" id="abstract" placeholder="مستلخص الكتاب.." />
                                    </div>
                                </div>
                                <div className="book-form__content__url">
                                    <div className="form-group">
                                        <input className="form-control form-control-lg" id="videoUrl" placeholder="عنوان الفيديو.." />
                                    </div>
                                </div>
                                <div className="book-form__content__voice">
                                    <span>
                                        ارفع الملف الصوتى
                        </span>
                                    <i className="fas fa-volume-up mr-4"></i>
                                    <div className="form-group file ">
                                        <input onChange={this.onChangeVoice} className="form-control form-control-lg upload-voice" id="upload-image__file" type="file" id="url" placeholder="عنوان الفيديو.." />
                                    </div>
                                </div>
                                <div className="book-form__content__btn">
                                    <button onClick={this.uploadBook} className="blank-button">
                                        حفظ ورفع الكتاب
                               </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default withRouter(connect()(AddBookForm))