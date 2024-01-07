
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model products
 * 
 */
export type products = $Result.DefaultSelection<Prisma.$productsPayload>
/**
 * Model products_of_months
 * 
 */
export type products_of_months = $Result.DefaultSelection<Prisma.$products_of_monthsPayload>
/**
 * Model recipes
 * 
 */
export type recipes = $Result.DefaultSelection<Prisma.$recipesPayload>
/**
 * Model quantities
 * 
 */
export type quantities = $Result.DefaultSelection<Prisma.$quantitiesPayload>
/**
 * Model favorites
 * 
 */
export type favorites = $Result.DefaultSelection<Prisma.$favoritesPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const profile: {
  user: 'user',
  administrator: 'administrator'
};

export type profile = (typeof profile)[keyof typeof profile]


export const category: {
  fruits: 'fruits',
  vegetables: 'vegetables',
  cereals: 'cereals',
  pulses: 'pulses'
};

export type category = (typeof category)[keyof typeof category]


export const month: {
  january: 'january',
  february: 'february',
  march: 'march',
  april: 'april',
  may: 'may',
  june: 'june',
  july: 'july',
  august: 'august',
  september: 'september',
  october: 'october',
  november: 'november',
  december: 'december'
};

export type month = (typeof month)[keyof typeof month]


export const quantity_label: {
  gram: 'gram',
  kilogram: 'kilogram',
  liter: 'liter',
  centiliter: 'centiliter',
  pinch: 'pinch',
  bouquet: 'bouquet',
  slice: 'slice'
};

export type quantity_label = (typeof quantity_label)[keyof typeof quantity_label]

}

export type profile = $Enums.profile

export const profile: typeof $Enums.profile

export type category = $Enums.category

export const category: typeof $Enums.category

export type month = $Enums.month

export const month: typeof $Enums.month

export type quantity_label = $Enums.quantity_label

