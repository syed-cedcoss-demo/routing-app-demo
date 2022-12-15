import {
  Button,
  Card,
  FlexChild,
  FlexLayout,
  FormElement,
  TextStyles,
} from '@cedcommerce/ounce-ui';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../layout/AuthLayout';

// import bigcommerce from '../../../Asests/Images/BigCommerce.png';
// import magento1 from '../../../Asests/Images/Magento1.png';
// import walmart from '../../../Asests/Images/Wallmart.png';
// import woocommerce from '../../../Asests/Images/WooCommerce.png';

function StepTwo() {
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
            Connect your Channel(s) test
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
            Select and connect channel to integrate with your Zoho acccount. Connect atleast
            one channel to finish onboarding.
          </TextStyles>
          <div className="mt-20"></div>
          <FormElement key="">
            <FlexLayout spacing="loose">
              <FlexChild desktopWidth="25">
                <Card cardType="Bordered" extraClass="framework-card">
                  <div className="framework-media">
                    <img src={'magento1'} alt="" />
                  </div>
                  <Button
                    halign="Center"
                    iconAlign="left"
                    length="fullBtn"
                    onAction={() => {}}
                    onClick={function noRefCheck() {}}
                    thickness="large"
                    type="Outlined"
                  >
                    Connect
                  </Button>
                </Card>
              </FlexChild>
              <FlexChild desktopWidth="25">
                <Card cardType="Bordered" extraClass="framework-card">
                  <div className="framework-media">
                    <img src={'woocommerce'} alt="" />
                  </div>
                  <Button
                    halign="Center"
                    iconAlign="left"
                    length="fullBtn"
                    onAction={() => {}}
                    onClick={function noRefCheck() {}}
                    thickness="large"
                    type="Outlined"
                  >
                    Connect
                  </Button>
                </Card>
              </FlexChild>
              <FlexChild desktopWidth="25">
                <Card cardType="Bordered" extraClass="framework-card">
                  <div className="framework-media">
                    <img src={'walmart'} alt="" />
                  </div>
                  <Button
                    halign="Center"
                    iconAlign="left"
                    length="fullBtn"
                    onAction={() => {}}
                    onClick={function noRefCheck() {}}
                    thickness="large"
                    type="Outlined"
                  >
                    Connect
                  </Button>
                </Card>
              </FlexChild>
              <FlexChild desktopWidth="25">
                <Card cardType="Bordered" extraClass="framework-card">
                  <div className="framework-media">
                    <img src={'bigcommerce'} alt="" />
                  </div>
                  <Button
                    halign="Center"
                    iconAlign="left"
                    length="fullBtn"
                    onAction={() => {}}
                    onClick={function noRefCheck() {}}
                    thickness="large"
                    type="Outlined"
                  >
                    Connect
                  </Button>
                </Card>
              </FlexChild>
            </FlexLayout>
            <hr className="mt-12 mb-12" />
            <FlexLayout halign="end">
              <Button
                halign="Center"
                length="none"
                onClick={() => navigate('/onboarding/9384u90284902834/step3')}
                thickness="large"
                type="Primary"
                iconRound={false}
              >
                Next
              </Button>
            </FlexLayout>
          </FormElement>
        </Card>
      </div>
    </AuthLayout>
  );
}

export default StepTwo;
