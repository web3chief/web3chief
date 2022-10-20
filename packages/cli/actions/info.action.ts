import chalk from 'chalk';
import { readFileSync } from 'fs';
import { platform, release } from 'os';
import osName = require('os-name');
import { join } from 'path';
import {
  AbstractPackageManager,
  PackageManagerFactory,
} from '../lib/package-managers';
import { BANNER } from '../lib/ui';
import { AbstractAction } from './abstract.action';

export class InfoAction extends AbstractAction {
  private manager!: AbstractPackageManager;

  public async handle() {
    this.manager = await PackageManagerFactory.find();
    this.displayBanner();
    await this.displaySystemInformation();
    await this.displayWeb3ChiefInformation();
  }

  private displayBanner() {
    console.info(chalk.red(BANNER));
  }

  private async displaySystemInformation(): Promise<void> {
    console.info(chalk.green('[System Information]'));
    console.info('OS Version     :', chalk.blue(osName(platform(), release())));
    console.info('NodeJS Version :', chalk.blue(process.version));
    await this.displayPackageManagerVersion();
  }

  async displayPackageManagerVersion() {
    try {
      const version: string = await this.manager.version();
      console.info(
        `${this.manager.name} Version    :`,
        chalk.blue(version),
        '\n',
      );
    } catch {
      console.error(
        `${this.manager.name} Version    :`,
        chalk.red('Unknown'),
        '\n',
      );
    }
  }

  async displayWeb3ChiefInformation(): Promise<void> {
    this.displayCliVersion();
  }

  displayCliVersion(): void {
    console.info(chalk.green('[web3chief CLI]'));
    console.info(
      'web3chief CLI Version :',
      chalk.blue(
        JSON.parse(readFileSync(join(__dirname, '../package.json')).toString())
          .version,
      ),
      '\n',
    );
  }
}
