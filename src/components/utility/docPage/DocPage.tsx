import BreadCrumbsPage from "../docPages/breadcrumbsPage/BreadCrumbsPage";
import ButtonPage from "../docPages/buttonPage/ButtonPage";

interface ComponentsListProps {
  currentPage: string;
};

const DocPage: React.FC<ComponentsListProps> = ({currentPage}) => {

  if (currentPage === 'breadcrumb'){
    return <BreadCrumbsPage/>
  }

  if (currentPage === 'button'){
    return <ButtonPage/>
  }

  return (
    <div>
      {currentPage}
    </div>
  );
};

export default DocPage;