import React from 'react'
import ModalWrapper from '../../components/modalWrapper/ModalWrapper.component';
import ConfirmationDialog from '../../components/confirmationDialoge/ConfirmationDialog.component';
import './ConfirmCancelPage.style.scss';
function ConfirmCancelPage() {
    return (
        <ModalWrapper>
            <ConfirmationDialog heading='Delete All Stored Data' content='Are you sure you want to Delete all stored data? all your progress data will be erased permanently'/>
        </ModalWrapper>
    )
}

export default ConfirmCancelPage
