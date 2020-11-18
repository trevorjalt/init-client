import React, { Component } from 'react';

class Account extends Component {
  static defaultProps = {
    history: {
      goBack: () => { }
    }
}

  render() {
      return (
          <div>
              <h2>Le Settings</h2>
              <p></p>
                  <form>
                      <fieldset>
                        <legend>userData</legend>
                        <label for="fname">fullName:</label>
                        <span>Adyceum</span>
                      </fieldset>
                      <fieldset>
                        <legend>userData</legend>
                        <label for="fname">userName:</label>
                        <span>Adyceum</span>
                      </fieldset>
                      <fieldset>
                        <legend>userData</legend>
                        <label for="fname">eMail:</label>
                        <span>AMC@gmail.com</span>
                      </fieldset>
                      <fieldset>
                        <legend>userData</legend>
                        <label for="fname">fullName:</label>
                        <span>Adyceum</span>
                      </fieldset>
                      <fieldset>
                        <legend>userData</legend>
                        <label for="fname">fullName:</label>
                        <span>Adyceum</span>
                      </fieldset>
                      <fieldset>
                        <legend>userData</legend>
                        <label for="fname">fullName:</label>
                        <span>Adyceum</span>
                      </fieldset>
                  </form>
          </div>
      );
  }
};

export default Account;