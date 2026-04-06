import { test, assertType, expectTypeOf } from 'vitest'
/// <reference path="../src/index.d.ts" />

test('my types work properly', () => {
    expectTypeOf(Event)
})