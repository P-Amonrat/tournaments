import {
  TiltButton
} from "/build/_shared/chunk-CTZTP5OE.js";
import {
  require_lodash
} from "/build/_shared/chunk-HA2KWBJU.js";
import {
  space_default,
  theme_default,
  typography_default
} from "/build/_shared/chunk-EA6MLCKC.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-GAVVBTB4.js";
import {
  __toESM
} from "/build/_shared/chunk-FFEYCVP6.js";

// app/components/common/TiltCheck.tsx
var import_lodash = __toESM(require_lodash());
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var { Text } = typography_default;
var { useToken } = theme_default;
function TiltCheck(props) {
  const {
    fieldName,
    labelKey,
    labelValue,
    multiple,
    options,
    onSelect,
    initialValues
  } = props;
  const [values, setValues] = (0, import_react.useState)(initialValues);
  const { token } = useToken();
  const isActive = (0, import_react.useCallback)(
    (value) => {
      if (multiple) {
        return (0, import_lodash.indexOf)(values, `${value}`) > -1 || (0, import_lodash.indexOf)(values, value) > -1;
      } else {
        return values === value;
      }
    },
    [values]
  );
  const handleClicked = (0, import_react.useCallback)(
    (value) => {
      let newValues;
      if (multiple) {
        newValues = [];
        if (values && (0, import_lodash.isArray)(values)) {
          newValues = [...values];
        }
        let existedIndex = (0, import_lodash.indexOf)(values, value);
        if (existedIndex < 0) {
          existedIndex = (0, import_lodash.indexOf)(values, `${value}`);
        }
        if (existedIndex > -1) {
          newValues.splice(existedIndex, 1);
        } else {
          newValues.push(value);
        }
      } else {
        if (`${values}` === `${value}`) {
          newValues = null;
        } else {
          newValues = value;
        }
      }
      onSelect(fieldName, newValues);
      setValues(newValues);
    },
    [onSelect, values]
  );
  (0, import_react.useEffect)(() => {
    setValues(initialValues);
  }, [initialValues]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(space_default, { wrap: true, size: 5, style: { display: "flex" }, children: options.map((option, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    TiltButton,
    {
      color: isActive(option[labelValue ? labelValue : "id"]) ? "primary" : "transparent",
      onClick: () => handleClicked(option[labelValue ? labelValue : "id"]),
      style: {
        borderColor: token.colorBorder,
        fontStyle: "italic",
        fontWeight: 400,
        paddingBlock: 6
      },
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: option[labelKey ? labelKey : "label"] }, void 0, false, {
        fileName: "app/components/common/TiltCheck.tsx",
        lineNumber: 94,
        columnNumber: 11
      }, this)
    },
    `${fieldName}-${option[labelValue ? labelValue : "id"]}`,
    false,
    {
      fileName: "app/components/common/TiltCheck.tsx",
      lineNumber: 79,
      columnNumber: 9
    },
    this
  )) }, void 0, false, {
    fileName: "app/components/common/TiltCheck.tsx",
    lineNumber: 77,
    columnNumber: 5
  }, this);
}

export {
  TiltCheck
};
//# sourceMappingURL=/build/_shared/chunk-64CVQ3LE.js.map
