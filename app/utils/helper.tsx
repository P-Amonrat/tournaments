import dayjs from "dayjs";
import { isDate, isNumber } from "lodash";

export function renderData(data: any, key: string, locale: string) {
  return locale === "en" && data[`${key}En`] ? data[`${key}En`] : data[key];
}

export const resetFetcher = (fetcher: any) => {
  fetcher.load("/resources/reset-fetcher");
};

export const isPermalink = (value: string) => {
  return value.indexOf("http") === 0;
};

export const randomChance = (percentage: number) => {
  const randomValue = Math.random();
  const threshold = percentage / 100;
  return randomValue < threshold;
};

export const randomRarity = () => {
  let output = "NORMAL";
  const randomValue = Math.random() * 100;

  if (randomValue < 80) {
    output = "NORMAL";
  } else if (randomValue < 99.65) {
    output = "RARE";
  } else if (randomValue < 99.95) {
    output = "SUPER_RARE";
  } else {
    output = "ULTRA_RARE";
  }
  return output;
};

export const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};
export const getProperTimeDifference = (date: any) => {
  if (!date) return null;

  const diffMonths = dayjs().diff(dayjs(date), "month");
  if (diffMonths >= 12) {
    return { unit: "year", value: dayjs().diff(dayjs(date), "year") };
  } else if (diffMonths >= 1) {
    return { unit: "month", value: diffMonths };
  } else {
    const diffDays = dayjs().diff(dayjs(date), "day");
    if (diffDays >= 1) {
      return { unit: "day", value: diffDays };
    } else {
      const diffHours = dayjs().diff(dayjs(date), "hour");
      if (diffHours >= 1) {
        return { unit: "hour", value: diffHours };
      } else {
        const diffMinutes = dayjs().diff(dayjs(date), "minute");
        if (diffMinutes >= 1) {
          return { unit: "minute", value: diffMinutes };
        } else {
          const diffSeconds = dayjs().diff(dayjs(date), "second");
          return { unit: "second", value: diffSeconds };
        }
      }
    }
  }
};

export const convertToObjectWithArrays = (data: any, arrayKeys?: string[]) => {
  const isNumeric = (value: string | number) => isNumber(value);

  return Object.entries(data).reduce((acc: any, [key, value]: any) => {
    if (arrayKeys && arrayKeys.includes(key)) {
      const values = value.split(",");
      if (values.every(isNumeric)) {
        acc[key] = values.map(Number);
      } else {
        acc[key] = values;
      }
    } else {
      acc[key] = value;
    }

    return acc;
  }, {});
};

export function checkCitizenId(id: string) {
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

  if ((11 - (sum % 11)) % 10 != parseFloat(id.charAt(12))) {
    return false;
  }

  return true;
}

export function isEmail(email: string) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

export function isPhone(phone: string) {
  return phone.length == 10 && phone.substring(0, 1) == "0";
}

export function hasStartEndEmptySpace(value: string) {
  return value.charAt(0) === " " && value.charAt(value.length - 1) === " ";
}

export function validateBirthYear(value: any) {
  return dayjs().year() - dayjs(value).year() >= 10;
}

