import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MyLabel } from '../../components/MyLabel';

export default {
  title: 'UI/MyLabel',
  component: MyLabel,
  argTypes: {
    color: { control: 'select' }, // control: 'color'
    customerFontColor: { control: 'color' },
  },
} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = (args) => (
  <MyLabel {...args} />
);

export const MyLabelBasic = Template.bind({});
MyLabelBasic.args = {
  label: 'default Label',
  size: 'normal',
  allCaps: false,
};

export const AllCaps = Template.bind({});
AllCaps.args = {
  label: 'default Label',
  size: 'normal',
  allCaps: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'default Label',
  size: 'normal',
  color: 'secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  label: 'default Label',
  size: 'normal',
  color: 'tertiary',
};

export const controlColor = Template.bind({});
controlColor.args = {
  label: 'default Label',
  size: 'h1',
  customerFontColor: '#5517ac',
};
