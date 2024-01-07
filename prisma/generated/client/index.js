
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
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
  warnOnce,
  defineDmmfProperty,
  Public,
  detectRuntime,
} = require('./runtime/library')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.7.1
 * Query Engine version: 0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5
 */
Prisma.prismaVersion = {
  client: "5.7.1",
  engine: "0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5"
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
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

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

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UsersScalarFieldEnum = {
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

exports.Prisma.ProductsScalarFieldEnum = {
  product_id: 'product_id',
  name: 'name',
  category: 'category',
  picture: 'picture',
  description: 'description'
};

exports.Prisma.Products_of_monthsScalarFieldEnum = {
  product_of_month_id: 'product_of_month_id',
  month: 'month',
  product_id: 'product_id',
  featured: 'featured'
};

exports.Prisma.RecipesScalarFieldEnum = {
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

exports.Prisma.QuantitiesScalarFieldEnum = {
  quantity_id: 'quantity_id',
  quantity_number: 'quantity_number',
  quantity_label: 'quantity_label',
  recipe_id: 'recipe_id',
  product_id: 'product_id'
};

exports.Prisma.FavoritesScalarFieldEnum = {
  favorite_id: 'favorite_id',
  recipe_id: 'recipe_id',
  user_id: 'user_id'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.profile = exports.$Enums.profile = {
  user: 'user',
  administrator: 'administrator'
};

exports.category = exports.$Enums.category = {
  fruits: 'fruits',
  vegetables: 'vegetables',
  cereals: 'cereals',
  pulses: 'pulses'
};

exports.month = exports.$Enums.month = {
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

exports.quantity_label = exports.$Enums.quantity_label = {
  gram: 'gram',
  kilogram: 'kilogram',
  liter: 'liter',
  centiliter: 'centiliter',
  pinch: 'pinch',
  bouquet: 'bouquet',
  slice: 'slice'
};

exports.Prisma.ModelName = {
  users: 'users',
  products: 'products',
  products_of_months: 'products_of_months',
  recipes: 'recipes',
  quantities: 'quantities',
  favorites: 'favorites'
};
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
      "value": "/Users/Saeba/WCS/template_nextjs/prisma/generated/client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "darwin-arm64",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null
  },
  "relativePath": "../..",
  "clientVersion": "5.7.1",
  "engineVersion": "0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": true,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DB_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Z2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKICBvdXRwdXQgICA9ICIuL2dlbmVyYXRlZC9jbGllbnQiCn0KCmRhdGFzb3VyY2UgZGIgewogIHByb3ZpZGVyID0gInBvc3RncmVzcWwiCiAgdXJsICAgICAgPSBlbnYoIkRCX1VSTCIpCn0KCm1vZGVsIHVzZXJzIHsKICB1c2VyX2lkICAgICAgICAgICAgIEludCAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBwcm9maWxlICAgICAgICAgICAgIHByb2ZpbGUgICAgQGRlZmF1bHQodXNlcikKICBlbWFpbCAgICAgICAgICAgICAgIFN0cmluZyAgICAgQHVuaXF1ZQogIHBhc3N3b3JkICAgICAgICAgICAgU3RyaW5nCiAgZGF0ZV9vZl9iaXJ0aCAgICAgICBEYXRlVGltZT8KICBhZGRyZXNzICAgICAgICAgICAgIFN0cmluZz8KICB6aXBfY29kZSAgICAgICAgICAgIFN0cmluZz8KICBjaXR5ICAgICAgICAgICAgICAgIFN0cmluZz8KICBwcm9maWxlX3BpY3R1cmUgICAgIEJ5dGVzPwogIGNvbmZpcm1hdGlvbl9saW5rICAgQm9vbGVhbgogIGNvbmZpcm1hdGlvbl9kYXRlX3NlbnQgRGF0ZVRpbWU/CiAgY3JlYXRlZF9kYXRlICAgICAgICBEYXRlVGltZT8gIEBkZWZhdWx0KG5vdygpKQogIGxhc3RfY29ubmVjdGlvbiAgICAgRGF0ZVRpbWU/ICBAZGVmYXVsdChub3coKSkKCiAgcmVjaXBlcyAgICAgICAgICAgIHJlY2lwZXNbXQogIGZhdm9yaXRlcyAgICAgICAgICBmYXZvcml0ZXNbXQp9CgplbnVtIHByb2ZpbGUgewogIHVzZXIKICBhZG1pbmlzdHJhdG9yCn0KCm1vZGVsIHByb2R1Y3RzIHsKICBwcm9kdWN0X2lkICAgICAgICAgIEludCAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBuYW1lICAgICAgICAgICAgICAgIFN0cmluZwogIGNhdGVnb3J5ICAgICAgICAgICAgY2F0ZWdvcnkKICBwaWN0dXJlICAgICAgICAgICAgIEJ5dGVzPwogIGRlc2NyaXB0aW9uICAgICAgICAgU3RyaW5nPwoKICBxdWFudGl0aWVzIHF1YW50aXRpZXNbXQogIHByb2R1Y3RzX29mX21vbnRocyBwcm9kdWN0c19vZl9tb250aHNbXQp9CgplbnVtIGNhdGVnb3J5IHsKICBmcnVpdHMKICB2ZWdldGFibGVzCiAgY2VyZWFscwogIHB1bHNlcwp9Cgptb2RlbCBwcm9kdWN0c19vZl9tb250aHMgewogIHByb2R1Y3Rfb2ZfbW9udGhfaWQgSW50ICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIG1vbnRoICAgICAgICAgICAgICAgbW9udGgKICBwcm9kdWN0X2lkICAgICAgICAgIEludAogIGZlYXR1cmVkICAgICAgICAgICAgQm9vbGVhbiAgICBAZGVmYXVsdChmYWxzZSkKCiAgcHJvZHVjdCBwcm9kdWN0cyBAcmVsYXRpb24oZmllbGRzOiBbcHJvZHVjdF9pZF0sIHJlZmVyZW5jZXM6IFtwcm9kdWN0X2lkXSkKfQoKZW51bSBtb250aCB7CmphbnVhcnkKZmVicnVhcnkKbWFyY2gKYXByaWwKbWF5Cmp1bmUKanVseQphdWd1c3QKc2VwdGVtYmVyCm9jdG9iZXIKbm92ZW1iZXIKZGVjZW1iZXIKfQoKbW9kZWwgcmVjaXBlcyB7CiAgcmVjaXBlX2lkICAgICAgICAgICBJbnQgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgdGl0bGUgICAgICAgICAgICAgICBTdHJpbmcKICBwaG90byAgICAgICAgICAgICAgIFN0cmluZz8KICBkaWZmaWN1bHR5ICAgICAgICAgIFN0cmluZz8KICBkdXJhdGlvbiAgICAgICAgICAgIFN0cmluZz8KICBudW1iZXJfcGVyc29ucyAgICAgIEludAogIGluc3RydWN0aW9ucyAgICAgICAgU3RyaW5nCiAgdXRlbnNpbHMgICAgICAgICAgICBTdHJpbmc/CiAgaW5mb3JtYXRpb24gICAgICAgICBTdHJpbmc/CiAgdXNlcl9pZCAgICAgICAgICAgICBJbnQKCiAgdXNlciB1c2VycyBAcmVsYXRpb24oZmllbGRzOiBbdXNlcl9pZF0sIHJlZmVyZW5jZXM6IFt1c2VyX2lkXSkKICBxdWFudGl0aWVzIHF1YW50aXRpZXNbXQogIGZhdm9yaXRlcyBmYXZvcml0ZXNbXQp9Cgptb2RlbCBxdWFudGl0aWVzIHsKICBxdWFudGl0eV9pZCAgICAgICAgIEludCAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBxdWFudGl0eV9udW1iZXIgICAgIERlY2ltYWwKICBxdWFudGl0eV9sYWJlbCAgICAgIHF1YW50aXR5X2xhYmVsCiAgcmVjaXBlX2lkICAgICAgICAgICBJbnQKICBwcm9kdWN0X2lkICAgICAgICAgIEludAoKICByZWNpcGUgIHJlY2lwZXMgIEByZWxhdGlvbihmaWVsZHM6IFtyZWNpcGVfaWRdLCByZWZlcmVuY2VzOiBbcmVjaXBlX2lkXSkKICBwcm9kdWN0IHByb2R1Y3RzIEByZWxhdGlvbihmaWVsZHM6IFtwcm9kdWN0X2lkXSwgcmVmZXJlbmNlczogW3Byb2R1Y3RfaWRdKQp9CgplbnVtIHF1YW50aXR5X2xhYmVsIHsKZ3JhbQpraWxvZ3JhbQpsaXRlcgpjZW50aWxpdGVyCnBpbmNoCmJvdXF1ZXQKc2xpY2UKfQoKbW9kZWwgZmF2b3JpdGVzIHsKICBmYXZvcml0ZV9pZCAgICAgICAgIEludCAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICByZWNpcGVfaWQgICAgICAgICAgIEludAogIHVzZXJfaWQgICAgICAgICAgICAgSW50CgogIHJlY2lwZSByZWNpcGVzIEByZWxhdGlvbihmaWVsZHM6IFtyZWNpcGVfaWRdLCByZWZlcmVuY2VzOiBbcmVjaXBlX2lkXSkKICB1c2VyICAgdXNlcnMgICBAcmVsYXRpb24oZmllbGRzOiBbdXNlcl9pZF0sIHJlZmVyZW5jZXM6IFt1c2VyX2lkXSkKfQ==",
  "inlineSchemaHash": "2f8dc0228ccc9fb84f304e9bd25f3766433fde994999f2cc08fde8ae343f0cd3",
  "noEngine": false
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "prisma/generated/client",
    "generated/client",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"users\":{\"dbName\":null,\"fields\":[{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"profile\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"profile\",\"default\":\"user\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date_of_birth\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"zip_code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"city\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"profile_picture\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"confirmation_link\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"confirmation_date_sent\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_connection\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"recipes\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"recipes\",\"relationName\":\"recipesTousers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"favorites\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"favorites\",\"relationName\":\"favoritesTousers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"products\":{\"dbName\":null,\"fields\":[{\"name\":\"product_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"category\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"category\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"picture\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"quantities\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"quantities\",\"relationName\":\"productsToquantities\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"products_of_months\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"products_of_months\",\"relationName\":\"productsToproducts_of_months\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"products_of_months\":{\"dbName\":null,\"fields\":[{\"name\":\"product_of_month_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"month\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"month\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"featured\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"products\",\"relationName\":\"productsToproducts_of_months\",\"relationFromFields\":[\"product_id\"],\"relationToFields\":[\"product_id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"recipes\":{\"dbName\":null,\"fields\":[{\"name\":\"recipe_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"photo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"difficulty\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"duration\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"number_persons\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"instructions\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"utensils\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"information\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"users\",\"relationName\":\"recipesTousers\",\"relationFromFields\":[\"user_id\"],\"relationToFields\":[\"user_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"quantities\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"quantities\",\"relationName\":\"quantitiesTorecipes\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"favorites\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"favorites\",\"relationName\":\"favoritesTorecipes\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"quantities\":{\"dbName\":null,\"fields\":[{\"name\":\"quantity_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"quantity_number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"quantity_label\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"quantity_label\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"recipe_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"recipe\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"recipes\",\"relationName\":\"quantitiesTorecipes\",\"relationFromFields\":[\"recipe_id\"],\"relationToFields\":[\"recipe_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"products\",\"relationName\":\"productsToquantities\",\"relationFromFields\":[\"product_id\"],\"relationToFields\":[\"product_id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"favorites\":{\"dbName\":null,\"fields\":[{\"name\":\"favorite_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"recipe_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"recipe\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"recipes\",\"relationName\":\"favoritesTorecipes\",\"relationFromFields\":[\"recipe_id\"],\"relationToFields\":[\"recipe_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"users\",\"relationName\":\"favoritesTousers\",\"relationFromFields\":[\"user_id\"],\"relationToFields\":[\"user_id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"profile\":{\"values\":[{\"name\":\"user\",\"dbName\":null},{\"name\":\"administrator\",\"dbName\":null}],\"dbName\":null},\"category\":{\"values\":[{\"name\":\"fruits\",\"dbName\":null},{\"name\":\"vegetables\",\"dbName\":null},{\"name\":\"cereals\",\"dbName\":null},{\"name\":\"pulses\",\"dbName\":null}],\"dbName\":null},\"month\":{\"values\":[{\"name\":\"january\",\"dbName\":null},{\"name\":\"february\",\"dbName\":null},{\"name\":\"march\",\"dbName\":null},{\"name\":\"april\",\"dbName\":null},{\"name\":\"may\",\"dbName\":null},{\"name\":\"june\",\"dbName\":null},{\"name\":\"july\",\"dbName\":null},{\"name\":\"august\",\"dbName\":null},{\"name\":\"september\",\"dbName\":null},{\"name\":\"october\",\"dbName\":null},{\"name\":\"november\",\"dbName\":null},{\"name\":\"december\",\"dbName\":null}],\"dbName\":null},\"quantity_label\":{\"values\":[{\"name\":\"gram\",\"dbName\":null},{\"name\":\"kilogram\",\"dbName\":null},{\"name\":\"liter\",\"dbName\":null},{\"name\":\"centiliter\",\"dbName\":null},{\"name\":\"pinch\",\"dbName\":null},{\"name\":\"bouquet\",\"dbName\":null},{\"name\":\"slice\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined


const { warnEnvConflicts } = require('./runtime/library')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "libquery_engine-darwin-arm64.dylib.node");
path.join(process.cwd(), "prisma/generated/client/libquery_engine-darwin-arm64.dylib.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "prisma/generated/client/schema.prisma")
