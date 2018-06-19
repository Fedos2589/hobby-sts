import React, { Component } from 'react'
import Hobby from './Hobby'

const HobbiesList = ({ list, personId, controlClick, showPopup }) =>
  <div className={`hobbies-list ${personId}`}>
    {list.map((item) =>
      <Hobby
        personId={personId}
        hobbyId={item.id}
        key={item.id}
        value={item.value}
        controlClick={controlClick}
        added={false}
        showPopup={showPopup}
      />
    )}
  </div>

export default HobbiesList;
