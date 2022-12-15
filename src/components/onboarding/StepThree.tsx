import {
  Avatar,
  Button,
  Card,
  CheckBox,
  ChoiceList,
  FlexChild,
  FlexLayout,
  FormElement,
  Modal,
  Switcher,
  TextStyles,
  ToolTip,
} from '@cedcommerce/ounce-ui';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../layout/AuthLayout';

function StepThree() {
  const navigate = useNavigate();
  const [roleMapping, toggleModalCustomerRole] = useState(true);
  const [addWarehouses, toggleModalWarehouses] = useState(true);

  const [choiceListArray, setchoiceListArray] = useState<string[]>([]);

  const choiceListOptions = [
    { label: 'All Customer Roles', value: 'All Customer Roles' },
    { label: 'Customer Role 1', value: 'Customer Role 1' },
    { label: 'Customer Role 2', value: 'Customer Role 2' },
    { label: 'Customer Role 3', value: 'Customer Role 3' },
    { label: 'Customer Role 4', value: 'Customer Role 4' },
    { label: 'Customer Role 5', value: 'Customer Role 5' },
    { label: 'Customer Role 6', value: 'Customer Role 6' },
    { label: 'Customer Role 7', value: 'Customer Role 7' },
  ];
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
            Select your App Settings
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
            Control your data syncing for each platform.
          </TextStyles>
          <div className="mt-20"></div>
          <FormElement key="">
            <Card cardType="Bordered">
              <FlexLayout spacing="tight">
                <Avatar
                  color="black"
                  size="small"
                  text="gr"
                  type="circle"
                  image={'magento1'}
                />
                <TextStyles
                  alignment="left"
                  fontweight="extraBold"
                  subheadingTypes="XS-1.6"
                  textcolor="dark"
                  type="SubHeading"
                  utility="none"
                >
                  WooCommerce Settings
                </TextStyles>
              </FlexLayout>
              <div className="mt-12"></div>
              <FlexLayout halign="fill">
                <FlexChild>
                  <>
                    <TextStyles
                      alignment="left"
                      fontweight="normal"
                      subheadingTypes="XS-1.6"
                      textcolor="dark"
                      type="SubHeading"
                      utility=""
                    >
                      Match with Zoho <em>*</em>
                    </TextStyles>
                    <TextStyles
                      alignment="left"
                      fontweight="normal"
                      lineHeight="LH-2.0"
                      paragraphTypes="MD-1.4"
                      subheadingTypes="XS-1.6"
                      textcolor="light"
                      type="Paragraph"
                      utility="none"
                    >
                      Atleast one should be selected
                    </TextStyles>
                  </>
                </FlexChild>
                <FlexChild>
                  <FlexLayout spacing="loose">
                    <CheckBox id="" labelVal="SKU" name="Name" onClick={() => {}} />
                    <CheckBox id="" labelVal="Barcode" name="Name" onClick={() => {}} />
                    <CheckBox id="" labelVal="Item Name" name="Name" onClick={() => {}} />
                  </FlexLayout>
                </FlexChild>
              </FlexLayout>
              <hr className="mt-8. mb-10" />
              <FlexLayout spacing="loose" valign="center">
                <FlexChild desktopWidth="100" tabWidth="100" mobileWidth="100">
                  <FlexLayout halign="fill">
                    <FlexChild>
                      <FlexLayout spacing="tight" valign="center">
                        <Switcher checked onChange={() => {}} />
                        <div className="custtom_tooltip">
                          <ToolTip
                            helpText=" As Zoho accepts only two types of roles `customer` or vendor, and that’s why Merchant will have an option to Map platform Customer Roles/ Type with Zoho Customer Type."
                            position="top"
                            open={false}
                          >
                            <Button thickness="thin" type="TextButton">
                              Role Mapping <em>*</em>
                            </Button>
                          </ToolTip>
                        </div>

                        <Button
                          halign="Center"
                          iconAlign="left"
                          length="none"
                          onAction={() => {}}
                          onClick={() => toggleModalCustomerRole(!roleMapping)}
                          thickness="thin"
                          type="TextButton"
                        >
                          Add Customer Roles
                        </Button>
                      </FlexLayout>
                    </FlexChild>
                    <FlexChild>
                      <TextStyles
                        alignment="left"
                        fontweight="normal"
                        lineHeight="LH-2.0"
                        paragraphTypes="MD-1.4"
                        subheadingTypes="XS-1.6"
                        textcolor="light"
                        type="Paragraph"
                        utility="none"
                      >
                        10 Roles Mapped
                      </TextStyles>
                    </FlexChild>
                  </FlexLayout>
                </FlexChild>
                <FlexChild desktopWidth="100" tabWidth="100" mobileWidth="100">
                  <FlexLayout halign="fill">
                    <FlexChild>
                      <FlexLayout spacing="tight" valign="center">
                        <Switcher checked onChange={() => {}} />
                        <div className="custtom_tooltip">
                          <ToolTip
                            open={false}
                            helpText=" As Zoho accepts only two types of roles `customer` or vendor, and that’s why Merchant will have an option to Map platform Customer Roles/ Type with Zoho Customer Type."
                            position="top"
                          >
                            <Button thickness="thin" type="TextButton">
                              Inventory Syncing <em>*</em>
                            </Button>
                          </ToolTip>
                        </div>

                        <Button
                          halign="Center"
                          iconAlign="left"
                          length="none"
                          onAction={() => {}}
                          onClick={() => toggleModalWarehouses(!addWarehouses)}
                          thickness="thin"
                          type="TextButton"
                        >
                          Add Warehouses
                        </Button>
                      </FlexLayout>
                    </FlexChild>
                    <FlexChild>
                      <TextStyles
                        alignment="left"
                        fontweight="normal"
                        lineHeight="LH-2.0"
                        paragraphTypes="MD-1.4"
                        subheadingTypes="XS-1.6"
                        textcolor="light"
                        type="Paragraph"
                        utility="none"
                      >
                        10 Warehouse Synced
                      </TextStyles>
                    </FlexChild>
                  </FlexLayout>
                </FlexChild>
                <FlexChild desktopWidth="100" tabWidth="100" mobileWidth="100">
                  <FlexLayout halign="fill">
                    <FlexChild>
                      <FlexLayout spacing="tight" valign="center">
                        <Switcher checked onChange={() => {}} />
                        <div className="custtom_tooltip">
                          <ToolTip
                            open={false}
                            helpText=" As Zoho accepts only two types of roles `customer` or vendor, and that’s why Merchant will have an option to Map platform Customer Roles/ Type with Zoho Customer Type."
                            position="top"
                          >
                            <Button thickness="thin" type="TextButton">
                              Order Syncing <em>*</em>
                            </Button>
                          </ToolTip>
                        </div>
                      </FlexLayout>
                    </FlexChild>
                  </FlexLayout>
                </FlexChild>
                <FlexChild desktopWidth="100" tabWidth="100" mobileWidth="100">
                  <FlexLayout halign="fill">
                    <FlexChild>
                      <FlexLayout spacing="tight" valign="center">
                        <Switcher checked onChange={() => {}} />
                        <div className="custtom_tooltip">
                          <ToolTip
                            open={false}
                            helpText=" As Zoho accepts only two types of roles `customer` or vendor, and that’s why Merchant will have an option to Map platform Customer Roles/ Type with Zoho Customer Type."
                            position="top"
                          >
                            <Button thickness="thin" type="TextButton">
                              Shipment Syncing <em>*</em>
                            </Button>
                          </ToolTip>
                        </div>
                      </FlexLayout>
                    </FlexChild>
                  </FlexLayout>
                </FlexChild>
              </FlexLayout>
            </Card>
            <hr className="mt-12 mb-12" />
            <FlexLayout halign="end">
              <Button
                halign="Center"
                length="none"
                thickness="large"
                type="Primary"
                iconRound={false}
                onClick={() => navigate('/onboarding/9384u90284902834/completed')}
              >
                Next
              </Button>
            </FlexLayout>
          </FormElement>
        </Card>
      </div>
      <Modal
        modalSize="medium"
        open={!roleMapping}
        close={() => {
          toggleModalCustomerRole(!roleMapping);
        }}
        heading="Role Mapping for WooCommerce"
        primaryAction={{
          content: 'Proceed',
          loading: false,
          onClick: function noRefCheck() {},
        }}
        secondaryAction={{
          content: 'Close',
          loading: false,
          onClick: function noRefCheck() {
            toggleModalCustomerRole(!roleMapping);
          },
        }}
      >
        <TextStyles utility="mb-12">
          Map customer roles between WooCommerce and Zoho.
        </TextStyles>
        <Card cardType="Bordered">
          <FlexLayout valign="center">
            <FlexChild desktopWidth="33">
              <TextStyles
                alignment="left"
                fontweight="normal"
                lineHeight="LH-2.0"
                paragraphTypes="MD-1.4"
                subheadingTypes="XS-1.6"
                textcolor="dark"
                type="Paragraph"
                utility="none"
              >
                Zoho Customer Role (Customer)
              </TextStyles>
            </FlexChild>
            <FlexChild desktopWidth="66">
              <div className="custom_choicelist">
                <ChoiceList
                  name="WooCommerce customer roles"
                  ellipsis={true}
                  popoverContainer="body"
                  thickness={'thin'}
                  options={choiceListOptions}
                  placeholder={'Map customer roleCustomize Grid'}
                  value={choiceListArray}
                  onChange={(e: string) => {
                    const temp: string[] = [...choiceListArray];
                    const index = temp.indexOf(e);
                    index === -1 ? temp.push(e) : temp.splice(index, 1);

                    setchoiceListArray(temp);
                  }}
                  showBadges={true}
                />
              </div>
            </FlexChild>
          </FlexLayout>
        </Card>
      </Modal>

      <Modal
        modalSize="medium"
        open={!addWarehouses}
        close={() => {
          toggleModalWarehouses(!addWarehouses);
        }}
        heading="Add Warehouses for WooCommerce"
        primaryAction={{
          content: 'Proceed',
          loading: false,
          onClick: function noRefCheck() {},
        }}
        secondaryAction={{
          content: 'Close',
          loading: false,
          onClick: function noRefCheck() {
            toggleModalWarehouses(!addWarehouses);
          },
        }}
      >
        <TextStyles utility="mb-12">
          Select the warehouses you want your invemtory to sync with.
        </TextStyles>
        <Card cardType="Bordered">
          <FlexLayout valign="center">
            <FlexChild desktopWidth="100" mobileWidth="100" tabWidth="100">
              <div className="custom_choicelist">
                <ChoiceList
                  name="WooCommerce customer roles"
                  ellipsis={true}
                  popoverContainer="body"
                  thickness={'thin'}
                  options={choiceListOptions}
                  placeholder={'Map customer roleCustomize Grid'}
                  value={choiceListArray}
                  onChange={(e: string) => {
                    const temp: string[] = [...choiceListArray];
                    const index = temp.indexOf(e);
                    index === -1 ? temp.push(e) : temp.splice(index, 1);

                    setchoiceListArray(temp);
                  }}
                  showBadges={true}
                />
              </div>
            </FlexChild>
          </FlexLayout>
        </Card>
      </Modal>
    </AuthLayout>
  );
}

export default StepThree;
