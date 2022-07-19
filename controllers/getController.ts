import axios, { AxiosResponse } from "axios";
import { NextFunction, Request, Response } from "express";

const getMediaByTitle = (endpoint: string) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const { title } = req.query;
    if (typeof title !== "string" || !title) {
      return next(Error("Query parameter 'title' must be of type string."));
    }

    try {
      const response: AxiosResponse = await axios.get(`${endpoint}?q=${title}`);
      if (response.status !== 200) throw Error("Jikan API GET Request failed");

      res.json(response.data);
    } catch (e) {
      let errorMessage;
      e instanceof Error ? (errorMessage = e.message) : "GET request failed";

      return next(Error(errorMessage));
    }
  };
};

export default getMediaByTitle;
