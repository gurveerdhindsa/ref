import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Analytics = () => {
  const location = useLocation();
  useEffect(() => {
    const analytics = window.firebase && window.firebase.analytics;
    if (typeof analytics === 'function') {
      const pagePath = location.pathname + location.search;
      analytics().setCurrentScreen(pagePath);
      analytics().logEvent('page_view', { pagePath });
    }
  }, [location]);
  return null;
};

export default Analytics;
