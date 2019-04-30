import React, { Component } from 'react';
class HomeModal extends Component {
    state = {}
    render() {
        return (
            <div className="modal fade" id="homeModal" tabindex="-1" role="dialog" aria-labelledby="homeModalTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button text-right" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true" className="modalClose">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <i className="fas fa-volume-up fa-3x " />
                            <div className="content">
                                <h3> للتشغيل الصوتي باللغه العربيه اضغط 1</h3>
                                <h3 className="en mb-4">For English press 2</h3>
                                <p>
                                    هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
        إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الف
                            </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default HomeModal;