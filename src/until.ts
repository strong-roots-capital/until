/**
 * until
 * Await until event
 */

import makeBarrier from '@strong-roots-capital/barrier'

interface EmitterLike {
    once(event: string | symbol | string[], listener: (...args: any[]) => void): this
}


/**
 * Await until `emitter` fires `event`.
 *
 * @param emitter - EventEmitter to monitor
 * @param event - Event on which to resolve promise
 */
export async function until(emitter: EmitterLike, event: string | symbol) {
    const barrier = makeBarrier()
    emitter.once(event, barrier)
    await barrier()
}
