import React, { Component } from 'react';
import BookCard from './layout/BookCard';
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { startGetAllBooks } from "../redux/actions/dashboard"
import { booksFilter } from "../filterations/book"
import SpeechRecognition from 'react-speech-recognition'
import Dictophone from "./Dictophone"
import $ from "jquery";

import Footer from './layout/Footer';
import HomeModal from './layout/HomeModal';

const recognition = new SpeechRecognition()

recognition.continous = true
recognition.interimResults = true
recognition.lang = 'en-US'
class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            books: [],
            loaded: false,
            word: "",
            listening:false
        }
    }
 
    componentDidMount = () => {
        this.props.dispatch(startGetAllBooks()).then(()=>{
            this.setState({loaded:true})
        })
 
        /* open language modal */
        //$("button[data-target='#homeModal']").trigger("click");
        $('#homeModal').modal('show')

    }
    render() {
   
        return (
            <React.Fragment>
                <main className="home">

                    <section className="home__cover ">
                        <div className="home__cover__content" >
                            <div className="home__cover__logo"> <img src="./images/icons/icons8-international-music-96.png" class="home__cover__logo__image" /></div>

                            <h1 className="home__cover__title">المكتبه الصوتيه</h1>
                            <p className="home__cover__text">هي المدلول الاوسع غالبا ما تتجاوز الكتب المطبوعه بمعناها الضيق فتضم الان معها عددا كبيرا أو قليلا من المواد الورقيه الاخرى كالجرائد والنثرات وبقية الدوريات على اختلاف انواعها وكذلك الخرائط والاطالس والرسمات الهندسيه ، كما انها قد تضم ايضا المخطوطات التراثيه القديمه والمراسلات والمذكرات الحديثه وغيرها من المواد الورقيه غير المطبوعه المكتبه هي تجميع لمصادر وخلافه </p>
                            <p className="home__cover__note">ملاحظه: يمكنك البحث بالصوت او الكتابه ويفضل البحث بالانجليزيه اذا كنت تستخدم الصوت</p>
                        </div>
                    </section>
         

                        <div className="custom-container mt-5 " style={{ height:"500px",minHeight: "500px" }}>

                            <div className="row">
                                <div className="col-12">
                                    <div className="home__google-input-container">
                                        <input value={this.state.word} onChange={this.onChangeWord} type="text" className="home__google-input custom-input" placeholder="ابحث عن..." />
                                        <button data-target="#homesModal" data-toggle="modal" type="button" className="custom-btn"><i className="fas fa-microphone"></i></button>
                                    </div>
                                </div>
                            </div>
                            <HomeModal />
                                {this.state.loaded?
                                
                                booksFilter(this.state.books.length) === 0 ? (
                                <h3 className="text-center mt-5">لا يوجد كتب</h3>
                            ) : (
                                    <React.Fragment>


                                        <section className="home__cards-container">
                                            <div className="row">
                                                {booksFilter(this.state.books, this.state.word).map((book) => {
                                               
                                                    return (
                                                        <div key={book._id} className="col-12 col-sm-6 col-md-6 col-xl-3">
                                                            <BookCard 
                                                                clickable={true}
                                                                id={book._id}
                                                                url={book.image}
                                                                name={book.title}
                                                                desc={book.abstract}
                                                            />
                                                        </div>
                                                    )
                                                }
                                                )}
                                            </div>
                                            {/* book cards end */}
                                        </section>
                                    </React.Fragment>
                                ):
                                   <div className="loader">
                                
                                <img src="/805(2).gif" />
                                </div>
                                }
                            
                        </div>



                </main>
                <Footer />
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    books: state.dashboard.books
})
export default connect(mapStateToProps)(Home)