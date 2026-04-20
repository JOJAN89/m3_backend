import { Request, Response, Router } from "express";

const router = Router();

/**
 * @openapi
 * /api/v1/health:
 *   get:
 *     tags:
 *       - Health
 *     summary: Health check
 *     description: Checks if the API is running.
 *     responses:
 *       200:
 *         description: API is running
 */
router.get("/", (_req: Request, res: Response) => {
  res.status(200).json({
    message: "API is running"
  });
});

export default router;