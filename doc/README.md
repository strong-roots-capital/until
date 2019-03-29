
until [![Build status](https://travis-ci.org/strong-roots-capital/until.svg?branch=master)](https://travis-ci.org/strong-roots-capital/until) [![npm version](https://img.shields.io/npm/v/@strong-roots-capital/until.svg)](https://npmjs.org/package/@strong-roots-capital/until) [![codecov](https://codecov.io/gh/strong-roots-capital/until/branch/master/graph/badge.svg)](https://codecov.io/gh/strong-roots-capital/until)
==================================================================================================================================================================================================================================================================================================================================================================================================================================

> Await until event

Install
-------

```shell
npm install @strong-roots-capital/until
```

Use
---

```typescript
import { until } from '@strong-roots-capital/until'

test('should await until event', async t => {
    class TestClient extends EventEmitter {
        open = false
        constructor() {
            super()
            setTimeout(() => {
                this.open = true
                this.emit('open')
            }, 100)
        }
    }
    const client = new TestClient()
    await until(client, 'open')
    t.true(client.open)
})

```

Related
-------

*   [barrier](https://github.com/strong-roots-capital/barrier)

## Index

### Functions

* [until](#until)

---

## Functions

<a id="until"></a>

###  until

▸ **until**(emitter: *`EventEmitter`*, event: *`string` \| `symbol`*): `Promise`<`void`>

*Defined in [until.ts:16](https://github.com/strong-roots-capital/until/blob/e0eb69b/src/until.ts#L16)*

Await until `emitter` fires `event`.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| emitter | `EventEmitter` |  EventEmitter to monitor |
| event | `string` \| `symbol` |  Event on which to resolve promise |

**Returns:** `Promise`<`void`>

___

