import { Link } from "react-router-dom";
export default function BreadCrumbs({ crumbs }) {
  const theCrumbs = crumbs.map((crumb, index) => {
    if (crumb.link) {
      return (
        <li className="breadcrumb-item" key={index}>
          <Link to={crumb.link}>{crumb.label}</Link>
        </li>
      );
    } else {
      return (
        <li className="breadcrumb-item active" aria-current="page" key={index}>
          {crumb.label}
        </li>
      );
    }
  });

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">{theCrumbs}</ol>
    </nav>
  );
}
