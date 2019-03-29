/**
 * until
 * Await until event
 */

import { EventEmitter } from 'events'
import makeBarrier from '@strong-roots-capital/barrier'


/**
 * Await until `emitter` fires `event`.
 *
 * @param emitter - EventEmitter to monitor
 * @param event - Event on which to resolve promise
 */
export async function until(emitter: EventEmitter, event: string | symbol) {
    const barrier = makeBarrier()
    emitter.once(event, barrier)
    await barrier()
}
