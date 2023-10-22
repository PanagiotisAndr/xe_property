import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux';
import { hideModal } from '../../redux/slices/modalActions';

const CentralModal = () => {
    const dispatch = useDispatch();
    const modalState = useSelector(state => state.modal);

    if (!modalState.show) {
        return null;
    }

    return (
        <div className="modal show d-block" tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="btn-close" onClick={() => dispatch(hideModal())}></button>
                    </div>
                    <div className="modal-body">
                        {modalState.content}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={() => dispatch(hideModal())}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CentralModal;
