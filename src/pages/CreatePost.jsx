import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function CreatePost() {
  const { signOut } = useAuth();
  const navigate = useNavigate();
  return (
    <div>
      <h1>Create post</h1>
      <button onClick={() => signOut(navigate("/", { replace: true }))}>
        Log out
      </button>
    </div>
  );
}
