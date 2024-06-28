import { Link } from "react-router-dom";
import { FullPost } from "../types";

const Post:React.FC<FullPost> = ({postId, title, date}) =>  {

    const timestamp = parseInt (date, 10);
    const dateFormat = new Date(timestamp).toLocaleString();

    return (
      <div className="card mt-4 w-50 mx-auto">
        <div className="card-body">
          <h5 className="fw-bold">{title}</h5>
          <h6>{dateFormat}</h6>
          <Link className="btn btn-primary" to={"/post/" + postId}>
            Читать далее.
          </Link>
        </div>
      </div>
    );
}

export default Post;