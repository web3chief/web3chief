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

export type Approval = ContractEventLog<{
  owner: string;
  approved: string;
  tokenId: string;
  0: string;
  1: string;
  2: string;
}>;
export type ApprovalForAll = ContractEventLog<{
  owner: string;
  operator: string;
  approved: boolean;
  0: string;
  1: string;
  2: boolean;
}>;
export type BurnTokenFromProfile = ContractEventLog<{
  sender: string;
  collectionToken: [string, string, string];
  profileId: string;
  data: string;
  timestamp: string;
  0: string;
  1: [string, string, string];
  2: string;
  3: string;
  4: string;
}>;
export type CreateCollection = ContractEventLog<{
  sender: string;
  collectionId: string;
  collection: [string, string, string, boolean];
  implementation: string;
  salt: string;
  name: string;
  symbol: string;
  contractURI: string;
  tokenURI: string;
  data: string;
  timestamp: string;
  0: string;
  1: string;
  2: [string, string, string, boolean];
  3: string;
  4: string;
  5: string;
  6: string;
  7: string;
  8: string;
  9: string;
  10: string;
}>;
export type CreateProperty = ContractEventLog<{
  sender: string;
  propertyId: string;
  propertySettings: [string, string, [string, string, string], string, boolean];
  timestamp: string;
  0: string;
  1: string;
  2: [string, string, [string, string, string], string, boolean];
  3: string;
}>;
export type EditProperty = ContractEventLog<{
  sender: string;
  propertyId: string;
  propertySettings: [string, string, [string, string, string], string, boolean];
  timestamp: string;
  0: string;
  1: string;
  2: [string, string, [string, string, string], string, boolean];
  3: string;
}>;
export type Initialized = ContractEventLog<{
  version: string;
  0: string;
}>;
export type LockProfile = ContractEventLog<{
  sender: string;
  profileId: string;
  timestamp: string;
  0: string;
  1: string;
  2: string;
}>;
export type MintProfile = ContractEventLog<{
  sender: string;
  targetWallet: string;
  profileId: string;
  profileVault: string;
  salt: string;
  timestamp: string;
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
}>;
export type MintTokenToProfile = ContractEventLog<{
  sender: string;
  collectionToken: [string, string, string];
  profileId: string;
  data: string;
  timestamp: string;
  0: string;
  1: [string, string, string];
  2: string;
  3: string;
  4: string;
}>;
export type MintTokenToWallet = ContractEventLog<{
  sender: string;
  collectionToken: [string, string, string];
  targetWallet: string;
  data: string;
  timestamp: string;
  0: string;
  1: [string, string, string];
  2: string;
  3: string;
  4: string;
}>;
export type RoleAdminChanged = ContractEventLog<{
  role: string;
  previousAdminRole: string;
  newAdminRole: string;
  0: string;
  1: string;
  2: string;
}>;
export type RoleGranted = ContractEventLog<{
  role: string;
  account: string;
  sender: string;
  0: string;
  1: string;
  2: string;
}>;
export type RoleRevoked = ContractEventLog<{
  role: string;
  account: string;
  sender: string;
  0: string;
  1: string;
  2: string;
}>;
export type SetBaseURI = ContractEventLog<{
  sender: string;
  newBaseURI: string;
  timestamp: string;
  0: string;
  1: string;
  2: string;
}>;
export type SetCollectionActivity = ContractEventLog<{
  sender: string;
  collectionId: string;
  newStatus: boolean;
  timestamp: string;
  0: string;
  1: string;
  2: boolean;
  3: string;
}>;
export type SetProfileVaultImpl = ContractEventLog<{
  sender: string;
  profileVaultImpl: string;
  timestamp: string;
  0: string;
  1: string;
  2: string;
}>;
export type SetPropertyValue = ContractEventLog<{
  sender: string;
  profileId: string;
  propertyId: string;
  newValue: string;
  signature: string;
  timestamp: string;
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
}>;
export type Transfer = ContractEventLog<{
  from: string;
  to: string;
  tokenId: string;
  0: string;
  1: string;
  2: string;
}>;
export type UnlockProfile = ContractEventLog<{
  sender: string;
  profileOwner: string;
  profileId: string;
  timestamp: string;
  0: string;
  1: string;
  2: string;
  3: string;
}>;
export type WithdrawToken = ContractEventLog<{
  sender: string;
  standart: string;
  token: [string, string, string];
  timestamp: string;
  0: string;
  1: string;
  2: [string, string, string];
  3: string;
}>;

