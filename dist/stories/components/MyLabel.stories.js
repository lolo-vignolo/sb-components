var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { MyLabel } from '../../components/MyLabel';
export default {
    title: 'UI/MyLabel',
    component: MyLabel,
    argTypes: {
        color: { control: 'select' },
        customerFontColor: { control: 'color' },
    },
};
var Template = function (args) { return (_jsx(MyLabel, __assign({}, args))); };
export var MyLabelBasic = Template.bind({});
MyLabelBasic.args = {
    label: 'default Label',
    size: 'normal',
    allCaps: false,
};
export var AllCaps = Template.bind({});
AllCaps.args = {
    label: 'default Label',
    size: 'normal',
    allCaps: true,
};
export var Secondary = Template.bind({});
Secondary.args = {
    label: 'default Label',
    size: 'normal',
    color: 'secondary',
};
export var Tertiary = Template.bind({});
Tertiary.args = {
    label: 'default Label',
    size: 'normal',
    color: 'tertiary',
};
export var controlColor = Template.bind({});
controlColor.args = {
    label: 'default Label',
    size: 'h1',
    customerFontColor: '#5517ac',
};
