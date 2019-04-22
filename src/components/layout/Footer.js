import React from 'react';
const Footer = () => {
    return (
        <footer className="footer">
            <div className="row">
                <div className="col-12 col-lg-3 has-border-lg">
                    <div className="footer__social">
                        <h4 className="footer__title">للتواصل معنا عبر المواقع الاتيه</h4>
                        <div className="footer__social__links">
                            <a href="#"><img src="/images/icons/facebook.png" alt="" /></a>
                            <a href="#"><img src="/images/icons/youtube.png" alt="" /></a>
                            <a href="#"><img src="/images/icons/twitter.png" alt="" /></a>
                        </div>
                        <div className="footer__social__phone">
                            رقم الهاتف: 0112034159
                        </div>
                    </div>
                </div>

                <div className="col-12 col-lg-6 has-border-lg">
                    <h4 className="footer__title">نبذه عن الموقع</h4>
                    <p className="footer__text">
                        "خسائر اللازمة ومطالبة حدة بل. الآخر الحلفاء أن غزو, إجلاء وتنامت عدد مع. لقهر معركة لبلجيكا، بـ انه, ربع الأثنان المقيتة في, اقتصّت المحور حدة و. هذه ما طرفاً عالمية استسلام, الصين وتنامت حين ٣٠, ونتج والحزب المذابح كل جوي. أسر كارثة المشتّتون بل, وبعض وبداية الصفحة غزو قد, أي بحث تعداد الجنوب.
                    </p>
                </div>

                <div className="col-12 col-lg-3">
                    <div className="footer__helping-links">
                        <a href="#">الخصوصيه</a>
                        <a href="#">تواصل معنا</a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center mt-4">
                <p>copyrights &copy; Audiolib 2017</p>
            </div>
        </footer>
    );
}

export default Footer;