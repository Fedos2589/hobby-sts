import React, { Component } from 'react'
import classNames from 'classnames'

const ClaimForm = ({ show, hidePopup }) =>
  <div
    className={
      classNames({
        "claim-form": true,
        "hide": !show
      })
    }
  >
    <h2 className="form-title">Форма жалобы</h2>
    <span className="popup-close" onClick={hidePopup} />
  </div>

export default ClaimForm;
