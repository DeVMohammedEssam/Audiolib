import React from 'react';
import { connect } from "react-redux"
import { startDeleteBook } from "../../redux/actions/dashboard"



const ConfirmationModal = props => {
    return (
        <div class="modal fade" id="confirmationModal" tabindex="-1" role="dialog" aria-labelledby="confirmationModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content" style={{ minHeight: "120px", justifyContent: "space-between " }}>

                    <h3 class="modal-title" id="confirmationModalLabel" style={{ textAlign: "center", padding: "26px" }}>هل انت متاكد من انك تريد حذف الكتاب ؟</h3>

                    <div class="modal-footer float-right p-2" >
                        <button type="button" class="btn btn-secondary btn-lg" data-dismiss="modal">اغلاق</button>
                        <button type="button" class="btn btn-danger btn-lg mr-3" onClick={props.actionHandler}>نعم</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default connect()(ConfirmationModal);