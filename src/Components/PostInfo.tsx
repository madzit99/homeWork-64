import { useEffect, useState } from "react";
import {useNavigate, useParams } from "react-router-dom";
import { FullPost } from "../types";
import axiosApi from "../axiosApi";

const PostInfo = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState<FullPost | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axiosApi.get(`posts/${params.postId}.json`);
        setData(response.data);
      } catch (e) {
        console.log(e);
      }
    };

    fetchPost();
  }, []);

  const onDelete = async () => {
    await axiosApi.delete("posts/" + params.postId + ".json");
    navigate("/");
  };

  const timestamp = parseInt(data?.date || "", 10);
  const date = new Date(timestamp).toLocaleString();

  return (
    <div className=" w-50 mx-auto mt-5 shadow py-5 px-4">
      <h2 className="fw-bold">{data?.title}</h2>
      <p>{data?.message}</p>
      <p className="text-secondary">Date: {date}</p>
      <button onClick={onDelete} className="btn btn-danger">
        Delete
      </button>
    </div>
  );
};
export default PostInfo;
