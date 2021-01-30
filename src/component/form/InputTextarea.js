import React, { Component } from 'react'

class InputTextarea extends Component {
    render() {
        return (
            <div>
                <form>
          <div className="mb-3">
            <label for="soal" className="form-label">
              Soal
            </label>
            <input
              className="form-control"
              id="soal"
            />
          </div>

          <div className="mb-3">
            <label for="kunci" className="form-label">
              Kunci
            </label>
            <input
              className="form-control"
              id="kunci"
            />
          </div>

          <div className="mb-3">
            <label for="score" className="form-label">
              Score
            </label>
            <input
              className="form-control"
              id="score"
            />
          </div>
          
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
            </div>
        )
    }
}
export default InputTextarea;