export interface GamefiAbi extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): GamefiAbi;
  clone(): GamefiAbi;
  methods: {
    DEFAULT_ADMIN_ROLE(): NonPayableTransactionObject<string>;

    OPERATOR_ROLE(): NonPayableTransactionObject<string>;

    approve(
      to: string,
      tokenId: number | string | BN
    ): NonPayableTransactionObject<void>;

    balanceOf(owner: string): NonPayableTransactionObject<string>;

    baseURI(): NonPayableTransactionObject<string>;

    burn(tokenId: number | string | BN): NonPayableTransactionObject<void>;

    burnTokenFromProfile(
      collectionToken: [
        number | string | BN,
        number | string | BN,
        number | string | BN
      ],
      profileId: number | string | BN,
      data: string | number[]
    ): NonPayableTransactionObject<void>;

    callToCollection(
      collectionId: (number | string | BN)[],
      data: (string | number[])[]
    ): NonPayableTransactionObject<string[]>;

    collectionDetails(
      collectionId: number | string | BN
    ): NonPayableTransactionObject<[string, string, string, boolean]>;

    createCollection(
      tokenStandart: number | string | BN,
      implementation: string,
      salt: number | string | BN,
      name_: string,
      symbol_: string,
      contractURI_: string,
      tokenURI_: string,
      data: string | number[]
    ): NonPayableTransactionObject<string>;

    createProperty(
      propertySettings: [
        number | string | BN,
        number | string | BN,
        [string, number | string | BN, number | string | BN],
        string,
        boolean
      ]
    ): NonPayableTransactionObject<string>;

    editProperty(
      propertyId: number | string | BN,
      propertySettings: [
        number | string | BN,
        number | string | BN,
        [string, number | string | BN, number | string | BN],
        string,
        boolean
      ]
    ): NonPayableTransactionObject<void>;

    getApproved(
      tokenId: number | string | BN
    ): NonPayableTransactionObject<string>;

    getPropertyValue(
      profileId: number | string | BN,
      propertyId: number | string | BN
    ): NonPayableTransactionObject<string>;

    getRoleAdmin(role: string | number[]): NonPayableTransactionObject<string>;

    getRoleMember(
      role: string | number[],
      index: number | string | BN
    ): NonPayableTransactionObject<string>;

    getRoleMemberCount(
      role: string | number[]
    ): NonPayableTransactionObject<string>;

    grantRole(
      role: string | number[],
      account: string
    ): NonPayableTransactionObject<void>;

    hasRole(
      role: string | number[],
      account: string
    ): NonPayableTransactionObject<boolean>;

    initialize(
      name_: string,
      symbol_: string,
      baseURI_: string,
      profileVaultImpl_: string
    ): NonPayableTransactionObject<void>;

    isAdmin(target: string): NonPayableTransactionObject<boolean>;

    isApprovedForAll(
      owner: string,
      operator: string
    ): NonPayableTransactionObject<boolean>;

    isOperator(target: string): NonPayableTransactionObject<boolean>;

    isTrustedForwarder(forwarder: string): NonPayableTransactionObject<boolean>;

    lockProfile(
      profileId: number | string | BN
    ): NonPayableTransactionObject<void>;

    mintProfile(
      targetWallet: string,
      salt: number | string | BN
    ): NonPayableTransactionObject<{
      profileId: string;
      profileVault: string;
      0: string;
      1: string;
    }>;

    mintTokenToProfile(
      collectionToken: [
        number | string | BN,
        number | string | BN,
        number | string | BN
      ],
      profileId: number | string | BN,
      data: string | number[]
    ): NonPayableTransactionObject<void>;

    mintTokenToWallet(
      collectionToken: [
        number | string | BN,
        number | string | BN,
        number | string | BN
      ],
      targetWallet: string,
      data: string | number[]
    ): NonPayableTransactionObject<void>;

    name(): NonPayableTransactionObject<string>;

    ownerOf(tokenId: number | string | BN): NonPayableTransactionObject<string>;

    profileIdToVault(
      profileId: number | string | BN
    ): NonPayableTransactionObject<string>;

    profileIsLocked(
      profileId: number | string | BN
    ): NonPayableTransactionObject<boolean>;

    profileVaultImpl(): NonPayableTransactionObject<string>;

    profileVaultToId(
      profileAddress: string
    ): NonPayableTransactionObject<string>;

    propertyDetails(
      propertyId: number | string | BN
    ): NonPayableTransactionObject<
      [string, string, [string, string, string], string, boolean]
    >;

    renounceRole(
      role: string | number[],
      account: string
    ): NonPayableTransactionObject<void>;

    revokeRole(
      role: string | number[],
      account: string
    ): NonPayableTransactionObject<void>;

    "safeTransferFrom(address,address,uint256)"(
      from: string,
      to: string,
      tokenId: number | string | BN
    ): NonPayableTransactionObject<void>;

    "safeTransferFrom(address,address,uint256,bytes)"(
      from: string,
      to: string,
      tokenId: number | string | BN,
      data: string | number[]
    ): NonPayableTransactionObject<void>;

    setApprovalForAll(
      operator: string,
      approved: boolean
    ): NonPayableTransactionObject<void>;

    setBaseURI(newBaseURI: string): NonPayableTransactionObject<void>;

    setCollectionActivity(
      collectionId: number | string | BN,
      isActive: boolean
    ): NonPayableTransactionObject<void>;

    setPropertyValue(
      profileId: number | string | BN,
      propertyId: number | string | BN,
      newValue: string | number[],
      signature: string | number[]
    ): NonPayableTransactionObject<void>;

    setTrustedForwarder(
      newTrustedForwarder: string
    ): NonPayableTransactionObject<void>;

    supportsInterface(
      interfaceId: string | number[]
    ): NonPayableTransactionObject<boolean>;

    symbol(): NonPayableTransactionObject<string>;

    tokenByIndex(
      index: number | string | BN
    ): NonPayableTransactionObject<string>;

    tokenOfOwnerByIndex(
      owner: string,
      index: number | string | BN
    ): NonPayableTransactionObject<string>;

    tokenURI(
      tokenId: number | string | BN
    ): NonPayableTransactionObject<string>;

    totalCollections(): NonPayableTransactionObject<string>;

    totalProperties(): NonPayableTransactionObject<string>;

    totalSupply(): NonPayableTransactionObject<string>;

    transferFrom(
      from: string,
      to: string,
      tokenId: number | string | BN
    ): NonPayableTransactionObject<void>;

    trustedForwarder(): NonPayableTransactionObject<string>;

    unlockProfile(
      profileId: number | string | BN
    ): NonPayableTransactionObject<void>;

    versionHash(): NonPayableTransactionObject<string>;

    versionRecipient(): NonPayableTransactionObject<string>;

    withdrawToken(
      standart: number | string | BN,
      token: [string, number | string | BN, number | string | BN]
    ): NonPayableTransactionObject<void>;
  };
  events: {
    Approval(cb?: Callback<Approval>): EventEmitter;
    Approval(options?: EventOptions, cb?: Callback<Approval>): EventEmitter;

    ApprovalForAll(cb?: Callback<ApprovalForAll>): EventEmitter;
    ApprovalForAll(
      options?: EventOptions,
      cb?: Callback<ApprovalForAll>
    ): EventEmitter;

    BurnTokenFromProfile(cb?: Callback<BurnTokenFromProfile>): EventEmitter;
    BurnTokenFromProfile(
      options?: EventOptions,
      cb?: Callback<BurnTokenFromProfile>
    ): EventEmitter;

    CreateCollection(cb?: Callback<CreateCollection>): EventEmitter;
    CreateCollection(
      options?: EventOptions,
      cb?: Callback<CreateCollection>
    ): EventEmitter;

    CreateProperty(cb?: Callback<CreateProperty>): EventEmitter;
    CreateProperty(
      options?: EventOptions,
      cb?: Callback<CreateProperty>
    ): EventEmitter;

    EditProperty(cb?: Callback<EditProperty>): EventEmitter;
    EditProperty(
      options?: EventOptions,
      cb?: Callback<EditProperty>
    ): EventEmitter;

    Initialized(cb?: Callback<Initialized>): EventEmitter;
    Initialized(
      options?: EventOptions,
      cb?: Callback<Initialized>
    ): EventEmitter;

    LockProfile(cb?: Callback<LockProfile>): EventEmitter;
    LockProfile(
      options?: EventOptions,
      cb?: Callback<LockProfile>
    ): EventEmitter;

    MintProfile(cb?: Callback<MintProfile>): EventEmitter;
    MintProfile(
      options?: EventOptions,
      cb?: Callback<MintProfile>
    ): EventEmitter;

    MintTokenToProfile(cb?: Callback<MintTokenToProfile>): EventEmitter;
    MintTokenToProfile(
      options?: EventOptions,
      cb?: Callback<MintTokenToProfile>
    ): EventEmitter;

    MintTokenToWallet(cb?: Callback<MintTokenToWallet>): EventEmitter;
    MintTokenToWallet(
      options?: EventOptions,
      cb?: Callback<MintTokenToWallet>
    ): EventEmitter;

    RoleAdminChanged(cb?: Callback<RoleAdminChanged>): EventEmitter;
    RoleAdminChanged(
      options?: EventOptions,
      cb?: Callback<RoleAdminChanged>
    ): EventEmitter;

    RoleGranted(cb?: Callback<RoleGranted>): EventEmitter;
    RoleGranted(
      options?: EventOptions,
      cb?: Callback<RoleGranted>
    ): EventEmitter;

    RoleRevoked(cb?: Callback<RoleRevoked>): EventEmitter;
    RoleRevoked(
      options?: EventOptions,
      cb?: Callback<RoleRevoked>
    ): EventEmitter;

    SetBaseURI(cb?: Callback<SetBaseURI>): EventEmitter;
    SetBaseURI(options?: EventOptions, cb?: Callback<SetBaseURI>): EventEmitter;

    SetCollectionActivity(cb?: Callback<SetCollectionActivity>): EventEmitter;
    SetCollectionActivity(
      options?: EventOptions,
      cb?: Callback<SetCollectionActivity>
    ): EventEmitter;

    SetProfileVaultImpl(cb?: Callback<SetProfileVaultImpl>): EventEmitter;
    SetProfileVaultImpl(
      options?: EventOptions,
      cb?: Callback<SetProfileVaultImpl>
    ): EventEmitter;

    SetPropertyValue(cb?: Callback<SetPropertyValue>): EventEmitter;
    SetPropertyValue(
      options?: EventOptions,
      cb?: Callback<SetPropertyValue>
    ): EventEmitter;

    Transfer(cb?: Callback<Transfer>): EventEmitter;
    Transfer(options?: EventOptions, cb?: Callback<Transfer>): EventEmitter;

    UnlockProfile(cb?: Callback<UnlockProfile>): EventEmitter;
    UnlockProfile(
      options?: EventOptions,
      cb?: Callback<UnlockProfile>
    ): EventEmitter;

    WithdrawToken(cb?: Callback<WithdrawToken>): EventEmitter;
    WithdrawToken(
      options?: EventOptions,
      cb?: Callback<WithdrawToken>
    ): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: "Approval", cb: Callback<Approval>): void;
  once(event: "Approval", options: EventOptions, cb: Callback<Approval>): void;

  once(event: "ApprovalForAll", cb: Callback<ApprovalForAll>): void;
  once(
    event: "ApprovalForAll",
    options: EventOptions,
    cb: Callback<ApprovalForAll>
  ): void;

  once(event: "BurnTokenFromProfile", cb: Callback<BurnTokenFromProfile>): void;
  once(
    event: "BurnTokenFromProfile",
    options: EventOptions,
    cb: Callback<BurnTokenFromProfile>
  ): void;

  once(event: "CreateCollection", cb: Callback<CreateCollection>): void;
  once(
    event: "CreateCollection",
    options: EventOptions,
    cb: Callback<CreateCollection>
  ): void;

  once(event: "CreateProperty", cb: Callback<CreateProperty>): void;
  once(
    event: "CreateProperty",
    options: EventOptions,
    cb: Callback<CreateProperty>
  ): void;

  once(event: "EditProperty", cb: Callback<EditProperty>): void;
  once(
    event: "EditProperty",
    options: EventOptions,
    cb: Callback<EditProperty>
  ): void;

  once(event: "Initialized", cb: Callback<Initialized>): void;
  once(
    event: "Initialized",
    options: EventOptions,
    cb: Callback<Initialized>
  ): void;

  once(event: "LockProfile", cb: Callback<LockProfile>): void;
  once(
    event: "LockProfile",
    options: EventOptions,
    cb: Callback<LockProfile>
  ): void;

  once(event: "MintProfile", cb: Callback<MintProfile>): void;
  once(
    event: "MintProfile",
    options: EventOptions,
    cb: Callback<MintProfile>
  ): void;

  once(event: "MintTokenToProfile", cb: Callback<MintTokenToProfile>): void;
  once(
    event: "MintTokenToProfile",
    options: EventOptions,
    cb: Callback<MintTokenToProfile>
  ): void;

  once(event: "MintTokenToWallet", cb: Callback<MintTokenToWallet>): void;
  once(
    event: "MintTokenToWallet",
    options: EventOptions,
    cb: Callback<MintTokenToWallet>
  ): void;

  once(event: "RoleAdminChanged", cb: Callback<RoleAdminChanged>): void;
  once(
    event: "RoleAdminChanged",
    options: EventOptions,
    cb: Callback<RoleAdminChanged>
  ): void;

  once(event: "RoleGranted", cb: Callback<RoleGranted>): void;
  once(
    event: "RoleGranted",
    options: EventOptions,
    cb: Callback<RoleGranted>
  ): void;

  once(event: "RoleRevoked", cb: Callback<RoleRevoked>): void;
  once(
    event: "RoleRevoked",
    options: EventOptions,
    cb: Callback<RoleRevoked>
  ): void;

  once(event: "SetBaseURI", cb: Callback<SetBaseURI>): void;
  once(
    event: "SetBaseURI",
    options: EventOptions,
    cb: Callback<SetBaseURI>
  ): void;

  once(
    event: "SetCollectionActivity",
    cb: Callback<SetCollectionActivity>
  ): void;
  once(
    event: "SetCollectionActivity",
    options: EventOptions,
    cb: Callback<SetCollectionActivity>
  ): void;

  once(event: "SetProfileVaultImpl", cb: Callback<SetProfileVaultImpl>): void;
  once(
    event: "SetProfileVaultImpl",
    options: EventOptions,
    cb: Callback<SetProfileVaultImpl>
  ): void;

  once(event: "SetPropertyValue", cb: Callback<SetPropertyValue>): void;
  once(
    event: "SetPropertyValue",
    options: EventOptions,
    cb: Callback<SetPropertyValue>
  ): void;

  once(event: "Transfer", cb: Callback<Transfer>): void;
  once(event: "Transfer", options: EventOptions, cb: Callback<Transfer>): void;

  once(event: "UnlockProfile", cb: Callback<UnlockProfile>): void;
  once(
    event: "UnlockProfile",
    options: EventOptions,
    cb: Callback<UnlockProfile>
  ): void;

  once(event: "WithdrawToken", cb: Callback<WithdrawToken>): void;
  once(
    event: "WithdrawToken",
    options: EventOptions,
    cb: Callback<WithdrawToken>
  ): void;
}
