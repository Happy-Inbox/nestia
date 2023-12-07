/**
 * @packageDocumentation
 * @module api.functional.arraySimple
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import type { HttpError, IConnection, IPropagation, Primitive } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import typia from "typia";
import type { Format } from "typia/lib/tags/Format";

import type { ArraySimple } from "../../structures/ArraySimple";
import { NestiaSimulator } from "../../utils/NestiaSimulator";

/**
 * @controller ArraySimpleController.index
 * @path GET /arraySimple
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function index(
    connection: IConnection,
): Promise<index.Output> {
    return !!connection.simulate
        ? index.simulate(
              connection,
          )
        : PlainFetcher.propagate(
              connection,
              {
                  ...index.METADATA,
                  path: index.path(),
              } as const,
          );
}
export namespace index {
    export type Output = IPropagation<{
        200: ArraySimple;
    }>;

    export const METADATA = {
        method: "GET",
        path: "/arraySimple",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    } as const;

    export const path = (): string => {
        return `/arraySimple`;
    }
    export const random = (g?: Partial<typia.IRandomGenerator>): Primitive<ArraySimple> =>
        typia.random<Primitive<ArraySimple>>(g);
    export const simulate = async (
        connection: IConnection,
    ): Promise<Output> => {
        return {
            success: true,
            status: 200,
            headers: {
                "Content-Type": "application/json",
            },
            data: random(
                typeof connection.simulate === 'object' &&
                    connection.simulate !== null
                    ? connection.simulate
                    : undefined
            ),
        }
    }
}

/**
 * @controller ArraySimpleController.at
 * @path GET /arraySimple/:id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function at(
    connection: IConnection,
    id: (string & Format<"uuid">),
): Promise<at.Output> {
    return !!connection.simulate
        ? at.simulate(
              connection,
              id,
          )
        : PlainFetcher.propagate(
              connection,
              {
                  ...at.METADATA,
                  path: at.path(id),
              } as const,
          );
}
export namespace at {
    export type Output = IPropagation<{
        200: ArraySimple.IPerson;
    }>;

    export const METADATA = {
        method: "GET",
        path: "/arraySimple/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    } as const;

    export const path = (id: (string & Format<"uuid">)): string => {
        return `/arraySimple/${encodeURIComponent(id ?? "null")}`;
    }
    export const random = (g?: Partial<typia.IRandomGenerator>): Primitive<ArraySimple.IPerson> =>
        typia.random<Primitive<ArraySimple.IPerson>>(g);
    export const simulate = async (
        connection: IConnection,
        id: (string & Format<"uuid">),
    ): Promise<Output> => {
        const assert = NestiaSimulator.assert({
            method: METADATA.method,
            host: connection.host,
            path: path(id),
            contentType: "application/json",
        });
        try {
            assert.param("id")(() => typia.assert(id));
        } catch (exp) {
            if (!typia.is<HttpError>(exp)) throw exp;
            return {
                success: false,
                status: exp.status,
                headers: exp.headers,
                data: exp.toJSON().message,
            } as any;
        }
        return {
            success: true,
            status: 200,
            headers: {
                "Content-Type": "application/json",
            },
            data: random(
                typeof connection.simulate === 'object' &&
                    connection.simulate !== null
                    ? connection.simulate
                    : undefined
            ),
        }
    }
}

/**
 * @controller ArraySimpleController.store
 * @path POST /arraySimple
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function store(
    connection: IConnection,
    body: store.Input,
): Promise<store.Output> {
    return !!connection.simulate
        ? store.simulate(
              connection,
              body,
          )
        : PlainFetcher.propagate(
              {
                  ...connection,
                  headers: {
                      ...(connection.headers ?? {}),
                      "Content-Type": "application/json",
                  },
              },
              {
                  ...store.METADATA,
                  path: store.path(),
              } as const,
              body,
          );
}
export namespace store {
    export type Input = Primitive<ArraySimple.IPerson>;
    export type Output = IPropagation<{
        201: ArraySimple.IPerson;
    }>;

    export const METADATA = {
        method: "POST",
        path: "/arraySimple",
        request: {
            type: "application/json",
            encrypted: false
        },
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    } as const;

    export const path = (): string => {
        return `/arraySimple`;
    }
    export const random = (g?: Partial<typia.IRandomGenerator>): Primitive<ArraySimple.IPerson> =>
        typia.random<Primitive<ArraySimple.IPerson>>(g);
    export const simulate = async (
        connection: IConnection,
        body: store.Input,
    ): Promise<Output> => {
        const assert = NestiaSimulator.assert({
            method: METADATA.method,
            host: connection.host,
            path: path(),
            contentType: "application/json",
        });
        try {
            assert.body(() => typia.assert(body));
        } catch (exp) {
            if (!typia.is<HttpError>(exp)) throw exp;
            return {
                success: false,
                status: exp.status,
                headers: exp.headers,
                data: exp.toJSON().message,
            } as any;
        }
        return {
            success: true,
            status: 201,
            headers: {
                "Content-Type": "application/json",
            },
            data: random(
                typeof connection.simulate === 'object' &&
                    connection.simulate !== null
                    ? connection.simulate
                    : undefined
            ),
        }
    }
}