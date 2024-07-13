import {
  TiltMenus
} from "/build/_shared/chunk-RGETFDE6.js";
import {
  require_jsx_runtime
} from "/build/_shared/chunk-DMCGBCEK.js";
import {
  BadgeHelp,
  Globe,
  Home,
  LogOut,
  Mail,
  MessagesSquare,
  Moon,
  Search,
  Settings,
  Trophy,
  User,
  Users
} from "/build/_shared/chunk-EKWFIVWG.js";
import {
  Media
} from "/build/_shared/chunk-337STSEA.js";
import {
  AuthContext
} from "/build/_shared/chunk-SFSG4NV4.js";
import {
  require_session
} from "/build/_shared/chunk-QVU6QP4I.js";
import {
  isEmail,
  isPhone,
  resetFetcher,
  validatePassword
} from "/build/_shared/chunk-7PTPQV33.js";
import {
  TiltButton
} from "/build/_shared/chunk-CTZTP5OE.js";
import {
  require_lodash
} from "/build/_shared/chunk-HA2KWBJU.js";
import {
  require_node
} from "/build/_shared/chunk-TKUYKEFQ.js";
import {
  ArrowLeftOutlined_default,
  MenuFoldOutlined_default
} from "/build/_shared/chunk-ONWVZSRO.js";
import {
  AppContext
} from "/build/_shared/chunk-JWZLYAAR.js";
import {
  CloseOutlined_default,
  LoadingOutlined_default,
  RightOutlined_default,
  avatar_default,
  badge_default,
  button_default,
  card_default,
  col_default,
  divider_default,
  drawer_default,
  dropdown_default,
  empty_default,
  flex_default,
  form_default,
  image_default,
  input_default,
  layout_default,
  list_default,
  menu_default,
  modal_default,
  require_dayjs_min,
  row_default,
  skeleton_default,
  space_default,
  statistic_default,
  switch_default,
  theme_default,
  typography_default
} from "/build/_shared/chunk-EA6MLCKC.js";
import {
  useTranslation
} from "/build/_shared/chunk-IDB3BDWM.js";
import "/build/_shared/chunk-UPPG42YI.js";
import {
  Link,
  Outlet,
  useFetcher,
  useLoaderData,
  useLocation,
  useMatches,
  useNavigate,
  useRevalidator
} from "/build/_shared/chunk-HTXPUJYZ.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-GAVVBTB4.js";
import {
  __toESM
} from "/build/_shared/chunk-FFEYCVP6.js";

// app/routes/_app.tsx
var import_react17 = __toESM(require_react());
var import_node = __toESM(require_node());

// node_modules/remix-utils/browser/react/csrf.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var import_react = __toESM(require_react());
var context = (0, import_react.createContext)(null);
function AuthenticityTokenProvider({ children, token }) {
  return (0, import_jsx_runtime.jsx)(context.Provider, { value: token, children });
}

