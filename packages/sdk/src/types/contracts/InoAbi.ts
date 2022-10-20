/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import type BN from "bn.js";
import type { ContractOptions } from "web3-eth-contract";
import type { EventLog } from "web3-core";
import type { EventEmitter } from "events";
import type {
  Callback,
  PayableTransactionObject,
  NonPayableTransactionObject,
  BlockType,
  ContractEventLog,
  BaseContract,
} from "./types";

export interface EventOptions {
  filter?: object;
  fromBlock?: BlockType;
  topics?: string[];
}

export type AddWhitelist = ContractEventLog<{
  owner: string;
  wallets: string[];
  timestamp: string;
  0: string;
  1: string[];
  2: string;
}>;
export type BuyNFT = ContractEventLog<{
  user: string;
  tokenId: string;
  amount: string;
  forCurrency: string;
  orderPrice: string;
  timestamp: string;
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
}>;
export type OwnershipTransferred = ContractEventLog<{
  previousOwner: string;
  newOwner: string;
  0: string;
  1: string;
}>;
export type RemoveWhitelist = ContractEventLog<{
  owner: string;
  wallets: string[];
  timestamp: string;
  0: string;
  1: string[];
  2: string;
}>;
export type SetOtherCurrencyRatio = ContractEventLog<{
  owner: string;
  otherCurrency: string;
  ratio: string;
  timestamp: string;
  0: string;
  1: string;
  2: string;
  3: string;
}>;
export type SetPhase = ContractEventLog<{
  owner: string;
  newPhase: string;
  oldPhase: string;
  timestamp: string;
  0: string;
  1: string;
  2: string;
  3: string;
}>;
export type SetTokenPricesInBaseCurrency = ContractEventLog<{
  owner: string;
  prices: [string, string][];
  timestamp: string;
  0: string;
  1: [string, string][];
  2: string;
}>;
export type WithdrawCurrencyAdmin = ContractEventLog<{
  owner: string;
  erc20: string;
  amount: string;
  timestamp: string;
  0: string;
  1: string;
  2: string;
  3: string;
}>;
export type WithdrawERC1155Admin = ContractEventLog<{
  owner: string;
  tokenId: string;
  amount: string;
  timestamp: string;
  0: string;
  1: string;
  2: string;
  3: string;
}>;

