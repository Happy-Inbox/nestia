import type express from "express";
import type { FastifyRequest } from "fastify";
import raw from "raw-body";

/**
 * @internal
 */
export const get_binary_body = async (
  request: express.Request | FastifyRequest,
): Promise<Uint8Array> =>
  isExpressRequest(request) ? await raw(request) : (request.body as Uint8Array);

/**
 * @internal
 */
const isExpressRequest = (
  request: express.Request | FastifyRequest,
): request is express.Request => (request as express.Request).app !== undefined;