// app/components/layouts/LayoutDashboard.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var { Content } = layout_default;
var LayoutDashboard = (props) => {
  const { children } = props;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(layout_default, { style: { minHeight: "100vh", paddingTop: 64, overflowX: "hidden" }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Navbar, {}, void 0, false, {
      fileName: "app/components/layouts/LayoutDashboard.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Content, { style: { position: "relative" }, children }, void 0, false, {
      fileName: "app/components/layouts/LayoutDashboard.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LayoutFooter, {}, void 0, false, {
      fileName: "app/components/layouts/LayoutDashboard.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/layouts/LayoutDashboard.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
};

// app/components/layouts/LayoutFooter.tsx
var import_react7 = __toESM(require_react());

// app/components/common/LoginForm.tsx
var import_dayjs = __toESM(require_dayjs_min());
var import_react3 = __toESM(require_react());

// node_modules/react-otp-input/lib/index.esm.js
var import_react2 = __toESM(require_react());
var isStyleObject = function(obj) {
  return typeof obj === "object" && obj !== null;
};
var OTPInput = function(_a) {
  var _b = _a.value, value = _b === void 0 ? "" : _b, _c = _a.numInputs, numInputs = _c === void 0 ? 4 : _c, onChange = _a.onChange, onPaste = _a.onPaste, renderInput = _a.renderInput, _d = _a.shouldAutoFocus, shouldAutoFocus = _d === void 0 ? false : _d, _e = _a.inputType, inputType = _e === void 0 ? "text" : _e, renderSeparator = _a.renderSeparator, placeholder = _a.placeholder, containerStyle = _a.containerStyle, inputStyle = _a.inputStyle, _f = _a.skipDefaultStyles, skipDefaultStyles = _f === void 0 ? false : _f;
  var _g = import_react2.default.useState(0), activeInput = _g[0], setActiveInput = _g[1];
  var inputRefs = import_react2.default.useRef([]);
  var getOTPValue = function() {
    return value ? value.toString().split("") : [];
  };
  var isInputNum = inputType === "number" || inputType === "tel";
  import_react2.default.useEffect(function() {
    inputRefs.current = inputRefs.current.slice(0, numInputs);
  }, [numInputs]);
  import_react2.default.useEffect(function() {
    var _a2;
    if (shouldAutoFocus) {
      (_a2 = inputRefs.current[0]) === null || _a2 === void 0 ? void 0 : _a2.focus();
    }
  }, [shouldAutoFocus]);
  var getPlaceholderValue = function() {
    if (typeof placeholder === "string") {
      if (placeholder.length === numInputs) {
        return placeholder;
      }
      if (placeholder.length > 0) {
        console.error("Length of the placeholder should be equal to the number of inputs.");
      }
    }
    return void 0;
  };
  var isInputValueValid = function(value2) {
    var isTypeValid = isInputNum ? !isNaN(Number(value2)) : typeof value2 === "string";
    return isTypeValid && value2.trim().length === 1;
  };
  var handleChange = function(event) {
    var value2 = event.target.value;
    if (isInputValueValid(value2)) {
      changeCodeAtFocus(value2);
      focusInput(activeInput + 1);
    }
  };
  var handleInputChange = function(event) {
    var nativeEvent = event.nativeEvent;
    if (!isInputValueValid(event.target.value)) {
      if (nativeEvent.data === null && nativeEvent.inputType === "deleteContentBackward") {
        event.preventDefault();
        changeCodeAtFocus("");
        focusInput(activeInput - 1);
      }
      event.target.value = "";
    }
  };
  var handleFocus = function(event) {
    return function(index) {
      setActiveInput(index);
      event.target.select();
    };
  };
  var handleBlur = function() {
    setActiveInput(activeInput - 1);
  };
  var handleKeyDown = function(event) {
    var otp = getOTPValue();
    if ([event.code, event.key].includes("Backspace")) {
      event.preventDefault();
      changeCodeAtFocus("");
      focusInput(activeInput - 1);
    } else if (event.code === "Delete") {
      event.preventDefault();
      changeCodeAtFocus("");
    } else if (event.code === "ArrowLeft") {
      event.preventDefault();
      focusInput(activeInput - 1);
    } else if (event.code === "ArrowRight") {
      event.preventDefault();
      focusInput(activeInput + 1);
    } else if (event.key === otp[activeInput]) {
      event.preventDefault();
      focusInput(activeInput + 1);
    } else if (event.code === "Spacebar" || event.code === "Space" || event.code === "ArrowUp" || event.code === "ArrowDown") {
      event.preventDefault();
    }
  };
  var focusInput = function(index) {
    var _a2, _b2;
    var activeInput2 = Math.max(Math.min(numInputs - 1, index), 0);
    if (inputRefs.current[activeInput2]) {
      (_a2 = inputRefs.current[activeInput2]) === null || _a2 === void 0 ? void 0 : _a2.focus();
      (_b2 = inputRefs.current[activeInput2]) === null || _b2 === void 0 ? void 0 : _b2.select();
      setActiveInput(activeInput2);
    }
  };
  var changeCodeAtFocus = function(value2) {
    var otp = getOTPValue();
    otp[activeInput] = value2[0];
    handleOTPChange(otp);
  };
  var handleOTPChange = function(otp) {
    var otpValue = otp.join("");
    onChange(otpValue);
  };
  var handlePaste = function(event) {
    var _a2;
    event.preventDefault();
    var otp = getOTPValue();
    var nextActiveInput = activeInput;
    var pastedData = event.clipboardData.getData("text/plain").slice(0, numInputs - activeInput).split("");
    if (isInputNum && pastedData.some(function(value2) {
      return isNaN(Number(value2));
    })) {
      return;
    }
    for (var pos = 0; pos < numInputs; ++pos) {
      if (pos >= activeInput && pastedData.length > 0) {
        otp[pos] = (_a2 = pastedData.shift()) !== null && _a2 !== void 0 ? _a2 : "";
        nextActiveInput++;
      }
    }
    focusInput(nextActiveInput);
    handleOTPChange(otp);
  };
  return import_react2.default.createElement("div", { style: Object.assign({ display: "flex", alignItems: "center" }, isStyleObject(containerStyle) && containerStyle), className: typeof containerStyle === "string" ? containerStyle : void 0, onPaste }, Array.from({ length: numInputs }, function(_, index) {
    return index;
  }).map(function(index) {
    var _a2, _b2, _c2;
    return import_react2.default.createElement(
      import_react2.default.Fragment,
      { key: index },
      renderInput({
        value: (_a2 = getOTPValue()[index]) !== null && _a2 !== void 0 ? _a2 : "",
        placeholder: (_c2 = (_b2 = getPlaceholderValue()) === null || _b2 === void 0 ? void 0 : _b2[index]) !== null && _c2 !== void 0 ? _c2 : void 0,
        ref: function(element) {
          return inputRefs.current[index] = element;
        },
        onChange: handleChange,
        onFocus: function(event) {
          return handleFocus(event)(index);
        },
        onBlur: handleBlur,
        onKeyDown: handleKeyDown,
        onPaste: handlePaste,
        autoComplete: "off",
        maxLength: 1,
        "aria-label": "Please enter OTP character ".concat(index + 1),
        style: Object.assign(!skipDefaultStyles ? { width: "1em", textAlign: "center" } : {}, isStyleObject(inputStyle) ? inputStyle : {}),
        className: typeof inputStyle === "string" ? inputStyle : void 0,
        type: inputType,
        inputMode: isInputNum ? "numeric" : "text",
        onInput: handleInputChange
      }, index),
      index < numInputs - 1 && (typeof renderSeparator === "function" ? renderSeparator(index) : renderSeparator)
    );
  }));
};

// app/components/common/LoginForm.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var { Countdown } = statistic_default;
var { useToken } = theme_default;
var { Text } = typography_default;
function LoginForm(props) {
  const otpTime = 180;
  const { t } = useTranslation();
  const location = useLocation();
  const { token } = useToken();
  const { scheme } = (0, import_react3.useContext)(AppContext);
  const [form] = form_default.useForm();
  const { fetcher, loading } = props;
  const [passwordValid, setPasswordValid] = (0, import_react3.useState)(
    validatePassword("", "")
  );
  const [step, setStep] = (0, import_react3.useState)({ type: "credential" });
  const [verifyCredential, setVerifyCredential] = (0, import_react3.useState)();
  const [otp, setOtp] = (0, import_react3.useState)("");
  const [enableResendOtp, setEnableResendOtp] = (0, import_react3.useState)(false);
  const [otpDeadline, setOtpDeadline] = (0, import_react3.useState)(
    (0, import_dayjs.default)().add(otpTime, "seconds")
  );
  const [isFacebookBrowser, setIsFacebookBrowser] = (0, import_react3.useState)(false);
  const [isLineBrowser, setIsLineBrowser] = (0, import_react3.useState)(false);
  const handleResendOtp = (0, import_react3.useCallback)(() => {
    if (enableResendOtp) {
      fetcher.submit(
        {
          credential: form.getFieldValue("credential"),
          action: "resend-otp"
        },
        { method: "post", action: "/resources/login-verify" }
      );
      setEnableResendOtp(false);
      setOtpDeadline((0, import_dayjs.default)().add(otpTime, "seconds"));
    }
  }, [enableResendOtp, form]);
  const handleForgotPassword = () => {
    fetcher.submit(
      { email: verifyCredential },
      { method: "post", action: "/resources/forgot-password" }
    );
  };
  const handleVerifyAccount = (0, import_react3.useCallback)(() => {
    const credential = form.getFieldValue("credential");
    setVerifyCredential(credential);
    if (isEmail(credential) || isPhone(credential)) {
      fetcher.submit(
        {
          credential: form.getFieldValue("credential")
        },
        { method: "post", action: "/resources/login-verify" }
      );
    }
  }, [form]);
  const handleSubmitOtp = (0, import_react3.useCallback)(() => {
    if (otp && otp.length == 6 && step && step.refCode) {
      fetcher.submit(
        {
          action: "verify-otp",
          otpNum: otp,
          refCode: step.refCode,
          credential: verifyCredential
        },
        { method: "post", action: "/resources/login-verify" }
      );
    }
  }, [otp, step]);
  const handleSocialLogin = (channel) => {
    fetcher.submit(
      {
        channel,
        currentPath: location.search && location.search.length > 0 ? `${location.pathname}${location.search}` : location.pathname
      },
      { method: "post", action: "/resources/login" }
    );
  };
  const handleFormSubmit = (values) => {
    fetcher.submit(
      {
        ...values,
        currentPath: location.search && location.search.length > 0 ? `${location.pathname}${location.search}` : location.pathname
      },
      { method: "post", action: "/resources/login" }
    );
  };
  const handleFormChange = (changedValues, allValues) => {
    const validator = validatePassword(
      allValues.password,
      allValues.confirmPassword
    );
    setPasswordValid(validator);
  };
  (0, import_react3.useEffect)(() => {
    const userAgent = navigator.userAgent || "";
    setIsFacebookBrowser(
      userAgent.includes("FBAN") || userAgent.includes("FBAV")
    );
    setIsLineBrowser(userAgent.includes("Line") || userAgent.includes("line"));
  }, []);
  (0, import_react3.useEffect)(() => {
    if (fetcher && fetcher.data) {
      const { credentialExist, refCode, otpVerified, sendForgotPassword } = fetcher.data;
      if (credentialExist) {
        setStep({ type: "password", action: "login" });
      } else if (!credentialExist && otpVerified) {
        setStep({ type: "password", action: "register" });
      } else if (refCode) {
        setStep({ type: "otp", refCode });
        setOtpDeadline((0, import_dayjs.default)().add(otpTime, "seconds"));
        setOtp("");
      } else if (sendForgotPassword) {
        setStep({ type: "forgot-password", action: "forgot-password" });
      }
    }
  }, [fetcher]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(space_default, { direction: "vertical", size: 20, style: { display: "flex" }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: { textAlign: "center", marginBottom: 20 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      image_default,
      {
        preview: false,
        src: `/image/logo-with-text-${scheme}.png`,
        width: 160
      },
      void 0,
      false,
      {
        fileName: "app/components/common/LoginForm.tsx",
        lineNumber: 167,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "app/components/common/LoginForm.tsx",
      lineNumber: 166,
      columnNumber: 7
    }, this),
    !step || step.type && step.type === "credential" && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(space_default, { direction: "vertical", size: 20, style: { display: "flex" }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        card_default,
        {
          style: {
            backgroundColor: "#fff",
            cursor: isFacebookBrowser || isLineBrowser ? "default" : "pointer",
            opacity: isFacebookBrowser || isLineBrowser ? 0.4 : 1,
            border: "1px solid #dfdfdf"
          },
          bodyStyle: { padding: 10 },
          onClick: () => !loading && !isFacebookBrowser && !isLineBrowser ? handleSocialLogin("google") : void 0,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            space_default,
            {
              size: 10,
              style: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              },
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(image_default, { preview: false, src: "/image/google.png", width: 24 }, void 0, false, {
                  fileName: "app/components/common/LoginForm.tsx",
                  lineNumber: 199,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                  Text,
                  {
                    style: { color: "#221f20", fontSize: 16, fontWeight: 600 },
                    children: t("login with Google")
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/components/common/LoginForm.tsx",
                    lineNumber: 200,
                    columnNumber: 17
                  },
                  this
                )
              ]
            },
            void 0,
            true,
            {
              fileName: "app/components/common/LoginForm.tsx",
              lineNumber: 191,
              columnNumber: 15
            },
            this
          )
        },
        void 0,
        false,
        {
          fileName: "app/components/common/LoginForm.tsx",
          lineNumber: 176,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        card_default,
        {
          bordered: false,
          style: { backgroundColor: "#5cc43d", cursor: "pointer" },
          bodyStyle: { padding: 10 },
          onClick: () => !loading ? handleSocialLogin("line") : void 0,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            space_default,
            {
              size: 10,
              style: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              },
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(image_default, { preview: false, src: "/image/line.png", width: 24 }, void 0, false, {
                  fileName: "app/components/common/LoginForm.tsx",
                  lineNumber: 221,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { style: { color: "#fff", fontSize: 16, fontWeight: 600 }, children: t("login with LINE") }, void 0, false, {
                  fileName: "app/components/common/LoginForm.tsx",
                  lineNumber: 222,
                  columnNumber: 17
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "app/components/common/LoginForm.tsx",
              lineNumber: 213,
              columnNumber: 15
            },
            this
          )
        },
        void 0,
        false,
        {
          fileName: "app/components/common/LoginForm.tsx",
          lineNumber: 207,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(divider_default, { plain: true, style: { marginBlock: 0 }, children: t("or") }, void 0, false, {
        fileName: "app/components/common/LoginForm.tsx",
        lineNumber: 227,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/common/LoginForm.tsx",
      lineNumber: 175,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      form_default,
      {
        form,
        preserve: true,
        onFinish: handleFormSubmit,
        onValuesChange: handleFormChange,
        onKeyDown: (e) => {
          if (e.key === "Enter") {
            e.preventDefault();
          }
        },
        layout: "vertical",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            form_default.Item,
            {
              name: "credential",
              style: step.type !== "credential" ? { display: "none" } : {},
              rules: [
                () => ({
                  validator(_, value) {
                    if (!value) {
                      return Promise.resolve();
                    }
                    if (value.length) {
                      if (!isEmail(value)) {
                        return Promise.reject(
                          new Error(`${t("please input correct email")}`)
                        );
                      }
                    }
                    return Promise.resolve();
                  }
                })
              ],
              label: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { style: { fontWeight: 600, fontSize: "inherit" }, children: t("email") }, void 0, false, {
                fileName: "app/components/common/LoginForm.tsx",
                lineNumber: 266,
                columnNumber: 13
              }, this),
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(input_default, { disabled: loading }, void 0, false, {
                fileName: "app/components/common/LoginForm.tsx",
                lineNumber: 271,
                columnNumber: 11
              }, this)
            },
            "credential",
            false,
            {
              fileName: "app/components/common/LoginForm.tsx",
              lineNumber: 244,
              columnNumber: 9
            },
            this
          ),
          step && step.type === "credential" && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              TiltButton,
              {
                color: "primary",
                onClick: handleVerifyAccount,
                style: { marginTop: 20 },
                children: t("continue")
              },
              void 0,
              false,
              {
                fileName: "app/components/common/LoginForm.tsx",
                lineNumber: 275,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              "div",
              {
                style: { textAlign: "center", marginTop: 20, paddingInline: 20 },
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                    Text,
                    {
                      type: "secondary",
                      style: { fontSize: "0.8em", fontWeight: 600 },
                      children: t("By creating an account, I agress to CTRL G")
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/components/common/LoginForm.tsx",
                      lineNumber: 285,
                      columnNumber: 15
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("br", {}, void 0, false, {
                    fileName: "app/components/common/LoginForm.tsx",
                    lineNumber: 291,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                    Text,
                    {
                      type: "secondary",
                      style: { fontSize: "0.8em", fontWeight: 600 },
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                          "a",
                          {
                            href: "/terms-of-service",
                            target: "_blank",
                            style: { color: "#7a6fee" },
                            children: t("Terms of Service")
                          },
                          void 0,
                          false,
                          {
                            fileName: "app/components/common/LoginForm.tsx",
                            lineNumber: 296,
                            columnNumber: 17
                          },
                          this
                        ),
                        ` ${t("and")} `,
                        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/", target: "_blank", style: { color: "#7a6fee" }, children: t("Privacy Policy") }, void 0, false, {
                          fileName: "app/components/common/LoginForm.tsx",
                          lineNumber: 304,
                          columnNumber: 17
                        }, this)
                      ]
                    },
                    void 0,
                    true,
                    {
                      fileName: "app/components/common/LoginForm.tsx",
                      lineNumber: 292,
                      columnNumber: 15
                    },
                    this
                  )
                ]
              },
              void 0,
              true,
              {
                fileName: "app/components/common/LoginForm.tsx",
                lineNumber: 282,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              "div",
              {
                style: { textAlign: "center", marginTop: 10, paddingInline: 20 },
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                  Text,
                  {
                    type: "secondary",
                    style: { fontSize: "0.8em", fontWeight: 600, marginTop: 20 },
                    children: t(
                      "By continuing your information will be used to create account on CTRL G and whallet platform"
                    )
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/components/common/LoginForm.tsx",
                    lineNumber: 312,
                    columnNumber: 15
                  },
                  this
                )
              },
              void 0,
              false,
              {
                fileName: "app/components/common/LoginForm.tsx",
                lineNumber: 309,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/components/common/LoginForm.tsx",
            lineNumber: 274,
            columnNumber: 11
          }, this),
          step && step.type === "otp" && step.refCode && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(typography_default.Title, { level: 5, children: t("please enter otp") }, void 0, false, {
              fileName: "app/components/common/LoginForm.tsx",
              lineNumber: 325,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              OTPInput,
              {
                shouldAutoFocus: true,
                value: otp,
                onChange: setOtp,
                numInputs: 6,
                inputType: "number",
                renderSeparator: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { style: { width: 10 } }, void 0, false, {
                  fileName: "app/components/common/LoginForm.tsx",
                  lineNumber: 334,
                  columnNumber: 32
                }, this),
                renderInput: (props2) => {
                  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                    "input",
                    {
                      ...props2,
                      disabled: loading,
                      style: {
                        width: "16.66%",
                        maxWidth: "50px",
                        height: 60,
                        color: token.colorTextBase,
                        backgroundColor: "transparent",
                        fontSize: 20,
                        textAlign: "center",
                        borderRadius: 12,
                        border: `1px solid ${token.colorBorder}`
                      }
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/components/common/LoginForm.tsx",
                      lineNumber: 337,
                      columnNumber: 19
                    },
                    this
                  );
                }
              },
              void 0,
              false,
              {
                fileName: "app/components/common/LoginForm.tsx",
                lineNumber: 328,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              TiltButton,
              {
                color: "primary",
                onClick: handleSubmitOtp,
                style: { marginBottom: 20, marginTop: 30 },
                children: t("continue")
              },
              void 0,
              false,
              {
                fileName: "app/components/common/LoginForm.tsx",
                lineNumber: 355,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(row_default, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(col_default, { flex: "auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { children: `${t("OTP ref")} : ${step.refCode}` }, void 0, false, {
                fileName: "app/components/common/LoginForm.tsx",
                lineNumber: 364,
                columnNumber: 17
              }, this) }, void 0, false, {
                fileName: "app/components/common/LoginForm.tsx",
                lineNumber: 363,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(col_default, { flex: "none", children: enableResendOtp ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                Text,
                {
                  onClick: handleResendOtp,
                  style: { cursor: "pointer", color: "#7a6fee" },
                  children: t("Resend")
                },
                void 0,
                false,
                {
                  fileName: "app/components/common/LoginForm.tsx",
                  lineNumber: 368,
                  columnNumber: 19
                },
                this
              ) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(space_default, { size: 5, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                  Countdown,
                  {
                    value: otpDeadline,
                    onFinish: () => setEnableResendOtp(true),
                    format: "ss",
                    valueStyle: {
                      fontSize: "14px",
                      color: token.colorTextBase
                    }
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/components/common/LoginForm.tsx",
                    lineNumber: 376,
                    columnNumber: 21
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { type: "secondary", children: "s" }, void 0, false, {
                  fileName: "app/components/common/LoginForm.tsx",
                  lineNumber: 385,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "app/components/common/LoginForm.tsx",
                lineNumber: 375,
                columnNumber: 19
              }, this) }, void 0, false, {
                fileName: "app/components/common/LoginForm.tsx",
                lineNumber: 366,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/common/LoginForm.tsx",
              lineNumber: 362,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/common/LoginForm.tsx",
            lineNumber: 324,
            columnNumber: 11
          }, this),
          step && step.type === "password" && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
            step.action === "login" && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              space_default,
              {
                size: 5,
                style: { cursor: "pointer", marginBottom: 20 },
                onClick: (e) => setStep({ type: "credential" }),
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ArrowLeftOutlined_default, {}, void 0, false, {
                    fileName: "app/components/common/LoginForm.tsx",
                    lineNumber: 401,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { children: t("back") }, void 0, false, {
                    fileName: "app/components/common/LoginForm.tsx",
                    lineNumber: 402,
                    columnNumber: 17
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "app/components/common/LoginForm.tsx",
                lineNumber: 396,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              form_default.Item,
              {
                name: "password",
                label: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { style: { fontWeight: 600, fontSize: "inherit" }, children: t("password") }, void 0, false, {
                  fileName: "app/components/common/LoginForm.tsx",
                  lineNumber: 408,
                  columnNumber: 17
                }, this),
                rules: [
                  { required: true, message: `${t("please input password")}` }
                ],
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                  input_default,
                  {
                    type: "password",
                    placeholder: "********",
                    disabled: loading
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/components/common/LoginForm.tsx",
                    lineNumber: 416,
                    columnNumber: 15
                  },
                  this
                )
              },
              void 0,
              false,
              {
                fileName: "app/components/common/LoginForm.tsx",
                lineNumber: 405,
                columnNumber: 13
              },
              this
            ),
            step.action === "register" && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                form_default.Item,
                {
                  name: "confirmPassword",
                  label: t("confirm password"),
                  rules: [
                    {
                      required: true,
                      message: `${t("please confirm your password")}`
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("password") === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error(`${t("password doesn't match")}`)
                        );
                      }
                    })
                  ],
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                    input_default,
                    {
                      type: "password",
                      placeholder: "********",
                      disabled: loading
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/components/common/LoginForm.tsx",
                      lineNumber: 444,
                      columnNumber: 19
                    },
                    this
                  )
                },
                void 0,
                false,
                {
                  fileName: "app/components/common/LoginForm.tsx",
                  lineNumber: 424,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PassswordMustContain, { validator: passwordValid }, void 0, false, {
                fileName: "app/components/common/LoginForm.tsx",
                lineNumber: 450,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/common/LoginForm.tsx",
              lineNumber: 423,
              columnNumber: 15
            }, this),
            step.action === "login" && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { style: { display: "flex", justifyContent: "center" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(button_default, { type: "text", onClick: handleForgotPassword, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { style: { color: "blue" }, children: t("forgot password?") }, void 0, false, {
              fileName: "app/components/common/LoginForm.tsx",
              lineNumber: 456,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "app/components/common/LoginForm.tsx",
              lineNumber: 455,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/components/common/LoginForm.tsx",
              lineNumber: 454,
              columnNumber: 15
            }, this),
            loading ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TiltButton, { color: "secondary", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(LoadingOutlined_default, { style: { fontSize: 24 }, spin: true }, void 0, false, {
              fileName: "app/components/common/LoginForm.tsx",
              lineNumber: 462,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/components/common/LoginForm.tsx",
              lineNumber: 461,
              columnNumber: 15
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              TiltButton,
              {
                color: "primary",
                onClick: () => form.submit(),
                style: { marginTop: 15 },
                children: step.action === "register" ? t("register") : t("login")
              },
              void 0,
              false,
              {
                fileName: "app/components/common/LoginForm.tsx",
                lineNumber: 465,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/components/common/LoginForm.tsx",
            lineNumber: 394,
            columnNumber: 11
          }, this),
          step && step.type === "forgot-password" && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
            step.action === "forgot-password" && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
              space_default,
              {
                size: 5,
                style: { cursor: "pointer", marginBottom: 20 },
                onClick: (e) => setStep({ type: "credential" }),
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ArrowLeftOutlined_default, {}, void 0, false, {
                    fileName: "app/components/common/LoginForm.tsx",
                    lineNumber: 484,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { children: t("back") }, void 0, false, {
                    fileName: "app/components/common/LoginForm.tsx",
                    lineNumber: 485,
                    columnNumber: 17
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "app/components/common/LoginForm.tsx",
                lineNumber: 479,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(typography_default.Title, { level: 4, style: { textAlign: "center" }, children: t(
              "reset password email has been sent, please return to ctrlg after reset success"
            ) }, void 0, false, {
              fileName: "app/components/common/LoginForm.tsx",
              lineNumber: 488,
              columnNumber: 13
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/common/LoginForm.tsx",
            lineNumber: 477,
            columnNumber: 11
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "app/components/common/LoginForm.tsx",
        lineNumber: 232,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(space_default, { size: 10, style: { display: "flex", justifyContent: "center" }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { children: t("powered by") }, void 0, false, {
        fileName: "app/components/common/LoginForm.tsx",
        lineNumber: 497,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(image_default, { preview: false, src: "/image/whallet.png", width: 100 }, void 0, false, {
        fileName: "app/components/common/LoginForm.tsx",
        lineNumber: 498,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/common/LoginForm.tsx",
      lineNumber: 496,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/common/LoginForm.tsx",
    lineNumber: 165,
    columnNumber: 5
  }, this);
}

// app/components/common/Menus.tsx
var import_react5 = __toESM(require_react());
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
var { Text: Text2 } = typography_default;
var Menus = (mode) => {
  const { changeLanguage, changeScheme, locale, scheme } = (0, import_react5.useContext)(AppContext);
  const { logout, user } = (0, import_react5.useContext)(AuthContext);
  const { t } = useTranslation();
  const handleChangeLanguage = (0, import_react5.useCallback)(
    (e) => {
      e.stopPropagation();
      changeLanguage(locale === "th" ? "en" : "th");
    },
    [locale]
  );
  const handleChangeScheme = (checked, e) => {
    e.stopPropagation();
    changeScheme(checked ? "dark" : "light");
  };
  const centerMenus = [
    {
      key: "/",
      link: "/",
      // , strokeWidth: 0.4
      label: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Home, { style: { fontSize: 20 } }, void 0, false, {
        fileName: "app/components/common/Menus.tsx",
        lineNumber: 47,
        columnNumber: 14
      }, this),
      tooltip: t("home")
    },
    {
      key: "/webboards",
      link: "/webboards",
      // , strokeWidth: 0.4
      label: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(MessagesSquare, { style: { fontSize: 20 } }, void 0, false, {
        fileName: "app/components/common/Menus.tsx",
        lineNumber: 54,
        columnNumber: 14
      }, this),
      tooltip: t("webboard")
    },
    {
      key: "/parties",
      link: "/parties",
      label: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Users, { style: { fontSize: 20 } }, void 0, false, {
        fileName: "app/components/common/Menus.tsx",
        lineNumber: 60,
        columnNumber: 14
      }, this),
      tooltip: t("party matching")
    },
    {
      key: "/tournaments",
      link: "/tournaments",
      label: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Trophy, { style: { fontSize: 20 } }, void 0, false, {
        fileName: "app/components/common/Menus.tsx",
        lineNumber: 66,
        columnNumber: 14
      }, this),
      tooltip: t("tournaments")
    },
    {
      key: "/campaign",
      link: "/campaign",
      label: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(BadgeHelp, { style: { fontSize: 20 } }, void 0, false, {
        fileName: "app/components/common/Menus.tsx",
        lineNumber: 72,
        columnNumber: 14
      }, this),
      tooltip: t("campaign")
    }
  ];
  const mobileMenus = [
    {
      key: "/",
      link: "/",
      label: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "/", style: { color: "inherit" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(space_default, { direction: "horizontal", size: 10, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Home, {}, void 0, false, {
          fileName: "app/components/common/Menus.tsx",
          lineNumber: 84,
          columnNumber: 13
        }, this),
        t("home")
      ] }, void 0, true, {
        fileName: "app/components/common/Menus.tsx",
        lineNumber: 83,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/common/Menus.tsx",
        lineNumber: 82,
        columnNumber: 9
      }, this)
    },
    {
      key: "/webboards",
      link: "/webboards",
      label: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "/webboards", style: { color: "inherit" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(space_default, { direction: "horizontal", size: 10, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(MessagesSquare, {}, void 0, false, {
          fileName: "app/components/common/Menus.tsx",
          lineNumber: 96,
          columnNumber: 13
        }, this),
        t("webboard")
      ] }, void 0, true, {
        fileName: "app/components/common/Menus.tsx",
        lineNumber: 95,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/common/Menus.tsx",
        lineNumber: 94,
        columnNumber: 9
      }, this)
    },
    {
      key: "/parties",
      link: "/parties",
      label: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "/parties", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(space_default, { direction: "horizontal", size: 10, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Users, {}, void 0, false, {
          fileName: "app/components/common/Menus.tsx",
          lineNumber: 108,
          columnNumber: 13
        }, this),
        t("parties")
      ] }, void 0, true, {
        fileName: "app/components/common/Menus.tsx",
        lineNumber: 107,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/common/Menus.tsx",
        lineNumber: 106,
        columnNumber: 9
      }, this)
    },
    {
      key: "/tournaments",
      link: "/tournaments",
      label: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "/tournaments", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(space_default, { direction: "horizontal", size: 10, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Trophy, {}, void 0, false, {
          fileName: "app/components/common/Menus.tsx",
          lineNumber: 120,
          columnNumber: 13
        }, this),
        t("tournament")
      ] }, void 0, true, {
        fileName: "app/components/common/Menus.tsx",
        lineNumber: 119,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/common/Menus.tsx",
        lineNumber: 118,
        columnNumber: 9
      }, this)
    },
    {
      key: "/campaign",
      link: "/campaign",
      label: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "/campaign", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(space_default, { direction: "horizontal", size: 10, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(BadgeHelp, {}, void 0, false, {
          fileName: "app/components/common/Menus.tsx",
          lineNumber: 132,
          columnNumber: 13
        }, this),
        t("campaign")
      ] }, void 0, true, {
        fileName: "app/components/common/Menus.tsx",
        lineNumber: 131,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/common/Menus.tsx",
        lineNumber: 130,
        columnNumber: 9
      }, this)
    },
    {
      key: "2",
      type: "divider"
    }
  ];
  let dropdownMenus = [];
  if (user) {
    dropdownMenus.push({
      key: `/users/${user == null ? void 0 : user.uuid}`,
      label: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: `/users/${(user == null ? void 0 : user.userName) ? user.userName : user.uuid}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(space_default, { direction: "horizontal", size: 10, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(User, {}, void 0, false, {
          fileName: "app/components/common/Menus.tsx",
          lineNumber: 151,
          columnNumber: 13
        }, this),
        t("profile")
      ] }, void 0, true, {
        fileName: "app/components/common/Menus.tsx",
        lineNumber: 150,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/common/Menus.tsx",
        lineNumber: 149,
        columnNumber: 9
      }, this)
    });
    dropdownMenus.push({
      key: `/settings`,
      label: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: `/settings`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(space_default, { direction: "horizontal", size: 10, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Settings, {}, void 0, false, {
          fileName: "app/components/common/Menus.tsx",
          lineNumber: 162,
          columnNumber: 13
        }, this),
        t("settings")
      ] }, void 0, true, {
        fileName: "app/components/common/Menus.tsx",
        lineNumber: 161,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/common/Menus.tsx",
        lineNumber: 160,
        columnNumber: 9
      }, this)
    });
  }
  dropdownMenus = dropdownMenus.concat([
    // {
    //   key: "/faqs",
    //   label: (
    //     <Link to="/">
    //       <Space direction="horizontal" size={10}>
    //         <QuestionCircleOutlined />
    //         {t("FAQs")}
    //       </Space>
    //     </Link>
    //   ),
    // },
    {
      key: "locale",
      label: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(row_default, { onClick: handleChangeLanguage, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(col_default, { flex: "auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(space_default, { direction: "horizontal", size: 10, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Globe, { size: 19 }, void 0, false, {
            fileName: "app/components/common/Menus.tsx",
            lineNumber: 188,
            columnNumber: 15
          }, this),
          t("language")
        ] }, void 0, true, {
          fileName: "app/components/common/Menus.tsx",
          lineNumber: 187,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/components/common/Menus.tsx",
          lineNumber: 186,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(col_default, { flex: "none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(space_default, { direction: "horizontal", size: 5, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { style: { textTransform: "uppercase" }, children: locale }, void 0, false, {
            fileName: "app/components/common/Menus.tsx",
            lineNumber: 194,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(RightOutlined_default, {}, void 0, false, {
            fileName: "app/components/common/Menus.tsx",
            lineNumber: 195,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/common/Menus.tsx",
          lineNumber: 193,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/components/common/Menus.tsx",
          lineNumber: 192,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/common/Menus.tsx",
        lineNumber: 185,
        columnNumber: 9
      }, this)
    },
    {
      key: "scheme",
      label: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(row_default, { onClick: (e) => e.stopPropagation(), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(col_default, { flex: "auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(space_default, { direction: "horizontal", size: 10, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Moon, {}, void 0, false, {
            fileName: "app/components/common/Menus.tsx",
            lineNumber: 207,
            columnNumber: 15
          }, this),
          t("darkmode")
        ] }, void 0, true, {
          fileName: "app/components/common/Menus.tsx",
          lineNumber: 206,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/components/common/Menus.tsx",
          lineNumber: 205,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(col_default, { flex: "none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          switch_default,
          {
            size: "small",
            onChange: handleChangeScheme,
            checked: scheme === "dark"
          },
          void 0,
          false,
          {
            fileName: "app/components/common/Menus.tsx",
            lineNumber: 212,
            columnNumber: 13
          },
          this
        ) }, void 0, false, {
          fileName: "app/components/common/Menus.tsx",
          lineNumber: 211,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/common/Menus.tsx",
        lineNumber: 204,
        columnNumber: 9
      }, this)
    }
  ]);
  if (user) {
    dropdownMenus.push({
      key: "logout",
      label: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        space_default,
        {
          direction: "horizontal",
          style: { cursor: "pointer" },
          size: 10,
          onClick: logout,
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Text2, { type: "danger", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(LogOut, {}, void 0, false, {
              fileName: "app/components/common/Menus.tsx",
              lineNumber: 234,
              columnNumber: 13
            }, this) }, void 0, false, {
              fileName: "app/components/common/Menus.tsx",
              lineNumber: 233,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Text2, { type: "danger", children: t("logout") }, void 0, false, {
              fileName: "app/components/common/Menus.tsx",
              lineNumber: 236,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "app/components/common/Menus.tsx",
          lineNumber: 227,
          columnNumber: 9
        },
        this
      )
    });
  }
  return { centerMenus, dropdownMenus, mobileMenus };
};

// app/components/common/PasswordMustContain.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
var { Text: Text3 } = typography_default;
function PassswordMustContain(props) {
  const { validator } = props;
  const { t } = useTranslation();
  const {
    hasUpperCase,
    hasLowerCase,
    hasNumber,
    hasSpecialCharacter,
    hasLeast8,
    passwordMatch
  } = validator;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(card_default, { style: { marginTop: "20px" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(space_default, { direction: "vertical", style: { fontSize: "0.8em" }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Text3, { type: hasUpperCase ? "success" : "secondary", children: [
      hasUpperCase ? "\u2713" : "\u25CB",
      "\xA0\xA0",
      t("Uppercase letter (A-Z)")
    ] }, void 0, true, {
      fileName: "app/components/common/PasswordMustContain.tsx",
      lineNumber: 24,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Text3, { type: hasLowerCase ? "success" : "secondary", children: [
      hasLowerCase ? "\u2713" : "\u25CB",
      "\xA0\xA0",
      t("Lowercase letter (a-z)")
    ] }, void 0, true, {
      fileName: "app/components/common/PasswordMustContain.tsx",
      lineNumber: 27,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Text3, { type: hasNumber ? "success" : "secondary", children: [
      hasNumber ? "\u2713" : "\u25CB",
      "\xA0\xA0",
      t("Number (0-9)")
    ] }, void 0, true, {
      fileName: "app/components/common/PasswordMustContain.tsx",
      lineNumber: 30,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Text3, { type: hasSpecialCharacter ? "success" : "secondary", children: [
      hasSpecialCharacter ? "\u2713" : "\u25CB",
      "\xA0\xA0",
      t("Special character"),
      "\xA0\xA0Ex. ~`!@#$%_^&*"
    ] }, void 0, true, {
      fileName: "app/components/common/PasswordMustContain.tsx",
      lineNumber: 33,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Text3, { type: hasLeast8 ? "success" : "secondary", children: [
      hasLeast8 ? "\u2713" : "\u25CB",
      "\xA0\xA0",
      t("Has at least 8 characters")
    ] }, void 0, true, {
      fileName: "app/components/common/PasswordMustContain.tsx",
      lineNumber: 37,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Text3, { type: passwordMatch ? "success" : "secondary", children: [
      passwordMatch ? "\u2713" : "\u25CB",
      "\xA0\xA0",
      t("Passwords match")
    ] }, void 0, true, {
      fileName: "app/components/common/PasswordMustContain.tsx",
      lineNumber: 40,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/common/PasswordMustContain.tsx",
    lineNumber: 23,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/common/PasswordMustContain.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

// app/components/layouts/LayoutFooter.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
var { Text: Text4 } = typography_default;
var { useToken: useToken2 } = theme_default;
var { Footer } = layout_default;
var LayoutFooter = () => {
  const { scheme } = (0, import_react7.useContext)(AppContext);
  const { token } = useToken2();
  const { t } = useTranslation();
  const footerTopPart = (direction, space) => {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(space_default, { size: space, direction, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        image_default,
        {
          preview: false,
          src: `/image/logo-with-text-${scheme}.png`,
          width: 150,
          wrapperStyle: direction === "vertical" ? { marginBottom: 30 } : { marginRight: 50 }
        },
        void 0,
        false,
        {
          fileName: "app/components/layouts/LayoutFooter.tsx",
          lineNumber: 22,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Link, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Text4, { style: { fontSize: "1.2em" }, children: t("home") }, void 0, false, {
        fileName: "app/components/layouts/LayoutFooter.tsx",
        lineNumber: 33,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/layouts/LayoutFooter.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Link, { to: "/about", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Text4, { style: { fontSize: "1.2em" }, children: t("about") }, void 0, false, {
        fileName: "app/components/layouts/LayoutFooter.tsx",
        lineNumber: 36,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/layouts/LayoutFooter.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Link, { to: "/contact", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Text4, { style: { fontSize: "1.2em" }, children: t("contact") }, void 0, false, {
        fileName: "app/components/layouts/LayoutFooter.tsx",
        lineNumber: 39,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/layouts/LayoutFooter.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Link, { to: "/feedback", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Text4, { style: { fontSize: "1.2em" }, children: t("feedback") }, void 0, false, {
        fileName: "app/components/layouts/LayoutFooter.tsx",
        lineNumber: 42,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/layouts/LayoutFooter.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/layouts/LayoutFooter.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
    Footer,
    {
      style: {
        padding: "40px 0 0",
        backgroundColor: token.colorBgContainer,
        zIndex: 11
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          space_default,
          {
            direction: "vertical",
            size: 30,
            style: {
              display: "flex",
              paddingInline: "3.5%",
              maxWidth: 1440,
              marginInline: "auto",
              paddingBottom: 20
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Media, { greaterThan: "sm", children: footerTopPart("horizontal", 40) }, void 0, false, {
                fileName: "app/components/layouts/LayoutFooter.tsx",
                lineNumber: 67,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Media, { at: "sm", children: footerTopPart("vertical", 20) }, void 0, false, {
                fileName: "app/components/layouts/LayoutFooter.tsx",
                lineNumber: 68,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(row_default, { gutter: [15, 15], children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(col_default, { xs: 24, flex: "auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Text4, { children: "\xA9 CTRL G" }, void 0, false, {
                  fileName: "app/components/layouts/LayoutFooter.tsx",
                  lineNumber: 71,
                  columnNumber: 13
                }, this) }, void 0, false, {
                  fileName: "app/components/layouts/LayoutFooter.tsx",
                  lineNumber: 70,
                  columnNumber: 11
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(col_default, { xs: 24, flex: "none", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Media, { greaterThan: "sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(space_default, { size: 20, children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("a", { href: "/privacy-policies", target: "_blank", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Text4, { children: t("privacy") }, void 0, false, {
                      fileName: "app/components/layouts/LayoutFooter.tsx",
                      lineNumber: 77,
                      columnNumber: 19
                    }, this) }, void 0, false, {
                      fileName: "app/components/layouts/LayoutFooter.tsx",
                      lineNumber: 76,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("a", { href: "/terms-of-service", target: "_blank", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Text4, { children: t("terms") }, void 0, false, {
                      fileName: "app/components/layouts/LayoutFooter.tsx",
                      lineNumber: 80,
                      columnNumber: 19
                    }, this) }, void 0, false, {
                      fileName: "app/components/layouts/LayoutFooter.tsx",
                      lineNumber: 79,
                      columnNumber: 17
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/components/layouts/LayoutFooter.tsx",
                    lineNumber: 75,
                    columnNumber: 15
                  }, this) }, void 0, false, {
                    fileName: "app/components/layouts/LayoutFooter.tsx",
                    lineNumber: 74,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Media, { at: "sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(space_default, { size: 20, children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("a", { href: "/privacy-policies", target: "_blank", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Text4, { style: { fontSize: "0.8em" }, children: t("privacy") }, void 0, false, {
                      fileName: "app/components/layouts/LayoutFooter.tsx",
                      lineNumber: 87,
                      columnNumber: 19
                    }, this) }, void 0, false, {
                      fileName: "app/components/layouts/LayoutFooter.tsx",
                      lineNumber: 86,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("a", { href: "/terms-of-service", target: "_blank", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Text4, { style: { fontSize: "0.8em" }, children: t("terms") }, void 0, false, {
                      fileName: "app/components/layouts/LayoutFooter.tsx",
                      lineNumber: 90,
                      columnNumber: 19
                    }, this) }, void 0, false, {
                      fileName: "app/components/layouts/LayoutFooter.tsx",
                      lineNumber: 89,
                      columnNumber: 17
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/components/layouts/LayoutFooter.tsx",
                    lineNumber: 85,
                    columnNumber: 15
                  }, this) }, void 0, false, {
                    fileName: "app/components/layouts/LayoutFooter.tsx",
                    lineNumber: 84,
                    columnNumber: 13
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/components/layouts/LayoutFooter.tsx",
                  lineNumber: 73,
                  columnNumber: 11
                }, this)
              ] }, void 0, true, {
                fileName: "app/components/layouts/LayoutFooter.tsx",
                lineNumber: 69,
                columnNumber: 9
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "app/components/layouts/LayoutFooter.tsx",
            lineNumber: 56,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(row_default, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(col_default, { span: 24, md: 16 }, void 0, false, {
            fileName: "app/components/layouts/LayoutFooter.tsx",
            lineNumber: 98,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(col_default, { span: 24, md: 8, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
            "div",
            {
              style: {
                height: 20,
                width: "100%",
                backgroundImage: "url('/image/stripe.png')"
              }
            },
            void 0,
            false,
            {
              fileName: "app/components/layouts/LayoutFooter.tsx",
              lineNumber: 100,
              columnNumber: 11
            },
            this
          ) }, void 0, false, {
            fileName: "app/components/layouts/LayoutFooter.tsx",
            lineNumber: 99,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/layouts/LayoutFooter.tsx",
          lineNumber: 97,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/layouts/LayoutFooter.tsx",
      lineNumber: 49,
      columnNumber: 5
    },
    this
  );
};

// app/components/layouts/Navbar.tsx
var import_react12 = __toESM(require_react());

// node_modules/react-infinite-scroll-component/dist/index.es.js
var import_react9 = __toESM(require_react());
var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
    d2.__proto__ = b2;
  } || function(d2, b2) {
    for (var p in b2)
      if (b2.hasOwnProperty(p))
        d2[p] = b2[p];
  };
  return extendStatics(d, b);
};
function __extends(d, b) {
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
  __assign = Object.assign || function __assign2(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function throttle(delay, noTrailing, callback, debounceMode) {
  var timeoutID;
  var cancelled = false;
  var lastExec = 0;
  function clearExistingTimeout() {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
  }
  function cancel() {
    clearExistingTimeout();
    cancelled = true;
  }
  if (typeof noTrailing !== "boolean") {
    debounceMode = callback;
    callback = noTrailing;
    noTrailing = void 0;
  }
  function wrapper() {
    var self = this;
    var elapsed = Date.now() - lastExec;
    var args = arguments;
    if (cancelled) {
      return;
    }
    function exec() {
      lastExec = Date.now();
      callback.apply(self, args);
    }
    function clear() {
      timeoutID = void 0;
    }
    if (debounceMode && !timeoutID) {
      exec();
    }
    clearExistingTimeout();
    if (debounceMode === void 0 && elapsed > delay) {
      exec();
    } else if (noTrailing !== true) {
      timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === void 0 ? delay - elapsed : delay);
    }
  }
  wrapper.cancel = cancel;
  return wrapper;
}
var ThresholdUnits = {
  Pixel: "Pixel",
  Percent: "Percent"
};
var defaultThreshold = {
  unit: ThresholdUnits.Percent,
  value: 0.8
};
function parseThreshold(scrollThreshold) {
  if (typeof scrollThreshold === "number") {
    return {
      unit: ThresholdUnits.Percent,
      value: scrollThreshold * 100
    };
  }
  if (typeof scrollThreshold === "string") {
    if (scrollThreshold.match(/^(\d*(\.\d+)?)px$/)) {
      return {
        unit: ThresholdUnits.Pixel,
        value: parseFloat(scrollThreshold)
      };
    }
    if (scrollThreshold.match(/^(\d*(\.\d+)?)%$/)) {
      return {
        unit: ThresholdUnits.Percent,
        value: parseFloat(scrollThreshold)
      };
    }
    console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...');
    return defaultThreshold;
  }
  console.warn("scrollThreshold should be string or number");
  return defaultThreshold;
}
var InfiniteScroll = (
  /** @class */
  function(_super) {
    __extends(InfiniteScroll2, _super);
    function InfiniteScroll2(props) {
      var _this = _super.call(this, props) || this;
      _this.lastScrollTop = 0;
      _this.actionTriggered = false;
      _this.startY = 0;
      _this.currentY = 0;
      _this.dragging = false;
      _this.maxPullDownDistance = 0;
      _this.getScrollableTarget = function() {
        if (_this.props.scrollableTarget instanceof HTMLElement)
          return _this.props.scrollableTarget;
        if (typeof _this.props.scrollableTarget === "string") {
          return document.getElementById(_this.props.scrollableTarget);
        }
        if (_this.props.scrollableTarget === null) {
          console.warn("You are trying to pass scrollableTarget but it is null. This might\n        happen because the element may not have been added to DOM yet.\n        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.\n      ");
        }
        return null;
      };
      _this.onStart = function(evt) {
        if (_this.lastScrollTop)
          return;
        _this.dragging = true;
        if (evt instanceof MouseEvent) {
          _this.startY = evt.pageY;
        } else if (evt instanceof TouchEvent) {
          _this.startY = evt.touches[0].pageY;
        }
        _this.currentY = _this.startY;
        if (_this._infScroll) {
          _this._infScroll.style.willChange = "transform";
          _this._infScroll.style.transition = "transform 0.2s cubic-bezier(0,0,0.31,1)";
        }
      };
      _this.onMove = function(evt) {
        if (!_this.dragging)
          return;
        if (evt instanceof MouseEvent) {
          _this.currentY = evt.pageY;
        } else if (evt instanceof TouchEvent) {
          _this.currentY = evt.touches[0].pageY;
        }
        if (_this.currentY < _this.startY)
          return;
        if (_this.currentY - _this.startY >= Number(_this.props.pullDownToRefreshThreshold)) {
          _this.setState({
            pullToRefreshThresholdBreached: true
          });
        }
        if (_this.currentY - _this.startY > _this.maxPullDownDistance * 1.5)
          return;
        if (_this._infScroll) {
          _this._infScroll.style.overflow = "visible";
          _this._infScroll.style.transform = "translate3d(0px, " + (_this.currentY - _this.startY) + "px, 0px)";
        }
      };
      _this.onEnd = function() {
        _this.startY = 0;
        _this.currentY = 0;
        _this.dragging = false;
        if (_this.state.pullToRefreshThresholdBreached) {
          _this.props.refreshFunction && _this.props.refreshFunction();
          _this.setState({
            pullToRefreshThresholdBreached: false
          });
        }
        requestAnimationFrame(function() {
          if (_this._infScroll) {
            _this._infScroll.style.overflow = "auto";
            _this._infScroll.style.transform = "none";
            _this._infScroll.style.willChange = "unset";
          }
        });
      };
      _this.onScrollListener = function(event) {
        if (typeof _this.props.onScroll === "function") {
          setTimeout(function() {
            return _this.props.onScroll && _this.props.onScroll(event);
          }, 0);
        }
        var target = _this.props.height || _this._scrollableNode ? event.target : document.documentElement.scrollTop ? document.documentElement : document.body;
        if (_this.actionTriggered)
          return;
        var atBottom = _this.props.inverse ? _this.isElementAtTop(target, _this.props.scrollThreshold) : _this.isElementAtBottom(target, _this.props.scrollThreshold);
        if (atBottom && _this.props.hasMore) {
          _this.actionTriggered = true;
          _this.setState({ showLoader: true });
          _this.props.next && _this.props.next();
        }
        _this.lastScrollTop = target.scrollTop;
      };
      _this.state = {
        showLoader: false,
        pullToRefreshThresholdBreached: false,
        prevDataLength: props.dataLength
      };
      _this.throttledOnScrollListener = throttle(150, _this.onScrollListener).bind(_this);
      _this.onStart = _this.onStart.bind(_this);
      _this.onMove = _this.onMove.bind(_this);
      _this.onEnd = _this.onEnd.bind(_this);
      return _this;
    }
    InfiniteScroll2.prototype.componentDidMount = function() {
      if (typeof this.props.dataLength === "undefined") {
        throw new Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');
      }
      this._scrollableNode = this.getScrollableTarget();
      this.el = this.props.height ? this._infScroll : this._scrollableNode || window;
      if (this.el) {
        this.el.addEventListener("scroll", this.throttledOnScrollListener);
      }
      if (typeof this.props.initialScrollY === "number" && this.el && this.el instanceof HTMLElement && this.el.scrollHeight > this.props.initialScrollY) {
        this.el.scrollTo(0, this.props.initialScrollY);
      }
      if (this.props.pullDownToRefresh && this.el) {
        this.el.addEventListener("touchstart", this.onStart);
        this.el.addEventListener("touchmove", this.onMove);
        this.el.addEventListener("touchend", this.onEnd);
        this.el.addEventListener("mousedown", this.onStart);
        this.el.addEventListener("mousemove", this.onMove);
        this.el.addEventListener("mouseup", this.onEnd);
        this.maxPullDownDistance = this._pullDown && this._pullDown.firstChild && this._pullDown.firstChild.getBoundingClientRect().height || 0;
        this.forceUpdate();
        if (typeof this.props.refreshFunction !== "function") {
          throw new Error(`Mandatory prop "refreshFunction" missing.
          Pull Down To Refresh functionality will not work
          as expected. Check README.md for usage'`);
        }
      }
    };
    InfiniteScroll2.prototype.componentWillUnmount = function() {
      if (this.el) {
        this.el.removeEventListener("scroll", this.throttledOnScrollListener);
        if (this.props.pullDownToRefresh) {
          this.el.removeEventListener("touchstart", this.onStart);
          this.el.removeEventListener("touchmove", this.onMove);
          this.el.removeEventListener("touchend", this.onEnd);
          this.el.removeEventListener("mousedown", this.onStart);
          this.el.removeEventListener("mousemove", this.onMove);
          this.el.removeEventListener("mouseup", this.onEnd);
        }
      }
    };
    InfiniteScroll2.prototype.componentDidUpdate = function(prevProps) {
      if (this.props.dataLength === prevProps.dataLength)
        return;
      this.actionTriggered = false;
      this.setState({
        showLoader: false
      });
    };
    InfiniteScroll2.getDerivedStateFromProps = function(nextProps, prevState) {
      var dataLengthChanged = nextProps.dataLength !== prevState.prevDataLength;
      if (dataLengthChanged) {
        return __assign(__assign({}, prevState), { prevDataLength: nextProps.dataLength });
      }
      return null;
    };
    InfiniteScroll2.prototype.isElementAtTop = function(target, scrollThreshold) {
      if (scrollThreshold === void 0) {
        scrollThreshold = 0.8;
      }
      var clientHeight = target === document.body || target === document.documentElement ? window.screen.availHeight : target.clientHeight;
      var threshold = parseThreshold(scrollThreshold);
      if (threshold.unit === ThresholdUnits.Pixel) {
        return target.scrollTop <= threshold.value + clientHeight - target.scrollHeight + 1;
      }
      return target.scrollTop <= threshold.value / 100 + clientHeight - target.scrollHeight + 1;
    };
    InfiniteScroll2.prototype.isElementAtBottom = function(target, scrollThreshold) {
      if (scrollThreshold === void 0) {
        scrollThreshold = 0.8;
      }
      var clientHeight = target === document.body || target === document.documentElement ? window.screen.availHeight : target.clientHeight;
      var threshold = parseThreshold(scrollThreshold);
      if (threshold.unit === ThresholdUnits.Pixel) {
        return target.scrollTop + clientHeight >= target.scrollHeight - threshold.value;
      }
      return target.scrollTop + clientHeight >= threshold.value / 100 * target.scrollHeight;
    };
    InfiniteScroll2.prototype.render = function() {
      var _this = this;
      var style = __assign({ height: this.props.height || "auto", overflow: "auto", WebkitOverflowScrolling: "touch" }, this.props.style);
      var hasChildren = this.props.hasChildren || !!(this.props.children && this.props.children instanceof Array && this.props.children.length);
      var outerDivStyle = this.props.pullDownToRefresh && this.props.height ? { overflow: "auto" } : {};
      return import_react9.default.createElement(
        "div",
        { style: outerDivStyle, className: "infinite-scroll-component__outerdiv" },
        import_react9.default.createElement(
          "div",
          { className: "infinite-scroll-component " + (this.props.className || ""), ref: function(infScroll) {
            return _this._infScroll = infScroll;
          }, style },
          this.props.pullDownToRefresh && import_react9.default.createElement(
            "div",
            { style: { position: "relative" }, ref: function(pullDown) {
              return _this._pullDown = pullDown;
            } },
            import_react9.default.createElement("div", { style: {
              position: "absolute",
              left: 0,
              right: 0,
              top: -1 * this.maxPullDownDistance
            } }, this.state.pullToRefreshThresholdBreached ? this.props.releaseToRefreshContent : this.props.pullDownToRefreshContent)
          ),
          this.props.children,
          !this.state.showLoader && !hasChildren && this.props.hasMore && this.props.loader,
          this.state.showLoader && this.props.hasMore && this.props.loader,
          !this.props.hasMore && this.props.endMessage
        )
      );
    };
    return InfiniteScroll2;
  }(import_react9.Component)
);
var index_es_default = InfiniteScroll;

// app/components/common/NotificationIcon.tsx
var import_react10 = __toESM(require_react());
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime());
var { useToken: useToken3 } = theme_default;
function NotifcationIcon(props) {
  const { count, user } = props;
  const location = useLocation();
  const { scheme } = (0, import_react10.useContext)(AppContext);
  const { token } = useToken3();
  const [notiCount, setNotiCount] = (0, import_react10.useState)(count);
  const regex = new RegExp("^/users/[^/]+/messages$");
  (0, import_react10.useEffect)(() => {
    setNotiCount(regex.test(location.pathname) ? 0 : count);
  }, [count, location]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
    "a",
    {
      style: { display: "flex", marginRight: 10 },
      href: `/users/${(user == null ? void 0 : user.userName) ? user.userName : user.uuid}/messages`,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(badge_default, { count: notiCount, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        avatar_default,
        {
          size: 40,
          style: {
            backgroundColor: scheme === "dark" ? "#221f20" : token.colorBgLayout,
            color: token.colorTextBase
          },
          icon: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Mail, {}, void 0, false, {
            fileName: "app/components/common/NotificationIcon.tsx",
            lineNumber: 39,
            columnNumber: 17
          }, this)
        },
        void 0,
        false,
        {
          fileName: "app/components/common/NotificationIcon.tsx",
          lineNumber: 32,
          columnNumber: 9
        },
        this
      ) }, void 0, false, {
        fileName: "app/components/common/NotificationIcon.tsx",
        lineNumber: 31,
        columnNumber: 7
      }, this)
    },
    void 0,
    false,
    {
      fileName: "app/components/common/NotificationIcon.tsx",
      lineNumber: 27,
      columnNumber: 5
    },
    this
  );
}

// app/components/layouts/Navbar.tsx
var import_lodash = __toESM(require_lodash());
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime());
var { useToken: useToken4 } = theme_default;
var { Header } = layout_default;
var Navbar = () => {
  const { t } = useTranslation();
  const fetcher = useFetcher();
  const matches = useMatches();
  const { scheme } = (0, import_react12.useContext)(AppContext);
  const { token } = useToken4();
  const navigate = useNavigate();
  const { cdnUrl, notificationInterval } = matches[0].data;
  const { user, openLoginModal } = (0, import_react12.useContext)(AuthContext);
  const [mobileCollapsed, setMobileCollapsed] = (0, import_react12.useState)(false);
  const [searchResults, setSearchResults] = (0, import_react12.useState)();
  const [searchResultsList, setSearchResultsList] = (0, import_react12.useState)([]);
  const [searchParams, setSearchParams] = (0, import_react12.useState)({});
  const [notiCount, setNotiCount] = (0, import_react12.useState)(0);
  const [hasInterval, setHasInterval] = (0, import_react12.useState)(null);
  const [openSearch, setOpenSearch] = (0, import_react12.useState)(false);
  const [mouseOverList, setMouseOverList] = (0, import_react12.useState)(false);
  const [canOpenSearch, setCanOpenSearch] = (0, import_react12.useState)(true);
  const { centerMenus, dropdownMenus, mobileMenus } = Menus();
  const [screenSize, setScreenSize] = (0, import_react12.useState)("");
  (0, import_react12.useEffect)(() => {
    const handleResize = () => {
      if (window.innerWidth > 576) {
        setScreenSize("greaterThanSM");
      } else {
        setScreenSize("atSM");
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const tiltButtonStyle = {
    paddingInline: 15,
    height: 39.6,
    lineHeight: "39.6px",
    paddingBlock: 0,
    marginTop: "2px"
  };
  const searchCardStyle = {
    height: 54,
    width: screenSize === "greaterThanSM" ? "40%" : "70%",
    marginTop: screenSize === "greaterThanSM" ? 10 : 120,
    borderRadius: 5,
    boxShadow: "none",
    overflow: "visible",
    zIndex: 1,
    color: "#white"
  };
  const searchCardBodyStyle = {
    padding: 5,
    backgroundColor: scheme === "dark" ? "#121212" : "#FFFFFF",
    borderRadius: 10,
    // boxShadow:
    //   scheme === "dark"
    //     ? "0px 4px 15px -5px rgba(255,255,255,0.75)"
    //     : "0px 4px 15px -5px rgba(0,0,0,0.75)",
    overflow: "hidden"
  };
  const handleOpenSearch = () => {
    if (canOpenSearch) {
      setOpenSearch(true);
    }
  };
  const handleCloseSearch = () => {
    console.log("close search");
    if (!mouseOverList) {
      setOpenSearch(false);
    }
    setCanOpenSearch(false);
    setTimeout(() => {
      setCanOpenSearch(true);
    }, 500);
  };
  const handleSearch = (0, import_react12.useCallback)((e) => {
    e.preventDefault();
    const searchString = e.target.value;
    let newSearchParams = { ...searchParams };
    if (searchString.length > 0) {
      newSearchParams.userName = searchString;
    } else {
      delete newSearchParams["userName"];
    }
    fetcher.submit(
      // Data to submit
      (0, import_lodash.omitBy)(newSearchParams, (v) => (0, import_lodash.isNil)(v) && (0, import_lodash.isEmpty)(v)),
      // Options object
      {
        method: "get",
        preventScrollReset: true,
        action: "/resources/searchUser"
      }
    );
  }, []);
  const handleLoadMore = () => {
    console.log("loadmore");
  };
  const handleDebounceSearch = (0, import_react12.useMemo)(
    () => (0, import_lodash.debounce)(handleSearch, 500),
    [handleSearch]
  );
  const handleCloseSearchForce = () => {
    setOpenSearch(false);
  };
  const handleOpenCollapsed = () => {
    setMobileCollapsed(true);
  };
  const handleCloseCollapsed = () => {
    setMobileCollapsed(false);
  };
  const getUnreadNoti = () => {
    if (navigator.onLine) {
      fetcher.load(`/resources/get-unread-notification`);
    }
  };
  const loadMoreData = () => {
    console.log("loadmore data");
  };
  (0, import_react12.useEffect)(() => {
    if (user) {
      if (!hasInterval) {
        getUnreadNoti();
        const intervalId = setInterval(() => {
          if (document.visibilityState === "visible") {
            getUnreadNoti();
          }
        }, notificationInterval * 1e3);
        setHasInterval(intervalId);
        const resetInterval = setTimeout(() => {
          clearInterval(intervalId);
          clearTimeout(resetInterval);
        }, 6 * 3600 * 1e3);
      }
    } else if (hasInterval) {
      clearInterval(hasInterval);
      setHasInterval(null);
    }
  }, [user]);
  (0, import_react12.useEffect)(() => {
    var _a, _b, _c, _d;
    if (fetcher.data && fetcher.data.searchUserResult && fetcher.data.searchParams && fetcher.data.loadMore === false) {
      setSearchParams(fetcher.data.searchParams);
      console.log(
        "...fetcher.data.searchUserResult?.items",
        ...(_a = fetcher.data.searchUserResult) == null ? void 0 : _a.items
      );
      setSearchResults(fetcher.data.searchUserResult);
      setSearchResultsList(
        ((_b = fetcher.data.searchUserResult) == null ? void 0 : _b.items) && ((_c = fetcher.data.searchUserResult) == null ? void 0 : _c.items.length) ? [...(_d = fetcher.data.searchUserResult) == null ? void 0 : _d.items] : []
      );
    } else if (fetcher.data && fetcher.data.searchUserResult && fetcher.data.loadMore) {
      setSearchResults(fetcher.data.searchUserResult);
      setSearchResultsList([
        ...searchResultsList,
        ...fetcher.data.searchUserResult.items
      ]);
    }
  }, [fetcher]);
  (0, import_react12.useEffect)(() => {
    if (fetcher && fetcher.data && fetcher.state === "idle" && fetcher.data.unreadCount) {
      setNotiCount(fetcher.data.unreadCount);
    }
  }, [fetcher]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
    Header,
    {
      style: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        paddingInline: 0,
        zIndex: 999
      },
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
        row_default,
        {
          align: "middle",
          style: {
            position: "relative",
            paddingInline: "3.5%",
            maxWidth: 1440,
            marginInline: "auto"
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
              "div",
              {
                style: {
                  display: "flex",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  alignItems: "center",
                  justifyContent: "center"
                },
                children: [
                  openSearch ? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                    card_default,
                    {
                      bordered: false,
                      bodyStyle: searchCardBodyStyle,
                      style: searchCardStyle,
                      onMouseEnter: () => setMouseOverList(true),
                      onMouseLeave: () => setMouseOverList(false),
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                          "div",
                          {
                            className: scheme === "dark" ? "search-input-user-dark" : "search-input-user-light",
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                              input_default,
                              {
                                autoFocus: true,
                                bordered: false,
                                onBlur: handleCloseSearch,
                                prefix: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                                  Search,
                                  {
                                    style: {
                                      fontSize: 20,
                                      paddingRight: 10,
                                      width: "100%",
                                      color: scheme === "dark" ? "#fff" : "#000"
                                    }
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: "app/components/layouts/Navbar.tsx",
                                    lineNumber: 339,
                                    columnNumber: 21
                                  },
                                  this
                                ),
                                defaultValue: searchParams && searchParams.name ? searchParams.name : "",
                                onChange: handleDebounceSearch
                              },
                              void 0,
                              false,
                              {
                                fileName: "app/components/layouts/Navbar.tsx",
                                lineNumber: 334,
                                columnNumber: 17
                              },
                              this
                            )
                          },
                          void 0,
                          false,
                          {
                            fileName: "app/components/layouts/Navbar.tsx",
                            lineNumber: 327,
                            columnNumber: 15
                          },
                          this
                        ),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                          "div",
                          {
                            id: "scrollableDiv",
                            style: { maxHeight: "400px", overflowY: "auto" },
                            children: searchParams.name && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                              index_es_default,
                              {
                                dataLength: searchResultsList.length,
                                next: loadMoreData,
                                hasMore: searchResultsList.length < (searchResults == null ? void 0 : searchResults.total),
                                loader: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                                  skeleton_default,
                                  {
                                    avatar: true,
                                    paragraph: {
                                      rows: 1
                                    },
                                    active: true
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: "app/components/layouts/Navbar.tsx",
                                    lineNumber: 366,
                                    columnNumber: 23
                                  },
                                  this
                                ),
                                scrollableTarget: "scrollableDiv",
                                children: searchResultsList.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                                  list_default,
                                  {
                                    style: { marginTop: 10 },
                                    bordered: false,
                                    dataSource: searchResultsList,
                                    renderItem: (item) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(list_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(space_default, { onMouseDown: (e) => e.stopPropagation(), children: [
                                      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                                        "div",
                                        {
                                          style: {
                                            position: "relative",
                                            // Set position to relative for the parent div
                                            padding: "23.5px",
                                            backgroundImage: `url(${cdnUrl}/${item.assetFrame})`,
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                            width: "fit-content",
                                            // Adjust the width to fit content
                                            height: "fit-content",
                                            // Adjust the height to fit content
                                            display: "inline-block",
                                            // Make the div behave as an inline-block
                                            zIndex: 1
                                          },
                                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                                            "div",
                                            {
                                              style: {
                                                position: "absolute",
                                                top: "18.5%",
                                                left: "18.5%"
                                              },
                                              children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                                                avatar_default,
                                                {
                                                  src: (
                                                    // item && item.displayImage && cdnUrl
                                                    //   ? `${cdnUrl}/${item.displayImage}`
                                                    //   : "/image/user-placeholder.png"
                                                    `${cdnUrl}/${item.displayImage}`
                                                  ),
                                                  size: 30
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName: "app/components/layouts/Navbar.tsx",
                                                  lineNumber: 412,
                                                  columnNumber: 35
                                                },
                                                this
                                              )
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: "app/components/layouts/Navbar.tsx",
                                              lineNumber: 405,
                                              columnNumber: 33
                                            },
                                            this
                                          )
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName: "app/components/layouts/Navbar.tsx",
                                          lineNumber: 391,
                                          columnNumber: 31
                                        },
                                        this
                                      ),
                                      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                                        typography_default.Title,
                                        {
                                          level: 5,
                                          style: {
                                            fontSize: "15px",
                                            cursor: "pointer"
                                          },
                                          onClick: () => {
                                            setMouseOverList(false);
                                            handleCloseSearchForce();
                                            navigate(
                                              `/users/${(item == null ? void 0 : item.userName) ? item.userName : item.uuid}`
                                            );
                                          },
                                          children: item.displayName
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName: "app/components/layouts/Navbar.tsx",
                                          lineNumber: 423,
                                          columnNumber: 31
                                        },
                                        this
                                      )
                                    ] }, void 0, true, {
                                      fileName: "app/components/layouts/Navbar.tsx",
                                      lineNumber: 390,
                                      columnNumber: 29
                                    }, this) }, void 0, false, {
                                      fileName: "app/components/layouts/Navbar.tsx",
                                      lineNumber: 389,
                                      columnNumber: 27
                                    }, this)
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: "app/components/layouts/Navbar.tsx",
                                    lineNumber: 384,
                                    columnNumber: 23
                                  },
                                  this
                                ) : /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                                  empty_default,
                                  {
                                    image: empty_default.PRESENTED_IMAGE_SIMPLE,
                                    description: t("no user")
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: "app/components/layouts/Navbar.tsx",
                                    lineNumber: 446,
                                    columnNumber: 23
                                  },
                                  this
                                )
                              },
                              void 0,
                              false,
                              {
                                fileName: "app/components/layouts/Navbar.tsx",
                                lineNumber: 361,
                                columnNumber: 19
                              },
                              this
                            )
                          },
                          void 0,
                          false,
                          {
                            fileName: "app/components/layouts/Navbar.tsx",
                            lineNumber: 356,
                            columnNumber: 15
                          },
                          this
                        )
                      ]
                    },
                    void 0,
                    true,
                    {
                      fileName: "app/components/layouts/Navbar.tsx",
                      lineNumber: 320,
                      columnNumber: 13
                    },
                    this
                  ) : null,
                  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Media, { greaterThan: "sm", children: openSearch ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                    TiltMenus,
                    {
                      position: "center",
                      menus: centerMenus,
                      style: { position: "relative", zIndex: 1 }
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/components/layouts/Navbar.tsx",
                      lineNumber: 464,
                      columnNumber: 15
                    },
                    this
                  ) }, void 0, false, {
                    fileName: "app/components/layouts/Navbar.tsx",
                    lineNumber: 462,
                    columnNumber: 11
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "app/components/layouts/Navbar.tsx",
                lineNumber: 307,
                columnNumber: 9
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(col_default, { flex: "none", md: 5, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Link, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
              image_default,
              {
                src: "/image/logo.png",
                preview: false,
                style: { height: "42px", width: "auto" }
              },
              void 0,
              false,
              {
                fileName: "app/components/layouts/Navbar.tsx",
                lineNumber: 474,
                columnNumber: 13
              },
              this
            ) }, void 0, false, {
              fileName: "app/components/layouts/Navbar.tsx",
              lineNumber: 473,
              columnNumber: 11
            }, this) }, void 0, false, {
              fileName: "app/components/layouts/Navbar.tsx",
              lineNumber: 472,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(col_default, { flex: "auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
              space_default,
              {
                direction: "horizontal",
                style: { display: "flex", justifyContent: "end" },
                size: 0,
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                    avatar_default,
                    {
                      size: 40,
                      onClick: openSearch ? handleCloseSearch : handleOpenSearch,
                      style: {
                        backgroundColor: scheme === "dark" ? "#221f20" : token.colorBgLayout,
                        color: token.colorTextBase,
                        marginBottom: "5px",
                        cursor: "pointer",
                        marginRight: "5px"
                      },
                      children: openSearch ? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(CloseOutlined_default, {}, void 0, false, {
                        fileName: "app/components/layouts/Navbar.tsx",
                        lineNumber: 499,
                        columnNumber: 29
                      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Search, {}, void 0, false, {
                        fileName: "app/components/layouts/Navbar.tsx",
                        lineNumber: 499,
                        columnNumber: 49
                      }, this)
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/components/layouts/Navbar.tsx",
                      lineNumber: 487,
                      columnNumber: 13
                    },
                    this
                  ),
                  user && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(NotifcationIcon, { count: notiCount, user }, void 0, false, {
                    fileName: "app/components/layouts/Navbar.tsx",
                    lineNumber: 502,
                    columnNumber: 22
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Media, { greaterThan: "sm", children: user ? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(NavbarDropdown, { menus: dropdownMenus }, void 0, false, {
                    fileName: "app/components/layouts/Navbar.tsx",
                    lineNumber: 505,
                    columnNumber: 17
                  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                    space_default,
                    {
                      size: 5,
                      style: {
                        display: "flex",
                        alignItems: "center"
                      },
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(NavbarDropdown, { menus: dropdownMenus }, void 0, false, {
                          fileName: "app/components/layouts/Navbar.tsx",
                          lineNumber: 514,
                          columnNumber: 19
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                          TiltButton,
                          {
                            color: "primary",
                            style: tiltButtonStyle,
                            onClick: () => openLoginModal(),
                            children: t("connect account")
                          },
                          void 0,
                          false,
                          {
                            fileName: "app/components/layouts/Navbar.tsx",
                            lineNumber: 515,
                            columnNumber: 19
                          },
                          this
                        )
                      ]
                    },
                    void 0,
                    true,
                    {
                      fileName: "app/components/layouts/Navbar.tsx",
                      lineNumber: 507,
                      columnNumber: 17
                    },
                    this
                  ) }, void 0, false, {
                    fileName: "app/components/layouts/Navbar.tsx",
                    lineNumber: 503,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Media, { at: "sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                    space_default,
                    {
                      size: 15,
                      style: {
                        display: "flex",
                        alignItems: "center"
                      },
                      children: [
                        user ? (
                          // <div
                          //   style={{
                          //     padding: "6px",
                          //     backgroundImage: `url(${cdnUrl}/${user.assetFrame})`,
                          //     backgroundSize: "cover",
                          //     backgroundPosition: "center",
                          //   }}
                          // >
                          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                            avatar_default,
                            {
                              size: 40,
                              onClick: handleOpenCollapsed,
                              style: { cursor: "pointer" },
                              src: user.displayImage ? `${cdnUrl}/${user.displayImage}` : "/image/placeholder.png"
                            },
                            void 0,
                            false,
                            {
                              fileName: "app/components/layouts/Navbar.tsx",
                              lineNumber: 542,
                              columnNumber: 19
                            },
                            this
                          )
                        ) : (
                          // </div>
                          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_jsx_dev_runtime7.Fragment, { children: [
                            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                              TiltButton,
                              {
                                color: "primary",
                                style: tiltButtonStyle,
                                onClick: () => openLoginModal(),
                                children: t("connect account")
                              },
                              void 0,
                              false,
                              {
                                fileName: "app/components/layouts/Navbar.tsx",
                                lineNumber: 555,
                                columnNumber: 21
                              },
                              this
                            ),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                              MenuFoldOutlined_default,
                              {
                                onClick: handleOpenCollapsed,
                                style: { display: "flex", fontSize: 20 }
                              },
                              void 0,
                              false,
                              {
                                fileName: "app/components/layouts/Navbar.tsx",
                                lineNumber: 562,
                                columnNumber: 21
                              },
                              this
                            )
                          ] }, void 0, true, {
                            fileName: "app/components/layouts/Navbar.tsx",
                            lineNumber: 554,
                            columnNumber: 19
                          }, this)
                        ),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                          drawer_default,
                          {
                            placement: "right",
                            closable: false,
                            onClose: handleCloseCollapsed,
                            open: mobileCollapsed,
                            width: 300,
                            styles: { body: { padding: 0 } },
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                              NavbarMobileContent,
                              {
                                menus: [...mobileMenus, ...dropdownMenus],
                                onMenuClicked: handleCloseCollapsed
                              },
                              void 0,
                              false,
                              {
                                fileName: "app/components/layouts/Navbar.tsx",
                                lineNumber: 576,
                                columnNumber: 19
                              },
                              this
                            )
                          },
                          void 0,
                          false,
                          {
                            fileName: "app/components/layouts/Navbar.tsx",
                            lineNumber: 568,
                            columnNumber: 17
                          },
                          this
                        )
                      ]
                    },
                    void 0,
                    true,
                    {
                      fileName: "app/components/layouts/Navbar.tsx",
                      lineNumber: 526,
                      columnNumber: 15
                    },
                    this
                  ) }, void 0, false, {
                    fileName: "app/components/layouts/Navbar.tsx",
                    lineNumber: 525,
                    columnNumber: 13
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "app/components/layouts/Navbar.tsx",
                lineNumber: 482,
                columnNumber: 11
              },
              this
            ) }, void 0, false, {
              fileName: "app/components/layouts/Navbar.tsx",
              lineNumber: 481,
              columnNumber: 9
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "app/components/layouts/Navbar.tsx",
          lineNumber: 298,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    false,
    {
      fileName: "app/components/layouts/Navbar.tsx",
      lineNumber: 288,
      columnNumber: 5
    },
    this
  );
};

// app/components/layouts/NavbartDropdown.tsx
var import_react14 = __toESM(require_react());
var import_jsx_dev_runtime8 = __toESM(require_jsx_dev_runtime());
var { Text: Text5 } = typography_default;
var { useToken: useToken5 } = theme_default;
var NavbarDropdown = (props) => {
  const { menus } = props;
  const { user } = (0, import_react14.useContext)(AuthContext);
  const { scheme } = (0, import_react14.useContext)(AppContext);
  const matches = useMatches();
  const { token } = useToken5();
  const { cdnUrl } = matches[0].data;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
    dropdown_default,
    {
      menu: { style: { width: 200 }, items: menus },
      trigger: ["click"],
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { style: { cursor: "pointer" }, children: user ? /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(flex_default, { gap: 10, align: "center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
          avatar_default,
          {
            size: 40,
            src: user.displayImage ? `${cdnUrl}/${user.displayImage}` : "/image/placeholder.png"
          },
          void 0,
          false,
          {
            fileName: "app/components/layouts/NavbartDropdown.tsx",
            lineNumber: 35,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
          Text5,
          {
            style: {
              marginLeft: -25,
              padding: "5px 15px 5px 20px",
              borderTopRightRadius: 20,
              borderBottomRightRadius: 20,
              backgroundColor: scheme === "dark" ? "#221f20" : token.colorBgLayout
            },
            children: user.displayName
          },
          void 0,
          false,
          {
            fileName: "app/components/layouts/NavbartDropdown.tsx",
            lineNumber: 43,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/components/layouts/NavbartDropdown.tsx",
        lineNumber: 34,
        columnNumber: 11
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(TiltButton, { color: "secondary-brand", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Settings, { style: { display: "flex", fontSize: 20 } }, void 0, false, {
        fileName: "app/components/layouts/NavbartDropdown.tsx",
        lineNumber: 58,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/layouts/NavbartDropdown.tsx",
        lineNumber: 57,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/layouts/NavbartDropdown.tsx",
        lineNumber: 32,
        columnNumber: 7
      }, this)
    },
    void 0,
    false,
    {
      fileName: "app/components/layouts/NavbartDropdown.tsx",
      lineNumber: 28,
      columnNumber: 5
    },
    this
  );
};

// app/components/layouts/NavbarMobileContent.tsx
var import_jsx_dev_runtime9 = __toESM(require_jsx_dev_runtime());
var { Content: Content2, Footer: Footer2, Header: Header2 } = layout_default;
var { Text: Text6 } = typography_default;
var NavbarMobileContent = (props) => {
  const location = useLocation();
  const { menus, onMenuClicked } = props;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(layout_default, { style: { height: "100%" }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Header2, { style: { paddingInline: 30 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Link, { to: "/", style: { marginBottom: 20 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(image_default, { width: 100, src: "/image/logo.png", preview: false }, void 0, false, {
      fileName: "app/components/layouts/NavbarMobileContent.tsx",
      lineNumber: 22,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/layouts/NavbarMobileContent.tsx",
      lineNumber: 21,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/layouts/NavbarMobileContent.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Content2, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      menu_default,
      {
        selectedKeys: [location.pathname],
        mode: "inline",
        style: {
          border: "none",
          paddingBlock: 0
        },
        items: menus,
        onClick: onMenuClicked
      },
      void 0,
      false,
      {
        fileName: "app/components/layouts/NavbarMobileContent.tsx",
        lineNumber: 26,
        columnNumber: 9
      },
      this
    ) }, void 0, false, {
      fileName: "app/components/layouts/NavbarMobileContent.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Footer2, { style: { paddingInline: 30, textAlign: "center" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Text6, { style: { fontSize: "10px", letterSpacing: "3px" }, children: `v1.0.0` }, void 0, false, {
      fileName: "app/components/layouts/NavbarMobileContent.tsx",
      lineNumber: 38,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/layouts/NavbarMobileContent.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/layouts/NavbarMobileContent.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
};

// app/routes/_app.tsx
var import_session = __toESM(require_session());
var import_jsx_dev_runtime10 = __toESM(require_jsx_dev_runtime());
function AppLayout() {
  const { csrf, me } = useLoaderData();
  const fetcher = useFetcher();
  const revalidator = useRevalidator();
  const [loginModal, setLoginModal] = (0, import_react17.useState)(false);
  const [clickedId, setClickedId] = (0, import_react17.useState)(void 0);
  const [isStickerDrop, setIsStickerDrop] = (0, import_react17.useState)(false);
  const { scheme } = (0, import_react17.useContext)(AppContext);
  const handleDivClick = (event) => {
    var _a, _b;
    setClickedId(event.target.id);
    setIsStickerDrop(
      (_b = (_a = event.target) == null ? void 0 : _a.className) == null ? void 0 : _b.includes("campaign-sticker-drop")
    );
  };
  const handleLogout = (0, import_react17.useCallback)(() => {
    if (fetcher.state === "idle") {
      fetcher.submit({}, { method: "post", action: "/resources/logout" });
    }
  }, [fetcher]);
  const handleOpenLoginModal = (0, import_react17.useCallback)(() => {
    if (!me) {
      setLoginModal(true);
    }
  }, [me]);
  (0, import_react17.useEffect)(() => {
    if (me) {
      setLoginModal(false);
    }
  }, [me]);
  (0, import_react17.useEffect)(() => {
    if (fetcher && fetcher.data && revalidator.state === "idle") {
      if (fetcher.data.logout) {
        window.location.reload();
      } else if (fetcher.data.me && fetcher.state === "idle") {
        revalidator.revalidate();
        resetFetcher(fetcher);
      }
    }
  }, [fetcher, revalidator]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
    AuthContext.Provider,
    {
      value: {
        logout: handleLogout,
        user: me ? me : void 0,
        openLoginModal: handleOpenLoginModal,
        clickedId,
        isStickerDrop
      },
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(AuthenticityTokenProvider, { token: csrf, children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        "div",
        {
          onClick: handleDivClick,
          onTouchStart: handleDivClick,
          className: scheme === "dark" ? "dark-theme" : "",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(LayoutDashboard, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Outlet, {}, void 0, false, {
              fileName: "app/routes/_app.tsx",
              lineNumber: 96,
              columnNumber: 13
            }, this),
            !me && /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
              modal_default,
              {
                closeIcon: false,
                footer: null,
                open: loginModal && !me,
                onCancel: () => setLoginModal(false),
                width: 420,
                styles: { body: { paddingBlock: 25, paddingInline: 10 } },
                modalRender: (modal) => modal,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
                  LoginForm,
                  {
                    fetcher,
                    loading: fetcher.state !== "idle"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/_app.tsx",
                    lineNumber: 107,
                    columnNumber: 17
                  },
                  this
                )
              },
              void 0,
              false,
              {
                fileName: "app/routes/_app.tsx",
                lineNumber: 98,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/routes/_app.tsx",
            lineNumber: 95,
            columnNumber: 11
          }, this)
        },
        void 0,
        false,
        {
          fileName: "app/routes/_app.tsx",
          lineNumber: 90,
          columnNumber: 9
        },
        this
      ) }, void 0, false, {
        fileName: "app/routes/_app.tsx",
        lineNumber: 89,
        columnNumber: 7
      }, this)
    },
    void 0,
    false,
    {
      fileName: "app/routes/_app.tsx",
      lineNumber: 80,
      columnNumber: 5
    },
    this
  );
}
export {
  AppLayout as default
};
/*! Bundled license information:

react-infinite-scroll-component/dist/index.es.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation. All rights reserved.
  Licensed under the Apache License, Version 2.0 (the "License"); you may not use
  this file except in compliance with the License. You may obtain a copy of the
  License at http://www.apache.org/licenses/LICENSE-2.0
  
  THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
  WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
  MERCHANTABLITY OR NON-INFRINGEMENT.
  
  See the Apache Version 2.0 License for specific language governing permissions
  and limitations under the License.
  ***************************************************************************** *)
*/
//# sourceMappingURL=/build/routes/_app-2OMH5ESV.js.map
