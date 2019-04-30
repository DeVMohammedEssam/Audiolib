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
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            tset
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default HomeModal;