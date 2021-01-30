import React, { Component } from "react";
import InputCheckbox from './form/InputCheckbox'
import InputRadio from './form/InputRadio'
import InputTextarea from './form/InputTextarea'
import { data } from '../model/Model'

class InputQuestion extends Component {
  constructor(props) {
    super(props)
    this.state = {jenis:""}
  }

  onChange = (event) => {
  this.setState({jenis: event.target.value})
  }

  ambilform(form){
    switch (form){
      case 'radio':
        return <InputRadio/>
      case  'checkbox':
        return <InputCheckbox/>
      case  'textarea':
        return <InputTextarea/>

      default : return

    }

  }




  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col">hasil</div>
            <div className="col">
              <select class="form-select" aria-label="Default select example" onChange={this.onChange}>
                   <option selected >pilih pertanyaan</option>
                  <option value="radio">Radio</option>
                  <option value="checkbox">Checkbox</option>
                  <option value="textarea">TextArea</option>
                </select>
                { this.ambilform(this.state.jenis)}
                
             
               
                {/* {data.map((value, i) => {
                  if(value.type === "essay"){
                    return <InputTextarea form = {this.state.value}/>
                  } else if(value.type === "radio"){
                    return <InputRadio/>
                  } else if (value.type === "checkbox"){
                    return <InputCheckbox/>
                  }
                   

                })} */}
                
             
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default InputQuestion;

