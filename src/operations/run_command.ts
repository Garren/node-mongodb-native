import CommandOperationV2 = require('./command_v2');
import { defineAspects, Aspect } from './operation';
import Db = require('../db');
import Collection = require('../collection');
import MongoClient = require('../mongo_client');
import { Server } from '../sdam/server';

class RunCommandOperation extends CommandOperationV2 {
  command: any;
  constructor(parent: MongoClient | Db | Collection, command: any, options: any) {
    super(parent, options);
    this.command = command;
  }
  execute(server: Server, callback: any) {
    const command = this.command;
    this.executeCommand(server, command, callback);
  }
}
defineAspects(RunCommandOperation, [Aspect.EXECUTE_WITH_SELECTION, Aspect.NO_INHERIT_OPTIONS]);

export = RunCommandOperation;
