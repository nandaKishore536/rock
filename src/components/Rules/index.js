import Popup from 'reactjs-popup'

import {RiCloseLine} from 'react-icons/ri'

import './index.css'

const Rules = () => (
  <Popup
    modal
    trigger={
      <button className="rules_btn" type="button">
        RULES
      </button>
    }
    className="popup-content"
  >
    {close => (
      <div className="close_container">
        <div className="close_icon">
          <button className="close_btn" type="button" onClick={() => close()}>
            <RiCloseLine size="30" />
            {}
          </button>
        </div>

        <div className="image_con">
          <img
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
            alt="rules"
            className="rules_image"
          />
        </div>
      </div>
    )}
  </Popup>
)

export default Rules
