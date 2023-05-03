import { memo } from "react";

export default ({ users }) => {
  window.submitForm = (name) => {};

  if (users.length === 0) return <></>;

  return (
    <div style={{ background: "yellow", marginTop: 5 }}>
      <h4 style={{ margin: 0, marginBottom: 20, textDecoration: "underline" }}>
        List of users
      </h4>
      <div>
        {users.map((d, index) => (
          <Name data={d} key={index} />
        ))}
      </div>
    </div>
  );
};

export const Name = memo(({ data }) => {
  return <li>{data.name}</li>;
});
