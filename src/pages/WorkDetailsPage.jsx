import { useParams } from "react-router-dom";

function WorkDetailsPage() {
  const { id } = useParams();
  console.log(id);
  return <div>CardDetailsPage</div>;
}

export default WorkDetailsPage;