export const quantity_label: typeof $Enums.quantity_label

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs>;

  /**
   * `prisma.products`: Exposes CRUD operations for the **products** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.products.findMany()
    * ```
    */
  get products(): Prisma.productsDelegate<ExtArgs>;

  /**
   * `prisma.products_of_months`: Exposes CRUD operations for the **products_of_months** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products_of_months
    * const products_of_months = await prisma.products_of_months.findMany()
    * ```
    */
  get products_of_months(): Prisma.products_of_monthsDelegate<ExtArgs>;

  /**
   * `prisma.recipes`: Exposes CRUD operations for the **recipes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recipes
    * const recipes = await prisma.recipes.findMany()
    * ```
    */
  get recipes(): Prisma.recipesDelegate<ExtArgs>;

  /**
   * `prisma.quantities`: Exposes CRUD operations for the **quantities** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Quantities
    * const quantities = await prisma.quantities.findMany()
    * ```
    */
  get quantities(): Prisma.quantitiesDelegate<ExtArgs>;

  /**
   * `prisma.favorites`: Exposes CRUD operations for the **favorites** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Favorites
    * const favorites = await prisma.favorites.findMany()
    * ```
    */
  get favorites(): Prisma.favoritesDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 5.7.1
   * Query Engine version: 0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
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
      (Without<T, U> & U) | (Without<U, T> & T)
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    users: 'users',
    products: 'products',
    products_of_months: 'products_of_months',
    recipes: 'recipes',
    quantities: 'quantities',
    favorites: 'favorites'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'users' | 'products' | 'products_of_months' | 'recipes' | 'quantities' | 'favorites'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>,
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      products: {
        payload: Prisma.$productsPayload<ExtArgs>
        fields: Prisma.productsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.productsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$productsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.productsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          findFirst: {
            args: Prisma.productsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$productsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.productsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          findMany: {
            args: Prisma.productsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[]
          }
          create: {
            args: Prisma.productsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          createMany: {
            args: Prisma.productsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.productsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          update: {
            args: Prisma.productsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          deleteMany: {
            args: Prisma.productsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.productsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.productsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          aggregate: {
            args: Prisma.ProductsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProducts>
          }
          groupBy: {
            args: Prisma.productsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProductsGroupByOutputType>[]
          }
          count: {
            args: Prisma.productsCountArgs<ExtArgs>,
            result: $Utils.Optional<ProductsCountAggregateOutputType> | number
          }
        }
      }
      products_of_months: {
        payload: Prisma.$products_of_monthsPayload<ExtArgs>
        fields: Prisma.products_of_monthsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.products_of_monthsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$products_of_monthsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.products_of_monthsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$products_of_monthsPayload>
          }
          findFirst: {
            args: Prisma.products_of_monthsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$products_of_monthsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.products_of_monthsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$products_of_monthsPayload>
          }
          findMany: {
            args: Prisma.products_of_monthsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$products_of_monthsPayload>[]
          }
          create: {
            args: Prisma.products_of_monthsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$products_of_monthsPayload>
          }
          createMany: {
            args: Prisma.products_of_monthsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.products_of_monthsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$products_of_monthsPayload>
          }
          update: {
            args: Prisma.products_of_monthsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$products_of_monthsPayload>
          }
          deleteMany: {
            args: Prisma.products_of_monthsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.products_of_monthsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.products_of_monthsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$products_of_monthsPayload>
          }
          aggregate: {
            args: Prisma.Products_of_monthsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProducts_of_months>
          }
          groupBy: {
            args: Prisma.products_of_monthsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Products_of_monthsGroupByOutputType>[]
          }
          count: {
            args: Prisma.products_of_monthsCountArgs<ExtArgs>,
            result: $Utils.Optional<Products_of_monthsCountAggregateOutputType> | number
          }
        }
      }
      recipes: {
        payload: Prisma.$recipesPayload<ExtArgs>
        fields: Prisma.recipesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.recipesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$recipesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.recipesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$recipesPayload>
          }
          findFirst: {
            args: Prisma.recipesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$recipesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.recipesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$recipesPayload>
          }
          findMany: {
            args: Prisma.recipesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$recipesPayload>[]
          }
          create: {
            args: Prisma.recipesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$recipesPayload>
          }
          createMany: {
            args: Prisma.recipesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.recipesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$recipesPayload>
          }
          update: {
            args: Prisma.recipesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$recipesPayload>
          }
          deleteMany: {
            args: Prisma.recipesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.recipesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.recipesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$recipesPayload>
          }
          aggregate: {
            args: Prisma.RecipesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRecipes>
          }
          groupBy: {
            args: Prisma.recipesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<RecipesGroupByOutputType>[]
          }
          count: {
            args: Prisma.recipesCountArgs<ExtArgs>,
            result: $Utils.Optional<RecipesCountAggregateOutputType> | number
          }
        }
      }
      quantities: {
        payload: Prisma.$quantitiesPayload<ExtArgs>
        fields: Prisma.quantitiesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.quantitiesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$quantitiesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.quantitiesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$quantitiesPayload>
          }
          findFirst: {
            args: Prisma.quantitiesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$quantitiesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.quantitiesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$quantitiesPayload>
          }
          findMany: {
            args: Prisma.quantitiesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$quantitiesPayload>[]
          }
          create: {
            args: Prisma.quantitiesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$quantitiesPayload>
          }
          createMany: {
            args: Prisma.quantitiesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.quantitiesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$quantitiesPayload>
          }
          update: {
            args: Prisma.quantitiesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$quantitiesPayload>
          }
          deleteMany: {
            args: Prisma.quantitiesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.quantitiesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.quantitiesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$quantitiesPayload>
          }
          aggregate: {
            args: Prisma.QuantitiesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateQuantities>
          }
          groupBy: {
            args: Prisma.quantitiesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<QuantitiesGroupByOutputType>[]
          }
          count: {
            args: Prisma.quantitiesCountArgs<ExtArgs>,
            result: $Utils.Optional<QuantitiesCountAggregateOutputType> | number
          }
        }
      }
      favorites: {
        payload: Prisma.$favoritesPayload<ExtArgs>
        fields: Prisma.favoritesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.favoritesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$favoritesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.favoritesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$favoritesPayload>
          }
          findFirst: {
            args: Prisma.favoritesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$favoritesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.favoritesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$favoritesPayload>
          }
          findMany: {
            args: Prisma.favoritesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$favoritesPayload>[]
          }
          create: {
            args: Prisma.favoritesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$favoritesPayload>
          }
          createMany: {
            args: Prisma.favoritesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.favoritesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$favoritesPayload>
          }
          update: {
            args: Prisma.favoritesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$favoritesPayload>
          }
          deleteMany: {
            args: Prisma.favoritesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.favoritesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.favoritesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$favoritesPayload>
          }
          aggregate: {
            args: Prisma.FavoritesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFavorites>
          }
          groupBy: {
            args: Prisma.favoritesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FavoritesGroupByOutputType>[]
          }
          count: {
            args: Prisma.favoritesCountArgs<ExtArgs>,
            result: $Utils.Optional<FavoritesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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
    | 'update'
    | 'updateMany'
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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    recipes: number
    favorites: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipes?: boolean | UsersCountOutputTypeCountRecipesArgs
    favorites?: boolean | UsersCountOutputTypeCountFavoritesArgs
  }

  // Custom InputTypes

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountRecipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: recipesWhereInput
  }


  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountFavoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: favoritesWhereInput
  }



  /**
   * Count Type ProductsCountOutputType
   */

  export type ProductsCountOutputType = {
    quantities: number
    products_of_months: number
  }

  export type ProductsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quantities?: boolean | ProductsCountOutputTypeCountQuantitiesArgs
    products_of_months?: boolean | ProductsCountOutputTypeCountProducts_of_monthsArgs
  }

  // Custom InputTypes

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsCountOutputType
     */
    select?: ProductsCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountQuantitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: quantitiesWhereInput
  }


  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountProducts_of_monthsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: products_of_monthsWhereInput
  }



  /**
   * Count Type RecipesCountOutputType
   */

  export type RecipesCountOutputType = {
    quantities: number
    favorites: number
  }

  export type RecipesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quantities?: boolean | RecipesCountOutputTypeCountQuantitiesArgs
    favorites?: boolean | RecipesCountOutputTypeCountFavoritesArgs
  }

  // Custom InputTypes

  /**
   * RecipesCountOutputType without action
   */
  export type RecipesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipesCountOutputType
     */
    select?: RecipesCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * RecipesCountOutputType without action
   */
  export type RecipesCountOutputTypeCountQuantitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: quantitiesWhereInput
  }


  /**
   * RecipesCountOutputType without action
   */
  export type RecipesCountOutputTypeCountFavoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: favoritesWhereInput
  }



  /**
   * Models
   */

  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    user_id: number | null
  }

  export type UsersSumAggregateOutputType = {
    user_id: number | null
  }

  export type UsersMinAggregateOutputType = {
    user_id: number | null
    profile: $Enums.profile | null
    email: string | null
    password: string | null
    date_of_birth: Date | null
    address: string | null
    zip_code: string | null
    city: string | null
    profile_picture: Buffer | null
    confirmation_link: boolean | null
    confirmation_date_sent: Date | null
    created_date: Date | null
    last_connection: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    user_id: number | null
    profile: $Enums.profile | null
    email: string | null
    password: string | null
    date_of_birth: Date | null
    address: string | null
    zip_code: string | null
    city: string | null
    profile_picture: Buffer | null
    confirmation_link: boolean | null
    confirmation_date_sent: Date | null
    created_date: Date | null
    last_connection: Date | null
  }

  export type UsersCountAggregateOutputType = {
    user_id: number
    profile: number
    email: number
    password: number
    date_of_birth: number
    address: number
    zip_code: number
    city: number
    profile_picture: number
    confirmation_link: number
    confirmation_date_sent: number
    created_date: number
    last_connection: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    user_id?: true
  }

  export type UsersSumAggregateInputType = {
    user_id?: true
  }

  export type UsersMinAggregateInputType = {
    user_id?: true
    profile?: true
    email?: true
    password?: true
    date_of_birth?: true
    address?: true
    zip_code?: true
    city?: true
    profile_picture?: true
    confirmation_link?: true
    confirmation_date_sent?: true
    created_date?: true
    last_connection?: true
  }

  export type UsersMaxAggregateInputType = {
    user_id?: true
    profile?: true
    email?: true
    password?: true
    date_of_birth?: true
    address?: true
    zip_code?: true
    city?: true
    profile_picture?: true
    confirmation_link?: true
    confirmation_date_sent?: true
    created_date?: true
    last_connection?: true
  }

  export type UsersCountAggregateInputType = {
    user_id?: true
    profile?: true
    email?: true
    password?: true
    date_of_birth?: true
    address?: true
    zip_code?: true
    city?: true
    profile_picture?: true
    confirmation_link?: true
    confirmation_date_sent?: true
    created_date?: true
    last_connection?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    user_id: number
    profile: $Enums.profile
    email: string
    password: string
    date_of_birth: Date | null
    address: string | null
    zip_code: string | null
    city: string | null
    profile_picture: Buffer | null
    confirmation_link: boolean
    confirmation_date_sent: Date | null
    created_date: Date | null
    last_connection: Date | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    profile?: boolean
    email?: boolean
    password?: boolean
    date_of_birth?: boolean
    address?: boolean
    zip_code?: boolean
    city?: boolean
    profile_picture?: boolean
    confirmation_link?: boolean
    confirmation_date_sent?: boolean
    created_date?: boolean
    last_connection?: boolean
    recipes?: boolean | users$recipesArgs<ExtArgs>
    favorites?: boolean | users$favoritesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    user_id?: boolean
    profile?: boolean
    email?: boolean
    password?: boolean
    date_of_birth?: boolean
    address?: boolean
    zip_code?: boolean
    city?: boolean
    profile_picture?: boolean
    confirmation_link?: boolean
    confirmation_date_sent?: boolean
    created_date?: boolean
    last_connection?: boolean
  }

  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipes?: boolean | users$recipesArgs<ExtArgs>
    favorites?: boolean | users$favoritesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      recipes: Prisma.$recipesPayload<ExtArgs>[]
      favorites: Prisma.$favoritesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      profile: $Enums.profile
      email: string
      password: string
      date_of_birth: Date | null
      address: string | null
      zip_code: string | null
      city: string | null
      profile_picture: Buffer | null
      confirmation_link: boolean
      confirmation_date_sent: Date | null
      created_date: Date | null
      last_connection: Date | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }


  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends usersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Users that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends usersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const usersWithUser_idOnly = await prisma.users.findMany({ select: { user_id: true } })
     * 
    **/
    findMany<T extends usersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
    **/
    create<T extends usersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, usersCreateArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {usersCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const users = await prisma.users.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends usersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
    **/
    delete<T extends usersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, usersDeleteArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends usersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpdateArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends usersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends usersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
    **/
    upsert<T extends usersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpsertArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    recipes<T extends users$recipesArgs<ExtArgs> = {}>(args?: Subset<T, users$recipesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recipesPayload<ExtArgs>, T, 'findMany'> | Null>;

    favorites<T extends users$favoritesArgs<ExtArgs> = {}>(args?: Subset<T, users$favoritesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$favoritesPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the users model
   */ 
  interface usersFieldRefs {
    readonly user_id: FieldRef<"users", 'Int'>
    readonly profile: FieldRef<"users", 'profile'>
    readonly email: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly date_of_birth: FieldRef<"users", 'DateTime'>
    readonly address: FieldRef<"users", 'String'>
    readonly zip_code: FieldRef<"users", 'String'>
    readonly city: FieldRef<"users", 'String'>
    readonly profile_picture: FieldRef<"users", 'Bytes'>
    readonly confirmation_link: FieldRef<"users", 'Boolean'>
    readonly confirmation_date_sent: FieldRef<"users", 'DateTime'>
    readonly created_date: FieldRef<"users", 'DateTime'>
    readonly last_connection: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }


  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
  }


  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }


  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
  }


  /**
   * users.recipes
   */
  export type users$recipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipes
     */
    select?: recipesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: recipesInclude<ExtArgs> | null
    where?: recipesWhereInput
    orderBy?: recipesOrderByWithRelationInput | recipesOrderByWithRelationInput[]
    cursor?: recipesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecipesScalarFieldEnum | RecipesScalarFieldEnum[]
  }


  /**
   * users.favorites
   */
  export type users$favoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favorites
     */
    select?: favoritesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: favoritesInclude<ExtArgs> | null
    where?: favoritesWhereInput
    orderBy?: favoritesOrderByWithRelationInput | favoritesOrderByWithRelationInput[]
    cursor?: favoritesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoritesScalarFieldEnum | FavoritesScalarFieldEnum[]
  }


  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
  }



  /**
   * Model products
   */

  export type AggregateProducts = {
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  export type ProductsAvgAggregateOutputType = {
    product_id: number | null
  }

  export type ProductsSumAggregateOutputType = {
    product_id: number | null
  }

  export type ProductsMinAggregateOutputType = {
    product_id: number | null
    name: string | null
    category: $Enums.category | null
    picture: Buffer | null
    description: string | null
  }

  export type ProductsMaxAggregateOutputType = {
    product_id: number | null
    name: string | null
    category: $Enums.category | null
    picture: Buffer | null
    description: string | null
  }

  export type ProductsCountAggregateOutputType = {
    product_id: number
    name: number
    category: number
    picture: number
    description: number
    _all: number
  }


  export type ProductsAvgAggregateInputType = {
    product_id?: true
  }

  export type ProductsSumAggregateInputType = {
    product_id?: true
  }

  export type ProductsMinAggregateInputType = {
    product_id?: true
    name?: true
    category?: true
    picture?: true
    description?: true
  }

  export type ProductsMaxAggregateInputType = {
    product_id?: true
    name?: true
    category?: true
    picture?: true
    description?: true
  }

  export type ProductsCountAggregateInputType = {
    product_id?: true
    name?: true
    category?: true
    picture?: true
    description?: true
    _all?: true
  }

  export type ProductsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to aggregate.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned products
    **/
    _count?: true | ProductsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductsMaxAggregateInputType
  }

  export type GetProductsAggregateType<T extends ProductsAggregateArgs> = {
        [P in keyof T & keyof AggregateProducts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducts[P]>
      : GetScalarType<T[P], AggregateProducts[P]>
  }




  export type productsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productsWhereInput
    orderBy?: productsOrderByWithAggregationInput | productsOrderByWithAggregationInput[]
    by: ProductsScalarFieldEnum[] | ProductsScalarFieldEnum
    having?: productsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductsCountAggregateInputType | true
    _avg?: ProductsAvgAggregateInputType
    _sum?: ProductsSumAggregateInputType
    _min?: ProductsMinAggregateInputType
    _max?: ProductsMaxAggregateInputType
  }

  export type ProductsGroupByOutputType = {
    product_id: number
    name: string
    category: $Enums.category
    picture: Buffer | null
    description: string | null
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  type GetProductsGroupByPayload<T extends productsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductsGroupByOutputType[P]>
            : GetScalarType<T[P], ProductsGroupByOutputType[P]>
        }
      >
    >


  export type productsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    product_id?: boolean
    name?: boolean
    category?: boolean
    picture?: boolean
    description?: boolean
    quantities?: boolean | products$quantitiesArgs<ExtArgs>
    products_of_months?: boolean | products$products_of_monthsArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type productsSelectScalar = {
    product_id?: boolean
    name?: boolean
    category?: boolean
    picture?: boolean
    description?: boolean
  }

  export type productsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quantities?: boolean | products$quantitiesArgs<ExtArgs>
    products_of_months?: boolean | products$products_of_monthsArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $productsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "products"
    objects: {
      quantities: Prisma.$quantitiesPayload<ExtArgs>[]
      products_of_months: Prisma.$products_of_monthsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      product_id: number
      name: string
      category: $Enums.category
      picture: Buffer | null
      description: string | null
    }, ExtArgs["result"]["products"]>
    composites: {}
  }


  type productsGetPayload<S extends boolean | null | undefined | productsDefaultArgs> = $Result.GetResult<Prisma.$productsPayload, S>

  type productsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<productsFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ProductsCountAggregateInputType | true
    }

  export interface productsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['products'], meta: { name: 'products' } }
    /**
     * Find zero or one Products that matches the filter.
     * @param {productsFindUniqueArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends productsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, productsFindUniqueArgs<ExtArgs>>
    ): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Products that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {productsFindUniqueOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends productsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, productsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindFirstArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends productsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, productsFindFirstArgs<ExtArgs>>
    ): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Products that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindFirstOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends productsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, productsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.products.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.products.findMany({ take: 10 })
     * 
     * // Only select the `product_id`
     * const productsWithProduct_idOnly = await prisma.products.findMany({ select: { product_id: true } })
     * 
    **/
    findMany<T extends productsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, productsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Products.
     * @param {productsCreateArgs} args - Arguments to create a Products.
     * @example
     * // Create one Products
     * const Products = await prisma.products.create({
     *   data: {
     *     // ... data to create a Products
     *   }
     * })
     * 
    **/
    create<T extends productsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, productsCreateArgs<ExtArgs>>
    ): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Products.
     *     @param {productsCreateManyArgs} args - Arguments to create many Products.
     *     @example
     *     // Create many Products
     *     const products = await prisma.products.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends productsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, productsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Products.
     * @param {productsDeleteArgs} args - Arguments to delete one Products.
     * @example
     * // Delete one Products
     * const Products = await prisma.products.delete({
     *   where: {
     *     // ... filter to delete one Products
     *   }
     * })
     * 
    **/
    delete<T extends productsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, productsDeleteArgs<ExtArgs>>
    ): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Products.
     * @param {productsUpdateArgs} args - Arguments to update one Products.
     * @example
     * // Update one Products
     * const products = await prisma.products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends productsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, productsUpdateArgs<ExtArgs>>
    ): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Products.
     * @param {productsDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends productsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, productsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends productsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, productsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Products.
     * @param {productsUpsertArgs} args - Arguments to update or create a Products.
     * @example
     * // Update or create a Products
     * const products = await prisma.products.upsert({
     *   create: {
     *     // ... data to create a Products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Products we want to update
     *   }
     * })
    **/
    upsert<T extends productsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, productsUpsertArgs<ExtArgs>>
    ): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.products.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends productsCountArgs>(
      args?: Subset<T, productsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductsAggregateArgs>(args: Subset<T, ProductsAggregateArgs>): Prisma.PrismaPromise<GetProductsAggregateType<T>>

    /**
     * Group by Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsGroupByArgs} args - Group by arguments.
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
      T extends productsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: productsGroupByArgs['orderBy'] }
        : { orderBy?: productsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, productsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the products model
   */
  readonly fields: productsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for products.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__productsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    quantities<T extends products$quantitiesArgs<ExtArgs> = {}>(args?: Subset<T, products$quantitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$quantitiesPayload<ExtArgs>, T, 'findMany'> | Null>;

    products_of_months<T extends products$products_of_monthsArgs<ExtArgs> = {}>(args?: Subset<T, products$products_of_monthsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$products_of_monthsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the products model
   */ 
  interface productsFieldRefs {
    readonly product_id: FieldRef<"products", 'Int'>
    readonly name: FieldRef<"products", 'String'>
    readonly category: FieldRef<"products", 'category'>
    readonly picture: FieldRef<"products", 'Bytes'>
    readonly description: FieldRef<"products", 'String'>
  }
    

  // Custom InputTypes

  /**
   * products findUnique
   */
  export type productsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where: productsWhereUniqueInput
  }


  /**
   * products findUniqueOrThrow
   */
  export type productsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where: productsWhereUniqueInput
  }


  /**
   * products findFirst
   */
  export type productsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }


  /**
   * products findFirstOrThrow
   */
  export type productsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }


  /**
   * products findMany
   */
  export type productsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }


  /**
   * products create
   */
  export type productsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The data needed to create a products.
     */
    data: XOR<productsCreateInput, productsUncheckedCreateInput>
  }


  /**
   * products createMany
   */
  export type productsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many products.
     */
    data: productsCreateManyInput | productsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * products update
   */
  export type productsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The data needed to update a products.
     */
    data: XOR<productsUpdateInput, productsUncheckedUpdateInput>
    /**
     * Choose, which products to update.
     */
    where: productsWhereUniqueInput
  }


  /**
   * products updateMany
   */
  export type productsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update products.
     */
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productsWhereInput
  }


  /**
   * products upsert
   */
  export type productsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The filter to search for the products to update in case it exists.
     */
    where: productsWhereUniqueInput
    /**
     * In case the products found by the `where` argument doesn't exist, create a new products with this data.
     */
    create: XOR<productsCreateInput, productsUncheckedCreateInput>
    /**
     * In case the products was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productsUpdateInput, productsUncheckedUpdateInput>
  }


  /**
   * products delete
   */
  export type productsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter which products to delete.
     */
    where: productsWhereUniqueInput
  }


  /**
   * products deleteMany
   */
  export type productsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to delete
     */
    where?: productsWhereInput
  }


  /**
   * products.quantities
   */
  export type products$quantitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quantities
     */
    select?: quantitiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: quantitiesInclude<ExtArgs> | null
    where?: quantitiesWhereInput
    orderBy?: quantitiesOrderByWithRelationInput | quantitiesOrderByWithRelationInput[]
    cursor?: quantitiesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuantitiesScalarFieldEnum | QuantitiesScalarFieldEnum[]
  }


  /**
   * products.products_of_months
   */
  export type products$products_of_monthsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products_of_months
     */
    select?: products_of_monthsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: products_of_monthsInclude<ExtArgs> | null
    where?: products_of_monthsWhereInput
    orderBy?: products_of_monthsOrderByWithRelationInput | products_of_monthsOrderByWithRelationInput[]
    cursor?: products_of_monthsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Products_of_monthsScalarFieldEnum | Products_of_monthsScalarFieldEnum[]
  }


  /**
   * products without action
   */
  export type productsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: productsInclude<ExtArgs> | null
  }



  /**
   * Model products_of_months
   */

  export type AggregateProducts_of_months = {
    _count: Products_of_monthsCountAggregateOutputType | null
    _avg: Products_of_monthsAvgAggregateOutputType | null
    _sum: Products_of_monthsSumAggregateOutputType | null
    _min: Products_of_monthsMinAggregateOutputType | null
    _max: Products_of_monthsMaxAggregateOutputType | null
  }

  export type Products_of_monthsAvgAggregateOutputType = {
    product_of_month_id: number | null
    product_id: number | null
  }

  export type Products_of_monthsSumAggregateOutputType = {
    product_of_month_id: number | null
    product_id: number | null
  }

  export type Products_of_monthsMinAggregateOutputType = {
    product_of_month_id: number | null
    month: $Enums.month | null
    product_id: number | null
    featured: boolean | null
  }

  export type Products_of_monthsMaxAggregateOutputType = {
    product_of_month_id: number | null
    month: $Enums.month | null
    product_id: number | null
    featured: boolean | null
  }

  export type Products_of_monthsCountAggregateOutputType = {
    product_of_month_id: number
    month: number
    product_id: number
    featured: number
    _all: number
  }


  export type Products_of_monthsAvgAggregateInputType = {
    product_of_month_id?: true
    product_id?: true
  }

  export type Products_of_monthsSumAggregateInputType = {
    product_of_month_id?: true
    product_id?: true
  }

  export type Products_of_monthsMinAggregateInputType = {
    product_of_month_id?: true
    month?: true
    product_id?: true
    featured?: true
  }

  export type Products_of_monthsMaxAggregateInputType = {
    product_of_month_id?: true
    month?: true
    product_id?: true
    featured?: true
  }

  export type Products_of_monthsCountAggregateInputType = {
    product_of_month_id?: true
    month?: true
    product_id?: true
    featured?: true
    _all?: true
  }

  export type Products_of_monthsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products_of_months to aggregate.
     */
    where?: products_of_monthsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products_of_months to fetch.
     */
    orderBy?: products_of_monthsOrderByWithRelationInput | products_of_monthsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: products_of_monthsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products_of_months from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products_of_months.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned products_of_months
    **/
    _count?: true | Products_of_monthsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Products_of_monthsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Products_of_monthsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Products_of_monthsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Products_of_monthsMaxAggregateInputType
  }

  export type GetProducts_of_monthsAggregateType<T extends Products_of_monthsAggregateArgs> = {
        [P in keyof T & keyof AggregateProducts_of_months]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducts_of_months[P]>
      : GetScalarType<T[P], AggregateProducts_of_months[P]>
  }




  export type products_of_monthsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: products_of_monthsWhereInput
    orderBy?: products_of_monthsOrderByWithAggregationInput | products_of_monthsOrderByWithAggregationInput[]
    by: Products_of_monthsScalarFieldEnum[] | Products_of_monthsScalarFieldEnum
    having?: products_of_monthsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Products_of_monthsCountAggregateInputType | true
    _avg?: Products_of_monthsAvgAggregateInputType
    _sum?: Products_of_monthsSumAggregateInputType
    _min?: Products_of_monthsMinAggregateInputType
    _max?: Products_of_monthsMaxAggregateInputType
  }

  export type Products_of_monthsGroupByOutputType = {
    product_of_month_id: number
    month: $Enums.month
    product_id: number
    featured: boolean
    _count: Products_of_monthsCountAggregateOutputType | null
    _avg: Products_of_monthsAvgAggregateOutputType | null
    _sum: Products_of_monthsSumAggregateOutputType | null
    _min: Products_of_monthsMinAggregateOutputType | null
    _max: Products_of_monthsMaxAggregateOutputType | null
  }

  type GetProducts_of_monthsGroupByPayload<T extends products_of_monthsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Products_of_monthsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Products_of_monthsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Products_of_monthsGroupByOutputType[P]>
            : GetScalarType<T[P], Products_of_monthsGroupByOutputType[P]>
        }
      >
    >


  export type products_of_monthsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    product_of_month_id?: boolean
    month?: boolean
    product_id?: boolean
    featured?: boolean
    product?: boolean | productsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products_of_months"]>

  export type products_of_monthsSelectScalar = {
    product_of_month_id?: boolean
    month?: boolean
    product_id?: boolean
    featured?: boolean
  }

  export type products_of_monthsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | productsDefaultArgs<ExtArgs>
  }


  export type $products_of_monthsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "products_of_months"
    objects: {
      product: Prisma.$productsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      product_of_month_id: number
      month: $Enums.month
      product_id: number
      featured: boolean
    }, ExtArgs["result"]["products_of_months"]>
    composites: {}
  }


  type products_of_monthsGetPayload<S extends boolean | null | undefined | products_of_monthsDefaultArgs> = $Result.GetResult<Prisma.$products_of_monthsPayload, S>

  type products_of_monthsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<products_of_monthsFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: Products_of_monthsCountAggregateInputType | true
    }

  export interface products_of_monthsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['products_of_months'], meta: { name: 'products_of_months' } }
    /**
     * Find zero or one Products_of_months that matches the filter.
     * @param {products_of_monthsFindUniqueArgs} args - Arguments to find a Products_of_months
     * @example
     * // Get one Products_of_months
     * const products_of_months = await prisma.products_of_months.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends products_of_monthsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, products_of_monthsFindUniqueArgs<ExtArgs>>
    ): Prisma__products_of_monthsClient<$Result.GetResult<Prisma.$products_of_monthsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Products_of_months that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {products_of_monthsFindUniqueOrThrowArgs} args - Arguments to find a Products_of_months
     * @example
     * // Get one Products_of_months
     * const products_of_months = await prisma.products_of_months.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends products_of_monthsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, products_of_monthsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__products_of_monthsClient<$Result.GetResult<Prisma.$products_of_monthsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Products_of_months that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {products_of_monthsFindFirstArgs} args - Arguments to find a Products_of_months
     * @example
     * // Get one Products_of_months
     * const products_of_months = await prisma.products_of_months.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends products_of_monthsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, products_of_monthsFindFirstArgs<ExtArgs>>
    ): Prisma__products_of_monthsClient<$Result.GetResult<Prisma.$products_of_monthsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Products_of_months that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {products_of_monthsFindFirstOrThrowArgs} args - Arguments to find a Products_of_months
     * @example
     * // Get one Products_of_months
     * const products_of_months = await prisma.products_of_months.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends products_of_monthsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, products_of_monthsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__products_of_monthsClient<$Result.GetResult<Prisma.$products_of_monthsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Products_of_months that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {products_of_monthsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products_of_months
     * const products_of_months = await prisma.products_of_months.findMany()
     * 
     * // Get first 10 Products_of_months
     * const products_of_months = await prisma.products_of_months.findMany({ take: 10 })
     * 
     * // Only select the `product_of_month_id`
     * const products_of_monthsWithProduct_of_month_idOnly = await prisma.products_of_months.findMany({ select: { product_of_month_id: true } })
     * 
    **/
    findMany<T extends products_of_monthsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, products_of_monthsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$products_of_monthsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Products_of_months.
     * @param {products_of_monthsCreateArgs} args - Arguments to create a Products_of_months.
     * @example
     * // Create one Products_of_months
     * const Products_of_months = await prisma.products_of_months.create({
     *   data: {
     *     // ... data to create a Products_of_months
     *   }
     * })
     * 
    **/
    create<T extends products_of_monthsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, products_of_monthsCreateArgs<ExtArgs>>
    ): Prisma__products_of_monthsClient<$Result.GetResult<Prisma.$products_of_monthsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Products_of_months.
     *     @param {products_of_monthsCreateManyArgs} args - Arguments to create many Products_of_months.
     *     @example
     *     // Create many Products_of_months
     *     const products_of_months = await prisma.products_of_months.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends products_of_monthsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, products_of_monthsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Products_of_months.
     * @param {products_of_monthsDeleteArgs} args - Arguments to delete one Products_of_months.
     * @example
     * // Delete one Products_of_months
     * const Products_of_months = await prisma.products_of_months.delete({
     *   where: {
     *     // ... filter to delete one Products_of_months
     *   }
     * })
     * 
    **/
    delete<T extends products_of_monthsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, products_of_monthsDeleteArgs<ExtArgs>>
    ): Prisma__products_of_monthsClient<$Result.GetResult<Prisma.$products_of_monthsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Products_of_months.
     * @param {products_of_monthsUpdateArgs} args - Arguments to update one Products_of_months.
     * @example
     * // Update one Products_of_months
     * const products_of_months = await prisma.products_of_months.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends products_of_monthsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, products_of_monthsUpdateArgs<ExtArgs>>
    ): Prisma__products_of_monthsClient<$Result.GetResult<Prisma.$products_of_monthsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Products_of_months.
     * @param {products_of_monthsDeleteManyArgs} args - Arguments to filter Products_of_months to delete.
     * @example
     * // Delete a few Products_of_months
     * const { count } = await prisma.products_of_months.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends products_of_monthsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, products_of_monthsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products_of_months.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {products_of_monthsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products_of_months
     * const products_of_months = await prisma.products_of_months.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends products_of_monthsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, products_of_monthsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Products_of_months.
     * @param {products_of_monthsUpsertArgs} args - Arguments to update or create a Products_of_months.
     * @example
     * // Update or create a Products_of_months
     * const products_of_months = await prisma.products_of_months.upsert({
     *   create: {
     *     // ... data to create a Products_of_months
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Products_of_months we want to update
     *   }
     * })
    **/
    upsert<T extends products_of_monthsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, products_of_monthsUpsertArgs<ExtArgs>>
    ): Prisma__products_of_monthsClient<$Result.GetResult<Prisma.$products_of_monthsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Products_of_months.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {products_of_monthsCountArgs} args - Arguments to filter Products_of_months to count.
     * @example
     * // Count the number of Products_of_months
     * const count = await prisma.products_of_months.count({
     *   where: {
     *     // ... the filter for the Products_of_months we want to count
     *   }
     * })
    **/
    count<T extends products_of_monthsCountArgs>(
      args?: Subset<T, products_of_monthsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Products_of_monthsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Products_of_months.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Products_of_monthsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Products_of_monthsAggregateArgs>(args: Subset<T, Products_of_monthsAggregateArgs>): Prisma.PrismaPromise<GetProducts_of_monthsAggregateType<T>>

    /**
     * Group by Products_of_months.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {products_of_monthsGroupByArgs} args - Group by arguments.
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
      T extends products_of_monthsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: products_of_monthsGroupByArgs['orderBy'] }
        : { orderBy?: products_of_monthsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, products_of_monthsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProducts_of_monthsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the products_of_months model
   */
  readonly fields: products_of_monthsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for products_of_months.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__products_of_monthsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    product<T extends productsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productsDefaultArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the products_of_months model
   */ 
  interface products_of_monthsFieldRefs {
    readonly product_of_month_id: FieldRef<"products_of_months", 'Int'>
    readonly month: FieldRef<"products_of_months", 'month'>
    readonly product_id: FieldRef<"products_of_months", 'Int'>
    readonly featured: FieldRef<"products_of_months", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * products_of_months findUnique
   */
  export type products_of_monthsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products_of_months
     */
    select?: products_of_monthsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: products_of_monthsInclude<ExtArgs> | null
    /**
     * Filter, which products_of_months to fetch.
     */
    where: products_of_monthsWhereUniqueInput
  }


  /**
   * products_of_months findUniqueOrThrow
   */
  export type products_of_monthsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products_of_months
     */
    select?: products_of_monthsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: products_of_monthsInclude<ExtArgs> | null
    /**
     * Filter, which products_of_months to fetch.
     */
    where: products_of_monthsWhereUniqueInput
  }


  /**
   * products_of_months findFirst
   */
  export type products_of_monthsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products_of_months
     */
    select?: products_of_monthsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: products_of_monthsInclude<ExtArgs> | null
    /**
     * Filter, which products_of_months to fetch.
     */
    where?: products_of_monthsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products_of_months to fetch.
     */
    orderBy?: products_of_monthsOrderByWithRelationInput | products_of_monthsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products_of_months.
     */
    cursor?: products_of_monthsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products_of_months from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products_of_months.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products_of_months.
     */
    distinct?: Products_of_monthsScalarFieldEnum | Products_of_monthsScalarFieldEnum[]
  }


  /**
   * products_of_months findFirstOrThrow
   */
  export type products_of_monthsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products_of_months
     */
    select?: products_of_monthsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: products_of_monthsInclude<ExtArgs> | null
    /**
     * Filter, which products_of_months to fetch.
     */
    where?: products_of_monthsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products_of_months to fetch.
     */
    orderBy?: products_of_monthsOrderByWithRelationInput | products_of_monthsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products_of_months.
     */
    cursor?: products_of_monthsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products_of_months from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products_of_months.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products_of_months.
     */
    distinct?: Products_of_monthsScalarFieldEnum | Products_of_monthsScalarFieldEnum[]
  }


  /**
   * products_of_months findMany
   */
  export type products_of_monthsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products_of_months
     */
    select?: products_of_monthsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: products_of_monthsInclude<ExtArgs> | null
    /**
     * Filter, which products_of_months to fetch.
     */
    where?: products_of_monthsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products_of_months to fetch.
     */
    orderBy?: products_of_monthsOrderByWithRelationInput | products_of_monthsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing products_of_months.
     */
    cursor?: products_of_monthsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products_of_months from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products_of_months.
     */
    skip?: number
    distinct?: Products_of_monthsScalarFieldEnum | Products_of_monthsScalarFieldEnum[]
  }


  /**
   * products_of_months create
   */
  export type products_of_monthsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products_of_months
     */
    select?: products_of_monthsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: products_of_monthsInclude<ExtArgs> | null
    /**
     * The data needed to create a products_of_months.
     */
    data: XOR<products_of_monthsCreateInput, products_of_monthsUncheckedCreateInput>
  }


  /**
   * products_of_months createMany
   */
  export type products_of_monthsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many products_of_months.
     */
    data: products_of_monthsCreateManyInput | products_of_monthsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * products_of_months update
   */
  export type products_of_monthsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products_of_months
     */
    select?: products_of_monthsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: products_of_monthsInclude<ExtArgs> | null
    /**
     * The data needed to update a products_of_months.
     */
    data: XOR<products_of_monthsUpdateInput, products_of_monthsUncheckedUpdateInput>
    /**
     * Choose, which products_of_months to update.
     */
    where: products_of_monthsWhereUniqueInput
  }


  /**
   * products_of_months updateMany
   */
  export type products_of_monthsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update products_of_months.
     */
    data: XOR<products_of_monthsUpdateManyMutationInput, products_of_monthsUncheckedUpdateManyInput>
    /**
     * Filter which products_of_months to update
     */
    where?: products_of_monthsWhereInput
  }


  /**
   * products_of_months upsert
   */
  export type products_of_monthsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products_of_months
     */
    select?: products_of_monthsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: products_of_monthsInclude<ExtArgs> | null
    /**
     * The filter to search for the products_of_months to update in case it exists.
     */
    where: products_of_monthsWhereUniqueInput
    /**
     * In case the products_of_months found by the `where` argument doesn't exist, create a new products_of_months with this data.
     */
    create: XOR<products_of_monthsCreateInput, products_of_monthsUncheckedCreateInput>
    /**
     * In case the products_of_months was found with the provided `where` argument, update it with this data.
     */
    update: XOR<products_of_monthsUpdateInput, products_of_monthsUncheckedUpdateInput>
  }


  /**
   * products_of_months delete
   */
  export type products_of_monthsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products_of_months
     */
    select?: products_of_monthsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: products_of_monthsInclude<ExtArgs> | null
    /**
     * Filter which products_of_months to delete.
     */
    where: products_of_monthsWhereUniqueInput
  }


  /**
   * products_of_months deleteMany
   */
  export type products_of_monthsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products_of_months to delete
     */
    where?: products_of_monthsWhereInput
  }


  /**
   * products_of_months without action
   */
  export type products_of_monthsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products_of_months
     */
    select?: products_of_monthsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: products_of_monthsInclude<ExtArgs> | null
  }



  /**
   * Model recipes
   */

  export type AggregateRecipes = {
    _count: RecipesCountAggregateOutputType | null
    _avg: RecipesAvgAggregateOutputType | null
    _sum: RecipesSumAggregateOutputType | null
    _min: RecipesMinAggregateOutputType | null
    _max: RecipesMaxAggregateOutputType | null
  }

  export type RecipesAvgAggregateOutputType = {
    recipe_id: number | null
    number_persons: number | null
    user_id: number | null
  }

  export type RecipesSumAggregateOutputType = {
    recipe_id: number | null
    number_persons: number | null
    user_id: number | null
  }

  export type RecipesMinAggregateOutputType = {
    recipe_id: number | null
    title: string | null
    photo: string | null
    difficulty: string | null
    duration: string | null
    number_persons: number | null
    instructions: string | null
    utensils: string | null
    information: string | null
    user_id: number | null
  }

  export type RecipesMaxAggregateOutputType = {
    recipe_id: number | null
    title: string | null
    photo: string | null
    difficulty: string | null
    duration: string | null
    number_persons: number | null
    instructions: string | null
    utensils: string | null
    information: string | null
    user_id: number | null
  }

  export type RecipesCountAggregateOutputType = {
    recipe_id: number
    title: number
    photo: number
    difficulty: number
    duration: number
    number_persons: number
    instructions: number
    utensils: number
    information: number
    user_id: number
    _all: number
  }


  export type RecipesAvgAggregateInputType = {
    recipe_id?: true
    number_persons?: true
    user_id?: true
  }

  export type RecipesSumAggregateInputType = {
    recipe_id?: true
    number_persons?: true
    user_id?: true
  }

  export type RecipesMinAggregateInputType = {
    recipe_id?: true
    title?: true
    photo?: true
    difficulty?: true
    duration?: true
    number_persons?: true
    instructions?: true
    utensils?: true
    information?: true
    user_id?: true
  }

  export type RecipesMaxAggregateInputType = {
    recipe_id?: true
    title?: true
    photo?: true
    difficulty?: true
    duration?: true
    number_persons?: true
    instructions?: true
    utensils?: true
    information?: true
    user_id?: true
  }

  export type RecipesCountAggregateInputType = {
    recipe_id?: true
    title?: true
    photo?: true
    difficulty?: true
    duration?: true
    number_persons?: true
    instructions?: true
    utensils?: true
    information?: true
    user_id?: true
    _all?: true
  }

  export type RecipesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which recipes to aggregate.
     */
    where?: recipesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recipes to fetch.
     */
    orderBy?: recipesOrderByWithRelationInput | recipesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: recipesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned recipes
    **/
    _count?: true | RecipesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecipesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecipesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecipesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecipesMaxAggregateInputType
  }

  export type GetRecipesAggregateType<T extends RecipesAggregateArgs> = {
        [P in keyof T & keyof AggregateRecipes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecipes[P]>
      : GetScalarType<T[P], AggregateRecipes[P]>
  }




  export type recipesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: recipesWhereInput
    orderBy?: recipesOrderByWithAggregationInput | recipesOrderByWithAggregationInput[]
    by: RecipesScalarFieldEnum[] | RecipesScalarFieldEnum
    having?: recipesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecipesCountAggregateInputType | true
    _avg?: RecipesAvgAggregateInputType
    _sum?: RecipesSumAggregateInputType
    _min?: RecipesMinAggregateInputType
    _max?: RecipesMaxAggregateInputType
  }

  export type RecipesGroupByOutputType = {
    recipe_id: number
    title: string
    photo: string | null
    difficulty: string | null
    duration: string | null
    number_persons: number
    instructions: string
    utensils: string | null
    information: string | null
    user_id: number
    _count: RecipesCountAggregateOutputType | null
    _avg: RecipesAvgAggregateOutputType | null
    _sum: RecipesSumAggregateOutputType | null
    _min: RecipesMinAggregateOutputType | null
    _max: RecipesMaxAggregateOutputType | null
  }

  type GetRecipesGroupByPayload<T extends recipesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecipesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecipesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecipesGroupByOutputType[P]>
            : GetScalarType<T[P], RecipesGroupByOutputType[P]>
        }
      >
    >


  export type recipesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    recipe_id?: boolean
    title?: boolean
    photo?: boolean
    difficulty?: boolean
    duration?: boolean
    number_persons?: boolean
    instructions?: boolean
    utensils?: boolean
    information?: boolean
    user_id?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
    quantities?: boolean | recipes$quantitiesArgs<ExtArgs>
    favorites?: boolean | recipes$favoritesArgs<ExtArgs>
    _count?: boolean | RecipesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipes"]>

  export type recipesSelectScalar = {
    recipe_id?: boolean
    title?: boolean
    photo?: boolean
    difficulty?: boolean
    duration?: boolean
    number_persons?: boolean
    instructions?: boolean
    utensils?: boolean
    information?: boolean
    user_id?: boolean
  }

  export type recipesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
    quantities?: boolean | recipes$quantitiesArgs<ExtArgs>
    favorites?: boolean | recipes$favoritesArgs<ExtArgs>
    _count?: boolean | RecipesCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $recipesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "recipes"
    objects: {
      user: Prisma.$usersPayload<ExtArgs>
      quantities: Prisma.$quantitiesPayload<ExtArgs>[]
      favorites: Prisma.$favoritesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      recipe_id: number
      title: string
      photo: string | null
      difficulty: string | null
      duration: string | null
      number_persons: number
      instructions: string
      utensils: string | null
      information: string | null
      user_id: number
    }, ExtArgs["result"]["recipes"]>
    composites: {}
  }


  type recipesGetPayload<S extends boolean | null | undefined | recipesDefaultArgs> = $Result.GetResult<Prisma.$recipesPayload, S>

  type recipesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<recipesFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: RecipesCountAggregateInputType | true
    }

  export interface recipesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['recipes'], meta: { name: 'recipes' } }
    /**
     * Find zero or one Recipes that matches the filter.
     * @param {recipesFindUniqueArgs} args - Arguments to find a Recipes
     * @example
     * // Get one Recipes
     * const recipes = await prisma.recipes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends recipesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, recipesFindUniqueArgs<ExtArgs>>
    ): Prisma__recipesClient<$Result.GetResult<Prisma.$recipesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Recipes that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {recipesFindUniqueOrThrowArgs} args - Arguments to find a Recipes
     * @example
     * // Get one Recipes
     * const recipes = await prisma.recipes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends recipesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, recipesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__recipesClient<$Result.GetResult<Prisma.$recipesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Recipes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recipesFindFirstArgs} args - Arguments to find a Recipes
     * @example
     * // Get one Recipes
     * const recipes = await prisma.recipes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends recipesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, recipesFindFirstArgs<ExtArgs>>
    ): Prisma__recipesClient<$Result.GetResult<Prisma.$recipesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Recipes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recipesFindFirstOrThrowArgs} args - Arguments to find a Recipes
     * @example
     * // Get one Recipes
     * const recipes = await prisma.recipes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends recipesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, recipesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__recipesClient<$Result.GetResult<Prisma.$recipesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Recipes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recipesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recipes
     * const recipes = await prisma.recipes.findMany()
     * 
     * // Get first 10 Recipes
     * const recipes = await prisma.recipes.findMany({ take: 10 })
     * 
     * // Only select the `recipe_id`
     * const recipesWithRecipe_idOnly = await prisma.recipes.findMany({ select: { recipe_id: true } })
     * 
    **/
    findMany<T extends recipesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, recipesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recipesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Recipes.
     * @param {recipesCreateArgs} args - Arguments to create a Recipes.
     * @example
     * // Create one Recipes
     * const Recipes = await prisma.recipes.create({
     *   data: {
     *     // ... data to create a Recipes
     *   }
     * })
     * 
    **/
    create<T extends recipesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, recipesCreateArgs<ExtArgs>>
    ): Prisma__recipesClient<$Result.GetResult<Prisma.$recipesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Recipes.
     *     @param {recipesCreateManyArgs} args - Arguments to create many Recipes.
     *     @example
     *     // Create many Recipes
     *     const recipes = await prisma.recipes.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends recipesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, recipesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Recipes.
     * @param {recipesDeleteArgs} args - Arguments to delete one Recipes.
     * @example
     * // Delete one Recipes
     * const Recipes = await prisma.recipes.delete({
     *   where: {
     *     // ... filter to delete one Recipes
     *   }
     * })
     * 
    **/
    delete<T extends recipesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, recipesDeleteArgs<ExtArgs>>
    ): Prisma__recipesClient<$Result.GetResult<Prisma.$recipesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Recipes.
     * @param {recipesUpdateArgs} args - Arguments to update one Recipes.
     * @example
     * // Update one Recipes
     * const recipes = await prisma.recipes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends recipesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, recipesUpdateArgs<ExtArgs>>
    ): Prisma__recipesClient<$Result.GetResult<Prisma.$recipesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Recipes.
     * @param {recipesDeleteManyArgs} args - Arguments to filter Recipes to delete.
     * @example
     * // Delete a few Recipes
     * const { count } = await prisma.recipes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends recipesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, recipesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recipesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recipes
     * const recipes = await prisma.recipes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends recipesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, recipesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Recipes.
     * @param {recipesUpsertArgs} args - Arguments to update or create a Recipes.
     * @example
     * // Update or create a Recipes
     * const recipes = await prisma.recipes.upsert({
     *   create: {
     *     // ... data to create a Recipes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recipes we want to update
     *   }
     * })
    **/
    upsert<T extends recipesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, recipesUpsertArgs<ExtArgs>>
    ): Prisma__recipesClient<$Result.GetResult<Prisma.$recipesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recipesCountArgs} args - Arguments to filter Recipes to count.
     * @example
     * // Count the number of Recipes
     * const count = await prisma.recipes.count({
     *   where: {
     *     // ... the filter for the Recipes we want to count
     *   }
     * })
    **/
    count<T extends recipesCountArgs>(
      args?: Subset<T, recipesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecipesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RecipesAggregateArgs>(args: Subset<T, RecipesAggregateArgs>): Prisma.PrismaPromise<GetRecipesAggregateType<T>>

    /**
     * Group by Recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recipesGroupByArgs} args - Group by arguments.
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
      T extends recipesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: recipesGroupByArgs['orderBy'] }
        : { orderBy?: recipesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, recipesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecipesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the recipes model
   */
  readonly fields: recipesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for recipes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__recipesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    quantities<T extends recipes$quantitiesArgs<ExtArgs> = {}>(args?: Subset<T, recipes$quantitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$quantitiesPayload<ExtArgs>, T, 'findMany'> | Null>;

    favorites<T extends recipes$favoritesArgs<ExtArgs> = {}>(args?: Subset<T, recipes$favoritesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$favoritesPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the recipes model
   */ 
  interface recipesFieldRefs {
    readonly recipe_id: FieldRef<"recipes", 'Int'>
    readonly title: FieldRef<"recipes", 'String'>
    readonly photo: FieldRef<"recipes", 'String'>
    readonly difficulty: FieldRef<"recipes", 'String'>
    readonly duration: FieldRef<"recipes", 'String'>
    readonly number_persons: FieldRef<"recipes", 'Int'>
    readonly instructions: FieldRef<"recipes", 'String'>
    readonly utensils: FieldRef<"recipes", 'String'>
    readonly information: FieldRef<"recipes", 'String'>
    readonly user_id: FieldRef<"recipes", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * recipes findUnique
   */
  export type recipesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipes
     */
    select?: recipesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: recipesInclude<ExtArgs> | null
    /**
     * Filter, which recipes to fetch.
     */
    where: recipesWhereUniqueInput
  }


  /**
   * recipes findUniqueOrThrow
   */
  export type recipesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipes
     */
    select?: recipesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: recipesInclude<ExtArgs> | null
    /**
     * Filter, which recipes to fetch.
     */
    where: recipesWhereUniqueInput
  }


  /**
   * recipes findFirst
   */
  export type recipesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipes
     */
    select?: recipesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: recipesInclude<ExtArgs> | null
    /**
     * Filter, which recipes to fetch.
     */
    where?: recipesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recipes to fetch.
     */
    orderBy?: recipesOrderByWithRelationInput | recipesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for recipes.
     */
    cursor?: recipesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of recipes.
     */
    distinct?: RecipesScalarFieldEnum | RecipesScalarFieldEnum[]
  }


  /**
   * recipes findFirstOrThrow
   */
  export type recipesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipes
     */
    select?: recipesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: recipesInclude<ExtArgs> | null
    /**
     * Filter, which recipes to fetch.
     */
    where?: recipesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recipes to fetch.
     */
    orderBy?: recipesOrderByWithRelationInput | recipesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for recipes.
     */
    cursor?: recipesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of recipes.
     */
    distinct?: RecipesScalarFieldEnum | RecipesScalarFieldEnum[]
  }


  /**
   * recipes findMany
   */
  export type recipesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipes
     */
    select?: recipesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: recipesInclude<ExtArgs> | null
    /**
     * Filter, which recipes to fetch.
     */
    where?: recipesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recipes to fetch.
     */
    orderBy?: recipesOrderByWithRelationInput | recipesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing recipes.
     */
    cursor?: recipesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recipes.
     */
    skip?: number
    distinct?: RecipesScalarFieldEnum | RecipesScalarFieldEnum[]
  }


  /**
   * recipes create
   */
  export type recipesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipes
     */
    select?: recipesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: recipesInclude<ExtArgs> | null
    /**
     * The data needed to create a recipes.
     */
    data: XOR<recipesCreateInput, recipesUncheckedCreateInput>
  }


  /**
   * recipes createMany
   */
  export type recipesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many recipes.
     */
    data: recipesCreateManyInput | recipesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * recipes update
   */
  export type recipesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipes
     */
    select?: recipesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: recipesInclude<ExtArgs> | null
    /**
     * The data needed to update a recipes.
     */
    data: XOR<recipesUpdateInput, recipesUncheckedUpdateInput>
    /**
     * Choose, which recipes to update.
     */
    where: recipesWhereUniqueInput
  }


  /**
   * recipes updateMany
   */
  export type recipesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update recipes.
     */
    data: XOR<recipesUpdateManyMutationInput, recipesUncheckedUpdateManyInput>
    /**
     * Filter which recipes to update
     */
    where?: recipesWhereInput
  }


  /**
   * recipes upsert
   */
  export type recipesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipes
     */
    select?: recipesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: recipesInclude<ExtArgs> | null
    /**
     * The filter to search for the recipes to update in case it exists.
     */
    where: recipesWhereUniqueInput
    /**
     * In case the recipes found by the `where` argument doesn't exist, create a new recipes with this data.
     */
    create: XOR<recipesCreateInput, recipesUncheckedCreateInput>
    /**
     * In case the recipes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<recipesUpdateInput, recipesUncheckedUpdateInput>
  }


  /**
   * recipes delete
   */
  export type recipesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipes
     */
    select?: recipesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: recipesInclude<ExtArgs> | null
    /**
     * Filter which recipes to delete.
     */
    where: recipesWhereUniqueInput
  }


  /**
   * recipes deleteMany
   */
  export type recipesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which recipes to delete
     */
    where?: recipesWhereInput
  }


  /**
   * recipes.quantities
   */
  export type recipes$quantitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quantities
     */
    select?: quantitiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: quantitiesInclude<ExtArgs> | null
    where?: quantitiesWhereInput
    orderBy?: quantitiesOrderByWithRelationInput | quantitiesOrderByWithRelationInput[]
    cursor?: quantitiesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuantitiesScalarFieldEnum | QuantitiesScalarFieldEnum[]
  }


  /**
   * recipes.favorites
   */
  export type recipes$favoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favorites
     */
    select?: favoritesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: favoritesInclude<ExtArgs> | null
    where?: favoritesWhereInput
    orderBy?: favoritesOrderByWithRelationInput | favoritesOrderByWithRelationInput[]
    cursor?: favoritesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoritesScalarFieldEnum | FavoritesScalarFieldEnum[]
  }


  /**
   * recipes without action
   */
  export type recipesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recipes
     */
    select?: recipesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: recipesInclude<ExtArgs> | null
  }



  /**
   * Model quantities
   */

  export type AggregateQuantities = {
    _count: QuantitiesCountAggregateOutputType | null
    _avg: QuantitiesAvgAggregateOutputType | null
    _sum: QuantitiesSumAggregateOutputType | null
    _min: QuantitiesMinAggregateOutputType | null
    _max: QuantitiesMaxAggregateOutputType | null
  }

  export type QuantitiesAvgAggregateOutputType = {
    quantity_id: number | null
    quantity_number: Decimal | null
    recipe_id: number | null
    product_id: number | null
  }

  export type QuantitiesSumAggregateOutputType = {
    quantity_id: number | null
    quantity_number: Decimal | null
    recipe_id: number | null
    product_id: number | null
  }

  export type QuantitiesMinAggregateOutputType = {
    quantity_id: number | null
    quantity_number: Decimal | null
    quantity_label: $Enums.quantity_label | null
    recipe_id: number | null
    product_id: number | null
  }

  export type QuantitiesMaxAggregateOutputType = {
    quantity_id: number | null
    quantity_number: Decimal | null
    quantity_label: $Enums.quantity_label | null
    recipe_id: number | null
    product_id: number | null
  }

  export type QuantitiesCountAggregateOutputType = {
    quantity_id: number
    quantity_number: number
    quantity_label: number
    recipe_id: number
    product_id: number
    _all: number
  }


  export type QuantitiesAvgAggregateInputType = {
    quantity_id?: true
    quantity_number?: true
    recipe_id?: true
    product_id?: true
  }

  export type QuantitiesSumAggregateInputType = {
    quantity_id?: true
    quantity_number?: true
    recipe_id?: true
    product_id?: true
  }

  export type QuantitiesMinAggregateInputType = {
    quantity_id?: true
    quantity_number?: true
    quantity_label?: true
    recipe_id?: true
    product_id?: true
  }

  export type QuantitiesMaxAggregateInputType = {
    quantity_id?: true
    quantity_number?: true
    quantity_label?: true
    recipe_id?: true
    product_id?: true
  }

  export type QuantitiesCountAggregateInputType = {
    quantity_id?: true
    quantity_number?: true
    quantity_label?: true
    recipe_id?: true
    product_id?: true
    _all?: true
  }

  export type QuantitiesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which quantities to aggregate.
     */
    where?: quantitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of quantities to fetch.
     */
    orderBy?: quantitiesOrderByWithRelationInput | quantitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: quantitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` quantities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` quantities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned quantities
    **/
    _count?: true | QuantitiesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuantitiesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuantitiesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuantitiesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuantitiesMaxAggregateInputType
  }

  export type GetQuantitiesAggregateType<T extends QuantitiesAggregateArgs> = {
        [P in keyof T & keyof AggregateQuantities]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuantities[P]>
      : GetScalarType<T[P], AggregateQuantities[P]>
  }




  export type quantitiesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: quantitiesWhereInput
    orderBy?: quantitiesOrderByWithAggregationInput | quantitiesOrderByWithAggregationInput[]
    by: QuantitiesScalarFieldEnum[] | QuantitiesScalarFieldEnum
    having?: quantitiesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuantitiesCountAggregateInputType | true
    _avg?: QuantitiesAvgAggregateInputType
    _sum?: QuantitiesSumAggregateInputType
    _min?: QuantitiesMinAggregateInputType
    _max?: QuantitiesMaxAggregateInputType
  }

  export type QuantitiesGroupByOutputType = {
    quantity_id: number
    quantity_number: Decimal
    quantity_label: $Enums.quantity_label
    recipe_id: number
    product_id: number
    _count: QuantitiesCountAggregateOutputType | null
    _avg: QuantitiesAvgAggregateOutputType | null
    _sum: QuantitiesSumAggregateOutputType | null
    _min: QuantitiesMinAggregateOutputType | null
    _max: QuantitiesMaxAggregateOutputType | null
  }

  type GetQuantitiesGroupByPayload<T extends quantitiesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuantitiesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuantitiesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuantitiesGroupByOutputType[P]>
            : GetScalarType<T[P], QuantitiesGroupByOutputType[P]>
        }
      >
    >


  export type quantitiesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    quantity_id?: boolean
    quantity_number?: boolean
    quantity_label?: boolean
    recipe_id?: boolean
    product_id?: boolean
    recipe?: boolean | recipesDefaultArgs<ExtArgs>
    product?: boolean | productsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quantities"]>

  export type quantitiesSelectScalar = {
    quantity_id?: boolean
    quantity_number?: boolean
    quantity_label?: boolean
    recipe_id?: boolean
    product_id?: boolean
  }

  export type quantitiesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | recipesDefaultArgs<ExtArgs>
    product?: boolean | productsDefaultArgs<ExtArgs>
  }


  export type $quantitiesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "quantities"
    objects: {
      recipe: Prisma.$recipesPayload<ExtArgs>
      product: Prisma.$productsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      quantity_id: number
      quantity_number: Prisma.Decimal
      quantity_label: $Enums.quantity_label
      recipe_id: number
      product_id: number
    }, ExtArgs["result"]["quantities"]>
    composites: {}
  }


  type quantitiesGetPayload<S extends boolean | null | undefined | quantitiesDefaultArgs> = $Result.GetResult<Prisma.$quantitiesPayload, S>

  type quantitiesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<quantitiesFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: QuantitiesCountAggregateInputType | true
    }

  export interface quantitiesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['quantities'], meta: { name: 'quantities' } }
    /**
     * Find zero or one Quantities that matches the filter.
     * @param {quantitiesFindUniqueArgs} args - Arguments to find a Quantities
     * @example
     * // Get one Quantities
     * const quantities = await prisma.quantities.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends quantitiesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, quantitiesFindUniqueArgs<ExtArgs>>
    ): Prisma__quantitiesClient<$Result.GetResult<Prisma.$quantitiesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Quantities that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {quantitiesFindUniqueOrThrowArgs} args - Arguments to find a Quantities
     * @example
     * // Get one Quantities
     * const quantities = await prisma.quantities.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends quantitiesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, quantitiesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__quantitiesClient<$Result.GetResult<Prisma.$quantitiesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Quantities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {quantitiesFindFirstArgs} args - Arguments to find a Quantities
     * @example
     * // Get one Quantities
     * const quantities = await prisma.quantities.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends quantitiesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, quantitiesFindFirstArgs<ExtArgs>>
    ): Prisma__quantitiesClient<$Result.GetResult<Prisma.$quantitiesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Quantities that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {quantitiesFindFirstOrThrowArgs} args - Arguments to find a Quantities
     * @example
     * // Get one Quantities
     * const quantities = await prisma.quantities.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends quantitiesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, quantitiesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__quantitiesClient<$Result.GetResult<Prisma.$quantitiesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Quantities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {quantitiesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Quantities
     * const quantities = await prisma.quantities.findMany()
     * 
     * // Get first 10 Quantities
     * const quantities = await prisma.quantities.findMany({ take: 10 })
     * 
     * // Only select the `quantity_id`
     * const quantitiesWithQuantity_idOnly = await prisma.quantities.findMany({ select: { quantity_id: true } })
     * 
    **/
    findMany<T extends quantitiesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, quantitiesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$quantitiesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Quantities.
     * @param {quantitiesCreateArgs} args - Arguments to create a Quantities.
     * @example
     * // Create one Quantities
     * const Quantities = await prisma.quantities.create({
     *   data: {
     *     // ... data to create a Quantities
     *   }
     * })
     * 
    **/
    create<T extends quantitiesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, quantitiesCreateArgs<ExtArgs>>
    ): Prisma__quantitiesClient<$Result.GetResult<Prisma.$quantitiesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Quantities.
     *     @param {quantitiesCreateManyArgs} args - Arguments to create many Quantities.
     *     @example
     *     // Create many Quantities
     *     const quantities = await prisma.quantities.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends quantitiesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, quantitiesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Quantities.
     * @param {quantitiesDeleteArgs} args - Arguments to delete one Quantities.
     * @example
     * // Delete one Quantities
     * const Quantities = await prisma.quantities.delete({
     *   where: {
     *     // ... filter to delete one Quantities
     *   }
     * })
     * 
    **/
    delete<T extends quantitiesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, quantitiesDeleteArgs<ExtArgs>>
    ): Prisma__quantitiesClient<$Result.GetResult<Prisma.$quantitiesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Quantities.
     * @param {quantitiesUpdateArgs} args - Arguments to update one Quantities.
     * @example
     * // Update one Quantities
     * const quantities = await prisma.quantities.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends quantitiesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, quantitiesUpdateArgs<ExtArgs>>
    ): Prisma__quantitiesClient<$Result.GetResult<Prisma.$quantitiesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Quantities.
     * @param {quantitiesDeleteManyArgs} args - Arguments to filter Quantities to delete.
     * @example
     * // Delete a few Quantities
     * const { count } = await prisma.quantities.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends quantitiesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, quantitiesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quantities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {quantitiesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Quantities
     * const quantities = await prisma.quantities.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends quantitiesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, quantitiesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Quantities.
     * @param {quantitiesUpsertArgs} args - Arguments to update or create a Quantities.
     * @example
     * // Update or create a Quantities
     * const quantities = await prisma.quantities.upsert({
     *   create: {
     *     // ... data to create a Quantities
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Quantities we want to update
     *   }
     * })
    **/
    upsert<T extends quantitiesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, quantitiesUpsertArgs<ExtArgs>>
    ): Prisma__quantitiesClient<$Result.GetResult<Prisma.$quantitiesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Quantities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {quantitiesCountArgs} args - Arguments to filter Quantities to count.
     * @example
     * // Count the number of Quantities
     * const count = await prisma.quantities.count({
     *   where: {
     *     // ... the filter for the Quantities we want to count
     *   }
     * })
    **/
    count<T extends quantitiesCountArgs>(
      args?: Subset<T, quantitiesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuantitiesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Quantities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuantitiesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuantitiesAggregateArgs>(args: Subset<T, QuantitiesAggregateArgs>): Prisma.PrismaPromise<GetQuantitiesAggregateType<T>>

    /**
     * Group by Quantities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {quantitiesGroupByArgs} args - Group by arguments.
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
      T extends quantitiesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: quantitiesGroupByArgs['orderBy'] }
        : { orderBy?: quantitiesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, quantitiesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuantitiesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the quantities model
   */
  readonly fields: quantitiesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for quantities.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__quantitiesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    recipe<T extends recipesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, recipesDefaultArgs<ExtArgs>>): Prisma__recipesClient<$Result.GetResult<Prisma.$recipesPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    product<T extends productsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productsDefaultArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the quantities model
   */ 
  interface quantitiesFieldRefs {
    readonly quantity_id: FieldRef<"quantities", 'Int'>
    readonly quantity_number: FieldRef<"quantities", 'Decimal'>
    readonly quantity_label: FieldRef<"quantities", 'quantity_label'>
    readonly recipe_id: FieldRef<"quantities", 'Int'>
    readonly product_id: FieldRef<"quantities", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * quantities findUnique
   */
  export type quantitiesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quantities
     */
    select?: quantitiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: quantitiesInclude<ExtArgs> | null
    /**
     * Filter, which quantities to fetch.
     */
    where: quantitiesWhereUniqueInput
  }


  /**
   * quantities findUniqueOrThrow
   */
  export type quantitiesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quantities
     */
    select?: quantitiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: quantitiesInclude<ExtArgs> | null
    /**
     * Filter, which quantities to fetch.
     */
    where: quantitiesWhereUniqueInput
  }


  /**
   * quantities findFirst
   */
  export type quantitiesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quantities
     */
    select?: quantitiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: quantitiesInclude<ExtArgs> | null
    /**
     * Filter, which quantities to fetch.
     */
    where?: quantitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of quantities to fetch.
     */
    orderBy?: quantitiesOrderByWithRelationInput | quantitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for quantities.
     */
    cursor?: quantitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` quantities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` quantities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of quantities.
     */
    distinct?: QuantitiesScalarFieldEnum | QuantitiesScalarFieldEnum[]
  }


  /**
   * quantities findFirstOrThrow
   */
  export type quantitiesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quantities
     */
    select?: quantitiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: quantitiesInclude<ExtArgs> | null
    /**
     * Filter, which quantities to fetch.
     */
    where?: quantitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of quantities to fetch.
     */
    orderBy?: quantitiesOrderByWithRelationInput | quantitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for quantities.
     */
    cursor?: quantitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` quantities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` quantities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of quantities.
     */
    distinct?: QuantitiesScalarFieldEnum | QuantitiesScalarFieldEnum[]
  }


  /**
   * quantities findMany
   */
  export type quantitiesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quantities
     */
    select?: quantitiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: quantitiesInclude<ExtArgs> | null
    /**
     * Filter, which quantities to fetch.
     */
    where?: quantitiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of quantities to fetch.
     */
    orderBy?: quantitiesOrderByWithRelationInput | quantitiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing quantities.
     */
    cursor?: quantitiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` quantities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` quantities.
     */
    skip?: number
    distinct?: QuantitiesScalarFieldEnum | QuantitiesScalarFieldEnum[]
  }


  /**
   * quantities create
   */
  export type quantitiesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quantities
     */
    select?: quantitiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: quantitiesInclude<ExtArgs> | null
    /**
     * The data needed to create a quantities.
     */
    data: XOR<quantitiesCreateInput, quantitiesUncheckedCreateInput>
  }


  /**
   * quantities createMany
   */
  export type quantitiesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many quantities.
     */
    data: quantitiesCreateManyInput | quantitiesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * quantities update
   */
  export type quantitiesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quantities
     */
    select?: quantitiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: quantitiesInclude<ExtArgs> | null
    /**
     * The data needed to update a quantities.
     */
    data: XOR<quantitiesUpdateInput, quantitiesUncheckedUpdateInput>
    /**
     * Choose, which quantities to update.
     */
    where: quantitiesWhereUniqueInput
  }


  /**
   * quantities updateMany
   */
  export type quantitiesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update quantities.
     */
    data: XOR<quantitiesUpdateManyMutationInput, quantitiesUncheckedUpdateManyInput>
    /**
     * Filter which quantities to update
     */
    where?: quantitiesWhereInput
  }


  /**
   * quantities upsert
   */
  export type quantitiesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quantities
     */
    select?: quantitiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: quantitiesInclude<ExtArgs> | null
    /**
     * The filter to search for the quantities to update in case it exists.
     */
    where: quantitiesWhereUniqueInput
    /**
     * In case the quantities found by the `where` argument doesn't exist, create a new quantities with this data.
     */
    create: XOR<quantitiesCreateInput, quantitiesUncheckedCreateInput>
    /**
     * In case the quantities was found with the provided `where` argument, update it with this data.
     */
    update: XOR<quantitiesUpdateInput, quantitiesUncheckedUpdateInput>
  }


  /**
   * quantities delete
   */
  export type quantitiesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quantities
     */
    select?: quantitiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: quantitiesInclude<ExtArgs> | null
    /**
     * Filter which quantities to delete.
     */
    where: quantitiesWhereUniqueInput
  }


  /**
   * quantities deleteMany
   */
  export type quantitiesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which quantities to delete
     */
    where?: quantitiesWhereInput
  }


  /**
   * quantities without action
   */
  export type quantitiesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quantities
     */
    select?: quantitiesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: quantitiesInclude<ExtArgs> | null
  }



  /**
   * Model favorites
   */

  export type AggregateFavorites = {
    _count: FavoritesCountAggregateOutputType | null
    _avg: FavoritesAvgAggregateOutputType | null
    _sum: FavoritesSumAggregateOutputType | null
    _min: FavoritesMinAggregateOutputType | null
    _max: FavoritesMaxAggregateOutputType | null
  }

  export type FavoritesAvgAggregateOutputType = {
    favorite_id: number | null
    recipe_id: number | null
    user_id: number | null
  }

  export type FavoritesSumAggregateOutputType = {
    favorite_id: number | null
    recipe_id: number | null
    user_id: number | null
  }

  export type FavoritesMinAggregateOutputType = {
    favorite_id: number | null
    recipe_id: number | null
    user_id: number | null
  }

  export type FavoritesMaxAggregateOutputType = {
    favorite_id: number | null
    recipe_id: number | null
    user_id: number | null
  }

  export type FavoritesCountAggregateOutputType = {
    favorite_id: number
    recipe_id: number
    user_id: number
    _all: number
  }


  export type FavoritesAvgAggregateInputType = {
    favorite_id?: true
    recipe_id?: true
    user_id?: true
  }

  export type FavoritesSumAggregateInputType = {
    favorite_id?: true
    recipe_id?: true
    user_id?: true
  }

  export type FavoritesMinAggregateInputType = {
    favorite_id?: true
    recipe_id?: true
    user_id?: true
  }

  export type FavoritesMaxAggregateInputType = {
    favorite_id?: true
    recipe_id?: true
    user_id?: true
  }

  export type FavoritesCountAggregateInputType = {
    favorite_id?: true
    recipe_id?: true
    user_id?: true
    _all?: true
  }

  export type FavoritesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which favorites to aggregate.
     */
    where?: favoritesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of favorites to fetch.
     */
    orderBy?: favoritesOrderByWithRelationInput | favoritesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: favoritesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned favorites
    **/
    _count?: true | FavoritesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FavoritesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FavoritesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FavoritesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FavoritesMaxAggregateInputType
  }

  export type GetFavoritesAggregateType<T extends FavoritesAggregateArgs> = {
        [P in keyof T & keyof AggregateFavorites]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFavorites[P]>
      : GetScalarType<T[P], AggregateFavorites[P]>
  }




  export type favoritesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: favoritesWhereInput
    orderBy?: favoritesOrderByWithAggregationInput | favoritesOrderByWithAggregationInput[]
    by: FavoritesScalarFieldEnum[] | FavoritesScalarFieldEnum
    having?: favoritesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FavoritesCountAggregateInputType | true
    _avg?: FavoritesAvgAggregateInputType
    _sum?: FavoritesSumAggregateInputType
    _min?: FavoritesMinAggregateInputType
    _max?: FavoritesMaxAggregateInputType
  }

  export type FavoritesGroupByOutputType = {
    favorite_id: number
    recipe_id: number
    user_id: number
    _count: FavoritesCountAggregateOutputType | null
    _avg: FavoritesAvgAggregateOutputType | null
    _sum: FavoritesSumAggregateOutputType | null
    _min: FavoritesMinAggregateOutputType | null
    _max: FavoritesMaxAggregateOutputType | null
  }

  type GetFavoritesGroupByPayload<T extends favoritesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FavoritesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FavoritesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FavoritesGroupByOutputType[P]>
            : GetScalarType<T[P], FavoritesGroupByOutputType[P]>
        }
      >
    >


  export type favoritesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    favorite_id?: boolean
    recipe_id?: boolean
    user_id?: boolean
    recipe?: boolean | recipesDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorites"]>

  export type favoritesSelectScalar = {
    favorite_id?: boolean
    recipe_id?: boolean
    user_id?: boolean
  }

  export type favoritesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    recipe?: boolean | recipesDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }


  export type $favoritesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "favorites"
    objects: {
      recipe: Prisma.$recipesPayload<ExtArgs>
      user: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      favorite_id: number
      recipe_id: number
      user_id: number
    }, ExtArgs["result"]["favorites"]>
    composites: {}
  }


  type favoritesGetPayload<S extends boolean | null | undefined | favoritesDefaultArgs> = $Result.GetResult<Prisma.$favoritesPayload, S>

  type favoritesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<favoritesFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: FavoritesCountAggregateInputType | true
    }

  export interface favoritesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['favorites'], meta: { name: 'favorites' } }
    /**
     * Find zero or one Favorites that matches the filter.
     * @param {favoritesFindUniqueArgs} args - Arguments to find a Favorites
     * @example
     * // Get one Favorites
     * const favorites = await prisma.favorites.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends favoritesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, favoritesFindUniqueArgs<ExtArgs>>
    ): Prisma__favoritesClient<$Result.GetResult<Prisma.$favoritesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Favorites that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {favoritesFindUniqueOrThrowArgs} args - Arguments to find a Favorites
     * @example
     * // Get one Favorites
     * const favorites = await prisma.favorites.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends favoritesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, favoritesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__favoritesClient<$Result.GetResult<Prisma.$favoritesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Favorites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {favoritesFindFirstArgs} args - Arguments to find a Favorites
     * @example
     * // Get one Favorites
     * const favorites = await prisma.favorites.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends favoritesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, favoritesFindFirstArgs<ExtArgs>>
    ): Prisma__favoritesClient<$Result.GetResult<Prisma.$favoritesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Favorites that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {favoritesFindFirstOrThrowArgs} args - Arguments to find a Favorites
     * @example
     * // Get one Favorites
     * const favorites = await prisma.favorites.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends favoritesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, favoritesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__favoritesClient<$Result.GetResult<Prisma.$favoritesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Favorites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {favoritesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Favorites
     * const favorites = await prisma.favorites.findMany()
     * 
     * // Get first 10 Favorites
     * const favorites = await prisma.favorites.findMany({ take: 10 })
     * 
     * // Only select the `favorite_id`
     * const favoritesWithFavorite_idOnly = await prisma.favorites.findMany({ select: { favorite_id: true } })
     * 
    **/
    findMany<T extends favoritesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, favoritesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$favoritesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Favorites.
     * @param {favoritesCreateArgs} args - Arguments to create a Favorites.
     * @example
     * // Create one Favorites
     * const Favorites = await prisma.favorites.create({
     *   data: {
     *     // ... data to create a Favorites
     *   }
     * })
     * 
    **/
    create<T extends favoritesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, favoritesCreateArgs<ExtArgs>>
    ): Prisma__favoritesClient<$Result.GetResult<Prisma.$favoritesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Favorites.
     *     @param {favoritesCreateManyArgs} args - Arguments to create many Favorites.
     *     @example
     *     // Create many Favorites
     *     const favorites = await prisma.favorites.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends favoritesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, favoritesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Favorites.
     * @param {favoritesDeleteArgs} args - Arguments to delete one Favorites.
     * @example
     * // Delete one Favorites
     * const Favorites = await prisma.favorites.delete({
     *   where: {
     *     // ... filter to delete one Favorites
     *   }
     * })
     * 
    **/
    delete<T extends favoritesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, favoritesDeleteArgs<ExtArgs>>
    ): Prisma__favoritesClient<$Result.GetResult<Prisma.$favoritesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Favorites.
     * @param {favoritesUpdateArgs} args - Arguments to update one Favorites.
     * @example
     * // Update one Favorites
     * const favorites = await prisma.favorites.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends favoritesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, favoritesUpdateArgs<ExtArgs>>
    ): Prisma__favoritesClient<$Result.GetResult<Prisma.$favoritesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Favorites.
     * @param {favoritesDeleteManyArgs} args - Arguments to filter Favorites to delete.
     * @example
     * // Delete a few Favorites
     * const { count } = await prisma.favorites.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends favoritesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, favoritesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {favoritesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Favorites
     * const favorites = await prisma.favorites.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends favoritesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, favoritesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Favorites.
     * @param {favoritesUpsertArgs} args - Arguments to update or create a Favorites.
     * @example
     * // Update or create a Favorites
     * const favorites = await prisma.favorites.upsert({
     *   create: {
     *     // ... data to create a Favorites
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Favorites we want to update
     *   }
     * })
    **/
    upsert<T extends favoritesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, favoritesUpsertArgs<ExtArgs>>
    ): Prisma__favoritesClient<$Result.GetResult<Prisma.$favoritesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {favoritesCountArgs} args - Arguments to filter Favorites to count.
     * @example
     * // Count the number of Favorites
     * const count = await prisma.favorites.count({
     *   where: {
     *     // ... the filter for the Favorites we want to count
     *   }
     * })
    **/
    count<T extends favoritesCountArgs>(
      args?: Subset<T, favoritesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FavoritesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoritesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FavoritesAggregateArgs>(args: Subset<T, FavoritesAggregateArgs>): Prisma.PrismaPromise<GetFavoritesAggregateType<T>>

    /**
     * Group by Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {favoritesGroupByArgs} args - Group by arguments.
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
      T extends favoritesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: favoritesGroupByArgs['orderBy'] }
        : { orderBy?: favoritesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, favoritesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFavoritesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the favorites model
   */
  readonly fields: favoritesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for favorites.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__favoritesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    recipe<T extends recipesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, recipesDefaultArgs<ExtArgs>>): Prisma__recipesClient<$Result.GetResult<Prisma.$recipesPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the favorites model
   */ 
  interface favoritesFieldRefs {
    readonly favorite_id: FieldRef<"favorites", 'Int'>
    readonly recipe_id: FieldRef<"favorites", 'Int'>
    readonly user_id: FieldRef<"favorites", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * favorites findUnique
   */
  export type favoritesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favorites
     */
    select?: favoritesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: favoritesInclude<ExtArgs> | null
    /**
     * Filter, which favorites to fetch.
     */
    where: favoritesWhereUniqueInput
  }


  /**
   * favorites findUniqueOrThrow
   */
  export type favoritesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favorites
     */
    select?: favoritesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: favoritesInclude<ExtArgs> | null
    /**
     * Filter, which favorites to fetch.
     */
    where: favoritesWhereUniqueInput
  }


  /**
   * favorites findFirst
   */
  export type favoritesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favorites
     */
    select?: favoritesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: favoritesInclude<ExtArgs> | null
    /**
     * Filter, which favorites to fetch.
     */
    where?: favoritesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of favorites to fetch.
     */
    orderBy?: favoritesOrderByWithRelationInput | favoritesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for favorites.
     */
    cursor?: favoritesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of favorites.
     */
    distinct?: FavoritesScalarFieldEnum | FavoritesScalarFieldEnum[]
  }


  /**
   * favorites findFirstOrThrow
   */
  export type favoritesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favorites
     */
    select?: favoritesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: favoritesInclude<ExtArgs> | null
    /**
     * Filter, which favorites to fetch.
     */
    where?: favoritesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of favorites to fetch.
     */
    orderBy?: favoritesOrderByWithRelationInput | favoritesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for favorites.
     */
    cursor?: favoritesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of favorites.
     */
    distinct?: FavoritesScalarFieldEnum | FavoritesScalarFieldEnum[]
  }


  /**
   * favorites findMany
   */
  export type favoritesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favorites
     */
    select?: favoritesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: favoritesInclude<ExtArgs> | null
    /**
     * Filter, which favorites to fetch.
     */
    where?: favoritesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of favorites to fetch.
     */
    orderBy?: favoritesOrderByWithRelationInput | favoritesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing favorites.
     */
    cursor?: favoritesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` favorites.
     */
    skip?: number
    distinct?: FavoritesScalarFieldEnum | FavoritesScalarFieldEnum[]
  }


  /**
   * favorites create
   */
  export type favoritesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favorites
     */
    select?: favoritesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: favoritesInclude<ExtArgs> | null
    /**
     * The data needed to create a favorites.
     */
    data: XOR<favoritesCreateInput, favoritesUncheckedCreateInput>
  }


  /**
   * favorites createMany
   */
  export type favoritesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many favorites.
     */
    data: favoritesCreateManyInput | favoritesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * favorites update
   */
  export type favoritesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favorites
     */
    select?: favoritesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: favoritesInclude<ExtArgs> | null
    /**
     * The data needed to update a favorites.
     */
    data: XOR<favoritesUpdateInput, favoritesUncheckedUpdateInput>
    /**
     * Choose, which favorites to update.
     */
    where: favoritesWhereUniqueInput
  }


  /**
   * favorites updateMany
   */
  export type favoritesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update favorites.
     */
    data: XOR<favoritesUpdateManyMutationInput, favoritesUncheckedUpdateManyInput>
    /**
     * Filter which favorites to update
     */
    where?: favoritesWhereInput
  }


  /**
   * favorites upsert
   */
  export type favoritesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favorites
     */
    select?: favoritesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: favoritesInclude<ExtArgs> | null
    /**
     * The filter to search for the favorites to update in case it exists.
     */
    where: favoritesWhereUniqueInput
    /**
     * In case the favorites found by the `where` argument doesn't exist, create a new favorites with this data.
     */
    create: XOR<favoritesCreateInput, favoritesUncheckedCreateInput>
    /**
     * In case the favorites was found with the provided `where` argument, update it with this data.
     */
    update: XOR<favoritesUpdateInput, favoritesUncheckedUpdateInput>
  }


  /**
   * favorites delete
   */
  export type favoritesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favorites
     */
    select?: favoritesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: favoritesInclude<ExtArgs> | null
    /**
     * Filter which favorites to delete.
     */
    where: favoritesWhereUniqueInput
  }


  /**
   * favorites deleteMany
   */
  export type favoritesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which favorites to delete
     */
    where?: favoritesWhereInput
  }


  /**
   * favorites without action
   */
  export type favoritesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favorites
     */
    select?: favoritesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: favoritesInclude<ExtArgs> | null
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


  export const UsersScalarFieldEnum: {
    user_id: 'user_id',
    profile: 'profile',
    email: 'email',
    password: 'password',
    date_of_birth: 'date_of_birth',
    address: 'address',
    zip_code: 'zip_code',
    city: 'city',
    profile_picture: 'profile_picture',
    confirmation_link: 'confirmation_link',
    confirmation_date_sent: 'confirmation_date_sent',
    created_date: 'created_date',
    last_connection: 'last_connection'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const ProductsScalarFieldEnum: {
    product_id: 'product_id',
    name: 'name',
    category: 'category',
    picture: 'picture',
    description: 'description'
  };

  export type ProductsScalarFieldEnum = (typeof ProductsScalarFieldEnum)[keyof typeof ProductsScalarFieldEnum]


  export const Products_of_monthsScalarFieldEnum: {
    product_of_month_id: 'product_of_month_id',
    month: 'month',
    product_id: 'product_id',
    featured: 'featured'
  };

  export type Products_of_monthsScalarFieldEnum = (typeof Products_of_monthsScalarFieldEnum)[keyof typeof Products_of_monthsScalarFieldEnum]


  export const RecipesScalarFieldEnum: {
    recipe_id: 'recipe_id',
    title: 'title',
    photo: 'photo',
    difficulty: 'difficulty',
    duration: 'duration',
    number_persons: 'number_persons',
    instructions: 'instructions',
    utensils: 'utensils',
    information: 'information',
    user_id: 'user_id'
  };

  export type RecipesScalarFieldEnum = (typeof RecipesScalarFieldEnum)[keyof typeof RecipesScalarFieldEnum]


  export const QuantitiesScalarFieldEnum: {
    quantity_id: 'quantity_id',
    quantity_number: 'quantity_number',
    quantity_label: 'quantity_label',
    recipe_id: 'recipe_id',
    product_id: 'product_id'
  };

  export type QuantitiesScalarFieldEnum = (typeof QuantitiesScalarFieldEnum)[keyof typeof QuantitiesScalarFieldEnum]


  export const FavoritesScalarFieldEnum: {
    favorite_id: 'favorite_id',
    recipe_id: 'recipe_id',
    user_id: 'user_id'
  };

  export type FavoritesScalarFieldEnum = (typeof FavoritesScalarFieldEnum)[keyof typeof FavoritesScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'profile'
   */
  export type EnumprofileFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'profile'>
    


  /**
   * Reference to a field of type 'profile[]'
   */
  export type ListEnumprofileFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'profile[]'>
    


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
   * Reference to a field of type 'Bytes'
   */
  export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes'>
    


  /**
   * Reference to a field of type 'Bytes[]'
   */
  export type ListBytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'category'
   */
  export type EnumcategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'category'>
    


  /**
   * Reference to a field of type 'category[]'
   */
  export type ListEnumcategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'category[]'>
    


  /**
   * Reference to a field of type 'month'
   */
  export type EnummonthFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'month'>
    


  /**
   * Reference to a field of type 'month[]'
   */
  export type ListEnummonthFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'month[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'quantity_label'
   */
  export type Enumquantity_labelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'quantity_label'>
    


  /**
   * Reference to a field of type 'quantity_label[]'
   */
  export type ListEnumquantity_labelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'quantity_label[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    user_id?: IntFilter<"users"> | number
    profile?: EnumprofileFilter<"users"> | $Enums.profile
    email?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    date_of_birth?: DateTimeNullableFilter<"users"> | Date | string | null
    address?: StringNullableFilter<"users"> | string | null
    zip_code?: StringNullableFilter<"users"> | string | null
    city?: StringNullableFilter<"users"> | string | null
    profile_picture?: BytesNullableFilter<"users"> | Buffer | null
    confirmation_link?: BoolFilter<"users"> | boolean
    confirmation_date_sent?: DateTimeNullableFilter<"users"> | Date | string | null
    created_date?: DateTimeNullableFilter<"users"> | Date | string | null
    last_connection?: DateTimeNullableFilter<"users"> | Date | string | null
    recipes?: RecipesListRelationFilter
    favorites?: FavoritesListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    user_id?: SortOrder
    profile?: SortOrder
    email?: SortOrder
    password?: SortOrder
    date_of_birth?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    zip_code?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    profile_picture?: SortOrderInput | SortOrder
    confirmation_link?: SortOrder
    confirmation_date_sent?: SortOrderInput | SortOrder
    created_date?: SortOrderInput | SortOrder
    last_connection?: SortOrderInput | SortOrder
    recipes?: recipesOrderByRelationAggregateInput
    favorites?: favoritesOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    user_id?: number
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    profile?: EnumprofileFilter<"users"> | $Enums.profile
    password?: StringFilter<"users"> | string
    date_of_birth?: DateTimeNullableFilter<"users"> | Date | string | null
    address?: StringNullableFilter<"users"> | string | null
    zip_code?: StringNullableFilter<"users"> | string | null
    city?: StringNullableFilter<"users"> | string | null
    profile_picture?: BytesNullableFilter<"users"> | Buffer | null
    confirmation_link?: BoolFilter<"users"> | boolean
    confirmation_date_sent?: DateTimeNullableFilter<"users"> | Date | string | null
    created_date?: DateTimeNullableFilter<"users"> | Date | string | null
    last_connection?: DateTimeNullableFilter<"users"> | Date | string | null
    recipes?: RecipesListRelationFilter
    favorites?: FavoritesListRelationFilter
  }, "user_id" | "email">

  export type usersOrderByWithAggregationInput = {
    user_id?: SortOrder
    profile?: SortOrder
    email?: SortOrder
    password?: SortOrder
    date_of_birth?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    zip_code?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    profile_picture?: SortOrderInput | SortOrder
    confirmation_link?: SortOrder
    confirmation_date_sent?: SortOrderInput | SortOrder
    created_date?: SortOrderInput | SortOrder
    last_connection?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"users"> | number
    profile?: EnumprofileWithAggregatesFilter<"users"> | $Enums.profile
    email?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    date_of_birth?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    address?: StringNullableWithAggregatesFilter<"users"> | string | null
    zip_code?: StringNullableWithAggregatesFilter<"users"> | string | null
    city?: StringNullableWithAggregatesFilter<"users"> | string | null
    profile_picture?: BytesNullableWithAggregatesFilter<"users"> | Buffer | null
    confirmation_link?: BoolWithAggregatesFilter<"users"> | boolean
    confirmation_date_sent?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    created_date?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    last_connection?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
  }

  export type productsWhereInput = {
    AND?: productsWhereInput | productsWhereInput[]
    OR?: productsWhereInput[]
    NOT?: productsWhereInput | productsWhereInput[]
    product_id?: IntFilter<"products"> | number
    name?: StringFilter<"products"> | string
    category?: EnumcategoryFilter<"products"> | $Enums.category
    picture?: BytesNullableFilter<"products"> | Buffer | null
    description?: StringNullableFilter<"products"> | string | null
    quantities?: QuantitiesListRelationFilter
    products_of_months?: Products_of_monthsListRelationFilter
  }

  export type productsOrderByWithRelationInput = {
    product_id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    picture?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    quantities?: quantitiesOrderByRelationAggregateInput
    products_of_months?: products_of_monthsOrderByRelationAggregateInput
  }

  export type productsWhereUniqueInput = Prisma.AtLeast<{
    product_id?: number
    AND?: productsWhereInput | productsWhereInput[]
    OR?: productsWhereInput[]
    NOT?: productsWhereInput | productsWhereInput[]
    name?: StringFilter<"products"> | string
    category?: EnumcategoryFilter<"products"> | $Enums.category
    picture?: BytesNullableFilter<"products"> | Buffer | null
    description?: StringNullableFilter<"products"> | string | null
    quantities?: QuantitiesListRelationFilter
    products_of_months?: Products_of_monthsListRelationFilter
  }, "product_id">

  export type productsOrderByWithAggregationInput = {
    product_id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    picture?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    _count?: productsCountOrderByAggregateInput
    _avg?: productsAvgOrderByAggregateInput
    _max?: productsMaxOrderByAggregateInput
    _min?: productsMinOrderByAggregateInput
    _sum?: productsSumOrderByAggregateInput
  }

  export type productsScalarWhereWithAggregatesInput = {
    AND?: productsScalarWhereWithAggregatesInput | productsScalarWhereWithAggregatesInput[]
    OR?: productsScalarWhereWithAggregatesInput[]
    NOT?: productsScalarWhereWithAggregatesInput | productsScalarWhereWithAggregatesInput[]
    product_id?: IntWithAggregatesFilter<"products"> | number
    name?: StringWithAggregatesFilter<"products"> | string
    category?: EnumcategoryWithAggregatesFilter<"products"> | $Enums.category
    picture?: BytesNullableWithAggregatesFilter<"products"> | Buffer | null
    description?: StringNullableWithAggregatesFilter<"products"> | string | null
  }

  export type products_of_monthsWhereInput = {
    AND?: products_of_monthsWhereInput | products_of_monthsWhereInput[]
    OR?: products_of_monthsWhereInput[]
    NOT?: products_of_monthsWhereInput | products_of_monthsWhereInput[]
    product_of_month_id?: IntFilter<"products_of_months"> | number
    month?: EnummonthFilter<"products_of_months"> | $Enums.month
    product_id?: IntFilter<"products_of_months"> | number
    featured?: BoolFilter<"products_of_months"> | boolean
    product?: XOR<ProductsRelationFilter, productsWhereInput>
  }

  export type products_of_monthsOrderByWithRelationInput = {
    product_of_month_id?: SortOrder
    month?: SortOrder
    product_id?: SortOrder
    featured?: SortOrder
    product?: productsOrderByWithRelationInput
  }

  export type products_of_monthsWhereUniqueInput = Prisma.AtLeast<{
    product_of_month_id?: number
    AND?: products_of_monthsWhereInput | products_of_monthsWhereInput[]
    OR?: products_of_monthsWhereInput[]
    NOT?: products_of_monthsWhereInput | products_of_monthsWhereInput[]
    month?: EnummonthFilter<"products_of_months"> | $Enums.month
    product_id?: IntFilter<"products_of_months"> | number
    featured?: BoolFilter<"products_of_months"> | boolean
    product?: XOR<ProductsRelationFilter, productsWhereInput>
  }, "product_of_month_id">

  export type products_of_monthsOrderByWithAggregationInput = {
    product_of_month_id?: SortOrder
    month?: SortOrder
    product_id?: SortOrder
    featured?: SortOrder
    _count?: products_of_monthsCountOrderByAggregateInput
    _avg?: products_of_monthsAvgOrderByAggregateInput
    _max?: products_of_monthsMaxOrderByAggregateInput
    _min?: products_of_monthsMinOrderByAggregateInput
    _sum?: products_of_monthsSumOrderByAggregateInput
  }

  export type products_of_monthsScalarWhereWithAggregatesInput = {
    AND?: products_of_monthsScalarWhereWithAggregatesInput | products_of_monthsScalarWhereWithAggregatesInput[]
    OR?: products_of_monthsScalarWhereWithAggregatesInput[]
    NOT?: products_of_monthsScalarWhereWithAggregatesInput | products_of_monthsScalarWhereWithAggregatesInput[]
    product_of_month_id?: IntWithAggregatesFilter<"products_of_months"> | number
    month?: EnummonthWithAggregatesFilter<"products_of_months"> | $Enums.month
    product_id?: IntWithAggregatesFilter<"products_of_months"> | number
    featured?: BoolWithAggregatesFilter<"products_of_months"> | boolean
  }

  export type recipesWhereInput = {
    AND?: recipesWhereInput | recipesWhereInput[]
    OR?: recipesWhereInput[]
    NOT?: recipesWhereInput | recipesWhereInput[]
    recipe_id?: IntFilter<"recipes"> | number
    title?: StringFilter<"recipes"> | string
    photo?: StringNullableFilter<"recipes"> | string | null
    difficulty?: StringNullableFilter<"recipes"> | string | null
    duration?: StringNullableFilter<"recipes"> | string | null
    number_persons?: IntFilter<"recipes"> | number
    instructions?: StringFilter<"recipes"> | string
    utensils?: StringNullableFilter<"recipes"> | string | null
    information?: StringNullableFilter<"recipes"> | string | null
    user_id?: IntFilter<"recipes"> | number
    user?: XOR<UsersRelationFilter, usersWhereInput>
    quantities?: QuantitiesListRelationFilter
    favorites?: FavoritesListRelationFilter
  }

  export type recipesOrderByWithRelationInput = {
    recipe_id?: SortOrder
    title?: SortOrder
    photo?: SortOrderInput | SortOrder
    difficulty?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    number_persons?: SortOrder
    instructions?: SortOrder
    utensils?: SortOrderInput | SortOrder
    information?: SortOrderInput | SortOrder
    user_id?: SortOrder
    user?: usersOrderByWithRelationInput
    quantities?: quantitiesOrderByRelationAggregateInput
    favorites?: favoritesOrderByRelationAggregateInput
  }

  export type recipesWhereUniqueInput = Prisma.AtLeast<{
    recipe_id?: number
    AND?: recipesWhereInput | recipesWhereInput[]
    OR?: recipesWhereInput[]
    NOT?: recipesWhereInput | recipesWhereInput[]
    title?: StringFilter<"recipes"> | string
    photo?: StringNullableFilter<"recipes"> | string | null
    difficulty?: StringNullableFilter<"recipes"> | string | null
    duration?: StringNullableFilter<"recipes"> | string | null
    number_persons?: IntFilter<"recipes"> | number
    instructions?: StringFilter<"recipes"> | string
    utensils?: StringNullableFilter<"recipes"> | string | null
    information?: StringNullableFilter<"recipes"> | string | null
    user_id?: IntFilter<"recipes"> | number
    user?: XOR<UsersRelationFilter, usersWhereInput>
    quantities?: QuantitiesListRelationFilter
    favorites?: FavoritesListRelationFilter
  }, "recipe_id">

  export type recipesOrderByWithAggregationInput = {
    recipe_id?: SortOrder
    title?: SortOrder
    photo?: SortOrderInput | SortOrder
    difficulty?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    number_persons?: SortOrder
    instructions?: SortOrder
    utensils?: SortOrderInput | SortOrder
    information?: SortOrderInput | SortOrder
    user_id?: SortOrder
    _count?: recipesCountOrderByAggregateInput
    _avg?: recipesAvgOrderByAggregateInput
    _max?: recipesMaxOrderByAggregateInput
    _min?: recipesMinOrderByAggregateInput
    _sum?: recipesSumOrderByAggregateInput
  }

  export type recipesScalarWhereWithAggregatesInput = {
    AND?: recipesScalarWhereWithAggregatesInput | recipesScalarWhereWithAggregatesInput[]
    OR?: recipesScalarWhereWithAggregatesInput[]
    NOT?: recipesScalarWhereWithAggregatesInput | recipesScalarWhereWithAggregatesInput[]
    recipe_id?: IntWithAggregatesFilter<"recipes"> | number
    title?: StringWithAggregatesFilter<"recipes"> | string
    photo?: StringNullableWithAggregatesFilter<"recipes"> | string | null
    difficulty?: StringNullableWithAggregatesFilter<"recipes"> | string | null
    duration?: StringNullableWithAggregatesFilter<"recipes"> | string | null
    number_persons?: IntWithAggregatesFilter<"recipes"> | number
    instructions?: StringWithAggregatesFilter<"recipes"> | string
    utensils?: StringNullableWithAggregatesFilter<"recipes"> | string | null
    information?: StringNullableWithAggregatesFilter<"recipes"> | string | null
    user_id?: IntWithAggregatesFilter<"recipes"> | number
  }

  export type quantitiesWhereInput = {
    AND?: quantitiesWhereInput | quantitiesWhereInput[]
    OR?: quantitiesWhereInput[]
    NOT?: quantitiesWhereInput | quantitiesWhereInput[]
    quantity_id?: IntFilter<"quantities"> | number
    quantity_number?: DecimalFilter<"quantities"> | Decimal | DecimalJsLike | number | string
    quantity_label?: Enumquantity_labelFilter<"quantities"> | $Enums.quantity_label
    recipe_id?: IntFilter<"quantities"> | number
    product_id?: IntFilter<"quantities"> | number
    recipe?: XOR<RecipesRelationFilter, recipesWhereInput>
    product?: XOR<ProductsRelationFilter, productsWhereInput>
  }

  export type quantitiesOrderByWithRelationInput = {
    quantity_id?: SortOrder
    quantity_number?: SortOrder
    quantity_label?: SortOrder
    recipe_id?: SortOrder
    product_id?: SortOrder
    recipe?: recipesOrderByWithRelationInput
    product?: productsOrderByWithRelationInput
  }

  export type quantitiesWhereUniqueInput = Prisma.AtLeast<{
    quantity_id?: number
    AND?: quantitiesWhereInput | quantitiesWhereInput[]
    OR?: quantitiesWhereInput[]
    NOT?: quantitiesWhereInput | quantitiesWhereInput[]
    quantity_number?: DecimalFilter<"quantities"> | Decimal | DecimalJsLike | number | string
    quantity_label?: Enumquantity_labelFilter<"quantities"> | $Enums.quantity_label
    recipe_id?: IntFilter<"quantities"> | number
    product_id?: IntFilter<"quantities"> | number
    recipe?: XOR<RecipesRelationFilter, recipesWhereInput>
    product?: XOR<ProductsRelationFilter, productsWhereInput>
  }, "quantity_id">

  export type quantitiesOrderByWithAggregationInput = {
    quantity_id?: SortOrder
    quantity_number?: SortOrder
    quantity_label?: SortOrder
    recipe_id?: SortOrder
    product_id?: SortOrder
    _count?: quantitiesCountOrderByAggregateInput
    _avg?: quantitiesAvgOrderByAggregateInput
    _max?: quantitiesMaxOrderByAggregateInput
    _min?: quantitiesMinOrderByAggregateInput
    _sum?: quantitiesSumOrderByAggregateInput
  }

  export type quantitiesScalarWhereWithAggregatesInput = {
    AND?: quantitiesScalarWhereWithAggregatesInput | quantitiesScalarWhereWithAggregatesInput[]
    OR?: quantitiesScalarWhereWithAggregatesInput[]
    NOT?: quantitiesScalarWhereWithAggregatesInput | quantitiesScalarWhereWithAggregatesInput[]
    quantity_id?: IntWithAggregatesFilter<"quantities"> | number
    quantity_number?: DecimalWithAggregatesFilter<"quantities"> | Decimal | DecimalJsLike | number | string
    quantity_label?: Enumquantity_labelWithAggregatesFilter<"quantities"> | $Enums.quantity_label
    recipe_id?: IntWithAggregatesFilter<"quantities"> | number
    product_id?: IntWithAggregatesFilter<"quantities"> | number
  }

  export type favoritesWhereInput = {
    AND?: favoritesWhereInput | favoritesWhereInput[]
    OR?: favoritesWhereInput[]
    NOT?: favoritesWhereInput | favoritesWhereInput[]
    favorite_id?: IntFilter<"favorites"> | number
    recipe_id?: IntFilter<"favorites"> | number
    user_id?: IntFilter<"favorites"> | number
    recipe?: XOR<RecipesRelationFilter, recipesWhereInput>
    user?: XOR<UsersRelationFilter, usersWhereInput>
  }

  export type favoritesOrderByWithRelationInput = {
    favorite_id?: SortOrder
    recipe_id?: SortOrder
    user_id?: SortOrder
    recipe?: recipesOrderByWithRelationInput
    user?: usersOrderByWithRelationInput
  }

  export type favoritesWhereUniqueInput = Prisma.AtLeast<{
    favorite_id?: number
    AND?: favoritesWhereInput | favoritesWhereInput[]
    OR?: favoritesWhereInput[]
    NOT?: favoritesWhereInput | favoritesWhereInput[]
    recipe_id?: IntFilter<"favorites"> | number
    user_id?: IntFilter<"favorites"> | number
    recipe?: XOR<RecipesRelationFilter, recipesWhereInput>
    user?: XOR<UsersRelationFilter, usersWhereInput>
  }, "favorite_id">

  export type favoritesOrderByWithAggregationInput = {
    favorite_id?: SortOrder
    recipe_id?: SortOrder
    user_id?: SortOrder
    _count?: favoritesCountOrderByAggregateInput
    _avg?: favoritesAvgOrderByAggregateInput
    _max?: favoritesMaxOrderByAggregateInput
    _min?: favoritesMinOrderByAggregateInput
    _sum?: favoritesSumOrderByAggregateInput
  }

  export type favoritesScalarWhereWithAggregatesInput = {
    AND?: favoritesScalarWhereWithAggregatesInput | favoritesScalarWhereWithAggregatesInput[]
    OR?: favoritesScalarWhereWithAggregatesInput[]
    NOT?: favoritesScalarWhereWithAggregatesInput | favoritesScalarWhereWithAggregatesInput[]
    favorite_id?: IntWithAggregatesFilter<"favorites"> | number
    recipe_id?: IntWithAggregatesFilter<"favorites"> | number
    user_id?: IntWithAggregatesFilter<"favorites"> | number
  }

  export type usersCreateInput = {
    profile?: $Enums.profile
    email: string
    password: string
    date_of_birth?: Date | string | null
    address?: string | null
    zip_code?: string | null
    city?: string | null
    profile_picture?: Buffer | null
    confirmation_link: boolean
    confirmation_date_sent?: Date | string | null
    created_date?: Date | string | null
    last_connection?: Date | string | null
    recipes?: recipesCreateNestedManyWithoutUserInput
    favorites?: favoritesCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateInput = {
    user_id?: number
    profile?: $Enums.profile
    email: string
    password: string
    date_of_birth?: Date | string | null
    address?: string | null
    zip_code?: string | null
    city?: string | null
    profile_picture?: Buffer | null
    confirmation_link: boolean
    confirmation_date_sent?: Date | string | null
    created_date?: Date | string | null
    last_connection?: Date | string | null
    recipes?: recipesUncheckedCreateNestedManyWithoutUserInput
    favorites?: favoritesUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersUpdateInput = {
    profile?: EnumprofileFieldUpdateOperationsInput | $Enums.profile
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    date_of_birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    profile_picture?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    confirmation_link?: BoolFieldUpdateOperationsInput | boolean
    confirmation_date_sent?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_connection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recipes?: recipesUpdateManyWithoutUserNestedInput
    favorites?: favoritesUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    profile?: EnumprofileFieldUpdateOperationsInput | $Enums.profile
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    date_of_birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    profile_picture?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    confirmation_link?: BoolFieldUpdateOperationsInput | boolean
    confirmation_date_sent?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_connection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recipes?: recipesUncheckedUpdateManyWithoutUserNestedInput
    favorites?: favoritesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersCreateManyInput = {
    user_id?: number
    profile?: $Enums.profile
    email: string
    password: string
    date_of_birth?: Date | string | null
    address?: string | null
    zip_code?: string | null
    city?: string | null
    profile_picture?: Buffer | null
    confirmation_link: boolean
    confirmation_date_sent?: Date | string | null
    created_date?: Date | string | null
    last_connection?: Date | string | null
  }

  export type usersUpdateManyMutationInput = {
    profile?: EnumprofileFieldUpdateOperationsInput | $Enums.profile
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    date_of_birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    profile_picture?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    confirmation_link?: BoolFieldUpdateOperationsInput | boolean
    confirmation_date_sent?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_connection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    profile?: EnumprofileFieldUpdateOperationsInput | $Enums.profile
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    date_of_birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    profile_picture?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    confirmation_link?: BoolFieldUpdateOperationsInput | boolean
    confirmation_date_sent?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_connection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type productsCreateInput = {
    name: string
    category: $Enums.category
    picture?: Buffer | null
    description?: string | null
    quantities?: quantitiesCreateNestedManyWithoutProductInput
    products_of_months?: products_of_monthsCreateNestedManyWithoutProductInput
  }

  export type productsUncheckedCreateInput = {
    product_id?: number
    name: string
    category: $Enums.category
    picture?: Buffer | null
    description?: string | null
    quantities?: quantitiesUncheckedCreateNestedManyWithoutProductInput
    products_of_months?: products_of_monthsUncheckedCreateNestedManyWithoutProductInput
  }

  export type productsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumcategoryFieldUpdateOperationsInput | $Enums.category
    picture?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantities?: quantitiesUpdateManyWithoutProductNestedInput
    products_of_months?: products_of_monthsUpdateManyWithoutProductNestedInput
  }

  export type productsUncheckedUpdateInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumcategoryFieldUpdateOperationsInput | $Enums.category
    picture?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantities?: quantitiesUncheckedUpdateManyWithoutProductNestedInput
    products_of_months?: products_of_monthsUncheckedUpdateManyWithoutProductNestedInput
  }

  export type productsCreateManyInput = {
    product_id?: number
    name: string
    category: $Enums.category
    picture?: Buffer | null
    description?: string | null
  }

  export type productsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumcategoryFieldUpdateOperationsInput | $Enums.category
    picture?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type productsUncheckedUpdateManyInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumcategoryFieldUpdateOperationsInput | $Enums.category
    picture?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type products_of_monthsCreateInput = {
    month: $Enums.month
    featured?: boolean
    product: productsCreateNestedOneWithoutProducts_of_monthsInput
  }

  export type products_of_monthsUncheckedCreateInput = {
    product_of_month_id?: number
    month: $Enums.month
    product_id: number
    featured?: boolean
  }

  export type products_of_monthsUpdateInput = {
    month?: EnummonthFieldUpdateOperationsInput | $Enums.month
    featured?: BoolFieldUpdateOperationsInput | boolean
    product?: productsUpdateOneRequiredWithoutProducts_of_monthsNestedInput
  }

  export type products_of_monthsUncheckedUpdateInput = {
    product_of_month_id?: IntFieldUpdateOperationsInput | number
    month?: EnummonthFieldUpdateOperationsInput | $Enums.month
    product_id?: IntFieldUpdateOperationsInput | number
    featured?: BoolFieldUpdateOperationsInput | boolean
  }

  export type products_of_monthsCreateManyInput = {
    product_of_month_id?: number
    month: $Enums.month
    product_id: number
    featured?: boolean
  }

  export type products_of_monthsUpdateManyMutationInput = {
    month?: EnummonthFieldUpdateOperationsInput | $Enums.month
    featured?: BoolFieldUpdateOperationsInput | boolean
  }

  export type products_of_monthsUncheckedUpdateManyInput = {
    product_of_month_id?: IntFieldUpdateOperationsInput | number
    month?: EnummonthFieldUpdateOperationsInput | $Enums.month
    product_id?: IntFieldUpdateOperationsInput | number
    featured?: BoolFieldUpdateOperationsInput | boolean
  }

  export type recipesCreateInput = {
    title: string
    photo?: string | null
    difficulty?: string | null
    duration?: string | null
    number_persons: number
    instructions: string
    utensils?: string | null
    information?: string | null
    user: usersCreateNestedOneWithoutRecipesInput
    quantities?: quantitiesCreateNestedManyWithoutRecipeInput
    favorites?: favoritesCreateNestedManyWithoutRecipeInput
  }

  export type recipesUncheckedCreateInput = {
    recipe_id?: number
    title: string
    photo?: string | null
    difficulty?: string | null
    duration?: string | null
    number_persons: number
    instructions: string
    utensils?: string | null
    information?: string | null
    user_id: number
    quantities?: quantitiesUncheckedCreateNestedManyWithoutRecipeInput
    favorites?: favoritesUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type recipesUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    number_persons?: IntFieldUpdateOperationsInput | number
    instructions?: StringFieldUpdateOperationsInput | string
    utensils?: NullableStringFieldUpdateOperationsInput | string | null
    information?: NullableStringFieldUpdateOperationsInput | string | null
    user?: usersUpdateOneRequiredWithoutRecipesNestedInput
    quantities?: quantitiesUpdateManyWithoutRecipeNestedInput
    favorites?: favoritesUpdateManyWithoutRecipeNestedInput
  }

  export type recipesUncheckedUpdateInput = {
    recipe_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    number_persons?: IntFieldUpdateOperationsInput | number
    instructions?: StringFieldUpdateOperationsInput | string
    utensils?: NullableStringFieldUpdateOperationsInput | string | null
    information?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    quantities?: quantitiesUncheckedUpdateManyWithoutRecipeNestedInput
    favorites?: favoritesUncheckedUpdateManyWithoutRecipeNestedInput
  }

  export type recipesCreateManyInput = {
    recipe_id?: number
    title: string
    photo?: string | null
    difficulty?: string | null
    duration?: string | null
    number_persons: number
    instructions: string
    utensils?: string | null
    information?: string | null
    user_id: number
  }

  export type recipesUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    number_persons?: IntFieldUpdateOperationsInput | number
    instructions?: StringFieldUpdateOperationsInput | string
    utensils?: NullableStringFieldUpdateOperationsInput | string | null
    information?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type recipesUncheckedUpdateManyInput = {
    recipe_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    number_persons?: IntFieldUpdateOperationsInput | number
    instructions?: StringFieldUpdateOperationsInput | string
    utensils?: NullableStringFieldUpdateOperationsInput | string | null
    information?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type quantitiesCreateInput = {
    quantity_number: Decimal | DecimalJsLike | number | string
    quantity_label: $Enums.quantity_label
    recipe: recipesCreateNestedOneWithoutQuantitiesInput
    product: productsCreateNestedOneWithoutQuantitiesInput
  }

  export type quantitiesUncheckedCreateInput = {
    quantity_id?: number
    quantity_number: Decimal | DecimalJsLike | number | string
    quantity_label: $Enums.quantity_label
    recipe_id: number
    product_id: number
  }

  export type quantitiesUpdateInput = {
    quantity_number?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity_label?: Enumquantity_labelFieldUpdateOperationsInput | $Enums.quantity_label
    recipe?: recipesUpdateOneRequiredWithoutQuantitiesNestedInput
    product?: productsUpdateOneRequiredWithoutQuantitiesNestedInput
  }

  export type quantitiesUncheckedUpdateInput = {
    quantity_id?: IntFieldUpdateOperationsInput | number
    quantity_number?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity_label?: Enumquantity_labelFieldUpdateOperationsInput | $Enums.quantity_label
    recipe_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
  }

  export type quantitiesCreateManyInput = {
    quantity_id?: number
    quantity_number: Decimal | DecimalJsLike | number | string
    quantity_label: $Enums.quantity_label
    recipe_id: number
    product_id: number
  }

  export type quantitiesUpdateManyMutationInput = {
    quantity_number?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity_label?: Enumquantity_labelFieldUpdateOperationsInput | $Enums.quantity_label
  }

  export type quantitiesUncheckedUpdateManyInput = {
    quantity_id?: IntFieldUpdateOperationsInput | number
    quantity_number?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity_label?: Enumquantity_labelFieldUpdateOperationsInput | $Enums.quantity_label
    recipe_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
  }

  export type favoritesCreateInput = {
    recipe: recipesCreateNestedOneWithoutFavoritesInput
    user: usersCreateNestedOneWithoutFavoritesInput
  }

  export type favoritesUncheckedCreateInput = {
    favorite_id?: number
    recipe_id: number
    user_id: number
  }

  export type favoritesUpdateInput = {
    recipe?: recipesUpdateOneRequiredWithoutFavoritesNestedInput
    user?: usersUpdateOneRequiredWithoutFavoritesNestedInput
  }

  export type favoritesUncheckedUpdateInput = {
    favorite_id?: IntFieldUpdateOperationsInput | number
    recipe_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type favoritesCreateManyInput = {
    favorite_id?: number
    recipe_id: number
    user_id: number
  }

  export type favoritesUpdateManyMutationInput = {

  }

  export type favoritesUncheckedUpdateManyInput = {
    favorite_id?: IntFieldUpdateOperationsInput | number
    recipe_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumprofileFilter<$PrismaModel = never> = {
    equals?: $Enums.profile | EnumprofileFieldRefInput<$PrismaModel>
    in?: $Enums.profile[] | ListEnumprofileFieldRefInput<$PrismaModel>
    notIn?: $Enums.profile[] | ListEnumprofileFieldRefInput<$PrismaModel>
    not?: NestedEnumprofileFilter<$PrismaModel> | $Enums.profile
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type BytesNullableFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel> | null
    in?: Buffer[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Buffer[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Buffer | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type RecipesListRelationFilter = {
    every?: recipesWhereInput
    some?: recipesWhereInput
    none?: recipesWhereInput
  }

  export type FavoritesListRelationFilter = {
    every?: favoritesWhereInput
    some?: favoritesWhereInput
    none?: favoritesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type recipesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type favoritesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    user_id?: SortOrder
    profile?: SortOrder
    email?: SortOrder
    password?: SortOrder
    date_of_birth?: SortOrder
    address?: SortOrder
    zip_code?: SortOrder
    city?: SortOrder
    profile_picture?: SortOrder
    confirmation_link?: SortOrder
    confirmation_date_sent?: SortOrder
    created_date?: SortOrder
    last_connection?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    user_id?: SortOrder
    profile?: SortOrder
    email?: SortOrder
    password?: SortOrder
    date_of_birth?: SortOrder
    address?: SortOrder
    zip_code?: SortOrder
    city?: SortOrder
    profile_picture?: SortOrder
    confirmation_link?: SortOrder
    confirmation_date_sent?: SortOrder
    created_date?: SortOrder
    last_connection?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    user_id?: SortOrder
    profile?: SortOrder
    email?: SortOrder
    password?: SortOrder
    date_of_birth?: SortOrder
    address?: SortOrder
    zip_code?: SortOrder
    city?: SortOrder
    profile_picture?: SortOrder
    confirmation_link?: SortOrder
    confirmation_date_sent?: SortOrder
    created_date?: SortOrder
    last_connection?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumprofileWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.profile | EnumprofileFieldRefInput<$PrismaModel>
    in?: $Enums.profile[] | ListEnumprofileFieldRefInput<$PrismaModel>
    notIn?: $Enums.profile[] | ListEnumprofileFieldRefInput<$PrismaModel>
    not?: NestedEnumprofileWithAggregatesFilter<$PrismaModel> | $Enums.profile
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumprofileFilter<$PrismaModel>
    _max?: NestedEnumprofileFilter<$PrismaModel>
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type BytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel> | null
    in?: Buffer[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Buffer[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Buffer | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumcategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.category | EnumcategoryFieldRefInput<$PrismaModel>
    in?: $Enums.category[] | ListEnumcategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.category[] | ListEnumcategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumcategoryFilter<$PrismaModel> | $Enums.category
  }

  export type QuantitiesListRelationFilter = {
    every?: quantitiesWhereInput
    some?: quantitiesWhereInput
    none?: quantitiesWhereInput
  }

  export type Products_of_monthsListRelationFilter = {
    every?: products_of_monthsWhereInput
    some?: products_of_monthsWhereInput
    none?: products_of_monthsWhereInput
  }

  export type quantitiesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type products_of_monthsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type productsCountOrderByAggregateInput = {
    product_id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    picture?: SortOrder
    description?: SortOrder
  }

  export type productsAvgOrderByAggregateInput = {
    product_id?: SortOrder
  }

  export type productsMaxOrderByAggregateInput = {
    product_id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    picture?: SortOrder
    description?: SortOrder
  }

  export type productsMinOrderByAggregateInput = {
    product_id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    picture?: SortOrder
    description?: SortOrder
  }

  export type productsSumOrderByAggregateInput = {
    product_id?: SortOrder
  }

  export type EnumcategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.category | EnumcategoryFieldRefInput<$PrismaModel>
    in?: $Enums.category[] | ListEnumcategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.category[] | ListEnumcategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumcategoryWithAggregatesFilter<$PrismaModel> | $Enums.category
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumcategoryFilter<$PrismaModel>
    _max?: NestedEnumcategoryFilter<$PrismaModel>
  }

  export type EnummonthFilter<$PrismaModel = never> = {
    equals?: $Enums.month | EnummonthFieldRefInput<$PrismaModel>
    in?: $Enums.month[] | ListEnummonthFieldRefInput<$PrismaModel>
    notIn?: $Enums.month[] | ListEnummonthFieldRefInput<$PrismaModel>
    not?: NestedEnummonthFilter<$PrismaModel> | $Enums.month
  }

  export type ProductsRelationFilter = {
    is?: productsWhereInput
    isNot?: productsWhereInput
  }

  export type products_of_monthsCountOrderByAggregateInput = {
    product_of_month_id?: SortOrder
    month?: SortOrder
    product_id?: SortOrder
    featured?: SortOrder
  }

  export type products_of_monthsAvgOrderByAggregateInput = {
    product_of_month_id?: SortOrder
    product_id?: SortOrder
  }

  export type products_of_monthsMaxOrderByAggregateInput = {
    product_of_month_id?: SortOrder
    month?: SortOrder
    product_id?: SortOrder
    featured?: SortOrder
  }

  export type products_of_monthsMinOrderByAggregateInput = {
    product_of_month_id?: SortOrder
    month?: SortOrder
    product_id?: SortOrder
    featured?: SortOrder
  }

  export type products_of_monthsSumOrderByAggregateInput = {
    product_of_month_id?: SortOrder
    product_id?: SortOrder
  }

  export type EnummonthWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.month | EnummonthFieldRefInput<$PrismaModel>
    in?: $Enums.month[] | ListEnummonthFieldRefInput<$PrismaModel>
    notIn?: $Enums.month[] | ListEnummonthFieldRefInput<$PrismaModel>
    not?: NestedEnummonthWithAggregatesFilter<$PrismaModel> | $Enums.month
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnummonthFilter<$PrismaModel>
    _max?: NestedEnummonthFilter<$PrismaModel>
  }

  export type UsersRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type recipesCountOrderByAggregateInput = {
    recipe_id?: SortOrder
    title?: SortOrder
    photo?: SortOrder
    difficulty?: SortOrder
    duration?: SortOrder
    number_persons?: SortOrder
    instructions?: SortOrder
    utensils?: SortOrder
    information?: SortOrder
    user_id?: SortOrder
  }

  export type recipesAvgOrderByAggregateInput = {
    recipe_id?: SortOrder
    number_persons?: SortOrder
    user_id?: SortOrder
  }

  export type recipesMaxOrderByAggregateInput = {
    recipe_id?: SortOrder
    title?: SortOrder
    photo?: SortOrder
    difficulty?: SortOrder
    duration?: SortOrder
    number_persons?: SortOrder
    instructions?: SortOrder
    utensils?: SortOrder
    information?: SortOrder
    user_id?: SortOrder
  }

  export type recipesMinOrderByAggregateInput = {
    recipe_id?: SortOrder
    title?: SortOrder
    photo?: SortOrder
    difficulty?: SortOrder
    duration?: SortOrder
    number_persons?: SortOrder
    instructions?: SortOrder
    utensils?: SortOrder
    information?: SortOrder
    user_id?: SortOrder
  }

  export type recipesSumOrderByAggregateInput = {
    recipe_id?: SortOrder
    number_persons?: SortOrder
    user_id?: SortOrder
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

  export type Enumquantity_labelFilter<$PrismaModel = never> = {
    equals?: $Enums.quantity_label | Enumquantity_labelFieldRefInput<$PrismaModel>
    in?: $Enums.quantity_label[] | ListEnumquantity_labelFieldRefInput<$PrismaModel>
    notIn?: $Enums.quantity_label[] | ListEnumquantity_labelFieldRefInput<$PrismaModel>
    not?: NestedEnumquantity_labelFilter<$PrismaModel> | $Enums.quantity_label
  }

  export type RecipesRelationFilter = {
    is?: recipesWhereInput
    isNot?: recipesWhereInput
  }

  export type quantitiesCountOrderByAggregateInput = {
    quantity_id?: SortOrder
    quantity_number?: SortOrder
    quantity_label?: SortOrder
    recipe_id?: SortOrder
    product_id?: SortOrder
  }

  export type quantitiesAvgOrderByAggregateInput = {
    quantity_id?: SortOrder
    quantity_number?: SortOrder
    recipe_id?: SortOrder
    product_id?: SortOrder
  }

  export type quantitiesMaxOrderByAggregateInput = {
    quantity_id?: SortOrder
    quantity_number?: SortOrder
    quantity_label?: SortOrder
    recipe_id?: SortOrder
    product_id?: SortOrder
  }

  export type quantitiesMinOrderByAggregateInput = {
    quantity_id?: SortOrder
    quantity_number?: SortOrder
    quantity_label?: SortOrder
    recipe_id?: SortOrder
    product_id?: SortOrder
  }

  export type quantitiesSumOrderByAggregateInput = {
    quantity_id?: SortOrder
    quantity_number?: SortOrder
    recipe_id?: SortOrder
    product_id?: SortOrder
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

  export type Enumquantity_labelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.quantity_label | Enumquantity_labelFieldRefInput<$PrismaModel>
    in?: $Enums.quantity_label[] | ListEnumquantity_labelFieldRefInput<$PrismaModel>
    notIn?: $Enums.quantity_label[] | ListEnumquantity_labelFieldRefInput<$PrismaModel>
    not?: NestedEnumquantity_labelWithAggregatesFilter<$PrismaModel> | $Enums.quantity_label
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumquantity_labelFilter<$PrismaModel>
    _max?: NestedEnumquantity_labelFilter<$PrismaModel>
  }

  export type favoritesCountOrderByAggregateInput = {
    favorite_id?: SortOrder
    recipe_id?: SortOrder
    user_id?: SortOrder
  }

  export type favoritesAvgOrderByAggregateInput = {
    favorite_id?: SortOrder
    recipe_id?: SortOrder
    user_id?: SortOrder
  }

  export type favoritesMaxOrderByAggregateInput = {
    favorite_id?: SortOrder
    recipe_id?: SortOrder
    user_id?: SortOrder
  }

  export type favoritesMinOrderByAggregateInput = {
    favorite_id?: SortOrder
    recipe_id?: SortOrder
    user_id?: SortOrder
  }

  export type favoritesSumOrderByAggregateInput = {
    favorite_id?: SortOrder
    recipe_id?: SortOrder
    user_id?: SortOrder
  }

  export type recipesCreateNestedManyWithoutUserInput = {
    create?: XOR<recipesCreateWithoutUserInput, recipesUncheckedCreateWithoutUserInput> | recipesCreateWithoutUserInput[] | recipesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: recipesCreateOrConnectWithoutUserInput | recipesCreateOrConnectWithoutUserInput[]
    createMany?: recipesCreateManyUserInputEnvelope
    connect?: recipesWhereUniqueInput | recipesWhereUniqueInput[]
  }

  export type favoritesCreateNestedManyWithoutUserInput = {
    create?: XOR<favoritesCreateWithoutUserInput, favoritesUncheckedCreateWithoutUserInput> | favoritesCreateWithoutUserInput[] | favoritesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: favoritesCreateOrConnectWithoutUserInput | favoritesCreateOrConnectWithoutUserInput[]
    createMany?: favoritesCreateManyUserInputEnvelope
    connect?: favoritesWhereUniqueInput | favoritesWhereUniqueInput[]
  }

  export type recipesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<recipesCreateWithoutUserInput, recipesUncheckedCreateWithoutUserInput> | recipesCreateWithoutUserInput[] | recipesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: recipesCreateOrConnectWithoutUserInput | recipesCreateOrConnectWithoutUserInput[]
    createMany?: recipesCreateManyUserInputEnvelope
    connect?: recipesWhereUniqueInput | recipesWhereUniqueInput[]
  }

  export type favoritesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<favoritesCreateWithoutUserInput, favoritesUncheckedCreateWithoutUserInput> | favoritesCreateWithoutUserInput[] | favoritesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: favoritesCreateOrConnectWithoutUserInput | favoritesCreateOrConnectWithoutUserInput[]
    createMany?: favoritesCreateManyUserInputEnvelope
    connect?: favoritesWhereUniqueInput | favoritesWhereUniqueInput[]
  }

  export type EnumprofileFieldUpdateOperationsInput = {
    set?: $Enums.profile
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableBytesFieldUpdateOperationsInput = {
    set?: Buffer | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type recipesUpdateManyWithoutUserNestedInput = {
    create?: XOR<recipesCreateWithoutUserInput, recipesUncheckedCreateWithoutUserInput> | recipesCreateWithoutUserInput[] | recipesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: recipesCreateOrConnectWithoutUserInput | recipesCreateOrConnectWithoutUserInput[]
    upsert?: recipesUpsertWithWhereUniqueWithoutUserInput | recipesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: recipesCreateManyUserInputEnvelope
    set?: recipesWhereUniqueInput | recipesWhereUniqueInput[]
    disconnect?: recipesWhereUniqueInput | recipesWhereUniqueInput[]
    delete?: recipesWhereUniqueInput | recipesWhereUniqueInput[]
    connect?: recipesWhereUniqueInput | recipesWhereUniqueInput[]
    update?: recipesUpdateWithWhereUniqueWithoutUserInput | recipesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: recipesUpdateManyWithWhereWithoutUserInput | recipesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: recipesScalarWhereInput | recipesScalarWhereInput[]
  }

  export type favoritesUpdateManyWithoutUserNestedInput = {
    create?: XOR<favoritesCreateWithoutUserInput, favoritesUncheckedCreateWithoutUserInput> | favoritesCreateWithoutUserInput[] | favoritesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: favoritesCreateOrConnectWithoutUserInput | favoritesCreateOrConnectWithoutUserInput[]
    upsert?: favoritesUpsertWithWhereUniqueWithoutUserInput | favoritesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: favoritesCreateManyUserInputEnvelope
    set?: favoritesWhereUniqueInput | favoritesWhereUniqueInput[]
    disconnect?: favoritesWhereUniqueInput | favoritesWhereUniqueInput[]
    delete?: favoritesWhereUniqueInput | favoritesWhereUniqueInput[]
    connect?: favoritesWhereUniqueInput | favoritesWhereUniqueInput[]
    update?: favoritesUpdateWithWhereUniqueWithoutUserInput | favoritesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: favoritesUpdateManyWithWhereWithoutUserInput | favoritesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: favoritesScalarWhereInput | favoritesScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type recipesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<recipesCreateWithoutUserInput, recipesUncheckedCreateWithoutUserInput> | recipesCreateWithoutUserInput[] | recipesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: recipesCreateOrConnectWithoutUserInput | recipesCreateOrConnectWithoutUserInput[]
    upsert?: recipesUpsertWithWhereUniqueWithoutUserInput | recipesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: recipesCreateManyUserInputEnvelope
    set?: recipesWhereUniqueInput | recipesWhereUniqueInput[]
    disconnect?: recipesWhereUniqueInput | recipesWhereUniqueInput[]
    delete?: recipesWhereUniqueInput | recipesWhereUniqueInput[]
    connect?: recipesWhereUniqueInput | recipesWhereUniqueInput[]
    update?: recipesUpdateWithWhereUniqueWithoutUserInput | recipesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: recipesUpdateManyWithWhereWithoutUserInput | recipesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: recipesScalarWhereInput | recipesScalarWhereInput[]
  }

  export type favoritesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<favoritesCreateWithoutUserInput, favoritesUncheckedCreateWithoutUserInput> | favoritesCreateWithoutUserInput[] | favoritesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: favoritesCreateOrConnectWithoutUserInput | favoritesCreateOrConnectWithoutUserInput[]
    upsert?: favoritesUpsertWithWhereUniqueWithoutUserInput | favoritesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: favoritesCreateManyUserInputEnvelope
    set?: favoritesWhereUniqueInput | favoritesWhereUniqueInput[]
    disconnect?: favoritesWhereUniqueInput | favoritesWhereUniqueInput[]
    delete?: favoritesWhereUniqueInput | favoritesWhereUniqueInput[]
    connect?: favoritesWhereUniqueInput | favoritesWhereUniqueInput[]
    update?: favoritesUpdateWithWhereUniqueWithoutUserInput | favoritesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: favoritesUpdateManyWithWhereWithoutUserInput | favoritesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: favoritesScalarWhereInput | favoritesScalarWhereInput[]
  }

  export type quantitiesCreateNestedManyWithoutProductInput = {
    create?: XOR<quantitiesCreateWithoutProductInput, quantitiesUncheckedCreateWithoutProductInput> | quantitiesCreateWithoutProductInput[] | quantitiesUncheckedCreateWithoutProductInput[]
    connectOrCreate?: quantitiesCreateOrConnectWithoutProductInput | quantitiesCreateOrConnectWithoutProductInput[]
    createMany?: quantitiesCreateManyProductInputEnvelope
    connect?: quantitiesWhereUniqueInput | quantitiesWhereUniqueInput[]
  }

  export type products_of_monthsCreateNestedManyWithoutProductInput = {
    create?: XOR<products_of_monthsCreateWithoutProductInput, products_of_monthsUncheckedCreateWithoutProductInput> | products_of_monthsCreateWithoutProductInput[] | products_of_monthsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: products_of_monthsCreateOrConnectWithoutProductInput | products_of_monthsCreateOrConnectWithoutProductInput[]
    createMany?: products_of_monthsCreateManyProductInputEnvelope
    connect?: products_of_monthsWhereUniqueInput | products_of_monthsWhereUniqueInput[]
  }

  export type quantitiesUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<quantitiesCreateWithoutProductInput, quantitiesUncheckedCreateWithoutProductInput> | quantitiesCreateWithoutProductInput[] | quantitiesUncheckedCreateWithoutProductInput[]
    connectOrCreate?: quantitiesCreateOrConnectWithoutProductInput | quantitiesCreateOrConnectWithoutProductInput[]
    createMany?: quantitiesCreateManyProductInputEnvelope
    connect?: quantitiesWhereUniqueInput | quantitiesWhereUniqueInput[]
  }

  export type products_of_monthsUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<products_of_monthsCreateWithoutProductInput, products_of_monthsUncheckedCreateWithoutProductInput> | products_of_monthsCreateWithoutProductInput[] | products_of_monthsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: products_of_monthsCreateOrConnectWithoutProductInput | products_of_monthsCreateOrConnectWithoutProductInput[]
    createMany?: products_of_monthsCreateManyProductInputEnvelope
    connect?: products_of_monthsWhereUniqueInput | products_of_monthsWhereUniqueInput[]
  }

  export type EnumcategoryFieldUpdateOperationsInput = {
    set?: $Enums.category
  }

  export type quantitiesUpdateManyWithoutProductNestedInput = {
    create?: XOR<quantitiesCreateWithoutProductInput, quantitiesUncheckedCreateWithoutProductInput> | quantitiesCreateWithoutProductInput[] | quantitiesUncheckedCreateWithoutProductInput[]
    connectOrCreate?: quantitiesCreateOrConnectWithoutProductInput | quantitiesCreateOrConnectWithoutProductInput[]
    upsert?: quantitiesUpsertWithWhereUniqueWithoutProductInput | quantitiesUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: quantitiesCreateManyProductInputEnvelope
    set?: quantitiesWhereUniqueInput | quantitiesWhereUniqueInput[]
    disconnect?: quantitiesWhereUniqueInput | quantitiesWhereUniqueInput[]
    delete?: quantitiesWhereUniqueInput | quantitiesWhereUniqueInput[]
    connect?: quantitiesWhereUniqueInput | quantitiesWhereUniqueInput[]
    update?: quantitiesUpdateWithWhereUniqueWithoutProductInput | quantitiesUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: quantitiesUpdateManyWithWhereWithoutProductInput | quantitiesUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: quantitiesScalarWhereInput | quantitiesScalarWhereInput[]
  }

  export type products_of_monthsUpdateManyWithoutProductNestedInput = {
    create?: XOR<products_of_monthsCreateWithoutProductInput, products_of_monthsUncheckedCreateWithoutProductInput> | products_of_monthsCreateWithoutProductInput[] | products_of_monthsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: products_of_monthsCreateOrConnectWithoutProductInput | products_of_monthsCreateOrConnectWithoutProductInput[]
    upsert?: products_of_monthsUpsertWithWhereUniqueWithoutProductInput | products_of_monthsUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: products_of_monthsCreateManyProductInputEnvelope
    set?: products_of_monthsWhereUniqueInput | products_of_monthsWhereUniqueInput[]
    disconnect?: products_of_monthsWhereUniqueInput | products_of_monthsWhereUniqueInput[]
    delete?: products_of_monthsWhereUniqueInput | products_of_monthsWhereUniqueInput[]
    connect?: products_of_monthsWhereUniqueInput | products_of_monthsWhereUniqueInput[]
    update?: products_of_monthsUpdateWithWhereUniqueWithoutProductInput | products_of_monthsUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: products_of_monthsUpdateManyWithWhereWithoutProductInput | products_of_monthsUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: products_of_monthsScalarWhereInput | products_of_monthsScalarWhereInput[]
  }

  export type quantitiesUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<quantitiesCreateWithoutProductInput, quantitiesUncheckedCreateWithoutProductInput> | quantitiesCreateWithoutProductInput[] | quantitiesUncheckedCreateWithoutProductInput[]
    connectOrCreate?: quantitiesCreateOrConnectWithoutProductInput | quantitiesCreateOrConnectWithoutProductInput[]
    upsert?: quantitiesUpsertWithWhereUniqueWithoutProductInput | quantitiesUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: quantitiesCreateManyProductInputEnvelope
    set?: quantitiesWhereUniqueInput | quantitiesWhereUniqueInput[]
    disconnect?: quantitiesWhereUniqueInput | quantitiesWhereUniqueInput[]
    delete?: quantitiesWhereUniqueInput | quantitiesWhereUniqueInput[]
    connect?: quantitiesWhereUniqueInput | quantitiesWhereUniqueInput[]
    update?: quantitiesUpdateWithWhereUniqueWithoutProductInput | quantitiesUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: quantitiesUpdateManyWithWhereWithoutProductInput | quantitiesUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: quantitiesScalarWhereInput | quantitiesScalarWhereInput[]
  }

  export type products_of_monthsUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<products_of_monthsCreateWithoutProductInput, products_of_monthsUncheckedCreateWithoutProductInput> | products_of_monthsCreateWithoutProductInput[] | products_of_monthsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: products_of_monthsCreateOrConnectWithoutProductInput | products_of_monthsCreateOrConnectWithoutProductInput[]
    upsert?: products_of_monthsUpsertWithWhereUniqueWithoutProductInput | products_of_monthsUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: products_of_monthsCreateManyProductInputEnvelope
    set?: products_of_monthsWhereUniqueInput | products_of_monthsWhereUniqueInput[]
    disconnect?: products_of_monthsWhereUniqueInput | products_of_monthsWhereUniqueInput[]
    delete?: products_of_monthsWhereUniqueInput | products_of_monthsWhereUniqueInput[]
    connect?: products_of_monthsWhereUniqueInput | products_of_monthsWhereUniqueInput[]
    update?: products_of_monthsUpdateWithWhereUniqueWithoutProductInput | products_of_monthsUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: products_of_monthsUpdateManyWithWhereWithoutProductInput | products_of_monthsUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: products_of_monthsScalarWhereInput | products_of_monthsScalarWhereInput[]
  }

  export type productsCreateNestedOneWithoutProducts_of_monthsInput = {
    create?: XOR<productsCreateWithoutProducts_of_monthsInput, productsUncheckedCreateWithoutProducts_of_monthsInput>
    connectOrCreate?: productsCreateOrConnectWithoutProducts_of_monthsInput
    connect?: productsWhereUniqueInput
  }

  export type EnummonthFieldUpdateOperationsInput = {
    set?: $Enums.month
  }

  export type productsUpdateOneRequiredWithoutProducts_of_monthsNestedInput = {
    create?: XOR<productsCreateWithoutProducts_of_monthsInput, productsUncheckedCreateWithoutProducts_of_monthsInput>
    connectOrCreate?: productsCreateOrConnectWithoutProducts_of_monthsInput
    upsert?: productsUpsertWithoutProducts_of_monthsInput
    connect?: productsWhereUniqueInput
    update?: XOR<XOR<productsUpdateToOneWithWhereWithoutProducts_of_monthsInput, productsUpdateWithoutProducts_of_monthsInput>, productsUncheckedUpdateWithoutProducts_of_monthsInput>
  }

  export type usersCreateNestedOneWithoutRecipesInput = {
    create?: XOR<usersCreateWithoutRecipesInput, usersUncheckedCreateWithoutRecipesInput>
    connectOrCreate?: usersCreateOrConnectWithoutRecipesInput
    connect?: usersWhereUniqueInput
  }

  export type quantitiesCreateNestedManyWithoutRecipeInput = {
    create?: XOR<quantitiesCreateWithoutRecipeInput, quantitiesUncheckedCreateWithoutRecipeInput> | quantitiesCreateWithoutRecipeInput[] | quantitiesUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: quantitiesCreateOrConnectWithoutRecipeInput | quantitiesCreateOrConnectWithoutRecipeInput[]
    createMany?: quantitiesCreateManyRecipeInputEnvelope
    connect?: quantitiesWhereUniqueInput | quantitiesWhereUniqueInput[]
  }

  export type favoritesCreateNestedManyWithoutRecipeInput = {
    create?: XOR<favoritesCreateWithoutRecipeInput, favoritesUncheckedCreateWithoutRecipeInput> | favoritesCreateWithoutRecipeInput[] | favoritesUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: favoritesCreateOrConnectWithoutRecipeInput | favoritesCreateOrConnectWithoutRecipeInput[]
    createMany?: favoritesCreateManyRecipeInputEnvelope
    connect?: favoritesWhereUniqueInput | favoritesWhereUniqueInput[]
  }

  export type quantitiesUncheckedCreateNestedManyWithoutRecipeInput = {
    create?: XOR<quantitiesCreateWithoutRecipeInput, quantitiesUncheckedCreateWithoutRecipeInput> | quantitiesCreateWithoutRecipeInput[] | quantitiesUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: quantitiesCreateOrConnectWithoutRecipeInput | quantitiesCreateOrConnectWithoutRecipeInput[]
    createMany?: quantitiesCreateManyRecipeInputEnvelope
    connect?: quantitiesWhereUniqueInput | quantitiesWhereUniqueInput[]
  }

  export type favoritesUncheckedCreateNestedManyWithoutRecipeInput = {
    create?: XOR<favoritesCreateWithoutRecipeInput, favoritesUncheckedCreateWithoutRecipeInput> | favoritesCreateWithoutRecipeInput[] | favoritesUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: favoritesCreateOrConnectWithoutRecipeInput | favoritesCreateOrConnectWithoutRecipeInput[]
    createMany?: favoritesCreateManyRecipeInputEnvelope
    connect?: favoritesWhereUniqueInput | favoritesWhereUniqueInput[]
  }

  export type usersUpdateOneRequiredWithoutRecipesNestedInput = {
    create?: XOR<usersCreateWithoutRecipesInput, usersUncheckedCreateWithoutRecipesInput>
    connectOrCreate?: usersCreateOrConnectWithoutRecipesInput
    upsert?: usersUpsertWithoutRecipesInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutRecipesInput, usersUpdateWithoutRecipesInput>, usersUncheckedUpdateWithoutRecipesInput>
  }

  export type quantitiesUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<quantitiesCreateWithoutRecipeInput, quantitiesUncheckedCreateWithoutRecipeInput> | quantitiesCreateWithoutRecipeInput[] | quantitiesUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: quantitiesCreateOrConnectWithoutRecipeInput | quantitiesCreateOrConnectWithoutRecipeInput[]
    upsert?: quantitiesUpsertWithWhereUniqueWithoutRecipeInput | quantitiesUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: quantitiesCreateManyRecipeInputEnvelope
    set?: quantitiesWhereUniqueInput | quantitiesWhereUniqueInput[]
    disconnect?: quantitiesWhereUniqueInput | quantitiesWhereUniqueInput[]
    delete?: quantitiesWhereUniqueInput | quantitiesWhereUniqueInput[]
    connect?: quantitiesWhereUniqueInput | quantitiesWhereUniqueInput[]
    update?: quantitiesUpdateWithWhereUniqueWithoutRecipeInput | quantitiesUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: quantitiesUpdateManyWithWhereWithoutRecipeInput | quantitiesUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: quantitiesScalarWhereInput | quantitiesScalarWhereInput[]
  }

  export type favoritesUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<favoritesCreateWithoutRecipeInput, favoritesUncheckedCreateWithoutRecipeInput> | favoritesCreateWithoutRecipeInput[] | favoritesUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: favoritesCreateOrConnectWithoutRecipeInput | favoritesCreateOrConnectWithoutRecipeInput[]
    upsert?: favoritesUpsertWithWhereUniqueWithoutRecipeInput | favoritesUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: favoritesCreateManyRecipeInputEnvelope
    set?: favoritesWhereUniqueInput | favoritesWhereUniqueInput[]
    disconnect?: favoritesWhereUniqueInput | favoritesWhereUniqueInput[]
    delete?: favoritesWhereUniqueInput | favoritesWhereUniqueInput[]
    connect?: favoritesWhereUniqueInput | favoritesWhereUniqueInput[]
    update?: favoritesUpdateWithWhereUniqueWithoutRecipeInput | favoritesUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: favoritesUpdateManyWithWhereWithoutRecipeInput | favoritesUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: favoritesScalarWhereInput | favoritesScalarWhereInput[]
  }

  export type quantitiesUncheckedUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<quantitiesCreateWithoutRecipeInput, quantitiesUncheckedCreateWithoutRecipeInput> | quantitiesCreateWithoutRecipeInput[] | quantitiesUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: quantitiesCreateOrConnectWithoutRecipeInput | quantitiesCreateOrConnectWithoutRecipeInput[]
    upsert?: quantitiesUpsertWithWhereUniqueWithoutRecipeInput | quantitiesUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: quantitiesCreateManyRecipeInputEnvelope
    set?: quantitiesWhereUniqueInput | quantitiesWhereUniqueInput[]
    disconnect?: quantitiesWhereUniqueInput | quantitiesWhereUniqueInput[]
    delete?: quantitiesWhereUniqueInput | quantitiesWhereUniqueInput[]
    connect?: quantitiesWhereUniqueInput | quantitiesWhereUniqueInput[]
    update?: quantitiesUpdateWithWhereUniqueWithoutRecipeInput | quantitiesUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: quantitiesUpdateManyWithWhereWithoutRecipeInput | quantitiesUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: quantitiesScalarWhereInput | quantitiesScalarWhereInput[]
  }

  export type favoritesUncheckedUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<favoritesCreateWithoutRecipeInput, favoritesUncheckedCreateWithoutRecipeInput> | favoritesCreateWithoutRecipeInput[] | favoritesUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: favoritesCreateOrConnectWithoutRecipeInput | favoritesCreateOrConnectWithoutRecipeInput[]
    upsert?: favoritesUpsertWithWhereUniqueWithoutRecipeInput | favoritesUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: favoritesCreateManyRecipeInputEnvelope
    set?: favoritesWhereUniqueInput | favoritesWhereUniqueInput[]
    disconnect?: favoritesWhereUniqueInput | favoritesWhereUniqueInput[]
    delete?: favoritesWhereUniqueInput | favoritesWhereUniqueInput[]
    connect?: favoritesWhereUniqueInput | favoritesWhereUniqueInput[]
    update?: favoritesUpdateWithWhereUniqueWithoutRecipeInput | favoritesUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: favoritesUpdateManyWithWhereWithoutRecipeInput | favoritesUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: favoritesScalarWhereInput | favoritesScalarWhereInput[]
  }

  export type recipesCreateNestedOneWithoutQuantitiesInput = {
    create?: XOR<recipesCreateWithoutQuantitiesInput, recipesUncheckedCreateWithoutQuantitiesInput>
    connectOrCreate?: recipesCreateOrConnectWithoutQuantitiesInput
    connect?: recipesWhereUniqueInput
  }

  export type productsCreateNestedOneWithoutQuantitiesInput = {
    create?: XOR<productsCreateWithoutQuantitiesInput, productsUncheckedCreateWithoutQuantitiesInput>
    connectOrCreate?: productsCreateOrConnectWithoutQuantitiesInput
    connect?: productsWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type Enumquantity_labelFieldUpdateOperationsInput = {
    set?: $Enums.quantity_label
  }

  export type recipesUpdateOneRequiredWithoutQuantitiesNestedInput = {
    create?: XOR<recipesCreateWithoutQuantitiesInput, recipesUncheckedCreateWithoutQuantitiesInput>
    connectOrCreate?: recipesCreateOrConnectWithoutQuantitiesInput
    upsert?: recipesUpsertWithoutQuantitiesInput
    connect?: recipesWhereUniqueInput
    update?: XOR<XOR<recipesUpdateToOneWithWhereWithoutQuantitiesInput, recipesUpdateWithoutQuantitiesInput>, recipesUncheckedUpdateWithoutQuantitiesInput>
  }

  export type productsUpdateOneRequiredWithoutQuantitiesNestedInput = {
    create?: XOR<productsCreateWithoutQuantitiesInput, productsUncheckedCreateWithoutQuantitiesInput>
    connectOrCreate?: productsCreateOrConnectWithoutQuantitiesInput
    upsert?: productsUpsertWithoutQuantitiesInput
    connect?: productsWhereUniqueInput
    update?: XOR<XOR<productsUpdateToOneWithWhereWithoutQuantitiesInput, productsUpdateWithoutQuantitiesInput>, productsUncheckedUpdateWithoutQuantitiesInput>
  }

  export type recipesCreateNestedOneWithoutFavoritesInput = {
    create?: XOR<recipesCreateWithoutFavoritesInput, recipesUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: recipesCreateOrConnectWithoutFavoritesInput
    connect?: recipesWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutFavoritesInput = {
    create?: XOR<usersCreateWithoutFavoritesInput, usersUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: usersCreateOrConnectWithoutFavoritesInput
    connect?: usersWhereUniqueInput
  }

  export type recipesUpdateOneRequiredWithoutFavoritesNestedInput = {
    create?: XOR<recipesCreateWithoutFavoritesInput, recipesUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: recipesCreateOrConnectWithoutFavoritesInput
    upsert?: recipesUpsertWithoutFavoritesInput
    connect?: recipesWhereUniqueInput
    update?: XOR<XOR<recipesUpdateToOneWithWhereWithoutFavoritesInput, recipesUpdateWithoutFavoritesInput>, recipesUncheckedUpdateWithoutFavoritesInput>
  }

  export type usersUpdateOneRequiredWithoutFavoritesNestedInput = {
    create?: XOR<usersCreateWithoutFavoritesInput, usersUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: usersCreateOrConnectWithoutFavoritesInput
    upsert?: usersUpsertWithoutFavoritesInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutFavoritesInput, usersUpdateWithoutFavoritesInput>, usersUncheckedUpdateWithoutFavoritesInput>
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

  export type NestedEnumprofileFilter<$PrismaModel = never> = {
    equals?: $Enums.profile | EnumprofileFieldRefInput<$PrismaModel>
    in?: $Enums.profile[] | ListEnumprofileFieldRefInput<$PrismaModel>
    notIn?: $Enums.profile[] | ListEnumprofileFieldRefInput<$PrismaModel>
    not?: NestedEnumprofileFilter<$PrismaModel> | $Enums.profile
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedBytesNullableFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel> | null
    in?: Buffer[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Buffer[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Buffer | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumprofileWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.profile | EnumprofileFieldRefInput<$PrismaModel>
    in?: $Enums.profile[] | ListEnumprofileFieldRefInput<$PrismaModel>
    notIn?: $Enums.profile[] | ListEnumprofileFieldRefInput<$PrismaModel>
    not?: NestedEnumprofileWithAggregatesFilter<$PrismaModel> | $Enums.profile
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumprofileFilter<$PrismaModel>
    _max?: NestedEnumprofileFilter<$PrismaModel>
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type NestedBytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel> | null
    in?: Buffer[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Buffer[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Buffer | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumcategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.category | EnumcategoryFieldRefInput<$PrismaModel>
    in?: $Enums.category[] | ListEnumcategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.category[] | ListEnumcategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumcategoryFilter<$PrismaModel> | $Enums.category
  }

  export type NestedEnumcategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.category | EnumcategoryFieldRefInput<$PrismaModel>
    in?: $Enums.category[] | ListEnumcategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.category[] | ListEnumcategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumcategoryWithAggregatesFilter<$PrismaModel> | $Enums.category
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumcategoryFilter<$PrismaModel>
    _max?: NestedEnumcategoryFilter<$PrismaModel>
  }

  export type NestedEnummonthFilter<$PrismaModel = never> = {
    equals?: $Enums.month | EnummonthFieldRefInput<$PrismaModel>
    in?: $Enums.month[] | ListEnummonthFieldRefInput<$PrismaModel>
    notIn?: $Enums.month[] | ListEnummonthFieldRefInput<$PrismaModel>
    not?: NestedEnummonthFilter<$PrismaModel> | $Enums.month
  }

  export type NestedEnummonthWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.month | EnummonthFieldRefInput<$PrismaModel>
    in?: $Enums.month[] | ListEnummonthFieldRefInput<$PrismaModel>
    notIn?: $Enums.month[] | ListEnummonthFieldRefInput<$PrismaModel>
    not?: NestedEnummonthWithAggregatesFilter<$PrismaModel> | $Enums.month
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnummonthFilter<$PrismaModel>
    _max?: NestedEnummonthFilter<$PrismaModel>
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

  export type NestedEnumquantity_labelFilter<$PrismaModel = never> = {
    equals?: $Enums.quantity_label | Enumquantity_labelFieldRefInput<$PrismaModel>
    in?: $Enums.quantity_label[] | ListEnumquantity_labelFieldRefInput<$PrismaModel>
    notIn?: $Enums.quantity_label[] | ListEnumquantity_labelFieldRefInput<$PrismaModel>
    not?: NestedEnumquantity_labelFilter<$PrismaModel> | $Enums.quantity_label
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

  export type NestedEnumquantity_labelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.quantity_label | Enumquantity_labelFieldRefInput<$PrismaModel>
    in?: $Enums.quantity_label[] | ListEnumquantity_labelFieldRefInput<$PrismaModel>
    notIn?: $Enums.quantity_label[] | ListEnumquantity_labelFieldRefInput<$PrismaModel>
    not?: NestedEnumquantity_labelWithAggregatesFilter<$PrismaModel> | $Enums.quantity_label
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumquantity_labelFilter<$PrismaModel>
    _max?: NestedEnumquantity_labelFilter<$PrismaModel>
  }

  export type recipesCreateWithoutUserInput = {
    title: string
    photo?: string | null
    difficulty?: string | null
    duration?: string | null
    number_persons: number
    instructions: string
    utensils?: string | null
    information?: string | null
    quantities?: quantitiesCreateNestedManyWithoutRecipeInput
    favorites?: favoritesCreateNestedManyWithoutRecipeInput
  }

  export type recipesUncheckedCreateWithoutUserInput = {
    recipe_id?: number
    title: string
    photo?: string | null
    difficulty?: string | null
    duration?: string | null
    number_persons: number
    instructions: string
    utensils?: string | null
    information?: string | null
    quantities?: quantitiesUncheckedCreateNestedManyWithoutRecipeInput
    favorites?: favoritesUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type recipesCreateOrConnectWithoutUserInput = {
    where: recipesWhereUniqueInput
    create: XOR<recipesCreateWithoutUserInput, recipesUncheckedCreateWithoutUserInput>
  }

  export type recipesCreateManyUserInputEnvelope = {
    data: recipesCreateManyUserInput | recipesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type favoritesCreateWithoutUserInput = {
    recipe: recipesCreateNestedOneWithoutFavoritesInput
  }

  export type favoritesUncheckedCreateWithoutUserInput = {
    favorite_id?: number
    recipe_id: number
  }

  export type favoritesCreateOrConnectWithoutUserInput = {
    where: favoritesWhereUniqueInput
    create: XOR<favoritesCreateWithoutUserInput, favoritesUncheckedCreateWithoutUserInput>
  }

  export type favoritesCreateManyUserInputEnvelope = {
    data: favoritesCreateManyUserInput | favoritesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type recipesUpsertWithWhereUniqueWithoutUserInput = {
    where: recipesWhereUniqueInput
    update: XOR<recipesUpdateWithoutUserInput, recipesUncheckedUpdateWithoutUserInput>
    create: XOR<recipesCreateWithoutUserInput, recipesUncheckedCreateWithoutUserInput>
  }

  export type recipesUpdateWithWhereUniqueWithoutUserInput = {
    where: recipesWhereUniqueInput
    data: XOR<recipesUpdateWithoutUserInput, recipesUncheckedUpdateWithoutUserInput>
  }

  export type recipesUpdateManyWithWhereWithoutUserInput = {
    where: recipesScalarWhereInput
    data: XOR<recipesUpdateManyMutationInput, recipesUncheckedUpdateManyWithoutUserInput>
  }

  export type recipesScalarWhereInput = {
    AND?: recipesScalarWhereInput | recipesScalarWhereInput[]
    OR?: recipesScalarWhereInput[]
    NOT?: recipesScalarWhereInput | recipesScalarWhereInput[]
    recipe_id?: IntFilter<"recipes"> | number
    title?: StringFilter<"recipes"> | string
    photo?: StringNullableFilter<"recipes"> | string | null
    difficulty?: StringNullableFilter<"recipes"> | string | null
    duration?: StringNullableFilter<"recipes"> | string | null
    number_persons?: IntFilter<"recipes"> | number
    instructions?: StringFilter<"recipes"> | string
    utensils?: StringNullableFilter<"recipes"> | string | null
    information?: StringNullableFilter<"recipes"> | string | null
    user_id?: IntFilter<"recipes"> | number
  }

  export type favoritesUpsertWithWhereUniqueWithoutUserInput = {
    where: favoritesWhereUniqueInput
    update: XOR<favoritesUpdateWithoutUserInput, favoritesUncheckedUpdateWithoutUserInput>
    create: XOR<favoritesCreateWithoutUserInput, favoritesUncheckedCreateWithoutUserInput>
  }

  export type favoritesUpdateWithWhereUniqueWithoutUserInput = {
    where: favoritesWhereUniqueInput
    data: XOR<favoritesUpdateWithoutUserInput, favoritesUncheckedUpdateWithoutUserInput>
  }

  export type favoritesUpdateManyWithWhereWithoutUserInput = {
    where: favoritesScalarWhereInput
    data: XOR<favoritesUpdateManyMutationInput, favoritesUncheckedUpdateManyWithoutUserInput>
  }

  export type favoritesScalarWhereInput = {
    AND?: favoritesScalarWhereInput | favoritesScalarWhereInput[]
    OR?: favoritesScalarWhereInput[]
    NOT?: favoritesScalarWhereInput | favoritesScalarWhereInput[]
    favorite_id?: IntFilter<"favorites"> | number
    recipe_id?: IntFilter<"favorites"> | number
    user_id?: IntFilter<"favorites"> | number
  }

  export type quantitiesCreateWithoutProductInput = {
    quantity_number: Decimal | DecimalJsLike | number | string
    quantity_label: $Enums.quantity_label
    recipe: recipesCreateNestedOneWithoutQuantitiesInput
  }

  export type quantitiesUncheckedCreateWithoutProductInput = {
    quantity_id?: number
    quantity_number: Decimal | DecimalJsLike | number | string
    quantity_label: $Enums.quantity_label
    recipe_id: number
  }

  export type quantitiesCreateOrConnectWithoutProductInput = {
    where: quantitiesWhereUniqueInput
    create: XOR<quantitiesCreateWithoutProductInput, quantitiesUncheckedCreateWithoutProductInput>
  }

  export type quantitiesCreateManyProductInputEnvelope = {
    data: quantitiesCreateManyProductInput | quantitiesCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type products_of_monthsCreateWithoutProductInput = {
    month: $Enums.month
    featured?: boolean
  }

  export type products_of_monthsUncheckedCreateWithoutProductInput = {
    product_of_month_id?: number
    month: $Enums.month
    featured?: boolean
  }

  export type products_of_monthsCreateOrConnectWithoutProductInput = {
    where: products_of_monthsWhereUniqueInput
    create: XOR<products_of_monthsCreateWithoutProductInput, products_of_monthsUncheckedCreateWithoutProductInput>
  }

  export type products_of_monthsCreateManyProductInputEnvelope = {
    data: products_of_monthsCreateManyProductInput | products_of_monthsCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type quantitiesUpsertWithWhereUniqueWithoutProductInput = {
    where: quantitiesWhereUniqueInput
    update: XOR<quantitiesUpdateWithoutProductInput, quantitiesUncheckedUpdateWithoutProductInput>
    create: XOR<quantitiesCreateWithoutProductInput, quantitiesUncheckedCreateWithoutProductInput>
  }

  export type quantitiesUpdateWithWhereUniqueWithoutProductInput = {
    where: quantitiesWhereUniqueInput
    data: XOR<quantitiesUpdateWithoutProductInput, quantitiesUncheckedUpdateWithoutProductInput>
  }

  export type quantitiesUpdateManyWithWhereWithoutProductInput = {
    where: quantitiesScalarWhereInput
    data: XOR<quantitiesUpdateManyMutationInput, quantitiesUncheckedUpdateManyWithoutProductInput>
  }

  export type quantitiesScalarWhereInput = {
    AND?: quantitiesScalarWhereInput | quantitiesScalarWhereInput[]
    OR?: quantitiesScalarWhereInput[]
    NOT?: quantitiesScalarWhereInput | quantitiesScalarWhereInput[]
    quantity_id?: IntFilter<"quantities"> | number
    quantity_number?: DecimalFilter<"quantities"> | Decimal | DecimalJsLike | number | string
    quantity_label?: Enumquantity_labelFilter<"quantities"> | $Enums.quantity_label
    recipe_id?: IntFilter<"quantities"> | number
    product_id?: IntFilter<"quantities"> | number
  }

  export type products_of_monthsUpsertWithWhereUniqueWithoutProductInput = {
    where: products_of_monthsWhereUniqueInput
    update: XOR<products_of_monthsUpdateWithoutProductInput, products_of_monthsUncheckedUpdateWithoutProductInput>
    create: XOR<products_of_monthsCreateWithoutProductInput, products_of_monthsUncheckedCreateWithoutProductInput>
  }

  export type products_of_monthsUpdateWithWhereUniqueWithoutProductInput = {
    where: products_of_monthsWhereUniqueInput
    data: XOR<products_of_monthsUpdateWithoutProductInput, products_of_monthsUncheckedUpdateWithoutProductInput>
  }

  export type products_of_monthsUpdateManyWithWhereWithoutProductInput = {
    where: products_of_monthsScalarWhereInput
    data: XOR<products_of_monthsUpdateManyMutationInput, products_of_monthsUncheckedUpdateManyWithoutProductInput>
  }

  export type products_of_monthsScalarWhereInput = {
    AND?: products_of_monthsScalarWhereInput | products_of_monthsScalarWhereInput[]
    OR?: products_of_monthsScalarWhereInput[]
    NOT?: products_of_monthsScalarWhereInput | products_of_monthsScalarWhereInput[]
    product_of_month_id?: IntFilter<"products_of_months"> | number
    month?: EnummonthFilter<"products_of_months"> | $Enums.month
    product_id?: IntFilter<"products_of_months"> | number
    featured?: BoolFilter<"products_of_months"> | boolean
  }

  export type productsCreateWithoutProducts_of_monthsInput = {
    name: string
    category: $Enums.category
    picture?: Buffer | null
    description?: string | null
    quantities?: quantitiesCreateNestedManyWithoutProductInput
  }

  export type productsUncheckedCreateWithoutProducts_of_monthsInput = {
    product_id?: number
    name: string
    category: $Enums.category
    picture?: Buffer | null
    description?: string | null
    quantities?: quantitiesUncheckedCreateNestedManyWithoutProductInput
  }

  export type productsCreateOrConnectWithoutProducts_of_monthsInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutProducts_of_monthsInput, productsUncheckedCreateWithoutProducts_of_monthsInput>
  }

  export type productsUpsertWithoutProducts_of_monthsInput = {
    update: XOR<productsUpdateWithoutProducts_of_monthsInput, productsUncheckedUpdateWithoutProducts_of_monthsInput>
    create: XOR<productsCreateWithoutProducts_of_monthsInput, productsUncheckedCreateWithoutProducts_of_monthsInput>
    where?: productsWhereInput
  }

  export type productsUpdateToOneWithWhereWithoutProducts_of_monthsInput = {
    where?: productsWhereInput
    data: XOR<productsUpdateWithoutProducts_of_monthsInput, productsUncheckedUpdateWithoutProducts_of_monthsInput>
  }

  export type productsUpdateWithoutProducts_of_monthsInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumcategoryFieldUpdateOperationsInput | $Enums.category
    picture?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantities?: quantitiesUpdateManyWithoutProductNestedInput
  }

  export type productsUncheckedUpdateWithoutProducts_of_monthsInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumcategoryFieldUpdateOperationsInput | $Enums.category
    picture?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantities?: quantitiesUncheckedUpdateManyWithoutProductNestedInput
  }

  export type usersCreateWithoutRecipesInput = {
    profile?: $Enums.profile
    email: string
    password: string
    date_of_birth?: Date | string | null
    address?: string | null
    zip_code?: string | null
    city?: string | null
    profile_picture?: Buffer | null
    confirmation_link: boolean
    confirmation_date_sent?: Date | string | null
    created_date?: Date | string | null
    last_connection?: Date | string | null
    favorites?: favoritesCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutRecipesInput = {
    user_id?: number
    profile?: $Enums.profile
    email: string
    password: string
    date_of_birth?: Date | string | null
    address?: string | null
    zip_code?: string | null
    city?: string | null
    profile_picture?: Buffer | null
    confirmation_link: boolean
    confirmation_date_sent?: Date | string | null
    created_date?: Date | string | null
    last_connection?: Date | string | null
    favorites?: favoritesUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutRecipesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutRecipesInput, usersUncheckedCreateWithoutRecipesInput>
  }

  export type quantitiesCreateWithoutRecipeInput = {
    quantity_number: Decimal | DecimalJsLike | number | string
    quantity_label: $Enums.quantity_label
    product: productsCreateNestedOneWithoutQuantitiesInput
  }

  export type quantitiesUncheckedCreateWithoutRecipeInput = {
    quantity_id?: number
    quantity_number: Decimal | DecimalJsLike | number | string
    quantity_label: $Enums.quantity_label
    product_id: number
  }

  export type quantitiesCreateOrConnectWithoutRecipeInput = {
    where: quantitiesWhereUniqueInput
    create: XOR<quantitiesCreateWithoutRecipeInput, quantitiesUncheckedCreateWithoutRecipeInput>
  }

  export type quantitiesCreateManyRecipeInputEnvelope = {
    data: quantitiesCreateManyRecipeInput | quantitiesCreateManyRecipeInput[]
    skipDuplicates?: boolean
  }

  export type favoritesCreateWithoutRecipeInput = {
    user: usersCreateNestedOneWithoutFavoritesInput
  }

  export type favoritesUncheckedCreateWithoutRecipeInput = {
    favorite_id?: number
    user_id: number
  }

  export type favoritesCreateOrConnectWithoutRecipeInput = {
    where: favoritesWhereUniqueInput
    create: XOR<favoritesCreateWithoutRecipeInput, favoritesUncheckedCreateWithoutRecipeInput>
  }

  export type favoritesCreateManyRecipeInputEnvelope = {
    data: favoritesCreateManyRecipeInput | favoritesCreateManyRecipeInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithoutRecipesInput = {
    update: XOR<usersUpdateWithoutRecipesInput, usersUncheckedUpdateWithoutRecipesInput>
    create: XOR<usersCreateWithoutRecipesInput, usersUncheckedCreateWithoutRecipesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutRecipesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutRecipesInput, usersUncheckedUpdateWithoutRecipesInput>
  }

  export type usersUpdateWithoutRecipesInput = {
    profile?: EnumprofileFieldUpdateOperationsInput | $Enums.profile
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    date_of_birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    profile_picture?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    confirmation_link?: BoolFieldUpdateOperationsInput | boolean
    confirmation_date_sent?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_connection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    favorites?: favoritesUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutRecipesInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    profile?: EnumprofileFieldUpdateOperationsInput | $Enums.profile
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    date_of_birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    profile_picture?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    confirmation_link?: BoolFieldUpdateOperationsInput | boolean
    confirmation_date_sent?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_connection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    favorites?: favoritesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type quantitiesUpsertWithWhereUniqueWithoutRecipeInput = {
    where: quantitiesWhereUniqueInput
    update: XOR<quantitiesUpdateWithoutRecipeInput, quantitiesUncheckedUpdateWithoutRecipeInput>
    create: XOR<quantitiesCreateWithoutRecipeInput, quantitiesUncheckedCreateWithoutRecipeInput>
  }

  export type quantitiesUpdateWithWhereUniqueWithoutRecipeInput = {
    where: quantitiesWhereUniqueInput
    data: XOR<quantitiesUpdateWithoutRecipeInput, quantitiesUncheckedUpdateWithoutRecipeInput>
  }

  export type quantitiesUpdateManyWithWhereWithoutRecipeInput = {
    where: quantitiesScalarWhereInput
    data: XOR<quantitiesUpdateManyMutationInput, quantitiesUncheckedUpdateManyWithoutRecipeInput>
  }

  export type favoritesUpsertWithWhereUniqueWithoutRecipeInput = {
    where: favoritesWhereUniqueInput
    update: XOR<favoritesUpdateWithoutRecipeInput, favoritesUncheckedUpdateWithoutRecipeInput>
    create: XOR<favoritesCreateWithoutRecipeInput, favoritesUncheckedCreateWithoutRecipeInput>
  }

  export type favoritesUpdateWithWhereUniqueWithoutRecipeInput = {
    where: favoritesWhereUniqueInput
    data: XOR<favoritesUpdateWithoutRecipeInput, favoritesUncheckedUpdateWithoutRecipeInput>
  }

  export type favoritesUpdateManyWithWhereWithoutRecipeInput = {
    where: favoritesScalarWhereInput
    data: XOR<favoritesUpdateManyMutationInput, favoritesUncheckedUpdateManyWithoutRecipeInput>
  }

  export type recipesCreateWithoutQuantitiesInput = {
    title: string
    photo?: string | null
    difficulty?: string | null
    duration?: string | null
    number_persons: number
    instructions: string
    utensils?: string | null
    information?: string | null
    user: usersCreateNestedOneWithoutRecipesInput
    favorites?: favoritesCreateNestedManyWithoutRecipeInput
  }

  export type recipesUncheckedCreateWithoutQuantitiesInput = {
    recipe_id?: number
    title: string
    photo?: string | null
    difficulty?: string | null
    duration?: string | null
    number_persons: number
    instructions: string
    utensils?: string | null
    information?: string | null
    user_id: number
    favorites?: favoritesUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type recipesCreateOrConnectWithoutQuantitiesInput = {
    where: recipesWhereUniqueInput
    create: XOR<recipesCreateWithoutQuantitiesInput, recipesUncheckedCreateWithoutQuantitiesInput>
  }

  export type productsCreateWithoutQuantitiesInput = {
    name: string
    category: $Enums.category
    picture?: Buffer | null
    description?: string | null
    products_of_months?: products_of_monthsCreateNestedManyWithoutProductInput
  }

  export type productsUncheckedCreateWithoutQuantitiesInput = {
    product_id?: number
    name: string
    category: $Enums.category
    picture?: Buffer | null
    description?: string | null
    products_of_months?: products_of_monthsUncheckedCreateNestedManyWithoutProductInput
  }

  export type productsCreateOrConnectWithoutQuantitiesInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutQuantitiesInput, productsUncheckedCreateWithoutQuantitiesInput>
  }

  export type recipesUpsertWithoutQuantitiesInput = {
    update: XOR<recipesUpdateWithoutQuantitiesInput, recipesUncheckedUpdateWithoutQuantitiesInput>
    create: XOR<recipesCreateWithoutQuantitiesInput, recipesUncheckedCreateWithoutQuantitiesInput>
    where?: recipesWhereInput
  }

  export type recipesUpdateToOneWithWhereWithoutQuantitiesInput = {
    where?: recipesWhereInput
    data: XOR<recipesUpdateWithoutQuantitiesInput, recipesUncheckedUpdateWithoutQuantitiesInput>
  }

  export type recipesUpdateWithoutQuantitiesInput = {
    title?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    number_persons?: IntFieldUpdateOperationsInput | number
    instructions?: StringFieldUpdateOperationsInput | string
    utensils?: NullableStringFieldUpdateOperationsInput | string | null
    information?: NullableStringFieldUpdateOperationsInput | string | null
    user?: usersUpdateOneRequiredWithoutRecipesNestedInput
    favorites?: favoritesUpdateManyWithoutRecipeNestedInput
  }

  export type recipesUncheckedUpdateWithoutQuantitiesInput = {
    recipe_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    number_persons?: IntFieldUpdateOperationsInput | number
    instructions?: StringFieldUpdateOperationsInput | string
    utensils?: NullableStringFieldUpdateOperationsInput | string | null
    information?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    favorites?: favoritesUncheckedUpdateManyWithoutRecipeNestedInput
  }

  export type productsUpsertWithoutQuantitiesInput = {
    update: XOR<productsUpdateWithoutQuantitiesInput, productsUncheckedUpdateWithoutQuantitiesInput>
    create: XOR<productsCreateWithoutQuantitiesInput, productsUncheckedCreateWithoutQuantitiesInput>
    where?: productsWhereInput
  }

  export type productsUpdateToOneWithWhereWithoutQuantitiesInput = {
    where?: productsWhereInput
    data: XOR<productsUpdateWithoutQuantitiesInput, productsUncheckedUpdateWithoutQuantitiesInput>
  }

  export type productsUpdateWithoutQuantitiesInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumcategoryFieldUpdateOperationsInput | $Enums.category
    picture?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    products_of_months?: products_of_monthsUpdateManyWithoutProductNestedInput
  }

  export type productsUncheckedUpdateWithoutQuantitiesInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumcategoryFieldUpdateOperationsInput | $Enums.category
    picture?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    products_of_months?: products_of_monthsUncheckedUpdateManyWithoutProductNestedInput
  }

  export type recipesCreateWithoutFavoritesInput = {
    title: string
    photo?: string | null
    difficulty?: string | null
    duration?: string | null
    number_persons: number
    instructions: string
    utensils?: string | null
    information?: string | null
    user: usersCreateNestedOneWithoutRecipesInput
    quantities?: quantitiesCreateNestedManyWithoutRecipeInput
  }

  export type recipesUncheckedCreateWithoutFavoritesInput = {
    recipe_id?: number
    title: string
    photo?: string | null
    difficulty?: string | null
    duration?: string | null
    number_persons: number
    instructions: string
    utensils?: string | null
    information?: string | null
    user_id: number
    quantities?: quantitiesUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type recipesCreateOrConnectWithoutFavoritesInput = {
    where: recipesWhereUniqueInput
    create: XOR<recipesCreateWithoutFavoritesInput, recipesUncheckedCreateWithoutFavoritesInput>
  }

  export type usersCreateWithoutFavoritesInput = {
    profile?: $Enums.profile
    email: string
    password: string
    date_of_birth?: Date | string | null
    address?: string | null
    zip_code?: string | null
    city?: string | null
    profile_picture?: Buffer | null
    confirmation_link: boolean
    confirmation_date_sent?: Date | string | null
    created_date?: Date | string | null
    last_connection?: Date | string | null
    recipes?: recipesCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutFavoritesInput = {
    user_id?: number
    profile?: $Enums.profile
    email: string
    password: string
    date_of_birth?: Date | string | null
    address?: string | null
    zip_code?: string | null
    city?: string | null
    profile_picture?: Buffer | null
    confirmation_link: boolean
    confirmation_date_sent?: Date | string | null
    created_date?: Date | string | null
    last_connection?: Date | string | null
    recipes?: recipesUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutFavoritesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutFavoritesInput, usersUncheckedCreateWithoutFavoritesInput>
  }

  export type recipesUpsertWithoutFavoritesInput = {
    update: XOR<recipesUpdateWithoutFavoritesInput, recipesUncheckedUpdateWithoutFavoritesInput>
    create: XOR<recipesCreateWithoutFavoritesInput, recipesUncheckedCreateWithoutFavoritesInput>
    where?: recipesWhereInput
  }

  export type recipesUpdateToOneWithWhereWithoutFavoritesInput = {
    where?: recipesWhereInput
    data: XOR<recipesUpdateWithoutFavoritesInput, recipesUncheckedUpdateWithoutFavoritesInput>
  }

  export type recipesUpdateWithoutFavoritesInput = {
    title?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    number_persons?: IntFieldUpdateOperationsInput | number
    instructions?: StringFieldUpdateOperationsInput | string
    utensils?: NullableStringFieldUpdateOperationsInput | string | null
    information?: NullableStringFieldUpdateOperationsInput | string | null
    user?: usersUpdateOneRequiredWithoutRecipesNestedInput
    quantities?: quantitiesUpdateManyWithoutRecipeNestedInput
  }

  export type recipesUncheckedUpdateWithoutFavoritesInput = {
    recipe_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    number_persons?: IntFieldUpdateOperationsInput | number
    instructions?: StringFieldUpdateOperationsInput | string
    utensils?: NullableStringFieldUpdateOperationsInput | string | null
    information?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    quantities?: quantitiesUncheckedUpdateManyWithoutRecipeNestedInput
  }

  export type usersUpsertWithoutFavoritesInput = {
    update: XOR<usersUpdateWithoutFavoritesInput, usersUncheckedUpdateWithoutFavoritesInput>
    create: XOR<usersCreateWithoutFavoritesInput, usersUncheckedCreateWithoutFavoritesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutFavoritesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutFavoritesInput, usersUncheckedUpdateWithoutFavoritesInput>
  }

  export type usersUpdateWithoutFavoritesInput = {
    profile?: EnumprofileFieldUpdateOperationsInput | $Enums.profile
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    date_of_birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    profile_picture?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    confirmation_link?: BoolFieldUpdateOperationsInput | boolean
    confirmation_date_sent?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_connection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recipes?: recipesUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutFavoritesInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    profile?: EnumprofileFieldUpdateOperationsInput | $Enums.profile
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    date_of_birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    profile_picture?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    confirmation_link?: BoolFieldUpdateOperationsInput | boolean
    confirmation_date_sent?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    last_connection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    recipes?: recipesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type recipesCreateManyUserInput = {
    recipe_id?: number
    title: string
    photo?: string | null
    difficulty?: string | null
    duration?: string | null
    number_persons: number
    instructions: string
    utensils?: string | null
    information?: string | null
  }

  export type favoritesCreateManyUserInput = {
    favorite_id?: number
    recipe_id: number
  }

  export type recipesUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    number_persons?: IntFieldUpdateOperationsInput | number
    instructions?: StringFieldUpdateOperationsInput | string
    utensils?: NullableStringFieldUpdateOperationsInput | string | null
    information?: NullableStringFieldUpdateOperationsInput | string | null
    quantities?: quantitiesUpdateManyWithoutRecipeNestedInput
    favorites?: favoritesUpdateManyWithoutRecipeNestedInput
  }

  export type recipesUncheckedUpdateWithoutUserInput = {
    recipe_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    number_persons?: IntFieldUpdateOperationsInput | number
    instructions?: StringFieldUpdateOperationsInput | string
    utensils?: NullableStringFieldUpdateOperationsInput | string | null
    information?: NullableStringFieldUpdateOperationsInput | string | null
    quantities?: quantitiesUncheckedUpdateManyWithoutRecipeNestedInput
    favorites?: favoritesUncheckedUpdateManyWithoutRecipeNestedInput
  }

  export type recipesUncheckedUpdateManyWithoutUserInput = {
    recipe_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableStringFieldUpdateOperationsInput | string | null
    number_persons?: IntFieldUpdateOperationsInput | number
    instructions?: StringFieldUpdateOperationsInput | string
    utensils?: NullableStringFieldUpdateOperationsInput | string | null
    information?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type favoritesUpdateWithoutUserInput = {
    recipe?: recipesUpdateOneRequiredWithoutFavoritesNestedInput
  }

  export type favoritesUncheckedUpdateWithoutUserInput = {
    favorite_id?: IntFieldUpdateOperationsInput | number
    recipe_id?: IntFieldUpdateOperationsInput | number
  }

  export type favoritesUncheckedUpdateManyWithoutUserInput = {
    favorite_id?: IntFieldUpdateOperationsInput | number
    recipe_id?: IntFieldUpdateOperationsInput | number
  }

  export type quantitiesCreateManyProductInput = {
    quantity_id?: number
    quantity_number: Decimal | DecimalJsLike | number | string
    quantity_label: $Enums.quantity_label
    recipe_id: number
  }

  export type products_of_monthsCreateManyProductInput = {
    product_of_month_id?: number
    month: $Enums.month
    featured?: boolean
  }

  export type quantitiesUpdateWithoutProductInput = {
    quantity_number?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity_label?: Enumquantity_labelFieldUpdateOperationsInput | $Enums.quantity_label
    recipe?: recipesUpdateOneRequiredWithoutQuantitiesNestedInput
  }

  export type quantitiesUncheckedUpdateWithoutProductInput = {
    quantity_id?: IntFieldUpdateOperationsInput | number
    quantity_number?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity_label?: Enumquantity_labelFieldUpdateOperationsInput | $Enums.quantity_label
    recipe_id?: IntFieldUpdateOperationsInput | number
  }

  export type quantitiesUncheckedUpdateManyWithoutProductInput = {
    quantity_id?: IntFieldUpdateOperationsInput | number
    quantity_number?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity_label?: Enumquantity_labelFieldUpdateOperationsInput | $Enums.quantity_label
    recipe_id?: IntFieldUpdateOperationsInput | number
  }

  export type products_of_monthsUpdateWithoutProductInput = {
    month?: EnummonthFieldUpdateOperationsInput | $Enums.month
    featured?: BoolFieldUpdateOperationsInput | boolean
  }

  export type products_of_monthsUncheckedUpdateWithoutProductInput = {
    product_of_month_id?: IntFieldUpdateOperationsInput | number
    month?: EnummonthFieldUpdateOperationsInput | $Enums.month
    featured?: BoolFieldUpdateOperationsInput | boolean
  }

  export type products_of_monthsUncheckedUpdateManyWithoutProductInput = {
    product_of_month_id?: IntFieldUpdateOperationsInput | number
    month?: EnummonthFieldUpdateOperationsInput | $Enums.month
    featured?: BoolFieldUpdateOperationsInput | boolean
  }

  export type quantitiesCreateManyRecipeInput = {
    quantity_id?: number
    quantity_number: Decimal | DecimalJsLike | number | string
    quantity_label: $Enums.quantity_label
    product_id: number
  }

  export type favoritesCreateManyRecipeInput = {
    favorite_id?: number
    user_id: number
  }

  export type quantitiesUpdateWithoutRecipeInput = {
    quantity_number?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity_label?: Enumquantity_labelFieldUpdateOperationsInput | $Enums.quantity_label
    product?: productsUpdateOneRequiredWithoutQuantitiesNestedInput
  }

  export type quantitiesUncheckedUpdateWithoutRecipeInput = {
    quantity_id?: IntFieldUpdateOperationsInput | number
    quantity_number?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity_label?: Enumquantity_labelFieldUpdateOperationsInput | $Enums.quantity_label
    product_id?: IntFieldUpdateOperationsInput | number
  }

  export type quantitiesUncheckedUpdateManyWithoutRecipeInput = {
    quantity_id?: IntFieldUpdateOperationsInput | number
    quantity_number?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity_label?: Enumquantity_labelFieldUpdateOperationsInput | $Enums.quantity_label
    product_id?: IntFieldUpdateOperationsInput | number
  }

  export type favoritesUpdateWithoutRecipeInput = {
    user?: usersUpdateOneRequiredWithoutFavoritesNestedInput
  }

  export type favoritesUncheckedUpdateWithoutRecipeInput = {
    favorite_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type favoritesUncheckedUpdateManyWithoutRecipeInput = {
    favorite_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UsersCountOutputTypeDefaultArgs instead
     */
    export type UsersCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsersCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductsCountOutputTypeDefaultArgs instead
     */
    export type ProductsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RecipesCountOutputTypeDefaultArgs instead
     */
    export type RecipesCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RecipesCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use usersDefaultArgs instead
     */
    export type usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = usersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use productsDefaultArgs instead
     */
    export type productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = productsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use products_of_monthsDefaultArgs instead
     */
    export type products_of_monthsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = products_of_monthsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use recipesDefaultArgs instead
     */
    export type recipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = recipesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use quantitiesDefaultArgs instead
     */
    export type quantitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = quantitiesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use favoritesDefaultArgs instead
     */
    export type favoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = favoritesDefaultArgs<ExtArgs>

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