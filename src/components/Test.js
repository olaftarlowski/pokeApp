import { useQuery } from "@apollo/client";
import api from "../queries/Queries";

const Test = () => {
  const { loading, error, data } = useQuery(api);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h2>TEstO</h2>
      {data.continents.map((item) => {
        return (
          <div>
            <p>{item.code}</p>
            <p>{item.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Test;
