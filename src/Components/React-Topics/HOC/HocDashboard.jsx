import withAuth from "./withAuth";

// eslint-disable-next-line react-refresh/only-export-components
const HocDashboard = () => {
  return <div>Welcome to the Dashboard!</div>;
};

// eslint-disable-next-line react-refresh/only-export-components
export default withAuth(HocDashboard);
