import { StepWizard } from '@cedcommerce/ounce-ui';
import React from 'react';

const AuthLayout = ({ children }: any) => {
  return (
    <div className="bg-set">
      <div className="mt-40"></div>
      <div
        className="pt-100 pb-100"
        style={{
          width: 'initial',
          margin: 'auto',
          maxWidth: '1130px',
        }}
      >
        <div className="custom-stepwizard">
          <StepWizard
            current={1}
            initial={0}
            data={[
              {
                title: 'Connect Zoho',
              },
              {
                title: 'Connect Channels',
              },
              {
                title: 'Configuration',
              },
            ]}
            direction="horizontal"
            status="process"
          />
        </div>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
