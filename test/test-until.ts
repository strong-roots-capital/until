import test from 'ava'
import { EventEmitter } from 'events'
import { EventEmitter2 } from 'eventemitter2'

/**
 * Library under test
 */

import { until } from '../src/until'

test('should await until nodejs event', async t => {
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

test('should await until eventemitter2 event', async t => {
    class TestClient extends EventEmitter2 {
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
