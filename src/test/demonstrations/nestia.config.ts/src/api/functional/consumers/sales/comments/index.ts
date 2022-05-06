/**
 * @packageDocumentation
 * @module api.functional.consumers.sales.comments
 * @nestia Generated by Nestia - https://github.com/samchon/nestia 
 */
//================================================================
import { Fetcher, Primitive } from "nestia-fetcher";
import type { IConnection } from "nestia-fetcher";
import { assertType } from "typescript-is";
import { createStringifier } from "typescript-json";

import type { IPage } from "./../../../../structures/common/IPage";
import type { ISaleComment } from "./../../../../structures/sales/articles/ISaleComment";
import type { IAttachmentFile } from "./../../../../structures/common/IAttachmentFile";

/**
 * Get page of comments.
 * 
 * Get list of the {@link ISaleComment comments} with {@link IPage pagination}.
 * 
 * @param connection connection Information of the remote HTTP(s) server with headers (+encryption password)
 * @param section Code of the target section
 * @param saleId ID of the target sale
 * @param articleId ID of the target article
 * @param input Information about pagination and searching
 * @return Page of the comments
 * @throw 400 bad request error when type of the input data is not valid
 * @throw 404 not found error when unable to find the matched record
 * 
 * @controller ConsumerSaleCommentsController.index()
 * @path PATCH /consumers/:section/sales/:saleId/comments/:articleId
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export function index
    (
        connection: IConnection,
        section: string,
        saleId: number,
        articleId: number,
        input: Primitive<index.Input>
    ): Promise<index.Output>
{
    assertType<typeof section>(section);
    assertType<typeof saleId>(saleId);
    assertType<typeof articleId>(articleId);
    assertType<typeof input>(input);

    return Fetcher.fetch
    (
        connection,
        index.ENCRYPTED,
        index.METHOD,
        index.path(section, saleId, articleId),
        input,
        index.stringify
    );
}
export namespace index
{
    export type Input = Primitive<IPage.IRequest<string>>;
    export type Output = Primitive<IPage<ISaleComment>>;

    export const METHOD = "PATCH" as const;
    export const PATH: string = "/consumers/:section/sales/:saleId/comments/:articleId";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: true,
        response: true,
    };

    export function path(section: string, saleId: number, articleId: number): string
    {
        return `/consumers/${section}/sales/${saleId}/comments/${articleId}`;
    }
    export const stringify = createStringifier<Input>();
}

/**
 * Store a new comment.
 * 
 * @param connection connection Information of the remote HTTP(s) server with headers (+encryption password)
 * @param request Instance of the Express.Request
 * @param section Code of the target section
 * @param saleId ID of the target sale
 * @param articleId ID of the target article
 * @param input Content to write
 * @return Newly archived comment
 * @throw 400 bad request error when type of the input data is not valid
 * @throw 401 unauthorized error when you've not logged in yet
 * @throw 403 forbidden error when you're a seller and the sale is not yours
 * @throw 404 not found error when unable to find the matched record
 * 
 * @controller ConsumerSaleCommentsController.store()
 * @path POST /consumers/:section/sales/:saleId/comments/:articleId
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export function store
    (
        connection: IConnection,
        section: string,
        saleId: number,
        articleId: number,
        input: Primitive<store.Input>
    ): Promise<store.Output>
{
    assertType<typeof section>(section);
    assertType<typeof saleId>(saleId);
    assertType<typeof articleId>(articleId);
    assertType<typeof input>(input);

    return Fetcher.fetch
    (
        connection,
        store.ENCRYPTED,
        store.METHOD,
        store.path(section, saleId, articleId),
        input,
        store.stringify
    );
}
export namespace store
{
    export type Input = Primitive<ISaleComment.IStore>;
    export type Output = Primitive<ISaleComment>;

    export const METHOD = "POST" as const;
    export const PATH: string = "/consumers/:section/sales/:saleId/comments/:articleId";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: true,
        response: true,
    };

    export function path(section: string, saleId: number, articleId: number): string
    {
        return `/consumers/${section}/sales/${saleId}/comments/${articleId}`;
    }
    export const stringify = createStringifier<Input>();
}

/**
 * Remove a comment.
 * 
 * @param connection connection Information of the remote HTTP(s) server with headers (+encryption password)
 * @param section Code of the target section
 * @param saleId ID of the target sale
 * @param articleId ID of the target article
 * @param commentId ID of the target comment to be erased
 * @return Empty object
 * @throw 401 unauthorized error when you've not logged in yet
 * @throw 403 forbidden error when the comment is not yours
 * @throw 404 not found error when unable to find the matched record
 * 
 * @controller ConsumerSaleCommentsController.remove()
 * @path DELETE /consumers/:section/sales/:saleId/comments/:articleId/:commentId
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export function remove
    (
        connection: IConnection,
        section: string,
        saleId: number,
        articleId: number,
        commentId: number
    ): Promise<void>
{
    assertType<typeof section>(section);
    assertType<typeof saleId>(saleId);
    assertType<typeof articleId>(articleId);
    assertType<typeof commentId>(commentId);

    return Fetcher.fetch
    (
        connection,
        remove.ENCRYPTED,
        remove.METHOD,
        remove.path(section, saleId, articleId, commentId)
    );
}
export namespace remove
{

    export const METHOD = "DELETE" as const;
    export const PATH: string = "/consumers/:section/sales/:saleId/comments/:articleId/:commentId";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: false,
    };

    export function path(section: string, saleId: number, articleId: number, commentId: number): string
    {
        return `/consumers/${section}/sales/${saleId}/comments/${articleId}/${commentId}`;
    }
}

/**
 * @controller ConsumerSaleCommentsController.files()
 * @path GET /consumers/:section/sales/:saleId/comments/:articleId/files
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export function files
    (
        connection: IConnection,
        section: string,
        saleId: number,
        articleId: number
    ): Promise<files.Output>
{
    assertType<typeof section>(section);
    assertType<typeof saleId>(saleId);
    assertType<typeof articleId>(articleId);

    return Fetcher.fetch
    (
        connection,
        files.ENCRYPTED,
        files.METHOD,
        files.path(section, saleId, articleId)
    );
}
export namespace files
{
    export type Output = Primitive<IPage<IAttachmentFile>>;

    export const METHOD = "GET" as const;
    export const PATH: string = "/consumers/:section/sales/:saleId/comments/:articleId/files";
    export const ENCRYPTED: Fetcher.IEncrypted = {
        request: false,
        response: false,
    };

    export function path(section: string, saleId: number, articleId: number): string
    {
        return `/consumers/${section}/sales/${saleId}/comments/${articleId}/files`;
    }
}