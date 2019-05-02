import React from 'react';
const HowToUse = () => {
    return (
        <div className="how-to-use py-5">
            <div className="container">
                <div className="card ">
                    <div className="instruction-set">
                        <div className="card-header px-4 font-weight-bold">   اختيار اللغه</div>
                        <div className="card-body">
                            <ul className="list-unstyled">
                                <h4 className="text-secondary mb-4">
                                    عند الدخول للرئيسيه للمره الاولى يقوم الموقع بسؤالك عن اللغه المفضله
                                </h4>
                                <li className="pr-3">
                                    <p>
                                        -
                                        اذا كنت ترغب باختيار اللغه العربيه تقوم بالضغط على الرقم
                                    <b className="badge  badge-primary mr-3 ">
                                            1
                                    </b>
                                    </p>
                                </li>
                                <li className="pr-3">
                                    <p>
                                        -
                                        اذا كنت ترغب باختيار اللغه الانجليزيه تقوم بالضغط على الرقم
                                    <b className="badge  badge-primary mr-3">
                                            2
                                    </b>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="instruction-set">
                        <div className="card-header px-4 font-weight-bold"> البحث</div>
                        <div className="card-body">
                            <ul className="list-unstyled ">
                                <h4 className="text-secondary my-4  ">
                                    بعد اختيارك للغه يتيح الموقع لك خاصية البحث الصوتي
                            </h4>
                                <li className="pr-3">
                                    <p>
                                        -
                                        لبدء البحث الصوتي تقوم بالضغط على الرقم
                                    <b className="badge  badge-primary mr-3">
                                            3
                                    </b>
                                    </p>
                                </li>
                                <li className="pr-3">
                                    <p>
                                        -
                                        لايقاف البحث الصوتي واظهار نتيجه البحث تقوم بالضغط على الرقم
                                    <b className="badge  badge-primary mr-3">
                                            4
                                    </b>
                                    </p>

                                </li>
                                 <li className="pr-3">
                                    <p>
                                        -
                                      لمسح كلمات البحث قل
                                    <b className="badge  badge-primary mr-3">
                                            امسح
                                    </b>
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className="instruction-set">
                            <div className="card-header px-4 font-weight-bold">اختيار كتاب</div>
                            <div className="card-body">
                                <ul className="list-unstyled ">
                                    <h4 className="text-secondary my-4  ">
                                        لاختيار كتاب بعد عرض نتائج البحث الصوتي
                                    </h4>
                                    <li className="pr-3">
                                        <p>
                                            -
                                    لاختيار الكتاب الاول تقوم بالضغط على الحرف
                                   <b className="badge  badge-success mr-3">
                                                A
                                    </b>
                                        </p>
                                    </li>
                                    <li className="pr-3">
                                        <p>
                                            -
                                    لاختيار الكتاب الثاني تقوم بالضغط على الحرف
                                   <b className="badge  badge-success mr-3">
                                                B
                                    </b>
                                        </p>
                                    </li>
                                    <li className="pr-3">
                                        <p>
                                            -
                                    لاختيار الكتاب الثالث تقوم بالضغط على الحرف
                                   <b className="badge  badge-success mr-3">
                                                C
                                    </b>
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="instruction-set">
                        <div className="card-header px-4 font-weight-bold"> الرجوع للرئيسيه </div>
                        <div className="card-body">
                            <ul className="list-unstyled ">
                                <h4 className="text-secondary my-4">
                                    اثناء عرض الكتاب
                                </h4>
                                <li className="pr-3">
                                    <p>
                                        -
                                        للرجوع للرئيسيه اضغط الزر 
                                   <b className="badge  badge-dark mr-3">
                                            Esc
                                    </b>
                                    </p>
                                </li>
                                
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default HowToUse;