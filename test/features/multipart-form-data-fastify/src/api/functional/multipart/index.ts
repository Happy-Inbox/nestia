/**
 * @packageDocumentation
 * @module api.functional.multipart
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
//================================================================
import type { IConnection, Resolved } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";

import type { IMultipart } from "../../structures/IMultipart";

/**
 * @controller MultipartController.post
 * @path POST /multipart
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function post(
  connection: IConnection,
  body: post.Input,
): Promise<void> {
  return PlainFetcher.fetch(
    connection,
    {
      ...post.METADATA,
      path: post.path(),
    },
    body,
  );
}
export namespace post {
  export type Input = Resolved<IMultipart>;

  export const METADATA = {
    method: "POST",
    path: "/multipart",
    request: {
      type: "multipart/form-data",
      encrypted: false,
    },
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: null,
  } as const;

  export const path = () => "/multipart";
}