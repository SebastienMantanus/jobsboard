const Jobs = (props) => {
  return (
    <div className="jobsBox">
      <h2>{props.title}</h2>
      <p>
        {props.contractType} - {props.country} - {props.city}
      </p>
    </div>
  );
};

export default Jobs;
