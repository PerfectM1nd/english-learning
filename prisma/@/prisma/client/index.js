
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  decompressFromBase64,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  findSync
} = require('./runtime/library')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.11.0
 * Query Engine version: 8fde8fef4033376662cad983758335009d522acb
 */
Prisma.prismaVersion = {
  client: "4.11.0",
  engine: "8fde8fef4033376662cad983758335009d522acb"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}


  const path = require('path')

const fs = require('fs')

// some frameworks or bundlers replace or totally remove __dirname
const hasDirname = typeof __dirname !== 'undefined' && __dirname !== '/'

// will work in most cases, ie. if the client has not been bundled
const regularDirname = hasDirname && fs.existsSync(path.join(__dirname, 'schema.prisma')) && __dirname

// if the client has been bundled, we need to look for the folders
const foundDirname = !regularDirname && findSync(process.cwd(), [
    "prisma/@/prisma/client",
    "@/prisma/client",
], ['d'], ['d'], 1)[0]

const dirname = regularDirname || foundDirname || __dirname

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.LessonScalarFieldEnum = makeEnum({
  id: 'id',
  level: 'level',
  sequenceNumber: 'sequenceNumber',
  title: 'title'
});

exports.Prisma.LessonSentenceScalarFieldEnum = makeEnum({
  id: 'id',
  lessonId: 'lessonId',
  englishText: 'englishText',
  russianText: 'russianText',
  status: 'status',
  commentary: 'commentary'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.SentenceScalarFieldEnum = makeEnum({
  id: 'id',
  text: 'text',
  wordId: 'wordId'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.WordScalarFieldEnum = makeEnum({
  id: 'id',
  text: 'text',
  audioUrl: 'audioUrl'
});
exports.EnglishLevel = makeEnum({
  A0: 'A0',
  A1: 'A1',
  A2: 'A2',
  B1: 'B1',
  B2: 'B2',
  C1: 'C1'
});

exports.LessonSentenceStatus = makeEnum({
  fluent: 'fluent',
  uncertain: 'uncertain',
  mistaken: 'mistaken',
  error: 'error'
});

exports.Prisma.ModelName = makeEnum({
  Word: 'Word',
  Sentence: 'Sentence',
  Lesson: 'Lesson',
  LessonSentence: 'LessonSentence'
});

const dmmfString = "{\"datamodel\":{\"enums\":[{\"name\":\"EnglishLevel\",\"values\":[{\"name\":\"A0\",\"dbName\":null},{\"name\":\"A1\",\"dbName\":null},{\"name\":\"A2\",\"dbName\":null},{\"name\":\"B1\",\"dbName\":null},{\"name\":\"B2\",\"dbName\":null},{\"name\":\"C1\",\"dbName\":null}],\"dbName\":null},{\"name\":\"LessonSentenceStatus\",\"values\":[{\"name\":\"fluent\",\"dbName\":null},{\"name\":\"uncertain\",\"dbName\":null},{\"name\":\"mistaken\",\"dbName\":null},{\"name\":\"error\",\"dbName\":null}],\"dbName\":null}],\"models\":[{\"name\":\"Word\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"text\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"audioUrl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sentences\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Sentence\",\"relationName\":\"SentenceToWord\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Sentence\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"text\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"word\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Word\",\"relationName\":\"SentenceToWord\",\"relationFromFields\":[\"wordId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"wordId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Lesson\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"level\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"EnglishLevel\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sequenceNumber\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lessonSentences\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"LessonSentence\",\"relationName\":\"LessonToLessonSentence\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"LessonSentence\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lesson\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Lesson\",\"relationName\":\"LessonToLessonSentence\",\"relationFromFields\":[\"lessonId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lessonId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"englishText\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"russianText\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"LessonSentenceStatus\",\"default\":\"fluent\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"commentary\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}],\"types\":[]},\"mappings\":{\"modelOperations\":[{\"model\":\"Word\",\"plural\":\"words\",\"findUnique\":\"findUniqueWord\",\"findUniqueOrThrow\":\"findUniqueWordOrThrow\",\"findFirst\":\"findFirstWord\",\"findFirstOrThrow\":\"findFirstWordOrThrow\",\"findMany\":\"findManyWord\",\"create\":\"createOneWord\",\"createMany\":\"createManyWord\",\"delete\":\"deleteOneWord\",\"update\":\"updateOneWord\",\"deleteMany\":\"deleteManyWord\",\"updateMany\":\"updateManyWord\",\"upsert\":\"upsertOneWord\",\"aggregate\":\"aggregateWord\",\"groupBy\":\"groupByWord\"},{\"model\":\"Sentence\",\"plural\":\"sentences\",\"findUnique\":\"findUniqueSentence\",\"findUniqueOrThrow\":\"findUniqueSentenceOrThrow\",\"findFirst\":\"findFirstSentence\",\"findFirstOrThrow\":\"findFirstSentenceOrThrow\",\"findMany\":\"findManySentence\",\"create\":\"createOneSentence\",\"createMany\":\"createManySentence\",\"delete\":\"deleteOneSentence\",\"update\":\"updateOneSentence\",\"deleteMany\":\"deleteManySentence\",\"updateMany\":\"updateManySentence\",\"upsert\":\"upsertOneSentence\",\"aggregate\":\"aggregateSentence\",\"groupBy\":\"groupBySentence\"},{\"model\":\"Lesson\",\"plural\":\"lessons\",\"findUnique\":\"findUniqueLesson\",\"findUniqueOrThrow\":\"findUniqueLessonOrThrow\",\"findFirst\":\"findFirstLesson\",\"findFirstOrThrow\":\"findFirstLessonOrThrow\",\"findMany\":\"findManyLesson\",\"create\":\"createOneLesson\",\"createMany\":\"createManyLesson\",\"delete\":\"deleteOneLesson\",\"update\":\"updateOneLesson\",\"deleteMany\":\"deleteManyLesson\",\"updateMany\":\"updateManyLesson\",\"upsert\":\"upsertOneLesson\",\"aggregate\":\"aggregateLesson\",\"groupBy\":\"groupByLesson\"},{\"model\":\"LessonSentence\",\"plural\":\"lessonSentences\",\"findUnique\":\"findUniqueLessonSentence\",\"findUniqueOrThrow\":\"findUniqueLessonSentenceOrThrow\",\"findFirst\":\"findFirstLessonSentence\",\"findFirstOrThrow\":\"findFirstLessonSentenceOrThrow\",\"findMany\":\"findManyLessonSentence\",\"create\":\"createOneLessonSentence\",\"createMany\":\"createManyLessonSentence\",\"delete\":\"deleteOneLessonSentence\",\"update\":\"updateOneLessonSentence\",\"deleteMany\":\"deleteManyLessonSentence\",\"updateMany\":\"updateManyLessonSentence\",\"upsert\":\"upsertOneLessonSentence\",\"aggregate\":\"aggregateLessonSentence\",\"groupBy\":\"groupByLessonSentence\"}],\"otherOperations\":{\"read\":[],\"write\":[\"executeRaw\",\"queryRaw\"]}}}"
const dmmf = JSON.parse(dmmfString)
exports.Prisma.dmmf = JSON.parse(dmmfString)

/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/home/georgy/WebstormProjects/english-learning/prisma/@/prisma/client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "debian-openssl-3.0.x"
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../../.env",
    "schemaEnvPath": "../../../../.env"
  },
  "relativePath": "../../..",
  "clientVersion": "4.11.0",
  "engineVersion": "8fde8fef4033376662cad983758335009d522acb",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "dataProxy": false
}
config.dirname = dirname
config.document = dmmf




const { warnEnvConflicts } = require('./runtime/library')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(dirname, config.relativeEnvPaths.schemaEnvPath)
})


const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

path.join(__dirname, "libquery_engine-debian-openssl-3.0.x.so.node");
path.join(process.cwd(), "prisma/@/prisma/client/libquery_engine-debian-openssl-3.0.x.so.node")
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "prisma/@/prisma/client/schema.prisma")
