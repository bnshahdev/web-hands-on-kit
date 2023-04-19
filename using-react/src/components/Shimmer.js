export const Shimmer = () => {
  return (
    <div className="res-container">
      {Array(10)
        .fill("")
        .map((res) => (
          <div
            style={{
              backgroundColor: "GrayText",
              width: "200px",
              height: "300px",
              margin: "5px",
            }}
          ></div>
        ))}
    </div>
  );
};
