import {
  require_lodash
} from "/build/_shared/chunk-HA2KWBJU.js";
import {
  require_dayjs_min
} from "/build/_shared/chunk-EA6MLCKC.js";
import {
  __toESM
} from "/build/_shared/chunk-FFEYCVP6.js";

// app/utils/helper.tsx
var import_dayjs = __toESM(require_dayjs_min());
var import_lodash = __toESM(require_lodash());
function renderData(data, key, locale) {
  return locale === "en" && data[`${key}En`] ? data[`${key}En`] : data[key];
}
var resetFetcher = (fetcher) => {
  fetcher.load("/resources/reset-fetcher");
};
var isPermalink = (value) => {
  return value.indexOf("http") === 0;
};
var getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};
function checkCitizenId(id) {
  let i;
  let sum;
  if (id.length !== 13) {
    return false;
  }
  if (id.substring(0, 1) === "0") {
    return false;
  }
  for (i = 0, sum = 0; i < 12; i++) {
    sum += parseFloat(id.charAt(i)) * (13 - i);
  }
  if ((11 - sum % 11) % 10 != parseFloat(id.charAt(12))) {
    return false;
  }
  return true;
}
function isEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}
function isPhone(phone) {
  return phone.length == 10 && phone.substring(0, 1) == "0";
}
function hasStartEndEmptySpace(value) {
  return value.charAt(0) === " " && value.charAt(value.length - 1) === " ";
}
function validateBirthYear(value) {
  return (0, import_dayjs.default)().year() - (0, import_dayjs.default)(value).year() >= 10;
}
function validatePassword(password, confirmPassword) {
  const hasUpperCase = password ? password.toLowerCase() !== password : false;
  const hasLowerCase = password ? password.toUpperCase() !== password : false;
  const hasNumber = password ? /\d/.test(password) : false;
  const hasSpecialCharacter = password ? /[~`!@#$%\_^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(password) : false;
  const hasLeast8 = password ? password.length >= 8 : false;
  if (confirmPassword) {
    const passwordMatch = password && confirmPassword ? password === confirmPassword : false;
    return {
      hasUpperCase,
      hasLowerCase,
      hasNumber,
      hasSpecialCharacter,
      hasLeast8,
      passwordMatch,
      total: hasUpperCase && hasLowerCase && hasNumber && hasSpecialCharacter && hasLeast8 && passwordMatch
    };
  } else {
    return {
      hasUpperCase,
      hasLowerCase,
      hasNumber,
      hasSpecialCharacter,
      hasLeast8,
      total: hasUpperCase && hasLowerCase && hasNumber && hasSpecialCharacter && hasLeast8
    };
  }
}
function isDateString(value) {
  const datePattern = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3}Z)?$/;
  return datePattern.test(value);
}
function flattenObject(obj, prefix = []) {
  const flatObj = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const isArray = Array.isArray(obj);
      const newPrefix = isArray ? [...prefix, `[${key}]`] : prefix.length === 0 ? [key] : [...prefix, `["${key}"]`];
      if (typeof obj[key] === "object" && obj[key] !== null) {
        Object.assign(flatObj, flattenObject(obj[key], newPrefix));
      } else {
        const flattenedKey = newPrefix.join("");
        if (typeof obj[key] === "string" && isDateString(obj[key])) {
          flatObj[flattenedKey] = (0, import_dayjs.default)(obj[key]);
        } else {
          flatObj[flattenedKey] = obj[key];
        }
      }
    }
  }
  return flatObj;
}
function unflattenObject(flattened) {
  const result = {};
  Object.keys(flattened).map((key) => {
    if (flattened.hasOwnProperty(key)) {
      const keys = key.split("[").map((k) => k.replace(/[\]"]/g, "").replace(/^"/, ""));
      let current = result;
      for (let i = 0; i < keys.length - 1; i++) {
        const subKey = keys[i];
        if (!isNaN(parseInt(keys[i + 1]))) {
          current[subKey] = current[subKey] || [];
        } else {
          current[subKey] = current[subKey] || {};
        }
        current = current[subKey];
      }
      current[keys[keys.length - 1]] = flattened[key];
    }
  });
  return result;
}
function adjustTranslateValues(rootElement, originalWidth, originalHeight, targetWidth, targetHeight) {
  const processElement = (element) => {
    const style = element.style;
    if (style.transform) {
      const translateRegex = /translate\(([^,]+),\s*([^)]+)\)/;
      const translateMatch = style.transform.match(translateRegex);
      if (translateMatch) {
        const translateX = parseFloat(translateMatch[1]);
        const translateY = parseFloat(translateMatch[2]);
        const newTranslateX = translateX / originalWidth * targetWidth;
        const newTranslateY = translateY / originalHeight * targetHeight;
        const newTranslate = `translate(${newTranslateX}px, ${newTranslateY}px)`;
        style.transform = style.transform.replace(translateRegex, newTranslate);
      }
    }
    Array.from(element.children).forEach(
      (child) => processElement(child)
    );
  };
  processElement(rootElement);
}

export {
  renderData,
  resetFetcher,
  isPermalink,
  getRandomInt,
  checkCitizenId,
  isEmail,
  isPhone,
  hasStartEndEmptySpace,
  validateBirthYear,
  validatePassword,
  flattenObject,
  unflattenObject,
  adjustTranslateValues
};
//# sourceMappingURL=/build/_shared/chunk-7PTPQV33.js.map
