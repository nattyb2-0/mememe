
// const Comment = props =>{
// <div className="comment">
//   <p>{props.comment}</p>

// </div>

const Comment = props => (

        <div className="comment">

            <h3>{props.id}</h3>
            <h4>{props.key}</h4>
            <p>{props.body}</p>
            </div>
      );

export default Comment;
