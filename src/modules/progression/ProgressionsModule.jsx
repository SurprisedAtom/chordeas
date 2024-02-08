import { useParams } from "react-router-dom";

// import React from "react";

function ProgressionsModule() {
  const [searchParams, setSearchParams] = useSearchParams();
  return <div>ProgressionsModule, this is the param: </div>;
}

export default ProgressionsModule;
