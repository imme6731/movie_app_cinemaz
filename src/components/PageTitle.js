import { Helmet, HelmetProvider } from "react-helmet-async";

export const PageTitle = ({ titlename }) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Cinemaz {titlename}</title>
      </Helmet>
    </HelmetProvider>
  );
};
