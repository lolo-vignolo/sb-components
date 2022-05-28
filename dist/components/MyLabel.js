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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import './myLabel.css';
export var MyLabel = function (_a) {
    var customerFontColor = _a.customerFontColor, props = __rest(_a, ["customerFontColor"]);
    var mode = '';
    if (props.color === 'primary') {
        mode = 'text-primary';
    }
    else if (props.color === 'secondary') {
        mode = 'text-secondary';
    }
    else if (props.color === 'tertiary') {
        mode = 'text-tertiary';
    }
    if (props.allCaps) {
        return (_jsx("span", __assign({ className: "label ".concat(props.size, " ").concat(mode), style: { color: customerFontColor } }, { children: props.label.toUpperCase() })));
    }
    return (_jsx("span", __assign({ className: "label ".concat(props.size, " ").concat(mode), style: { color: customerFontColor } }, { children: props.label })));
};
