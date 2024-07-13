import type { AxiosRequestConfig } from "axios";

export function loginEmail(data: any): AxiosRequestConfig {
  return {
    method: "POST",
    url: `/api/v1/auth/login/email`,
    data,
  };
}

export function loginPhoneNumber(data: any): AxiosRequestConfig {
  return {
    method: "POST",
    url: `/api/v1/auth/login/phone-number`,
    data,
  };
}

export function socialLogin(
  provider: string,
  id: string,
  metadata: any,
  email?: string
): AxiosRequestConfig {
  return {
    method: "POST",
    url: "/api/v1/auth/login/social",
    data: { provider, id, metadata, email },
  };
}

export function forgotPassword(data: any): AxiosRequestConfig {
  return {
    method: "POST",
    url: "/api/v1/auth/forgot-password",
    data,
  };
}

export function searchEmail(email: string): AxiosRequestConfig {
  return {
    method: "GET",
    url: `/api/v1/auth/search/email?email=${encodeURIComponent(email)}`,
  };
}

export function searchPhoneNumber(phoneNumber: string): AxiosRequestConfig {
  return {
    method: "GET",
    url: `/api/v1/auth/search/phone-number?phoneNumber=${phoneNumber}`,
  };
}

export function sendOtpEmail(data: any): AxiosRequestConfig {
  return {
    method: "POST",
    url: `/api/v1/auth/otp/email`,
    data,
  };
}

export function sendOtpPhoneNumber(data: any): AxiosRequestConfig {
  return {
    method: "POST",
    url: `/api/v1/auth/otp/phone-number`,
    data,
  };
}

export function reSendOtpEmail(data: any): AxiosRequestConfig {
  return {
    method: "POST",
    url: `/api/v1/auth/otp/email/resend`,
    data,
  };
}

export function reSendOtpPhoneNumber(data: any): AxiosRequestConfig {
  return {
    method: "POST",
    url: `/api/v1/auth/otp/phone-number/resend`,
    data,
  };
}

export function verifyEmailOtp(data: any): AxiosRequestConfig {
  return {
    method: "POST",
    url: `/api/v1/auth/otp/email/verify`,
    data,
  };
}

export function verifyPhoneNumberOtp(data: any): AxiosRequestConfig {
  return {
    method: "POST",
    url: `/api/v1/auth/otp/phone-number/verify`,
    data,
  };
}

export function registerEmail(data: any): AxiosRequestConfig {
  return {
    method: "POST",
    url: `/api/v1/auth/otp/email/register`,
    data,
  };
}

export function registerPhoneNumber(data: any): AxiosRequestConfig {
  return {
    method: "POST",
    url: `/api/v1/auth/otp/phone-number/register`,
    data,
  };
}
