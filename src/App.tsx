import { Navigate, Route, Routes } from 'react-router-dom';

import ErrorBoundary from './components/errors/ErrorBoundary';
import AuthRoutes from './components/navigation/AuthRoutes';
import PrivateRoutes from './components/navigation/PrivateRoutes';
import ProtectedRoutes from './components/navigation/ProtectedRoutes';
import Onboarding from './components/onboarding/Onboarding';
import Dashboard from './components/panel/Dashboard';
import Settings from './components/panel/Settings';

const App = () => {
  console.log('ENV', process.env.REACT_APP_ENV);
  return (
    <ErrorBoundary>
      <Routes>
        {/* auth routes */}
        <Route path="/auth/*" element={<AuthRoutes />} />
        {/* on-boarding routes */}
        <Route path="/onboarding/:UUID" element={<ProtectedRoutes />}>
          <Route path="/onboarding/:UUID/welcome" element={<Onboarding />} />
          <Route path="/onboarding/:UUID/step1" element={<Onboarding />} />
          <Route path="/onboarding/:UUID/step2" element={<Onboarding />} />
          <Route path="/onboarding/:UUID/step2" element={<Onboarding />} />
          <Route path="/onboarding/:UUID/completed" element={<Onboarding />} />
          <Route path="/onboarding/:UUID/oops" element={<Onboarding />} />
        </Route>
        {/* panel routes */}
        <Route path="/panel/:UUID" element={<PrivateRoutes />}>
          <Route path="/panel/:UUID/dashboard" element={<Dashboard />} />
          <Route path="/panel/:UUID/setting" element={<Settings />} />
        </Route>
        <Route path="*" element={<Navigate to={'/auth/login'} />} />
      </Routes>
    </ErrorBoundary>
  );
};

export default App;
