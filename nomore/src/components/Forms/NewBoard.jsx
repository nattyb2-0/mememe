import React, {Component} from 'react';

export default class newBoard extends Component {
createBoard(event){
  event.preventDefault();
  console.log('inside create board');
  console.log('helllooooooo'  ,this.inmatephoto.value);
  // point at image holder value
  let imageValue = document.querySelector('.imageHolder').value;
  // check if that value is null or has something....if its null assign a default value
  if (imageValue === '') {
    imageValue = 'http://images.clipartpanda.com/prisoner-clipart-prisoner.png';
    const board ={
    inmatename: this.inmateName.value,
    statenumber: this.statenumber.value,
    nickname: this.nickname.value,
    institution: this.institution.value,
    inmatephoto: imageValue
    }
    this.props.addBoard(board);
    this.form.reset();
  console.log('board with default', board);
  } else {
const board ={
    inmatename: this.inmateName.value,
    statenumber: this.statenumber.value,
    nickname: this.nickname.value,
    institution: this.institution.value,
    inmatephoto: this.inmatephoto.value,
  }
  console.log('board with image', board)
  this.props.addBoard(board);
  this.form.reset();
}

}
  render(){
    return(
      <div>
      <h1>Create A Board</h1>
      <form ref={(input)=>this.form = input} action="" className="addBoard" onSubmit={(e)=>this.createBoard(e)}>
        <input required ref={(input)=>{this.inmateName = input}} type="text" placeholder="inmate name" className="inmateName"/>
        <input required ref={(input)=>{this.statenumber = input}} type="text" placeholder="state number" className="stateNumber"/>
        <input required ref={(input)=>{this. nickname = input} }type="text" placeholder="nickname, alias, aka etc" className="nickname"/>
        <select ref={(input)=>{this. institution = input}} name="institution" >
           <option value="Northern State Prison">Northern State Prison</option>
           <option value="East Jersy State Prison">East Jersy State Prison</option>
           <option value="New Jersy State Prison">New Jersy State Prison</option>
           <option value="Albert C. Wagner Youth Correctional">Albert C. Wagner Youth Correctional</option>
       </select>
        <input ref={(input)=>{this.inmatephoto = input}} type="file" name="inmatePic" accept="image/*" className="imageHolder"/>
        <button type="submit">Submit</button>
      </form>
      </div>
      )
  }
}
