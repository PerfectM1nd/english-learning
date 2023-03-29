
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Word
 * 
 */
export type Word = {
  id: number
  text: string
  audioUrl: string
}

/**
 * Model Sentence
 * 
 */
export type Sentence = {
  id: number
  text: string
  wordId: number
}

/**
 * Model Lesson
 * 
 */
export type Lesson = {
  id: number
  level: EnglishLevel
  sequenceNumber: number
  title: string
}

/**
 * Model LessonSentence
 * 
 */
export type LessonSentence = {
  id: number
  lessonId: number
  englishText: string
  russianText: string
  status: LessonSentenceStatus
  commentary: string
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const EnglishLevel: {
  A0: 'A0',
  A1: 'A1',
  A2: 'A2',
  B1: 'B1',
  B2: 'B2',
  C1: 'C1'
};

export type EnglishLevel = (typeof EnglishLevel)[keyof typeof EnglishLevel]


export const LessonSentenceStatus: {
  fluent: 'fluent',
  uncertain: 'uncertain',
  mistaken: 'mistaken',
  error: 'error'
};

export type LessonSentenceStatus = (typeof LessonSentenceStatus)[keyof typeof LessonSentenceStatus]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Words
 * const words = await prisma.word.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Words
   * const words = await prisma.word.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.word`: Exposes CRUD operations for the **Word** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Words
    * const words = await prisma.word.findMany()
    * ```
    */
  get word(): Prisma.WordDelegate<GlobalReject>;

  /**
   * `prisma.sentence`: Exposes CRUD operations for the **Sentence** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sentences
    * const sentences = await prisma.sentence.findMany()
    * ```
    */
  get sentence(): Prisma.SentenceDelegate<GlobalReject>;

  /**
   * `prisma.lesson`: Exposes CRUD operations for the **Lesson** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lessons
    * const lessons = await prisma.lesson.findMany()
    * ```
    */
  get lesson(): Prisma.LessonDelegate<GlobalReject>;

  /**
   * `prisma.lessonSentence`: Exposes CRUD operations for the **LessonSentence** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LessonSentences
    * const lessonSentences = await prisma.lessonSentence.findMany()
    * ```
    */
  get lessonSentence(): Prisma.LessonSentenceDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

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
   * Prisma Client JS version: 4.11.0
   * Query Engine version: 8fde8fef4033376662cad983758335009d522acb
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
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

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
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Word: 'Word',
    Sentence: 'Sentence',
    Lesson: 'Lesson',
    LessonSentence: 'LessonSentence'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
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
    | 'findMany'
    | 'findFirst'
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
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type WordCountOutputType
   */


  export type WordCountOutputType = {
    sentences: number
  }

  export type WordCountOutputTypeSelect = {
    sentences?: boolean
  }

  export type WordCountOutputTypeGetPayload<S extends boolean | null | undefined | WordCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? WordCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (WordCountOutputTypeArgs)
    ? WordCountOutputType 
    : S extends { select: any } & (WordCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof WordCountOutputType ? WordCountOutputType[P] : never
  } 
      : WordCountOutputType




  // Custom InputTypes

  /**
   * WordCountOutputType without action
   */
  export type WordCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the WordCountOutputType
     */
    select?: WordCountOutputTypeSelect | null
  }



  /**
   * Count Type LessonCountOutputType
   */


  export type LessonCountOutputType = {
    lessonSentences: number
  }

  export type LessonCountOutputTypeSelect = {
    lessonSentences?: boolean
  }

  export type LessonCountOutputTypeGetPayload<S extends boolean | null | undefined | LessonCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? LessonCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (LessonCountOutputTypeArgs)
    ? LessonCountOutputType 
    : S extends { select: any } & (LessonCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof LessonCountOutputType ? LessonCountOutputType[P] : never
  } 
      : LessonCountOutputType




  // Custom InputTypes

  /**
   * LessonCountOutputType without action
   */
  export type LessonCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the LessonCountOutputType
     */
    select?: LessonCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Word
   */


  export type AggregateWord = {
    _count: WordCountAggregateOutputType | null
    _avg: WordAvgAggregateOutputType | null
    _sum: WordSumAggregateOutputType | null
    _min: WordMinAggregateOutputType | null
    _max: WordMaxAggregateOutputType | null
  }

  export type WordAvgAggregateOutputType = {
    id: number | null
  }

  export type WordSumAggregateOutputType = {
    id: number | null
  }

  export type WordMinAggregateOutputType = {
    id: number | null
    text: string | null
    audioUrl: string | null
  }

  export type WordMaxAggregateOutputType = {
    id: number | null
    text: string | null
    audioUrl: string | null
  }

  export type WordCountAggregateOutputType = {
    id: number
    text: number
    audioUrl: number
    _all: number
  }


  export type WordAvgAggregateInputType = {
    id?: true
  }

  export type WordSumAggregateInputType = {
    id?: true
  }

  export type WordMinAggregateInputType = {
    id?: true
    text?: true
    audioUrl?: true
  }

  export type WordMaxAggregateInputType = {
    id?: true
    text?: true
    audioUrl?: true
  }

  export type WordCountAggregateInputType = {
    id?: true
    text?: true
    audioUrl?: true
    _all?: true
  }

  export type WordAggregateArgs = {
    /**
     * Filter which Word to aggregate.
     */
    where?: WordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Words to fetch.
     */
    orderBy?: Enumerable<WordOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Words from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Words.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Words
    **/
    _count?: true | WordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WordMaxAggregateInputType
  }

  export type GetWordAggregateType<T extends WordAggregateArgs> = {
        [P in keyof T & keyof AggregateWord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWord[P]>
      : GetScalarType<T[P], AggregateWord[P]>
  }




  export type WordGroupByArgs = {
    where?: WordWhereInput
    orderBy?: Enumerable<WordOrderByWithAggregationInput>
    by: WordScalarFieldEnum[]
    having?: WordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WordCountAggregateInputType | true
    _avg?: WordAvgAggregateInputType
    _sum?: WordSumAggregateInputType
    _min?: WordMinAggregateInputType
    _max?: WordMaxAggregateInputType
  }


  export type WordGroupByOutputType = {
    id: number
    text: string
    audioUrl: string
    _count: WordCountAggregateOutputType | null
    _avg: WordAvgAggregateOutputType | null
    _sum: WordSumAggregateOutputType | null
    _min: WordMinAggregateOutputType | null
    _max: WordMaxAggregateOutputType | null
  }

  type GetWordGroupByPayload<T extends WordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<WordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WordGroupByOutputType[P]>
            : GetScalarType<T[P], WordGroupByOutputType[P]>
        }
      >
    >


  export type WordSelect = {
    id?: boolean
    text?: boolean
    audioUrl?: boolean
    sentences?: boolean | Word$sentencesArgs
    _count?: boolean | WordCountOutputTypeArgs
  }


  export type WordInclude = {
    sentences?: boolean | Word$sentencesArgs
    _count?: boolean | WordCountOutputTypeArgs
  }

  export type WordGetPayload<S extends boolean | null | undefined | WordArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Word :
    S extends undefined ? never :
    S extends { include: any } & (WordArgs | WordFindManyArgs)
    ? Word  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'sentences' ? Array < SentenceGetPayload<S['include'][P]>>  :
        P extends '_count' ? WordCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (WordArgs | WordFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'sentences' ? Array < SentenceGetPayload<S['select'][P]>>  :
        P extends '_count' ? WordCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Word ? Word[P] : never
  } 
      : Word


  type WordCountArgs = 
    Omit<WordFindManyArgs, 'select' | 'include'> & {
      select?: WordCountAggregateInputType | true
    }

  export interface WordDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Word that matches the filter.
     * @param {WordFindUniqueArgs} args - Arguments to find a Word
     * @example
     * // Get one Word
     * const word = await prisma.word.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends WordFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, WordFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Word'> extends True ? Prisma__WordClient<WordGetPayload<T>> : Prisma__WordClient<WordGetPayload<T> | null, null>

    /**
     * Find one Word that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {WordFindUniqueOrThrowArgs} args - Arguments to find a Word
     * @example
     * // Get one Word
     * const word = await prisma.word.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends WordFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, WordFindUniqueOrThrowArgs>
    ): Prisma__WordClient<WordGetPayload<T>>

    /**
     * Find the first Word that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordFindFirstArgs} args - Arguments to find a Word
     * @example
     * // Get one Word
     * const word = await prisma.word.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends WordFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, WordFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Word'> extends True ? Prisma__WordClient<WordGetPayload<T>> : Prisma__WordClient<WordGetPayload<T> | null, null>

    /**
     * Find the first Word that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordFindFirstOrThrowArgs} args - Arguments to find a Word
     * @example
     * // Get one Word
     * const word = await prisma.word.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends WordFindFirstOrThrowArgs>(
      args?: SelectSubset<T, WordFindFirstOrThrowArgs>
    ): Prisma__WordClient<WordGetPayload<T>>

    /**
     * Find zero or more Words that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Words
     * const words = await prisma.word.findMany()
     * 
     * // Get first 10 Words
     * const words = await prisma.word.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const wordWithIdOnly = await prisma.word.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends WordFindManyArgs>(
      args?: SelectSubset<T, WordFindManyArgs>
    ): Prisma.PrismaPromise<Array<WordGetPayload<T>>>

    /**
     * Create a Word.
     * @param {WordCreateArgs} args - Arguments to create a Word.
     * @example
     * // Create one Word
     * const Word = await prisma.word.create({
     *   data: {
     *     // ... data to create a Word
     *   }
     * })
     * 
    **/
    create<T extends WordCreateArgs>(
      args: SelectSubset<T, WordCreateArgs>
    ): Prisma__WordClient<WordGetPayload<T>>

    /**
     * Create many Words.
     *     @param {WordCreateManyArgs} args - Arguments to create many Words.
     *     @example
     *     // Create many Words
     *     const word = await prisma.word.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends WordCreateManyArgs>(
      args?: SelectSubset<T, WordCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Word.
     * @param {WordDeleteArgs} args - Arguments to delete one Word.
     * @example
     * // Delete one Word
     * const Word = await prisma.word.delete({
     *   where: {
     *     // ... filter to delete one Word
     *   }
     * })
     * 
    **/
    delete<T extends WordDeleteArgs>(
      args: SelectSubset<T, WordDeleteArgs>
    ): Prisma__WordClient<WordGetPayload<T>>

    /**
     * Update one Word.
     * @param {WordUpdateArgs} args - Arguments to update one Word.
     * @example
     * // Update one Word
     * const word = await prisma.word.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends WordUpdateArgs>(
      args: SelectSubset<T, WordUpdateArgs>
    ): Prisma__WordClient<WordGetPayload<T>>

    /**
     * Delete zero or more Words.
     * @param {WordDeleteManyArgs} args - Arguments to filter Words to delete.
     * @example
     * // Delete a few Words
     * const { count } = await prisma.word.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends WordDeleteManyArgs>(
      args?: SelectSubset<T, WordDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Words.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Words
     * const word = await prisma.word.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends WordUpdateManyArgs>(
      args: SelectSubset<T, WordUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Word.
     * @param {WordUpsertArgs} args - Arguments to update or create a Word.
     * @example
     * // Update or create a Word
     * const word = await prisma.word.upsert({
     *   create: {
     *     // ... data to create a Word
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Word we want to update
     *   }
     * })
    **/
    upsert<T extends WordUpsertArgs>(
      args: SelectSubset<T, WordUpsertArgs>
    ): Prisma__WordClient<WordGetPayload<T>>

    /**
     * Count the number of Words.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordCountArgs} args - Arguments to filter Words to count.
     * @example
     * // Count the number of Words
     * const count = await prisma.word.count({
     *   where: {
     *     // ... the filter for the Words we want to count
     *   }
     * })
    **/
    count<T extends WordCountArgs>(
      args?: Subset<T, WordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Word.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WordAggregateArgs>(args: Subset<T, WordAggregateArgs>): Prisma.PrismaPromise<GetWordAggregateType<T>>

    /**
     * Group by Word.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordGroupByArgs} args - Group by arguments.
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
      T extends WordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WordGroupByArgs['orderBy'] }
        : { orderBy?: WordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, WordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Word.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__WordClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    sentences<T extends Word$sentencesArgs= {}>(args?: Subset<T, Word$sentencesArgs>): Prisma.PrismaPromise<Array<SentenceGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Word base type for findUnique actions
   */
  export type WordFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WordInclude | null
    /**
     * Filter, which Word to fetch.
     */
    where: WordWhereUniqueInput
  }

  /**
   * Word findUnique
   */
  export interface WordFindUniqueArgs extends WordFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Word findUniqueOrThrow
   */
  export type WordFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WordInclude | null
    /**
     * Filter, which Word to fetch.
     */
    where: WordWhereUniqueInput
  }


  /**
   * Word base type for findFirst actions
   */
  export type WordFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WordInclude | null
    /**
     * Filter, which Word to fetch.
     */
    where?: WordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Words to fetch.
     */
    orderBy?: Enumerable<WordOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Words.
     */
    cursor?: WordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Words from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Words.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Words.
     */
    distinct?: Enumerable<WordScalarFieldEnum>
  }

  /**
   * Word findFirst
   */
  export interface WordFindFirstArgs extends WordFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Word findFirstOrThrow
   */
  export type WordFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WordInclude | null
    /**
     * Filter, which Word to fetch.
     */
    where?: WordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Words to fetch.
     */
    orderBy?: Enumerable<WordOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Words.
     */
    cursor?: WordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Words from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Words.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Words.
     */
    distinct?: Enumerable<WordScalarFieldEnum>
  }


  /**
   * Word findMany
   */
  export type WordFindManyArgs = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WordInclude | null
    /**
     * Filter, which Words to fetch.
     */
    where?: WordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Words to fetch.
     */
    orderBy?: Enumerable<WordOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Words.
     */
    cursor?: WordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Words from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Words.
     */
    skip?: number
    distinct?: Enumerable<WordScalarFieldEnum>
  }


  /**
   * Word create
   */
  export type WordCreateArgs = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WordInclude | null
    /**
     * The data needed to create a Word.
     */
    data: XOR<WordCreateInput, WordUncheckedCreateInput>
  }


  /**
   * Word createMany
   */
  export type WordCreateManyArgs = {
    /**
     * The data used to create many Words.
     */
    data: Enumerable<WordCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Word update
   */
  export type WordUpdateArgs = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WordInclude | null
    /**
     * The data needed to update a Word.
     */
    data: XOR<WordUpdateInput, WordUncheckedUpdateInput>
    /**
     * Choose, which Word to update.
     */
    where: WordWhereUniqueInput
  }


  /**
   * Word updateMany
   */
  export type WordUpdateManyArgs = {
    /**
     * The data used to update Words.
     */
    data: XOR<WordUpdateManyMutationInput, WordUncheckedUpdateManyInput>
    /**
     * Filter which Words to update
     */
    where?: WordWhereInput
  }


  /**
   * Word upsert
   */
  export type WordUpsertArgs = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WordInclude | null
    /**
     * The filter to search for the Word to update in case it exists.
     */
    where: WordWhereUniqueInput
    /**
     * In case the Word found by the `where` argument doesn't exist, create a new Word with this data.
     */
    create: XOR<WordCreateInput, WordUncheckedCreateInput>
    /**
     * In case the Word was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WordUpdateInput, WordUncheckedUpdateInput>
  }


  /**
   * Word delete
   */
  export type WordDeleteArgs = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WordInclude | null
    /**
     * Filter which Word to delete.
     */
    where: WordWhereUniqueInput
  }


  /**
   * Word deleteMany
   */
  export type WordDeleteManyArgs = {
    /**
     * Filter which Words to delete
     */
    where?: WordWhereInput
  }


  /**
   * Word.sentences
   */
  export type Word$sentencesArgs = {
    /**
     * Select specific fields to fetch from the Sentence
     */
    select?: SentenceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SentenceInclude | null
    where?: SentenceWhereInput
    orderBy?: Enumerable<SentenceOrderByWithRelationInput>
    cursor?: SentenceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<SentenceScalarFieldEnum>
  }


  /**
   * Word without action
   */
  export type WordArgs = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WordInclude | null
  }



  /**
   * Model Sentence
   */


  export type AggregateSentence = {
    _count: SentenceCountAggregateOutputType | null
    _avg: SentenceAvgAggregateOutputType | null
    _sum: SentenceSumAggregateOutputType | null
    _min: SentenceMinAggregateOutputType | null
    _max: SentenceMaxAggregateOutputType | null
  }

  export type SentenceAvgAggregateOutputType = {
    id: number | null
    wordId: number | null
  }

  export type SentenceSumAggregateOutputType = {
    id: number | null
    wordId: number | null
  }

  export type SentenceMinAggregateOutputType = {
    id: number | null
    text: string | null
    wordId: number | null
  }

  export type SentenceMaxAggregateOutputType = {
    id: number | null
    text: string | null
    wordId: number | null
  }

  export type SentenceCountAggregateOutputType = {
    id: number
    text: number
    wordId: number
    _all: number
  }


  export type SentenceAvgAggregateInputType = {
    id?: true
    wordId?: true
  }

  export type SentenceSumAggregateInputType = {
    id?: true
    wordId?: true
  }

  export type SentenceMinAggregateInputType = {
    id?: true
    text?: true
    wordId?: true
  }

  export type SentenceMaxAggregateInputType = {
    id?: true
    text?: true
    wordId?: true
  }

  export type SentenceCountAggregateInputType = {
    id?: true
    text?: true
    wordId?: true
    _all?: true
  }

  export type SentenceAggregateArgs = {
    /**
     * Filter which Sentence to aggregate.
     */
    where?: SentenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sentences to fetch.
     */
    orderBy?: Enumerable<SentenceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SentenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sentences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sentences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sentences
    **/
    _count?: true | SentenceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SentenceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SentenceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SentenceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SentenceMaxAggregateInputType
  }

  export type GetSentenceAggregateType<T extends SentenceAggregateArgs> = {
        [P in keyof T & keyof AggregateSentence]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSentence[P]>
      : GetScalarType<T[P], AggregateSentence[P]>
  }




  export type SentenceGroupByArgs = {
    where?: SentenceWhereInput
    orderBy?: Enumerable<SentenceOrderByWithAggregationInput>
    by: SentenceScalarFieldEnum[]
    having?: SentenceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SentenceCountAggregateInputType | true
    _avg?: SentenceAvgAggregateInputType
    _sum?: SentenceSumAggregateInputType
    _min?: SentenceMinAggregateInputType
    _max?: SentenceMaxAggregateInputType
  }


  export type SentenceGroupByOutputType = {
    id: number
    text: string
    wordId: number
    _count: SentenceCountAggregateOutputType | null
    _avg: SentenceAvgAggregateOutputType | null
    _sum: SentenceSumAggregateOutputType | null
    _min: SentenceMinAggregateOutputType | null
    _max: SentenceMaxAggregateOutputType | null
  }

  type GetSentenceGroupByPayload<T extends SentenceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<SentenceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SentenceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SentenceGroupByOutputType[P]>
            : GetScalarType<T[P], SentenceGroupByOutputType[P]>
        }
      >
    >


  export type SentenceSelect = {
    id?: boolean
    text?: boolean
    wordId?: boolean
    word?: boolean | WordArgs
  }


  export type SentenceInclude = {
    word?: boolean | WordArgs
  }

  export type SentenceGetPayload<S extends boolean | null | undefined | SentenceArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Sentence :
    S extends undefined ? never :
    S extends { include: any } & (SentenceArgs | SentenceFindManyArgs)
    ? Sentence  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'word' ? WordGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (SentenceArgs | SentenceFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'word' ? WordGetPayload<S['select'][P]> :  P extends keyof Sentence ? Sentence[P] : never
  } 
      : Sentence


  type SentenceCountArgs = 
    Omit<SentenceFindManyArgs, 'select' | 'include'> & {
      select?: SentenceCountAggregateInputType | true
    }

  export interface SentenceDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Sentence that matches the filter.
     * @param {SentenceFindUniqueArgs} args - Arguments to find a Sentence
     * @example
     * // Get one Sentence
     * const sentence = await prisma.sentence.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SentenceFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SentenceFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Sentence'> extends True ? Prisma__SentenceClient<SentenceGetPayload<T>> : Prisma__SentenceClient<SentenceGetPayload<T> | null, null>

    /**
     * Find one Sentence that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SentenceFindUniqueOrThrowArgs} args - Arguments to find a Sentence
     * @example
     * // Get one Sentence
     * const sentence = await prisma.sentence.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SentenceFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, SentenceFindUniqueOrThrowArgs>
    ): Prisma__SentenceClient<SentenceGetPayload<T>>

    /**
     * Find the first Sentence that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SentenceFindFirstArgs} args - Arguments to find a Sentence
     * @example
     * // Get one Sentence
     * const sentence = await prisma.sentence.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SentenceFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SentenceFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Sentence'> extends True ? Prisma__SentenceClient<SentenceGetPayload<T>> : Prisma__SentenceClient<SentenceGetPayload<T> | null, null>

    /**
     * Find the first Sentence that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SentenceFindFirstOrThrowArgs} args - Arguments to find a Sentence
     * @example
     * // Get one Sentence
     * const sentence = await prisma.sentence.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SentenceFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SentenceFindFirstOrThrowArgs>
    ): Prisma__SentenceClient<SentenceGetPayload<T>>

    /**
     * Find zero or more Sentences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SentenceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sentences
     * const sentences = await prisma.sentence.findMany()
     * 
     * // Get first 10 Sentences
     * const sentences = await prisma.sentence.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sentenceWithIdOnly = await prisma.sentence.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SentenceFindManyArgs>(
      args?: SelectSubset<T, SentenceFindManyArgs>
    ): Prisma.PrismaPromise<Array<SentenceGetPayload<T>>>

    /**
     * Create a Sentence.
     * @param {SentenceCreateArgs} args - Arguments to create a Sentence.
     * @example
     * // Create one Sentence
     * const Sentence = await prisma.sentence.create({
     *   data: {
     *     // ... data to create a Sentence
     *   }
     * })
     * 
    **/
    create<T extends SentenceCreateArgs>(
      args: SelectSubset<T, SentenceCreateArgs>
    ): Prisma__SentenceClient<SentenceGetPayload<T>>

    /**
     * Create many Sentences.
     *     @param {SentenceCreateManyArgs} args - Arguments to create many Sentences.
     *     @example
     *     // Create many Sentences
     *     const sentence = await prisma.sentence.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SentenceCreateManyArgs>(
      args?: SelectSubset<T, SentenceCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sentence.
     * @param {SentenceDeleteArgs} args - Arguments to delete one Sentence.
     * @example
     * // Delete one Sentence
     * const Sentence = await prisma.sentence.delete({
     *   where: {
     *     // ... filter to delete one Sentence
     *   }
     * })
     * 
    **/
    delete<T extends SentenceDeleteArgs>(
      args: SelectSubset<T, SentenceDeleteArgs>
    ): Prisma__SentenceClient<SentenceGetPayload<T>>

    /**
     * Update one Sentence.
     * @param {SentenceUpdateArgs} args - Arguments to update one Sentence.
     * @example
     * // Update one Sentence
     * const sentence = await prisma.sentence.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SentenceUpdateArgs>(
      args: SelectSubset<T, SentenceUpdateArgs>
    ): Prisma__SentenceClient<SentenceGetPayload<T>>

    /**
     * Delete zero or more Sentences.
     * @param {SentenceDeleteManyArgs} args - Arguments to filter Sentences to delete.
     * @example
     * // Delete a few Sentences
     * const { count } = await prisma.sentence.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SentenceDeleteManyArgs>(
      args?: SelectSubset<T, SentenceDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sentences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SentenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sentences
     * const sentence = await prisma.sentence.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SentenceUpdateManyArgs>(
      args: SelectSubset<T, SentenceUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sentence.
     * @param {SentenceUpsertArgs} args - Arguments to update or create a Sentence.
     * @example
     * // Update or create a Sentence
     * const sentence = await prisma.sentence.upsert({
     *   create: {
     *     // ... data to create a Sentence
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sentence we want to update
     *   }
     * })
    **/
    upsert<T extends SentenceUpsertArgs>(
      args: SelectSubset<T, SentenceUpsertArgs>
    ): Prisma__SentenceClient<SentenceGetPayload<T>>

    /**
     * Count the number of Sentences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SentenceCountArgs} args - Arguments to filter Sentences to count.
     * @example
     * // Count the number of Sentences
     * const count = await prisma.sentence.count({
     *   where: {
     *     // ... the filter for the Sentences we want to count
     *   }
     * })
    **/
    count<T extends SentenceCountArgs>(
      args?: Subset<T, SentenceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SentenceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sentence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SentenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SentenceAggregateArgs>(args: Subset<T, SentenceAggregateArgs>): Prisma.PrismaPromise<GetSentenceAggregateType<T>>

    /**
     * Group by Sentence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SentenceGroupByArgs} args - Group by arguments.
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
      T extends SentenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SentenceGroupByArgs['orderBy'] }
        : { orderBy?: SentenceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, SentenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSentenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Sentence.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SentenceClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    word<T extends WordArgs= {}>(args?: Subset<T, WordArgs>): Prisma__WordClient<WordGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Sentence base type for findUnique actions
   */
  export type SentenceFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Sentence
     */
    select?: SentenceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SentenceInclude | null
    /**
     * Filter, which Sentence to fetch.
     */
    where: SentenceWhereUniqueInput
  }

  /**
   * Sentence findUnique
   */
  export interface SentenceFindUniqueArgs extends SentenceFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Sentence findUniqueOrThrow
   */
  export type SentenceFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Sentence
     */
    select?: SentenceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SentenceInclude | null
    /**
     * Filter, which Sentence to fetch.
     */
    where: SentenceWhereUniqueInput
  }


  /**
   * Sentence base type for findFirst actions
   */
  export type SentenceFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Sentence
     */
    select?: SentenceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SentenceInclude | null
    /**
     * Filter, which Sentence to fetch.
     */
    where?: SentenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sentences to fetch.
     */
    orderBy?: Enumerable<SentenceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sentences.
     */
    cursor?: SentenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sentences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sentences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sentences.
     */
    distinct?: Enumerable<SentenceScalarFieldEnum>
  }

  /**
   * Sentence findFirst
   */
  export interface SentenceFindFirstArgs extends SentenceFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Sentence findFirstOrThrow
   */
  export type SentenceFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Sentence
     */
    select?: SentenceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SentenceInclude | null
    /**
     * Filter, which Sentence to fetch.
     */
    where?: SentenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sentences to fetch.
     */
    orderBy?: Enumerable<SentenceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sentences.
     */
    cursor?: SentenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sentences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sentences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sentences.
     */
    distinct?: Enumerable<SentenceScalarFieldEnum>
  }


  /**
   * Sentence findMany
   */
  export type SentenceFindManyArgs = {
    /**
     * Select specific fields to fetch from the Sentence
     */
    select?: SentenceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SentenceInclude | null
    /**
     * Filter, which Sentences to fetch.
     */
    where?: SentenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sentences to fetch.
     */
    orderBy?: Enumerable<SentenceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sentences.
     */
    cursor?: SentenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sentences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sentences.
     */
    skip?: number
    distinct?: Enumerable<SentenceScalarFieldEnum>
  }


  /**
   * Sentence create
   */
  export type SentenceCreateArgs = {
    /**
     * Select specific fields to fetch from the Sentence
     */
    select?: SentenceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SentenceInclude | null
    /**
     * The data needed to create a Sentence.
     */
    data: XOR<SentenceCreateInput, SentenceUncheckedCreateInput>
  }


  /**
   * Sentence createMany
   */
  export type SentenceCreateManyArgs = {
    /**
     * The data used to create many Sentences.
     */
    data: Enumerable<SentenceCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Sentence update
   */
  export type SentenceUpdateArgs = {
    /**
     * Select specific fields to fetch from the Sentence
     */
    select?: SentenceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SentenceInclude | null
    /**
     * The data needed to update a Sentence.
     */
    data: XOR<SentenceUpdateInput, SentenceUncheckedUpdateInput>
    /**
     * Choose, which Sentence to update.
     */
    where: SentenceWhereUniqueInput
  }


  /**
   * Sentence updateMany
   */
  export type SentenceUpdateManyArgs = {
    /**
     * The data used to update Sentences.
     */
    data: XOR<SentenceUpdateManyMutationInput, SentenceUncheckedUpdateManyInput>
    /**
     * Filter which Sentences to update
     */
    where?: SentenceWhereInput
  }


  /**
   * Sentence upsert
   */
  export type SentenceUpsertArgs = {
    /**
     * Select specific fields to fetch from the Sentence
     */
    select?: SentenceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SentenceInclude | null
    /**
     * The filter to search for the Sentence to update in case it exists.
     */
    where: SentenceWhereUniqueInput
    /**
     * In case the Sentence found by the `where` argument doesn't exist, create a new Sentence with this data.
     */
    create: XOR<SentenceCreateInput, SentenceUncheckedCreateInput>
    /**
     * In case the Sentence was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SentenceUpdateInput, SentenceUncheckedUpdateInput>
  }


  /**
   * Sentence delete
   */
  export type SentenceDeleteArgs = {
    /**
     * Select specific fields to fetch from the Sentence
     */
    select?: SentenceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SentenceInclude | null
    /**
     * Filter which Sentence to delete.
     */
    where: SentenceWhereUniqueInput
  }


  /**
   * Sentence deleteMany
   */
  export type SentenceDeleteManyArgs = {
    /**
     * Filter which Sentences to delete
     */
    where?: SentenceWhereInput
  }


  /**
   * Sentence without action
   */
  export type SentenceArgs = {
    /**
     * Select specific fields to fetch from the Sentence
     */
    select?: SentenceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SentenceInclude | null
  }



  /**
   * Model Lesson
   */


  export type AggregateLesson = {
    _count: LessonCountAggregateOutputType | null
    _avg: LessonAvgAggregateOutputType | null
    _sum: LessonSumAggregateOutputType | null
    _min: LessonMinAggregateOutputType | null
    _max: LessonMaxAggregateOutputType | null
  }

  export type LessonAvgAggregateOutputType = {
    id: number | null
    sequenceNumber: number | null
  }

  export type LessonSumAggregateOutputType = {
    id: number | null
    sequenceNumber: number | null
  }

  export type LessonMinAggregateOutputType = {
    id: number | null
    level: EnglishLevel | null
    sequenceNumber: number | null
    title: string | null
  }

  export type LessonMaxAggregateOutputType = {
    id: number | null
    level: EnglishLevel | null
    sequenceNumber: number | null
    title: string | null
  }

  export type LessonCountAggregateOutputType = {
    id: number
    level: number
    sequenceNumber: number
    title: number
    _all: number
  }


  export type LessonAvgAggregateInputType = {
    id?: true
    sequenceNumber?: true
  }

  export type LessonSumAggregateInputType = {
    id?: true
    sequenceNumber?: true
  }

  export type LessonMinAggregateInputType = {
    id?: true
    level?: true
    sequenceNumber?: true
    title?: true
  }

  export type LessonMaxAggregateInputType = {
    id?: true
    level?: true
    sequenceNumber?: true
    title?: true
  }

  export type LessonCountAggregateInputType = {
    id?: true
    level?: true
    sequenceNumber?: true
    title?: true
    _all?: true
  }

  export type LessonAggregateArgs = {
    /**
     * Filter which Lesson to aggregate.
     */
    where?: LessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lessons to fetch.
     */
    orderBy?: Enumerable<LessonOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lessons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lessons
    **/
    _count?: true | LessonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LessonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LessonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LessonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LessonMaxAggregateInputType
  }

  export type GetLessonAggregateType<T extends LessonAggregateArgs> = {
        [P in keyof T & keyof AggregateLesson]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLesson[P]>
      : GetScalarType<T[P], AggregateLesson[P]>
  }




  export type LessonGroupByArgs = {
    where?: LessonWhereInput
    orderBy?: Enumerable<LessonOrderByWithAggregationInput>
    by: LessonScalarFieldEnum[]
    having?: LessonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LessonCountAggregateInputType | true
    _avg?: LessonAvgAggregateInputType
    _sum?: LessonSumAggregateInputType
    _min?: LessonMinAggregateInputType
    _max?: LessonMaxAggregateInputType
  }


  export type LessonGroupByOutputType = {
    id: number
    level: EnglishLevel
    sequenceNumber: number
    title: string
    _count: LessonCountAggregateOutputType | null
    _avg: LessonAvgAggregateOutputType | null
    _sum: LessonSumAggregateOutputType | null
    _min: LessonMinAggregateOutputType | null
    _max: LessonMaxAggregateOutputType | null
  }

  type GetLessonGroupByPayload<T extends LessonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<LessonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LessonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LessonGroupByOutputType[P]>
            : GetScalarType<T[P], LessonGroupByOutputType[P]>
        }
      >
    >


  export type LessonSelect = {
    id?: boolean
    level?: boolean
    sequenceNumber?: boolean
    title?: boolean
    lessonSentences?: boolean | Lesson$lessonSentencesArgs
    _count?: boolean | LessonCountOutputTypeArgs
  }


  export type LessonInclude = {
    lessonSentences?: boolean | Lesson$lessonSentencesArgs
    _count?: boolean | LessonCountOutputTypeArgs
  }

  export type LessonGetPayload<S extends boolean | null | undefined | LessonArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Lesson :
    S extends undefined ? never :
    S extends { include: any } & (LessonArgs | LessonFindManyArgs)
    ? Lesson  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'lessonSentences' ? Array < LessonSentenceGetPayload<S['include'][P]>>  :
        P extends '_count' ? LessonCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (LessonArgs | LessonFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'lessonSentences' ? Array < LessonSentenceGetPayload<S['select'][P]>>  :
        P extends '_count' ? LessonCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Lesson ? Lesson[P] : never
  } 
      : Lesson


  type LessonCountArgs = 
    Omit<LessonFindManyArgs, 'select' | 'include'> & {
      select?: LessonCountAggregateInputType | true
    }

  export interface LessonDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Lesson that matches the filter.
     * @param {LessonFindUniqueArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LessonFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, LessonFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Lesson'> extends True ? Prisma__LessonClient<LessonGetPayload<T>> : Prisma__LessonClient<LessonGetPayload<T> | null, null>

    /**
     * Find one Lesson that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {LessonFindUniqueOrThrowArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LessonFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, LessonFindUniqueOrThrowArgs>
    ): Prisma__LessonClient<LessonGetPayload<T>>

    /**
     * Find the first Lesson that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonFindFirstArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LessonFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, LessonFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Lesson'> extends True ? Prisma__LessonClient<LessonGetPayload<T>> : Prisma__LessonClient<LessonGetPayload<T> | null, null>

    /**
     * Find the first Lesson that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonFindFirstOrThrowArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LessonFindFirstOrThrowArgs>(
      args?: SelectSubset<T, LessonFindFirstOrThrowArgs>
    ): Prisma__LessonClient<LessonGetPayload<T>>

    /**
     * Find zero or more Lessons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lessons
     * const lessons = await prisma.lesson.findMany()
     * 
     * // Get first 10 Lessons
     * const lessons = await prisma.lesson.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lessonWithIdOnly = await prisma.lesson.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LessonFindManyArgs>(
      args?: SelectSubset<T, LessonFindManyArgs>
    ): Prisma.PrismaPromise<Array<LessonGetPayload<T>>>

    /**
     * Create a Lesson.
     * @param {LessonCreateArgs} args - Arguments to create a Lesson.
     * @example
     * // Create one Lesson
     * const Lesson = await prisma.lesson.create({
     *   data: {
     *     // ... data to create a Lesson
     *   }
     * })
     * 
    **/
    create<T extends LessonCreateArgs>(
      args: SelectSubset<T, LessonCreateArgs>
    ): Prisma__LessonClient<LessonGetPayload<T>>

    /**
     * Create many Lessons.
     *     @param {LessonCreateManyArgs} args - Arguments to create many Lessons.
     *     @example
     *     // Create many Lessons
     *     const lesson = await prisma.lesson.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends LessonCreateManyArgs>(
      args?: SelectSubset<T, LessonCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Lesson.
     * @param {LessonDeleteArgs} args - Arguments to delete one Lesson.
     * @example
     * // Delete one Lesson
     * const Lesson = await prisma.lesson.delete({
     *   where: {
     *     // ... filter to delete one Lesson
     *   }
     * })
     * 
    **/
    delete<T extends LessonDeleteArgs>(
      args: SelectSubset<T, LessonDeleteArgs>
    ): Prisma__LessonClient<LessonGetPayload<T>>

    /**
     * Update one Lesson.
     * @param {LessonUpdateArgs} args - Arguments to update one Lesson.
     * @example
     * // Update one Lesson
     * const lesson = await prisma.lesson.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LessonUpdateArgs>(
      args: SelectSubset<T, LessonUpdateArgs>
    ): Prisma__LessonClient<LessonGetPayload<T>>

    /**
     * Delete zero or more Lessons.
     * @param {LessonDeleteManyArgs} args - Arguments to filter Lessons to delete.
     * @example
     * // Delete a few Lessons
     * const { count } = await prisma.lesson.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LessonDeleteManyArgs>(
      args?: SelectSubset<T, LessonDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lessons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lessons
     * const lesson = await prisma.lesson.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LessonUpdateManyArgs>(
      args: SelectSubset<T, LessonUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Lesson.
     * @param {LessonUpsertArgs} args - Arguments to update or create a Lesson.
     * @example
     * // Update or create a Lesson
     * const lesson = await prisma.lesson.upsert({
     *   create: {
     *     // ... data to create a Lesson
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lesson we want to update
     *   }
     * })
    **/
    upsert<T extends LessonUpsertArgs>(
      args: SelectSubset<T, LessonUpsertArgs>
    ): Prisma__LessonClient<LessonGetPayload<T>>

    /**
     * Count the number of Lessons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonCountArgs} args - Arguments to filter Lessons to count.
     * @example
     * // Count the number of Lessons
     * const count = await prisma.lesson.count({
     *   where: {
     *     // ... the filter for the Lessons we want to count
     *   }
     * })
    **/
    count<T extends LessonCountArgs>(
      args?: Subset<T, LessonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LessonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lesson.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LessonAggregateArgs>(args: Subset<T, LessonAggregateArgs>): Prisma.PrismaPromise<GetLessonAggregateType<T>>

    /**
     * Group by Lesson.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonGroupByArgs} args - Group by arguments.
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
      T extends LessonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LessonGroupByArgs['orderBy'] }
        : { orderBy?: LessonGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, LessonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLessonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Lesson.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__LessonClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    lessonSentences<T extends Lesson$lessonSentencesArgs= {}>(args?: Subset<T, Lesson$lessonSentencesArgs>): Prisma.PrismaPromise<Array<LessonSentenceGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Lesson base type for findUnique actions
   */
  export type LessonFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LessonInclude | null
    /**
     * Filter, which Lesson to fetch.
     */
    where: LessonWhereUniqueInput
  }

  /**
   * Lesson findUnique
   */
  export interface LessonFindUniqueArgs extends LessonFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Lesson findUniqueOrThrow
   */
  export type LessonFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LessonInclude | null
    /**
     * Filter, which Lesson to fetch.
     */
    where: LessonWhereUniqueInput
  }


  /**
   * Lesson base type for findFirst actions
   */
  export type LessonFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LessonInclude | null
    /**
     * Filter, which Lesson to fetch.
     */
    where?: LessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lessons to fetch.
     */
    orderBy?: Enumerable<LessonOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lessons.
     */
    cursor?: LessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lessons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lessons.
     */
    distinct?: Enumerable<LessonScalarFieldEnum>
  }

  /**
   * Lesson findFirst
   */
  export interface LessonFindFirstArgs extends LessonFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Lesson findFirstOrThrow
   */
  export type LessonFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LessonInclude | null
    /**
     * Filter, which Lesson to fetch.
     */
    where?: LessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lessons to fetch.
     */
    orderBy?: Enumerable<LessonOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lessons.
     */
    cursor?: LessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lessons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lessons.
     */
    distinct?: Enumerable<LessonScalarFieldEnum>
  }


  /**
   * Lesson findMany
   */
  export type LessonFindManyArgs = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LessonInclude | null
    /**
     * Filter, which Lessons to fetch.
     */
    where?: LessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lessons to fetch.
     */
    orderBy?: Enumerable<LessonOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lessons.
     */
    cursor?: LessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lessons.
     */
    skip?: number
    distinct?: Enumerable<LessonScalarFieldEnum>
  }


  /**
   * Lesson create
   */
  export type LessonCreateArgs = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LessonInclude | null
    /**
     * The data needed to create a Lesson.
     */
    data: XOR<LessonCreateInput, LessonUncheckedCreateInput>
  }


  /**
   * Lesson createMany
   */
  export type LessonCreateManyArgs = {
    /**
     * The data used to create many Lessons.
     */
    data: Enumerable<LessonCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Lesson update
   */
  export type LessonUpdateArgs = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LessonInclude | null
    /**
     * The data needed to update a Lesson.
     */
    data: XOR<LessonUpdateInput, LessonUncheckedUpdateInput>
    /**
     * Choose, which Lesson to update.
     */
    where: LessonWhereUniqueInput
  }


  /**
   * Lesson updateMany
   */
  export type LessonUpdateManyArgs = {
    /**
     * The data used to update Lessons.
     */
    data: XOR<LessonUpdateManyMutationInput, LessonUncheckedUpdateManyInput>
    /**
     * Filter which Lessons to update
     */
    where?: LessonWhereInput
  }


  /**
   * Lesson upsert
   */
  export type LessonUpsertArgs = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LessonInclude | null
    /**
     * The filter to search for the Lesson to update in case it exists.
     */
    where: LessonWhereUniqueInput
    /**
     * In case the Lesson found by the `where` argument doesn't exist, create a new Lesson with this data.
     */
    create: XOR<LessonCreateInput, LessonUncheckedCreateInput>
    /**
     * In case the Lesson was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LessonUpdateInput, LessonUncheckedUpdateInput>
  }


  /**
   * Lesson delete
   */
  export type LessonDeleteArgs = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LessonInclude | null
    /**
     * Filter which Lesson to delete.
     */
    where: LessonWhereUniqueInput
  }


  /**
   * Lesson deleteMany
   */
  export type LessonDeleteManyArgs = {
    /**
     * Filter which Lessons to delete
     */
    where?: LessonWhereInput
  }


  /**
   * Lesson.lessonSentences
   */
  export type Lesson$lessonSentencesArgs = {
    /**
     * Select specific fields to fetch from the LessonSentence
     */
    select?: LessonSentenceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LessonSentenceInclude | null
    where?: LessonSentenceWhereInput
    orderBy?: Enumerable<LessonSentenceOrderByWithRelationInput>
    cursor?: LessonSentenceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<LessonSentenceScalarFieldEnum>
  }


  /**
   * Lesson without action
   */
  export type LessonArgs = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LessonInclude | null
  }



  /**
   * Model LessonSentence
   */


  export type AggregateLessonSentence = {
    _count: LessonSentenceCountAggregateOutputType | null
    _avg: LessonSentenceAvgAggregateOutputType | null
    _sum: LessonSentenceSumAggregateOutputType | null
    _min: LessonSentenceMinAggregateOutputType | null
    _max: LessonSentenceMaxAggregateOutputType | null
  }

  export type LessonSentenceAvgAggregateOutputType = {
    id: number | null
    lessonId: number | null
  }

  export type LessonSentenceSumAggregateOutputType = {
    id: number | null
    lessonId: number | null
  }

  export type LessonSentenceMinAggregateOutputType = {
    id: number | null
    lessonId: number | null
    englishText: string | null
    russianText: string | null
    status: LessonSentenceStatus | null
    commentary: string | null
  }

  export type LessonSentenceMaxAggregateOutputType = {
    id: number | null
    lessonId: number | null
    englishText: string | null
    russianText: string | null
    status: LessonSentenceStatus | null
    commentary: string | null
  }

  export type LessonSentenceCountAggregateOutputType = {
    id: number
    lessonId: number
    englishText: number
    russianText: number
    status: number
    commentary: number
    _all: number
  }


  export type LessonSentenceAvgAggregateInputType = {
    id?: true
    lessonId?: true
  }

  export type LessonSentenceSumAggregateInputType = {
    id?: true
    lessonId?: true
  }

  export type LessonSentenceMinAggregateInputType = {
    id?: true
    lessonId?: true
    englishText?: true
    russianText?: true
    status?: true
    commentary?: true
  }

  export type LessonSentenceMaxAggregateInputType = {
    id?: true
    lessonId?: true
    englishText?: true
    russianText?: true
    status?: true
    commentary?: true
  }

  export type LessonSentenceCountAggregateInputType = {
    id?: true
    lessonId?: true
    englishText?: true
    russianText?: true
    status?: true
    commentary?: true
    _all?: true
  }

  export type LessonSentenceAggregateArgs = {
    /**
     * Filter which LessonSentence to aggregate.
     */
    where?: LessonSentenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LessonSentences to fetch.
     */
    orderBy?: Enumerable<LessonSentenceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LessonSentenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LessonSentences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LessonSentences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LessonSentences
    **/
    _count?: true | LessonSentenceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LessonSentenceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LessonSentenceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LessonSentenceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LessonSentenceMaxAggregateInputType
  }

  export type GetLessonSentenceAggregateType<T extends LessonSentenceAggregateArgs> = {
        [P in keyof T & keyof AggregateLessonSentence]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLessonSentence[P]>
      : GetScalarType<T[P], AggregateLessonSentence[P]>
  }




  export type LessonSentenceGroupByArgs = {
    where?: LessonSentenceWhereInput
    orderBy?: Enumerable<LessonSentenceOrderByWithAggregationInput>
    by: LessonSentenceScalarFieldEnum[]
    having?: LessonSentenceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LessonSentenceCountAggregateInputType | true
    _avg?: LessonSentenceAvgAggregateInputType
    _sum?: LessonSentenceSumAggregateInputType
    _min?: LessonSentenceMinAggregateInputType
    _max?: LessonSentenceMaxAggregateInputType
  }


  export type LessonSentenceGroupByOutputType = {
    id: number
    lessonId: number
    englishText: string
    russianText: string
    status: LessonSentenceStatus
    commentary: string
    _count: LessonSentenceCountAggregateOutputType | null
    _avg: LessonSentenceAvgAggregateOutputType | null
    _sum: LessonSentenceSumAggregateOutputType | null
    _min: LessonSentenceMinAggregateOutputType | null
    _max: LessonSentenceMaxAggregateOutputType | null
  }

  type GetLessonSentenceGroupByPayload<T extends LessonSentenceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<LessonSentenceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LessonSentenceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LessonSentenceGroupByOutputType[P]>
            : GetScalarType<T[P], LessonSentenceGroupByOutputType[P]>
        }
      >
    >


  export type LessonSentenceSelect = {
    id?: boolean
    lessonId?: boolean
    englishText?: boolean
    russianText?: boolean
    status?: boolean
    commentary?: boolean
    lesson?: boolean | LessonArgs
  }


  export type LessonSentenceInclude = {
    lesson?: boolean | LessonArgs
  }

  export type LessonSentenceGetPayload<S extends boolean | null | undefined | LessonSentenceArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? LessonSentence :
    S extends undefined ? never :
    S extends { include: any } & (LessonSentenceArgs | LessonSentenceFindManyArgs)
    ? LessonSentence  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'lesson' ? LessonGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (LessonSentenceArgs | LessonSentenceFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'lesson' ? LessonGetPayload<S['select'][P]> :  P extends keyof LessonSentence ? LessonSentence[P] : never
  } 
      : LessonSentence


  type LessonSentenceCountArgs = 
    Omit<LessonSentenceFindManyArgs, 'select' | 'include'> & {
      select?: LessonSentenceCountAggregateInputType | true
    }

  export interface LessonSentenceDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one LessonSentence that matches the filter.
     * @param {LessonSentenceFindUniqueArgs} args - Arguments to find a LessonSentence
     * @example
     * // Get one LessonSentence
     * const lessonSentence = await prisma.lessonSentence.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LessonSentenceFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, LessonSentenceFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'LessonSentence'> extends True ? Prisma__LessonSentenceClient<LessonSentenceGetPayload<T>> : Prisma__LessonSentenceClient<LessonSentenceGetPayload<T> | null, null>

    /**
     * Find one LessonSentence that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {LessonSentenceFindUniqueOrThrowArgs} args - Arguments to find a LessonSentence
     * @example
     * // Get one LessonSentence
     * const lessonSentence = await prisma.lessonSentence.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LessonSentenceFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, LessonSentenceFindUniqueOrThrowArgs>
    ): Prisma__LessonSentenceClient<LessonSentenceGetPayload<T>>

    /**
     * Find the first LessonSentence that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonSentenceFindFirstArgs} args - Arguments to find a LessonSentence
     * @example
     * // Get one LessonSentence
     * const lessonSentence = await prisma.lessonSentence.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LessonSentenceFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, LessonSentenceFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'LessonSentence'> extends True ? Prisma__LessonSentenceClient<LessonSentenceGetPayload<T>> : Prisma__LessonSentenceClient<LessonSentenceGetPayload<T> | null, null>

    /**
     * Find the first LessonSentence that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonSentenceFindFirstOrThrowArgs} args - Arguments to find a LessonSentence
     * @example
     * // Get one LessonSentence
     * const lessonSentence = await prisma.lessonSentence.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LessonSentenceFindFirstOrThrowArgs>(
      args?: SelectSubset<T, LessonSentenceFindFirstOrThrowArgs>
    ): Prisma__LessonSentenceClient<LessonSentenceGetPayload<T>>

    /**
     * Find zero or more LessonSentences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonSentenceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LessonSentences
     * const lessonSentences = await prisma.lessonSentence.findMany()
     * 
     * // Get first 10 LessonSentences
     * const lessonSentences = await prisma.lessonSentence.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lessonSentenceWithIdOnly = await prisma.lessonSentence.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LessonSentenceFindManyArgs>(
      args?: SelectSubset<T, LessonSentenceFindManyArgs>
    ): Prisma.PrismaPromise<Array<LessonSentenceGetPayload<T>>>

    /**
     * Create a LessonSentence.
     * @param {LessonSentenceCreateArgs} args - Arguments to create a LessonSentence.
     * @example
     * // Create one LessonSentence
     * const LessonSentence = await prisma.lessonSentence.create({
     *   data: {
     *     // ... data to create a LessonSentence
     *   }
     * })
     * 
    **/
    create<T extends LessonSentenceCreateArgs>(
      args: SelectSubset<T, LessonSentenceCreateArgs>
    ): Prisma__LessonSentenceClient<LessonSentenceGetPayload<T>>

    /**
     * Create many LessonSentences.
     *     @param {LessonSentenceCreateManyArgs} args - Arguments to create many LessonSentences.
     *     @example
     *     // Create many LessonSentences
     *     const lessonSentence = await prisma.lessonSentence.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends LessonSentenceCreateManyArgs>(
      args?: SelectSubset<T, LessonSentenceCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a LessonSentence.
     * @param {LessonSentenceDeleteArgs} args - Arguments to delete one LessonSentence.
     * @example
     * // Delete one LessonSentence
     * const LessonSentence = await prisma.lessonSentence.delete({
     *   where: {
     *     // ... filter to delete one LessonSentence
     *   }
     * })
     * 
    **/
    delete<T extends LessonSentenceDeleteArgs>(
      args: SelectSubset<T, LessonSentenceDeleteArgs>
    ): Prisma__LessonSentenceClient<LessonSentenceGetPayload<T>>

    /**
     * Update one LessonSentence.
     * @param {LessonSentenceUpdateArgs} args - Arguments to update one LessonSentence.
     * @example
     * // Update one LessonSentence
     * const lessonSentence = await prisma.lessonSentence.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LessonSentenceUpdateArgs>(
      args: SelectSubset<T, LessonSentenceUpdateArgs>
    ): Prisma__LessonSentenceClient<LessonSentenceGetPayload<T>>

    /**
     * Delete zero or more LessonSentences.
     * @param {LessonSentenceDeleteManyArgs} args - Arguments to filter LessonSentences to delete.
     * @example
     * // Delete a few LessonSentences
     * const { count } = await prisma.lessonSentence.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LessonSentenceDeleteManyArgs>(
      args?: SelectSubset<T, LessonSentenceDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LessonSentences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonSentenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LessonSentences
     * const lessonSentence = await prisma.lessonSentence.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LessonSentenceUpdateManyArgs>(
      args: SelectSubset<T, LessonSentenceUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LessonSentence.
     * @param {LessonSentenceUpsertArgs} args - Arguments to update or create a LessonSentence.
     * @example
     * // Update or create a LessonSentence
     * const lessonSentence = await prisma.lessonSentence.upsert({
     *   create: {
     *     // ... data to create a LessonSentence
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LessonSentence we want to update
     *   }
     * })
    **/
    upsert<T extends LessonSentenceUpsertArgs>(
      args: SelectSubset<T, LessonSentenceUpsertArgs>
    ): Prisma__LessonSentenceClient<LessonSentenceGetPayload<T>>

    /**
     * Count the number of LessonSentences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonSentenceCountArgs} args - Arguments to filter LessonSentences to count.
     * @example
     * // Count the number of LessonSentences
     * const count = await prisma.lessonSentence.count({
     *   where: {
     *     // ... the filter for the LessonSentences we want to count
     *   }
     * })
    **/
    count<T extends LessonSentenceCountArgs>(
      args?: Subset<T, LessonSentenceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LessonSentenceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LessonSentence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonSentenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LessonSentenceAggregateArgs>(args: Subset<T, LessonSentenceAggregateArgs>): Prisma.PrismaPromise<GetLessonSentenceAggregateType<T>>

    /**
     * Group by LessonSentence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonSentenceGroupByArgs} args - Group by arguments.
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
      T extends LessonSentenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LessonSentenceGroupByArgs['orderBy'] }
        : { orderBy?: LessonSentenceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, LessonSentenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLessonSentenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for LessonSentence.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__LessonSentenceClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    lesson<T extends LessonArgs= {}>(args?: Subset<T, LessonArgs>): Prisma__LessonClient<LessonGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * LessonSentence base type for findUnique actions
   */
  export type LessonSentenceFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the LessonSentence
     */
    select?: LessonSentenceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LessonSentenceInclude | null
    /**
     * Filter, which LessonSentence to fetch.
     */
    where: LessonSentenceWhereUniqueInput
  }

  /**
   * LessonSentence findUnique
   */
  export interface LessonSentenceFindUniqueArgs extends LessonSentenceFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * LessonSentence findUniqueOrThrow
   */
  export type LessonSentenceFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the LessonSentence
     */
    select?: LessonSentenceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LessonSentenceInclude | null
    /**
     * Filter, which LessonSentence to fetch.
     */
    where: LessonSentenceWhereUniqueInput
  }


  /**
   * LessonSentence base type for findFirst actions
   */
  export type LessonSentenceFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the LessonSentence
     */
    select?: LessonSentenceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LessonSentenceInclude | null
    /**
     * Filter, which LessonSentence to fetch.
     */
    where?: LessonSentenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LessonSentences to fetch.
     */
    orderBy?: Enumerable<LessonSentenceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LessonSentences.
     */
    cursor?: LessonSentenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LessonSentences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LessonSentences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LessonSentences.
     */
    distinct?: Enumerable<LessonSentenceScalarFieldEnum>
  }

  /**
   * LessonSentence findFirst
   */
  export interface LessonSentenceFindFirstArgs extends LessonSentenceFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * LessonSentence findFirstOrThrow
   */
  export type LessonSentenceFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the LessonSentence
     */
    select?: LessonSentenceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LessonSentenceInclude | null
    /**
     * Filter, which LessonSentence to fetch.
     */
    where?: LessonSentenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LessonSentences to fetch.
     */
    orderBy?: Enumerable<LessonSentenceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LessonSentences.
     */
    cursor?: LessonSentenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LessonSentences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LessonSentences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LessonSentences.
     */
    distinct?: Enumerable<LessonSentenceScalarFieldEnum>
  }


  /**
   * LessonSentence findMany
   */
  export type LessonSentenceFindManyArgs = {
    /**
     * Select specific fields to fetch from the LessonSentence
     */
    select?: LessonSentenceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LessonSentenceInclude | null
    /**
     * Filter, which LessonSentences to fetch.
     */
    where?: LessonSentenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LessonSentences to fetch.
     */
    orderBy?: Enumerable<LessonSentenceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LessonSentences.
     */
    cursor?: LessonSentenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LessonSentences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LessonSentences.
     */
    skip?: number
    distinct?: Enumerable<LessonSentenceScalarFieldEnum>
  }


  /**
   * LessonSentence create
   */
  export type LessonSentenceCreateArgs = {
    /**
     * Select specific fields to fetch from the LessonSentence
     */
    select?: LessonSentenceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LessonSentenceInclude | null
    /**
     * The data needed to create a LessonSentence.
     */
    data: XOR<LessonSentenceCreateInput, LessonSentenceUncheckedCreateInput>
  }


  /**
   * LessonSentence createMany
   */
  export type LessonSentenceCreateManyArgs = {
    /**
     * The data used to create many LessonSentences.
     */
    data: Enumerable<LessonSentenceCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * LessonSentence update
   */
  export type LessonSentenceUpdateArgs = {
    /**
     * Select specific fields to fetch from the LessonSentence
     */
    select?: LessonSentenceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LessonSentenceInclude | null
    /**
     * The data needed to update a LessonSentence.
     */
    data: XOR<LessonSentenceUpdateInput, LessonSentenceUncheckedUpdateInput>
    /**
     * Choose, which LessonSentence to update.
     */
    where: LessonSentenceWhereUniqueInput
  }


  /**
   * LessonSentence updateMany
   */
  export type LessonSentenceUpdateManyArgs = {
    /**
     * The data used to update LessonSentences.
     */
    data: XOR<LessonSentenceUpdateManyMutationInput, LessonSentenceUncheckedUpdateManyInput>
    /**
     * Filter which LessonSentences to update
     */
    where?: LessonSentenceWhereInput
  }


  /**
   * LessonSentence upsert
   */
  export type LessonSentenceUpsertArgs = {
    /**
     * Select specific fields to fetch from the LessonSentence
     */
    select?: LessonSentenceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LessonSentenceInclude | null
    /**
     * The filter to search for the LessonSentence to update in case it exists.
     */
    where: LessonSentenceWhereUniqueInput
    /**
     * In case the LessonSentence found by the `where` argument doesn't exist, create a new LessonSentence with this data.
     */
    create: XOR<LessonSentenceCreateInput, LessonSentenceUncheckedCreateInput>
    /**
     * In case the LessonSentence was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LessonSentenceUpdateInput, LessonSentenceUncheckedUpdateInput>
  }


  /**
   * LessonSentence delete
   */
  export type LessonSentenceDeleteArgs = {
    /**
     * Select specific fields to fetch from the LessonSentence
     */
    select?: LessonSentenceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LessonSentenceInclude | null
    /**
     * Filter which LessonSentence to delete.
     */
    where: LessonSentenceWhereUniqueInput
  }


  /**
   * LessonSentence deleteMany
   */
  export type LessonSentenceDeleteManyArgs = {
    /**
     * Filter which LessonSentences to delete
     */
    where?: LessonSentenceWhereInput
  }


  /**
   * LessonSentence without action
   */
  export type LessonSentenceArgs = {
    /**
     * Select specific fields to fetch from the LessonSentence
     */
    select?: LessonSentenceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LessonSentenceInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const LessonScalarFieldEnum: {
    id: 'id',
    level: 'level',
    sequenceNumber: 'sequenceNumber',
    title: 'title'
  };

  export type LessonScalarFieldEnum = (typeof LessonScalarFieldEnum)[keyof typeof LessonScalarFieldEnum]


  export const LessonSentenceScalarFieldEnum: {
    id: 'id',
    lessonId: 'lessonId',
    englishText: 'englishText',
    russianText: 'russianText',
    status: 'status',
    commentary: 'commentary'
  };

  export type LessonSentenceScalarFieldEnum = (typeof LessonSentenceScalarFieldEnum)[keyof typeof LessonSentenceScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const SentenceScalarFieldEnum: {
    id: 'id',
    text: 'text',
    wordId: 'wordId'
  };

  export type SentenceScalarFieldEnum = (typeof SentenceScalarFieldEnum)[keyof typeof SentenceScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const WordScalarFieldEnum: {
    id: 'id',
    text: 'text',
    audioUrl: 'audioUrl'
  };

  export type WordScalarFieldEnum = (typeof WordScalarFieldEnum)[keyof typeof WordScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type WordWhereInput = {
    AND?: Enumerable<WordWhereInput>
    OR?: Enumerable<WordWhereInput>
    NOT?: Enumerable<WordWhereInput>
    id?: IntFilter | number
    text?: StringFilter | string
    audioUrl?: StringFilter | string
    sentences?: SentenceListRelationFilter
  }

  export type WordOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    audioUrl?: SortOrder
    sentences?: SentenceOrderByRelationAggregateInput
  }

  export type WordWhereUniqueInput = {
    id?: number
    text?: string
  }

  export type WordOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    audioUrl?: SortOrder
    _count?: WordCountOrderByAggregateInput
    _avg?: WordAvgOrderByAggregateInput
    _max?: WordMaxOrderByAggregateInput
    _min?: WordMinOrderByAggregateInput
    _sum?: WordSumOrderByAggregateInput
  }

  export type WordScalarWhereWithAggregatesInput = {
    AND?: Enumerable<WordScalarWhereWithAggregatesInput>
    OR?: Enumerable<WordScalarWhereWithAggregatesInput>
    NOT?: Enumerable<WordScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    text?: StringWithAggregatesFilter | string
    audioUrl?: StringWithAggregatesFilter | string
  }

  export type SentenceWhereInput = {
    AND?: Enumerable<SentenceWhereInput>
    OR?: Enumerable<SentenceWhereInput>
    NOT?: Enumerable<SentenceWhereInput>
    id?: IntFilter | number
    text?: StringFilter | string
    wordId?: IntFilter | number
    word?: XOR<WordRelationFilter, WordWhereInput>
  }

  export type SentenceOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    wordId?: SortOrder
    word?: WordOrderByWithRelationInput
  }

  export type SentenceWhereUniqueInput = {
    id?: number
  }

  export type SentenceOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    wordId?: SortOrder
    _count?: SentenceCountOrderByAggregateInput
    _avg?: SentenceAvgOrderByAggregateInput
    _max?: SentenceMaxOrderByAggregateInput
    _min?: SentenceMinOrderByAggregateInput
    _sum?: SentenceSumOrderByAggregateInput
  }

  export type SentenceScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SentenceScalarWhereWithAggregatesInput>
    OR?: Enumerable<SentenceScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SentenceScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    text?: StringWithAggregatesFilter | string
    wordId?: IntWithAggregatesFilter | number
  }

  export type LessonWhereInput = {
    AND?: Enumerable<LessonWhereInput>
    OR?: Enumerable<LessonWhereInput>
    NOT?: Enumerable<LessonWhereInput>
    id?: IntFilter | number
    level?: EnumEnglishLevelFilter | EnglishLevel
    sequenceNumber?: IntFilter | number
    title?: StringFilter | string
    lessonSentences?: LessonSentenceListRelationFilter
  }

  export type LessonOrderByWithRelationInput = {
    id?: SortOrder
    level?: SortOrder
    sequenceNumber?: SortOrder
    title?: SortOrder
    lessonSentences?: LessonSentenceOrderByRelationAggregateInput
  }

  export type LessonWhereUniqueInput = {
    id?: number
    sequenceNumber?: number
  }

  export type LessonOrderByWithAggregationInput = {
    id?: SortOrder
    level?: SortOrder
    sequenceNumber?: SortOrder
    title?: SortOrder
    _count?: LessonCountOrderByAggregateInput
    _avg?: LessonAvgOrderByAggregateInput
    _max?: LessonMaxOrderByAggregateInput
    _min?: LessonMinOrderByAggregateInput
    _sum?: LessonSumOrderByAggregateInput
  }

  export type LessonScalarWhereWithAggregatesInput = {
    AND?: Enumerable<LessonScalarWhereWithAggregatesInput>
    OR?: Enumerable<LessonScalarWhereWithAggregatesInput>
    NOT?: Enumerable<LessonScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    level?: EnumEnglishLevelWithAggregatesFilter | EnglishLevel
    sequenceNumber?: IntWithAggregatesFilter | number
    title?: StringWithAggregatesFilter | string
  }

  export type LessonSentenceWhereInput = {
    AND?: Enumerable<LessonSentenceWhereInput>
    OR?: Enumerable<LessonSentenceWhereInput>
    NOT?: Enumerable<LessonSentenceWhereInput>
    id?: IntFilter | number
    lessonId?: IntFilter | number
    englishText?: StringFilter | string
    russianText?: StringFilter | string
    status?: EnumLessonSentenceStatusFilter | LessonSentenceStatus
    commentary?: StringFilter | string
    lesson?: XOR<LessonRelationFilter, LessonWhereInput>
  }

  export type LessonSentenceOrderByWithRelationInput = {
    id?: SortOrder
    lessonId?: SortOrder
    englishText?: SortOrder
    russianText?: SortOrder
    status?: SortOrder
    commentary?: SortOrder
    lesson?: LessonOrderByWithRelationInput
  }

  export type LessonSentenceWhereUniqueInput = {
    id?: number
  }

  export type LessonSentenceOrderByWithAggregationInput = {
    id?: SortOrder
    lessonId?: SortOrder
    englishText?: SortOrder
    russianText?: SortOrder
    status?: SortOrder
    commentary?: SortOrder
    _count?: LessonSentenceCountOrderByAggregateInput
    _avg?: LessonSentenceAvgOrderByAggregateInput
    _max?: LessonSentenceMaxOrderByAggregateInput
    _min?: LessonSentenceMinOrderByAggregateInput
    _sum?: LessonSentenceSumOrderByAggregateInput
  }

  export type LessonSentenceScalarWhereWithAggregatesInput = {
    AND?: Enumerable<LessonSentenceScalarWhereWithAggregatesInput>
    OR?: Enumerable<LessonSentenceScalarWhereWithAggregatesInput>
    NOT?: Enumerable<LessonSentenceScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    lessonId?: IntWithAggregatesFilter | number
    englishText?: StringWithAggregatesFilter | string
    russianText?: StringWithAggregatesFilter | string
    status?: EnumLessonSentenceStatusWithAggregatesFilter | LessonSentenceStatus
    commentary?: StringWithAggregatesFilter | string
  }

  export type WordCreateInput = {
    text: string
    audioUrl?: string
    sentences?: SentenceCreateNestedManyWithoutWordInput
  }

  export type WordUncheckedCreateInput = {
    id?: number
    text: string
    audioUrl?: string
    sentences?: SentenceUncheckedCreateNestedManyWithoutWordInput
  }

  export type WordUpdateInput = {
    text?: StringFieldUpdateOperationsInput | string
    audioUrl?: StringFieldUpdateOperationsInput | string
    sentences?: SentenceUpdateManyWithoutWordNestedInput
  }

  export type WordUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    audioUrl?: StringFieldUpdateOperationsInput | string
    sentences?: SentenceUncheckedUpdateManyWithoutWordNestedInput
  }

  export type WordCreateManyInput = {
    id?: number
    text: string
    audioUrl?: string
  }

  export type WordUpdateManyMutationInput = {
    text?: StringFieldUpdateOperationsInput | string
    audioUrl?: StringFieldUpdateOperationsInput | string
  }

  export type WordUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    audioUrl?: StringFieldUpdateOperationsInput | string
  }

  export type SentenceCreateInput = {
    text: string
    word: WordCreateNestedOneWithoutSentencesInput
  }

  export type SentenceUncheckedCreateInput = {
    id?: number
    text: string
    wordId: number
  }

  export type SentenceUpdateInput = {
    text?: StringFieldUpdateOperationsInput | string
    word?: WordUpdateOneRequiredWithoutSentencesNestedInput
  }

  export type SentenceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    wordId?: IntFieldUpdateOperationsInput | number
  }

  export type SentenceCreateManyInput = {
    id?: number
    text: string
    wordId: number
  }

  export type SentenceUpdateManyMutationInput = {
    text?: StringFieldUpdateOperationsInput | string
  }

  export type SentenceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    wordId?: IntFieldUpdateOperationsInput | number
  }

  export type LessonCreateInput = {
    level: EnglishLevel
    sequenceNumber: number
    title: string
    lessonSentences?: LessonSentenceCreateNestedManyWithoutLessonInput
  }

  export type LessonUncheckedCreateInput = {
    id?: number
    level: EnglishLevel
    sequenceNumber: number
    title: string
    lessonSentences?: LessonSentenceUncheckedCreateNestedManyWithoutLessonInput
  }

  export type LessonUpdateInput = {
    level?: EnumEnglishLevelFieldUpdateOperationsInput | EnglishLevel
    sequenceNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    lessonSentences?: LessonSentenceUpdateManyWithoutLessonNestedInput
  }

  export type LessonUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    level?: EnumEnglishLevelFieldUpdateOperationsInput | EnglishLevel
    sequenceNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    lessonSentences?: LessonSentenceUncheckedUpdateManyWithoutLessonNestedInput
  }

  export type LessonCreateManyInput = {
    id?: number
    level: EnglishLevel
    sequenceNumber: number
    title: string
  }

  export type LessonUpdateManyMutationInput = {
    level?: EnumEnglishLevelFieldUpdateOperationsInput | EnglishLevel
    sequenceNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
  }

  export type LessonUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    level?: EnumEnglishLevelFieldUpdateOperationsInput | EnglishLevel
    sequenceNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
  }

  export type LessonSentenceCreateInput = {
    englishText: string
    russianText: string
    status?: LessonSentenceStatus
    commentary?: string
    lesson: LessonCreateNestedOneWithoutLessonSentencesInput
  }

  export type LessonSentenceUncheckedCreateInput = {
    id?: number
    lessonId: number
    englishText: string
    russianText: string
    status?: LessonSentenceStatus
    commentary?: string
  }

  export type LessonSentenceUpdateInput = {
    englishText?: StringFieldUpdateOperationsInput | string
    russianText?: StringFieldUpdateOperationsInput | string
    status?: EnumLessonSentenceStatusFieldUpdateOperationsInput | LessonSentenceStatus
    commentary?: StringFieldUpdateOperationsInput | string
    lesson?: LessonUpdateOneRequiredWithoutLessonSentencesNestedInput
  }

  export type LessonSentenceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    lessonId?: IntFieldUpdateOperationsInput | number
    englishText?: StringFieldUpdateOperationsInput | string
    russianText?: StringFieldUpdateOperationsInput | string
    status?: EnumLessonSentenceStatusFieldUpdateOperationsInput | LessonSentenceStatus
    commentary?: StringFieldUpdateOperationsInput | string
  }

  export type LessonSentenceCreateManyInput = {
    id?: number
    lessonId: number
    englishText: string
    russianText: string
    status?: LessonSentenceStatus
    commentary?: string
  }

  export type LessonSentenceUpdateManyMutationInput = {
    englishText?: StringFieldUpdateOperationsInput | string
    russianText?: StringFieldUpdateOperationsInput | string
    status?: EnumLessonSentenceStatusFieldUpdateOperationsInput | LessonSentenceStatus
    commentary?: StringFieldUpdateOperationsInput | string
  }

  export type LessonSentenceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    lessonId?: IntFieldUpdateOperationsInput | number
    englishText?: StringFieldUpdateOperationsInput | string
    russianText?: StringFieldUpdateOperationsInput | string
    status?: EnumLessonSentenceStatusFieldUpdateOperationsInput | LessonSentenceStatus
    commentary?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type SentenceListRelationFilter = {
    every?: SentenceWhereInput
    some?: SentenceWhereInput
    none?: SentenceWhereInput
  }

  export type SentenceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WordCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    audioUrl?: SortOrder
  }

  export type WordAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type WordMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    audioUrl?: SortOrder
  }

  export type WordMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    audioUrl?: SortOrder
  }

  export type WordSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type WordRelationFilter = {
    is?: WordWhereInput
    isNot?: WordWhereInput
  }

  export type SentenceCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    wordId?: SortOrder
  }

  export type SentenceAvgOrderByAggregateInput = {
    id?: SortOrder
    wordId?: SortOrder
  }

  export type SentenceMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    wordId?: SortOrder
  }

  export type SentenceMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    wordId?: SortOrder
  }

  export type SentenceSumOrderByAggregateInput = {
    id?: SortOrder
    wordId?: SortOrder
  }

  export type EnumEnglishLevelFilter = {
    equals?: EnglishLevel
    in?: Enumerable<EnglishLevel>
    notIn?: Enumerable<EnglishLevel>
    not?: NestedEnumEnglishLevelFilter | EnglishLevel
  }

  export type LessonSentenceListRelationFilter = {
    every?: LessonSentenceWhereInput
    some?: LessonSentenceWhereInput
    none?: LessonSentenceWhereInput
  }

  export type LessonSentenceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LessonCountOrderByAggregateInput = {
    id?: SortOrder
    level?: SortOrder
    sequenceNumber?: SortOrder
    title?: SortOrder
  }

  export type LessonAvgOrderByAggregateInput = {
    id?: SortOrder
    sequenceNumber?: SortOrder
  }

  export type LessonMaxOrderByAggregateInput = {
    id?: SortOrder
    level?: SortOrder
    sequenceNumber?: SortOrder
    title?: SortOrder
  }

  export type LessonMinOrderByAggregateInput = {
    id?: SortOrder
    level?: SortOrder
    sequenceNumber?: SortOrder
    title?: SortOrder
  }

  export type LessonSumOrderByAggregateInput = {
    id?: SortOrder
    sequenceNumber?: SortOrder
  }

  export type EnumEnglishLevelWithAggregatesFilter = {
    equals?: EnglishLevel
    in?: Enumerable<EnglishLevel>
    notIn?: Enumerable<EnglishLevel>
    not?: NestedEnumEnglishLevelWithAggregatesFilter | EnglishLevel
    _count?: NestedIntFilter
    _min?: NestedEnumEnglishLevelFilter
    _max?: NestedEnumEnglishLevelFilter
  }

  export type EnumLessonSentenceStatusFilter = {
    equals?: LessonSentenceStatus
    in?: Enumerable<LessonSentenceStatus>
    notIn?: Enumerable<LessonSentenceStatus>
    not?: NestedEnumLessonSentenceStatusFilter | LessonSentenceStatus
  }

  export type LessonRelationFilter = {
    is?: LessonWhereInput
    isNot?: LessonWhereInput
  }

  export type LessonSentenceCountOrderByAggregateInput = {
    id?: SortOrder
    lessonId?: SortOrder
    englishText?: SortOrder
    russianText?: SortOrder
    status?: SortOrder
    commentary?: SortOrder
  }

  export type LessonSentenceAvgOrderByAggregateInput = {
    id?: SortOrder
    lessonId?: SortOrder
  }

  export type LessonSentenceMaxOrderByAggregateInput = {
    id?: SortOrder
    lessonId?: SortOrder
    englishText?: SortOrder
    russianText?: SortOrder
    status?: SortOrder
    commentary?: SortOrder
  }

  export type LessonSentenceMinOrderByAggregateInput = {
    id?: SortOrder
    lessonId?: SortOrder
    englishText?: SortOrder
    russianText?: SortOrder
    status?: SortOrder
    commentary?: SortOrder
  }

  export type LessonSentenceSumOrderByAggregateInput = {
    id?: SortOrder
    lessonId?: SortOrder
  }

  export type EnumLessonSentenceStatusWithAggregatesFilter = {
    equals?: LessonSentenceStatus
    in?: Enumerable<LessonSentenceStatus>
    notIn?: Enumerable<LessonSentenceStatus>
    not?: NestedEnumLessonSentenceStatusWithAggregatesFilter | LessonSentenceStatus
    _count?: NestedIntFilter
    _min?: NestedEnumLessonSentenceStatusFilter
    _max?: NestedEnumLessonSentenceStatusFilter
  }

  export type SentenceCreateNestedManyWithoutWordInput = {
    create?: XOR<Enumerable<SentenceCreateWithoutWordInput>, Enumerable<SentenceUncheckedCreateWithoutWordInput>>
    connectOrCreate?: Enumerable<SentenceCreateOrConnectWithoutWordInput>
    createMany?: SentenceCreateManyWordInputEnvelope
    connect?: Enumerable<SentenceWhereUniqueInput>
  }

  export type SentenceUncheckedCreateNestedManyWithoutWordInput = {
    create?: XOR<Enumerable<SentenceCreateWithoutWordInput>, Enumerable<SentenceUncheckedCreateWithoutWordInput>>
    connectOrCreate?: Enumerable<SentenceCreateOrConnectWithoutWordInput>
    createMany?: SentenceCreateManyWordInputEnvelope
    connect?: Enumerable<SentenceWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type SentenceUpdateManyWithoutWordNestedInput = {
    create?: XOR<Enumerable<SentenceCreateWithoutWordInput>, Enumerable<SentenceUncheckedCreateWithoutWordInput>>
    connectOrCreate?: Enumerable<SentenceCreateOrConnectWithoutWordInput>
    upsert?: Enumerable<SentenceUpsertWithWhereUniqueWithoutWordInput>
    createMany?: SentenceCreateManyWordInputEnvelope
    set?: Enumerable<SentenceWhereUniqueInput>
    disconnect?: Enumerable<SentenceWhereUniqueInput>
    delete?: Enumerable<SentenceWhereUniqueInput>
    connect?: Enumerable<SentenceWhereUniqueInput>
    update?: Enumerable<SentenceUpdateWithWhereUniqueWithoutWordInput>
    updateMany?: Enumerable<SentenceUpdateManyWithWhereWithoutWordInput>
    deleteMany?: Enumerable<SentenceScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SentenceUncheckedUpdateManyWithoutWordNestedInput = {
    create?: XOR<Enumerable<SentenceCreateWithoutWordInput>, Enumerable<SentenceUncheckedCreateWithoutWordInput>>
    connectOrCreate?: Enumerable<SentenceCreateOrConnectWithoutWordInput>
    upsert?: Enumerable<SentenceUpsertWithWhereUniqueWithoutWordInput>
    createMany?: SentenceCreateManyWordInputEnvelope
    set?: Enumerable<SentenceWhereUniqueInput>
    disconnect?: Enumerable<SentenceWhereUniqueInput>
    delete?: Enumerable<SentenceWhereUniqueInput>
    connect?: Enumerable<SentenceWhereUniqueInput>
    update?: Enumerable<SentenceUpdateWithWhereUniqueWithoutWordInput>
    updateMany?: Enumerable<SentenceUpdateManyWithWhereWithoutWordInput>
    deleteMany?: Enumerable<SentenceScalarWhereInput>
  }

  export type WordCreateNestedOneWithoutSentencesInput = {
    create?: XOR<WordCreateWithoutSentencesInput, WordUncheckedCreateWithoutSentencesInput>
    connectOrCreate?: WordCreateOrConnectWithoutSentencesInput
    connect?: WordWhereUniqueInput
  }

  export type WordUpdateOneRequiredWithoutSentencesNestedInput = {
    create?: XOR<WordCreateWithoutSentencesInput, WordUncheckedCreateWithoutSentencesInput>
    connectOrCreate?: WordCreateOrConnectWithoutSentencesInput
    upsert?: WordUpsertWithoutSentencesInput
    connect?: WordWhereUniqueInput
    update?: XOR<WordUpdateWithoutSentencesInput, WordUncheckedUpdateWithoutSentencesInput>
  }

  export type LessonSentenceCreateNestedManyWithoutLessonInput = {
    create?: XOR<Enumerable<LessonSentenceCreateWithoutLessonInput>, Enumerable<LessonSentenceUncheckedCreateWithoutLessonInput>>
    connectOrCreate?: Enumerable<LessonSentenceCreateOrConnectWithoutLessonInput>
    createMany?: LessonSentenceCreateManyLessonInputEnvelope
    connect?: Enumerable<LessonSentenceWhereUniqueInput>
  }

  export type LessonSentenceUncheckedCreateNestedManyWithoutLessonInput = {
    create?: XOR<Enumerable<LessonSentenceCreateWithoutLessonInput>, Enumerable<LessonSentenceUncheckedCreateWithoutLessonInput>>
    connectOrCreate?: Enumerable<LessonSentenceCreateOrConnectWithoutLessonInput>
    createMany?: LessonSentenceCreateManyLessonInputEnvelope
    connect?: Enumerable<LessonSentenceWhereUniqueInput>
  }

  export type EnumEnglishLevelFieldUpdateOperationsInput = {
    set?: EnglishLevel
  }

  export type LessonSentenceUpdateManyWithoutLessonNestedInput = {
    create?: XOR<Enumerable<LessonSentenceCreateWithoutLessonInput>, Enumerable<LessonSentenceUncheckedCreateWithoutLessonInput>>
    connectOrCreate?: Enumerable<LessonSentenceCreateOrConnectWithoutLessonInput>
    upsert?: Enumerable<LessonSentenceUpsertWithWhereUniqueWithoutLessonInput>
    createMany?: LessonSentenceCreateManyLessonInputEnvelope
    set?: Enumerable<LessonSentenceWhereUniqueInput>
    disconnect?: Enumerable<LessonSentenceWhereUniqueInput>
    delete?: Enumerable<LessonSentenceWhereUniqueInput>
    connect?: Enumerable<LessonSentenceWhereUniqueInput>
    update?: Enumerable<LessonSentenceUpdateWithWhereUniqueWithoutLessonInput>
    updateMany?: Enumerable<LessonSentenceUpdateManyWithWhereWithoutLessonInput>
    deleteMany?: Enumerable<LessonSentenceScalarWhereInput>
  }

  export type LessonSentenceUncheckedUpdateManyWithoutLessonNestedInput = {
    create?: XOR<Enumerable<LessonSentenceCreateWithoutLessonInput>, Enumerable<LessonSentenceUncheckedCreateWithoutLessonInput>>
    connectOrCreate?: Enumerable<LessonSentenceCreateOrConnectWithoutLessonInput>
    upsert?: Enumerable<LessonSentenceUpsertWithWhereUniqueWithoutLessonInput>
    createMany?: LessonSentenceCreateManyLessonInputEnvelope
    set?: Enumerable<LessonSentenceWhereUniqueInput>
    disconnect?: Enumerable<LessonSentenceWhereUniqueInput>
    delete?: Enumerable<LessonSentenceWhereUniqueInput>
    connect?: Enumerable<LessonSentenceWhereUniqueInput>
    update?: Enumerable<LessonSentenceUpdateWithWhereUniqueWithoutLessonInput>
    updateMany?: Enumerable<LessonSentenceUpdateManyWithWhereWithoutLessonInput>
    deleteMany?: Enumerable<LessonSentenceScalarWhereInput>
  }

  export type LessonCreateNestedOneWithoutLessonSentencesInput = {
    create?: XOR<LessonCreateWithoutLessonSentencesInput, LessonUncheckedCreateWithoutLessonSentencesInput>
    connectOrCreate?: LessonCreateOrConnectWithoutLessonSentencesInput
    connect?: LessonWhereUniqueInput
  }

  export type EnumLessonSentenceStatusFieldUpdateOperationsInput = {
    set?: LessonSentenceStatus
  }

  export type LessonUpdateOneRequiredWithoutLessonSentencesNestedInput = {
    create?: XOR<LessonCreateWithoutLessonSentencesInput, LessonUncheckedCreateWithoutLessonSentencesInput>
    connectOrCreate?: LessonCreateOrConnectWithoutLessonSentencesInput
    upsert?: LessonUpsertWithoutLessonSentencesInput
    connect?: LessonWhereUniqueInput
    update?: XOR<LessonUpdateWithoutLessonSentencesInput, LessonUncheckedUpdateWithoutLessonSentencesInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedEnumEnglishLevelFilter = {
    equals?: EnglishLevel
    in?: Enumerable<EnglishLevel>
    notIn?: Enumerable<EnglishLevel>
    not?: NestedEnumEnglishLevelFilter | EnglishLevel
  }

  export type NestedEnumEnglishLevelWithAggregatesFilter = {
    equals?: EnglishLevel
    in?: Enumerable<EnglishLevel>
    notIn?: Enumerable<EnglishLevel>
    not?: NestedEnumEnglishLevelWithAggregatesFilter | EnglishLevel
    _count?: NestedIntFilter
    _min?: NestedEnumEnglishLevelFilter
    _max?: NestedEnumEnglishLevelFilter
  }

  export type NestedEnumLessonSentenceStatusFilter = {
    equals?: LessonSentenceStatus
    in?: Enumerable<LessonSentenceStatus>
    notIn?: Enumerable<LessonSentenceStatus>
    not?: NestedEnumLessonSentenceStatusFilter | LessonSentenceStatus
  }

  export type NestedEnumLessonSentenceStatusWithAggregatesFilter = {
    equals?: LessonSentenceStatus
    in?: Enumerable<LessonSentenceStatus>
    notIn?: Enumerable<LessonSentenceStatus>
    not?: NestedEnumLessonSentenceStatusWithAggregatesFilter | LessonSentenceStatus
    _count?: NestedIntFilter
    _min?: NestedEnumLessonSentenceStatusFilter
    _max?: NestedEnumLessonSentenceStatusFilter
  }

  export type SentenceCreateWithoutWordInput = {
    text: string
  }

  export type SentenceUncheckedCreateWithoutWordInput = {
    id?: number
    text: string
  }

  export type SentenceCreateOrConnectWithoutWordInput = {
    where: SentenceWhereUniqueInput
    create: XOR<SentenceCreateWithoutWordInput, SentenceUncheckedCreateWithoutWordInput>
  }

  export type SentenceCreateManyWordInputEnvelope = {
    data: Enumerable<SentenceCreateManyWordInput>
    skipDuplicates?: boolean
  }

  export type SentenceUpsertWithWhereUniqueWithoutWordInput = {
    where: SentenceWhereUniqueInput
    update: XOR<SentenceUpdateWithoutWordInput, SentenceUncheckedUpdateWithoutWordInput>
    create: XOR<SentenceCreateWithoutWordInput, SentenceUncheckedCreateWithoutWordInput>
  }

  export type SentenceUpdateWithWhereUniqueWithoutWordInput = {
    where: SentenceWhereUniqueInput
    data: XOR<SentenceUpdateWithoutWordInput, SentenceUncheckedUpdateWithoutWordInput>
  }

  export type SentenceUpdateManyWithWhereWithoutWordInput = {
    where: SentenceScalarWhereInput
    data: XOR<SentenceUpdateManyMutationInput, SentenceUncheckedUpdateManyWithoutSentencesInput>
  }

  export type SentenceScalarWhereInput = {
    AND?: Enumerable<SentenceScalarWhereInput>
    OR?: Enumerable<SentenceScalarWhereInput>
    NOT?: Enumerable<SentenceScalarWhereInput>
    id?: IntFilter | number
    text?: StringFilter | string
    wordId?: IntFilter | number
  }

  export type WordCreateWithoutSentencesInput = {
    text: string
    audioUrl?: string
  }

  export type WordUncheckedCreateWithoutSentencesInput = {
    id?: number
    text: string
    audioUrl?: string
  }

  export type WordCreateOrConnectWithoutSentencesInput = {
    where: WordWhereUniqueInput
    create: XOR<WordCreateWithoutSentencesInput, WordUncheckedCreateWithoutSentencesInput>
  }

  export type WordUpsertWithoutSentencesInput = {
    update: XOR<WordUpdateWithoutSentencesInput, WordUncheckedUpdateWithoutSentencesInput>
    create: XOR<WordCreateWithoutSentencesInput, WordUncheckedCreateWithoutSentencesInput>
  }

  export type WordUpdateWithoutSentencesInput = {
    text?: StringFieldUpdateOperationsInput | string
    audioUrl?: StringFieldUpdateOperationsInput | string
  }

  export type WordUncheckedUpdateWithoutSentencesInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    audioUrl?: StringFieldUpdateOperationsInput | string
  }

  export type LessonSentenceCreateWithoutLessonInput = {
    englishText: string
    russianText: string
    status?: LessonSentenceStatus
    commentary?: string
  }

  export type LessonSentenceUncheckedCreateWithoutLessonInput = {
    id?: number
    englishText: string
    russianText: string
    status?: LessonSentenceStatus
    commentary?: string
  }

  export type LessonSentenceCreateOrConnectWithoutLessonInput = {
    where: LessonSentenceWhereUniqueInput
    create: XOR<LessonSentenceCreateWithoutLessonInput, LessonSentenceUncheckedCreateWithoutLessonInput>
  }

  export type LessonSentenceCreateManyLessonInputEnvelope = {
    data: Enumerable<LessonSentenceCreateManyLessonInput>
    skipDuplicates?: boolean
  }

  export type LessonSentenceUpsertWithWhereUniqueWithoutLessonInput = {
    where: LessonSentenceWhereUniqueInput
    update: XOR<LessonSentenceUpdateWithoutLessonInput, LessonSentenceUncheckedUpdateWithoutLessonInput>
    create: XOR<LessonSentenceCreateWithoutLessonInput, LessonSentenceUncheckedCreateWithoutLessonInput>
  }

  export type LessonSentenceUpdateWithWhereUniqueWithoutLessonInput = {
    where: LessonSentenceWhereUniqueInput
    data: XOR<LessonSentenceUpdateWithoutLessonInput, LessonSentenceUncheckedUpdateWithoutLessonInput>
  }

  export type LessonSentenceUpdateManyWithWhereWithoutLessonInput = {
    where: LessonSentenceScalarWhereInput
    data: XOR<LessonSentenceUpdateManyMutationInput, LessonSentenceUncheckedUpdateManyWithoutLessonSentencesInput>
  }

  export type LessonSentenceScalarWhereInput = {
    AND?: Enumerable<LessonSentenceScalarWhereInput>
    OR?: Enumerable<LessonSentenceScalarWhereInput>
    NOT?: Enumerable<LessonSentenceScalarWhereInput>
    id?: IntFilter | number
    lessonId?: IntFilter | number
    englishText?: StringFilter | string
    russianText?: StringFilter | string
    status?: EnumLessonSentenceStatusFilter | LessonSentenceStatus
    commentary?: StringFilter | string
  }

  export type LessonCreateWithoutLessonSentencesInput = {
    level: EnglishLevel
    sequenceNumber: number
    title: string
  }

  export type LessonUncheckedCreateWithoutLessonSentencesInput = {
    id?: number
    level: EnglishLevel
    sequenceNumber: number
    title: string
  }

  export type LessonCreateOrConnectWithoutLessonSentencesInput = {
    where: LessonWhereUniqueInput
    create: XOR<LessonCreateWithoutLessonSentencesInput, LessonUncheckedCreateWithoutLessonSentencesInput>
  }

  export type LessonUpsertWithoutLessonSentencesInput = {
    update: XOR<LessonUpdateWithoutLessonSentencesInput, LessonUncheckedUpdateWithoutLessonSentencesInput>
    create: XOR<LessonCreateWithoutLessonSentencesInput, LessonUncheckedCreateWithoutLessonSentencesInput>
  }

  export type LessonUpdateWithoutLessonSentencesInput = {
    level?: EnumEnglishLevelFieldUpdateOperationsInput | EnglishLevel
    sequenceNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
  }

  export type LessonUncheckedUpdateWithoutLessonSentencesInput = {
    id?: IntFieldUpdateOperationsInput | number
    level?: EnumEnglishLevelFieldUpdateOperationsInput | EnglishLevel
    sequenceNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
  }

  export type SentenceCreateManyWordInput = {
    id?: number
    text: string
  }

  export type SentenceUpdateWithoutWordInput = {
    text?: StringFieldUpdateOperationsInput | string
  }

  export type SentenceUncheckedUpdateWithoutWordInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
  }

  export type SentenceUncheckedUpdateManyWithoutSentencesInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
  }

  export type LessonSentenceCreateManyLessonInput = {
    id?: number
    englishText: string
    russianText: string
    status?: LessonSentenceStatus
    commentary?: string
  }

  export type LessonSentenceUpdateWithoutLessonInput = {
    englishText?: StringFieldUpdateOperationsInput | string
    russianText?: StringFieldUpdateOperationsInput | string
    status?: EnumLessonSentenceStatusFieldUpdateOperationsInput | LessonSentenceStatus
    commentary?: StringFieldUpdateOperationsInput | string
  }

  export type LessonSentenceUncheckedUpdateWithoutLessonInput = {
    id?: IntFieldUpdateOperationsInput | number
    englishText?: StringFieldUpdateOperationsInput | string
    russianText?: StringFieldUpdateOperationsInput | string
    status?: EnumLessonSentenceStatusFieldUpdateOperationsInput | LessonSentenceStatus
    commentary?: StringFieldUpdateOperationsInput | string
  }

  export type LessonSentenceUncheckedUpdateManyWithoutLessonSentencesInput = {
    id?: IntFieldUpdateOperationsInput | number
    englishText?: StringFieldUpdateOperationsInput | string
    russianText?: StringFieldUpdateOperationsInput | string
    status?: EnumLessonSentenceStatusFieldUpdateOperationsInput | LessonSentenceStatus
    commentary?: StringFieldUpdateOperationsInput | string
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