import { EventEmitter } from 'events'
import { AbstractIdentity } from '../identity/abstract-identity'
import { Resolver } from '../core'
import { Message } from '../message/message'

export abstract class AbstractServiceController extends EventEmitter {
  constructor(readonly identity: AbstractIdentity, readonly didResolver: Resolver) {
    super()
  }
  abstract ready: Promise<boolean> // you cannot have an async constructor
  abstract instanceId(): { did: string; type: string; id: string }
  abstract getMessagesSince(timestamp: number): Promise<Message[]>
  abstract listen(): Promise<boolean>
}

type AbstractServiceControllerClass = typeof AbstractServiceController
export interface ServiceControllerDerived extends AbstractServiceControllerClass {}
