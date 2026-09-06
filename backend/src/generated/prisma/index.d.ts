
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Watchlist
 * 
 */
export type Watchlist = $Result.DefaultSelection<Prisma.$WatchlistPayload>
/**
 * Model Stock
 * 
 */
export type Stock = $Result.DefaultSelection<Prisma.$StockPayload>
/**
 * Model WatchlistItem
 * 
 */
export type WatchlistItem = $Result.DefaultSelection<Prisma.$WatchlistItemPayload>
/**
 * Model MarketSnapshot
 * 
 */
export type MarketSnapshot = $Result.DefaultSelection<Prisma.$MarketSnapshotPayload>
/**
 * Model UserStockCheckpoint
 * 
 */
export type UserStockCheckpoint = $Result.DefaultSelection<Prisma.$UserStockCheckpointPayload>
/**
 * Model AttentionEvent
 * 
 */
export type AttentionEvent = $Result.DefaultSelection<Prisma.$AttentionEventPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const WatchIntent: {
  HOLDING: 'HOLDING',
  INTERESTED: 'INTERESTED'
};

export type WatchIntent = (typeof WatchIntent)[keyof typeof WatchIntent]


export const AttentionType: {
  LARGE_PRICE_CHANGE: 'LARGE_PRICE_CHANGE',
  TARGET_REACHED: 'TARGET_REACHED',
  PURCHASE_PRICE_CROSSED: 'PURCHASE_PRICE_CROSSED',
  VOLUME_SPIKE: 'VOLUME_SPIKE'
};

export type AttentionType = (typeof AttentionType)[keyof typeof AttentionType]


export const AttentionSeverity: {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH'
};

export type AttentionSeverity = (typeof AttentionSeverity)[keyof typeof AttentionSeverity]

}

export type WatchIntent = $Enums.WatchIntent

export const WatchIntent: typeof $Enums.WatchIntent

export type AttentionType = $Enums.AttentionType

export const AttentionType: typeof $Enums.AttentionType

export type AttentionSeverity = $Enums.AttentionSeverity

