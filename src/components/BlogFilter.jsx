import React, { useState } from "react";

export default function BlogFilter({ postQuery, latest, setSearchParams }) {
  const [search, setSearch] = useState();
  const [checked, setChecked] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const query = form.search.value;
    const isLatest = form.latest.checked;

    const params = {};

    if (query.length) {
      params.post = query;
    }

    if (isLatest) {
      params.latest = true;
    }

    setSearchParams(params);
  };

  return (
    <form autoComplete='off' onSubmit={handleSubmit}>
      <input
        type='search'
        name='search'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <label style={{ padding: "0 1rem" }}>
        <input
          type='checkbox'
          name='latest'
          value={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />{" "}
        New Only
      </label>
      <input type='submit' value='Search' />
    </form>
  );
}
