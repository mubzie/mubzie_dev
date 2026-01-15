import { useParams } from "react-router-dom";

function DetailsPage() {
  const { slug } = useParams();

  console.log(slug);

  return <div>DetailsPage {`${slug} - ${0}`}</div>;
}

export default DetailsPage;
