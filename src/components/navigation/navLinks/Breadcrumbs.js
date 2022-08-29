import React from 'react';
import { NavLink } from "react-router-dom";
import useBreadcrumbs from 'use-react-router-breadcrumbs';



function Breadcrumbs(props) {
    const breadcrumbs = useBreadcrumbs();
    return (
        <div id='Breadcrumbs'>
        {
          breadcrumbs.map(({ match, breadcrumb }, index) => {
            return (
              <span key={match.pathname}>
                <NavLink key={match.pathname} to={match.pathname}>{breadcrumb} {index !== breadcrumbs.length - 1 && '/'}</NavLink>
              </span>
            )
          })
        }
      </div>
    );
}

export default Breadcrumbs;