export const AttentionSeverity: typeof $Enums.AttentionSeverity

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.watchlist`: Exposes CRUD operations for the **Watchlist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Watchlists
    * const watchlists = await prisma.watchlist.findMany()
    * ```
    */
  get watchlist(): Prisma.WatchlistDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stock`: Exposes CRUD operations for the **Stock** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stocks
    * const stocks = await prisma.stock.findMany()
    * ```
    */
  get stock(): Prisma.StockDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.watchlistItem`: Exposes CRUD operations for the **WatchlistItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WatchlistItems
    * const watchlistItems = await prisma.watchlistItem.findMany()
    * ```
    */
  get watchlistItem(): Prisma.WatchlistItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.marketSnapshot`: Exposes CRUD operations for the **MarketSnapshot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MarketSnapshots
    * const marketSnapshots = await prisma.marketSnapshot.findMany()
    * ```
    */
  get marketSnapshot(): Prisma.MarketSnapshotDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userStockCheckpoint`: Exposes CRUD operations for the **UserStockCheckpoint** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserStockCheckpoints
    * const userStockCheckpoints = await prisma.userStockCheckpoint.findMany()
    * ```
    */
  get userStockCheckpoint(): Prisma.UserStockCheckpointDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attentionEvent`: Exposes CRUD operations for the **AttentionEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AttentionEvents
    * const attentionEvents = await prisma.attentionEvent.findMany()
    * ```
    */
  get attentionEvent(): Prisma.AttentionEventDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.10.0
   * Query Engine version: 0edf323efd1d98336f3f0a68684b56f689b900d3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Watchlist: 'Watchlist',
    Stock: 'Stock',
    WatchlistItem: 'WatchlistItem',
    MarketSnapshot: 'MarketSnapshot',
    UserStockCheckpoint: 'UserStockCheckpoint',
    AttentionEvent: 'AttentionEvent'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "watchlist" | "stock" | "watchlistItem" | "marketSnapshot" | "userStockCheckpoint" | "attentionEvent"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Watchlist: {
        payload: Prisma.$WatchlistPayload<ExtArgs>
        fields: Prisma.WatchlistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WatchlistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WatchlistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload>
          }
          findFirst: {
            args: Prisma.WatchlistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WatchlistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload>
          }
          findMany: {
            args: Prisma.WatchlistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload>[]
          }
          create: {
            args: Prisma.WatchlistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload>
          }
          createMany: {
            args: Prisma.WatchlistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WatchlistCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload>[]
          }
          delete: {
            args: Prisma.WatchlistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload>
          }
          update: {
            args: Prisma.WatchlistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload>
          }
          deleteMany: {
            args: Prisma.WatchlistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WatchlistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WatchlistUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload>[]
          }
          upsert: {
            args: Prisma.WatchlistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistPayload>
          }
          aggregate: {
            args: Prisma.WatchlistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWatchlist>
          }
          groupBy: {
            args: Prisma.WatchlistGroupByArgs<ExtArgs>
            result: $Utils.Optional<WatchlistGroupByOutputType>[]
          }
          count: {
            args: Prisma.WatchlistCountArgs<ExtArgs>
            result: $Utils.Optional<WatchlistCountAggregateOutputType> | number
          }
        }
      }
      Stock: {
        payload: Prisma.$StockPayload<ExtArgs>
        fields: Prisma.StockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StockFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StockFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload>
          }
          findFirst: {
            args: Prisma.StockFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StockFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload>
          }
          findMany: {
            args: Prisma.StockFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload>[]
          }
          create: {
            args: Prisma.StockCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload>
          }
          createMany: {
            args: Prisma.StockCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StockCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload>[]
          }
          delete: {
            args: Prisma.StockDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload>
          }
          update: {
            args: Prisma.StockUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload>
          }
          deleteMany: {
            args: Prisma.StockDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StockUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StockUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload>[]
          }
          upsert: {
            args: Prisma.StockUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload>
          }
          aggregate: {
            args: Prisma.StockAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStock>
          }
          groupBy: {
            args: Prisma.StockGroupByArgs<ExtArgs>
            result: $Utils.Optional<StockGroupByOutputType>[]
          }
          count: {
            args: Prisma.StockCountArgs<ExtArgs>
            result: $Utils.Optional<StockCountAggregateOutputType> | number
          }
        }
      }
      WatchlistItem: {
        payload: Prisma.$WatchlistItemPayload<ExtArgs>
        fields: Prisma.WatchlistItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WatchlistItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WatchlistItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistItemPayload>
          }
          findFirst: {
            args: Prisma.WatchlistItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WatchlistItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistItemPayload>
          }
          findMany: {
            args: Prisma.WatchlistItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistItemPayload>[]
          }
          create: {
            args: Prisma.WatchlistItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistItemPayload>
          }
          createMany: {
            args: Prisma.WatchlistItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WatchlistItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistItemPayload>[]
          }
          delete: {
            args: Prisma.WatchlistItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistItemPayload>
          }
          update: {
            args: Prisma.WatchlistItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistItemPayload>
          }
          deleteMany: {
            args: Prisma.WatchlistItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WatchlistItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WatchlistItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistItemPayload>[]
          }
          upsert: {
            args: Prisma.WatchlistItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WatchlistItemPayload>
          }
          aggregate: {
            args: Prisma.WatchlistItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWatchlistItem>
          }
          groupBy: {
            args: Prisma.WatchlistItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<WatchlistItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.WatchlistItemCountArgs<ExtArgs>
            result: $Utils.Optional<WatchlistItemCountAggregateOutputType> | number
          }
        }
      }
      MarketSnapshot: {
        payload: Prisma.$MarketSnapshotPayload<ExtArgs>
        fields: Prisma.MarketSnapshotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MarketSnapshotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketSnapshotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MarketSnapshotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketSnapshotPayload>
          }
          findFirst: {
            args: Prisma.MarketSnapshotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketSnapshotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MarketSnapshotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketSnapshotPayload>
          }
          findMany: {
            args: Prisma.MarketSnapshotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketSnapshotPayload>[]
          }
          create: {
            args: Prisma.MarketSnapshotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketSnapshotPayload>
          }
          createMany: {
            args: Prisma.MarketSnapshotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MarketSnapshotCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketSnapshotPayload>[]
          }
          delete: {
            args: Prisma.MarketSnapshotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketSnapshotPayload>
          }
          update: {
            args: Prisma.MarketSnapshotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketSnapshotPayload>
          }
          deleteMany: {
            args: Prisma.MarketSnapshotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MarketSnapshotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MarketSnapshotUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketSnapshotPayload>[]
          }
          upsert: {
            args: Prisma.MarketSnapshotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketSnapshotPayload>
          }
          aggregate: {
            args: Prisma.MarketSnapshotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMarketSnapshot>
          }
          groupBy: {
            args: Prisma.MarketSnapshotGroupByArgs<ExtArgs>
            result: $Utils.Optional<MarketSnapshotGroupByOutputType>[]
          }
          count: {
            args: Prisma.MarketSnapshotCountArgs<ExtArgs>
            result: $Utils.Optional<MarketSnapshotCountAggregateOutputType> | number
          }
        }
      }
      UserStockCheckpoint: {
        payload: Prisma.$UserStockCheckpointPayload<ExtArgs>
        fields: Prisma.UserStockCheckpointFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserStockCheckpointFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStockCheckpointPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserStockCheckpointFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStockCheckpointPayload>
          }
          findFirst: {
            args: Prisma.UserStockCheckpointFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStockCheckpointPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserStockCheckpointFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStockCheckpointPayload>
          }
          findMany: {
            args: Prisma.UserStockCheckpointFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStockCheckpointPayload>[]
          }
          create: {
            args: Prisma.UserStockCheckpointCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStockCheckpointPayload>
          }
          createMany: {
            args: Prisma.UserStockCheckpointCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserStockCheckpointCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStockCheckpointPayload>[]
          }
          delete: {
            args: Prisma.UserStockCheckpointDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStockCheckpointPayload>
          }
          update: {
            args: Prisma.UserStockCheckpointUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStockCheckpointPayload>
          }
          deleteMany: {
            args: Prisma.UserStockCheckpointDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserStockCheckpointUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserStockCheckpointUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStockCheckpointPayload>[]
          }
          upsert: {
            args: Prisma.UserStockCheckpointUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStockCheckpointPayload>
          }
          aggregate: {
            args: Prisma.UserStockCheckpointAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserStockCheckpoint>
          }
          groupBy: {
            args: Prisma.UserStockCheckpointGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserStockCheckpointGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserStockCheckpointCountArgs<ExtArgs>
            result: $Utils.Optional<UserStockCheckpointCountAggregateOutputType> | number
          }
        }
      }
      AttentionEvent: {
        payload: Prisma.$AttentionEventPayload<ExtArgs>
        fields: Prisma.AttentionEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttentionEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttentionEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttentionEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttentionEventPayload>
          }
          findFirst: {
            args: Prisma.AttentionEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttentionEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttentionEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttentionEventPayload>
          }
          findMany: {
            args: Prisma.AttentionEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttentionEventPayload>[]
          }
          create: {
            args: Prisma.AttentionEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttentionEventPayload>
          }
          createMany: {
            args: Prisma.AttentionEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttentionEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttentionEventPayload>[]
          }
          delete: {
            args: Prisma.AttentionEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttentionEventPayload>
          }
          update: {
            args: Prisma.AttentionEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttentionEventPayload>
          }
          deleteMany: {
            args: Prisma.AttentionEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttentionEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AttentionEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttentionEventPayload>[]
          }
          upsert: {
            args: Prisma.AttentionEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttentionEventPayload>
          }
          aggregate: {
            args: Prisma.AttentionEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttentionEvent>
          }
          groupBy: {
            args: Prisma.AttentionEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttentionEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttentionEventCountArgs<ExtArgs>
            result: $Utils.Optional<AttentionEventCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    watchlist?: WatchlistOmit
    stock?: StockOmit
    watchlistItem?: WatchlistItemOmit
    marketSnapshot?: MarketSnapshotOmit
    userStockCheckpoint?: UserStockCheckpointOmit
    attentionEvent?: AttentionEventOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    watchlists: number
    checkpoints: number
    attentionEvents: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    watchlists?: boolean | UserCountOutputTypeCountWatchlistsArgs
    checkpoints?: boolean | UserCountOutputTypeCountCheckpointsArgs
    attentionEvents?: boolean | UserCountOutputTypeCountAttentionEventsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWatchlistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WatchlistWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCheckpointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserStockCheckpointWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAttentionEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttentionEventWhereInput
  }


  /**
   * Count Type WatchlistCountOutputType
   */

  export type WatchlistCountOutputType = {
    items: number
  }

  export type WatchlistCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | WatchlistCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * WatchlistCountOutputType without action
   */
  export type WatchlistCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchlistCountOutputType
     */
    select?: WatchlistCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WatchlistCountOutputType without action
   */
  export type WatchlistCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WatchlistItemWhereInput
  }


  /**
   * Count Type StockCountOutputType
   */

  export type StockCountOutputType = {
    watchlistItems: number
    snapshots: number
    checkpoints: number
    attentionEvents: number
  }

  export type StockCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    watchlistItems?: boolean | StockCountOutputTypeCountWatchlistItemsArgs
    snapshots?: boolean | StockCountOutputTypeCountSnapshotsArgs
    checkpoints?: boolean | StockCountOutputTypeCountCheckpointsArgs
    attentionEvents?: boolean | StockCountOutputTypeCountAttentionEventsArgs
  }

  // Custom InputTypes
  /**
   * StockCountOutputType without action
   */
  export type StockCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockCountOutputType
     */
    select?: StockCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StockCountOutputType without action
   */
  export type StockCountOutputTypeCountWatchlistItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WatchlistItemWhereInput
  }

  /**
   * StockCountOutputType without action
   */
  export type StockCountOutputTypeCountSnapshotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarketSnapshotWhereInput
  }

  /**
   * StockCountOutputType without action
   */
  export type StockCountOutputTypeCountCheckpointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserStockCheckpointWhereInput
  }

  /**
   * StockCountOutputType without action
   */
  export type StockCountOutputTypeCountAttentionEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttentionEventWhereInput
  }


  /**
   * Count Type MarketSnapshotCountOutputType
   */

  export type MarketSnapshotCountOutputType = {
    attentionEvents: number
  }

  export type MarketSnapshotCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attentionEvents?: boolean | MarketSnapshotCountOutputTypeCountAttentionEventsArgs
  }

  // Custom InputTypes
  /**
   * MarketSnapshotCountOutputType without action
   */
  export type MarketSnapshotCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketSnapshotCountOutputType
     */
    select?: MarketSnapshotCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MarketSnapshotCountOutputType without action
   */
  export type MarketSnapshotCountOutputTypeCountAttentionEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttentionEventWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    googleId: string | null
    authProvider: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    googleId: string | null
    authProvider: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    passwordHash: number
    googleId: number
    authProvider: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    googleId?: true
    authProvider?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    googleId?: true
    authProvider?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    googleId?: true
    authProvider?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    passwordHash: string | null
    googleId: string | null
    authProvider: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    googleId?: boolean
    authProvider?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    watchlists?: boolean | User$watchlistsArgs<ExtArgs>
    checkpoints?: boolean | User$checkpointsArgs<ExtArgs>
    attentionEvents?: boolean | User$attentionEventsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    googleId?: boolean
    authProvider?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    googleId?: boolean
    authProvider?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    googleId?: boolean
    authProvider?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "passwordHash" | "googleId" | "authProvider" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    watchlists?: boolean | User$watchlistsArgs<ExtArgs>
    checkpoints?: boolean | User$checkpointsArgs<ExtArgs>
    attentionEvents?: boolean | User$attentionEventsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      watchlists: Prisma.$WatchlistPayload<ExtArgs>[]
      checkpoints: Prisma.$UserStockCheckpointPayload<ExtArgs>[]
      attentionEvents: Prisma.$AttentionEventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      passwordHash: string | null
      googleId: string | null
      authProvider: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    watchlists<T extends User$watchlistsArgs<ExtArgs> = {}>(args?: Subset<T, User$watchlistsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    checkpoints<T extends User$checkpointsArgs<ExtArgs> = {}>(args?: Subset<T, User$checkpointsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserStockCheckpointPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    attentionEvents<T extends User$attentionEventsArgs<ExtArgs> = {}>(args?: Subset<T, User$attentionEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttentionEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly googleId: FieldRef<"User", 'String'>
    readonly authProvider: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.watchlists
   */
  export type User$watchlistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistInclude<ExtArgs> | null
    where?: WatchlistWhereInput
    orderBy?: WatchlistOrderByWithRelationInput | WatchlistOrderByWithRelationInput[]
    cursor?: WatchlistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WatchlistScalarFieldEnum | WatchlistScalarFieldEnum[]
  }

  /**
   * User.checkpoints
   */
  export type User$checkpointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStockCheckpoint
     */
    select?: UserStockCheckpointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStockCheckpoint
     */
    omit?: UserStockCheckpointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStockCheckpointInclude<ExtArgs> | null
    where?: UserStockCheckpointWhereInput
    orderBy?: UserStockCheckpointOrderByWithRelationInput | UserStockCheckpointOrderByWithRelationInput[]
    cursor?: UserStockCheckpointWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserStockCheckpointScalarFieldEnum | UserStockCheckpointScalarFieldEnum[]
  }

  /**
   * User.attentionEvents
   */
  export type User$attentionEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttentionEvent
     */
    select?: AttentionEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttentionEvent
     */
    omit?: AttentionEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttentionEventInclude<ExtArgs> | null
    where?: AttentionEventWhereInput
    orderBy?: AttentionEventOrderByWithRelationInput | AttentionEventOrderByWithRelationInput[]
    cursor?: AttentionEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttentionEventScalarFieldEnum | AttentionEventScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Watchlist
   */

  export type AggregateWatchlist = {
    _count: WatchlistCountAggregateOutputType | null
    _min: WatchlistMinAggregateOutputType | null
    _max: WatchlistMaxAggregateOutputType | null
  }

  export type WatchlistMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    createdAt: Date | null
  }

  export type WatchlistMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    createdAt: Date | null
  }

  export type WatchlistCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    createdAt: number
    _all: number
  }


  export type WatchlistMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    createdAt?: true
  }

  export type WatchlistMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    createdAt?: true
  }

  export type WatchlistCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    createdAt?: true
    _all?: true
  }

  export type WatchlistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Watchlist to aggregate.
     */
    where?: WatchlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Watchlists to fetch.
     */
    orderBy?: WatchlistOrderByWithRelationInput | WatchlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WatchlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Watchlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Watchlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Watchlists
    **/
    _count?: true | WatchlistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WatchlistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WatchlistMaxAggregateInputType
  }

  export type GetWatchlistAggregateType<T extends WatchlistAggregateArgs> = {
        [P in keyof T & keyof AggregateWatchlist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWatchlist[P]>
      : GetScalarType<T[P], AggregateWatchlist[P]>
  }




  export type WatchlistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WatchlistWhereInput
    orderBy?: WatchlistOrderByWithAggregationInput | WatchlistOrderByWithAggregationInput[]
    by: WatchlistScalarFieldEnum[] | WatchlistScalarFieldEnum
    having?: WatchlistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WatchlistCountAggregateInputType | true
    _min?: WatchlistMinAggregateInputType
    _max?: WatchlistMaxAggregateInputType
  }

  export type WatchlistGroupByOutputType = {
    id: string
    userId: string
    name: string
    createdAt: Date
    _count: WatchlistCountAggregateOutputType | null
    _min: WatchlistMinAggregateOutputType | null
    _max: WatchlistMaxAggregateOutputType | null
  }

  type GetWatchlistGroupByPayload<T extends WatchlistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WatchlistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WatchlistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WatchlistGroupByOutputType[P]>
            : GetScalarType<T[P], WatchlistGroupByOutputType[P]>
        }
      >
    >


  export type WatchlistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    items?: boolean | Watchlist$itemsArgs<ExtArgs>
    _count?: boolean | WatchlistCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["watchlist"]>

  export type WatchlistSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["watchlist"]>

  export type WatchlistSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["watchlist"]>

  export type WatchlistSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    createdAt?: boolean
  }

  export type WatchlistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "createdAt", ExtArgs["result"]["watchlist"]>
  export type WatchlistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    items?: boolean | Watchlist$itemsArgs<ExtArgs>
    _count?: boolean | WatchlistCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WatchlistIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WatchlistIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WatchlistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Watchlist"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      items: Prisma.$WatchlistItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      createdAt: Date
    }, ExtArgs["result"]["watchlist"]>
    composites: {}
  }

  type WatchlistGetPayload<S extends boolean | null | undefined | WatchlistDefaultArgs> = $Result.GetResult<Prisma.$WatchlistPayload, S>

  type WatchlistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WatchlistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WatchlistCountAggregateInputType | true
    }

  export interface WatchlistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Watchlist'], meta: { name: 'Watchlist' } }
    /**
     * Find zero or one Watchlist that matches the filter.
     * @param {WatchlistFindUniqueArgs} args - Arguments to find a Watchlist
     * @example
     * // Get one Watchlist
     * const watchlist = await prisma.watchlist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WatchlistFindUniqueArgs>(args: SelectSubset<T, WatchlistFindUniqueArgs<ExtArgs>>): Prisma__WatchlistClient<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Watchlist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WatchlistFindUniqueOrThrowArgs} args - Arguments to find a Watchlist
     * @example
     * // Get one Watchlist
     * const watchlist = await prisma.watchlist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WatchlistFindUniqueOrThrowArgs>(args: SelectSubset<T, WatchlistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WatchlistClient<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Watchlist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistFindFirstArgs} args - Arguments to find a Watchlist
     * @example
     * // Get one Watchlist
     * const watchlist = await prisma.watchlist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WatchlistFindFirstArgs>(args?: SelectSubset<T, WatchlistFindFirstArgs<ExtArgs>>): Prisma__WatchlistClient<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Watchlist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistFindFirstOrThrowArgs} args - Arguments to find a Watchlist
     * @example
     * // Get one Watchlist
     * const watchlist = await prisma.watchlist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WatchlistFindFirstOrThrowArgs>(args?: SelectSubset<T, WatchlistFindFirstOrThrowArgs<ExtArgs>>): Prisma__WatchlistClient<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Watchlists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Watchlists
     * const watchlists = await prisma.watchlist.findMany()
     * 
     * // Get first 10 Watchlists
     * const watchlists = await prisma.watchlist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const watchlistWithIdOnly = await prisma.watchlist.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WatchlistFindManyArgs>(args?: SelectSubset<T, WatchlistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Watchlist.
     * @param {WatchlistCreateArgs} args - Arguments to create a Watchlist.
     * @example
     * // Create one Watchlist
     * const Watchlist = await prisma.watchlist.create({
     *   data: {
     *     // ... data to create a Watchlist
     *   }
     * })
     * 
     */
    create<T extends WatchlistCreateArgs>(args: SelectSubset<T, WatchlistCreateArgs<ExtArgs>>): Prisma__WatchlistClient<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Watchlists.
     * @param {WatchlistCreateManyArgs} args - Arguments to create many Watchlists.
     * @example
     * // Create many Watchlists
     * const watchlist = await prisma.watchlist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WatchlistCreateManyArgs>(args?: SelectSubset<T, WatchlistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Watchlists and returns the data saved in the database.
     * @param {WatchlistCreateManyAndReturnArgs} args - Arguments to create many Watchlists.
     * @example
     * // Create many Watchlists
     * const watchlist = await prisma.watchlist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Watchlists and only return the `id`
     * const watchlistWithIdOnly = await prisma.watchlist.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WatchlistCreateManyAndReturnArgs>(args?: SelectSubset<T, WatchlistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Watchlist.
     * @param {WatchlistDeleteArgs} args - Arguments to delete one Watchlist.
     * @example
     * // Delete one Watchlist
     * const Watchlist = await prisma.watchlist.delete({
     *   where: {
     *     // ... filter to delete one Watchlist
     *   }
     * })
     * 
     */
    delete<T extends WatchlistDeleteArgs>(args: SelectSubset<T, WatchlistDeleteArgs<ExtArgs>>): Prisma__WatchlistClient<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Watchlist.
     * @param {WatchlistUpdateArgs} args - Arguments to update one Watchlist.
     * @example
     * // Update one Watchlist
     * const watchlist = await prisma.watchlist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WatchlistUpdateArgs>(args: SelectSubset<T, WatchlistUpdateArgs<ExtArgs>>): Prisma__WatchlistClient<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Watchlists.
     * @param {WatchlistDeleteManyArgs} args - Arguments to filter Watchlists to delete.
     * @example
     * // Delete a few Watchlists
     * const { count } = await prisma.watchlist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WatchlistDeleteManyArgs>(args?: SelectSubset<T, WatchlistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Watchlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Watchlists
     * const watchlist = await prisma.watchlist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WatchlistUpdateManyArgs>(args: SelectSubset<T, WatchlistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Watchlists and returns the data updated in the database.
     * @param {WatchlistUpdateManyAndReturnArgs} args - Arguments to update many Watchlists.
     * @example
     * // Update many Watchlists
     * const watchlist = await prisma.watchlist.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Watchlists and only return the `id`
     * const watchlistWithIdOnly = await prisma.watchlist.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WatchlistUpdateManyAndReturnArgs>(args: SelectSubset<T, WatchlistUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Watchlist.
     * @param {WatchlistUpsertArgs} args - Arguments to update or create a Watchlist.
     * @example
     * // Update or create a Watchlist
     * const watchlist = await prisma.watchlist.upsert({
     *   create: {
     *     // ... data to create a Watchlist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Watchlist we want to update
     *   }
     * })
     */
    upsert<T extends WatchlistUpsertArgs>(args: SelectSubset<T, WatchlistUpsertArgs<ExtArgs>>): Prisma__WatchlistClient<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Watchlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistCountArgs} args - Arguments to filter Watchlists to count.
     * @example
     * // Count the number of Watchlists
     * const count = await prisma.watchlist.count({
     *   where: {
     *     // ... the filter for the Watchlists we want to count
     *   }
     * })
    **/
    count<T extends WatchlistCountArgs>(
      args?: Subset<T, WatchlistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WatchlistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Watchlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WatchlistAggregateArgs>(args: Subset<T, WatchlistAggregateArgs>): Prisma.PrismaPromise<GetWatchlistAggregateType<T>>

    /**
     * Group by Watchlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WatchlistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WatchlistGroupByArgs['orderBy'] }
        : { orderBy?: WatchlistGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WatchlistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWatchlistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Watchlist model
   */
  readonly fields: WatchlistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Watchlist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WatchlistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends Watchlist$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Watchlist$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchlistItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Watchlist model
   */
  interface WatchlistFieldRefs {
    readonly id: FieldRef<"Watchlist", 'String'>
    readonly userId: FieldRef<"Watchlist", 'String'>
    readonly name: FieldRef<"Watchlist", 'String'>
    readonly createdAt: FieldRef<"Watchlist", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Watchlist findUnique
   */
  export type WatchlistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistInclude<ExtArgs> | null
    /**
     * Filter, which Watchlist to fetch.
     */
    where: WatchlistWhereUniqueInput
  }

  /**
   * Watchlist findUniqueOrThrow
   */
  export type WatchlistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistInclude<ExtArgs> | null
    /**
     * Filter, which Watchlist to fetch.
     */
    where: WatchlistWhereUniqueInput
  }

  /**
   * Watchlist findFirst
   */
  export type WatchlistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistInclude<ExtArgs> | null
    /**
     * Filter, which Watchlist to fetch.
     */
    where?: WatchlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Watchlists to fetch.
     */
    orderBy?: WatchlistOrderByWithRelationInput | WatchlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Watchlists.
     */
    cursor?: WatchlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Watchlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Watchlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Watchlists.
     */
    distinct?: WatchlistScalarFieldEnum | WatchlistScalarFieldEnum[]
  }

  /**
   * Watchlist findFirstOrThrow
   */
  export type WatchlistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistInclude<ExtArgs> | null
    /**
     * Filter, which Watchlist to fetch.
     */
    where?: WatchlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Watchlists to fetch.
     */
    orderBy?: WatchlistOrderByWithRelationInput | WatchlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Watchlists.
     */
    cursor?: WatchlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Watchlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Watchlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Watchlists.
     */
    distinct?: WatchlistScalarFieldEnum | WatchlistScalarFieldEnum[]
  }

  /**
   * Watchlist findMany
   */
  export type WatchlistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistInclude<ExtArgs> | null
    /**
     * Filter, which Watchlists to fetch.
     */
    where?: WatchlistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Watchlists to fetch.
     */
    orderBy?: WatchlistOrderByWithRelationInput | WatchlistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Watchlists.
     */
    cursor?: WatchlistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Watchlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Watchlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Watchlists.
     */
    distinct?: WatchlistScalarFieldEnum | WatchlistScalarFieldEnum[]
  }

  /**
   * Watchlist create
   */
  export type WatchlistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistInclude<ExtArgs> | null
    /**
     * The data needed to create a Watchlist.
     */
    data: XOR<WatchlistCreateInput, WatchlistUncheckedCreateInput>
  }

  /**
   * Watchlist createMany
   */
  export type WatchlistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Watchlists.
     */
    data: WatchlistCreateManyInput | WatchlistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Watchlist createManyAndReturn
   */
  export type WatchlistCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * The data used to create many Watchlists.
     */
    data: WatchlistCreateManyInput | WatchlistCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Watchlist update
   */
  export type WatchlistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistInclude<ExtArgs> | null
    /**
     * The data needed to update a Watchlist.
     */
    data: XOR<WatchlistUpdateInput, WatchlistUncheckedUpdateInput>
    /**
     * Choose, which Watchlist to update.
     */
    where: WatchlistWhereUniqueInput
  }

  /**
   * Watchlist updateMany
   */
  export type WatchlistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Watchlists.
     */
    data: XOR<WatchlistUpdateManyMutationInput, WatchlistUncheckedUpdateManyInput>
    /**
     * Filter which Watchlists to update
     */
    where?: WatchlistWhereInput
    /**
     * Limit how many Watchlists to update.
     */
    limit?: number
  }

  /**
   * Watchlist updateManyAndReturn
   */
  export type WatchlistUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * The data used to update Watchlists.
     */
    data: XOR<WatchlistUpdateManyMutationInput, WatchlistUncheckedUpdateManyInput>
    /**
     * Filter which Watchlists to update
     */
    where?: WatchlistWhereInput
    /**
     * Limit how many Watchlists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Watchlist upsert
   */
  export type WatchlistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistInclude<ExtArgs> | null
    /**
     * The filter to search for the Watchlist to update in case it exists.
     */
    where: WatchlistWhereUniqueInput
    /**
     * In case the Watchlist found by the `where` argument doesn't exist, create a new Watchlist with this data.
     */
    create: XOR<WatchlistCreateInput, WatchlistUncheckedCreateInput>
    /**
     * In case the Watchlist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WatchlistUpdateInput, WatchlistUncheckedUpdateInput>
  }

  /**
   * Watchlist delete
   */
  export type WatchlistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistInclude<ExtArgs> | null
    /**
     * Filter which Watchlist to delete.
     */
    where: WatchlistWhereUniqueInput
  }

  /**
   * Watchlist deleteMany
   */
  export type WatchlistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Watchlists to delete
     */
    where?: WatchlistWhereInput
    /**
     * Limit how many Watchlists to delete.
     */
    limit?: number
  }

  /**
   * Watchlist.items
   */
  export type Watchlist$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchlistItem
     */
    select?: WatchlistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchlistItem
     */
    omit?: WatchlistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistItemInclude<ExtArgs> | null
    where?: WatchlistItemWhereInput
    orderBy?: WatchlistItemOrderByWithRelationInput | WatchlistItemOrderByWithRelationInput[]
    cursor?: WatchlistItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WatchlistItemScalarFieldEnum | WatchlistItemScalarFieldEnum[]
  }

  /**
   * Watchlist without action
   */
  export type WatchlistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watchlist
     */
    select?: WatchlistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Watchlist
     */
    omit?: WatchlistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistInclude<ExtArgs> | null
  }


  /**
   * Model Stock
   */

  export type AggregateStock = {
    _count: StockCountAggregateOutputType | null
    _min: StockMinAggregateOutputType | null
    _max: StockMaxAggregateOutputType | null
  }

  export type StockMinAggregateOutputType = {
    id: string | null
    symbol: string | null
    name: string | null
    exchange: string | null
  }

  export type StockMaxAggregateOutputType = {
    id: string | null
    symbol: string | null
    name: string | null
    exchange: string | null
  }

  export type StockCountAggregateOutputType = {
    id: number
    symbol: number
    name: number
    exchange: number
    _all: number
  }


  export type StockMinAggregateInputType = {
    id?: true
    symbol?: true
    name?: true
    exchange?: true
  }

  export type StockMaxAggregateInputType = {
    id?: true
    symbol?: true
    name?: true
    exchange?: true
  }

  export type StockCountAggregateInputType = {
    id?: true
    symbol?: true
    name?: true
    exchange?: true
    _all?: true
  }

  export type StockAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stock to aggregate.
     */
    where?: StockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stocks to fetch.
     */
    orderBy?: StockOrderByWithRelationInput | StockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stocks
    **/
    _count?: true | StockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StockMaxAggregateInputType
  }

  export type GetStockAggregateType<T extends StockAggregateArgs> = {
        [P in keyof T & keyof AggregateStock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStock[P]>
      : GetScalarType<T[P], AggregateStock[P]>
  }




  export type StockGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockWhereInput
    orderBy?: StockOrderByWithAggregationInput | StockOrderByWithAggregationInput[]
    by: StockScalarFieldEnum[] | StockScalarFieldEnum
    having?: StockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StockCountAggregateInputType | true
    _min?: StockMinAggregateInputType
    _max?: StockMaxAggregateInputType
  }

  export type StockGroupByOutputType = {
    id: string
    symbol: string
    name: string
    exchange: string
    _count: StockCountAggregateOutputType | null
    _min: StockMinAggregateOutputType | null
    _max: StockMaxAggregateOutputType | null
  }

  type GetStockGroupByPayload<T extends StockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StockGroupByOutputType[P]>
            : GetScalarType<T[P], StockGroupByOutputType[P]>
        }
      >
    >


  export type StockSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    symbol?: boolean
    name?: boolean
    exchange?: boolean
    watchlistItems?: boolean | Stock$watchlistItemsArgs<ExtArgs>
    snapshots?: boolean | Stock$snapshotsArgs<ExtArgs>
    checkpoints?: boolean | Stock$checkpointsArgs<ExtArgs>
    attentionEvents?: boolean | Stock$attentionEventsArgs<ExtArgs>
    _count?: boolean | StockCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stock"]>

  export type StockSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    symbol?: boolean
    name?: boolean
    exchange?: boolean
  }, ExtArgs["result"]["stock"]>

  export type StockSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    symbol?: boolean
    name?: boolean
    exchange?: boolean
  }, ExtArgs["result"]["stock"]>

  export type StockSelectScalar = {
    id?: boolean
    symbol?: boolean
    name?: boolean
    exchange?: boolean
  }

  export type StockOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "symbol" | "name" | "exchange", ExtArgs["result"]["stock"]>
  export type StockInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    watchlistItems?: boolean | Stock$watchlistItemsArgs<ExtArgs>
    snapshots?: boolean | Stock$snapshotsArgs<ExtArgs>
    checkpoints?: boolean | Stock$checkpointsArgs<ExtArgs>
    attentionEvents?: boolean | Stock$attentionEventsArgs<ExtArgs>
    _count?: boolean | StockCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StockIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type StockIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Stock"
    objects: {
      watchlistItems: Prisma.$WatchlistItemPayload<ExtArgs>[]
      snapshots: Prisma.$MarketSnapshotPayload<ExtArgs>[]
      checkpoints: Prisma.$UserStockCheckpointPayload<ExtArgs>[]
      attentionEvents: Prisma.$AttentionEventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      symbol: string
      name: string
      exchange: string
    }, ExtArgs["result"]["stock"]>
    composites: {}
  }

  type StockGetPayload<S extends boolean | null | undefined | StockDefaultArgs> = $Result.GetResult<Prisma.$StockPayload, S>

  type StockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StockFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StockCountAggregateInputType | true
    }

  export interface StockDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Stock'], meta: { name: 'Stock' } }
    /**
     * Find zero or one Stock that matches the filter.
     * @param {StockFindUniqueArgs} args - Arguments to find a Stock
     * @example
     * // Get one Stock
     * const stock = await prisma.stock.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StockFindUniqueArgs>(args: SelectSubset<T, StockFindUniqueArgs<ExtArgs>>): Prisma__StockClient<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Stock that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StockFindUniqueOrThrowArgs} args - Arguments to find a Stock
     * @example
     * // Get one Stock
     * const stock = await prisma.stock.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StockFindUniqueOrThrowArgs>(args: SelectSubset<T, StockFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StockClient<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stock that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockFindFirstArgs} args - Arguments to find a Stock
     * @example
     * // Get one Stock
     * const stock = await prisma.stock.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StockFindFirstArgs>(args?: SelectSubset<T, StockFindFirstArgs<ExtArgs>>): Prisma__StockClient<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stock that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockFindFirstOrThrowArgs} args - Arguments to find a Stock
     * @example
     * // Get one Stock
     * const stock = await prisma.stock.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StockFindFirstOrThrowArgs>(args?: SelectSubset<T, StockFindFirstOrThrowArgs<ExtArgs>>): Prisma__StockClient<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stocks
     * const stocks = await prisma.stock.findMany()
     * 
     * // Get first 10 Stocks
     * const stocks = await prisma.stock.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stockWithIdOnly = await prisma.stock.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StockFindManyArgs>(args?: SelectSubset<T, StockFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Stock.
     * @param {StockCreateArgs} args - Arguments to create a Stock.
     * @example
     * // Create one Stock
     * const Stock = await prisma.stock.create({
     *   data: {
     *     // ... data to create a Stock
     *   }
     * })
     * 
     */
    create<T extends StockCreateArgs>(args: SelectSubset<T, StockCreateArgs<ExtArgs>>): Prisma__StockClient<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stocks.
     * @param {StockCreateManyArgs} args - Arguments to create many Stocks.
     * @example
     * // Create many Stocks
     * const stock = await prisma.stock.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StockCreateManyArgs>(args?: SelectSubset<T, StockCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stocks and returns the data saved in the database.
     * @param {StockCreateManyAndReturnArgs} args - Arguments to create many Stocks.
     * @example
     * // Create many Stocks
     * const stock = await prisma.stock.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stocks and only return the `id`
     * const stockWithIdOnly = await prisma.stock.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StockCreateManyAndReturnArgs>(args?: SelectSubset<T, StockCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Stock.
     * @param {StockDeleteArgs} args - Arguments to delete one Stock.
     * @example
     * // Delete one Stock
     * const Stock = await prisma.stock.delete({
     *   where: {
     *     // ... filter to delete one Stock
     *   }
     * })
     * 
     */
    delete<T extends StockDeleteArgs>(args: SelectSubset<T, StockDeleteArgs<ExtArgs>>): Prisma__StockClient<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Stock.
     * @param {StockUpdateArgs} args - Arguments to update one Stock.
     * @example
     * // Update one Stock
     * const stock = await prisma.stock.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StockUpdateArgs>(args: SelectSubset<T, StockUpdateArgs<ExtArgs>>): Prisma__StockClient<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stocks.
     * @param {StockDeleteManyArgs} args - Arguments to filter Stocks to delete.
     * @example
     * // Delete a few Stocks
     * const { count } = await prisma.stock.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StockDeleteManyArgs>(args?: SelectSubset<T, StockDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stocks
     * const stock = await prisma.stock.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StockUpdateManyArgs>(args: SelectSubset<T, StockUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stocks and returns the data updated in the database.
     * @param {StockUpdateManyAndReturnArgs} args - Arguments to update many Stocks.
     * @example
     * // Update many Stocks
     * const stock = await prisma.stock.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Stocks and only return the `id`
     * const stockWithIdOnly = await prisma.stock.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StockUpdateManyAndReturnArgs>(args: SelectSubset<T, StockUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Stock.
     * @param {StockUpsertArgs} args - Arguments to update or create a Stock.
     * @example
     * // Update or create a Stock
     * const stock = await prisma.stock.upsert({
     *   create: {
     *     // ... data to create a Stock
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stock we want to update
     *   }
     * })
     */
    upsert<T extends StockUpsertArgs>(args: SelectSubset<T, StockUpsertArgs<ExtArgs>>): Prisma__StockClient<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockCountArgs} args - Arguments to filter Stocks to count.
     * @example
     * // Count the number of Stocks
     * const count = await prisma.stock.count({
     *   where: {
     *     // ... the filter for the Stocks we want to count
     *   }
     * })
    **/
    count<T extends StockCountArgs>(
      args?: Subset<T, StockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StockAggregateArgs>(args: Subset<T, StockAggregateArgs>): Prisma.PrismaPromise<GetStockAggregateType<T>>

    /**
     * Group by Stock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StockGroupByArgs['orderBy'] }
        : { orderBy?: StockGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Stock model
   */
  readonly fields: StockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Stock.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StockClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    watchlistItems<T extends Stock$watchlistItemsArgs<ExtArgs> = {}>(args?: Subset<T, Stock$watchlistItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchlistItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    snapshots<T extends Stock$snapshotsArgs<ExtArgs> = {}>(args?: Subset<T, Stock$snapshotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketSnapshotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    checkpoints<T extends Stock$checkpointsArgs<ExtArgs> = {}>(args?: Subset<T, Stock$checkpointsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserStockCheckpointPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    attentionEvents<T extends Stock$attentionEventsArgs<ExtArgs> = {}>(args?: Subset<T, Stock$attentionEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttentionEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Stock model
   */
  interface StockFieldRefs {
    readonly id: FieldRef<"Stock", 'String'>
    readonly symbol: FieldRef<"Stock", 'String'>
    readonly name: FieldRef<"Stock", 'String'>
    readonly exchange: FieldRef<"Stock", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Stock findUnique
   */
  export type StockFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
    /**
     * Filter, which Stock to fetch.
     */
    where: StockWhereUniqueInput
  }

  /**
   * Stock findUniqueOrThrow
   */
  export type StockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
    /**
     * Filter, which Stock to fetch.
     */
    where: StockWhereUniqueInput
  }

  /**
   * Stock findFirst
   */
  export type StockFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
    /**
     * Filter, which Stock to fetch.
     */
    where?: StockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stocks to fetch.
     */
    orderBy?: StockOrderByWithRelationInput | StockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stocks.
     */
    cursor?: StockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stocks.
     */
    distinct?: StockScalarFieldEnum | StockScalarFieldEnum[]
  }

  /**
   * Stock findFirstOrThrow
   */
  export type StockFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
    /**
     * Filter, which Stock to fetch.
     */
    where?: StockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stocks to fetch.
     */
    orderBy?: StockOrderByWithRelationInput | StockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stocks.
     */
    cursor?: StockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stocks.
     */
    distinct?: StockScalarFieldEnum | StockScalarFieldEnum[]
  }

  /**
   * Stock findMany
   */
  export type StockFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
    /**
     * Filter, which Stocks to fetch.
     */
    where?: StockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stocks to fetch.
     */
    orderBy?: StockOrderByWithRelationInput | StockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stocks.
     */
    cursor?: StockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stocks.
     */
    distinct?: StockScalarFieldEnum | StockScalarFieldEnum[]
  }

  /**
   * Stock create
   */
  export type StockCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
    /**
     * The data needed to create a Stock.
     */
    data: XOR<StockCreateInput, StockUncheckedCreateInput>
  }

  /**
   * Stock createMany
   */
  export type StockCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stocks.
     */
    data: StockCreateManyInput | StockCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Stock createManyAndReturn
   */
  export type StockCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * The data used to create many Stocks.
     */
    data: StockCreateManyInput | StockCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Stock update
   */
  export type StockUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
    /**
     * The data needed to update a Stock.
     */
    data: XOR<StockUpdateInput, StockUncheckedUpdateInput>
    /**
     * Choose, which Stock to update.
     */
    where: StockWhereUniqueInput
  }

  /**
   * Stock updateMany
   */
  export type StockUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stocks.
     */
    data: XOR<StockUpdateManyMutationInput, StockUncheckedUpdateManyInput>
    /**
     * Filter which Stocks to update
     */
    where?: StockWhereInput
    /**
     * Limit how many Stocks to update.
     */
    limit?: number
  }

  /**
   * Stock updateManyAndReturn
   */
  export type StockUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * The data used to update Stocks.
     */
    data: XOR<StockUpdateManyMutationInput, StockUncheckedUpdateManyInput>
    /**
     * Filter which Stocks to update
     */
    where?: StockWhereInput
    /**
     * Limit how many Stocks to update.
     */
    limit?: number
  }

  /**
   * Stock upsert
   */
  export type StockUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
    /**
     * The filter to search for the Stock to update in case it exists.
     */
    where: StockWhereUniqueInput
    /**
     * In case the Stock found by the `where` argument doesn't exist, create a new Stock with this data.
     */
    create: XOR<StockCreateInput, StockUncheckedCreateInput>
    /**
     * In case the Stock was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StockUpdateInput, StockUncheckedUpdateInput>
  }

  /**
   * Stock delete
   */
  export type StockDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
    /**
     * Filter which Stock to delete.
     */
    where: StockWhereUniqueInput
  }

  /**
   * Stock deleteMany
   */
  export type StockDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stocks to delete
     */
    where?: StockWhereInput
    /**
     * Limit how many Stocks to delete.
     */
    limit?: number
  }

  /**
   * Stock.watchlistItems
   */
  export type Stock$watchlistItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchlistItem
     */
    select?: WatchlistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchlistItem
     */
    omit?: WatchlistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistItemInclude<ExtArgs> | null
    where?: WatchlistItemWhereInput
    orderBy?: WatchlistItemOrderByWithRelationInput | WatchlistItemOrderByWithRelationInput[]
    cursor?: WatchlistItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WatchlistItemScalarFieldEnum | WatchlistItemScalarFieldEnum[]
  }

  /**
   * Stock.snapshots
   */
  export type Stock$snapshotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketSnapshot
     */
    select?: MarketSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketSnapshot
     */
    omit?: MarketSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketSnapshotInclude<ExtArgs> | null
    where?: MarketSnapshotWhereInput
    orderBy?: MarketSnapshotOrderByWithRelationInput | MarketSnapshotOrderByWithRelationInput[]
    cursor?: MarketSnapshotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MarketSnapshotScalarFieldEnum | MarketSnapshotScalarFieldEnum[]
  }

  /**
   * Stock.checkpoints
   */
  export type Stock$checkpointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStockCheckpoint
     */
    select?: UserStockCheckpointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStockCheckpoint
     */
    omit?: UserStockCheckpointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStockCheckpointInclude<ExtArgs> | null
    where?: UserStockCheckpointWhereInput
    orderBy?: UserStockCheckpointOrderByWithRelationInput | UserStockCheckpointOrderByWithRelationInput[]
    cursor?: UserStockCheckpointWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserStockCheckpointScalarFieldEnum | UserStockCheckpointScalarFieldEnum[]
  }

  /**
   * Stock.attentionEvents
   */
  export type Stock$attentionEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttentionEvent
     */
    select?: AttentionEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttentionEvent
     */
    omit?: AttentionEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttentionEventInclude<ExtArgs> | null
    where?: AttentionEventWhereInput
    orderBy?: AttentionEventOrderByWithRelationInput | AttentionEventOrderByWithRelationInput[]
    cursor?: AttentionEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttentionEventScalarFieldEnum | AttentionEventScalarFieldEnum[]
  }

  /**
   * Stock without action
   */
  export type StockDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
  }


  /**
   * Model WatchlistItem
   */

  export type AggregateWatchlistItem = {
    _count: WatchlistItemCountAggregateOutputType | null
    _avg: WatchlistItemAvgAggregateOutputType | null
    _sum: WatchlistItemSumAggregateOutputType | null
    _min: WatchlistItemMinAggregateOutputType | null
    _max: WatchlistItemMaxAggregateOutputType | null
  }

  export type WatchlistItemAvgAggregateOutputType = {
    purchasePrice: Decimal | null
    targetPrice: Decimal | null
  }

  export type WatchlistItemSumAggregateOutputType = {
    purchasePrice: Decimal | null
    targetPrice: Decimal | null
  }

  export type WatchlistItemMinAggregateOutputType = {
    id: string | null
    watchlistId: string | null
    stockId: string | null
    intent: $Enums.WatchIntent | null
    purchasePrice: Decimal | null
    targetPrice: Decimal | null
    addedAt: Date | null
  }

  export type WatchlistItemMaxAggregateOutputType = {
    id: string | null
    watchlistId: string | null
    stockId: string | null
    intent: $Enums.WatchIntent | null
    purchasePrice: Decimal | null
    targetPrice: Decimal | null
    addedAt: Date | null
  }

  export type WatchlistItemCountAggregateOutputType = {
    id: number
    watchlistId: number
    stockId: number
    intent: number
    purchasePrice: number
    targetPrice: number
    addedAt: number
    _all: number
  }


  export type WatchlistItemAvgAggregateInputType = {
    purchasePrice?: true
    targetPrice?: true
  }

  export type WatchlistItemSumAggregateInputType = {
    purchasePrice?: true
    targetPrice?: true
  }

  export type WatchlistItemMinAggregateInputType = {
    id?: true
    watchlistId?: true
    stockId?: true
    intent?: true
    purchasePrice?: true
    targetPrice?: true
    addedAt?: true
  }

  export type WatchlistItemMaxAggregateInputType = {
    id?: true
    watchlistId?: true
    stockId?: true
    intent?: true
    purchasePrice?: true
    targetPrice?: true
    addedAt?: true
  }

  export type WatchlistItemCountAggregateInputType = {
    id?: true
    watchlistId?: true
    stockId?: true
    intent?: true
    purchasePrice?: true
    targetPrice?: true
    addedAt?: true
    _all?: true
  }

  export type WatchlistItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WatchlistItem to aggregate.
     */
    where?: WatchlistItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WatchlistItems to fetch.
     */
    orderBy?: WatchlistItemOrderByWithRelationInput | WatchlistItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WatchlistItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WatchlistItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WatchlistItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WatchlistItems
    **/
    _count?: true | WatchlistItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WatchlistItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WatchlistItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WatchlistItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WatchlistItemMaxAggregateInputType
  }

  export type GetWatchlistItemAggregateType<T extends WatchlistItemAggregateArgs> = {
        [P in keyof T & keyof AggregateWatchlistItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWatchlistItem[P]>
      : GetScalarType<T[P], AggregateWatchlistItem[P]>
  }




  export type WatchlistItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WatchlistItemWhereInput
    orderBy?: WatchlistItemOrderByWithAggregationInput | WatchlistItemOrderByWithAggregationInput[]
    by: WatchlistItemScalarFieldEnum[] | WatchlistItemScalarFieldEnum
    having?: WatchlistItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WatchlistItemCountAggregateInputType | true
    _avg?: WatchlistItemAvgAggregateInputType
    _sum?: WatchlistItemSumAggregateInputType
    _min?: WatchlistItemMinAggregateInputType
    _max?: WatchlistItemMaxAggregateInputType
  }

  export type WatchlistItemGroupByOutputType = {
    id: string
    watchlistId: string
    stockId: string
    intent: $Enums.WatchIntent
    purchasePrice: Decimal | null
    targetPrice: Decimal | null
    addedAt: Date
    _count: WatchlistItemCountAggregateOutputType | null
    _avg: WatchlistItemAvgAggregateOutputType | null
    _sum: WatchlistItemSumAggregateOutputType | null
    _min: WatchlistItemMinAggregateOutputType | null
    _max: WatchlistItemMaxAggregateOutputType | null
  }

  type GetWatchlistItemGroupByPayload<T extends WatchlistItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WatchlistItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WatchlistItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WatchlistItemGroupByOutputType[P]>
            : GetScalarType<T[P], WatchlistItemGroupByOutputType[P]>
        }
      >
    >


  export type WatchlistItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    watchlistId?: boolean
    stockId?: boolean
    intent?: boolean
    purchasePrice?: boolean
    targetPrice?: boolean
    addedAt?: boolean
    watchlist?: boolean | WatchlistDefaultArgs<ExtArgs>
    stock?: boolean | StockDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["watchlistItem"]>

  export type WatchlistItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    watchlistId?: boolean
    stockId?: boolean
    intent?: boolean
    purchasePrice?: boolean
    targetPrice?: boolean
    addedAt?: boolean
    watchlist?: boolean | WatchlistDefaultArgs<ExtArgs>
    stock?: boolean | StockDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["watchlistItem"]>

  export type WatchlistItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    watchlistId?: boolean
    stockId?: boolean
    intent?: boolean
    purchasePrice?: boolean
    targetPrice?: boolean
    addedAt?: boolean
    watchlist?: boolean | WatchlistDefaultArgs<ExtArgs>
    stock?: boolean | StockDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["watchlistItem"]>

  export type WatchlistItemSelectScalar = {
    id?: boolean
    watchlistId?: boolean
    stockId?: boolean
    intent?: boolean
    purchasePrice?: boolean
    targetPrice?: boolean
    addedAt?: boolean
  }

  export type WatchlistItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "watchlistId" | "stockId" | "intent" | "purchasePrice" | "targetPrice" | "addedAt", ExtArgs["result"]["watchlistItem"]>
  export type WatchlistItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    watchlist?: boolean | WatchlistDefaultArgs<ExtArgs>
    stock?: boolean | StockDefaultArgs<ExtArgs>
  }
  export type WatchlistItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    watchlist?: boolean | WatchlistDefaultArgs<ExtArgs>
    stock?: boolean | StockDefaultArgs<ExtArgs>
  }
  export type WatchlistItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    watchlist?: boolean | WatchlistDefaultArgs<ExtArgs>
    stock?: boolean | StockDefaultArgs<ExtArgs>
  }

  export type $WatchlistItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WatchlistItem"
    objects: {
      watchlist: Prisma.$WatchlistPayload<ExtArgs>
      stock: Prisma.$StockPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      watchlistId: string
      stockId: string
      intent: $Enums.WatchIntent
      purchasePrice: Prisma.Decimal | null
      targetPrice: Prisma.Decimal | null
      addedAt: Date
    }, ExtArgs["result"]["watchlistItem"]>
    composites: {}
  }

  type WatchlistItemGetPayload<S extends boolean | null | undefined | WatchlistItemDefaultArgs> = $Result.GetResult<Prisma.$WatchlistItemPayload, S>

  type WatchlistItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WatchlistItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WatchlistItemCountAggregateInputType | true
    }

  export interface WatchlistItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WatchlistItem'], meta: { name: 'WatchlistItem' } }
    /**
     * Find zero or one WatchlistItem that matches the filter.
     * @param {WatchlistItemFindUniqueArgs} args - Arguments to find a WatchlistItem
     * @example
     * // Get one WatchlistItem
     * const watchlistItem = await prisma.watchlistItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WatchlistItemFindUniqueArgs>(args: SelectSubset<T, WatchlistItemFindUniqueArgs<ExtArgs>>): Prisma__WatchlistItemClient<$Result.GetResult<Prisma.$WatchlistItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WatchlistItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WatchlistItemFindUniqueOrThrowArgs} args - Arguments to find a WatchlistItem
     * @example
     * // Get one WatchlistItem
     * const watchlistItem = await prisma.watchlistItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WatchlistItemFindUniqueOrThrowArgs>(args: SelectSubset<T, WatchlistItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WatchlistItemClient<$Result.GetResult<Prisma.$WatchlistItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WatchlistItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistItemFindFirstArgs} args - Arguments to find a WatchlistItem
     * @example
     * // Get one WatchlistItem
     * const watchlistItem = await prisma.watchlistItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WatchlistItemFindFirstArgs>(args?: SelectSubset<T, WatchlistItemFindFirstArgs<ExtArgs>>): Prisma__WatchlistItemClient<$Result.GetResult<Prisma.$WatchlistItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WatchlistItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistItemFindFirstOrThrowArgs} args - Arguments to find a WatchlistItem
     * @example
     * // Get one WatchlistItem
     * const watchlistItem = await prisma.watchlistItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WatchlistItemFindFirstOrThrowArgs>(args?: SelectSubset<T, WatchlistItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__WatchlistItemClient<$Result.GetResult<Prisma.$WatchlistItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WatchlistItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WatchlistItems
     * const watchlistItems = await prisma.watchlistItem.findMany()
     * 
     * // Get first 10 WatchlistItems
     * const watchlistItems = await prisma.watchlistItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const watchlistItemWithIdOnly = await prisma.watchlistItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WatchlistItemFindManyArgs>(args?: SelectSubset<T, WatchlistItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchlistItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WatchlistItem.
     * @param {WatchlistItemCreateArgs} args - Arguments to create a WatchlistItem.
     * @example
     * // Create one WatchlistItem
     * const WatchlistItem = await prisma.watchlistItem.create({
     *   data: {
     *     // ... data to create a WatchlistItem
     *   }
     * })
     * 
     */
    create<T extends WatchlistItemCreateArgs>(args: SelectSubset<T, WatchlistItemCreateArgs<ExtArgs>>): Prisma__WatchlistItemClient<$Result.GetResult<Prisma.$WatchlistItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WatchlistItems.
     * @param {WatchlistItemCreateManyArgs} args - Arguments to create many WatchlistItems.
     * @example
     * // Create many WatchlistItems
     * const watchlistItem = await prisma.watchlistItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WatchlistItemCreateManyArgs>(args?: SelectSubset<T, WatchlistItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WatchlistItems and returns the data saved in the database.
     * @param {WatchlistItemCreateManyAndReturnArgs} args - Arguments to create many WatchlistItems.
     * @example
     * // Create many WatchlistItems
     * const watchlistItem = await prisma.watchlistItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WatchlistItems and only return the `id`
     * const watchlistItemWithIdOnly = await prisma.watchlistItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WatchlistItemCreateManyAndReturnArgs>(args?: SelectSubset<T, WatchlistItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchlistItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WatchlistItem.
     * @param {WatchlistItemDeleteArgs} args - Arguments to delete one WatchlistItem.
     * @example
     * // Delete one WatchlistItem
     * const WatchlistItem = await prisma.watchlistItem.delete({
     *   where: {
     *     // ... filter to delete one WatchlistItem
     *   }
     * })
     * 
     */
    delete<T extends WatchlistItemDeleteArgs>(args: SelectSubset<T, WatchlistItemDeleteArgs<ExtArgs>>): Prisma__WatchlistItemClient<$Result.GetResult<Prisma.$WatchlistItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WatchlistItem.
     * @param {WatchlistItemUpdateArgs} args - Arguments to update one WatchlistItem.
     * @example
     * // Update one WatchlistItem
     * const watchlistItem = await prisma.watchlistItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WatchlistItemUpdateArgs>(args: SelectSubset<T, WatchlistItemUpdateArgs<ExtArgs>>): Prisma__WatchlistItemClient<$Result.GetResult<Prisma.$WatchlistItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WatchlistItems.
     * @param {WatchlistItemDeleteManyArgs} args - Arguments to filter WatchlistItems to delete.
     * @example
     * // Delete a few WatchlistItems
     * const { count } = await prisma.watchlistItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WatchlistItemDeleteManyArgs>(args?: SelectSubset<T, WatchlistItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WatchlistItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WatchlistItems
     * const watchlistItem = await prisma.watchlistItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WatchlistItemUpdateManyArgs>(args: SelectSubset<T, WatchlistItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WatchlistItems and returns the data updated in the database.
     * @param {WatchlistItemUpdateManyAndReturnArgs} args - Arguments to update many WatchlistItems.
     * @example
     * // Update many WatchlistItems
     * const watchlistItem = await prisma.watchlistItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WatchlistItems and only return the `id`
     * const watchlistItemWithIdOnly = await prisma.watchlistItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WatchlistItemUpdateManyAndReturnArgs>(args: SelectSubset<T, WatchlistItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatchlistItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WatchlistItem.
     * @param {WatchlistItemUpsertArgs} args - Arguments to update or create a WatchlistItem.
     * @example
     * // Update or create a WatchlistItem
     * const watchlistItem = await prisma.watchlistItem.upsert({
     *   create: {
     *     // ... data to create a WatchlistItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WatchlistItem we want to update
     *   }
     * })
     */
    upsert<T extends WatchlistItemUpsertArgs>(args: SelectSubset<T, WatchlistItemUpsertArgs<ExtArgs>>): Prisma__WatchlistItemClient<$Result.GetResult<Prisma.$WatchlistItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WatchlistItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistItemCountArgs} args - Arguments to filter WatchlistItems to count.
     * @example
     * // Count the number of WatchlistItems
     * const count = await prisma.watchlistItem.count({
     *   where: {
     *     // ... the filter for the WatchlistItems we want to count
     *   }
     * })
    **/
    count<T extends WatchlistItemCountArgs>(
      args?: Subset<T, WatchlistItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WatchlistItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WatchlistItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WatchlistItemAggregateArgs>(args: Subset<T, WatchlistItemAggregateArgs>): Prisma.PrismaPromise<GetWatchlistItemAggregateType<T>>

    /**
     * Group by WatchlistItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlistItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WatchlistItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WatchlistItemGroupByArgs['orderBy'] }
        : { orderBy?: WatchlistItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WatchlistItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWatchlistItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WatchlistItem model
   */
  readonly fields: WatchlistItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WatchlistItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WatchlistItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    watchlist<T extends WatchlistDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WatchlistDefaultArgs<ExtArgs>>): Prisma__WatchlistClient<$Result.GetResult<Prisma.$WatchlistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    stock<T extends StockDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StockDefaultArgs<ExtArgs>>): Prisma__StockClient<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WatchlistItem model
   */
  interface WatchlistItemFieldRefs {
    readonly id: FieldRef<"WatchlistItem", 'String'>
    readonly watchlistId: FieldRef<"WatchlistItem", 'String'>
    readonly stockId: FieldRef<"WatchlistItem", 'String'>
    readonly intent: FieldRef<"WatchlistItem", 'WatchIntent'>
    readonly purchasePrice: FieldRef<"WatchlistItem", 'Decimal'>
    readonly targetPrice: FieldRef<"WatchlistItem", 'Decimal'>
    readonly addedAt: FieldRef<"WatchlistItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WatchlistItem findUnique
   */
  export type WatchlistItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchlistItem
     */
    select?: WatchlistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchlistItem
     */
    omit?: WatchlistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistItemInclude<ExtArgs> | null
    /**
     * Filter, which WatchlistItem to fetch.
     */
    where: WatchlistItemWhereUniqueInput
  }

  /**
   * WatchlistItem findUniqueOrThrow
   */
  export type WatchlistItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchlistItem
     */
    select?: WatchlistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchlistItem
     */
    omit?: WatchlistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistItemInclude<ExtArgs> | null
    /**
     * Filter, which WatchlistItem to fetch.
     */
    where: WatchlistItemWhereUniqueInput
  }

  /**
   * WatchlistItem findFirst
   */
  export type WatchlistItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchlistItem
     */
    select?: WatchlistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchlistItem
     */
    omit?: WatchlistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistItemInclude<ExtArgs> | null
    /**
     * Filter, which WatchlistItem to fetch.
     */
    where?: WatchlistItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WatchlistItems to fetch.
     */
    orderBy?: WatchlistItemOrderByWithRelationInput | WatchlistItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WatchlistItems.
     */
    cursor?: WatchlistItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WatchlistItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WatchlistItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WatchlistItems.
     */
    distinct?: WatchlistItemScalarFieldEnum | WatchlistItemScalarFieldEnum[]
  }

  /**
   * WatchlistItem findFirstOrThrow
   */
  export type WatchlistItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchlistItem
     */
    select?: WatchlistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchlistItem
     */
    omit?: WatchlistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistItemInclude<ExtArgs> | null
    /**
     * Filter, which WatchlistItem to fetch.
     */
    where?: WatchlistItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WatchlistItems to fetch.
     */
    orderBy?: WatchlistItemOrderByWithRelationInput | WatchlistItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WatchlistItems.
     */
    cursor?: WatchlistItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WatchlistItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WatchlistItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WatchlistItems.
     */
    distinct?: WatchlistItemScalarFieldEnum | WatchlistItemScalarFieldEnum[]
  }

  /**
   * WatchlistItem findMany
   */
  export type WatchlistItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchlistItem
     */
    select?: WatchlistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchlistItem
     */
    omit?: WatchlistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistItemInclude<ExtArgs> | null
    /**
     * Filter, which WatchlistItems to fetch.
     */
    where?: WatchlistItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WatchlistItems to fetch.
     */
    orderBy?: WatchlistItemOrderByWithRelationInput | WatchlistItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WatchlistItems.
     */
    cursor?: WatchlistItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WatchlistItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WatchlistItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WatchlistItems.
     */
    distinct?: WatchlistItemScalarFieldEnum | WatchlistItemScalarFieldEnum[]
  }

  /**
   * WatchlistItem create
   */
  export type WatchlistItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchlistItem
     */
    select?: WatchlistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchlistItem
     */
    omit?: WatchlistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistItemInclude<ExtArgs> | null
    /**
     * The data needed to create a WatchlistItem.
     */
    data: XOR<WatchlistItemCreateInput, WatchlistItemUncheckedCreateInput>
  }

  /**
   * WatchlistItem createMany
   */
  export type WatchlistItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WatchlistItems.
     */
    data: WatchlistItemCreateManyInput | WatchlistItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WatchlistItem createManyAndReturn
   */
  export type WatchlistItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchlistItem
     */
    select?: WatchlistItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WatchlistItem
     */
    omit?: WatchlistItemOmit<ExtArgs> | null
    /**
     * The data used to create many WatchlistItems.
     */
    data: WatchlistItemCreateManyInput | WatchlistItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WatchlistItem update
   */
  export type WatchlistItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchlistItem
     */
    select?: WatchlistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchlistItem
     */
    omit?: WatchlistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistItemInclude<ExtArgs> | null
    /**
     * The data needed to update a WatchlistItem.
     */
    data: XOR<WatchlistItemUpdateInput, WatchlistItemUncheckedUpdateInput>
    /**
     * Choose, which WatchlistItem to update.
     */
    where: WatchlistItemWhereUniqueInput
  }

  /**
   * WatchlistItem updateMany
   */
  export type WatchlistItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WatchlistItems.
     */
    data: XOR<WatchlistItemUpdateManyMutationInput, WatchlistItemUncheckedUpdateManyInput>
    /**
     * Filter which WatchlistItems to update
     */
    where?: WatchlistItemWhereInput
    /**
     * Limit how many WatchlistItems to update.
     */
    limit?: number
  }

  /**
   * WatchlistItem updateManyAndReturn
   */
  export type WatchlistItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchlistItem
     */
    select?: WatchlistItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WatchlistItem
     */
    omit?: WatchlistItemOmit<ExtArgs> | null
    /**
     * The data used to update WatchlistItems.
     */
    data: XOR<WatchlistItemUpdateManyMutationInput, WatchlistItemUncheckedUpdateManyInput>
    /**
     * Filter which WatchlistItems to update
     */
    where?: WatchlistItemWhereInput
    /**
     * Limit how many WatchlistItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WatchlistItem upsert
   */
  export type WatchlistItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchlistItem
     */
    select?: WatchlistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchlistItem
     */
    omit?: WatchlistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistItemInclude<ExtArgs> | null
    /**
     * The filter to search for the WatchlistItem to update in case it exists.
     */
    where: WatchlistItemWhereUniqueInput
    /**
     * In case the WatchlistItem found by the `where` argument doesn't exist, create a new WatchlistItem with this data.
     */
    create: XOR<WatchlistItemCreateInput, WatchlistItemUncheckedCreateInput>
    /**
     * In case the WatchlistItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WatchlistItemUpdateInput, WatchlistItemUncheckedUpdateInput>
  }

  /**
   * WatchlistItem delete
   */
  export type WatchlistItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchlistItem
     */
    select?: WatchlistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchlistItem
     */
    omit?: WatchlistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistItemInclude<ExtArgs> | null
    /**
     * Filter which WatchlistItem to delete.
     */
    where: WatchlistItemWhereUniqueInput
  }

  /**
   * WatchlistItem deleteMany
   */
  export type WatchlistItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WatchlistItems to delete
     */
    where?: WatchlistItemWhereInput
    /**
     * Limit how many WatchlistItems to delete.
     */
    limit?: number
  }

  /**
   * WatchlistItem without action
   */
  export type WatchlistItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WatchlistItem
     */
    select?: WatchlistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WatchlistItem
     */
    omit?: WatchlistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WatchlistItemInclude<ExtArgs> | null
  }


  /**
   * Model MarketSnapshot
   */

  export type AggregateMarketSnapshot = {
    _count: MarketSnapshotCountAggregateOutputType | null
    _avg: MarketSnapshotAvgAggregateOutputType | null
    _sum: MarketSnapshotSumAggregateOutputType | null
    _min: MarketSnapshotMinAggregateOutputType | null
    _max: MarketSnapshotMaxAggregateOutputType | null
  }

  export type MarketSnapshotAvgAggregateOutputType = {
    price: Decimal | null
    volume: Decimal | null
    open: Decimal | null
    previousClose: Decimal | null
    dayHigh: Decimal | null
    dayLow: Decimal | null
    fiftyTwoWeekHigh: Decimal | null
    fiftyTwoWeekLow: Decimal | null
  }

  export type MarketSnapshotSumAggregateOutputType = {
    price: Decimal | null
    volume: Decimal | null
    open: Decimal | null
    previousClose: Decimal | null
    dayHigh: Decimal | null
    dayLow: Decimal | null
    fiftyTwoWeekHigh: Decimal | null
    fiftyTwoWeekLow: Decimal | null
  }

  export type MarketSnapshotMinAggregateOutputType = {
    id: string | null
    stockId: string | null
    price: Decimal | null
    volume: Decimal | null
    open: Decimal | null
    previousClose: Decimal | null
    dayHigh: Decimal | null
    dayLow: Decimal | null
    fiftyTwoWeekHigh: Decimal | null
    fiftyTwoWeekLow: Decimal | null
    marketTimestamp: Date | null
    fetchedAt: Date | null
    source: string | null
  }

  export type MarketSnapshotMaxAggregateOutputType = {
    id: string | null
    stockId: string | null
    price: Decimal | null
    volume: Decimal | null
    open: Decimal | null
    previousClose: Decimal | null
    dayHigh: Decimal | null
    dayLow: Decimal | null
    fiftyTwoWeekHigh: Decimal | null
    fiftyTwoWeekLow: Decimal | null
    marketTimestamp: Date | null
    fetchedAt: Date | null
    source: string | null
  }

  export type MarketSnapshotCountAggregateOutputType = {
    id: number
    stockId: number
    price: number
    volume: number
    open: number
    previousClose: number
    dayHigh: number
    dayLow: number
    fiftyTwoWeekHigh: number
    fiftyTwoWeekLow: number
    marketTimestamp: number
    fetchedAt: number
    source: number
    _all: number
  }


  export type MarketSnapshotAvgAggregateInputType = {
    price?: true
    volume?: true
    open?: true
    previousClose?: true
    dayHigh?: true
    dayLow?: true
    fiftyTwoWeekHigh?: true
    fiftyTwoWeekLow?: true
  }

  export type MarketSnapshotSumAggregateInputType = {
    price?: true
    volume?: true
    open?: true
    previousClose?: true
    dayHigh?: true
    dayLow?: true
    fiftyTwoWeekHigh?: true
    fiftyTwoWeekLow?: true
  }

  export type MarketSnapshotMinAggregateInputType = {
    id?: true
    stockId?: true
    price?: true
    volume?: true
    open?: true
    previousClose?: true
    dayHigh?: true
    dayLow?: true
    fiftyTwoWeekHigh?: true
    fiftyTwoWeekLow?: true
    marketTimestamp?: true
    fetchedAt?: true
    source?: true
  }

  export type MarketSnapshotMaxAggregateInputType = {
    id?: true
    stockId?: true
    price?: true
    volume?: true
    open?: true
    previousClose?: true
    dayHigh?: true
    dayLow?: true
    fiftyTwoWeekHigh?: true
    fiftyTwoWeekLow?: true
    marketTimestamp?: true
    fetchedAt?: true
    source?: true
  }

  export type MarketSnapshotCountAggregateInputType = {
    id?: true
    stockId?: true
    price?: true
    volume?: true
    open?: true
    previousClose?: true
    dayHigh?: true
    dayLow?: true
    fiftyTwoWeekHigh?: true
    fiftyTwoWeekLow?: true
    marketTimestamp?: true
    fetchedAt?: true
    source?: true
    _all?: true
  }

  export type MarketSnapshotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MarketSnapshot to aggregate.
     */
    where?: MarketSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketSnapshots to fetch.
     */
    orderBy?: MarketSnapshotOrderByWithRelationInput | MarketSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MarketSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketSnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MarketSnapshots
    **/
    _count?: true | MarketSnapshotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MarketSnapshotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MarketSnapshotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MarketSnapshotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MarketSnapshotMaxAggregateInputType
  }

  export type GetMarketSnapshotAggregateType<T extends MarketSnapshotAggregateArgs> = {
        [P in keyof T & keyof AggregateMarketSnapshot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMarketSnapshot[P]>
      : GetScalarType<T[P], AggregateMarketSnapshot[P]>
  }




  export type MarketSnapshotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarketSnapshotWhereInput
    orderBy?: MarketSnapshotOrderByWithAggregationInput | MarketSnapshotOrderByWithAggregationInput[]
    by: MarketSnapshotScalarFieldEnum[] | MarketSnapshotScalarFieldEnum
    having?: MarketSnapshotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MarketSnapshotCountAggregateInputType | true
    _avg?: MarketSnapshotAvgAggregateInputType
    _sum?: MarketSnapshotSumAggregateInputType
    _min?: MarketSnapshotMinAggregateInputType
    _max?: MarketSnapshotMaxAggregateInputType
  }

  export type MarketSnapshotGroupByOutputType = {
    id: string
    stockId: string
    price: Decimal
    volume: Decimal | null
    open: Decimal | null
    previousClose: Decimal | null
    dayHigh: Decimal | null
    dayLow: Decimal | null
    fiftyTwoWeekHigh: Decimal | null
    fiftyTwoWeekLow: Decimal | null
    marketTimestamp: Date
    fetchedAt: Date
    source: string
    _count: MarketSnapshotCountAggregateOutputType | null
    _avg: MarketSnapshotAvgAggregateOutputType | null
    _sum: MarketSnapshotSumAggregateOutputType | null
    _min: MarketSnapshotMinAggregateOutputType | null
    _max: MarketSnapshotMaxAggregateOutputType | null
  }

  type GetMarketSnapshotGroupByPayload<T extends MarketSnapshotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MarketSnapshotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MarketSnapshotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MarketSnapshotGroupByOutputType[P]>
            : GetScalarType<T[P], MarketSnapshotGroupByOutputType[P]>
        }
      >
    >


  export type MarketSnapshotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stockId?: boolean
    price?: boolean
    volume?: boolean
    open?: boolean
    previousClose?: boolean
    dayHigh?: boolean
    dayLow?: boolean
    fiftyTwoWeekHigh?: boolean
    fiftyTwoWeekLow?: boolean
    marketTimestamp?: boolean
    fetchedAt?: boolean
    source?: boolean
    stock?: boolean | StockDefaultArgs<ExtArgs>
    attentionEvents?: boolean | MarketSnapshot$attentionEventsArgs<ExtArgs>
    _count?: boolean | MarketSnapshotCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["marketSnapshot"]>

  export type MarketSnapshotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stockId?: boolean
    price?: boolean
    volume?: boolean
    open?: boolean
    previousClose?: boolean
    dayHigh?: boolean
    dayLow?: boolean
    fiftyTwoWeekHigh?: boolean
    fiftyTwoWeekLow?: boolean
    marketTimestamp?: boolean
    fetchedAt?: boolean
    source?: boolean
    stock?: boolean | StockDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["marketSnapshot"]>

  export type MarketSnapshotSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stockId?: boolean
    price?: boolean
    volume?: boolean
    open?: boolean
    previousClose?: boolean
    dayHigh?: boolean
    dayLow?: boolean
    fiftyTwoWeekHigh?: boolean
    fiftyTwoWeekLow?: boolean
    marketTimestamp?: boolean
    fetchedAt?: boolean
    source?: boolean
    stock?: boolean | StockDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["marketSnapshot"]>

  export type MarketSnapshotSelectScalar = {
    id?: boolean
    stockId?: boolean
    price?: boolean
    volume?: boolean
    open?: boolean
    previousClose?: boolean
    dayHigh?: boolean
    dayLow?: boolean
    fiftyTwoWeekHigh?: boolean
    fiftyTwoWeekLow?: boolean
    marketTimestamp?: boolean
    fetchedAt?: boolean
    source?: boolean
  }

  export type MarketSnapshotOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "stockId" | "price" | "volume" | "open" | "previousClose" | "dayHigh" | "dayLow" | "fiftyTwoWeekHigh" | "fiftyTwoWeekLow" | "marketTimestamp" | "fetchedAt" | "source", ExtArgs["result"]["marketSnapshot"]>
  export type MarketSnapshotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stock?: boolean | StockDefaultArgs<ExtArgs>
    attentionEvents?: boolean | MarketSnapshot$attentionEventsArgs<ExtArgs>
    _count?: boolean | MarketSnapshotCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MarketSnapshotIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stock?: boolean | StockDefaultArgs<ExtArgs>
  }
  export type MarketSnapshotIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stock?: boolean | StockDefaultArgs<ExtArgs>
  }

  export type $MarketSnapshotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MarketSnapshot"
    objects: {
      stock: Prisma.$StockPayload<ExtArgs>
      attentionEvents: Prisma.$AttentionEventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      stockId: string
      price: Prisma.Decimal
      volume: Prisma.Decimal | null
      open: Prisma.Decimal | null
      previousClose: Prisma.Decimal | null
      dayHigh: Prisma.Decimal | null
      dayLow: Prisma.Decimal | null
      fiftyTwoWeekHigh: Prisma.Decimal | null
      fiftyTwoWeekLow: Prisma.Decimal | null
      marketTimestamp: Date
      fetchedAt: Date
      source: string
    }, ExtArgs["result"]["marketSnapshot"]>
    composites: {}
  }

  type MarketSnapshotGetPayload<S extends boolean | null | undefined | MarketSnapshotDefaultArgs> = $Result.GetResult<Prisma.$MarketSnapshotPayload, S>

  type MarketSnapshotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MarketSnapshotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MarketSnapshotCountAggregateInputType | true
    }

  export interface MarketSnapshotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MarketSnapshot'], meta: { name: 'MarketSnapshot' } }
    /**
     * Find zero or one MarketSnapshot that matches the filter.
     * @param {MarketSnapshotFindUniqueArgs} args - Arguments to find a MarketSnapshot
     * @example
     * // Get one MarketSnapshot
     * const marketSnapshot = await prisma.marketSnapshot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MarketSnapshotFindUniqueArgs>(args: SelectSubset<T, MarketSnapshotFindUniqueArgs<ExtArgs>>): Prisma__MarketSnapshotClient<$Result.GetResult<Prisma.$MarketSnapshotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MarketSnapshot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MarketSnapshotFindUniqueOrThrowArgs} args - Arguments to find a MarketSnapshot
     * @example
     * // Get one MarketSnapshot
     * const marketSnapshot = await prisma.marketSnapshot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MarketSnapshotFindUniqueOrThrowArgs>(args: SelectSubset<T, MarketSnapshotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MarketSnapshotClient<$Result.GetResult<Prisma.$MarketSnapshotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MarketSnapshot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketSnapshotFindFirstArgs} args - Arguments to find a MarketSnapshot
     * @example
     * // Get one MarketSnapshot
     * const marketSnapshot = await prisma.marketSnapshot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MarketSnapshotFindFirstArgs>(args?: SelectSubset<T, MarketSnapshotFindFirstArgs<ExtArgs>>): Prisma__MarketSnapshotClient<$Result.GetResult<Prisma.$MarketSnapshotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MarketSnapshot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketSnapshotFindFirstOrThrowArgs} args - Arguments to find a MarketSnapshot
     * @example
     * // Get one MarketSnapshot
     * const marketSnapshot = await prisma.marketSnapshot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MarketSnapshotFindFirstOrThrowArgs>(args?: SelectSubset<T, MarketSnapshotFindFirstOrThrowArgs<ExtArgs>>): Prisma__MarketSnapshotClient<$Result.GetResult<Prisma.$MarketSnapshotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MarketSnapshots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketSnapshotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MarketSnapshots
     * const marketSnapshots = await prisma.marketSnapshot.findMany()
     * 
     * // Get first 10 MarketSnapshots
     * const marketSnapshots = await prisma.marketSnapshot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const marketSnapshotWithIdOnly = await prisma.marketSnapshot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MarketSnapshotFindManyArgs>(args?: SelectSubset<T, MarketSnapshotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketSnapshotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MarketSnapshot.
     * @param {MarketSnapshotCreateArgs} args - Arguments to create a MarketSnapshot.
     * @example
     * // Create one MarketSnapshot
     * const MarketSnapshot = await prisma.marketSnapshot.create({
     *   data: {
     *     // ... data to create a MarketSnapshot
     *   }
     * })
     * 
     */
    create<T extends MarketSnapshotCreateArgs>(args: SelectSubset<T, MarketSnapshotCreateArgs<ExtArgs>>): Prisma__MarketSnapshotClient<$Result.GetResult<Prisma.$MarketSnapshotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MarketSnapshots.
     * @param {MarketSnapshotCreateManyArgs} args - Arguments to create many MarketSnapshots.
     * @example
     * // Create many MarketSnapshots
     * const marketSnapshot = await prisma.marketSnapshot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MarketSnapshotCreateManyArgs>(args?: SelectSubset<T, MarketSnapshotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MarketSnapshots and returns the data saved in the database.
     * @param {MarketSnapshotCreateManyAndReturnArgs} args - Arguments to create many MarketSnapshots.
     * @example
     * // Create many MarketSnapshots
     * const marketSnapshot = await prisma.marketSnapshot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MarketSnapshots and only return the `id`
     * const marketSnapshotWithIdOnly = await prisma.marketSnapshot.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MarketSnapshotCreateManyAndReturnArgs>(args?: SelectSubset<T, MarketSnapshotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketSnapshotPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MarketSnapshot.
     * @param {MarketSnapshotDeleteArgs} args - Arguments to delete one MarketSnapshot.
     * @example
     * // Delete one MarketSnapshot
     * const MarketSnapshot = await prisma.marketSnapshot.delete({
     *   where: {
     *     // ... filter to delete one MarketSnapshot
     *   }
     * })
     * 
     */
    delete<T extends MarketSnapshotDeleteArgs>(args: SelectSubset<T, MarketSnapshotDeleteArgs<ExtArgs>>): Prisma__MarketSnapshotClient<$Result.GetResult<Prisma.$MarketSnapshotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MarketSnapshot.
     * @param {MarketSnapshotUpdateArgs} args - Arguments to update one MarketSnapshot.
     * @example
     * // Update one MarketSnapshot
     * const marketSnapshot = await prisma.marketSnapshot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MarketSnapshotUpdateArgs>(args: SelectSubset<T, MarketSnapshotUpdateArgs<ExtArgs>>): Prisma__MarketSnapshotClient<$Result.GetResult<Prisma.$MarketSnapshotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MarketSnapshots.
     * @param {MarketSnapshotDeleteManyArgs} args - Arguments to filter MarketSnapshots to delete.
     * @example
     * // Delete a few MarketSnapshots
     * const { count } = await prisma.marketSnapshot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MarketSnapshotDeleteManyArgs>(args?: SelectSubset<T, MarketSnapshotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MarketSnapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketSnapshotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MarketSnapshots
     * const marketSnapshot = await prisma.marketSnapshot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MarketSnapshotUpdateManyArgs>(args: SelectSubset<T, MarketSnapshotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MarketSnapshots and returns the data updated in the database.
     * @param {MarketSnapshotUpdateManyAndReturnArgs} args - Arguments to update many MarketSnapshots.
     * @example
     * // Update many MarketSnapshots
     * const marketSnapshot = await prisma.marketSnapshot.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MarketSnapshots and only return the `id`
     * const marketSnapshotWithIdOnly = await prisma.marketSnapshot.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MarketSnapshotUpdateManyAndReturnArgs>(args: SelectSubset<T, MarketSnapshotUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketSnapshotPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MarketSnapshot.
     * @param {MarketSnapshotUpsertArgs} args - Arguments to update or create a MarketSnapshot.
     * @example
     * // Update or create a MarketSnapshot
     * const marketSnapshot = await prisma.marketSnapshot.upsert({
     *   create: {
     *     // ... data to create a MarketSnapshot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MarketSnapshot we want to update
     *   }
     * })
     */
    upsert<T extends MarketSnapshotUpsertArgs>(args: SelectSubset<T, MarketSnapshotUpsertArgs<ExtArgs>>): Prisma__MarketSnapshotClient<$Result.GetResult<Prisma.$MarketSnapshotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MarketSnapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketSnapshotCountArgs} args - Arguments to filter MarketSnapshots to count.
     * @example
     * // Count the number of MarketSnapshots
     * const count = await prisma.marketSnapshot.count({
     *   where: {
     *     // ... the filter for the MarketSnapshots we want to count
     *   }
     * })
    **/
    count<T extends MarketSnapshotCountArgs>(
      args?: Subset<T, MarketSnapshotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MarketSnapshotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MarketSnapshot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketSnapshotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MarketSnapshotAggregateArgs>(args: Subset<T, MarketSnapshotAggregateArgs>): Prisma.PrismaPromise<GetMarketSnapshotAggregateType<T>>

    /**
     * Group by MarketSnapshot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketSnapshotGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MarketSnapshotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MarketSnapshotGroupByArgs['orderBy'] }
        : { orderBy?: MarketSnapshotGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MarketSnapshotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMarketSnapshotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MarketSnapshot model
   */
  readonly fields: MarketSnapshotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MarketSnapshot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MarketSnapshotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    stock<T extends StockDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StockDefaultArgs<ExtArgs>>): Prisma__StockClient<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    attentionEvents<T extends MarketSnapshot$attentionEventsArgs<ExtArgs> = {}>(args?: Subset<T, MarketSnapshot$attentionEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttentionEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MarketSnapshot model
   */
  interface MarketSnapshotFieldRefs {
    readonly id: FieldRef<"MarketSnapshot", 'String'>
    readonly stockId: FieldRef<"MarketSnapshot", 'String'>
    readonly price: FieldRef<"MarketSnapshot", 'Decimal'>
    readonly volume: FieldRef<"MarketSnapshot", 'Decimal'>
    readonly open: FieldRef<"MarketSnapshot", 'Decimal'>
    readonly previousClose: FieldRef<"MarketSnapshot", 'Decimal'>
    readonly dayHigh: FieldRef<"MarketSnapshot", 'Decimal'>
    readonly dayLow: FieldRef<"MarketSnapshot", 'Decimal'>
    readonly fiftyTwoWeekHigh: FieldRef<"MarketSnapshot", 'Decimal'>
    readonly fiftyTwoWeekLow: FieldRef<"MarketSnapshot", 'Decimal'>
    readonly marketTimestamp: FieldRef<"MarketSnapshot", 'DateTime'>
    readonly fetchedAt: FieldRef<"MarketSnapshot", 'DateTime'>
    readonly source: FieldRef<"MarketSnapshot", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MarketSnapshot findUnique
   */
  export type MarketSnapshotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketSnapshot
     */
    select?: MarketSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketSnapshot
     */
    omit?: MarketSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketSnapshotInclude<ExtArgs> | null
    /**
     * Filter, which MarketSnapshot to fetch.
     */
    where: MarketSnapshotWhereUniqueInput
  }

  /**
   * MarketSnapshot findUniqueOrThrow
   */
  export type MarketSnapshotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketSnapshot
     */
    select?: MarketSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketSnapshot
     */
    omit?: MarketSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketSnapshotInclude<ExtArgs> | null
    /**
     * Filter, which MarketSnapshot to fetch.
     */
    where: MarketSnapshotWhereUniqueInput
  }

  /**
   * MarketSnapshot findFirst
   */
  export type MarketSnapshotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketSnapshot
     */
    select?: MarketSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketSnapshot
     */
    omit?: MarketSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketSnapshotInclude<ExtArgs> | null
    /**
     * Filter, which MarketSnapshot to fetch.
     */
    where?: MarketSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketSnapshots to fetch.
     */
    orderBy?: MarketSnapshotOrderByWithRelationInput | MarketSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MarketSnapshots.
     */
    cursor?: MarketSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketSnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MarketSnapshots.
     */
    distinct?: MarketSnapshotScalarFieldEnum | MarketSnapshotScalarFieldEnum[]
  }

  /**
   * MarketSnapshot findFirstOrThrow
   */
  export type MarketSnapshotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketSnapshot
     */
    select?: MarketSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketSnapshot
     */
    omit?: MarketSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketSnapshotInclude<ExtArgs> | null
    /**
     * Filter, which MarketSnapshot to fetch.
     */
    where?: MarketSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketSnapshots to fetch.
     */
    orderBy?: MarketSnapshotOrderByWithRelationInput | MarketSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MarketSnapshots.
     */
    cursor?: MarketSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketSnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MarketSnapshots.
     */
    distinct?: MarketSnapshotScalarFieldEnum | MarketSnapshotScalarFieldEnum[]
  }

  /**
   * MarketSnapshot findMany
   */
  export type MarketSnapshotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketSnapshot
     */
    select?: MarketSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketSnapshot
     */
    omit?: MarketSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketSnapshotInclude<ExtArgs> | null
    /**
     * Filter, which MarketSnapshots to fetch.
     */
    where?: MarketSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MarketSnapshots to fetch.
     */
    orderBy?: MarketSnapshotOrderByWithRelationInput | MarketSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MarketSnapshots.
     */
    cursor?: MarketSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MarketSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MarketSnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MarketSnapshots.
     */
    distinct?: MarketSnapshotScalarFieldEnum | MarketSnapshotScalarFieldEnum[]
  }

  /**
   * MarketSnapshot create
   */
  export type MarketSnapshotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketSnapshot
     */
    select?: MarketSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketSnapshot
     */
    omit?: MarketSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketSnapshotInclude<ExtArgs> | null
    /**
     * The data needed to create a MarketSnapshot.
     */
    data: XOR<MarketSnapshotCreateInput, MarketSnapshotUncheckedCreateInput>
  }

  /**
   * MarketSnapshot createMany
   */
  export type MarketSnapshotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MarketSnapshots.
     */
    data: MarketSnapshotCreateManyInput | MarketSnapshotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MarketSnapshot createManyAndReturn
   */
  export type MarketSnapshotCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketSnapshot
     */
    select?: MarketSnapshotSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MarketSnapshot
     */
    omit?: MarketSnapshotOmit<ExtArgs> | null
    /**
     * The data used to create many MarketSnapshots.
     */
    data: MarketSnapshotCreateManyInput | MarketSnapshotCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketSnapshotIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MarketSnapshot update
   */
  export type MarketSnapshotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketSnapshot
     */
    select?: MarketSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketSnapshot
     */
    omit?: MarketSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketSnapshotInclude<ExtArgs> | null
    /**
     * The data needed to update a MarketSnapshot.
     */
    data: XOR<MarketSnapshotUpdateInput, MarketSnapshotUncheckedUpdateInput>
    /**
     * Choose, which MarketSnapshot to update.
     */
    where: MarketSnapshotWhereUniqueInput
  }

  /**
   * MarketSnapshot updateMany
   */
  export type MarketSnapshotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MarketSnapshots.
     */
    data: XOR<MarketSnapshotUpdateManyMutationInput, MarketSnapshotUncheckedUpdateManyInput>
    /**
     * Filter which MarketSnapshots to update
     */
    where?: MarketSnapshotWhereInput
    /**
     * Limit how many MarketSnapshots to update.
     */
    limit?: number
  }

  /**
   * MarketSnapshot updateManyAndReturn
   */
  export type MarketSnapshotUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketSnapshot
     */
    select?: MarketSnapshotSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MarketSnapshot
     */
    omit?: MarketSnapshotOmit<ExtArgs> | null
    /**
     * The data used to update MarketSnapshots.
     */
    data: XOR<MarketSnapshotUpdateManyMutationInput, MarketSnapshotUncheckedUpdateManyInput>
    /**
     * Filter which MarketSnapshots to update
     */
    where?: MarketSnapshotWhereInput
    /**
     * Limit how many MarketSnapshots to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketSnapshotIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MarketSnapshot upsert
   */
  export type MarketSnapshotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketSnapshot
     */
    select?: MarketSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketSnapshot
     */
    omit?: MarketSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketSnapshotInclude<ExtArgs> | null
    /**
     * The filter to search for the MarketSnapshot to update in case it exists.
     */
    where: MarketSnapshotWhereUniqueInput
    /**
     * In case the MarketSnapshot found by the `where` argument doesn't exist, create a new MarketSnapshot with this data.
     */
    create: XOR<MarketSnapshotCreateInput, MarketSnapshotUncheckedCreateInput>
    /**
     * In case the MarketSnapshot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MarketSnapshotUpdateInput, MarketSnapshotUncheckedUpdateInput>
  }

  /**
   * MarketSnapshot delete
   */
  export type MarketSnapshotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketSnapshot
     */
    select?: MarketSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketSnapshot
     */
    omit?: MarketSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketSnapshotInclude<ExtArgs> | null
    /**
     * Filter which MarketSnapshot to delete.
     */
    where: MarketSnapshotWhereUniqueInput
  }

  /**
   * MarketSnapshot deleteMany
   */
  export type MarketSnapshotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MarketSnapshots to delete
     */
    where?: MarketSnapshotWhereInput
    /**
     * Limit how many MarketSnapshots to delete.
     */
    limit?: number
  }

  /**
   * MarketSnapshot.attentionEvents
   */
  export type MarketSnapshot$attentionEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttentionEvent
     */
    select?: AttentionEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttentionEvent
     */
    omit?: AttentionEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttentionEventInclude<ExtArgs> | null
    where?: AttentionEventWhereInput
    orderBy?: AttentionEventOrderByWithRelationInput | AttentionEventOrderByWithRelationInput[]
    cursor?: AttentionEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttentionEventScalarFieldEnum | AttentionEventScalarFieldEnum[]
  }

  /**
   * MarketSnapshot without action
   */
  export type MarketSnapshotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketSnapshot
     */
    select?: MarketSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MarketSnapshot
     */
    omit?: MarketSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketSnapshotInclude<ExtArgs> | null
  }


  /**
   * Model UserStockCheckpoint
   */

  export type AggregateUserStockCheckpoint = {
    _count: UserStockCheckpointCountAggregateOutputType | null
    _avg: UserStockCheckpointAvgAggregateOutputType | null
    _sum: UserStockCheckpointSumAggregateOutputType | null
    _min: UserStockCheckpointMinAggregateOutputType | null
    _max: UserStockCheckpointMaxAggregateOutputType | null
  }

  export type UserStockCheckpointAvgAggregateOutputType = {
    lastSeenPrice: Decimal | null
  }

  export type UserStockCheckpointSumAggregateOutputType = {
    lastSeenPrice: Decimal | null
  }

  export type UserStockCheckpointMinAggregateOutputType = {
    id: string | null
    userId: string | null
    stockId: string | null
    lastSeenPrice: Decimal | null
    lastSeenMarketTimestamp: Date | null
    lastViewedAt: Date | null
  }

  export type UserStockCheckpointMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    stockId: string | null
    lastSeenPrice: Decimal | null
    lastSeenMarketTimestamp: Date | null
    lastViewedAt: Date | null
  }

  export type UserStockCheckpointCountAggregateOutputType = {
    id: number
    userId: number
    stockId: number
    lastSeenPrice: number
    lastSeenMarketTimestamp: number
    lastViewedAt: number
    _all: number
  }


  export type UserStockCheckpointAvgAggregateInputType = {
    lastSeenPrice?: true
  }

  export type UserStockCheckpointSumAggregateInputType = {
    lastSeenPrice?: true
  }

  export type UserStockCheckpointMinAggregateInputType = {
    id?: true
    userId?: true
    stockId?: true
    lastSeenPrice?: true
    lastSeenMarketTimestamp?: true
    lastViewedAt?: true
  }

  export type UserStockCheckpointMaxAggregateInputType = {
    id?: true
    userId?: true
    stockId?: true
    lastSeenPrice?: true
    lastSeenMarketTimestamp?: true
    lastViewedAt?: true
  }

  export type UserStockCheckpointCountAggregateInputType = {
    id?: true
    userId?: true
    stockId?: true
    lastSeenPrice?: true
    lastSeenMarketTimestamp?: true
    lastViewedAt?: true
    _all?: true
  }

  export type UserStockCheckpointAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserStockCheckpoint to aggregate.
     */
    where?: UserStockCheckpointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStockCheckpoints to fetch.
     */
    orderBy?: UserStockCheckpointOrderByWithRelationInput | UserStockCheckpointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserStockCheckpointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStockCheckpoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStockCheckpoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserStockCheckpoints
    **/
    _count?: true | UserStockCheckpointCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserStockCheckpointAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserStockCheckpointSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserStockCheckpointMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserStockCheckpointMaxAggregateInputType
  }

  export type GetUserStockCheckpointAggregateType<T extends UserStockCheckpointAggregateArgs> = {
        [P in keyof T & keyof AggregateUserStockCheckpoint]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserStockCheckpoint[P]>
      : GetScalarType<T[P], AggregateUserStockCheckpoint[P]>
  }




  export type UserStockCheckpointGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserStockCheckpointWhereInput
    orderBy?: UserStockCheckpointOrderByWithAggregationInput | UserStockCheckpointOrderByWithAggregationInput[]
    by: UserStockCheckpointScalarFieldEnum[] | UserStockCheckpointScalarFieldEnum
    having?: UserStockCheckpointScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserStockCheckpointCountAggregateInputType | true
    _avg?: UserStockCheckpointAvgAggregateInputType
    _sum?: UserStockCheckpointSumAggregateInputType
    _min?: UserStockCheckpointMinAggregateInputType
    _max?: UserStockCheckpointMaxAggregateInputType
  }

  export type UserStockCheckpointGroupByOutputType = {
    id: string
    userId: string
    stockId: string
    lastSeenPrice: Decimal
    lastSeenMarketTimestamp: Date
    lastViewedAt: Date
    _count: UserStockCheckpointCountAggregateOutputType | null
    _avg: UserStockCheckpointAvgAggregateOutputType | null
    _sum: UserStockCheckpointSumAggregateOutputType | null
    _min: UserStockCheckpointMinAggregateOutputType | null
    _max: UserStockCheckpointMaxAggregateOutputType | null
  }

  type GetUserStockCheckpointGroupByPayload<T extends UserStockCheckpointGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserStockCheckpointGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserStockCheckpointGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserStockCheckpointGroupByOutputType[P]>
            : GetScalarType<T[P], UserStockCheckpointGroupByOutputType[P]>
        }
      >
    >


  export type UserStockCheckpointSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    stockId?: boolean
    lastSeenPrice?: boolean
    lastSeenMarketTimestamp?: boolean
    lastViewedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    stock?: boolean | StockDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userStockCheckpoint"]>

  export type UserStockCheckpointSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    stockId?: boolean
    lastSeenPrice?: boolean
    lastSeenMarketTimestamp?: boolean
    lastViewedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    stock?: boolean | StockDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userStockCheckpoint"]>

  export type UserStockCheckpointSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    stockId?: boolean
    lastSeenPrice?: boolean
    lastSeenMarketTimestamp?: boolean
    lastViewedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    stock?: boolean | StockDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userStockCheckpoint"]>

  export type UserStockCheckpointSelectScalar = {
    id?: boolean
    userId?: boolean
    stockId?: boolean
    lastSeenPrice?: boolean
    lastSeenMarketTimestamp?: boolean
    lastViewedAt?: boolean
  }

  export type UserStockCheckpointOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "stockId" | "lastSeenPrice" | "lastSeenMarketTimestamp" | "lastViewedAt", ExtArgs["result"]["userStockCheckpoint"]>
  export type UserStockCheckpointInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    stock?: boolean | StockDefaultArgs<ExtArgs>
  }
  export type UserStockCheckpointIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    stock?: boolean | StockDefaultArgs<ExtArgs>
  }
  export type UserStockCheckpointIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    stock?: boolean | StockDefaultArgs<ExtArgs>
  }

  export type $UserStockCheckpointPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserStockCheckpoint"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      stock: Prisma.$StockPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      stockId: string
      lastSeenPrice: Prisma.Decimal
      lastSeenMarketTimestamp: Date
      lastViewedAt: Date
    }, ExtArgs["result"]["userStockCheckpoint"]>
    composites: {}
  }

  type UserStockCheckpointGetPayload<S extends boolean | null | undefined | UserStockCheckpointDefaultArgs> = $Result.GetResult<Prisma.$UserStockCheckpointPayload, S>

  type UserStockCheckpointCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserStockCheckpointFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserStockCheckpointCountAggregateInputType | true
    }

  export interface UserStockCheckpointDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserStockCheckpoint'], meta: { name: 'UserStockCheckpoint' } }
    /**
     * Find zero or one UserStockCheckpoint that matches the filter.
     * @param {UserStockCheckpointFindUniqueArgs} args - Arguments to find a UserStockCheckpoint
     * @example
     * // Get one UserStockCheckpoint
     * const userStockCheckpoint = await prisma.userStockCheckpoint.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserStockCheckpointFindUniqueArgs>(args: SelectSubset<T, UserStockCheckpointFindUniqueArgs<ExtArgs>>): Prisma__UserStockCheckpointClient<$Result.GetResult<Prisma.$UserStockCheckpointPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserStockCheckpoint that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserStockCheckpointFindUniqueOrThrowArgs} args - Arguments to find a UserStockCheckpoint
     * @example
     * // Get one UserStockCheckpoint
     * const userStockCheckpoint = await prisma.userStockCheckpoint.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserStockCheckpointFindUniqueOrThrowArgs>(args: SelectSubset<T, UserStockCheckpointFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserStockCheckpointClient<$Result.GetResult<Prisma.$UserStockCheckpointPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserStockCheckpoint that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStockCheckpointFindFirstArgs} args - Arguments to find a UserStockCheckpoint
     * @example
     * // Get one UserStockCheckpoint
     * const userStockCheckpoint = await prisma.userStockCheckpoint.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserStockCheckpointFindFirstArgs>(args?: SelectSubset<T, UserStockCheckpointFindFirstArgs<ExtArgs>>): Prisma__UserStockCheckpointClient<$Result.GetResult<Prisma.$UserStockCheckpointPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserStockCheckpoint that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStockCheckpointFindFirstOrThrowArgs} args - Arguments to find a UserStockCheckpoint
     * @example
     * // Get one UserStockCheckpoint
     * const userStockCheckpoint = await prisma.userStockCheckpoint.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserStockCheckpointFindFirstOrThrowArgs>(args?: SelectSubset<T, UserStockCheckpointFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserStockCheckpointClient<$Result.GetResult<Prisma.$UserStockCheckpointPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserStockCheckpoints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStockCheckpointFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserStockCheckpoints
     * const userStockCheckpoints = await prisma.userStockCheckpoint.findMany()
     * 
     * // Get first 10 UserStockCheckpoints
     * const userStockCheckpoints = await prisma.userStockCheckpoint.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userStockCheckpointWithIdOnly = await prisma.userStockCheckpoint.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserStockCheckpointFindManyArgs>(args?: SelectSubset<T, UserStockCheckpointFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserStockCheckpointPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserStockCheckpoint.
     * @param {UserStockCheckpointCreateArgs} args - Arguments to create a UserStockCheckpoint.
     * @example
     * // Create one UserStockCheckpoint
     * const UserStockCheckpoint = await prisma.userStockCheckpoint.create({
     *   data: {
     *     // ... data to create a UserStockCheckpoint
     *   }
     * })
     * 
     */
    create<T extends UserStockCheckpointCreateArgs>(args: SelectSubset<T, UserStockCheckpointCreateArgs<ExtArgs>>): Prisma__UserStockCheckpointClient<$Result.GetResult<Prisma.$UserStockCheckpointPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserStockCheckpoints.
     * @param {UserStockCheckpointCreateManyArgs} args - Arguments to create many UserStockCheckpoints.
     * @example
     * // Create many UserStockCheckpoints
     * const userStockCheckpoint = await prisma.userStockCheckpoint.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserStockCheckpointCreateManyArgs>(args?: SelectSubset<T, UserStockCheckpointCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserStockCheckpoints and returns the data saved in the database.
     * @param {UserStockCheckpointCreateManyAndReturnArgs} args - Arguments to create many UserStockCheckpoints.
     * @example
     * // Create many UserStockCheckpoints
     * const userStockCheckpoint = await prisma.userStockCheckpoint.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserStockCheckpoints and only return the `id`
     * const userStockCheckpointWithIdOnly = await prisma.userStockCheckpoint.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserStockCheckpointCreateManyAndReturnArgs>(args?: SelectSubset<T, UserStockCheckpointCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserStockCheckpointPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserStockCheckpoint.
     * @param {UserStockCheckpointDeleteArgs} args - Arguments to delete one UserStockCheckpoint.
     * @example
     * // Delete one UserStockCheckpoint
     * const UserStockCheckpoint = await prisma.userStockCheckpoint.delete({
     *   where: {
     *     // ... filter to delete one UserStockCheckpoint
     *   }
     * })
     * 
     */
    delete<T extends UserStockCheckpointDeleteArgs>(args: SelectSubset<T, UserStockCheckpointDeleteArgs<ExtArgs>>): Prisma__UserStockCheckpointClient<$Result.GetResult<Prisma.$UserStockCheckpointPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserStockCheckpoint.
     * @param {UserStockCheckpointUpdateArgs} args - Arguments to update one UserStockCheckpoint.
     * @example
     * // Update one UserStockCheckpoint
     * const userStockCheckpoint = await prisma.userStockCheckpoint.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserStockCheckpointUpdateArgs>(args: SelectSubset<T, UserStockCheckpointUpdateArgs<ExtArgs>>): Prisma__UserStockCheckpointClient<$Result.GetResult<Prisma.$UserStockCheckpointPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserStockCheckpoints.
     * @param {UserStockCheckpointDeleteManyArgs} args - Arguments to filter UserStockCheckpoints to delete.
     * @example
     * // Delete a few UserStockCheckpoints
     * const { count } = await prisma.userStockCheckpoint.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserStockCheckpointDeleteManyArgs>(args?: SelectSubset<T, UserStockCheckpointDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserStockCheckpoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStockCheckpointUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserStockCheckpoints
     * const userStockCheckpoint = await prisma.userStockCheckpoint.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserStockCheckpointUpdateManyArgs>(args: SelectSubset<T, UserStockCheckpointUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserStockCheckpoints and returns the data updated in the database.
     * @param {UserStockCheckpointUpdateManyAndReturnArgs} args - Arguments to update many UserStockCheckpoints.
     * @example
     * // Update many UserStockCheckpoints
     * const userStockCheckpoint = await prisma.userStockCheckpoint.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserStockCheckpoints and only return the `id`
     * const userStockCheckpointWithIdOnly = await prisma.userStockCheckpoint.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserStockCheckpointUpdateManyAndReturnArgs>(args: SelectSubset<T, UserStockCheckpointUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserStockCheckpointPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserStockCheckpoint.
     * @param {UserStockCheckpointUpsertArgs} args - Arguments to update or create a UserStockCheckpoint.
     * @example
     * // Update or create a UserStockCheckpoint
     * const userStockCheckpoint = await prisma.userStockCheckpoint.upsert({
     *   create: {
     *     // ... data to create a UserStockCheckpoint
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserStockCheckpoint we want to update
     *   }
     * })
     */
    upsert<T extends UserStockCheckpointUpsertArgs>(args: SelectSubset<T, UserStockCheckpointUpsertArgs<ExtArgs>>): Prisma__UserStockCheckpointClient<$Result.GetResult<Prisma.$UserStockCheckpointPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserStockCheckpoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStockCheckpointCountArgs} args - Arguments to filter UserStockCheckpoints to count.
     * @example
     * // Count the number of UserStockCheckpoints
     * const count = await prisma.userStockCheckpoint.count({
     *   where: {
     *     // ... the filter for the UserStockCheckpoints we want to count
     *   }
     * })
    **/
    count<T extends UserStockCheckpointCountArgs>(
      args?: Subset<T, UserStockCheckpointCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserStockCheckpointCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserStockCheckpoint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStockCheckpointAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserStockCheckpointAggregateArgs>(args: Subset<T, UserStockCheckpointAggregateArgs>): Prisma.PrismaPromise<GetUserStockCheckpointAggregateType<T>>

    /**
     * Group by UserStockCheckpoint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStockCheckpointGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserStockCheckpointGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserStockCheckpointGroupByArgs['orderBy'] }
        : { orderBy?: UserStockCheckpointGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserStockCheckpointGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserStockCheckpointGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserStockCheckpoint model
   */
  readonly fields: UserStockCheckpointFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserStockCheckpoint.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserStockCheckpointClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    stock<T extends StockDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StockDefaultArgs<ExtArgs>>): Prisma__StockClient<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserStockCheckpoint model
   */
  interface UserStockCheckpointFieldRefs {
    readonly id: FieldRef<"UserStockCheckpoint", 'String'>
    readonly userId: FieldRef<"UserStockCheckpoint", 'String'>
    readonly stockId: FieldRef<"UserStockCheckpoint", 'String'>
    readonly lastSeenPrice: FieldRef<"UserStockCheckpoint", 'Decimal'>
    readonly lastSeenMarketTimestamp: FieldRef<"UserStockCheckpoint", 'DateTime'>
    readonly lastViewedAt: FieldRef<"UserStockCheckpoint", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserStockCheckpoint findUnique
   */
  export type UserStockCheckpointFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStockCheckpoint
     */
    select?: UserStockCheckpointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStockCheckpoint
     */
    omit?: UserStockCheckpointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStockCheckpointInclude<ExtArgs> | null
    /**
     * Filter, which UserStockCheckpoint to fetch.
     */
    where: UserStockCheckpointWhereUniqueInput
  }

  /**
   * UserStockCheckpoint findUniqueOrThrow
   */
  export type UserStockCheckpointFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStockCheckpoint
     */
    select?: UserStockCheckpointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStockCheckpoint
     */
    omit?: UserStockCheckpointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStockCheckpointInclude<ExtArgs> | null
    /**
     * Filter, which UserStockCheckpoint to fetch.
     */
    where: UserStockCheckpointWhereUniqueInput
  }

  /**
   * UserStockCheckpoint findFirst
   */
  export type UserStockCheckpointFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStockCheckpoint
     */
    select?: UserStockCheckpointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStockCheckpoint
     */
    omit?: UserStockCheckpointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStockCheckpointInclude<ExtArgs> | null
    /**
     * Filter, which UserStockCheckpoint to fetch.
     */
    where?: UserStockCheckpointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStockCheckpoints to fetch.
     */
    orderBy?: UserStockCheckpointOrderByWithRelationInput | UserStockCheckpointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserStockCheckpoints.
     */
    cursor?: UserStockCheckpointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStockCheckpoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStockCheckpoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserStockCheckpoints.
     */
    distinct?: UserStockCheckpointScalarFieldEnum | UserStockCheckpointScalarFieldEnum[]
  }

  /**
   * UserStockCheckpoint findFirstOrThrow
   */
  export type UserStockCheckpointFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStockCheckpoint
     */
    select?: UserStockCheckpointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStockCheckpoint
     */
    omit?: UserStockCheckpointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStockCheckpointInclude<ExtArgs> | null
    /**
     * Filter, which UserStockCheckpoint to fetch.
     */
    where?: UserStockCheckpointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStockCheckpoints to fetch.
     */
    orderBy?: UserStockCheckpointOrderByWithRelationInput | UserStockCheckpointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserStockCheckpoints.
     */
    cursor?: UserStockCheckpointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStockCheckpoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStockCheckpoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserStockCheckpoints.
     */
    distinct?: UserStockCheckpointScalarFieldEnum | UserStockCheckpointScalarFieldEnum[]
  }

  /**
   * UserStockCheckpoint findMany
   */
  export type UserStockCheckpointFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStockCheckpoint
     */
    select?: UserStockCheckpointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStockCheckpoint
     */
    omit?: UserStockCheckpointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStockCheckpointInclude<ExtArgs> | null
    /**
     * Filter, which UserStockCheckpoints to fetch.
     */
    where?: UserStockCheckpointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStockCheckpoints to fetch.
     */
    orderBy?: UserStockCheckpointOrderByWithRelationInput | UserStockCheckpointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserStockCheckpoints.
     */
    cursor?: UserStockCheckpointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStockCheckpoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStockCheckpoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserStockCheckpoints.
     */
    distinct?: UserStockCheckpointScalarFieldEnum | UserStockCheckpointScalarFieldEnum[]
  }

  /**
   * UserStockCheckpoint create
   */
  export type UserStockCheckpointCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStockCheckpoint
     */
    select?: UserStockCheckpointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStockCheckpoint
     */
    omit?: UserStockCheckpointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStockCheckpointInclude<ExtArgs> | null
    /**
     * The data needed to create a UserStockCheckpoint.
     */
    data: XOR<UserStockCheckpointCreateInput, UserStockCheckpointUncheckedCreateInput>
  }

  /**
   * UserStockCheckpoint createMany
   */
  export type UserStockCheckpointCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserStockCheckpoints.
     */
    data: UserStockCheckpointCreateManyInput | UserStockCheckpointCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserStockCheckpoint createManyAndReturn
   */
  export type UserStockCheckpointCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStockCheckpoint
     */
    select?: UserStockCheckpointSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserStockCheckpoint
     */
    omit?: UserStockCheckpointOmit<ExtArgs> | null
    /**
     * The data used to create many UserStockCheckpoints.
     */
    data: UserStockCheckpointCreateManyInput | UserStockCheckpointCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStockCheckpointIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserStockCheckpoint update
   */
  export type UserStockCheckpointUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStockCheckpoint
     */
    select?: UserStockCheckpointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStockCheckpoint
     */
    omit?: UserStockCheckpointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStockCheckpointInclude<ExtArgs> | null
    /**
     * The data needed to update a UserStockCheckpoint.
     */
    data: XOR<UserStockCheckpointUpdateInput, UserStockCheckpointUncheckedUpdateInput>
    /**
     * Choose, which UserStockCheckpoint to update.
     */
    where: UserStockCheckpointWhereUniqueInput
  }

  /**
   * UserStockCheckpoint updateMany
   */
  export type UserStockCheckpointUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserStockCheckpoints.
     */
    data: XOR<UserStockCheckpointUpdateManyMutationInput, UserStockCheckpointUncheckedUpdateManyInput>
    /**
     * Filter which UserStockCheckpoints to update
     */
    where?: UserStockCheckpointWhereInput
    /**
     * Limit how many UserStockCheckpoints to update.
     */
    limit?: number
  }

  /**
   * UserStockCheckpoint updateManyAndReturn
   */
  export type UserStockCheckpointUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStockCheckpoint
     */
    select?: UserStockCheckpointSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserStockCheckpoint
     */
    omit?: UserStockCheckpointOmit<ExtArgs> | null
    /**
     * The data used to update UserStockCheckpoints.
     */
    data: XOR<UserStockCheckpointUpdateManyMutationInput, UserStockCheckpointUncheckedUpdateManyInput>
    /**
     * Filter which UserStockCheckpoints to update
     */
    where?: UserStockCheckpointWhereInput
    /**
     * Limit how many UserStockCheckpoints to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStockCheckpointIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserStockCheckpoint upsert
   */
  export type UserStockCheckpointUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStockCheckpoint
     */
    select?: UserStockCheckpointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStockCheckpoint
     */
    omit?: UserStockCheckpointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStockCheckpointInclude<ExtArgs> | null
    /**
     * The filter to search for the UserStockCheckpoint to update in case it exists.
     */
    where: UserStockCheckpointWhereUniqueInput
    /**
     * In case the UserStockCheckpoint found by the `where` argument doesn't exist, create a new UserStockCheckpoint with this data.
     */
    create: XOR<UserStockCheckpointCreateInput, UserStockCheckpointUncheckedCreateInput>
    /**
     * In case the UserStockCheckpoint was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserStockCheckpointUpdateInput, UserStockCheckpointUncheckedUpdateInput>
  }

  /**
   * UserStockCheckpoint delete
   */
  export type UserStockCheckpointDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStockCheckpoint
     */
    select?: UserStockCheckpointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStockCheckpoint
     */
    omit?: UserStockCheckpointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStockCheckpointInclude<ExtArgs> | null
    /**
     * Filter which UserStockCheckpoint to delete.
     */
    where: UserStockCheckpointWhereUniqueInput
  }

  /**
   * UserStockCheckpoint deleteMany
   */
  export type UserStockCheckpointDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserStockCheckpoints to delete
     */
    where?: UserStockCheckpointWhereInput
    /**
     * Limit how many UserStockCheckpoints to delete.
     */
    limit?: number
  }

  /**
   * UserStockCheckpoint without action
   */
  export type UserStockCheckpointDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStockCheckpoint
     */
    select?: UserStockCheckpointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStockCheckpoint
     */
    omit?: UserStockCheckpointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStockCheckpointInclude<ExtArgs> | null
  }


  /**
   * Model AttentionEvent
   */

  export type AggregateAttentionEvent = {
    _count: AttentionEventCountAggregateOutputType | null
    _avg: AttentionEventAvgAggregateOutputType | null
    _sum: AttentionEventSumAggregateOutputType | null
    _min: AttentionEventMinAggregateOutputType | null
    _max: AttentionEventMaxAggregateOutputType | null
  }

  export type AttentionEventAvgAggregateOutputType = {
    previousPrice: Decimal | null
    currentPrice: Decimal | null
    changePercent: Decimal | null
  }

  export type AttentionEventSumAggregateOutputType = {
    previousPrice: Decimal | null
    currentPrice: Decimal | null
    changePercent: Decimal | null
  }

  export type AttentionEventMinAggregateOutputType = {
    id: string | null
    userId: string | null
    stockId: string | null
    snapshotId: string | null
    type: $Enums.AttentionType | null
    severity: $Enums.AttentionSeverity | null
    previousPrice: Decimal | null
    currentPrice: Decimal | null
    changePercent: Decimal | null
    detectedAt: Date | null
  }

  export type AttentionEventMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    stockId: string | null
    snapshotId: string | null
    type: $Enums.AttentionType | null
    severity: $Enums.AttentionSeverity | null
    previousPrice: Decimal | null
    currentPrice: Decimal | null
    changePercent: Decimal | null
    detectedAt: Date | null
  }

  export type AttentionEventCountAggregateOutputType = {
    id: number
    userId: number
    stockId: number
    snapshotId: number
    type: number
    severity: number
    previousPrice: number
    currentPrice: number
    changePercent: number
    detectedAt: number
    _all: number
  }


  export type AttentionEventAvgAggregateInputType = {
    previousPrice?: true
    currentPrice?: true
    changePercent?: true
  }

  export type AttentionEventSumAggregateInputType = {
    previousPrice?: true
    currentPrice?: true
    changePercent?: true
  }

  export type AttentionEventMinAggregateInputType = {
    id?: true
    userId?: true
    stockId?: true
    snapshotId?: true
    type?: true
    severity?: true
    previousPrice?: true
    currentPrice?: true
    changePercent?: true
    detectedAt?: true
  }

  export type AttentionEventMaxAggregateInputType = {
    id?: true
    userId?: true
    stockId?: true
    snapshotId?: true
    type?: true
    severity?: true
    previousPrice?: true
    currentPrice?: true
    changePercent?: true
    detectedAt?: true
  }

  export type AttentionEventCountAggregateInputType = {
    id?: true
    userId?: true
    stockId?: true
    snapshotId?: true
    type?: true
    severity?: true
    previousPrice?: true
    currentPrice?: true
    changePercent?: true
    detectedAt?: true
    _all?: true
  }

  export type AttentionEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AttentionEvent to aggregate.
     */
    where?: AttentionEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttentionEvents to fetch.
     */
    orderBy?: AttentionEventOrderByWithRelationInput | AttentionEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttentionEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttentionEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttentionEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AttentionEvents
    **/
    _count?: true | AttentionEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AttentionEventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AttentionEventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttentionEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttentionEventMaxAggregateInputType
  }

  export type GetAttentionEventAggregateType<T extends AttentionEventAggregateArgs> = {
        [P in keyof T & keyof AggregateAttentionEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttentionEvent[P]>
      : GetScalarType<T[P], AggregateAttentionEvent[P]>
  }




  export type AttentionEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttentionEventWhereInput
    orderBy?: AttentionEventOrderByWithAggregationInput | AttentionEventOrderByWithAggregationInput[]
    by: AttentionEventScalarFieldEnum[] | AttentionEventScalarFieldEnum
    having?: AttentionEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttentionEventCountAggregateInputType | true
    _avg?: AttentionEventAvgAggregateInputType
    _sum?: AttentionEventSumAggregateInputType
    _min?: AttentionEventMinAggregateInputType
    _max?: AttentionEventMaxAggregateInputType
  }

  export type AttentionEventGroupByOutputType = {
    id: string
    userId: string
    stockId: string
    snapshotId: string
    type: $Enums.AttentionType
    severity: $Enums.AttentionSeverity
    previousPrice: Decimal | null
    currentPrice: Decimal | null
    changePercent: Decimal | null
    detectedAt: Date
    _count: AttentionEventCountAggregateOutputType | null
    _avg: AttentionEventAvgAggregateOutputType | null
    _sum: AttentionEventSumAggregateOutputType | null
    _min: AttentionEventMinAggregateOutputType | null
    _max: AttentionEventMaxAggregateOutputType | null
  }

  type GetAttentionEventGroupByPayload<T extends AttentionEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttentionEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttentionEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttentionEventGroupByOutputType[P]>
            : GetScalarType<T[P], AttentionEventGroupByOutputType[P]>
        }
      >
    >


  export type AttentionEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    stockId?: boolean
    snapshotId?: boolean
    type?: boolean
    severity?: boolean
    previousPrice?: boolean
    currentPrice?: boolean
    changePercent?: boolean
    detectedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    stock?: boolean | StockDefaultArgs<ExtArgs>
    snapshot?: boolean | MarketSnapshotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attentionEvent"]>

  export type AttentionEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    stockId?: boolean
    snapshotId?: boolean
    type?: boolean
    severity?: boolean
    previousPrice?: boolean
    currentPrice?: boolean
    changePercent?: boolean
    detectedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    stock?: boolean | StockDefaultArgs<ExtArgs>
    snapshot?: boolean | MarketSnapshotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attentionEvent"]>

  export type AttentionEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    stockId?: boolean
    snapshotId?: boolean
    type?: boolean
    severity?: boolean
    previousPrice?: boolean
    currentPrice?: boolean
    changePercent?: boolean
    detectedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    stock?: boolean | StockDefaultArgs<ExtArgs>
    snapshot?: boolean | MarketSnapshotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attentionEvent"]>

  export type AttentionEventSelectScalar = {
    id?: boolean
    userId?: boolean
    stockId?: boolean
    snapshotId?: boolean
    type?: boolean
    severity?: boolean
    previousPrice?: boolean
    currentPrice?: boolean
    changePercent?: boolean
    detectedAt?: boolean
  }

  export type AttentionEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "stockId" | "snapshotId" | "type" | "severity" | "previousPrice" | "currentPrice" | "changePercent" | "detectedAt", ExtArgs["result"]["attentionEvent"]>
  export type AttentionEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    stock?: boolean | StockDefaultArgs<ExtArgs>
    snapshot?: boolean | MarketSnapshotDefaultArgs<ExtArgs>
  }
  export type AttentionEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    stock?: boolean | StockDefaultArgs<ExtArgs>
    snapshot?: boolean | MarketSnapshotDefaultArgs<ExtArgs>
  }
  export type AttentionEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    stock?: boolean | StockDefaultArgs<ExtArgs>
    snapshot?: boolean | MarketSnapshotDefaultArgs<ExtArgs>
  }

  export type $AttentionEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AttentionEvent"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      stock: Prisma.$StockPayload<ExtArgs>
      snapshot: Prisma.$MarketSnapshotPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      stockId: string
      snapshotId: string
      type: $Enums.AttentionType
      severity: $Enums.AttentionSeverity
      previousPrice: Prisma.Decimal | null
      currentPrice: Prisma.Decimal | null
      changePercent: Prisma.Decimal | null
      detectedAt: Date
    }, ExtArgs["result"]["attentionEvent"]>
    composites: {}
  }

  type AttentionEventGetPayload<S extends boolean | null | undefined | AttentionEventDefaultArgs> = $Result.GetResult<Prisma.$AttentionEventPayload, S>

  type AttentionEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttentionEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttentionEventCountAggregateInputType | true
    }

  export interface AttentionEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AttentionEvent'], meta: { name: 'AttentionEvent' } }
    /**
     * Find zero or one AttentionEvent that matches the filter.
     * @param {AttentionEventFindUniqueArgs} args - Arguments to find a AttentionEvent
     * @example
     * // Get one AttentionEvent
     * const attentionEvent = await prisma.attentionEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttentionEventFindUniqueArgs>(args: SelectSubset<T, AttentionEventFindUniqueArgs<ExtArgs>>): Prisma__AttentionEventClient<$Result.GetResult<Prisma.$AttentionEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AttentionEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttentionEventFindUniqueOrThrowArgs} args - Arguments to find a AttentionEvent
     * @example
     * // Get one AttentionEvent
     * const attentionEvent = await prisma.attentionEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttentionEventFindUniqueOrThrowArgs>(args: SelectSubset<T, AttentionEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttentionEventClient<$Result.GetResult<Prisma.$AttentionEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AttentionEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttentionEventFindFirstArgs} args - Arguments to find a AttentionEvent
     * @example
     * // Get one AttentionEvent
     * const attentionEvent = await prisma.attentionEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttentionEventFindFirstArgs>(args?: SelectSubset<T, AttentionEventFindFirstArgs<ExtArgs>>): Prisma__AttentionEventClient<$Result.GetResult<Prisma.$AttentionEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AttentionEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttentionEventFindFirstOrThrowArgs} args - Arguments to find a AttentionEvent
     * @example
     * // Get one AttentionEvent
     * const attentionEvent = await prisma.attentionEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttentionEventFindFirstOrThrowArgs>(args?: SelectSubset<T, AttentionEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttentionEventClient<$Result.GetResult<Prisma.$AttentionEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AttentionEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttentionEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AttentionEvents
     * const attentionEvents = await prisma.attentionEvent.findMany()
     * 
     * // Get first 10 AttentionEvents
     * const attentionEvents = await prisma.attentionEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attentionEventWithIdOnly = await prisma.attentionEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttentionEventFindManyArgs>(args?: SelectSubset<T, AttentionEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttentionEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AttentionEvent.
     * @param {AttentionEventCreateArgs} args - Arguments to create a AttentionEvent.
     * @example
     * // Create one AttentionEvent
     * const AttentionEvent = await prisma.attentionEvent.create({
     *   data: {
     *     // ... data to create a AttentionEvent
     *   }
     * })
     * 
     */
    create<T extends AttentionEventCreateArgs>(args: SelectSubset<T, AttentionEventCreateArgs<ExtArgs>>): Prisma__AttentionEventClient<$Result.GetResult<Prisma.$AttentionEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AttentionEvents.
     * @param {AttentionEventCreateManyArgs} args - Arguments to create many AttentionEvents.
     * @example
     * // Create many AttentionEvents
     * const attentionEvent = await prisma.attentionEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttentionEventCreateManyArgs>(args?: SelectSubset<T, AttentionEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AttentionEvents and returns the data saved in the database.
     * @param {AttentionEventCreateManyAndReturnArgs} args - Arguments to create many AttentionEvents.
     * @example
     * // Create many AttentionEvents
     * const attentionEvent = await prisma.attentionEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AttentionEvents and only return the `id`
     * const attentionEventWithIdOnly = await prisma.attentionEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttentionEventCreateManyAndReturnArgs>(args?: SelectSubset<T, AttentionEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttentionEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AttentionEvent.
     * @param {AttentionEventDeleteArgs} args - Arguments to delete one AttentionEvent.
     * @example
     * // Delete one AttentionEvent
     * const AttentionEvent = await prisma.attentionEvent.delete({
     *   where: {
     *     // ... filter to delete one AttentionEvent
     *   }
     * })
     * 
     */
    delete<T extends AttentionEventDeleteArgs>(args: SelectSubset<T, AttentionEventDeleteArgs<ExtArgs>>): Prisma__AttentionEventClient<$Result.GetResult<Prisma.$AttentionEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AttentionEvent.
     * @param {AttentionEventUpdateArgs} args - Arguments to update one AttentionEvent.
     * @example
     * // Update one AttentionEvent
     * const attentionEvent = await prisma.attentionEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttentionEventUpdateArgs>(args: SelectSubset<T, AttentionEventUpdateArgs<ExtArgs>>): Prisma__AttentionEventClient<$Result.GetResult<Prisma.$AttentionEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AttentionEvents.
     * @param {AttentionEventDeleteManyArgs} args - Arguments to filter AttentionEvents to delete.
     * @example
     * // Delete a few AttentionEvents
     * const { count } = await prisma.attentionEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttentionEventDeleteManyArgs>(args?: SelectSubset<T, AttentionEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AttentionEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttentionEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AttentionEvents
     * const attentionEvent = await prisma.attentionEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttentionEventUpdateManyArgs>(args: SelectSubset<T, AttentionEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AttentionEvents and returns the data updated in the database.
     * @param {AttentionEventUpdateManyAndReturnArgs} args - Arguments to update many AttentionEvents.
     * @example
     * // Update many AttentionEvents
     * const attentionEvent = await prisma.attentionEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AttentionEvents and only return the `id`
     * const attentionEventWithIdOnly = await prisma.attentionEvent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AttentionEventUpdateManyAndReturnArgs>(args: SelectSubset<T, AttentionEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttentionEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AttentionEvent.
     * @param {AttentionEventUpsertArgs} args - Arguments to update or create a AttentionEvent.
     * @example
     * // Update or create a AttentionEvent
     * const attentionEvent = await prisma.attentionEvent.upsert({
     *   create: {
     *     // ... data to create a AttentionEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AttentionEvent we want to update
     *   }
     * })
     */
    upsert<T extends AttentionEventUpsertArgs>(args: SelectSubset<T, AttentionEventUpsertArgs<ExtArgs>>): Prisma__AttentionEventClient<$Result.GetResult<Prisma.$AttentionEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AttentionEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttentionEventCountArgs} args - Arguments to filter AttentionEvents to count.
     * @example
     * // Count the number of AttentionEvents
     * const count = await prisma.attentionEvent.count({
     *   where: {
     *     // ... the filter for the AttentionEvents we want to count
     *   }
     * })
    **/
    count<T extends AttentionEventCountArgs>(
      args?: Subset<T, AttentionEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttentionEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AttentionEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttentionEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AttentionEventAggregateArgs>(args: Subset<T, AttentionEventAggregateArgs>): Prisma.PrismaPromise<GetAttentionEventAggregateType<T>>

    /**
     * Group by AttentionEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttentionEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AttentionEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttentionEventGroupByArgs['orderBy'] }
        : { orderBy?: AttentionEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AttentionEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttentionEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AttentionEvent model
   */
  readonly fields: AttentionEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AttentionEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttentionEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    stock<T extends StockDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StockDefaultArgs<ExtArgs>>): Prisma__StockClient<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    snapshot<T extends MarketSnapshotDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MarketSnapshotDefaultArgs<ExtArgs>>): Prisma__MarketSnapshotClient<$Result.GetResult<Prisma.$MarketSnapshotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AttentionEvent model
   */
  interface AttentionEventFieldRefs {
    readonly id: FieldRef<"AttentionEvent", 'String'>
    readonly userId: FieldRef<"AttentionEvent", 'String'>
    readonly stockId: FieldRef<"AttentionEvent", 'String'>
    readonly snapshotId: FieldRef<"AttentionEvent", 'String'>
    readonly type: FieldRef<"AttentionEvent", 'AttentionType'>
    readonly severity: FieldRef<"AttentionEvent", 'AttentionSeverity'>
    readonly previousPrice: FieldRef<"AttentionEvent", 'Decimal'>
    readonly currentPrice: FieldRef<"AttentionEvent", 'Decimal'>
    readonly changePercent: FieldRef<"AttentionEvent", 'Decimal'>
    readonly detectedAt: FieldRef<"AttentionEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AttentionEvent findUnique
   */
  export type AttentionEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttentionEvent
     */
    select?: AttentionEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttentionEvent
     */
    omit?: AttentionEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttentionEventInclude<ExtArgs> | null
    /**
     * Filter, which AttentionEvent to fetch.
     */
    where: AttentionEventWhereUniqueInput
  }

  /**
   * AttentionEvent findUniqueOrThrow
   */
  export type AttentionEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttentionEvent
     */
    select?: AttentionEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttentionEvent
     */
    omit?: AttentionEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttentionEventInclude<ExtArgs> | null
    /**
     * Filter, which AttentionEvent to fetch.
     */
    where: AttentionEventWhereUniqueInput
  }

  /**
   * AttentionEvent findFirst
   */
  export type AttentionEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttentionEvent
     */
    select?: AttentionEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttentionEvent
     */
    omit?: AttentionEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttentionEventInclude<ExtArgs> | null
    /**
     * Filter, which AttentionEvent to fetch.
     */
    where?: AttentionEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttentionEvents to fetch.
     */
    orderBy?: AttentionEventOrderByWithRelationInput | AttentionEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AttentionEvents.
     */
    cursor?: AttentionEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttentionEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttentionEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AttentionEvents.
     */
    distinct?: AttentionEventScalarFieldEnum | AttentionEventScalarFieldEnum[]
  }

  /**
   * AttentionEvent findFirstOrThrow
   */
  export type AttentionEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttentionEvent
     */
    select?: AttentionEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttentionEvent
     */
    omit?: AttentionEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttentionEventInclude<ExtArgs> | null
    /**
     * Filter, which AttentionEvent to fetch.
     */
    where?: AttentionEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttentionEvents to fetch.
     */
    orderBy?: AttentionEventOrderByWithRelationInput | AttentionEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AttentionEvents.
     */
    cursor?: AttentionEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttentionEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttentionEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AttentionEvents.
     */
    distinct?: AttentionEventScalarFieldEnum | AttentionEventScalarFieldEnum[]
  }

  /**
   * AttentionEvent findMany
   */
  export type AttentionEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttentionEvent
     */
    select?: AttentionEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttentionEvent
     */
    omit?: AttentionEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttentionEventInclude<ExtArgs> | null
    /**
     * Filter, which AttentionEvents to fetch.
     */
    where?: AttentionEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AttentionEvents to fetch.
     */
    orderBy?: AttentionEventOrderByWithRelationInput | AttentionEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AttentionEvents.
     */
    cursor?: AttentionEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AttentionEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AttentionEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AttentionEvents.
     */
    distinct?: AttentionEventScalarFieldEnum | AttentionEventScalarFieldEnum[]
  }

  /**
   * AttentionEvent create
   */
  export type AttentionEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttentionEvent
     */
    select?: AttentionEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttentionEvent
     */
    omit?: AttentionEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttentionEventInclude<ExtArgs> | null
    /**
     * The data needed to create a AttentionEvent.
     */
    data: XOR<AttentionEventCreateInput, AttentionEventUncheckedCreateInput>
  }

  /**
   * AttentionEvent createMany
   */
  export type AttentionEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AttentionEvents.
     */
    data: AttentionEventCreateManyInput | AttentionEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AttentionEvent createManyAndReturn
   */
  export type AttentionEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttentionEvent
     */
    select?: AttentionEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AttentionEvent
     */
    omit?: AttentionEventOmit<ExtArgs> | null
    /**
     * The data used to create many AttentionEvents.
     */
    data: AttentionEventCreateManyInput | AttentionEventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttentionEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AttentionEvent update
   */
  export type AttentionEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttentionEvent
     */
    select?: AttentionEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttentionEvent
     */
    omit?: AttentionEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttentionEventInclude<ExtArgs> | null
    /**
     * The data needed to update a AttentionEvent.
     */
    data: XOR<AttentionEventUpdateInput, AttentionEventUncheckedUpdateInput>
    /**
     * Choose, which AttentionEvent to update.
     */
    where: AttentionEventWhereUniqueInput
  }

  /**
   * AttentionEvent updateMany
   */
  export type AttentionEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AttentionEvents.
     */
    data: XOR<AttentionEventUpdateManyMutationInput, AttentionEventUncheckedUpdateManyInput>
    /**
     * Filter which AttentionEvents to update
     */
    where?: AttentionEventWhereInput
    /**
     * Limit how many AttentionEvents to update.
     */
    limit?: number
  }

  /**
   * AttentionEvent updateManyAndReturn
   */
  export type AttentionEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttentionEvent
     */
    select?: AttentionEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AttentionEvent
     */
    omit?: AttentionEventOmit<ExtArgs> | null
    /**
     * The data used to update AttentionEvents.
     */
    data: XOR<AttentionEventUpdateManyMutationInput, AttentionEventUncheckedUpdateManyInput>
    /**
     * Filter which AttentionEvents to update
     */
    where?: AttentionEventWhereInput
    /**
     * Limit how many AttentionEvents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttentionEventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AttentionEvent upsert
   */
  export type AttentionEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttentionEvent
     */
    select?: AttentionEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttentionEvent
     */
    omit?: AttentionEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttentionEventInclude<ExtArgs> | null
    /**
     * The filter to search for the AttentionEvent to update in case it exists.
     */
    where: AttentionEventWhereUniqueInput
    /**
     * In case the AttentionEvent found by the `where` argument doesn't exist, create a new AttentionEvent with this data.
     */
    create: XOR<AttentionEventCreateInput, AttentionEventUncheckedCreateInput>
    /**
     * In case the AttentionEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttentionEventUpdateInput, AttentionEventUncheckedUpdateInput>
  }

  /**
   * AttentionEvent delete
   */
  export type AttentionEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttentionEvent
     */
    select?: AttentionEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttentionEvent
     */
    omit?: AttentionEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttentionEventInclude<ExtArgs> | null
    /**
     * Filter which AttentionEvent to delete.
     */
    where: AttentionEventWhereUniqueInput
  }

  /**
   * AttentionEvent deleteMany
   */
  export type AttentionEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AttentionEvents to delete
     */
    where?: AttentionEventWhereInput
    /**
     * Limit how many AttentionEvents to delete.
     */
    limit?: number
  }

  /**
   * AttentionEvent without action
   */
  export type AttentionEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AttentionEvent
     */
    select?: AttentionEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AttentionEvent
     */
    omit?: AttentionEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttentionEventInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    passwordHash: 'passwordHash',
    googleId: 'googleId',
    authProvider: 'authProvider',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const WatchlistScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    createdAt: 'createdAt'
  };

  export type WatchlistScalarFieldEnum = (typeof WatchlistScalarFieldEnum)[keyof typeof WatchlistScalarFieldEnum]


  export const StockScalarFieldEnum: {
    id: 'id',
    symbol: 'symbol',
    name: 'name',
    exchange: 'exchange'
  };

  export type StockScalarFieldEnum = (typeof StockScalarFieldEnum)[keyof typeof StockScalarFieldEnum]


  export const WatchlistItemScalarFieldEnum: {
    id: 'id',
    watchlistId: 'watchlistId',
    stockId: 'stockId',
    intent: 'intent',
    purchasePrice: 'purchasePrice',
    targetPrice: 'targetPrice',
    addedAt: 'addedAt'
  };

  export type WatchlistItemScalarFieldEnum = (typeof WatchlistItemScalarFieldEnum)[keyof typeof WatchlistItemScalarFieldEnum]


  export const MarketSnapshotScalarFieldEnum: {
    id: 'id',
    stockId: 'stockId',
    price: 'price',
    volume: 'volume',
    open: 'open',
    previousClose: 'previousClose',
    dayHigh: 'dayHigh',
    dayLow: 'dayLow',
    fiftyTwoWeekHigh: 'fiftyTwoWeekHigh',
    fiftyTwoWeekLow: 'fiftyTwoWeekLow',
    marketTimestamp: 'marketTimestamp',
    fetchedAt: 'fetchedAt',
    source: 'source'
  };

  export type MarketSnapshotScalarFieldEnum = (typeof MarketSnapshotScalarFieldEnum)[keyof typeof MarketSnapshotScalarFieldEnum]


  export const UserStockCheckpointScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    stockId: 'stockId',
    lastSeenPrice: 'lastSeenPrice',
    lastSeenMarketTimestamp: 'lastSeenMarketTimestamp',
    lastViewedAt: 'lastViewedAt'
  };

  export type UserStockCheckpointScalarFieldEnum = (typeof UserStockCheckpointScalarFieldEnum)[keyof typeof UserStockCheckpointScalarFieldEnum]


  export const AttentionEventScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    stockId: 'stockId',
    snapshotId: 'snapshotId',
    type: 'type',
    severity: 'severity',
    previousPrice: 'previousPrice',
    currentPrice: 'currentPrice',
    changePercent: 'changePercent',
    detectedAt: 'detectedAt'
  };

  export type AttentionEventScalarFieldEnum = (typeof AttentionEventScalarFieldEnum)[keyof typeof AttentionEventScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'WatchIntent'
   */
  export type EnumWatchIntentFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WatchIntent'>
    


  /**
   * Reference to a field of type 'WatchIntent[]'
   */
  export type ListEnumWatchIntentFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WatchIntent[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'AttentionType'
   */
  export type EnumAttentionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AttentionType'>
    


  /**
   * Reference to a field of type 'AttentionType[]'
   */
  export type ListEnumAttentionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AttentionType[]'>
    


  /**
   * Reference to a field of type 'AttentionSeverity'
   */
  export type EnumAttentionSeverityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AttentionSeverity'>
    


  /**
   * Reference to a field of type 'AttentionSeverity[]'
   */
  export type ListEnumAttentionSeverityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AttentionSeverity[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringNullableFilter<"User"> | string | null
    googleId?: StringNullableFilter<"User"> | string | null
    authProvider?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    watchlists?: WatchlistListRelationFilter
    checkpoints?: UserStockCheckpointListRelationFilter
    attentionEvents?: AttentionEventListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrderInput | SortOrder
    googleId?: SortOrderInput | SortOrder
    authProvider?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    watchlists?: WatchlistOrderByRelationAggregateInput
    checkpoints?: UserStockCheckpointOrderByRelationAggregateInput
    attentionEvents?: AttentionEventOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    googleId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    passwordHash?: StringNullableFilter<"User"> | string | null
    authProvider?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    watchlists?: WatchlistListRelationFilter
    checkpoints?: UserStockCheckpointListRelationFilter
    attentionEvents?: AttentionEventListRelationFilter
  }, "id" | "email" | "googleId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrderInput | SortOrder
    googleId?: SortOrderInput | SortOrder
    authProvider?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringNullableWithAggregatesFilter<"User"> | string | null
    googleId?: StringNullableWithAggregatesFilter<"User"> | string | null
    authProvider?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type WatchlistWhereInput = {
    AND?: WatchlistWhereInput | WatchlistWhereInput[]
    OR?: WatchlistWhereInput[]
    NOT?: WatchlistWhereInput | WatchlistWhereInput[]
    id?: StringFilter<"Watchlist"> | string
    userId?: StringFilter<"Watchlist"> | string
    name?: StringFilter<"Watchlist"> | string
    createdAt?: DateTimeFilter<"Watchlist"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    items?: WatchlistItemListRelationFilter
  }

  export type WatchlistOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    items?: WatchlistItemOrderByRelationAggregateInput
  }

  export type WatchlistWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WatchlistWhereInput | WatchlistWhereInput[]
    OR?: WatchlistWhereInput[]
    NOT?: WatchlistWhereInput | WatchlistWhereInput[]
    userId?: StringFilter<"Watchlist"> | string
    name?: StringFilter<"Watchlist"> | string
    createdAt?: DateTimeFilter<"Watchlist"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    items?: WatchlistItemListRelationFilter
  }, "id">

  export type WatchlistOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    _count?: WatchlistCountOrderByAggregateInput
    _max?: WatchlistMaxOrderByAggregateInput
    _min?: WatchlistMinOrderByAggregateInput
  }

  export type WatchlistScalarWhereWithAggregatesInput = {
    AND?: WatchlistScalarWhereWithAggregatesInput | WatchlistScalarWhereWithAggregatesInput[]
    OR?: WatchlistScalarWhereWithAggregatesInput[]
    NOT?: WatchlistScalarWhereWithAggregatesInput | WatchlistScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Watchlist"> | string
    userId?: StringWithAggregatesFilter<"Watchlist"> | string
    name?: StringWithAggregatesFilter<"Watchlist"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Watchlist"> | Date | string
  }

  export type StockWhereInput = {
    AND?: StockWhereInput | StockWhereInput[]
    OR?: StockWhereInput[]
    NOT?: StockWhereInput | StockWhereInput[]
    id?: StringFilter<"Stock"> | string
    symbol?: StringFilter<"Stock"> | string
    name?: StringFilter<"Stock"> | string
    exchange?: StringFilter<"Stock"> | string
    watchlistItems?: WatchlistItemListRelationFilter
    snapshots?: MarketSnapshotListRelationFilter
    checkpoints?: UserStockCheckpointListRelationFilter
    attentionEvents?: AttentionEventListRelationFilter
  }

  export type StockOrderByWithRelationInput = {
    id?: SortOrder
    symbol?: SortOrder
    name?: SortOrder
    exchange?: SortOrder
    watchlistItems?: WatchlistItemOrderByRelationAggregateInput
    snapshots?: MarketSnapshotOrderByRelationAggregateInput
    checkpoints?: UserStockCheckpointOrderByRelationAggregateInput
    attentionEvents?: AttentionEventOrderByRelationAggregateInput
  }

  export type StockWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    symbol_exchange?: StockSymbolExchangeCompoundUniqueInput
    AND?: StockWhereInput | StockWhereInput[]
    OR?: StockWhereInput[]
    NOT?: StockWhereInput | StockWhereInput[]
    symbol?: StringFilter<"Stock"> | string
    name?: StringFilter<"Stock"> | string
    exchange?: StringFilter<"Stock"> | string
    watchlistItems?: WatchlistItemListRelationFilter
    snapshots?: MarketSnapshotListRelationFilter
    checkpoints?: UserStockCheckpointListRelationFilter
    attentionEvents?: AttentionEventListRelationFilter
  }, "id" | "symbol_exchange">

  export type StockOrderByWithAggregationInput = {
    id?: SortOrder
    symbol?: SortOrder
    name?: SortOrder
    exchange?: SortOrder
    _count?: StockCountOrderByAggregateInput
    _max?: StockMaxOrderByAggregateInput
    _min?: StockMinOrderByAggregateInput
  }

  export type StockScalarWhereWithAggregatesInput = {
    AND?: StockScalarWhereWithAggregatesInput | StockScalarWhereWithAggregatesInput[]
    OR?: StockScalarWhereWithAggregatesInput[]
    NOT?: StockScalarWhereWithAggregatesInput | StockScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Stock"> | string
    symbol?: StringWithAggregatesFilter<"Stock"> | string
    name?: StringWithAggregatesFilter<"Stock"> | string
    exchange?: StringWithAggregatesFilter<"Stock"> | string
  }

  export type WatchlistItemWhereInput = {
    AND?: WatchlistItemWhereInput | WatchlistItemWhereInput[]
    OR?: WatchlistItemWhereInput[]
    NOT?: WatchlistItemWhereInput | WatchlistItemWhereInput[]
    id?: StringFilter<"WatchlistItem"> | string
    watchlistId?: StringFilter<"WatchlistItem"> | string
    stockId?: StringFilter<"WatchlistItem"> | string
    intent?: EnumWatchIntentFilter<"WatchlistItem"> | $Enums.WatchIntent
    purchasePrice?: DecimalNullableFilter<"WatchlistItem"> | Decimal | DecimalJsLike | number | string | null
    targetPrice?: DecimalNullableFilter<"WatchlistItem"> | Decimal | DecimalJsLike | number | string | null
    addedAt?: DateTimeFilter<"WatchlistItem"> | Date | string
    watchlist?: XOR<WatchlistScalarRelationFilter, WatchlistWhereInput>
    stock?: XOR<StockScalarRelationFilter, StockWhereInput>
  }

  export type WatchlistItemOrderByWithRelationInput = {
    id?: SortOrder
    watchlistId?: SortOrder
    stockId?: SortOrder
    intent?: SortOrder
    purchasePrice?: SortOrderInput | SortOrder
    targetPrice?: SortOrderInput | SortOrder
    addedAt?: SortOrder
    watchlist?: WatchlistOrderByWithRelationInput
    stock?: StockOrderByWithRelationInput
  }

  export type WatchlistItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    watchlistId_stockId?: WatchlistItemWatchlistIdStockIdCompoundUniqueInput
    AND?: WatchlistItemWhereInput | WatchlistItemWhereInput[]
    OR?: WatchlistItemWhereInput[]
    NOT?: WatchlistItemWhereInput | WatchlistItemWhereInput[]
    watchlistId?: StringFilter<"WatchlistItem"> | string
    stockId?: StringFilter<"WatchlistItem"> | string
    intent?: EnumWatchIntentFilter<"WatchlistItem"> | $Enums.WatchIntent
    purchasePrice?: DecimalNullableFilter<"WatchlistItem"> | Decimal | DecimalJsLike | number | string | null
    targetPrice?: DecimalNullableFilter<"WatchlistItem"> | Decimal | DecimalJsLike | number | string | null
    addedAt?: DateTimeFilter<"WatchlistItem"> | Date | string
    watchlist?: XOR<WatchlistScalarRelationFilter, WatchlistWhereInput>
    stock?: XOR<StockScalarRelationFilter, StockWhereInput>
  }, "id" | "watchlistId_stockId">

  export type WatchlistItemOrderByWithAggregationInput = {
    id?: SortOrder
    watchlistId?: SortOrder
    stockId?: SortOrder
    intent?: SortOrder
    purchasePrice?: SortOrderInput | SortOrder
    targetPrice?: SortOrderInput | SortOrder
    addedAt?: SortOrder
    _count?: WatchlistItemCountOrderByAggregateInput
    _avg?: WatchlistItemAvgOrderByAggregateInput
    _max?: WatchlistItemMaxOrderByAggregateInput
    _min?: WatchlistItemMinOrderByAggregateInput
    _sum?: WatchlistItemSumOrderByAggregateInput
  }

  export type WatchlistItemScalarWhereWithAggregatesInput = {
    AND?: WatchlistItemScalarWhereWithAggregatesInput | WatchlistItemScalarWhereWithAggregatesInput[]
    OR?: WatchlistItemScalarWhereWithAggregatesInput[]
    NOT?: WatchlistItemScalarWhereWithAggregatesInput | WatchlistItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WatchlistItem"> | string
    watchlistId?: StringWithAggregatesFilter<"WatchlistItem"> | string
    stockId?: StringWithAggregatesFilter<"WatchlistItem"> | string
    intent?: EnumWatchIntentWithAggregatesFilter<"WatchlistItem"> | $Enums.WatchIntent
    purchasePrice?: DecimalNullableWithAggregatesFilter<"WatchlistItem"> | Decimal | DecimalJsLike | number | string | null
    targetPrice?: DecimalNullableWithAggregatesFilter<"WatchlistItem"> | Decimal | DecimalJsLike | number | string | null
    addedAt?: DateTimeWithAggregatesFilter<"WatchlistItem"> | Date | string
  }

  export type MarketSnapshotWhereInput = {
    AND?: MarketSnapshotWhereInput | MarketSnapshotWhereInput[]
    OR?: MarketSnapshotWhereInput[]
    NOT?: MarketSnapshotWhereInput | MarketSnapshotWhereInput[]
    id?: StringFilter<"MarketSnapshot"> | string
    stockId?: StringFilter<"MarketSnapshot"> | string
    price?: DecimalFilter<"MarketSnapshot"> | Decimal | DecimalJsLike | number | string
    volume?: DecimalNullableFilter<"MarketSnapshot"> | Decimal | DecimalJsLike | number | string | null
    open?: DecimalNullableFilter<"MarketSnapshot"> | Decimal | DecimalJsLike | number | string | null
    previousClose?: DecimalNullableFilter<"MarketSnapshot"> | Decimal | DecimalJsLike | number | string | null
    dayHigh?: DecimalNullableFilter<"MarketSnapshot"> | Decimal | DecimalJsLike | number | string | null
    dayLow?: DecimalNullableFilter<"MarketSnapshot"> | Decimal | DecimalJsLike | number | string | null
    fiftyTwoWeekHigh?: DecimalNullableFilter<"MarketSnapshot"> | Decimal | DecimalJsLike | number | string | null
    fiftyTwoWeekLow?: DecimalNullableFilter<"MarketSnapshot"> | Decimal | DecimalJsLike | number | string | null
    marketTimestamp?: DateTimeFilter<"MarketSnapshot"> | Date | string
    fetchedAt?: DateTimeFilter<"MarketSnapshot"> | Date | string
    source?: StringFilter<"MarketSnapshot"> | string
    stock?: XOR<StockScalarRelationFilter, StockWhereInput>
    attentionEvents?: AttentionEventListRelationFilter
  }

  export type MarketSnapshotOrderByWithRelationInput = {
    id?: SortOrder
    stockId?: SortOrder
    price?: SortOrder
    volume?: SortOrderInput | SortOrder
    open?: SortOrderInput | SortOrder
    previousClose?: SortOrderInput | SortOrder
    dayHigh?: SortOrderInput | SortOrder
    dayLow?: SortOrderInput | SortOrder
    fiftyTwoWeekHigh?: SortOrderInput | SortOrder
    fiftyTwoWeekLow?: SortOrderInput | SortOrder
    marketTimestamp?: SortOrder
    fetchedAt?: SortOrder
    source?: SortOrder
    stock?: StockOrderByWithRelationInput
    attentionEvents?: AttentionEventOrderByRelationAggregateInput
  }

  export type MarketSnapshotWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MarketSnapshotWhereInput | MarketSnapshotWhereInput[]
    OR?: MarketSnapshotWhereInput[]
    NOT?: MarketSnapshotWhereInput | MarketSnapshotWhereInput[]
    stockId?: StringFilter<"MarketSnapshot"> | string
    price?: DecimalFilter<"MarketSnapshot"> | Decimal | DecimalJsLike | number | string
    volume?: DecimalNullableFilter<"MarketSnapshot"> | Decimal | DecimalJsLike | number | string | null
    open?: DecimalNullableFilter<"MarketSnapshot"> | Decimal | DecimalJsLike | number | string | null
    previousClose?: DecimalNullableFilter<"MarketSnapshot"> | Decimal | DecimalJsLike | number | string | null
    dayHigh?: DecimalNullableFilter<"MarketSnapshot"> | Decimal | DecimalJsLike | number | string | null
    dayLow?: DecimalNullableFilter<"MarketSnapshot"> | Decimal | DecimalJsLike | number | string | null
    fiftyTwoWeekHigh?: DecimalNullableFilter<"MarketSnapshot"> | Decimal | DecimalJsLike | number | string | null
    fiftyTwoWeekLow?: DecimalNullableFilter<"MarketSnapshot"> | Decimal | DecimalJsLike | number | string | null
    marketTimestamp?: DateTimeFilter<"MarketSnapshot"> | Date | string
    fetchedAt?: DateTimeFilter<"MarketSnapshot"> | Date | string
    source?: StringFilter<"MarketSnapshot"> | string
    stock?: XOR<StockScalarRelationFilter, StockWhereInput>
    attentionEvents?: AttentionEventListRelationFilter
  }, "id">

  export type MarketSnapshotOrderByWithAggregationInput = {
    id?: SortOrder
    stockId?: SortOrder
    price?: SortOrder
    volume?: SortOrderInput | SortOrder
    open?: SortOrderInput | SortOrder
    previousClose?: SortOrderInput | SortOrder
    dayHigh?: SortOrderInput | SortOrder
    dayLow?: SortOrderInput | SortOrder
    fiftyTwoWeekHigh?: SortOrderInput | SortOrder
    fiftyTwoWeekLow?: SortOrderInput | SortOrder
    marketTimestamp?: SortOrder
    fetchedAt?: SortOrder
    source?: SortOrder
    _count?: MarketSnapshotCountOrderByAggregateInput
    _avg?: MarketSnapshotAvgOrderByAggregateInput
    _max?: MarketSnapshotMaxOrderByAggregateInput
    _min?: MarketSnapshotMinOrderByAggregateInput
    _sum?: MarketSnapshotSumOrderByAggregateInput
  }

  export type MarketSnapshotScalarWhereWithAggregatesInput = {
    AND?: MarketSnapshotScalarWhereWithAggregatesInput | MarketSnapshotScalarWhereWithAggregatesInput[]
    OR?: MarketSnapshotScalarWhereWithAggregatesInput[]
    NOT?: MarketSnapshotScalarWhereWithAggregatesInput | MarketSnapshotScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MarketSnapshot"> | string
    stockId?: StringWithAggregatesFilter<"MarketSnapshot"> | string
    price?: DecimalWithAggregatesFilter<"MarketSnapshot"> | Decimal | DecimalJsLike | number | string
    volume?: DecimalNullableWithAggregatesFilter<"MarketSnapshot"> | Decimal | DecimalJsLike | number | string | null
    open?: DecimalNullableWithAggregatesFilter<"MarketSnapshot"> | Decimal | DecimalJsLike | number | string | null
    previousClose?: DecimalNullableWithAggregatesFilter<"MarketSnapshot"> | Decimal | DecimalJsLike | number | string | null
    dayHigh?: DecimalNullableWithAggregatesFilter<"MarketSnapshot"> | Decimal | DecimalJsLike | number | string | null
    dayLow?: DecimalNullableWithAggregatesFilter<"MarketSnapshot"> | Decimal | DecimalJsLike | number | string | null
    fiftyTwoWeekHigh?: DecimalNullableWithAggregatesFilter<"MarketSnapshot"> | Decimal | DecimalJsLike | number | string | null
    fiftyTwoWeekLow?: DecimalNullableWithAggregatesFilter<"MarketSnapshot"> | Decimal | DecimalJsLike | number | string | null
    marketTimestamp?: DateTimeWithAggregatesFilter<"MarketSnapshot"> | Date | string
    fetchedAt?: DateTimeWithAggregatesFilter<"MarketSnapshot"> | Date | string
    source?: StringWithAggregatesFilter<"MarketSnapshot"> | string
  }

  export type UserStockCheckpointWhereInput = {
    AND?: UserStockCheckpointWhereInput | UserStockCheckpointWhereInput[]
    OR?: UserStockCheckpointWhereInput[]
    NOT?: UserStockCheckpointWhereInput | UserStockCheckpointWhereInput[]
    id?: StringFilter<"UserStockCheckpoint"> | string
    userId?: StringFilter<"UserStockCheckpoint"> | string
    stockId?: StringFilter<"UserStockCheckpoint"> | string
    lastSeenPrice?: DecimalFilter<"UserStockCheckpoint"> | Decimal | DecimalJsLike | number | string
    lastSeenMarketTimestamp?: DateTimeFilter<"UserStockCheckpoint"> | Date | string
    lastViewedAt?: DateTimeFilter<"UserStockCheckpoint"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    stock?: XOR<StockScalarRelationFilter, StockWhereInput>
  }

  export type UserStockCheckpointOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    stockId?: SortOrder
    lastSeenPrice?: SortOrder
    lastSeenMarketTimestamp?: SortOrder
    lastViewedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    stock?: StockOrderByWithRelationInput
  }

  export type UserStockCheckpointWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_stockId?: UserStockCheckpointUserIdStockIdCompoundUniqueInput
    AND?: UserStockCheckpointWhereInput | UserStockCheckpointWhereInput[]
    OR?: UserStockCheckpointWhereInput[]
    NOT?: UserStockCheckpointWhereInput | UserStockCheckpointWhereInput[]
    userId?: StringFilter<"UserStockCheckpoint"> | string
    stockId?: StringFilter<"UserStockCheckpoint"> | string
    lastSeenPrice?: DecimalFilter<"UserStockCheckpoint"> | Decimal | DecimalJsLike | number | string
    lastSeenMarketTimestamp?: DateTimeFilter<"UserStockCheckpoint"> | Date | string
    lastViewedAt?: DateTimeFilter<"UserStockCheckpoint"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    stock?: XOR<StockScalarRelationFilter, StockWhereInput>
  }, "id" | "userId_stockId">

  export type UserStockCheckpointOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    stockId?: SortOrder
    lastSeenPrice?: SortOrder
    lastSeenMarketTimestamp?: SortOrder
    lastViewedAt?: SortOrder
    _count?: UserStockCheckpointCountOrderByAggregateInput
    _avg?: UserStockCheckpointAvgOrderByAggregateInput
    _max?: UserStockCheckpointMaxOrderByAggregateInput
    _min?: UserStockCheckpointMinOrderByAggregateInput
    _sum?: UserStockCheckpointSumOrderByAggregateInput
  }

  export type UserStockCheckpointScalarWhereWithAggregatesInput = {
    AND?: UserStockCheckpointScalarWhereWithAggregatesInput | UserStockCheckpointScalarWhereWithAggregatesInput[]
    OR?: UserStockCheckpointScalarWhereWithAggregatesInput[]
    NOT?: UserStockCheckpointScalarWhereWithAggregatesInput | UserStockCheckpointScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserStockCheckpoint"> | string
    userId?: StringWithAggregatesFilter<"UserStockCheckpoint"> | string
    stockId?: StringWithAggregatesFilter<"UserStockCheckpoint"> | string
    lastSeenPrice?: DecimalWithAggregatesFilter<"UserStockCheckpoint"> | Decimal | DecimalJsLike | number | string
    lastSeenMarketTimestamp?: DateTimeWithAggregatesFilter<"UserStockCheckpoint"> | Date | string
    lastViewedAt?: DateTimeWithAggregatesFilter<"UserStockCheckpoint"> | Date | string
  }

  export type AttentionEventWhereInput = {
    AND?: AttentionEventWhereInput | AttentionEventWhereInput[]
    OR?: AttentionEventWhereInput[]
    NOT?: AttentionEventWhereInput | AttentionEventWhereInput[]
    id?: StringFilter<"AttentionEvent"> | string
    userId?: StringFilter<"AttentionEvent"> | string
    stockId?: StringFilter<"AttentionEvent"> | string
    snapshotId?: StringFilter<"AttentionEvent"> | string
    type?: EnumAttentionTypeFilter<"AttentionEvent"> | $Enums.AttentionType
    severity?: EnumAttentionSeverityFilter<"AttentionEvent"> | $Enums.AttentionSeverity
    previousPrice?: DecimalNullableFilter<"AttentionEvent"> | Decimal | DecimalJsLike | number | string | null
    currentPrice?: DecimalNullableFilter<"AttentionEvent"> | Decimal | DecimalJsLike | number | string | null
    changePercent?: DecimalNullableFilter<"AttentionEvent"> | Decimal | DecimalJsLike | number | string | null
    detectedAt?: DateTimeFilter<"AttentionEvent"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    stock?: XOR<StockScalarRelationFilter, StockWhereInput>
    snapshot?: XOR<MarketSnapshotScalarRelationFilter, MarketSnapshotWhereInput>
  }

  export type AttentionEventOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    stockId?: SortOrder
    snapshotId?: SortOrder
    type?: SortOrder
    severity?: SortOrder
    previousPrice?: SortOrderInput | SortOrder
    currentPrice?: SortOrderInput | SortOrder
    changePercent?: SortOrderInput | SortOrder
    detectedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    stock?: StockOrderByWithRelationInput
    snapshot?: MarketSnapshotOrderByWithRelationInput
  }

  export type AttentionEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_snapshotId?: AttentionEventUserIdSnapshotIdCompoundUniqueInput
    AND?: AttentionEventWhereInput | AttentionEventWhereInput[]
    OR?: AttentionEventWhereInput[]
    NOT?: AttentionEventWhereInput | AttentionEventWhereInput[]
    userId?: StringFilter<"AttentionEvent"> | string
    stockId?: StringFilter<"AttentionEvent"> | string
    snapshotId?: StringFilter<"AttentionEvent"> | string
    type?: EnumAttentionTypeFilter<"AttentionEvent"> | $Enums.AttentionType
    severity?: EnumAttentionSeverityFilter<"AttentionEvent"> | $Enums.AttentionSeverity
    previousPrice?: DecimalNullableFilter<"AttentionEvent"> | Decimal | DecimalJsLike | number | string | null
    currentPrice?: DecimalNullableFilter<"AttentionEvent"> | Decimal | DecimalJsLike | number | string | null
    changePercent?: DecimalNullableFilter<"AttentionEvent"> | Decimal | DecimalJsLike | number | string | null
    detectedAt?: DateTimeFilter<"AttentionEvent"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    stock?: XOR<StockScalarRelationFilter, StockWhereInput>
    snapshot?: XOR<MarketSnapshotScalarRelationFilter, MarketSnapshotWhereInput>
  }, "id" | "userId_snapshotId">

  export type AttentionEventOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    stockId?: SortOrder
    snapshotId?: SortOrder
    type?: SortOrder
    severity?: SortOrder
    previousPrice?: SortOrderInput | SortOrder
    currentPrice?: SortOrderInput | SortOrder
    changePercent?: SortOrderInput | SortOrder
    detectedAt?: SortOrder
    _count?: AttentionEventCountOrderByAggregateInput
    _avg?: AttentionEventAvgOrderByAggregateInput
    _max?: AttentionEventMaxOrderByAggregateInput
    _min?: AttentionEventMinOrderByAggregateInput
    _sum?: AttentionEventSumOrderByAggregateInput
  }

  export type AttentionEventScalarWhereWithAggregatesInput = {
    AND?: AttentionEventScalarWhereWithAggregatesInput | AttentionEventScalarWhereWithAggregatesInput[]
    OR?: AttentionEventScalarWhereWithAggregatesInput[]
    NOT?: AttentionEventScalarWhereWithAggregatesInput | AttentionEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AttentionEvent"> | string
    userId?: StringWithAggregatesFilter<"AttentionEvent"> | string
    stockId?: StringWithAggregatesFilter<"AttentionEvent"> | string
    snapshotId?: StringWithAggregatesFilter<"AttentionEvent"> | string
    type?: EnumAttentionTypeWithAggregatesFilter<"AttentionEvent"> | $Enums.AttentionType
    severity?: EnumAttentionSeverityWithAggregatesFilter<"AttentionEvent"> | $Enums.AttentionSeverity
    previousPrice?: DecimalNullableWithAggregatesFilter<"AttentionEvent"> | Decimal | DecimalJsLike | number | string | null
    currentPrice?: DecimalNullableWithAggregatesFilter<"AttentionEvent"> | Decimal | DecimalJsLike | number | string | null
    changePercent?: DecimalNullableWithAggregatesFilter<"AttentionEvent"> | Decimal | DecimalJsLike | number | string | null
    detectedAt?: DateTimeWithAggregatesFilter<"AttentionEvent"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    passwordHash?: string | null
    googleId?: string | null
    authProvider?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    watchlists?: WatchlistCreateNestedManyWithoutUserInput
    checkpoints?: UserStockCheckpointCreateNestedManyWithoutUserInput
    attentionEvents?: AttentionEventCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    passwordHash?: string | null
    googleId?: string | null
    authProvider?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    watchlists?: WatchlistUncheckedCreateNestedManyWithoutUserInput
    checkpoints?: UserStockCheckpointUncheckedCreateNestedManyWithoutUserInput
    attentionEvents?: AttentionEventUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    authProvider?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    watchlists?: WatchlistUpdateManyWithoutUserNestedInput
    checkpoints?: UserStockCheckpointUpdateManyWithoutUserNestedInput
    attentionEvents?: AttentionEventUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    authProvider?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    watchlists?: WatchlistUncheckedUpdateManyWithoutUserNestedInput
    checkpoints?: UserStockCheckpointUncheckedUpdateManyWithoutUserNestedInput
    attentionEvents?: AttentionEventUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    passwordHash?: string | null
    googleId?: string | null
    authProvider?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    authProvider?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    authProvider?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchlistCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutWatchlistsInput
    items?: WatchlistItemCreateNestedManyWithoutWatchlistInput
  }

  export type WatchlistUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    createdAt?: Date | string
    items?: WatchlistItemUncheckedCreateNestedManyWithoutWatchlistInput
  }

  export type WatchlistUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWatchlistsNestedInput
    items?: WatchlistItemUpdateManyWithoutWatchlistNestedInput
  }

  export type WatchlistUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: WatchlistItemUncheckedUpdateManyWithoutWatchlistNestedInput
  }

  export type WatchlistCreateManyInput = {
    id?: string
    userId: string
    name: string
    createdAt?: Date | string
  }

  export type WatchlistUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchlistUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockCreateInput = {
    id?: string
    symbol: string
    name: string
    exchange: string
    watchlistItems?: WatchlistItemCreateNestedManyWithoutStockInput
    snapshots?: MarketSnapshotCreateNestedManyWithoutStockInput
    checkpoints?: UserStockCheckpointCreateNestedManyWithoutStockInput
    attentionEvents?: AttentionEventCreateNestedManyWithoutStockInput
  }

  export type StockUncheckedCreateInput = {
    id?: string
    symbol: string
    name: string
    exchange: string
    watchlistItems?: WatchlistItemUncheckedCreateNestedManyWithoutStockInput
    snapshots?: MarketSnapshotUncheckedCreateNestedManyWithoutStockInput
    checkpoints?: UserStockCheckpointUncheckedCreateNestedManyWithoutStockInput
    attentionEvents?: AttentionEventUncheckedCreateNestedManyWithoutStockInput
  }

  export type StockUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    exchange?: StringFieldUpdateOperationsInput | string
    watchlistItems?: WatchlistItemUpdateManyWithoutStockNestedInput
    snapshots?: MarketSnapshotUpdateManyWithoutStockNestedInput
    checkpoints?: UserStockCheckpointUpdateManyWithoutStockNestedInput
    attentionEvents?: AttentionEventUpdateManyWithoutStockNestedInput
  }

  export type StockUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    exchange?: StringFieldUpdateOperationsInput | string
    watchlistItems?: WatchlistItemUncheckedUpdateManyWithoutStockNestedInput
    snapshots?: MarketSnapshotUncheckedUpdateManyWithoutStockNestedInput
    checkpoints?: UserStockCheckpointUncheckedUpdateManyWithoutStockNestedInput
    attentionEvents?: AttentionEventUncheckedUpdateManyWithoutStockNestedInput
  }

  export type StockCreateManyInput = {
    id?: string
    symbol: string
    name: string
    exchange: string
  }

  export type StockUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    exchange?: StringFieldUpdateOperationsInput | string
  }

  export type StockUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    exchange?: StringFieldUpdateOperationsInput | string
  }

  export type WatchlistItemCreateInput = {
    id?: string
    intent: $Enums.WatchIntent
    purchasePrice?: Decimal | DecimalJsLike | number | string | null
    targetPrice?: Decimal | DecimalJsLike | number | string | null
    addedAt?: Date | string
    watchlist: WatchlistCreateNestedOneWithoutItemsInput
    stock: StockCreateNestedOneWithoutWatchlistItemsInput
  }

  export type WatchlistItemUncheckedCreateInput = {
    id?: string
    watchlistId: string
    stockId: string
    intent: $Enums.WatchIntent
    purchasePrice?: Decimal | DecimalJsLike | number | string | null
    targetPrice?: Decimal | DecimalJsLike | number | string | null
    addedAt?: Date | string
  }

  export type WatchlistItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    intent?: EnumWatchIntentFieldUpdateOperationsInput | $Enums.WatchIntent
    purchasePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    targetPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    watchlist?: WatchlistUpdateOneRequiredWithoutItemsNestedInput
    stock?: StockUpdateOneRequiredWithoutWatchlistItemsNestedInput
  }

  export type WatchlistItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    watchlistId?: StringFieldUpdateOperationsInput | string
    stockId?: StringFieldUpdateOperationsInput | string
    intent?: EnumWatchIntentFieldUpdateOperationsInput | $Enums.WatchIntent
    purchasePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    targetPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchlistItemCreateManyInput = {
    id?: string
    watchlistId: string
    stockId: string
    intent: $Enums.WatchIntent
    purchasePrice?: Decimal | DecimalJsLike | number | string | null
    targetPrice?: Decimal | DecimalJsLike | number | string | null
    addedAt?: Date | string
  }

  export type WatchlistItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    intent?: EnumWatchIntentFieldUpdateOperationsInput | $Enums.WatchIntent
    purchasePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    targetPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchlistItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    watchlistId?: StringFieldUpdateOperationsInput | string
    stockId?: StringFieldUpdateOperationsInput | string
    intent?: EnumWatchIntentFieldUpdateOperationsInput | $Enums.WatchIntent
    purchasePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    targetPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketSnapshotCreateInput = {
    id?: string
    price: Decimal | DecimalJsLike | number | string
    volume?: Decimal | DecimalJsLike | number | string | null
    open?: Decimal | DecimalJsLike | number | string | null
    previousClose?: Decimal | DecimalJsLike | number | string | null
    dayHigh?: Decimal | DecimalJsLike | number | string | null
    dayLow?: Decimal | DecimalJsLike | number | string | null
    fiftyTwoWeekHigh?: Decimal | DecimalJsLike | number | string | null
    fiftyTwoWeekLow?: Decimal | DecimalJsLike | number | string | null
    marketTimestamp: Date | string
    fetchedAt?: Date | string
    source: string
    stock: StockCreateNestedOneWithoutSnapshotsInput
    attentionEvents?: AttentionEventCreateNestedManyWithoutSnapshotInput
  }

  export type MarketSnapshotUncheckedCreateInput = {
    id?: string
    stockId: string
    price: Decimal | DecimalJsLike | number | string
    volume?: Decimal | DecimalJsLike | number | string | null
    open?: Decimal | DecimalJsLike | number | string | null
    previousClose?: Decimal | DecimalJsLike | number | string | null
    dayHigh?: Decimal | DecimalJsLike | number | string | null
    dayLow?: Decimal | DecimalJsLike | number | string | null
    fiftyTwoWeekHigh?: Decimal | DecimalJsLike | number | string | null
    fiftyTwoWeekLow?: Decimal | DecimalJsLike | number | string | null
    marketTimestamp: Date | string
    fetchedAt?: Date | string
    source: string
    attentionEvents?: AttentionEventUncheckedCreateNestedManyWithoutSnapshotInput
  }

  export type MarketSnapshotUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    volume?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    open?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    previousClose?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    dayHigh?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    dayLow?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fiftyTwoWeekHigh?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fiftyTwoWeekLow?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    marketTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    fetchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: StringFieldUpdateOperationsInput | string
    stock?: StockUpdateOneRequiredWithoutSnapshotsNestedInput
    attentionEvents?: AttentionEventUpdateManyWithoutSnapshotNestedInput
  }

  export type MarketSnapshotUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    stockId?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    volume?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    open?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    previousClose?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    dayHigh?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    dayLow?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fiftyTwoWeekHigh?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fiftyTwoWeekLow?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    marketTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    fetchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: StringFieldUpdateOperationsInput | string
    attentionEvents?: AttentionEventUncheckedUpdateManyWithoutSnapshotNestedInput
  }

  export type MarketSnapshotCreateManyInput = {
    id?: string
    stockId: string
    price: Decimal | DecimalJsLike | number | string
    volume?: Decimal | DecimalJsLike | number | string | null
    open?: Decimal | DecimalJsLike | number | string | null
    previousClose?: Decimal | DecimalJsLike | number | string | null
    dayHigh?: Decimal | DecimalJsLike | number | string | null
    dayLow?: Decimal | DecimalJsLike | number | string | null
    fiftyTwoWeekHigh?: Decimal | DecimalJsLike | number | string | null
    fiftyTwoWeekLow?: Decimal | DecimalJsLike | number | string | null
    marketTimestamp: Date | string
    fetchedAt?: Date | string
    source: string
  }

  export type MarketSnapshotUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    volume?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    open?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    previousClose?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    dayHigh?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    dayLow?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fiftyTwoWeekHigh?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fiftyTwoWeekLow?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    marketTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    fetchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: StringFieldUpdateOperationsInput | string
  }

  export type MarketSnapshotUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    stockId?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    volume?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    open?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    previousClose?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    dayHigh?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    dayLow?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fiftyTwoWeekHigh?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fiftyTwoWeekLow?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    marketTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    fetchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: StringFieldUpdateOperationsInput | string
  }

  export type UserStockCheckpointCreateInput = {
    id?: string
    lastSeenPrice: Decimal | DecimalJsLike | number | string
    lastSeenMarketTimestamp: Date | string
    lastViewedAt?: Date | string
    user: UserCreateNestedOneWithoutCheckpointsInput
    stock: StockCreateNestedOneWithoutCheckpointsInput
  }

  export type UserStockCheckpointUncheckedCreateInput = {
    id?: string
    userId: string
    stockId: string
    lastSeenPrice: Decimal | DecimalJsLike | number | string
    lastSeenMarketTimestamp: Date | string
    lastViewedAt?: Date | string
  }

  export type UserStockCheckpointUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastSeenPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lastSeenMarketTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    lastViewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCheckpointsNestedInput
    stock?: StockUpdateOneRequiredWithoutCheckpointsNestedInput
  }

  export type UserStockCheckpointUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    stockId?: StringFieldUpdateOperationsInput | string
    lastSeenPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lastSeenMarketTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    lastViewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserStockCheckpointCreateManyInput = {
    id?: string
    userId: string
    stockId: string
    lastSeenPrice: Decimal | DecimalJsLike | number | string
    lastSeenMarketTimestamp: Date | string
    lastViewedAt?: Date | string
  }

  export type UserStockCheckpointUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastSeenPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lastSeenMarketTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    lastViewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserStockCheckpointUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    stockId?: StringFieldUpdateOperationsInput | string
    lastSeenPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lastSeenMarketTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    lastViewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttentionEventCreateInput = {
    id?: string
    type: $Enums.AttentionType
    severity: $Enums.AttentionSeverity
    previousPrice?: Decimal | DecimalJsLike | number | string | null
    currentPrice?: Decimal | DecimalJsLike | number | string | null
    changePercent?: Decimal | DecimalJsLike | number | string | null
    detectedAt?: Date | string
    user: UserCreateNestedOneWithoutAttentionEventsInput
    stock: StockCreateNestedOneWithoutAttentionEventsInput
    snapshot: MarketSnapshotCreateNestedOneWithoutAttentionEventsInput
  }

  export type AttentionEventUncheckedCreateInput = {
    id?: string
    userId: string
    stockId: string
    snapshotId: string
    type: $Enums.AttentionType
    severity: $Enums.AttentionSeverity
    previousPrice?: Decimal | DecimalJsLike | number | string | null
    currentPrice?: Decimal | DecimalJsLike | number | string | null
    changePercent?: Decimal | DecimalJsLike | number | string | null
    detectedAt?: Date | string
  }

  export type AttentionEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAttentionTypeFieldUpdateOperationsInput | $Enums.AttentionType
    severity?: EnumAttentionSeverityFieldUpdateOperationsInput | $Enums.AttentionSeverity
    previousPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currentPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    changePercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    detectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAttentionEventsNestedInput
    stock?: StockUpdateOneRequiredWithoutAttentionEventsNestedInput
    snapshot?: MarketSnapshotUpdateOneRequiredWithoutAttentionEventsNestedInput
  }

  export type AttentionEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    stockId?: StringFieldUpdateOperationsInput | string
    snapshotId?: StringFieldUpdateOperationsInput | string
    type?: EnumAttentionTypeFieldUpdateOperationsInput | $Enums.AttentionType
    severity?: EnumAttentionSeverityFieldUpdateOperationsInput | $Enums.AttentionSeverity
    previousPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currentPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    changePercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    detectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttentionEventCreateManyInput = {
    id?: string
    userId: string
    stockId: string
    snapshotId: string
    type: $Enums.AttentionType
    severity: $Enums.AttentionSeverity
    previousPrice?: Decimal | DecimalJsLike | number | string | null
    currentPrice?: Decimal | DecimalJsLike | number | string | null
    changePercent?: Decimal | DecimalJsLike | number | string | null
    detectedAt?: Date | string
  }

  export type AttentionEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAttentionTypeFieldUpdateOperationsInput | $Enums.AttentionType
    severity?: EnumAttentionSeverityFieldUpdateOperationsInput | $Enums.AttentionSeverity
    previousPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currentPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    changePercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    detectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttentionEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    stockId?: StringFieldUpdateOperationsInput | string
    snapshotId?: StringFieldUpdateOperationsInput | string
    type?: EnumAttentionTypeFieldUpdateOperationsInput | $Enums.AttentionType
    severity?: EnumAttentionSeverityFieldUpdateOperationsInput | $Enums.AttentionSeverity
    previousPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currentPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    changePercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    detectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type WatchlistListRelationFilter = {
    every?: WatchlistWhereInput
    some?: WatchlistWhereInput
    none?: WatchlistWhereInput
  }

  export type UserStockCheckpointListRelationFilter = {
    every?: UserStockCheckpointWhereInput
    some?: UserStockCheckpointWhereInput
    none?: UserStockCheckpointWhereInput
  }

  export type AttentionEventListRelationFilter = {
    every?: AttentionEventWhereInput
    some?: AttentionEventWhereInput
    none?: AttentionEventWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type WatchlistOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserStockCheckpointOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AttentionEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    googleId?: SortOrder
    authProvider?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    googleId?: SortOrder
    authProvider?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    googleId?: SortOrder
    authProvider?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type WatchlistItemListRelationFilter = {
    every?: WatchlistItemWhereInput
    some?: WatchlistItemWhereInput
    none?: WatchlistItemWhereInput
  }

  export type WatchlistItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WatchlistCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type WatchlistMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type WatchlistMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type MarketSnapshotListRelationFilter = {
    every?: MarketSnapshotWhereInput
    some?: MarketSnapshotWhereInput
    none?: MarketSnapshotWhereInput
  }

  export type MarketSnapshotOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StockSymbolExchangeCompoundUniqueInput = {
    symbol: string
    exchange: string
  }

  export type StockCountOrderByAggregateInput = {
    id?: SortOrder
    symbol?: SortOrder
    name?: SortOrder
    exchange?: SortOrder
  }

  export type StockMaxOrderByAggregateInput = {
    id?: SortOrder
    symbol?: SortOrder
    name?: SortOrder
    exchange?: SortOrder
  }

  export type StockMinOrderByAggregateInput = {
    id?: SortOrder
    symbol?: SortOrder
    name?: SortOrder
    exchange?: SortOrder
  }

  export type EnumWatchIntentFilter<$PrismaModel = never> = {
    equals?: $Enums.WatchIntent | EnumWatchIntentFieldRefInput<$PrismaModel>
    in?: $Enums.WatchIntent[] | ListEnumWatchIntentFieldRefInput<$PrismaModel>
    notIn?: $Enums.WatchIntent[] | ListEnumWatchIntentFieldRefInput<$PrismaModel>
    not?: NestedEnumWatchIntentFilter<$PrismaModel> | $Enums.WatchIntent
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type WatchlistScalarRelationFilter = {
    is?: WatchlistWhereInput
    isNot?: WatchlistWhereInput
  }

  export type StockScalarRelationFilter = {
    is?: StockWhereInput
    isNot?: StockWhereInput
  }

  export type WatchlistItemWatchlistIdStockIdCompoundUniqueInput = {
    watchlistId: string
    stockId: string
  }

  export type WatchlistItemCountOrderByAggregateInput = {
    id?: SortOrder
    watchlistId?: SortOrder
    stockId?: SortOrder
    intent?: SortOrder
    purchasePrice?: SortOrder
    targetPrice?: SortOrder
    addedAt?: SortOrder
  }

  export type WatchlistItemAvgOrderByAggregateInput = {
    purchasePrice?: SortOrder
    targetPrice?: SortOrder
  }

  export type WatchlistItemMaxOrderByAggregateInput = {
    id?: SortOrder
    watchlistId?: SortOrder
    stockId?: SortOrder
    intent?: SortOrder
    purchasePrice?: SortOrder
    targetPrice?: SortOrder
    addedAt?: SortOrder
  }

  export type WatchlistItemMinOrderByAggregateInput = {
    id?: SortOrder
    watchlistId?: SortOrder
    stockId?: SortOrder
    intent?: SortOrder
    purchasePrice?: SortOrder
    targetPrice?: SortOrder
    addedAt?: SortOrder
  }

  export type WatchlistItemSumOrderByAggregateInput = {
    purchasePrice?: SortOrder
    targetPrice?: SortOrder
  }

  export type EnumWatchIntentWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WatchIntent | EnumWatchIntentFieldRefInput<$PrismaModel>
    in?: $Enums.WatchIntent[] | ListEnumWatchIntentFieldRefInput<$PrismaModel>
    notIn?: $Enums.WatchIntent[] | ListEnumWatchIntentFieldRefInput<$PrismaModel>
    not?: NestedEnumWatchIntentWithAggregatesFilter<$PrismaModel> | $Enums.WatchIntent
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWatchIntentFilter<$PrismaModel>
    _max?: NestedEnumWatchIntentFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type MarketSnapshotCountOrderByAggregateInput = {
    id?: SortOrder
    stockId?: SortOrder
    price?: SortOrder
    volume?: SortOrder
    open?: SortOrder
    previousClose?: SortOrder
    dayHigh?: SortOrder
    dayLow?: SortOrder
    fiftyTwoWeekHigh?: SortOrder
    fiftyTwoWeekLow?: SortOrder
    marketTimestamp?: SortOrder
    fetchedAt?: SortOrder
    source?: SortOrder
  }

  export type MarketSnapshotAvgOrderByAggregateInput = {
    price?: SortOrder
    volume?: SortOrder
    open?: SortOrder
    previousClose?: SortOrder
    dayHigh?: SortOrder
    dayLow?: SortOrder
    fiftyTwoWeekHigh?: SortOrder
    fiftyTwoWeekLow?: SortOrder
  }

  export type MarketSnapshotMaxOrderByAggregateInput = {
    id?: SortOrder
    stockId?: SortOrder
    price?: SortOrder
    volume?: SortOrder
    open?: SortOrder
    previousClose?: SortOrder
    dayHigh?: SortOrder
    dayLow?: SortOrder
    fiftyTwoWeekHigh?: SortOrder
    fiftyTwoWeekLow?: SortOrder
    marketTimestamp?: SortOrder
    fetchedAt?: SortOrder
    source?: SortOrder
  }

  export type MarketSnapshotMinOrderByAggregateInput = {
    id?: SortOrder
    stockId?: SortOrder
    price?: SortOrder
    volume?: SortOrder
    open?: SortOrder
    previousClose?: SortOrder
    dayHigh?: SortOrder
    dayLow?: SortOrder
    fiftyTwoWeekHigh?: SortOrder
    fiftyTwoWeekLow?: SortOrder
    marketTimestamp?: SortOrder
    fetchedAt?: SortOrder
    source?: SortOrder
  }

  export type MarketSnapshotSumOrderByAggregateInput = {
    price?: SortOrder
    volume?: SortOrder
    open?: SortOrder
    previousClose?: SortOrder
    dayHigh?: SortOrder
    dayLow?: SortOrder
    fiftyTwoWeekHigh?: SortOrder
    fiftyTwoWeekLow?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type UserStockCheckpointUserIdStockIdCompoundUniqueInput = {
    userId: string
    stockId: string
  }

  export type UserStockCheckpointCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    stockId?: SortOrder
    lastSeenPrice?: SortOrder
    lastSeenMarketTimestamp?: SortOrder
    lastViewedAt?: SortOrder
  }

  export type UserStockCheckpointAvgOrderByAggregateInput = {
    lastSeenPrice?: SortOrder
  }

  export type UserStockCheckpointMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    stockId?: SortOrder
    lastSeenPrice?: SortOrder
    lastSeenMarketTimestamp?: SortOrder
    lastViewedAt?: SortOrder
  }

  export type UserStockCheckpointMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    stockId?: SortOrder
    lastSeenPrice?: SortOrder
    lastSeenMarketTimestamp?: SortOrder
    lastViewedAt?: SortOrder
  }

  export type UserStockCheckpointSumOrderByAggregateInput = {
    lastSeenPrice?: SortOrder
  }

  export type EnumAttentionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AttentionType | EnumAttentionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AttentionType[] | ListEnumAttentionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttentionType[] | ListEnumAttentionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAttentionTypeFilter<$PrismaModel> | $Enums.AttentionType
  }

  export type EnumAttentionSeverityFilter<$PrismaModel = never> = {
    equals?: $Enums.AttentionSeverity | EnumAttentionSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.AttentionSeverity[] | ListEnumAttentionSeverityFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttentionSeverity[] | ListEnumAttentionSeverityFieldRefInput<$PrismaModel>
    not?: NestedEnumAttentionSeverityFilter<$PrismaModel> | $Enums.AttentionSeverity
  }

  export type MarketSnapshotScalarRelationFilter = {
    is?: MarketSnapshotWhereInput
    isNot?: MarketSnapshotWhereInput
  }

  export type AttentionEventUserIdSnapshotIdCompoundUniqueInput = {
    userId: string
    snapshotId: string
  }

  export type AttentionEventCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    stockId?: SortOrder
    snapshotId?: SortOrder
    type?: SortOrder
    severity?: SortOrder
    previousPrice?: SortOrder
    currentPrice?: SortOrder
    changePercent?: SortOrder
    detectedAt?: SortOrder
  }

  export type AttentionEventAvgOrderByAggregateInput = {
    previousPrice?: SortOrder
    currentPrice?: SortOrder
    changePercent?: SortOrder
  }

  export type AttentionEventMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    stockId?: SortOrder
    snapshotId?: SortOrder
    type?: SortOrder
    severity?: SortOrder
    previousPrice?: SortOrder
    currentPrice?: SortOrder
    changePercent?: SortOrder
    detectedAt?: SortOrder
  }

  export type AttentionEventMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    stockId?: SortOrder
    snapshotId?: SortOrder
    type?: SortOrder
    severity?: SortOrder
    previousPrice?: SortOrder
    currentPrice?: SortOrder
    changePercent?: SortOrder
    detectedAt?: SortOrder
  }

  export type AttentionEventSumOrderByAggregateInput = {
    previousPrice?: SortOrder
    currentPrice?: SortOrder
    changePercent?: SortOrder
  }

  export type EnumAttentionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttentionType | EnumAttentionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AttentionType[] | ListEnumAttentionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttentionType[] | ListEnumAttentionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAttentionTypeWithAggregatesFilter<$PrismaModel> | $Enums.AttentionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAttentionTypeFilter<$PrismaModel>
    _max?: NestedEnumAttentionTypeFilter<$PrismaModel>
  }

  export type EnumAttentionSeverityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttentionSeverity | EnumAttentionSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.AttentionSeverity[] | ListEnumAttentionSeverityFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttentionSeverity[] | ListEnumAttentionSeverityFieldRefInput<$PrismaModel>
    not?: NestedEnumAttentionSeverityWithAggregatesFilter<$PrismaModel> | $Enums.AttentionSeverity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAttentionSeverityFilter<$PrismaModel>
    _max?: NestedEnumAttentionSeverityFilter<$PrismaModel>
  }

  export type WatchlistCreateNestedManyWithoutUserInput = {
    create?: XOR<WatchlistCreateWithoutUserInput, WatchlistUncheckedCreateWithoutUserInput> | WatchlistCreateWithoutUserInput[] | WatchlistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WatchlistCreateOrConnectWithoutUserInput | WatchlistCreateOrConnectWithoutUserInput[]
    createMany?: WatchlistCreateManyUserInputEnvelope
    connect?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
  }

  export type UserStockCheckpointCreateNestedManyWithoutUserInput = {
    create?: XOR<UserStockCheckpointCreateWithoutUserInput, UserStockCheckpointUncheckedCreateWithoutUserInput> | UserStockCheckpointCreateWithoutUserInput[] | UserStockCheckpointUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserStockCheckpointCreateOrConnectWithoutUserInput | UserStockCheckpointCreateOrConnectWithoutUserInput[]
    createMany?: UserStockCheckpointCreateManyUserInputEnvelope
    connect?: UserStockCheckpointWhereUniqueInput | UserStockCheckpointWhereUniqueInput[]
  }

  export type AttentionEventCreateNestedManyWithoutUserInput = {
    create?: XOR<AttentionEventCreateWithoutUserInput, AttentionEventUncheckedCreateWithoutUserInput> | AttentionEventCreateWithoutUserInput[] | AttentionEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AttentionEventCreateOrConnectWithoutUserInput | AttentionEventCreateOrConnectWithoutUserInput[]
    createMany?: AttentionEventCreateManyUserInputEnvelope
    connect?: AttentionEventWhereUniqueInput | AttentionEventWhereUniqueInput[]
  }

  export type WatchlistUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WatchlistCreateWithoutUserInput, WatchlistUncheckedCreateWithoutUserInput> | WatchlistCreateWithoutUserInput[] | WatchlistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WatchlistCreateOrConnectWithoutUserInput | WatchlistCreateOrConnectWithoutUserInput[]
    createMany?: WatchlistCreateManyUserInputEnvelope
    connect?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
  }

  export type UserStockCheckpointUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserStockCheckpointCreateWithoutUserInput, UserStockCheckpointUncheckedCreateWithoutUserInput> | UserStockCheckpointCreateWithoutUserInput[] | UserStockCheckpointUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserStockCheckpointCreateOrConnectWithoutUserInput | UserStockCheckpointCreateOrConnectWithoutUserInput[]
    createMany?: UserStockCheckpointCreateManyUserInputEnvelope
    connect?: UserStockCheckpointWhereUniqueInput | UserStockCheckpointWhereUniqueInput[]
  }

  export type AttentionEventUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AttentionEventCreateWithoutUserInput, AttentionEventUncheckedCreateWithoutUserInput> | AttentionEventCreateWithoutUserInput[] | AttentionEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AttentionEventCreateOrConnectWithoutUserInput | AttentionEventCreateOrConnectWithoutUserInput[]
    createMany?: AttentionEventCreateManyUserInputEnvelope
    connect?: AttentionEventWhereUniqueInput | AttentionEventWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type WatchlistUpdateManyWithoutUserNestedInput = {
    create?: XOR<WatchlistCreateWithoutUserInput, WatchlistUncheckedCreateWithoutUserInput> | WatchlistCreateWithoutUserInput[] | WatchlistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WatchlistCreateOrConnectWithoutUserInput | WatchlistCreateOrConnectWithoutUserInput[]
    upsert?: WatchlistUpsertWithWhereUniqueWithoutUserInput | WatchlistUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WatchlistCreateManyUserInputEnvelope
    set?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
    disconnect?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
    delete?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
    connect?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
    update?: WatchlistUpdateWithWhereUniqueWithoutUserInput | WatchlistUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WatchlistUpdateManyWithWhereWithoutUserInput | WatchlistUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WatchlistScalarWhereInput | WatchlistScalarWhereInput[]
  }

  export type UserStockCheckpointUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserStockCheckpointCreateWithoutUserInput, UserStockCheckpointUncheckedCreateWithoutUserInput> | UserStockCheckpointCreateWithoutUserInput[] | UserStockCheckpointUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserStockCheckpointCreateOrConnectWithoutUserInput | UserStockCheckpointCreateOrConnectWithoutUserInput[]
    upsert?: UserStockCheckpointUpsertWithWhereUniqueWithoutUserInput | UserStockCheckpointUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserStockCheckpointCreateManyUserInputEnvelope
    set?: UserStockCheckpointWhereUniqueInput | UserStockCheckpointWhereUniqueInput[]
    disconnect?: UserStockCheckpointWhereUniqueInput | UserStockCheckpointWhereUniqueInput[]
    delete?: UserStockCheckpointWhereUniqueInput | UserStockCheckpointWhereUniqueInput[]
    connect?: UserStockCheckpointWhereUniqueInput | UserStockCheckpointWhereUniqueInput[]
    update?: UserStockCheckpointUpdateWithWhereUniqueWithoutUserInput | UserStockCheckpointUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserStockCheckpointUpdateManyWithWhereWithoutUserInput | UserStockCheckpointUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserStockCheckpointScalarWhereInput | UserStockCheckpointScalarWhereInput[]
  }

  export type AttentionEventUpdateManyWithoutUserNestedInput = {
    create?: XOR<AttentionEventCreateWithoutUserInput, AttentionEventUncheckedCreateWithoutUserInput> | AttentionEventCreateWithoutUserInput[] | AttentionEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AttentionEventCreateOrConnectWithoutUserInput | AttentionEventCreateOrConnectWithoutUserInput[]
    upsert?: AttentionEventUpsertWithWhereUniqueWithoutUserInput | AttentionEventUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AttentionEventCreateManyUserInputEnvelope
    set?: AttentionEventWhereUniqueInput | AttentionEventWhereUniqueInput[]
    disconnect?: AttentionEventWhereUniqueInput | AttentionEventWhereUniqueInput[]
    delete?: AttentionEventWhereUniqueInput | AttentionEventWhereUniqueInput[]
    connect?: AttentionEventWhereUniqueInput | AttentionEventWhereUniqueInput[]
    update?: AttentionEventUpdateWithWhereUniqueWithoutUserInput | AttentionEventUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AttentionEventUpdateManyWithWhereWithoutUserInput | AttentionEventUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AttentionEventScalarWhereInput | AttentionEventScalarWhereInput[]
  }

  export type WatchlistUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WatchlistCreateWithoutUserInput, WatchlistUncheckedCreateWithoutUserInput> | WatchlistCreateWithoutUserInput[] | WatchlistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WatchlistCreateOrConnectWithoutUserInput | WatchlistCreateOrConnectWithoutUserInput[]
    upsert?: WatchlistUpsertWithWhereUniqueWithoutUserInput | WatchlistUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WatchlistCreateManyUserInputEnvelope
    set?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
    disconnect?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
    delete?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
    connect?: WatchlistWhereUniqueInput | WatchlistWhereUniqueInput[]
    update?: WatchlistUpdateWithWhereUniqueWithoutUserInput | WatchlistUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WatchlistUpdateManyWithWhereWithoutUserInput | WatchlistUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WatchlistScalarWhereInput | WatchlistScalarWhereInput[]
  }

  export type UserStockCheckpointUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserStockCheckpointCreateWithoutUserInput, UserStockCheckpointUncheckedCreateWithoutUserInput> | UserStockCheckpointCreateWithoutUserInput[] | UserStockCheckpointUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserStockCheckpointCreateOrConnectWithoutUserInput | UserStockCheckpointCreateOrConnectWithoutUserInput[]
    upsert?: UserStockCheckpointUpsertWithWhereUniqueWithoutUserInput | UserStockCheckpointUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserStockCheckpointCreateManyUserInputEnvelope
    set?: UserStockCheckpointWhereUniqueInput | UserStockCheckpointWhereUniqueInput[]
    disconnect?: UserStockCheckpointWhereUniqueInput | UserStockCheckpointWhereUniqueInput[]
    delete?: UserStockCheckpointWhereUniqueInput | UserStockCheckpointWhereUniqueInput[]
    connect?: UserStockCheckpointWhereUniqueInput | UserStockCheckpointWhereUniqueInput[]
    update?: UserStockCheckpointUpdateWithWhereUniqueWithoutUserInput | UserStockCheckpointUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserStockCheckpointUpdateManyWithWhereWithoutUserInput | UserStockCheckpointUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserStockCheckpointScalarWhereInput | UserStockCheckpointScalarWhereInput[]
  }

  export type AttentionEventUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AttentionEventCreateWithoutUserInput, AttentionEventUncheckedCreateWithoutUserInput> | AttentionEventCreateWithoutUserInput[] | AttentionEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AttentionEventCreateOrConnectWithoutUserInput | AttentionEventCreateOrConnectWithoutUserInput[]
    upsert?: AttentionEventUpsertWithWhereUniqueWithoutUserInput | AttentionEventUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AttentionEventCreateManyUserInputEnvelope
    set?: AttentionEventWhereUniqueInput | AttentionEventWhereUniqueInput[]
    disconnect?: AttentionEventWhereUniqueInput | AttentionEventWhereUniqueInput[]
    delete?: AttentionEventWhereUniqueInput | AttentionEventWhereUniqueInput[]
    connect?: AttentionEventWhereUniqueInput | AttentionEventWhereUniqueInput[]
    update?: AttentionEventUpdateWithWhereUniqueWithoutUserInput | AttentionEventUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AttentionEventUpdateManyWithWhereWithoutUserInput | AttentionEventUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AttentionEventScalarWhereInput | AttentionEventScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutWatchlistsInput = {
    create?: XOR<UserCreateWithoutWatchlistsInput, UserUncheckedCreateWithoutWatchlistsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWatchlistsInput
    connect?: UserWhereUniqueInput
  }

  export type WatchlistItemCreateNestedManyWithoutWatchlistInput = {
    create?: XOR<WatchlistItemCreateWithoutWatchlistInput, WatchlistItemUncheckedCreateWithoutWatchlistInput> | WatchlistItemCreateWithoutWatchlistInput[] | WatchlistItemUncheckedCreateWithoutWatchlistInput[]
    connectOrCreate?: WatchlistItemCreateOrConnectWithoutWatchlistInput | WatchlistItemCreateOrConnectWithoutWatchlistInput[]
    createMany?: WatchlistItemCreateManyWatchlistInputEnvelope
    connect?: WatchlistItemWhereUniqueInput | WatchlistItemWhereUniqueInput[]
  }

  export type WatchlistItemUncheckedCreateNestedManyWithoutWatchlistInput = {
    create?: XOR<WatchlistItemCreateWithoutWatchlistInput, WatchlistItemUncheckedCreateWithoutWatchlistInput> | WatchlistItemCreateWithoutWatchlistInput[] | WatchlistItemUncheckedCreateWithoutWatchlistInput[]
    connectOrCreate?: WatchlistItemCreateOrConnectWithoutWatchlistInput | WatchlistItemCreateOrConnectWithoutWatchlistInput[]
    createMany?: WatchlistItemCreateManyWatchlistInputEnvelope
    connect?: WatchlistItemWhereUniqueInput | WatchlistItemWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutWatchlistsNestedInput = {
    create?: XOR<UserCreateWithoutWatchlistsInput, UserUncheckedCreateWithoutWatchlistsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWatchlistsInput
    upsert?: UserUpsertWithoutWatchlistsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWatchlistsInput, UserUpdateWithoutWatchlistsInput>, UserUncheckedUpdateWithoutWatchlistsInput>
  }

  export type WatchlistItemUpdateManyWithoutWatchlistNestedInput = {
    create?: XOR<WatchlistItemCreateWithoutWatchlistInput, WatchlistItemUncheckedCreateWithoutWatchlistInput> | WatchlistItemCreateWithoutWatchlistInput[] | WatchlistItemUncheckedCreateWithoutWatchlistInput[]
    connectOrCreate?: WatchlistItemCreateOrConnectWithoutWatchlistInput | WatchlistItemCreateOrConnectWithoutWatchlistInput[]
    upsert?: WatchlistItemUpsertWithWhereUniqueWithoutWatchlistInput | WatchlistItemUpsertWithWhereUniqueWithoutWatchlistInput[]
    createMany?: WatchlistItemCreateManyWatchlistInputEnvelope
    set?: WatchlistItemWhereUniqueInput | WatchlistItemWhereUniqueInput[]
    disconnect?: WatchlistItemWhereUniqueInput | WatchlistItemWhereUniqueInput[]
    delete?: WatchlistItemWhereUniqueInput | WatchlistItemWhereUniqueInput[]
    connect?: WatchlistItemWhereUniqueInput | WatchlistItemWhereUniqueInput[]
    update?: WatchlistItemUpdateWithWhereUniqueWithoutWatchlistInput | WatchlistItemUpdateWithWhereUniqueWithoutWatchlistInput[]
    updateMany?: WatchlistItemUpdateManyWithWhereWithoutWatchlistInput | WatchlistItemUpdateManyWithWhereWithoutWatchlistInput[]
    deleteMany?: WatchlistItemScalarWhereInput | WatchlistItemScalarWhereInput[]
  }

  export type WatchlistItemUncheckedUpdateManyWithoutWatchlistNestedInput = {
    create?: XOR<WatchlistItemCreateWithoutWatchlistInput, WatchlistItemUncheckedCreateWithoutWatchlistInput> | WatchlistItemCreateWithoutWatchlistInput[] | WatchlistItemUncheckedCreateWithoutWatchlistInput[]
    connectOrCreate?: WatchlistItemCreateOrConnectWithoutWatchlistInput | WatchlistItemCreateOrConnectWithoutWatchlistInput[]
    upsert?: WatchlistItemUpsertWithWhereUniqueWithoutWatchlistInput | WatchlistItemUpsertWithWhereUniqueWithoutWatchlistInput[]
    createMany?: WatchlistItemCreateManyWatchlistInputEnvelope
    set?: WatchlistItemWhereUniqueInput | WatchlistItemWhereUniqueInput[]
    disconnect?: WatchlistItemWhereUniqueInput | WatchlistItemWhereUniqueInput[]
    delete?: WatchlistItemWhereUniqueInput | WatchlistItemWhereUniqueInput[]
    connect?: WatchlistItemWhereUniqueInput | WatchlistItemWhereUniqueInput[]
    update?: WatchlistItemUpdateWithWhereUniqueWithoutWatchlistInput | WatchlistItemUpdateWithWhereUniqueWithoutWatchlistInput[]
    updateMany?: WatchlistItemUpdateManyWithWhereWithoutWatchlistInput | WatchlistItemUpdateManyWithWhereWithoutWatchlistInput[]
    deleteMany?: WatchlistItemScalarWhereInput | WatchlistItemScalarWhereInput[]
  }

  export type WatchlistItemCreateNestedManyWithoutStockInput = {
    create?: XOR<WatchlistItemCreateWithoutStockInput, WatchlistItemUncheckedCreateWithoutStockInput> | WatchlistItemCreateWithoutStockInput[] | WatchlistItemUncheckedCreateWithoutStockInput[]
    connectOrCreate?: WatchlistItemCreateOrConnectWithoutStockInput | WatchlistItemCreateOrConnectWithoutStockInput[]
    createMany?: WatchlistItemCreateManyStockInputEnvelope
    connect?: WatchlistItemWhereUniqueInput | WatchlistItemWhereUniqueInput[]
  }

  export type MarketSnapshotCreateNestedManyWithoutStockInput = {
    create?: XOR<MarketSnapshotCreateWithoutStockInput, MarketSnapshotUncheckedCreateWithoutStockInput> | MarketSnapshotCreateWithoutStockInput[] | MarketSnapshotUncheckedCreateWithoutStockInput[]
    connectOrCreate?: MarketSnapshotCreateOrConnectWithoutStockInput | MarketSnapshotCreateOrConnectWithoutStockInput[]
    createMany?: MarketSnapshotCreateManyStockInputEnvelope
    connect?: MarketSnapshotWhereUniqueInput | MarketSnapshotWhereUniqueInput[]
  }

  export type UserStockCheckpointCreateNestedManyWithoutStockInput = {
    create?: XOR<UserStockCheckpointCreateWithoutStockInput, UserStockCheckpointUncheckedCreateWithoutStockInput> | UserStockCheckpointCreateWithoutStockInput[] | UserStockCheckpointUncheckedCreateWithoutStockInput[]
    connectOrCreate?: UserStockCheckpointCreateOrConnectWithoutStockInput | UserStockCheckpointCreateOrConnectWithoutStockInput[]
    createMany?: UserStockCheckpointCreateManyStockInputEnvelope
    connect?: UserStockCheckpointWhereUniqueInput | UserStockCheckpointWhereUniqueInput[]
  }

  export type AttentionEventCreateNestedManyWithoutStockInput = {
    create?: XOR<AttentionEventCreateWithoutStockInput, AttentionEventUncheckedCreateWithoutStockInput> | AttentionEventCreateWithoutStockInput[] | AttentionEventUncheckedCreateWithoutStockInput[]
    connectOrCreate?: AttentionEventCreateOrConnectWithoutStockInput | AttentionEventCreateOrConnectWithoutStockInput[]
    createMany?: AttentionEventCreateManyStockInputEnvelope
    connect?: AttentionEventWhereUniqueInput | AttentionEventWhereUniqueInput[]
  }

  export type WatchlistItemUncheckedCreateNestedManyWithoutStockInput = {
    create?: XOR<WatchlistItemCreateWithoutStockInput, WatchlistItemUncheckedCreateWithoutStockInput> | WatchlistItemCreateWithoutStockInput[] | WatchlistItemUncheckedCreateWithoutStockInput[]
    connectOrCreate?: WatchlistItemCreateOrConnectWithoutStockInput | WatchlistItemCreateOrConnectWithoutStockInput[]
    createMany?: WatchlistItemCreateManyStockInputEnvelope
    connect?: WatchlistItemWhereUniqueInput | WatchlistItemWhereUniqueInput[]
  }

  export type MarketSnapshotUncheckedCreateNestedManyWithoutStockInput = {
    create?: XOR<MarketSnapshotCreateWithoutStockInput, MarketSnapshotUncheckedCreateWithoutStockInput> | MarketSnapshotCreateWithoutStockInput[] | MarketSnapshotUncheckedCreateWithoutStockInput[]
    connectOrCreate?: MarketSnapshotCreateOrConnectWithoutStockInput | MarketSnapshotCreateOrConnectWithoutStockInput[]
    createMany?: MarketSnapshotCreateManyStockInputEnvelope
    connect?: MarketSnapshotWhereUniqueInput | MarketSnapshotWhereUniqueInput[]
  }

  export type UserStockCheckpointUncheckedCreateNestedManyWithoutStockInput = {
    create?: XOR<UserStockCheckpointCreateWithoutStockInput, UserStockCheckpointUncheckedCreateWithoutStockInput> | UserStockCheckpointCreateWithoutStockInput[] | UserStockCheckpointUncheckedCreateWithoutStockInput[]
    connectOrCreate?: UserStockCheckpointCreateOrConnectWithoutStockInput | UserStockCheckpointCreateOrConnectWithoutStockInput[]
    createMany?: UserStockCheckpointCreateManyStockInputEnvelope
    connect?: UserStockCheckpointWhereUniqueInput | UserStockCheckpointWhereUniqueInput[]
  }

  export type AttentionEventUncheckedCreateNestedManyWithoutStockInput = {
    create?: XOR<AttentionEventCreateWithoutStockInput, AttentionEventUncheckedCreateWithoutStockInput> | AttentionEventCreateWithoutStockInput[] | AttentionEventUncheckedCreateWithoutStockInput[]
    connectOrCreate?: AttentionEventCreateOrConnectWithoutStockInput | AttentionEventCreateOrConnectWithoutStockInput[]
    createMany?: AttentionEventCreateManyStockInputEnvelope
    connect?: AttentionEventWhereUniqueInput | AttentionEventWhereUniqueInput[]
  }

  export type WatchlistItemUpdateManyWithoutStockNestedInput = {
    create?: XOR<WatchlistItemCreateWithoutStockInput, WatchlistItemUncheckedCreateWithoutStockInput> | WatchlistItemCreateWithoutStockInput[] | WatchlistItemUncheckedCreateWithoutStockInput[]
    connectOrCreate?: WatchlistItemCreateOrConnectWithoutStockInput | WatchlistItemCreateOrConnectWithoutStockInput[]
    upsert?: WatchlistItemUpsertWithWhereUniqueWithoutStockInput | WatchlistItemUpsertWithWhereUniqueWithoutStockInput[]
    createMany?: WatchlistItemCreateManyStockInputEnvelope
    set?: WatchlistItemWhereUniqueInput | WatchlistItemWhereUniqueInput[]
    disconnect?: WatchlistItemWhereUniqueInput | WatchlistItemWhereUniqueInput[]
    delete?: WatchlistItemWhereUniqueInput | WatchlistItemWhereUniqueInput[]
    connect?: WatchlistItemWhereUniqueInput | WatchlistItemWhereUniqueInput[]
    update?: WatchlistItemUpdateWithWhereUniqueWithoutStockInput | WatchlistItemUpdateWithWhereUniqueWithoutStockInput[]
    updateMany?: WatchlistItemUpdateManyWithWhereWithoutStockInput | WatchlistItemUpdateManyWithWhereWithoutStockInput[]
    deleteMany?: WatchlistItemScalarWhereInput | WatchlistItemScalarWhereInput[]
  }

  export type MarketSnapshotUpdateManyWithoutStockNestedInput = {
    create?: XOR<MarketSnapshotCreateWithoutStockInput, MarketSnapshotUncheckedCreateWithoutStockInput> | MarketSnapshotCreateWithoutStockInput[] | MarketSnapshotUncheckedCreateWithoutStockInput[]
    connectOrCreate?: MarketSnapshotCreateOrConnectWithoutStockInput | MarketSnapshotCreateOrConnectWithoutStockInput[]
    upsert?: MarketSnapshotUpsertWithWhereUniqueWithoutStockInput | MarketSnapshotUpsertWithWhereUniqueWithoutStockInput[]
    createMany?: MarketSnapshotCreateManyStockInputEnvelope
    set?: MarketSnapshotWhereUniqueInput | MarketSnapshotWhereUniqueInput[]
    disconnect?: MarketSnapshotWhereUniqueInput | MarketSnapshotWhereUniqueInput[]
    delete?: MarketSnapshotWhereUniqueInput | MarketSnapshotWhereUniqueInput[]
    connect?: MarketSnapshotWhereUniqueInput | MarketSnapshotWhereUniqueInput[]
    update?: MarketSnapshotUpdateWithWhereUniqueWithoutStockInput | MarketSnapshotUpdateWithWhereUniqueWithoutStockInput[]
    updateMany?: MarketSnapshotUpdateManyWithWhereWithoutStockInput | MarketSnapshotUpdateManyWithWhereWithoutStockInput[]
    deleteMany?: MarketSnapshotScalarWhereInput | MarketSnapshotScalarWhereInput[]
  }

  export type UserStockCheckpointUpdateManyWithoutStockNestedInput = {
    create?: XOR<UserStockCheckpointCreateWithoutStockInput, UserStockCheckpointUncheckedCreateWithoutStockInput> | UserStockCheckpointCreateWithoutStockInput[] | UserStockCheckpointUncheckedCreateWithoutStockInput[]
    connectOrCreate?: UserStockCheckpointCreateOrConnectWithoutStockInput | UserStockCheckpointCreateOrConnectWithoutStockInput[]
    upsert?: UserStockCheckpointUpsertWithWhereUniqueWithoutStockInput | UserStockCheckpointUpsertWithWhereUniqueWithoutStockInput[]
    createMany?: UserStockCheckpointCreateManyStockInputEnvelope
    set?: UserStockCheckpointWhereUniqueInput | UserStockCheckpointWhereUniqueInput[]
    disconnect?: UserStockCheckpointWhereUniqueInput | UserStockCheckpointWhereUniqueInput[]
    delete?: UserStockCheckpointWhereUniqueInput | UserStockCheckpointWhereUniqueInput[]
    connect?: UserStockCheckpointWhereUniqueInput | UserStockCheckpointWhereUniqueInput[]
    update?: UserStockCheckpointUpdateWithWhereUniqueWithoutStockInput | UserStockCheckpointUpdateWithWhereUniqueWithoutStockInput[]
    updateMany?: UserStockCheckpointUpdateManyWithWhereWithoutStockInput | UserStockCheckpointUpdateManyWithWhereWithoutStockInput[]
    deleteMany?: UserStockCheckpointScalarWhereInput | UserStockCheckpointScalarWhereInput[]
  }

  export type AttentionEventUpdateManyWithoutStockNestedInput = {
    create?: XOR<AttentionEventCreateWithoutStockInput, AttentionEventUncheckedCreateWithoutStockInput> | AttentionEventCreateWithoutStockInput[] | AttentionEventUncheckedCreateWithoutStockInput[]
    connectOrCreate?: AttentionEventCreateOrConnectWithoutStockInput | AttentionEventCreateOrConnectWithoutStockInput[]
    upsert?: AttentionEventUpsertWithWhereUniqueWithoutStockInput | AttentionEventUpsertWithWhereUniqueWithoutStockInput[]
    createMany?: AttentionEventCreateManyStockInputEnvelope
    set?: AttentionEventWhereUniqueInput | AttentionEventWhereUniqueInput[]
    disconnect?: AttentionEventWhereUniqueInput | AttentionEventWhereUniqueInput[]
    delete?: AttentionEventWhereUniqueInput | AttentionEventWhereUniqueInput[]
    connect?: AttentionEventWhereUniqueInput | AttentionEventWhereUniqueInput[]
    update?: AttentionEventUpdateWithWhereUniqueWithoutStockInput | AttentionEventUpdateWithWhereUniqueWithoutStockInput[]
    updateMany?: AttentionEventUpdateManyWithWhereWithoutStockInput | AttentionEventUpdateManyWithWhereWithoutStockInput[]
    deleteMany?: AttentionEventScalarWhereInput | AttentionEventScalarWhereInput[]
  }

  export type WatchlistItemUncheckedUpdateManyWithoutStockNestedInput = {
    create?: XOR<WatchlistItemCreateWithoutStockInput, WatchlistItemUncheckedCreateWithoutStockInput> | WatchlistItemCreateWithoutStockInput[] | WatchlistItemUncheckedCreateWithoutStockInput[]
    connectOrCreate?: WatchlistItemCreateOrConnectWithoutStockInput | WatchlistItemCreateOrConnectWithoutStockInput[]
    upsert?: WatchlistItemUpsertWithWhereUniqueWithoutStockInput | WatchlistItemUpsertWithWhereUniqueWithoutStockInput[]
    createMany?: WatchlistItemCreateManyStockInputEnvelope
    set?: WatchlistItemWhereUniqueInput | WatchlistItemWhereUniqueInput[]
    disconnect?: WatchlistItemWhereUniqueInput | WatchlistItemWhereUniqueInput[]
    delete?: WatchlistItemWhereUniqueInput | WatchlistItemWhereUniqueInput[]
    connect?: WatchlistItemWhereUniqueInput | WatchlistItemWhereUniqueInput[]
    update?: WatchlistItemUpdateWithWhereUniqueWithoutStockInput | WatchlistItemUpdateWithWhereUniqueWithoutStockInput[]
    updateMany?: WatchlistItemUpdateManyWithWhereWithoutStockInput | WatchlistItemUpdateManyWithWhereWithoutStockInput[]
    deleteMany?: WatchlistItemScalarWhereInput | WatchlistItemScalarWhereInput[]
  }

  export type MarketSnapshotUncheckedUpdateManyWithoutStockNestedInput = {
    create?: XOR<MarketSnapshotCreateWithoutStockInput, MarketSnapshotUncheckedCreateWithoutStockInput> | MarketSnapshotCreateWithoutStockInput[] | MarketSnapshotUncheckedCreateWithoutStockInput[]
    connectOrCreate?: MarketSnapshotCreateOrConnectWithoutStockInput | MarketSnapshotCreateOrConnectWithoutStockInput[]
    upsert?: MarketSnapshotUpsertWithWhereUniqueWithoutStockInput | MarketSnapshotUpsertWithWhereUniqueWithoutStockInput[]
    createMany?: MarketSnapshotCreateManyStockInputEnvelope
    set?: MarketSnapshotWhereUniqueInput | MarketSnapshotWhereUniqueInput[]
    disconnect?: MarketSnapshotWhereUniqueInput | MarketSnapshotWhereUniqueInput[]
    delete?: MarketSnapshotWhereUniqueInput | MarketSnapshotWhereUniqueInput[]
    connect?: MarketSnapshotWhereUniqueInput | MarketSnapshotWhereUniqueInput[]
    update?: MarketSnapshotUpdateWithWhereUniqueWithoutStockInput | MarketSnapshotUpdateWithWhereUniqueWithoutStockInput[]
    updateMany?: MarketSnapshotUpdateManyWithWhereWithoutStockInput | MarketSnapshotUpdateManyWithWhereWithoutStockInput[]
    deleteMany?: MarketSnapshotScalarWhereInput | MarketSnapshotScalarWhereInput[]
  }

  export type UserStockCheckpointUncheckedUpdateManyWithoutStockNestedInput = {
    create?: XOR<UserStockCheckpointCreateWithoutStockInput, UserStockCheckpointUncheckedCreateWithoutStockInput> | UserStockCheckpointCreateWithoutStockInput[] | UserStockCheckpointUncheckedCreateWithoutStockInput[]
    connectOrCreate?: UserStockCheckpointCreateOrConnectWithoutStockInput | UserStockCheckpointCreateOrConnectWithoutStockInput[]
    upsert?: UserStockCheckpointUpsertWithWhereUniqueWithoutStockInput | UserStockCheckpointUpsertWithWhereUniqueWithoutStockInput[]
    createMany?: UserStockCheckpointCreateManyStockInputEnvelope
    set?: UserStockCheckpointWhereUniqueInput | UserStockCheckpointWhereUniqueInput[]
    disconnect?: UserStockCheckpointWhereUniqueInput | UserStockCheckpointWhereUniqueInput[]
    delete?: UserStockCheckpointWhereUniqueInput | UserStockCheckpointWhereUniqueInput[]
    connect?: UserStockCheckpointWhereUniqueInput | UserStockCheckpointWhereUniqueInput[]
    update?: UserStockCheckpointUpdateWithWhereUniqueWithoutStockInput | UserStockCheckpointUpdateWithWhereUniqueWithoutStockInput[]
    updateMany?: UserStockCheckpointUpdateManyWithWhereWithoutStockInput | UserStockCheckpointUpdateManyWithWhereWithoutStockInput[]
    deleteMany?: UserStockCheckpointScalarWhereInput | UserStockCheckpointScalarWhereInput[]
  }

  export type AttentionEventUncheckedUpdateManyWithoutStockNestedInput = {
    create?: XOR<AttentionEventCreateWithoutStockInput, AttentionEventUncheckedCreateWithoutStockInput> | AttentionEventCreateWithoutStockInput[] | AttentionEventUncheckedCreateWithoutStockInput[]
    connectOrCreate?: AttentionEventCreateOrConnectWithoutStockInput | AttentionEventCreateOrConnectWithoutStockInput[]
    upsert?: AttentionEventUpsertWithWhereUniqueWithoutStockInput | AttentionEventUpsertWithWhereUniqueWithoutStockInput[]
    createMany?: AttentionEventCreateManyStockInputEnvelope
    set?: AttentionEventWhereUniqueInput | AttentionEventWhereUniqueInput[]
    disconnect?: AttentionEventWhereUniqueInput | AttentionEventWhereUniqueInput[]
    delete?: AttentionEventWhereUniqueInput | AttentionEventWhereUniqueInput[]
    connect?: AttentionEventWhereUniqueInput | AttentionEventWhereUniqueInput[]
    update?: AttentionEventUpdateWithWhereUniqueWithoutStockInput | AttentionEventUpdateWithWhereUniqueWithoutStockInput[]
    updateMany?: AttentionEventUpdateManyWithWhereWithoutStockInput | AttentionEventUpdateManyWithWhereWithoutStockInput[]
    deleteMany?: AttentionEventScalarWhereInput | AttentionEventScalarWhereInput[]
  }

  export type WatchlistCreateNestedOneWithoutItemsInput = {
    create?: XOR<WatchlistCreateWithoutItemsInput, WatchlistUncheckedCreateWithoutItemsInput>
    connectOrCreate?: WatchlistCreateOrConnectWithoutItemsInput
    connect?: WatchlistWhereUniqueInput
  }

  export type StockCreateNestedOneWithoutWatchlistItemsInput = {
    create?: XOR<StockCreateWithoutWatchlistItemsInput, StockUncheckedCreateWithoutWatchlistItemsInput>
    connectOrCreate?: StockCreateOrConnectWithoutWatchlistItemsInput
    connect?: StockWhereUniqueInput
  }

  export type EnumWatchIntentFieldUpdateOperationsInput = {
    set?: $Enums.WatchIntent
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type WatchlistUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<WatchlistCreateWithoutItemsInput, WatchlistUncheckedCreateWithoutItemsInput>
    connectOrCreate?: WatchlistCreateOrConnectWithoutItemsInput
    upsert?: WatchlistUpsertWithoutItemsInput
    connect?: WatchlistWhereUniqueInput
    update?: XOR<XOR<WatchlistUpdateToOneWithWhereWithoutItemsInput, WatchlistUpdateWithoutItemsInput>, WatchlistUncheckedUpdateWithoutItemsInput>
  }

  export type StockUpdateOneRequiredWithoutWatchlistItemsNestedInput = {
    create?: XOR<StockCreateWithoutWatchlistItemsInput, StockUncheckedCreateWithoutWatchlistItemsInput>
    connectOrCreate?: StockCreateOrConnectWithoutWatchlistItemsInput
    upsert?: StockUpsertWithoutWatchlistItemsInput
    connect?: StockWhereUniqueInput
    update?: XOR<XOR<StockUpdateToOneWithWhereWithoutWatchlistItemsInput, StockUpdateWithoutWatchlistItemsInput>, StockUncheckedUpdateWithoutWatchlistItemsInput>
  }

  export type StockCreateNestedOneWithoutSnapshotsInput = {
    create?: XOR<StockCreateWithoutSnapshotsInput, StockUncheckedCreateWithoutSnapshotsInput>
    connectOrCreate?: StockCreateOrConnectWithoutSnapshotsInput
    connect?: StockWhereUniqueInput
  }

  export type AttentionEventCreateNestedManyWithoutSnapshotInput = {
    create?: XOR<AttentionEventCreateWithoutSnapshotInput, AttentionEventUncheckedCreateWithoutSnapshotInput> | AttentionEventCreateWithoutSnapshotInput[] | AttentionEventUncheckedCreateWithoutSnapshotInput[]
    connectOrCreate?: AttentionEventCreateOrConnectWithoutSnapshotInput | AttentionEventCreateOrConnectWithoutSnapshotInput[]
    createMany?: AttentionEventCreateManySnapshotInputEnvelope
    connect?: AttentionEventWhereUniqueInput | AttentionEventWhereUniqueInput[]
  }

  export type AttentionEventUncheckedCreateNestedManyWithoutSnapshotInput = {
    create?: XOR<AttentionEventCreateWithoutSnapshotInput, AttentionEventUncheckedCreateWithoutSnapshotInput> | AttentionEventCreateWithoutSnapshotInput[] | AttentionEventUncheckedCreateWithoutSnapshotInput[]
    connectOrCreate?: AttentionEventCreateOrConnectWithoutSnapshotInput | AttentionEventCreateOrConnectWithoutSnapshotInput[]
    createMany?: AttentionEventCreateManySnapshotInputEnvelope
    connect?: AttentionEventWhereUniqueInput | AttentionEventWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type StockUpdateOneRequiredWithoutSnapshotsNestedInput = {
    create?: XOR<StockCreateWithoutSnapshotsInput, StockUncheckedCreateWithoutSnapshotsInput>
    connectOrCreate?: StockCreateOrConnectWithoutSnapshotsInput
    upsert?: StockUpsertWithoutSnapshotsInput
    connect?: StockWhereUniqueInput
    update?: XOR<XOR<StockUpdateToOneWithWhereWithoutSnapshotsInput, StockUpdateWithoutSnapshotsInput>, StockUncheckedUpdateWithoutSnapshotsInput>
  }

  export type AttentionEventUpdateManyWithoutSnapshotNestedInput = {
    create?: XOR<AttentionEventCreateWithoutSnapshotInput, AttentionEventUncheckedCreateWithoutSnapshotInput> | AttentionEventCreateWithoutSnapshotInput[] | AttentionEventUncheckedCreateWithoutSnapshotInput[]
    connectOrCreate?: AttentionEventCreateOrConnectWithoutSnapshotInput | AttentionEventCreateOrConnectWithoutSnapshotInput[]
    upsert?: AttentionEventUpsertWithWhereUniqueWithoutSnapshotInput | AttentionEventUpsertWithWhereUniqueWithoutSnapshotInput[]
    createMany?: AttentionEventCreateManySnapshotInputEnvelope
    set?: AttentionEventWhereUniqueInput | AttentionEventWhereUniqueInput[]
    disconnect?: AttentionEventWhereUniqueInput | AttentionEventWhereUniqueInput[]
    delete?: AttentionEventWhereUniqueInput | AttentionEventWhereUniqueInput[]
    connect?: AttentionEventWhereUniqueInput | AttentionEventWhereUniqueInput[]
    update?: AttentionEventUpdateWithWhereUniqueWithoutSnapshotInput | AttentionEventUpdateWithWhereUniqueWithoutSnapshotInput[]
    updateMany?: AttentionEventUpdateManyWithWhereWithoutSnapshotInput | AttentionEventUpdateManyWithWhereWithoutSnapshotInput[]
    deleteMany?: AttentionEventScalarWhereInput | AttentionEventScalarWhereInput[]
  }

  export type AttentionEventUncheckedUpdateManyWithoutSnapshotNestedInput = {
    create?: XOR<AttentionEventCreateWithoutSnapshotInput, AttentionEventUncheckedCreateWithoutSnapshotInput> | AttentionEventCreateWithoutSnapshotInput[] | AttentionEventUncheckedCreateWithoutSnapshotInput[]
    connectOrCreate?: AttentionEventCreateOrConnectWithoutSnapshotInput | AttentionEventCreateOrConnectWithoutSnapshotInput[]
    upsert?: AttentionEventUpsertWithWhereUniqueWithoutSnapshotInput | AttentionEventUpsertWithWhereUniqueWithoutSnapshotInput[]
    createMany?: AttentionEventCreateManySnapshotInputEnvelope
    set?: AttentionEventWhereUniqueInput | AttentionEventWhereUniqueInput[]
    disconnect?: AttentionEventWhereUniqueInput | AttentionEventWhereUniqueInput[]
    delete?: AttentionEventWhereUniqueInput | AttentionEventWhereUniqueInput[]
    connect?: AttentionEventWhereUniqueInput | AttentionEventWhereUniqueInput[]
    update?: AttentionEventUpdateWithWhereUniqueWithoutSnapshotInput | AttentionEventUpdateWithWhereUniqueWithoutSnapshotInput[]
    updateMany?: AttentionEventUpdateManyWithWhereWithoutSnapshotInput | AttentionEventUpdateManyWithWhereWithoutSnapshotInput[]
    deleteMany?: AttentionEventScalarWhereInput | AttentionEventScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCheckpointsInput = {
    create?: XOR<UserCreateWithoutCheckpointsInput, UserUncheckedCreateWithoutCheckpointsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCheckpointsInput
    connect?: UserWhereUniqueInput
  }

  export type StockCreateNestedOneWithoutCheckpointsInput = {
    create?: XOR<StockCreateWithoutCheckpointsInput, StockUncheckedCreateWithoutCheckpointsInput>
    connectOrCreate?: StockCreateOrConnectWithoutCheckpointsInput
    connect?: StockWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCheckpointsNestedInput = {
    create?: XOR<UserCreateWithoutCheckpointsInput, UserUncheckedCreateWithoutCheckpointsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCheckpointsInput
    upsert?: UserUpsertWithoutCheckpointsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCheckpointsInput, UserUpdateWithoutCheckpointsInput>, UserUncheckedUpdateWithoutCheckpointsInput>
  }

  export type StockUpdateOneRequiredWithoutCheckpointsNestedInput = {
    create?: XOR<StockCreateWithoutCheckpointsInput, StockUncheckedCreateWithoutCheckpointsInput>
    connectOrCreate?: StockCreateOrConnectWithoutCheckpointsInput
    upsert?: StockUpsertWithoutCheckpointsInput
    connect?: StockWhereUniqueInput
    update?: XOR<XOR<StockUpdateToOneWithWhereWithoutCheckpointsInput, StockUpdateWithoutCheckpointsInput>, StockUncheckedUpdateWithoutCheckpointsInput>
  }

  export type UserCreateNestedOneWithoutAttentionEventsInput = {
    create?: XOR<UserCreateWithoutAttentionEventsInput, UserUncheckedCreateWithoutAttentionEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAttentionEventsInput
    connect?: UserWhereUniqueInput
  }

  export type StockCreateNestedOneWithoutAttentionEventsInput = {
    create?: XOR<StockCreateWithoutAttentionEventsInput, StockUncheckedCreateWithoutAttentionEventsInput>
    connectOrCreate?: StockCreateOrConnectWithoutAttentionEventsInput
    connect?: StockWhereUniqueInput
  }

  export type MarketSnapshotCreateNestedOneWithoutAttentionEventsInput = {
    create?: XOR<MarketSnapshotCreateWithoutAttentionEventsInput, MarketSnapshotUncheckedCreateWithoutAttentionEventsInput>
    connectOrCreate?: MarketSnapshotCreateOrConnectWithoutAttentionEventsInput
    connect?: MarketSnapshotWhereUniqueInput
  }

  export type EnumAttentionTypeFieldUpdateOperationsInput = {
    set?: $Enums.AttentionType
  }

  export type EnumAttentionSeverityFieldUpdateOperationsInput = {
    set?: $Enums.AttentionSeverity
  }

  export type UserUpdateOneRequiredWithoutAttentionEventsNestedInput = {
    create?: XOR<UserCreateWithoutAttentionEventsInput, UserUncheckedCreateWithoutAttentionEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAttentionEventsInput
    upsert?: UserUpsertWithoutAttentionEventsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAttentionEventsInput, UserUpdateWithoutAttentionEventsInput>, UserUncheckedUpdateWithoutAttentionEventsInput>
  }

  export type StockUpdateOneRequiredWithoutAttentionEventsNestedInput = {
    create?: XOR<StockCreateWithoutAttentionEventsInput, StockUncheckedCreateWithoutAttentionEventsInput>
    connectOrCreate?: StockCreateOrConnectWithoutAttentionEventsInput
    upsert?: StockUpsertWithoutAttentionEventsInput
    connect?: StockWhereUniqueInput
    update?: XOR<XOR<StockUpdateToOneWithWhereWithoutAttentionEventsInput, StockUpdateWithoutAttentionEventsInput>, StockUncheckedUpdateWithoutAttentionEventsInput>
  }

  export type MarketSnapshotUpdateOneRequiredWithoutAttentionEventsNestedInput = {
    create?: XOR<MarketSnapshotCreateWithoutAttentionEventsInput, MarketSnapshotUncheckedCreateWithoutAttentionEventsInput>
    connectOrCreate?: MarketSnapshotCreateOrConnectWithoutAttentionEventsInput
    upsert?: MarketSnapshotUpsertWithoutAttentionEventsInput
    connect?: MarketSnapshotWhereUniqueInput
    update?: XOR<XOR<MarketSnapshotUpdateToOneWithWhereWithoutAttentionEventsInput, MarketSnapshotUpdateWithoutAttentionEventsInput>, MarketSnapshotUncheckedUpdateWithoutAttentionEventsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumWatchIntentFilter<$PrismaModel = never> = {
    equals?: $Enums.WatchIntent | EnumWatchIntentFieldRefInput<$PrismaModel>
    in?: $Enums.WatchIntent[] | ListEnumWatchIntentFieldRefInput<$PrismaModel>
    notIn?: $Enums.WatchIntent[] | ListEnumWatchIntentFieldRefInput<$PrismaModel>
    not?: NestedEnumWatchIntentFilter<$PrismaModel> | $Enums.WatchIntent
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedEnumWatchIntentWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WatchIntent | EnumWatchIntentFieldRefInput<$PrismaModel>
    in?: $Enums.WatchIntent[] | ListEnumWatchIntentFieldRefInput<$PrismaModel>
    notIn?: $Enums.WatchIntent[] | ListEnumWatchIntentFieldRefInput<$PrismaModel>
    not?: NestedEnumWatchIntentWithAggregatesFilter<$PrismaModel> | $Enums.WatchIntent
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWatchIntentFilter<$PrismaModel>
    _max?: NestedEnumWatchIntentFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumAttentionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AttentionType | EnumAttentionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AttentionType[] | ListEnumAttentionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttentionType[] | ListEnumAttentionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAttentionTypeFilter<$PrismaModel> | $Enums.AttentionType
  }

  export type NestedEnumAttentionSeverityFilter<$PrismaModel = never> = {
    equals?: $Enums.AttentionSeverity | EnumAttentionSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.AttentionSeverity[] | ListEnumAttentionSeverityFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttentionSeverity[] | ListEnumAttentionSeverityFieldRefInput<$PrismaModel>
    not?: NestedEnumAttentionSeverityFilter<$PrismaModel> | $Enums.AttentionSeverity
  }

  export type NestedEnumAttentionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttentionType | EnumAttentionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AttentionType[] | ListEnumAttentionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttentionType[] | ListEnumAttentionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAttentionTypeWithAggregatesFilter<$PrismaModel> | $Enums.AttentionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAttentionTypeFilter<$PrismaModel>
    _max?: NestedEnumAttentionTypeFilter<$PrismaModel>
  }

  export type NestedEnumAttentionSeverityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttentionSeverity | EnumAttentionSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.AttentionSeverity[] | ListEnumAttentionSeverityFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttentionSeverity[] | ListEnumAttentionSeverityFieldRefInput<$PrismaModel>
    not?: NestedEnumAttentionSeverityWithAggregatesFilter<$PrismaModel> | $Enums.AttentionSeverity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAttentionSeverityFilter<$PrismaModel>
    _max?: NestedEnumAttentionSeverityFilter<$PrismaModel>
  }

  export type WatchlistCreateWithoutUserInput = {
    id?: string
    name: string
    createdAt?: Date | string
    items?: WatchlistItemCreateNestedManyWithoutWatchlistInput
  }

  export type WatchlistUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    createdAt?: Date | string
    items?: WatchlistItemUncheckedCreateNestedManyWithoutWatchlistInput
  }

  export type WatchlistCreateOrConnectWithoutUserInput = {
    where: WatchlistWhereUniqueInput
    create: XOR<WatchlistCreateWithoutUserInput, WatchlistUncheckedCreateWithoutUserInput>
  }

  export type WatchlistCreateManyUserInputEnvelope = {
    data: WatchlistCreateManyUserInput | WatchlistCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserStockCheckpointCreateWithoutUserInput = {
    id?: string
    lastSeenPrice: Decimal | DecimalJsLike | number | string
    lastSeenMarketTimestamp: Date | string
    lastViewedAt?: Date | string
    stock: StockCreateNestedOneWithoutCheckpointsInput
  }

  export type UserStockCheckpointUncheckedCreateWithoutUserInput = {
    id?: string
    stockId: string
    lastSeenPrice: Decimal | DecimalJsLike | number | string
    lastSeenMarketTimestamp: Date | string
    lastViewedAt?: Date | string
  }

  export type UserStockCheckpointCreateOrConnectWithoutUserInput = {
    where: UserStockCheckpointWhereUniqueInput
    create: XOR<UserStockCheckpointCreateWithoutUserInput, UserStockCheckpointUncheckedCreateWithoutUserInput>
  }

  export type UserStockCheckpointCreateManyUserInputEnvelope = {
    data: UserStockCheckpointCreateManyUserInput | UserStockCheckpointCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AttentionEventCreateWithoutUserInput = {
    id?: string
    type: $Enums.AttentionType
    severity: $Enums.AttentionSeverity
    previousPrice?: Decimal | DecimalJsLike | number | string | null
    currentPrice?: Decimal | DecimalJsLike | number | string | null
    changePercent?: Decimal | DecimalJsLike | number | string | null
    detectedAt?: Date | string
    stock: StockCreateNestedOneWithoutAttentionEventsInput
    snapshot: MarketSnapshotCreateNestedOneWithoutAttentionEventsInput
  }

  export type AttentionEventUncheckedCreateWithoutUserInput = {
    id?: string
    stockId: string
    snapshotId: string
    type: $Enums.AttentionType
    severity: $Enums.AttentionSeverity
    previousPrice?: Decimal | DecimalJsLike | number | string | null
    currentPrice?: Decimal | DecimalJsLike | number | string | null
    changePercent?: Decimal | DecimalJsLike | number | string | null
    detectedAt?: Date | string
  }

  export type AttentionEventCreateOrConnectWithoutUserInput = {
    where: AttentionEventWhereUniqueInput
    create: XOR<AttentionEventCreateWithoutUserInput, AttentionEventUncheckedCreateWithoutUserInput>
  }

  export type AttentionEventCreateManyUserInputEnvelope = {
    data: AttentionEventCreateManyUserInput | AttentionEventCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WatchlistUpsertWithWhereUniqueWithoutUserInput = {
    where: WatchlistWhereUniqueInput
    update: XOR<WatchlistUpdateWithoutUserInput, WatchlistUncheckedUpdateWithoutUserInput>
    create: XOR<WatchlistCreateWithoutUserInput, WatchlistUncheckedCreateWithoutUserInput>
  }

  export type WatchlistUpdateWithWhereUniqueWithoutUserInput = {
    where: WatchlistWhereUniqueInput
    data: XOR<WatchlistUpdateWithoutUserInput, WatchlistUncheckedUpdateWithoutUserInput>
  }

  export type WatchlistUpdateManyWithWhereWithoutUserInput = {
    where: WatchlistScalarWhereInput
    data: XOR<WatchlistUpdateManyMutationInput, WatchlistUncheckedUpdateManyWithoutUserInput>
  }

  export type WatchlistScalarWhereInput = {
    AND?: WatchlistScalarWhereInput | WatchlistScalarWhereInput[]
    OR?: WatchlistScalarWhereInput[]
    NOT?: WatchlistScalarWhereInput | WatchlistScalarWhereInput[]
    id?: StringFilter<"Watchlist"> | string
    userId?: StringFilter<"Watchlist"> | string
    name?: StringFilter<"Watchlist"> | string
    createdAt?: DateTimeFilter<"Watchlist"> | Date | string
  }

  export type UserStockCheckpointUpsertWithWhereUniqueWithoutUserInput = {
    where: UserStockCheckpointWhereUniqueInput
    update: XOR<UserStockCheckpointUpdateWithoutUserInput, UserStockCheckpointUncheckedUpdateWithoutUserInput>
    create: XOR<UserStockCheckpointCreateWithoutUserInput, UserStockCheckpointUncheckedCreateWithoutUserInput>
  }

  export type UserStockCheckpointUpdateWithWhereUniqueWithoutUserInput = {
    where: UserStockCheckpointWhereUniqueInput
    data: XOR<UserStockCheckpointUpdateWithoutUserInput, UserStockCheckpointUncheckedUpdateWithoutUserInput>
  }

  export type UserStockCheckpointUpdateManyWithWhereWithoutUserInput = {
    where: UserStockCheckpointScalarWhereInput
    data: XOR<UserStockCheckpointUpdateManyMutationInput, UserStockCheckpointUncheckedUpdateManyWithoutUserInput>
  }

  export type UserStockCheckpointScalarWhereInput = {
    AND?: UserStockCheckpointScalarWhereInput | UserStockCheckpointScalarWhereInput[]
    OR?: UserStockCheckpointScalarWhereInput[]
    NOT?: UserStockCheckpointScalarWhereInput | UserStockCheckpointScalarWhereInput[]
    id?: StringFilter<"UserStockCheckpoint"> | string
    userId?: StringFilter<"UserStockCheckpoint"> | string
    stockId?: StringFilter<"UserStockCheckpoint"> | string
    lastSeenPrice?: DecimalFilter<"UserStockCheckpoint"> | Decimal | DecimalJsLike | number | string
    lastSeenMarketTimestamp?: DateTimeFilter<"UserStockCheckpoint"> | Date | string
    lastViewedAt?: DateTimeFilter<"UserStockCheckpoint"> | Date | string
  }

  export type AttentionEventUpsertWithWhereUniqueWithoutUserInput = {
    where: AttentionEventWhereUniqueInput
    update: XOR<AttentionEventUpdateWithoutUserInput, AttentionEventUncheckedUpdateWithoutUserInput>
    create: XOR<AttentionEventCreateWithoutUserInput, AttentionEventUncheckedCreateWithoutUserInput>
  }

  export type AttentionEventUpdateWithWhereUniqueWithoutUserInput = {
    where: AttentionEventWhereUniqueInput
    data: XOR<AttentionEventUpdateWithoutUserInput, AttentionEventUncheckedUpdateWithoutUserInput>
  }

  export type AttentionEventUpdateManyWithWhereWithoutUserInput = {
    where: AttentionEventScalarWhereInput
    data: XOR<AttentionEventUpdateManyMutationInput, AttentionEventUncheckedUpdateManyWithoutUserInput>
  }

  export type AttentionEventScalarWhereInput = {
    AND?: AttentionEventScalarWhereInput | AttentionEventScalarWhereInput[]
    OR?: AttentionEventScalarWhereInput[]
    NOT?: AttentionEventScalarWhereInput | AttentionEventScalarWhereInput[]
    id?: StringFilter<"AttentionEvent"> | string
    userId?: StringFilter<"AttentionEvent"> | string
    stockId?: StringFilter<"AttentionEvent"> | string
    snapshotId?: StringFilter<"AttentionEvent"> | string
    type?: EnumAttentionTypeFilter<"AttentionEvent"> | $Enums.AttentionType
    severity?: EnumAttentionSeverityFilter<"AttentionEvent"> | $Enums.AttentionSeverity
    previousPrice?: DecimalNullableFilter<"AttentionEvent"> | Decimal | DecimalJsLike | number | string | null
    currentPrice?: DecimalNullableFilter<"AttentionEvent"> | Decimal | DecimalJsLike | number | string | null
    changePercent?: DecimalNullableFilter<"AttentionEvent"> | Decimal | DecimalJsLike | number | string | null
    detectedAt?: DateTimeFilter<"AttentionEvent"> | Date | string
  }

  export type UserCreateWithoutWatchlistsInput = {
    id?: string
    name: string
    email: string
    passwordHash?: string | null
    googleId?: string | null
    authProvider?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    checkpoints?: UserStockCheckpointCreateNestedManyWithoutUserInput
    attentionEvents?: AttentionEventCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWatchlistsInput = {
    id?: string
    name: string
    email: string
    passwordHash?: string | null
    googleId?: string | null
    authProvider?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    checkpoints?: UserStockCheckpointUncheckedCreateNestedManyWithoutUserInput
    attentionEvents?: AttentionEventUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWatchlistsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWatchlistsInput, UserUncheckedCreateWithoutWatchlistsInput>
  }

  export type WatchlistItemCreateWithoutWatchlistInput = {
    id?: string
    intent: $Enums.WatchIntent
    purchasePrice?: Decimal | DecimalJsLike | number | string | null
    targetPrice?: Decimal | DecimalJsLike | number | string | null
    addedAt?: Date | string
    stock: StockCreateNestedOneWithoutWatchlistItemsInput
  }

  export type WatchlistItemUncheckedCreateWithoutWatchlistInput = {
    id?: string
    stockId: string
    intent: $Enums.WatchIntent
    purchasePrice?: Decimal | DecimalJsLike | number | string | null
    targetPrice?: Decimal | DecimalJsLike | number | string | null
    addedAt?: Date | string
  }

  export type WatchlistItemCreateOrConnectWithoutWatchlistInput = {
    where: WatchlistItemWhereUniqueInput
    create: XOR<WatchlistItemCreateWithoutWatchlistInput, WatchlistItemUncheckedCreateWithoutWatchlistInput>
  }

  export type WatchlistItemCreateManyWatchlistInputEnvelope = {
    data: WatchlistItemCreateManyWatchlistInput | WatchlistItemCreateManyWatchlistInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutWatchlistsInput = {
    update: XOR<UserUpdateWithoutWatchlistsInput, UserUncheckedUpdateWithoutWatchlistsInput>
    create: XOR<UserCreateWithoutWatchlistsInput, UserUncheckedCreateWithoutWatchlistsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWatchlistsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWatchlistsInput, UserUncheckedUpdateWithoutWatchlistsInput>
  }

  export type UserUpdateWithoutWatchlistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    authProvider?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkpoints?: UserStockCheckpointUpdateManyWithoutUserNestedInput
    attentionEvents?: AttentionEventUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWatchlistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    authProvider?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkpoints?: UserStockCheckpointUncheckedUpdateManyWithoutUserNestedInput
    attentionEvents?: AttentionEventUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WatchlistItemUpsertWithWhereUniqueWithoutWatchlistInput = {
    where: WatchlistItemWhereUniqueInput
    update: XOR<WatchlistItemUpdateWithoutWatchlistInput, WatchlistItemUncheckedUpdateWithoutWatchlistInput>
    create: XOR<WatchlistItemCreateWithoutWatchlistInput, WatchlistItemUncheckedCreateWithoutWatchlistInput>
  }

  export type WatchlistItemUpdateWithWhereUniqueWithoutWatchlistInput = {
    where: WatchlistItemWhereUniqueInput
    data: XOR<WatchlistItemUpdateWithoutWatchlistInput, WatchlistItemUncheckedUpdateWithoutWatchlistInput>
  }

  export type WatchlistItemUpdateManyWithWhereWithoutWatchlistInput = {
    where: WatchlistItemScalarWhereInput
    data: XOR<WatchlistItemUpdateManyMutationInput, WatchlistItemUncheckedUpdateManyWithoutWatchlistInput>
  }

  export type WatchlistItemScalarWhereInput = {
    AND?: WatchlistItemScalarWhereInput | WatchlistItemScalarWhereInput[]
    OR?: WatchlistItemScalarWhereInput[]
    NOT?: WatchlistItemScalarWhereInput | WatchlistItemScalarWhereInput[]
    id?: StringFilter<"WatchlistItem"> | string
    watchlistId?: StringFilter<"WatchlistItem"> | string
    stockId?: StringFilter<"WatchlistItem"> | string
    intent?: EnumWatchIntentFilter<"WatchlistItem"> | $Enums.WatchIntent
    purchasePrice?: DecimalNullableFilter<"WatchlistItem"> | Decimal | DecimalJsLike | number | string | null
    targetPrice?: DecimalNullableFilter<"WatchlistItem"> | Decimal | DecimalJsLike | number | string | null
    addedAt?: DateTimeFilter<"WatchlistItem"> | Date | string
  }

  export type WatchlistItemCreateWithoutStockInput = {
    id?: string
    intent: $Enums.WatchIntent
    purchasePrice?: Decimal | DecimalJsLike | number | string | null
    targetPrice?: Decimal | DecimalJsLike | number | string | null
    addedAt?: Date | string
    watchlist: WatchlistCreateNestedOneWithoutItemsInput
  }

  export type WatchlistItemUncheckedCreateWithoutStockInput = {
    id?: string
    watchlistId: string
    intent: $Enums.WatchIntent
    purchasePrice?: Decimal | DecimalJsLike | number | string | null
    targetPrice?: Decimal | DecimalJsLike | number | string | null
    addedAt?: Date | string
  }

  export type WatchlistItemCreateOrConnectWithoutStockInput = {
    where: WatchlistItemWhereUniqueInput
    create: XOR<WatchlistItemCreateWithoutStockInput, WatchlistItemUncheckedCreateWithoutStockInput>
  }

  export type WatchlistItemCreateManyStockInputEnvelope = {
    data: WatchlistItemCreateManyStockInput | WatchlistItemCreateManyStockInput[]
    skipDuplicates?: boolean
  }

  export type MarketSnapshotCreateWithoutStockInput = {
    id?: string
    price: Decimal | DecimalJsLike | number | string
    volume?: Decimal | DecimalJsLike | number | string | null
    open?: Decimal | DecimalJsLike | number | string | null
    previousClose?: Decimal | DecimalJsLike | number | string | null
    dayHigh?: Decimal | DecimalJsLike | number | string | null
    dayLow?: Decimal | DecimalJsLike | number | string | null
    fiftyTwoWeekHigh?: Decimal | DecimalJsLike | number | string | null
    fiftyTwoWeekLow?: Decimal | DecimalJsLike | number | string | null
    marketTimestamp: Date | string
    fetchedAt?: Date | string
    source: string
    attentionEvents?: AttentionEventCreateNestedManyWithoutSnapshotInput
  }

  export type MarketSnapshotUncheckedCreateWithoutStockInput = {
    id?: string
    price: Decimal | DecimalJsLike | number | string
    volume?: Decimal | DecimalJsLike | number | string | null
    open?: Decimal | DecimalJsLike | number | string | null
    previousClose?: Decimal | DecimalJsLike | number | string | null
    dayHigh?: Decimal | DecimalJsLike | number | string | null
    dayLow?: Decimal | DecimalJsLike | number | string | null
    fiftyTwoWeekHigh?: Decimal | DecimalJsLike | number | string | null
    fiftyTwoWeekLow?: Decimal | DecimalJsLike | number | string | null
    marketTimestamp: Date | string
    fetchedAt?: Date | string
    source: string
    attentionEvents?: AttentionEventUncheckedCreateNestedManyWithoutSnapshotInput
  }

  export type MarketSnapshotCreateOrConnectWithoutStockInput = {
    where: MarketSnapshotWhereUniqueInput
    create: XOR<MarketSnapshotCreateWithoutStockInput, MarketSnapshotUncheckedCreateWithoutStockInput>
  }

  export type MarketSnapshotCreateManyStockInputEnvelope = {
    data: MarketSnapshotCreateManyStockInput | MarketSnapshotCreateManyStockInput[]
    skipDuplicates?: boolean
  }

  export type UserStockCheckpointCreateWithoutStockInput = {
    id?: string
    lastSeenPrice: Decimal | DecimalJsLike | number | string
    lastSeenMarketTimestamp: Date | string
    lastViewedAt?: Date | string
    user: UserCreateNestedOneWithoutCheckpointsInput
  }

  export type UserStockCheckpointUncheckedCreateWithoutStockInput = {
    id?: string
    userId: string
    lastSeenPrice: Decimal | DecimalJsLike | number | string
    lastSeenMarketTimestamp: Date | string
    lastViewedAt?: Date | string
  }

  export type UserStockCheckpointCreateOrConnectWithoutStockInput = {
    where: UserStockCheckpointWhereUniqueInput
    create: XOR<UserStockCheckpointCreateWithoutStockInput, UserStockCheckpointUncheckedCreateWithoutStockInput>
  }

  export type UserStockCheckpointCreateManyStockInputEnvelope = {
    data: UserStockCheckpointCreateManyStockInput | UserStockCheckpointCreateManyStockInput[]
    skipDuplicates?: boolean
  }

  export type AttentionEventCreateWithoutStockInput = {
    id?: string
    type: $Enums.AttentionType
    severity: $Enums.AttentionSeverity
    previousPrice?: Decimal | DecimalJsLike | number | string | null
    currentPrice?: Decimal | DecimalJsLike | number | string | null
    changePercent?: Decimal | DecimalJsLike | number | string | null
    detectedAt?: Date | string
    user: UserCreateNestedOneWithoutAttentionEventsInput
    snapshot: MarketSnapshotCreateNestedOneWithoutAttentionEventsInput
  }

  export type AttentionEventUncheckedCreateWithoutStockInput = {
    id?: string
    userId: string
    snapshotId: string
    type: $Enums.AttentionType
    severity: $Enums.AttentionSeverity
    previousPrice?: Decimal | DecimalJsLike | number | string | null
    currentPrice?: Decimal | DecimalJsLike | number | string | null
    changePercent?: Decimal | DecimalJsLike | number | string | null
    detectedAt?: Date | string
  }

  export type AttentionEventCreateOrConnectWithoutStockInput = {
    where: AttentionEventWhereUniqueInput
    create: XOR<AttentionEventCreateWithoutStockInput, AttentionEventUncheckedCreateWithoutStockInput>
  }

  export type AttentionEventCreateManyStockInputEnvelope = {
    data: AttentionEventCreateManyStockInput | AttentionEventCreateManyStockInput[]
    skipDuplicates?: boolean
  }

  export type WatchlistItemUpsertWithWhereUniqueWithoutStockInput = {
    where: WatchlistItemWhereUniqueInput
    update: XOR<WatchlistItemUpdateWithoutStockInput, WatchlistItemUncheckedUpdateWithoutStockInput>
    create: XOR<WatchlistItemCreateWithoutStockInput, WatchlistItemUncheckedCreateWithoutStockInput>
  }

  export type WatchlistItemUpdateWithWhereUniqueWithoutStockInput = {
    where: WatchlistItemWhereUniqueInput
    data: XOR<WatchlistItemUpdateWithoutStockInput, WatchlistItemUncheckedUpdateWithoutStockInput>
  }

  export type WatchlistItemUpdateManyWithWhereWithoutStockInput = {
    where: WatchlistItemScalarWhereInput
    data: XOR<WatchlistItemUpdateManyMutationInput, WatchlistItemUncheckedUpdateManyWithoutStockInput>
  }

  export type MarketSnapshotUpsertWithWhereUniqueWithoutStockInput = {
    where: MarketSnapshotWhereUniqueInput
    update: XOR<MarketSnapshotUpdateWithoutStockInput, MarketSnapshotUncheckedUpdateWithoutStockInput>
    create: XOR<MarketSnapshotCreateWithoutStockInput, MarketSnapshotUncheckedCreateWithoutStockInput>
  }

  export type MarketSnapshotUpdateWithWhereUniqueWithoutStockInput = {
    where: MarketSnapshotWhereUniqueInput
    data: XOR<MarketSnapshotUpdateWithoutStockInput, MarketSnapshotUncheckedUpdateWithoutStockInput>
  }

  export type MarketSnapshotUpdateManyWithWhereWithoutStockInput = {
    where: MarketSnapshotScalarWhereInput
    data: XOR<MarketSnapshotUpdateManyMutationInput, MarketSnapshotUncheckedUpdateManyWithoutStockInput>
  }

  export type MarketSnapshotScalarWhereInput = {
    AND?: MarketSnapshotScalarWhereInput | MarketSnapshotScalarWhereInput[]
    OR?: MarketSnapshotScalarWhereInput[]
    NOT?: MarketSnapshotScalarWhereInput | MarketSnapshotScalarWhereInput[]
    id?: StringFilter<"MarketSnapshot"> | string
    stockId?: StringFilter<"MarketSnapshot"> | string
    price?: DecimalFilter<"MarketSnapshot"> | Decimal | DecimalJsLike | number | string
    volume?: DecimalNullableFilter<"MarketSnapshot"> | Decimal | DecimalJsLike | number | string | null
    open?: DecimalNullableFilter<"MarketSnapshot"> | Decimal | DecimalJsLike | number | string | null
    previousClose?: DecimalNullableFilter<"MarketSnapshot"> | Decimal | DecimalJsLike | number | string | null
    dayHigh?: DecimalNullableFilter<"MarketSnapshot"> | Decimal | DecimalJsLike | number | string | null
    dayLow?: DecimalNullableFilter<"MarketSnapshot"> | Decimal | DecimalJsLike | number | string | null
    fiftyTwoWeekHigh?: DecimalNullableFilter<"MarketSnapshot"> | Decimal | DecimalJsLike | number | string | null
    fiftyTwoWeekLow?: DecimalNullableFilter<"MarketSnapshot"> | Decimal | DecimalJsLike | number | string | null
    marketTimestamp?: DateTimeFilter<"MarketSnapshot"> | Date | string
    fetchedAt?: DateTimeFilter<"MarketSnapshot"> | Date | string
    source?: StringFilter<"MarketSnapshot"> | string
  }

  export type UserStockCheckpointUpsertWithWhereUniqueWithoutStockInput = {
    where: UserStockCheckpointWhereUniqueInput
    update: XOR<UserStockCheckpointUpdateWithoutStockInput, UserStockCheckpointUncheckedUpdateWithoutStockInput>
    create: XOR<UserStockCheckpointCreateWithoutStockInput, UserStockCheckpointUncheckedCreateWithoutStockInput>
  }

  export type UserStockCheckpointUpdateWithWhereUniqueWithoutStockInput = {
    where: UserStockCheckpointWhereUniqueInput
    data: XOR<UserStockCheckpointUpdateWithoutStockInput, UserStockCheckpointUncheckedUpdateWithoutStockInput>
  }

  export type UserStockCheckpointUpdateManyWithWhereWithoutStockInput = {
    where: UserStockCheckpointScalarWhereInput
    data: XOR<UserStockCheckpointUpdateManyMutationInput, UserStockCheckpointUncheckedUpdateManyWithoutStockInput>
  }

  export type AttentionEventUpsertWithWhereUniqueWithoutStockInput = {
    where: AttentionEventWhereUniqueInput
    update: XOR<AttentionEventUpdateWithoutStockInput, AttentionEventUncheckedUpdateWithoutStockInput>
    create: XOR<AttentionEventCreateWithoutStockInput, AttentionEventUncheckedCreateWithoutStockInput>
  }

  export type AttentionEventUpdateWithWhereUniqueWithoutStockInput = {
    where: AttentionEventWhereUniqueInput
    data: XOR<AttentionEventUpdateWithoutStockInput, AttentionEventUncheckedUpdateWithoutStockInput>
  }

  export type AttentionEventUpdateManyWithWhereWithoutStockInput = {
    where: AttentionEventScalarWhereInput
    data: XOR<AttentionEventUpdateManyMutationInput, AttentionEventUncheckedUpdateManyWithoutStockInput>
  }

  export type WatchlistCreateWithoutItemsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutWatchlistsInput
  }

  export type WatchlistUncheckedCreateWithoutItemsInput = {
    id?: string
    userId: string
    name: string
    createdAt?: Date | string
  }

  export type WatchlistCreateOrConnectWithoutItemsInput = {
    where: WatchlistWhereUniqueInput
    create: XOR<WatchlistCreateWithoutItemsInput, WatchlistUncheckedCreateWithoutItemsInput>
  }

  export type StockCreateWithoutWatchlistItemsInput = {
    id?: string
    symbol: string
    name: string
    exchange: string
    snapshots?: MarketSnapshotCreateNestedManyWithoutStockInput
    checkpoints?: UserStockCheckpointCreateNestedManyWithoutStockInput
    attentionEvents?: AttentionEventCreateNestedManyWithoutStockInput
  }

  export type StockUncheckedCreateWithoutWatchlistItemsInput = {
    id?: string
    symbol: string
    name: string
    exchange: string
    snapshots?: MarketSnapshotUncheckedCreateNestedManyWithoutStockInput
    checkpoints?: UserStockCheckpointUncheckedCreateNestedManyWithoutStockInput
    attentionEvents?: AttentionEventUncheckedCreateNestedManyWithoutStockInput
  }

  export type StockCreateOrConnectWithoutWatchlistItemsInput = {
    where: StockWhereUniqueInput
    create: XOR<StockCreateWithoutWatchlistItemsInput, StockUncheckedCreateWithoutWatchlistItemsInput>
  }

  export type WatchlistUpsertWithoutItemsInput = {
    update: XOR<WatchlistUpdateWithoutItemsInput, WatchlistUncheckedUpdateWithoutItemsInput>
    create: XOR<WatchlistCreateWithoutItemsInput, WatchlistUncheckedCreateWithoutItemsInput>
    where?: WatchlistWhereInput
  }

  export type WatchlistUpdateToOneWithWhereWithoutItemsInput = {
    where?: WatchlistWhereInput
    data: XOR<WatchlistUpdateWithoutItemsInput, WatchlistUncheckedUpdateWithoutItemsInput>
  }

  export type WatchlistUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWatchlistsNestedInput
  }

  export type WatchlistUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockUpsertWithoutWatchlistItemsInput = {
    update: XOR<StockUpdateWithoutWatchlistItemsInput, StockUncheckedUpdateWithoutWatchlistItemsInput>
    create: XOR<StockCreateWithoutWatchlistItemsInput, StockUncheckedCreateWithoutWatchlistItemsInput>
    where?: StockWhereInput
  }

  export type StockUpdateToOneWithWhereWithoutWatchlistItemsInput = {
    where?: StockWhereInput
    data: XOR<StockUpdateWithoutWatchlistItemsInput, StockUncheckedUpdateWithoutWatchlistItemsInput>
  }

  export type StockUpdateWithoutWatchlistItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    exchange?: StringFieldUpdateOperationsInput | string
    snapshots?: MarketSnapshotUpdateManyWithoutStockNestedInput
    checkpoints?: UserStockCheckpointUpdateManyWithoutStockNestedInput
    attentionEvents?: AttentionEventUpdateManyWithoutStockNestedInput
  }

  export type StockUncheckedUpdateWithoutWatchlistItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    exchange?: StringFieldUpdateOperationsInput | string
    snapshots?: MarketSnapshotUncheckedUpdateManyWithoutStockNestedInput
    checkpoints?: UserStockCheckpointUncheckedUpdateManyWithoutStockNestedInput
    attentionEvents?: AttentionEventUncheckedUpdateManyWithoutStockNestedInput
  }

  export type StockCreateWithoutSnapshotsInput = {
    id?: string
    symbol: string
    name: string
    exchange: string
    watchlistItems?: WatchlistItemCreateNestedManyWithoutStockInput
    checkpoints?: UserStockCheckpointCreateNestedManyWithoutStockInput
    attentionEvents?: AttentionEventCreateNestedManyWithoutStockInput
  }

  export type StockUncheckedCreateWithoutSnapshotsInput = {
    id?: string
    symbol: string
    name: string
    exchange: string
    watchlistItems?: WatchlistItemUncheckedCreateNestedManyWithoutStockInput
    checkpoints?: UserStockCheckpointUncheckedCreateNestedManyWithoutStockInput
    attentionEvents?: AttentionEventUncheckedCreateNestedManyWithoutStockInput
  }

  export type StockCreateOrConnectWithoutSnapshotsInput = {
    where: StockWhereUniqueInput
    create: XOR<StockCreateWithoutSnapshotsInput, StockUncheckedCreateWithoutSnapshotsInput>
  }

  export type AttentionEventCreateWithoutSnapshotInput = {
    id?: string
    type: $Enums.AttentionType
    severity: $Enums.AttentionSeverity
    previousPrice?: Decimal | DecimalJsLike | number | string | null
    currentPrice?: Decimal | DecimalJsLike | number | string | null
    changePercent?: Decimal | DecimalJsLike | number | string | null
    detectedAt?: Date | string
    user: UserCreateNestedOneWithoutAttentionEventsInput
    stock: StockCreateNestedOneWithoutAttentionEventsInput
  }

  export type AttentionEventUncheckedCreateWithoutSnapshotInput = {
    id?: string
    userId: string
    stockId: string
    type: $Enums.AttentionType
    severity: $Enums.AttentionSeverity
    previousPrice?: Decimal | DecimalJsLike | number | string | null
    currentPrice?: Decimal | DecimalJsLike | number | string | null
    changePercent?: Decimal | DecimalJsLike | number | string | null
    detectedAt?: Date | string
  }

  export type AttentionEventCreateOrConnectWithoutSnapshotInput = {
    where: AttentionEventWhereUniqueInput
    create: XOR<AttentionEventCreateWithoutSnapshotInput, AttentionEventUncheckedCreateWithoutSnapshotInput>
  }

  export type AttentionEventCreateManySnapshotInputEnvelope = {
    data: AttentionEventCreateManySnapshotInput | AttentionEventCreateManySnapshotInput[]
    skipDuplicates?: boolean
  }

  export type StockUpsertWithoutSnapshotsInput = {
    update: XOR<StockUpdateWithoutSnapshotsInput, StockUncheckedUpdateWithoutSnapshotsInput>
    create: XOR<StockCreateWithoutSnapshotsInput, StockUncheckedCreateWithoutSnapshotsInput>
    where?: StockWhereInput
  }

  export type StockUpdateToOneWithWhereWithoutSnapshotsInput = {
    where?: StockWhereInput
    data: XOR<StockUpdateWithoutSnapshotsInput, StockUncheckedUpdateWithoutSnapshotsInput>
  }

  export type StockUpdateWithoutSnapshotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    exchange?: StringFieldUpdateOperationsInput | string
    watchlistItems?: WatchlistItemUpdateManyWithoutStockNestedInput
    checkpoints?: UserStockCheckpointUpdateManyWithoutStockNestedInput
    attentionEvents?: AttentionEventUpdateManyWithoutStockNestedInput
  }

  export type StockUncheckedUpdateWithoutSnapshotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    exchange?: StringFieldUpdateOperationsInput | string
    watchlistItems?: WatchlistItemUncheckedUpdateManyWithoutStockNestedInput
    checkpoints?: UserStockCheckpointUncheckedUpdateManyWithoutStockNestedInput
    attentionEvents?: AttentionEventUncheckedUpdateManyWithoutStockNestedInput
  }

  export type AttentionEventUpsertWithWhereUniqueWithoutSnapshotInput = {
    where: AttentionEventWhereUniqueInput
    update: XOR<AttentionEventUpdateWithoutSnapshotInput, AttentionEventUncheckedUpdateWithoutSnapshotInput>
    create: XOR<AttentionEventCreateWithoutSnapshotInput, AttentionEventUncheckedCreateWithoutSnapshotInput>
  }

  export type AttentionEventUpdateWithWhereUniqueWithoutSnapshotInput = {
    where: AttentionEventWhereUniqueInput
    data: XOR<AttentionEventUpdateWithoutSnapshotInput, AttentionEventUncheckedUpdateWithoutSnapshotInput>
  }

  export type AttentionEventUpdateManyWithWhereWithoutSnapshotInput = {
    where: AttentionEventScalarWhereInput
    data: XOR<AttentionEventUpdateManyMutationInput, AttentionEventUncheckedUpdateManyWithoutSnapshotInput>
  }

  export type UserCreateWithoutCheckpointsInput = {
    id?: string
    name: string
    email: string
    passwordHash?: string | null
    googleId?: string | null
    authProvider?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    watchlists?: WatchlistCreateNestedManyWithoutUserInput
    attentionEvents?: AttentionEventCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCheckpointsInput = {
    id?: string
    name: string
    email: string
    passwordHash?: string | null
    googleId?: string | null
    authProvider?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    watchlists?: WatchlistUncheckedCreateNestedManyWithoutUserInput
    attentionEvents?: AttentionEventUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCheckpointsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCheckpointsInput, UserUncheckedCreateWithoutCheckpointsInput>
  }

  export type StockCreateWithoutCheckpointsInput = {
    id?: string
    symbol: string
    name: string
    exchange: string
    watchlistItems?: WatchlistItemCreateNestedManyWithoutStockInput
    snapshots?: MarketSnapshotCreateNestedManyWithoutStockInput
    attentionEvents?: AttentionEventCreateNestedManyWithoutStockInput
  }

  export type StockUncheckedCreateWithoutCheckpointsInput = {
    id?: string
    symbol: string
    name: string
    exchange: string
    watchlistItems?: WatchlistItemUncheckedCreateNestedManyWithoutStockInput
    snapshots?: MarketSnapshotUncheckedCreateNestedManyWithoutStockInput
    attentionEvents?: AttentionEventUncheckedCreateNestedManyWithoutStockInput
  }

  export type StockCreateOrConnectWithoutCheckpointsInput = {
    where: StockWhereUniqueInput
    create: XOR<StockCreateWithoutCheckpointsInput, StockUncheckedCreateWithoutCheckpointsInput>
  }

  export type UserUpsertWithoutCheckpointsInput = {
    update: XOR<UserUpdateWithoutCheckpointsInput, UserUncheckedUpdateWithoutCheckpointsInput>
    create: XOR<UserCreateWithoutCheckpointsInput, UserUncheckedCreateWithoutCheckpointsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCheckpointsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCheckpointsInput, UserUncheckedUpdateWithoutCheckpointsInput>
  }

  export type UserUpdateWithoutCheckpointsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    authProvider?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    watchlists?: WatchlistUpdateManyWithoutUserNestedInput
    attentionEvents?: AttentionEventUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCheckpointsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    authProvider?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    watchlists?: WatchlistUncheckedUpdateManyWithoutUserNestedInput
    attentionEvents?: AttentionEventUncheckedUpdateManyWithoutUserNestedInput
  }

  export type StockUpsertWithoutCheckpointsInput = {
    update: XOR<StockUpdateWithoutCheckpointsInput, StockUncheckedUpdateWithoutCheckpointsInput>
    create: XOR<StockCreateWithoutCheckpointsInput, StockUncheckedCreateWithoutCheckpointsInput>
    where?: StockWhereInput
  }

  export type StockUpdateToOneWithWhereWithoutCheckpointsInput = {
    where?: StockWhereInput
    data: XOR<StockUpdateWithoutCheckpointsInput, StockUncheckedUpdateWithoutCheckpointsInput>
  }

  export type StockUpdateWithoutCheckpointsInput = {
    id?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    exchange?: StringFieldUpdateOperationsInput | string
    watchlistItems?: WatchlistItemUpdateManyWithoutStockNestedInput
    snapshots?: MarketSnapshotUpdateManyWithoutStockNestedInput
    attentionEvents?: AttentionEventUpdateManyWithoutStockNestedInput
  }

  export type StockUncheckedUpdateWithoutCheckpointsInput = {
    id?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    exchange?: StringFieldUpdateOperationsInput | string
    watchlistItems?: WatchlistItemUncheckedUpdateManyWithoutStockNestedInput
    snapshots?: MarketSnapshotUncheckedUpdateManyWithoutStockNestedInput
    attentionEvents?: AttentionEventUncheckedUpdateManyWithoutStockNestedInput
  }

  export type UserCreateWithoutAttentionEventsInput = {
    id?: string
    name: string
    email: string
    passwordHash?: string | null
    googleId?: string | null
    authProvider?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    watchlists?: WatchlistCreateNestedManyWithoutUserInput
    checkpoints?: UserStockCheckpointCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAttentionEventsInput = {
    id?: string
    name: string
    email: string
    passwordHash?: string | null
    googleId?: string | null
    authProvider?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    watchlists?: WatchlistUncheckedCreateNestedManyWithoutUserInput
    checkpoints?: UserStockCheckpointUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAttentionEventsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAttentionEventsInput, UserUncheckedCreateWithoutAttentionEventsInput>
  }

  export type StockCreateWithoutAttentionEventsInput = {
    id?: string
    symbol: string
    name: string
    exchange: string
    watchlistItems?: WatchlistItemCreateNestedManyWithoutStockInput
    snapshots?: MarketSnapshotCreateNestedManyWithoutStockInput
    checkpoints?: UserStockCheckpointCreateNestedManyWithoutStockInput
  }

  export type StockUncheckedCreateWithoutAttentionEventsInput = {
    id?: string
    symbol: string
    name: string
    exchange: string
    watchlistItems?: WatchlistItemUncheckedCreateNestedManyWithoutStockInput
    snapshots?: MarketSnapshotUncheckedCreateNestedManyWithoutStockInput
    checkpoints?: UserStockCheckpointUncheckedCreateNestedManyWithoutStockInput
  }

  export type StockCreateOrConnectWithoutAttentionEventsInput = {
    where: StockWhereUniqueInput
    create: XOR<StockCreateWithoutAttentionEventsInput, StockUncheckedCreateWithoutAttentionEventsInput>
  }

  export type MarketSnapshotCreateWithoutAttentionEventsInput = {
    id?: string
    price: Decimal | DecimalJsLike | number | string
    volume?: Decimal | DecimalJsLike | number | string | null
    open?: Decimal | DecimalJsLike | number | string | null
    previousClose?: Decimal | DecimalJsLike | number | string | null
    dayHigh?: Decimal | DecimalJsLike | number | string | null
    dayLow?: Decimal | DecimalJsLike | number | string | null
    fiftyTwoWeekHigh?: Decimal | DecimalJsLike | number | string | null
    fiftyTwoWeekLow?: Decimal | DecimalJsLike | number | string | null
    marketTimestamp: Date | string
    fetchedAt?: Date | string
    source: string
    stock: StockCreateNestedOneWithoutSnapshotsInput
  }

  export type MarketSnapshotUncheckedCreateWithoutAttentionEventsInput = {
    id?: string
    stockId: string
    price: Decimal | DecimalJsLike | number | string
    volume?: Decimal | DecimalJsLike | number | string | null
    open?: Decimal | DecimalJsLike | number | string | null
    previousClose?: Decimal | DecimalJsLike | number | string | null
    dayHigh?: Decimal | DecimalJsLike | number | string | null
    dayLow?: Decimal | DecimalJsLike | number | string | null
    fiftyTwoWeekHigh?: Decimal | DecimalJsLike | number | string | null
    fiftyTwoWeekLow?: Decimal | DecimalJsLike | number | string | null
    marketTimestamp: Date | string
    fetchedAt?: Date | string
    source: string
  }

  export type MarketSnapshotCreateOrConnectWithoutAttentionEventsInput = {
    where: MarketSnapshotWhereUniqueInput
    create: XOR<MarketSnapshotCreateWithoutAttentionEventsInput, MarketSnapshotUncheckedCreateWithoutAttentionEventsInput>
  }

  export type UserUpsertWithoutAttentionEventsInput = {
    update: XOR<UserUpdateWithoutAttentionEventsInput, UserUncheckedUpdateWithoutAttentionEventsInput>
    create: XOR<UserCreateWithoutAttentionEventsInput, UserUncheckedCreateWithoutAttentionEventsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAttentionEventsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAttentionEventsInput, UserUncheckedUpdateWithoutAttentionEventsInput>
  }

  export type UserUpdateWithoutAttentionEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    authProvider?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    watchlists?: WatchlistUpdateManyWithoutUserNestedInput
    checkpoints?: UserStockCheckpointUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAttentionEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    authProvider?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    watchlists?: WatchlistUncheckedUpdateManyWithoutUserNestedInput
    checkpoints?: UserStockCheckpointUncheckedUpdateManyWithoutUserNestedInput
  }

  export type StockUpsertWithoutAttentionEventsInput = {
    update: XOR<StockUpdateWithoutAttentionEventsInput, StockUncheckedUpdateWithoutAttentionEventsInput>
    create: XOR<StockCreateWithoutAttentionEventsInput, StockUncheckedCreateWithoutAttentionEventsInput>
    where?: StockWhereInput
  }

  export type StockUpdateToOneWithWhereWithoutAttentionEventsInput = {
    where?: StockWhereInput
    data: XOR<StockUpdateWithoutAttentionEventsInput, StockUncheckedUpdateWithoutAttentionEventsInput>
  }

  export type StockUpdateWithoutAttentionEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    exchange?: StringFieldUpdateOperationsInput | string
    watchlistItems?: WatchlistItemUpdateManyWithoutStockNestedInput
    snapshots?: MarketSnapshotUpdateManyWithoutStockNestedInput
    checkpoints?: UserStockCheckpointUpdateManyWithoutStockNestedInput
  }

  export type StockUncheckedUpdateWithoutAttentionEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    exchange?: StringFieldUpdateOperationsInput | string
    watchlistItems?: WatchlistItemUncheckedUpdateManyWithoutStockNestedInput
    snapshots?: MarketSnapshotUncheckedUpdateManyWithoutStockNestedInput
    checkpoints?: UserStockCheckpointUncheckedUpdateManyWithoutStockNestedInput
  }

  export type MarketSnapshotUpsertWithoutAttentionEventsInput = {
    update: XOR<MarketSnapshotUpdateWithoutAttentionEventsInput, MarketSnapshotUncheckedUpdateWithoutAttentionEventsInput>
    create: XOR<MarketSnapshotCreateWithoutAttentionEventsInput, MarketSnapshotUncheckedCreateWithoutAttentionEventsInput>
    where?: MarketSnapshotWhereInput
  }

  export type MarketSnapshotUpdateToOneWithWhereWithoutAttentionEventsInput = {
    where?: MarketSnapshotWhereInput
    data: XOR<MarketSnapshotUpdateWithoutAttentionEventsInput, MarketSnapshotUncheckedUpdateWithoutAttentionEventsInput>
  }

  export type MarketSnapshotUpdateWithoutAttentionEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    volume?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    open?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    previousClose?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    dayHigh?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    dayLow?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fiftyTwoWeekHigh?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fiftyTwoWeekLow?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    marketTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    fetchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: StringFieldUpdateOperationsInput | string
    stock?: StockUpdateOneRequiredWithoutSnapshotsNestedInput
  }

  export type MarketSnapshotUncheckedUpdateWithoutAttentionEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    stockId?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    volume?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    open?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    previousClose?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    dayHigh?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    dayLow?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fiftyTwoWeekHigh?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fiftyTwoWeekLow?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    marketTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    fetchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: StringFieldUpdateOperationsInput | string
  }

  export type WatchlistCreateManyUserInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type UserStockCheckpointCreateManyUserInput = {
    id?: string
    stockId: string
    lastSeenPrice: Decimal | DecimalJsLike | number | string
    lastSeenMarketTimestamp: Date | string
    lastViewedAt?: Date | string
  }

  export type AttentionEventCreateManyUserInput = {
    id?: string
    stockId: string
    snapshotId: string
    type: $Enums.AttentionType
    severity: $Enums.AttentionSeverity
    previousPrice?: Decimal | DecimalJsLike | number | string | null
    currentPrice?: Decimal | DecimalJsLike | number | string | null
    changePercent?: Decimal | DecimalJsLike | number | string | null
    detectedAt?: Date | string
  }

  export type WatchlistUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: WatchlistItemUpdateManyWithoutWatchlistNestedInput
  }

  export type WatchlistUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: WatchlistItemUncheckedUpdateManyWithoutWatchlistNestedInput
  }

  export type WatchlistUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserStockCheckpointUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastSeenPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lastSeenMarketTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    lastViewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stock?: StockUpdateOneRequiredWithoutCheckpointsNestedInput
  }

  export type UserStockCheckpointUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    stockId?: StringFieldUpdateOperationsInput | string
    lastSeenPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lastSeenMarketTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    lastViewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserStockCheckpointUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    stockId?: StringFieldUpdateOperationsInput | string
    lastSeenPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lastSeenMarketTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    lastViewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttentionEventUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAttentionTypeFieldUpdateOperationsInput | $Enums.AttentionType
    severity?: EnumAttentionSeverityFieldUpdateOperationsInput | $Enums.AttentionSeverity
    previousPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currentPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    changePercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    detectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stock?: StockUpdateOneRequiredWithoutAttentionEventsNestedInput
    snapshot?: MarketSnapshotUpdateOneRequiredWithoutAttentionEventsNestedInput
  }

  export type AttentionEventUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    stockId?: StringFieldUpdateOperationsInput | string
    snapshotId?: StringFieldUpdateOperationsInput | string
    type?: EnumAttentionTypeFieldUpdateOperationsInput | $Enums.AttentionType
    severity?: EnumAttentionSeverityFieldUpdateOperationsInput | $Enums.AttentionSeverity
    previousPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currentPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    changePercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    detectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttentionEventUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    stockId?: StringFieldUpdateOperationsInput | string
    snapshotId?: StringFieldUpdateOperationsInput | string
    type?: EnumAttentionTypeFieldUpdateOperationsInput | $Enums.AttentionType
    severity?: EnumAttentionSeverityFieldUpdateOperationsInput | $Enums.AttentionSeverity
    previousPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currentPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    changePercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    detectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchlistItemCreateManyWatchlistInput = {
    id?: string
    stockId: string
    intent: $Enums.WatchIntent
    purchasePrice?: Decimal | DecimalJsLike | number | string | null
    targetPrice?: Decimal | DecimalJsLike | number | string | null
    addedAt?: Date | string
  }

  export type WatchlistItemUpdateWithoutWatchlistInput = {
    id?: StringFieldUpdateOperationsInput | string
    intent?: EnumWatchIntentFieldUpdateOperationsInput | $Enums.WatchIntent
    purchasePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    targetPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stock?: StockUpdateOneRequiredWithoutWatchlistItemsNestedInput
  }

  export type WatchlistItemUncheckedUpdateWithoutWatchlistInput = {
    id?: StringFieldUpdateOperationsInput | string
    stockId?: StringFieldUpdateOperationsInput | string
    intent?: EnumWatchIntentFieldUpdateOperationsInput | $Enums.WatchIntent
    purchasePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    targetPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchlistItemUncheckedUpdateManyWithoutWatchlistInput = {
    id?: StringFieldUpdateOperationsInput | string
    stockId?: StringFieldUpdateOperationsInput | string
    intent?: EnumWatchIntentFieldUpdateOperationsInput | $Enums.WatchIntent
    purchasePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    targetPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchlistItemCreateManyStockInput = {
    id?: string
    watchlistId: string
    intent: $Enums.WatchIntent
    purchasePrice?: Decimal | DecimalJsLike | number | string | null
    targetPrice?: Decimal | DecimalJsLike | number | string | null
    addedAt?: Date | string
  }

  export type MarketSnapshotCreateManyStockInput = {
    id?: string
    price: Decimal | DecimalJsLike | number | string
    volume?: Decimal | DecimalJsLike | number | string | null
    open?: Decimal | DecimalJsLike | number | string | null
    previousClose?: Decimal | DecimalJsLike | number | string | null
    dayHigh?: Decimal | DecimalJsLike | number | string | null
    dayLow?: Decimal | DecimalJsLike | number | string | null
    fiftyTwoWeekHigh?: Decimal | DecimalJsLike | number | string | null
    fiftyTwoWeekLow?: Decimal | DecimalJsLike | number | string | null
    marketTimestamp: Date | string
    fetchedAt?: Date | string
    source: string
  }

  export type UserStockCheckpointCreateManyStockInput = {
    id?: string
    userId: string
    lastSeenPrice: Decimal | DecimalJsLike | number | string
    lastSeenMarketTimestamp: Date | string
    lastViewedAt?: Date | string
  }

  export type AttentionEventCreateManyStockInput = {
    id?: string
    userId: string
    snapshotId: string
    type: $Enums.AttentionType
    severity: $Enums.AttentionSeverity
    previousPrice?: Decimal | DecimalJsLike | number | string | null
    currentPrice?: Decimal | DecimalJsLike | number | string | null
    changePercent?: Decimal | DecimalJsLike | number | string | null
    detectedAt?: Date | string
  }

  export type WatchlistItemUpdateWithoutStockInput = {
    id?: StringFieldUpdateOperationsInput | string
    intent?: EnumWatchIntentFieldUpdateOperationsInput | $Enums.WatchIntent
    purchasePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    targetPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    watchlist?: WatchlistUpdateOneRequiredWithoutItemsNestedInput
  }

  export type WatchlistItemUncheckedUpdateWithoutStockInput = {
    id?: StringFieldUpdateOperationsInput | string
    watchlistId?: StringFieldUpdateOperationsInput | string
    intent?: EnumWatchIntentFieldUpdateOperationsInput | $Enums.WatchIntent
    purchasePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    targetPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WatchlistItemUncheckedUpdateManyWithoutStockInput = {
    id?: StringFieldUpdateOperationsInput | string
    watchlistId?: StringFieldUpdateOperationsInput | string
    intent?: EnumWatchIntentFieldUpdateOperationsInput | $Enums.WatchIntent
    purchasePrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    targetPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketSnapshotUpdateWithoutStockInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    volume?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    open?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    previousClose?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    dayHigh?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    dayLow?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fiftyTwoWeekHigh?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fiftyTwoWeekLow?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    marketTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    fetchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: StringFieldUpdateOperationsInput | string
    attentionEvents?: AttentionEventUpdateManyWithoutSnapshotNestedInput
  }

  export type MarketSnapshotUncheckedUpdateWithoutStockInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    volume?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    open?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    previousClose?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    dayHigh?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    dayLow?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fiftyTwoWeekHigh?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fiftyTwoWeekLow?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    marketTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    fetchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: StringFieldUpdateOperationsInput | string
    attentionEvents?: AttentionEventUncheckedUpdateManyWithoutSnapshotNestedInput
  }

  export type MarketSnapshotUncheckedUpdateManyWithoutStockInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    volume?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    open?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    previousClose?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    dayHigh?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    dayLow?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fiftyTwoWeekHigh?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fiftyTwoWeekLow?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    marketTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    fetchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: StringFieldUpdateOperationsInput | string
  }

  export type UserStockCheckpointUpdateWithoutStockInput = {
    id?: StringFieldUpdateOperationsInput | string
    lastSeenPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lastSeenMarketTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    lastViewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCheckpointsNestedInput
  }

  export type UserStockCheckpointUncheckedUpdateWithoutStockInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    lastSeenPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lastSeenMarketTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    lastViewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserStockCheckpointUncheckedUpdateManyWithoutStockInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    lastSeenPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lastSeenMarketTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    lastViewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttentionEventUpdateWithoutStockInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAttentionTypeFieldUpdateOperationsInput | $Enums.AttentionType
    severity?: EnumAttentionSeverityFieldUpdateOperationsInput | $Enums.AttentionSeverity
    previousPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currentPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    changePercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    detectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAttentionEventsNestedInput
    snapshot?: MarketSnapshotUpdateOneRequiredWithoutAttentionEventsNestedInput
  }

  export type AttentionEventUncheckedUpdateWithoutStockInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    snapshotId?: StringFieldUpdateOperationsInput | string
    type?: EnumAttentionTypeFieldUpdateOperationsInput | $Enums.AttentionType
    severity?: EnumAttentionSeverityFieldUpdateOperationsInput | $Enums.AttentionSeverity
    previousPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currentPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    changePercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    detectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttentionEventUncheckedUpdateManyWithoutStockInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    snapshotId?: StringFieldUpdateOperationsInput | string
    type?: EnumAttentionTypeFieldUpdateOperationsInput | $Enums.AttentionType
    severity?: EnumAttentionSeverityFieldUpdateOperationsInput | $Enums.AttentionSeverity
    previousPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currentPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    changePercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    detectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttentionEventCreateManySnapshotInput = {
    id?: string
    userId: string
    stockId: string
    type: $Enums.AttentionType
    severity: $Enums.AttentionSeverity
    previousPrice?: Decimal | DecimalJsLike | number | string | null
    currentPrice?: Decimal | DecimalJsLike | number | string | null
    changePercent?: Decimal | DecimalJsLike | number | string | null
    detectedAt?: Date | string
  }

  export type AttentionEventUpdateWithoutSnapshotInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAttentionTypeFieldUpdateOperationsInput | $Enums.AttentionType
    severity?: EnumAttentionSeverityFieldUpdateOperationsInput | $Enums.AttentionSeverity
    previousPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currentPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    changePercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    detectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAttentionEventsNestedInput
    stock?: StockUpdateOneRequiredWithoutAttentionEventsNestedInput
  }

  export type AttentionEventUncheckedUpdateWithoutSnapshotInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    stockId?: StringFieldUpdateOperationsInput | string
    type?: EnumAttentionTypeFieldUpdateOperationsInput | $Enums.AttentionType
    severity?: EnumAttentionSeverityFieldUpdateOperationsInput | $Enums.AttentionSeverity
    previousPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currentPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    changePercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    detectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttentionEventUncheckedUpdateManyWithoutSnapshotInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    stockId?: StringFieldUpdateOperationsInput | string
    type?: EnumAttentionTypeFieldUpdateOperationsInput | $Enums.AttentionType
    severity?: EnumAttentionSeverityFieldUpdateOperationsInput | $Enums.AttentionSeverity
    previousPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currentPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    changePercent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    detectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}