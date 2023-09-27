interface ComponentsListProps {
  componentsMeta: any;
}

const ComponentsList: React.FC<ComponentsListProps> = ({ componentsMeta }) => {

  const listItems = Object.keys(componentsMeta).map(component =>
    <li>{component}</li>
  );

    return (
      <div>
        {listItems}
      </div>
    );
  };
  
  export default ComponentsList;