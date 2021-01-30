import React, { Component } from "react";
import InputCheckbox from './form/InputCheckbox'
import InputRadio from './form/InputRadio'
import InputTextarea from './form/InputTextarea'
import { data } from '../model/Model'

class InputQuestion extends Component {
  constructor(props) {
    super(props);

    this.state = {value: ''}
  }

  handleChange(event) {
    this.setState({value: []});
  }

  ambilform =(form)=> {
    this.setState({value: form})

  }


  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col">hasil</div>
            <div className="col"><select class="form-select" aria-label="Default select example">
                   <option selected >pilih pertanyaan</option>
                  <option value="radio">Radio</option>
                  <option value="checkbox">Checkbox</option>
                  <option value="textarea">TextArea</option>
                </select>
             
               
                {data.map((value, i) => {
                  if(value.type === "essay"){
                    return <InputTextarea form = {this.state.value}/>
                  } else if(value.type === "radio"){
                    return <InputRadio/>
                  } else if (value.type === "checkbox"){
                    return <InputCheckbox/>
                  }
                   

                })}
                
              <div className="row">
                form
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default InputQuestion;