export interface InoAbi extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): InoAbi;
  clone(): InoAbi;
  methods: {
    addWhitelist(_wallets: string[]): NonPayableTransactionObject<boolean>;

    baseCurrency(): NonPayableTransactionObject<string>;

    buyNFT(
      tokenId: number | string | BN,
      amount: number | string | BN,
      forCurrency: string
    ): NonPayableTransactionObject<boolean>;

    buyNFTBatch(
      orders: [number | string | BN, number | string | BN, string][]
    ): NonPayableTransactionObject<boolean>;

    currentPhase(): NonPayableTransactionObject<string>;

    getTokenPrice(
      tokenId: number | string | BN,
      forCurrency: string
    ): NonPayableTransactionObject<string>;

    initialize(
      _targetERC1155Collection: string,
      _baseCurrency: string,
      _inoPartner: string
    ): NonPayableTransactionObject<void>;

    inoPartner(): NonPayableTransactionObject<string>;

    isOtherCurrency(
      targetCurrency: string
    ): NonPayableTransactionObject<boolean>;

    isWhitelisted(targetUser: string): NonPayableTransactionObject<boolean>;

    onERC1155BatchReceived(
      arg0: string,
      arg1: string,
      arg2: (number | string | BN)[],
      arg3: (number | string | BN)[],
      arg4: string | number[]
    ): NonPayableTransactionObject<string>;

    onERC1155Received(
      arg0: string,
      arg1: string,
      arg2: number | string | BN,
      arg3: number | string | BN,
      arg4: string | number[]
    ): NonPayableTransactionObject<string>;

    otherCurrencyRatio(arg0: string): NonPayableTransactionObject<string>;

    owner(): NonPayableTransactionObject<string>;

    removeWhitelist(_wallets: string[]): NonPayableTransactionObject<boolean>;

    renounceOwnership(): NonPayableTransactionObject<void>;

    setOtherCurrencyRatio(
      otherCurrency: string,
      ratio: number | string | BN
    ): NonPayableTransactionObject<boolean>;

    setPhase(
      _phase: number | string | BN
    ): NonPayableTransactionObject<boolean>;

    setTokenPricesInBaseCurrency(
      _tokenPricesInBaseCurrency: [number | string | BN, number | string | BN][]
    ): NonPayableTransactionObject<boolean>;

    supportsInterface(
      interfaceId: string | number[]
    ): NonPayableTransactionObject<boolean>;

    targetERC1155Collection(): NonPayableTransactionObject<string>;

    tokenPriceInBaseCurrency(
      arg0: number | string | BN
    ): NonPayableTransactionObject<string>;

    totalTokensBought(
      arg0: number | string | BN
    ): NonPayableTransactionObject<string>;

    totalWhitelisted(): NonPayableTransactionObject<string>;

    transferOwnership(newOwner: string): NonPayableTransactionObject<void>;

    withdrawCurrency(
      erc20: string,
      amount: number | string | BN
    ): NonPayableTransactionObject<boolean>;

    withdrawERC1155Admin(
      tokenId: number | string | BN,
      amount: number | string | BN
    ): NonPayableTransactionObject<boolean>;
  };
  events: {
    AddWhitelist(cb?: Callback<AddWhitelist>): EventEmitter;
    AddWhitelist(
      options?: EventOptions,
      cb?: Callback<AddWhitelist>
    ): EventEmitter;

    BuyNFT(cb?: Callback<BuyNFT>): EventEmitter;
    BuyNFT(options?: EventOptions, cb?: Callback<BuyNFT>): EventEmitter;

    OwnershipTransferred(cb?: Callback<OwnershipTransferred>): EventEmitter;
    OwnershipTransferred(
      options?: EventOptions,
      cb?: Callback<OwnershipTransferred>
    ): EventEmitter;

    RemoveWhitelist(cb?: Callback<RemoveWhitelist>): EventEmitter;
    RemoveWhitelist(
      options?: EventOptions,
      cb?: Callback<RemoveWhitelist>
    ): EventEmitter;

    SetOtherCurrencyRatio(cb?: Callback<SetOtherCurrencyRatio>): EventEmitter;
    SetOtherCurrencyRatio(
      options?: EventOptions,
      cb?: Callback<SetOtherCurrencyRatio>
    ): EventEmitter;

    SetPhase(cb?: Callback<SetPhase>): EventEmitter;
    SetPhase(options?: EventOptions, cb?: Callback<SetPhase>): EventEmitter;

    SetTokenPricesInBaseCurrency(
      cb?: Callback<SetTokenPricesInBaseCurrency>
    ): EventEmitter;
    SetTokenPricesInBaseCurrency(
      options?: EventOptions,
      cb?: Callback<SetTokenPricesInBaseCurrency>
    ): EventEmitter;

    WithdrawCurrencyAdmin(cb?: Callback<WithdrawCurrencyAdmin>): EventEmitter;
    WithdrawCurrencyAdmin(
      options?: EventOptions,
      cb?: Callback<WithdrawCurrencyAdmin>
    ): EventEmitter;

    WithdrawERC1155Admin(cb?: Callback<WithdrawERC1155Admin>): EventEmitter;
    WithdrawERC1155Admin(
      options?: EventOptions,
      cb?: Callback<WithdrawERC1155Admin>
    ): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: "AddWhitelist", cb: Callback<AddWhitelist>): void;
  once(
    event: "AddWhitelist",
    options: EventOptions,
    cb: Callback<AddWhitelist>
  ): void;

  once(event: "BuyNFT", cb: Callback<BuyNFT>): void;
  once(event: "BuyNFT", options: EventOptions, cb: Callback<BuyNFT>): void;

  once(event: "OwnershipTransferred", cb: Callback<OwnershipTransferred>): void;
  once(
    event: "OwnershipTransferred",
    options: EventOptions,
    cb: Callback<OwnershipTransferred>
  ): void;

  once(event: "RemoveWhitelist", cb: Callback<RemoveWhitelist>): void;
  once(
    event: "RemoveWhitelist",
    options: EventOptions,
    cb: Callback<RemoveWhitelist>
  ): void;

  once(
    event: "SetOtherCurrencyRatio",
    cb: Callback<SetOtherCurrencyRatio>
  ): void;
  once(
    event: "SetOtherCurrencyRatio",
    options: EventOptions,
    cb: Callback<SetOtherCurrencyRatio>
  ): void;

  once(event: "SetPhase", cb: Callback<SetPhase>): void;
  once(event: "SetPhase", options: EventOptions, cb: Callback<SetPhase>): void;

  once(
    event: "SetTokenPricesInBaseCurrency",
    cb: Callback<SetTokenPricesInBaseCurrency>
  ): void;
  once(
    event: "SetTokenPricesInBaseCurrency",
    options: EventOptions,
    cb: Callback<SetTokenPricesInBaseCurrency>
  ): void;

  once(
    event: "WithdrawCurrencyAdmin",
    cb: Callback<WithdrawCurrencyAdmin>
  ): void;
  once(
    event: "WithdrawCurrencyAdmin",
    options: EventOptions,
    cb: Callback<WithdrawCurrencyAdmin>
  ): void;

  once(event: "WithdrawERC1155Admin", cb: Callback<WithdrawERC1155Admin>): void;
  once(
    event: "WithdrawERC1155Admin",
    options: EventOptions,
    cb: Callback<WithdrawERC1155Admin>
  ): void;
}
