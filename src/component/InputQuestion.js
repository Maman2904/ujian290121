import React, { Component } from "react";
import InputCheckbox from './form/InputCheckbox'
import InputRadio from './form/InputRadio'
import InputTextarea from './form/InputTextarea'
import Checkbox from './CheckBox'
import Radio from './RadioButton'
import Textarea from './TextArea'

class InputQuestion extends Component {
  constructor(props) {
    super(props)


    this.state = {type:"", dataquest:[], editquest:{}}
  }

  onUpdateDatafromChild = (datas) => {
    let dummyquest = this.state.dataquest;
    dummyquest.push(datas);

    this.setState({dataquest:dummyquest})
  }

  onChange = (event) => {
  this.setState({type: event.target.value})
  }

  


  ambilform = (type) => {
    switch (type){
      case 'radio':
        return <InputRadio onUpdateDatafromChild = {this.onUpdateDatafromChild}/>
      case  'checkbox':
        return <InputCheckbox onUpdateDatafromChild = {this.onUpdateDatafromChild}/>
      case  'textarea':
        return <InputTextarea onUpdateDatafromChild = {this.onUpdateDatafromChild}/>

    }

  }

  funcJawab(){

  }

  deleteData = (event) => {
    console.log('delete data' + JSON.stringify(this.state.dataquest[event.target.value]))
    let dummyquest = this.state.dataquest
    dummyquest.splice(event.target.value,1)

    this.setState({ dataquest: dummyquest})
  }

  updateData = (event) => {
    console.log('update data'+ this.state.dataquest[event.target.value])

    this.setState({ dataquest: this.state.dataquest[event.target.value]}, ()=>{
      console.log(JSON.stringify(this.state.editquest))
    })
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col">
            {this.state.dataquest.map((nilai, i) => {
                            if (nilai.type === "textarea") {
                                return <div className="card"><div className="card-header"><button value={i} onClick={this.deleteData}>Remove</button><button value={i}  onClick={this.updateData}>Edit</button></div><div className="card-body"><Textarea soal={nilai.soal} no={i + 1} key={i} funcJawab={this.funcJawab} /> </div></div>
                            } else if (nilai.type === "radio") {
                                return  <div className="card"><div className="card-header"><button value={i}  onClick={this.deleteData}>Remove</button><button value={i} onClick={this.updateData}>Edit</button></div><div className="card-body"><Radio data={nilai} no={i + 1} key={i} funcJawab={this.funcJawab} /> </div></div>
                            } else if (nilai.type === "checkbox") {
                                return <div className="card"><div className="card-header"><button value={i}  onClick={this.deleteData}>Remove</button><button value={i} onClick={this.updateData}>Edit</button></div><div className="card-body"><Checkbox data={nilai} no={i + 1} key={i} funcJawab={this.funcJawab} /></div></div>
                            }

                        })
                        }
            </div>
            <div className="col">
              <p>silahkan pilih tipe soal</p>
              <select className="form-select" onChange={this.onChange}>
                  <option selected >pilih pertanyaan</option>
                  <option value="radio">Radio</option>
                  <option value="checkbox">Checkbox</option>
                  <option value="textarea">TextArea</option>
                </select>
                <div>{ this.ambilform(this.state.type)}</div>
                
                
             
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default InputQuestion;

