// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    isDark: true,
  }

  clickButton = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  render() {
    const {isDark} = this.state
    const modelClassName = isDark ? 'dark-mode' : 'light-mode'
    const buttonText = isDark ? 'Light Mode' : 'Dark Mode'

    return (
      <div className="container">
        <div className={`card ${modelClassName}`}>
          <h1>Click To Change Mode</h1>
          <div className="btn-container">
            <button onClick={this.clickButton}>{buttonText}</button>
          </div>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
