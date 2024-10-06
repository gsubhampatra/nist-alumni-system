import { ApiError } from "../utils/responseHandler.js";

const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');
    if (!token) return ApiError(res, 401, 'Access Denied');
  
    try {
      const verified = jwt.verify(token, process.env.JWT_SECRET);
      req.user = verified;
      next();
    } catch (err) {
      return ApiError(res, 400, 'Invalid Token');
    }
  };

const isAdmin = (req, res, next) => {
    if (req.user.role !== 'admin') return ApiError(res, 403, 'Access Denied');
    next();
  }

const isAlumni = (req, res, next) => {
    if (req.user.role !== 'alumni') return ApiError(res, 403, 'Access Denied');
    next();
  }