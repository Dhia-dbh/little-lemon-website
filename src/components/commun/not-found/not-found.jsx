import "./not-found.css";

const NotFound = () => {
  return (
    <div className="container text-center w-50">
      <h1 className="p-3" style={{ borderBottom: "1px solid black" }}>
        PAGE NOT FOUND
      </h1>
      <br />
      <h1 className="not-found">
        <span>4</span>
        <span>0</span>
        <span>4</span>
      </h1>
    </div>
  );
};

export default NotFound;
