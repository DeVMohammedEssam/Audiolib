import React, { Component } from 'react';
import BookCard from './layout/BookCard';
import {connect} from "react-redux"
import {Link} from "react-router-dom"
import {startGetAllBooks} from "../redux/actions/dashboard"
import {booksFilter} from "../filterations/book"
import SpeechRecognition from 'react-speech-recognition'
import Dictophone from "./Dictophone"

import Footer from './layout/Footer';
class Home extends Component {

       constructor(props){
     super(props)
     this.state={
       books:[]
     }
   }
   
  static getDerivedStateFromProps(nextProps, prevState){
    console.log(nextProps)
   if(nextProps.books!==prevState.books){
     return { books: nextProps.books};
  }
  else return null;
}
   componentDidMount=()=>{
       
     this.props.dispatch(startGetAllBooks())
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

                    <div className="custom-container mt-5">
                        <div className="row">
                            <div className="col-12">
                                <div className="home__google-input-container">
                                    <input type="text" className="home__google-input custom-input" placeholder="ابحث عن..." />
                                    <button type="button" className="custom-btn"><i className="fas fa-microphone"></i></button>
                                </div>
                            </div>
                        </div>

                        {/* book cards start */}
                        <section className="home__cards-container">
                            <div className="row">
                                    {booksFilter(this.state.books).map((book)=>(
              <div className="col-12 col-sm-6 col-md-6 col-xl-3">
   <Link to={"/book/"+book._id}>
           
       
  <BookCard url={book.image} name={book.title} desc={book.abstract} />
      </Link></div>
    ))}
                            </div>
                            {/* book cards end */}
                        </section>
                    </div>
                </main>
                <Footer />
            </React.Fragment>
        );
    }
}

const mapStateToProps=(state)=>({
  books:state.dashboard.books
})
export default connect(mapStateToProps)(Home)