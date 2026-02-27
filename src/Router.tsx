import {useEffect, useState, type ComponentType} from "react";

interface RouteParams {
  [key: string]: string;
}

interface RouteComponentProps {
  params: RouteParams;
}

export type RouteComponent = ComponentType<RouteComponentProps>;

interface RouterProps {
  routes: {
    [key: string]: RouteComponent;
    "*": RouteComponent;
  };
}

const matchPas = (path: string, route: string) => {
  const pathParts = path.split("/");
  const routePaths = route.split("/");

  if (pathParts.length !== routePaths.length) {
    return null;
  }

  const params: RouteParams = {};

  for (let i = 0; i < routePaths.length; i++) {
    if (routePaths[i].startsWith(":")) {
      const paramName = routePaths[i].slice(1);

      params[paramName] = pathParts[i];
    } else if (routePaths[i] !== pathParts[i]) {
      return null;
    }
  }
  return params;
};

const useRoute = () => {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setPath(window.location.pathname);
    };

    window.addEventListener("popstate", onLocationChange);

    return () => window.removeEventListener("popstate", onLocationChange);
  }, []);

  return path;
};

const Router = (props: RouterProps) => {
  const {routes} = props;
  const path = useRoute();

  for (const route in routes) {
    const params = matchPas(path, route);

    if (params) {
      const Card = routes[route];

      return <Card params={params} />;
    }
  }

  const NotFound = routes["*"];

  return <NotFound params={{}} />;
};

export default Router;