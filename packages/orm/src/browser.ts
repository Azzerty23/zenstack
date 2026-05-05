// @zenstackhq/orm is a server-only package.
// This stub is used by browser bundlers (e.g. Turbopack, webpack) to prevent
// Node.js-specific modules (node:async_hooks, etc.) from entering client bundles.
// Types are still resolved from the main entry via the "types" export condition.
//
// Pure data constants needed at runtime by client-side adapters (e.g. transaction.js)
// are re-exported here since they carry no Node.js dependencies.

export const CoreReadOperations = [
    'findMany',
    'findUnique',
    'findFirst',
    'count',
    'aggregate',
    'groupBy',
    'exists',
] as const;
