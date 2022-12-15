import { Loader } from '@cedcommerce/ounce-ui';
import React, { useEffect, useState } from 'react';

const Completed = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    //update loader
    let count: number = 0;
    const interval = setInterval(() => {
      count += 3;
      console.log('count', count);
      setProgress(count);
      if (count >= 100) {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <Loader
      type="Loader3"
      title="You are successfully onboarded"
      subtitle="Setting up your account, please wait..."
      percentage={progress}
    />
  );
};

export default Completed;
