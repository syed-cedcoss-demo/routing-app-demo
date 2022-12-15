import {
  Button,
  Card,
  FlexLayout,
  FormElement,
  Select,
  TextStyles,
} from '@cedcommerce/ounce-ui';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../layout/AuthLayout';
const StepOne = () => {
  const navigate = useNavigate();
  return (
    <AuthLayout>
      <div className="mt-30" style={{ width: 'initial', margin: 'auto', maxWidth: '700px' }}>
        <Card cardType="Shadowed">
          <TextStyles
            alignment="left"
            fontweight="extraBold"
            lineHeight="LH-2.4"
            paragraphTypes="MD-1.4"
            subheadingTypes="XS-1.6"
            textcolor="dark"
            type="SubHeading"
            utility="none"
          >
            Connect your Zoho account
          </TextStyles>
          <TextStyles
            alignment="left"
            fontweight="normal"
            lineHeight="LH-2.0"
            paragraphTypes="MD-1.4"
            textcolor="light"
            type="Paragraph"
            utility="none"
          >
            To start creating campaigns and uploading your products to Facebook, connect your
            Facebook account.
          </TextStyles>
          <div className="mt-20"></div>
          <FormElement key="">
            <Select
              // onChange={handleMarketplaceChange}
              name="Select Country"
              options={[]}
              placeholder="Select a country"
              popoverContainer="body"
              position="top"
              thickness="thin"
              // value={sourceMarketplace}
            />
            <hr className="mb-15 mt-15" />
            <FlexLayout direction="vertical" spacing="extraLoose">
              <Button
                halign="Center"
                //   icon={!loading ? '' : ''}
                iconAlign="right"
                length="fullBtn"
                //   onClick={connectSourceMarketplace}
                thickness="large"
                type="Primary"
                iconRound={false}
                //   disable={sourceMarketplace === ''}
                //   loading={loading}
                onClick={() => navigate('/onboarding/9384u90284902834/step2')}
              >
                Connect with Zoho
              </Button>
              <FlexLayout spacing="extraTight">
                <Button
                  halign="Center"
                  iconAlign="left"
                  length="none"
                  onAction={() => {}}
                  onClick={() => navigate('/onboarding/9384u90284902834/step2')}
                  thickness="thin"
                  type="TextButton"
                >
                  Register at Zoho
                </Button>
                <TextStyles>{"if you don't have an account"}</TextStyles>
              </FlexLayout>
            </FlexLayout>
          </FormElement>
        </Card>
      </div>
    </AuthLayout>
  );
};

export default StepOne;
