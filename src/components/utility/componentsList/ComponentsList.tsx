import { Link } from "react-router-dom";

interface ComponentsListProps {
  componentsMeta: any;
}

const ComponentsList: React.FC<ComponentsListProps> = ({ componentsMeta }) => {
  const listItems = Object.keys(componentsMeta).map((component) => (
    <Link to={component} key={component}>
      <li>{component}</li>
    </Link>
  ));

  return <div>{listItems}</div>;
};

export default ComponentsList;
