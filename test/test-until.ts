import test from 'ava'
import { EventEmitter } from 'events'

/**
 * Library under test
 */

import { until } from '../src/until'

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
