import { Response } from "express";

export const handleSuccess = (res: Response, data: any, status = 200) => {
  res.status(status).json({ ok: true, data });
};

export const handleError = (
  res: Response,
  message: string,
  error: any,
  status = 500
) => {
  res.status(status).json({
    ok: false,
    message,
    error: error?.message,
  });
};