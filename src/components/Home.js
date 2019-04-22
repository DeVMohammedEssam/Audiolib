import React, { Component } from 'react';
import Navbar from "./layout/Navbar";
import BookCard from './layout/BookCard';
import Footer from './layout/Footer';
class Home extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <main className="home">
                    <section className="home__cover ">
                        <div className="home__cover__content" >
                            <div className="home__cover__logo"></div>
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
                                <div className="col-12 col-sm-6 col-md-6 col-xl-3">
                                    <BookCard url="http://placehold.it/100/100" name="احمد كمال" desc={"يتحدث هذا الكتاب عن العصور اهم احداث العصور الوسطى خصيصا الفتره منذ عام"} />
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-xl-3">
                                    <BookCard url="http://placehold.it/100/100" name="احمد كمال" desc={"يتحدث هذا الكتاب عن العصور اهم احداث العصور الوسطى خصيصا الفتره منذ عام"} />
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-xl-3">
                                    <BookCard url="http://placehold.it/100/100" name="احمد كمال" desc={"يتحدث هذا الكتاب عن العصور اهم احداث العصور الوسطى خصيصا الفتره منذ عام"} />
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-xl-3">
                                    <BookCard url="http://placehold.it/100/100" name="احمد كمال" desc={"يتحدث هذا الكتاب عن العصور اهم احداث العصور الوسطى خصيصا الفتره منذ عام"} />
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-xl-3">
                                    <BookCard url="http://placehold.it/100/100" name="احمد كمال" desc={"يتحدث هذا الكتاب عن العصور اهم احداث العصور الوسطى خصيصا الفتره منذ عام"} />
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-xl-3">
                                    <BookCard url="http://placehold.it/100/100" name="احمد كمال" desc={"يتحدث هذا الكتاب عن العصور اهم احداث العصور الوسطى خصيصا الفتره منذ عام"} />
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-xl-3">
                                    <BookCard url="http://placehold.it/100/100" name="احمد كمال" desc={"يتحدث هذا الكتاب عن العصور اهم احداث العصور الوسطى خصيصا الفتره منذ عام"} />
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-xl-3">
                                    <BookCard url="http://placehold.it/100/100" name="احمد كمال" desc={"يتحدث هذا الكتاب عن العصور اهم احداث العصور الوسطى خصيصا الفتره منذ عام"} />
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-xl-3">
                                    <BookCard url="http://placehold.it/100/100" name="احمد كمال" desc={"يتحدث هذا الكتاب عن العصور اهم احداث العصور الوسطى خصيصا الفتره منذ عام"} />
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-xl-3">
                                    <BookCard url="http://placehold.it/100/100" name="احمد كمال" desc={"يتحدث هذا الكتاب عن العصور اهم احداث العصور الوسطى خصيصا الفتره منذ عام"} />
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-xl-3">
                                    <BookCard url="http://placehold.it/100/100" name="احمد كمال" desc={"يتحدث هذا الكتاب عن العصور اهم احداث العصور الوسطى خصيصا الفتره منذ عام"} />
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-xl-3">
                                    <BookCard url="http://placehold.it/100/100" name="احمد كمال" desc={"يتحدث هذا الكتاب عن العصور اهم احداث العصور الوسطى خصيصا الفتره منذ عام"} />
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-xl-3">
                                    <BookCard url="http://placehold.it/100/100" name="احمد كمال" desc={"يتحدث هذا الكتاب عن العصور اهم احداث العصور الوسطى خصيصا الفتره منذ عام"} />
                                </div>
                                <div className="col-12 col-sm-6 col-md-6 col-xl-3">
                                    <BookCard url="http://placehold.it/100/100" name="احمد كمال" desc={"يتحدث هذا الكتاب عن العصور اهم احداث العصور الوسطى خصيصا الفتره منذ عام"} />
                                </div>
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

export default Home;