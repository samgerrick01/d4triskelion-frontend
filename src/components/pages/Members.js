import React from "react";
import moment from "moment";
import { FaTrash, FaEdit, FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteMember } from "../../actions/members";

const Members = ({ member, id }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //EVENTS
  const handleDelete = (member) => {
    if (window.confirm("Are you sure you want to delete this Member?")) {
      dispatch(deleteMember(member._id));
    }
  };
  return (
    <div className="border border-white rounded-lg">
      <div
        className="grid w-80 h-80 
        laptop:w-60 
        tablet:w-60"
      >
        <img
          className="rounded-tl-lg rounded-tr-lg w-full h-80"
          src={member.selectedFile}
          alt="2x2"
        />
      </div>
      <div
        className="flex justify-start items-start bg-zinc-800 flex-col p-3 w-80 text-white 
      laptop:w-60 
      tablet:w-60"
      >
        <label>Name : {member.fullName}</label>
        <label>Allias : {member.allias}</label>
        <label>Chapter : {member.chapter}</label>
        <label>Status : {member.tStatus}</label>
        <label>Added Since : {moment(member.createdAt).fromNow()}</label>
      </div>
      <div
        className="flex w-80 justify-center items-center pb-5 bg-zinc-800 rounded-br-lg rounded-bl-lg text-white gap-5 
      laptop:w-60 
      tablet:w-60"
      >
        <FaEdit
          opacity={localStorage.getItem("account") === "admin" ? 1 : 0.3}
          onClick={() => {
            if (localStorage.getItem("account") === "admin") {
              navigate(`/members/update/${id}`);
            } else {
              window.alert(
                "You need administrator permission to Edit a Member!"
              );
            }
          }}
          className="cursor-pointer w-7 h-7"
        />
        <FaTrash
          opacity={localStorage.getItem("account") === "admin" ? 1 : 0.3}
          onClick={() => {
            if (localStorage.getItem("account") === "admin") {
              handleDelete(member);
            } else {
              window.alert(
                "You need administrator permission to Delete a Member!"
              );
            }
          }}
          className="cursor-pointer w-7 h-7"
        />
        <FaEye
          onClick={() => {
            navigate(`/members/viewmember/${id}`);
          }}
          className="cursor-pointer w-7 h-7"
        />
      </div>
    </div>
  );
};

export default Members;
