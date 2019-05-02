import React, { Component } from 'react';
import BookCard from './layout/BookCard';
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { startGetAllBooks } from "../redux/actions/dashboard"
import { booksFilter } from "../filterations/book"
import Dictophone from "./Dictophone"
import $ from "jquery";

import SpeechRecognition from 'react-speech-recognition'
import Footer from './layout/Footer';
import HomeModal from './layout/HomeModal';
import Speech from 'speak-tts' // es6

const speech = new Speech() // will throw an exception if not browser supported
speech.init({
    'volume': 1,
    'lang': 'ar-SA',
    'rate': 1,
    'pitch': 1,
    'voice': 'Google UK English Male',
    'splitSentences': true,
    'listeners': {
        'onvoiceschanged': (voices) => {
            console.log("Event voiceschanged", voices)
        }
    }
})
speech.setLanguage('ar-SA')

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            books: [],
            loaded: false,
            word: "",
            transcript: ""
        }
    }
    onChangeWord = (e) => {
        this.setState({ word: e.target.value })
    }
    startVoice = () => {
        console.log("SSS")


        this.props.startListening()



    }
    stopVoice = () => {
        console.log("stop")
        this.props.stopListening()



    }
    componentDidMount = () => {
   console.log("HOME")
        this.props.recognition.lang = 'ar-EG'
        this.setState({ word: "" })

        this.props.dispatch(startGetAllBooks()).then(() => {
            this.setState({ loaded: true })
        })
        $('#homeModal').modal('show');
        /* voice controls */
        if (!localStorage.getItem("lang")) {
            const chooseLangAudio = document.getElementById("choose-lang-audio");
            chooseLangAudio.play();
        } else {
            const searchFocusAudio_AR = document.getElementById("search-focus-audio_AR"),
                searchFocusAudio_EN = document.getElementById("search-focus-audio_EN");
            if (localStorage.getItem("lang") === "ar") {
                searchFocusAudio_AR.play();
            } else {    
                searchFocusAudio_EN.play();
            }

      $("#homeDiv").focus();
$('#homeDiv').bind('keydown', (e)=> {
    //console.log(event.keyCode);
    console.log(e.keyCode)
  
        
       //....your actions for the keys .....
 
           // $(window).keydown((e) => {

                if (e.keyCode == 99) {//pressed 3 (focus search input)
                    this.startVoice();
                }
                else if (e.keyCode == 65) {

              

                        booksFilter(this.state.books, this.state.word).map((book, index) => {
                            if (index == 0) {
                                this.props.history.push("/book/" + book._id)
                            }
                        });

              

                }
                else if (e.keyCode == 83) {

                 

                        booksFilter(this.state.books, this.state.word).map((book, index) => {
                            if (index == 1)
                                this.props.history.push("/book/" + book._id)
                        });

         

                }

                else if (e.keyCode == 100) {

                    this.props.stopListening()

                    speech.speak({
                        text: "Found " + booksFilter(this.state.books, this.state.word).length,
                         queue: false, // current speech will be interrupted,
    listeners: {
        onstart: () => {
            console.log("Start utterance")
        },
        onend: () => {
            console.log("End utterance")
        },
        onresume: () => {
            console.log("Resume utterance")
        },
        onboundary: (event) => {
            console.log(event.name + ' boundary reached after ' + event.elapsedTime + ' milliseconds.')
        }
    }
                    }).then(()=>{

            if (booksFilter(this.state.books, this.state.word).length == 1) {
                            

                                        booksFilter(this.state.books, this.state.word).map((book) => {
                                            this.setState({ word: "" })


                                            this.props.history.push("/book/" + book._id)
                                        });

                        


                                } else if(booksFilter(this.state.books, this.state.word).length >1){

                                    speech.speak({
                                        text: "Press A or S"
                                    })
                                }
                    })

                  


                    console.log("SUCCESS")

                    console.log(booksFilter(this.state.books, this.state.word).length)




                }
                   
 });
            //})
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
  
        if (nextProps.transcript !== prevState.transcript) {
            console.log(nextProps)
            if (nextProps.transcript.includes("امسح")) {
                nextProps.resetTranscript();

                return { transcript: "", word: "" };

            } else {

                return { transcript: nextProps.transcript, word: nextProps.transcript };

            }
        }
        if (nextProps.books !== prevState.books) {
            return { books: nextProps.books }

        }

        else return null;
    }


    onChangeWord = (e) => {
        console.log(e.target.value)
        const { value, name } = e.target;
        this.props.resetTranscript();
        this.setState({ word: value })
    }



    render() {


        return (
            <React.Fragment>
                <main className="home" id="homeDiv"  tabindex="0">
                    <audio className="d-block" id="search-focus-audio_AR" src="/uploads/audio/search-ar.m4a" />
                    <audio className="d-block" id="search-focus-audio_EN" src="/uploads/audio/search-en.m4a" />
                    <input type="hidden" />
                    <section className="home__cover ">
                        <div className="home__cover__content" >
                            <div className="home__cover__logo"> <img src="./images/icons/icons8-international-music-96.png" class="home__cover__logo__image" /></div>

                            <h1 className="home__cover__title">المكتبه الصوتيه</h1>
                            <p className="home__cover__text">هي المدلول الاوسع غالبا ما تتجاوز الكتب المطبوعه بمعناها الضيق فتضم الان معها عددا كبيرا أو قليلا من المواد الورقيه الاخرى كالجرائد والنثرات وبقية الدوريات على اختلاف انواعها وكذلك الخرائط والاطالس والرسمات الهندسيه ، كما انها قد تضم ايضا المخطوطات التراثيه القديمه والمراسلات والمذكرات الحديثه وغيرها من المواد الورقيه غير المطبوعه المكتبه هي تجميع لمصادر وخلافه </p>
                            <p className="home__cover__note">ملاحظه: يمكنك البحث بالصوت او الكتابه ويفضل البحث بالانجليزيه اذا كنت تستخدم الصوت</p>
                        </div>
                    </section>


                    <div className="custom-container mt-5 " style={{ minHeight: "500px" }}>

                        <div className="row">
                            <div className="col-12">
                                <div className="home__google-input-container">
                                    <input value={this.state.word} onFocus={this.onFocus} onChange={this.onChangeWord} type="text" className="home__google-input custom-input" placeholder="ابحث عن..." />
                                    <button onBlur={this.stopVoice} onFocus={this.startVoice} data-target="#homesModal" data-toggle="modal" type="button" className="custom-btn"><i className="fas fa-microphone"></i></button>
                                </div>
                            </div>
                        </div>
                        {/* only show modal if there is no choosen language */}
                        {!localStorage.getItem("lang") && (<HomeModal />)}

                        {this.state.loaded ?

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
                                ) :
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
const options = {
    autoStart: false
}

export default connect(mapStateToProps)(SpeechRecognition(options)(Home))