export function validatePassword(password: string, confirmPassword?: string) {
  const hasUpperCase = password ? password.toLowerCase() !== password : false;
  const hasLowerCase = password ? password.toUpperCase() !== password : false;
  const hasNumber = password ? /\d/.test(password) : false;
  const hasSpecialCharacter = password
    ? /[~`!@#$%\_^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(password)
    : false;
  const hasLeast8 = password ? password.length >= 8 : false;
  if (confirmPassword) {
    const passwordMatch =
      password && confirmPassword ? password === confirmPassword : false;
    return {
      hasUpperCase,
      hasLowerCase,
      hasNumber,
      hasSpecialCharacter,
      hasLeast8,
      passwordMatch,
      total:
        hasUpperCase &&
        hasLowerCase &&
        hasNumber &&
        hasSpecialCharacter &&
        hasLeast8 &&
        passwordMatch,
    };
  } else {
    return {
      hasUpperCase,
      hasLowerCase,
      hasNumber,
      hasSpecialCharacter,
      hasLeast8,
      total:
        hasUpperCase &&
        hasLowerCase &&
        hasNumber &&
        hasSpecialCharacter &&
        hasLeast8,
    };
  }
}

function isDateString(value: string) {
  const datePattern = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3}Z)?$/;
  return datePattern.test(value);
}

export function flattenObject(obj: any, prefix: string[] = []) {
  const flatObj: any = {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const isArray = Array.isArray(obj);
      const newPrefix = isArray
        ? [...prefix, `[${key}]`]
        : prefix.length === 0
        ? [key]
        : [...prefix, `["${key}"]`];

      if (typeof obj[key] === "object" && obj[key] !== null) {
        Object.assign(flatObj, flattenObject(obj[key], newPrefix));
      } else {
        // Convert date strings to dayjs objects
        const flattenedKey = newPrefix.join("");
        if (typeof obj[key] === "string" && isDateString(obj[key])) {
          flatObj[flattenedKey] = dayjs(obj[key]);
        } else {
          flatObj[flattenedKey] = obj[key];
        }
      }
    }
  }

  return flatObj;
}

export function unflattenObject(flattened: any) {
  const result: any = {};

  Object.keys(flattened).map((key: string) => {
    if (flattened.hasOwnProperty(key)) {
      const keys = key
        .split("[")
        .map((k) => k.replace(/[\]"]/g, "").replace(/^"/, ""));
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

export function parseAndConvert(jsonObj: any) {
  const parsedObject: any = {};

  for (let key in jsonObj) {
    const value = jsonObj[key] as any;

    // If value is an array
    // if (Array.isArray(value)) {
    //   parsedObject[key] = value.map((item: any) => {
    //     if (
    //       typeof item === "string" &&
    //       !isNaN(parseInt(item)) &&
    //       !looksLikeDate(item)
    //     ) {
    //       return parseFloat(item);
    //     }
    //     return item;
    //   });
    // }

    // if (Array.isArray(value)) {
    //   parsedObject[key] = value.map((item: any) => {
    //     if (
    //       typeof item === "string" &&
    //       !isNaN(parseInt(item)) &&
    //       !isDate(item) &&
    //       !isDateString(item)
    //     ) {
    //       return parseFloat(item);
    //     }
    //     return item;
    //   });
    // }
    // If value is a string and can be parsed as a number
    if (
      typeof value === "string" &&
      !isNaN(parseInt(value)) &&
      !isDate(value) &&
      !isDateString(value)
    ) {
      parsedObject[key] = parseFloat(value);
    }
    // All other cases
    else {
      parsedObject[key] = value;
    }
  }

  return parsedObject;
}

export function joinTournaments(allTournaments: any, joinedTournaments: any) {
  // Loop through allTournaments
  allTournaments.forEach((tournament: any) => {
    // Check if the tournament id exists in joinedTournaments
    const joinedTournament = joinedTournaments.find(
      (joined: any) => joined.id === tournament.id
    );
    // If a matching tournament is found, change its status to 'joined'
    if (joinedTournament && tournament.status === "opening") {
      tournament.status = "joined";
    }
  });
  // Return the modified allTournaments array
  return allTournaments;
}

export function adjustTranslateValues(
  rootElement: HTMLElement,
  originalWidth: number,
  originalHeight: number,
  targetWidth: number,
  targetHeight: number
) {
  const processElement = (element: HTMLElement) => {
    const style = element.style;

    // Check if the element has a transform property
    if (style.transform) {
      // Find the translate part of the transform property
      const translateRegex = /translate\(([^,]+),\s*([^)]+)\)/;
      const translateMatch = style.transform.match(translateRegex);
      if (translateMatch) {
        const translateX = parseFloat(translateMatch[1]);
        const translateY = parseFloat(translateMatch[2]);

        // Calculate the new translate values
        const newTranslateX = (translateX / originalWidth) * targetWidth;
        const newTranslateY = (translateY / originalHeight) * targetHeight; // Assuming Y doesn't change

        // Replace the old translate values with the new ones
        const newTranslate = `translate(${newTranslateX}px, ${newTranslateY}px)`;
        style.transform = style.transform.replace(translateRegex, newTranslate);
      }
    }

    // Process child elements
    Array.from(element.children).forEach((child) =>
      processElement(child as HTMLElement)
    );
  };

  // Start processing from the root element
  processElement(rootElement);
}
