import React, { Component } from "react";

class InputCheckbox extends Component {
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
            <label for="a" className="form-label">
              Jawab A
            </label>
            <input
              className="form-control"
              id="a"
            />
          </div>

          <div className="mb-3">
            <label for="b" className="form-label">
              Jawab B
            </label>
            <input
              className="form-control"
              id="b"
            />
          </div>

          <div className="mb-3">
            <label for="c" className="form-label">
              Jawab C
            </label>
            <input
              type="email"
              className="form-control"
              id="c"
            />
          </div>

          <div className="mb-3">
            <label for="D" className="form-label">
              Jawab D
            </label>
            <input
              className="form-control"
              id="D"
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
    );
  }
}
export default InputCheckbox;
