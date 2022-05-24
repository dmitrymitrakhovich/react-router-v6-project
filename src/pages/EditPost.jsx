import React from "react";
import { useParams } from "react-router-dom";

export default function EditPost() {
  const { id } = useParams();
  return <div>EditPost - {id}</div>;
}
