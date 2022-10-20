/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface CategoryTokenDto {
  /** @example SPACESHIPS */
  name: string;
  /** @example https://gameficore.s3.eu-west-2.amazonaws.com/zoa/nft-marketplace/categories/spaceships.svg */
  icon: string;
}
export interface TokenPropertiesDto {
  /** @example Tier */
  nameProperty: string;
  /** @example Rare */
  nameValue: string;
  /** @example  */
  icon: string;
  /** @example text */
  typeView: "text" | "icon" | "icon_text";
}
export interface MetaPreparedProperties {
  /** @example Spaceships */
  Type: string;
  /** @example 20 */
  Slots: string;
}
export interface MetaPrepared {
  /** @example ZERA */
  name: string;
  /** @example Text */
  description: string;
  /** @example ipfs://QmeuRTHJce1q5GdmEXpoMNLjfXVPPW76UgVNXzeVM7F42P/0000000000000000000000000000000000000000000000000000000000000000.jpg */
  image: string;
  properties: MetaPreparedProperties;
}
export interface DropDownTokenDto {
  /** @example ZOA Starships */
  name: string;
  /** @example ZOASTARSHIP */
  symbol: string;
  /** @example 18 */
  decimal: number;
  /** @example ERC1155 */
  standard: "ERC1155" | "ERC721" | "ERC20";
  /** @example ERC1155 */
  type: "ERC1155" | "ERC721" | "ERC20" | "ERC20WRAP" | "GAMEFI" | "AVATARS" | "BOXES";
  /** @example 0xF91859002458d33E4B54622a28ceaD479AC69A20 */
  smartContract: string;
  /** @example 0 */
  tokenId: number;
  /** @example https://bold-point.mypinata.cloud/ipfs/QmeuRTHJce1q5GdmEXpoMNLjfXVPPW76UgVNXzeVM7F42P/0000000000000000000000000000000000000000000000000000000000000000.jpg */
  img: string;
  /** @example Text */
  description: string;
  category: CategoryTokenDto;
  properties: TokenPropertiesDto[];
  /**
   * @example {
   *     "name": "ZERA",
   *     "description": "Text",
   *     "image": "ipfs://QmeuRTHJce1q5GdmEXpoMNLjfXVPPW76UgVNXzeVM7F42P/0000000000000000000000000000000000000000000000000000000000000000.jpg",
   *     "properties": {
   *       "Type": "Spaceships",
   *       "Slots": "20"
   *
   *     }
   *   }
   */
  metaOriginal: string;
  metaPrepared: MetaPrepared;
  /** @example 1000000000000000000 */
  amount: string;
  /** @example 1 */
  preparedAmount: string;
  /** @example 50 */
  probability: number;
}
export interface GetAssetByBoxResponseDto {
  dropDownTokens: DropDownTokenDto[];
}
export interface TokenDto {
  /** @example ZOA Starships */
  name: string;
  /** @example ZOASTARSHIP */
  symbol: string;
  /** @example 18 */
  decimal: number;
  /** @example ERC1155 */
  standard: "ERC1155" | "ERC721" | "ERC20";
  /** @example ERC1155 */
  type: "ERC1155" | "ERC721" | "ERC20" | "ERC20WRAP" | "GAMEFI" | "AVATARS" | "BOXES";
  /** @example 0xF91859002458d33E4B54622a28ceaD479AC69A20 */
  smartContract: string;
  /** @example 0 */
  tokenId: number;
  /** @example https://bold-point.mypinata.cloud/ipfs/QmeuRTHJce1q5GdmEXpoMNLjfXVPPW76UgVNXzeVM7F42P/0000000000000000000000000000000000000000000000000000000000000000.jpg */
  img: string;
  /** @example Text */
  description: string;
  category: CategoryTokenDto;
  properties: TokenPropertiesDto[];
  /**
   * @example {
   *     "name": "ZERA",
   *     "description": "Text",
   *     "image": "ipfs://QmeuRTHJce1q5GdmEXpoMNLjfXVPPW76UgVNXzeVM7F42P/0000000000000000000000000000000000000000000000000000000000000000.jpg",
   *     "properties": {
   *       "Type": "Spaceships",
   *       "Slots": "20"
   *
   *     }
   *   }
   */
  metaOriginal: string;
  metaPrepared: MetaPrepared;
}
export interface GetBoxAssetsResponseDto {
  tokenResponse: TokenDto[];
}
export interface Map {
  "0": string;
}
export interface GetAssetsInfoResponseDto {
  smartContract: string;
  mapping: Map[];
}
export interface Token {
  /** @example ZOA Starships */
  name: string;
  /** @example ZOASTARSHIP */
  symbol: string;
  /** @example 18 */
  decimal: number;
  /** @example ERC1155 */
  standard: "ERC1155" | "ERC721" | "ERC20";
  /** @example ERC1155 */
  type: "ERC1155" | "ERC721" | "ERC20" | "ERC20WRAP" | "GAMEFI" | "AVATARS" | "BOXES";
  /** @example 0xF91859002458d33E4B54622a28ceaD479AC69A20 */
  smartContract: string;
  /** @example 0 */
  tokenId: number;
  /** @example https://bold-point.mypinata.cloud/ipfs/QmeuRTHJce1q5GdmEXpoMNLjfXVPPW76UgVNXzeVM7F42P/0000000000000000000000000000000000000000000000000000000000000000.jpg */
  img: string;
  /** @example Text */
  description: string;
  category: CategoryTokenDto;
  properties: TokenPropertiesDto[];
  /**
   * @example {
   *     "name": "ZERA",
   *     "description": "Text",
   *     "image": "ipfs://QmeuRTHJce1q5GdmEXpoMNLjfXVPPW76UgVNXzeVM7F42P/0000000000000000000000000000000000000000000000000000000000000000.jpg",
   *     "properties": {
   *       "Type": "Spaceships",
   *       "Slots": "20"
   *
   *     }
   *   }
   */
  metaOriginal: string;
  metaPrepared: MetaPrepared;
  /** @example 1000000000000000000000010 */
  amount: string;
  /** @example 1000000000000000000000010 */
  preparedAmount: string;
}
export interface Avatar {
  /** @example GameFiCore avatars (testnet) */
  name: string;
  /** @example COREAVATARS */
  symbol: string;
  /** @example 1 */
  decimal: number;
  /** @example ERC1155 */
  standard: "ERC1155" | "ERC721" | "ERC20";
  /** @example AVATARS */
  type: "ERC1155" | "ERC721" | "ERC20" | "ERC20WRAP" | "GAMEFI" | "AVATARS" | "BOXES";
  /** @example 0x4E1688DA51F26c1c64e3E46f780864C7Ed8dC33F */
  smartContract: string;
  /** @example 0 */
  tokenId: number;
  /** @example https://bold-point.mypinata.cloud/ipfs/QmQe9r3YJQJ7ZuACmN3qhZN1BZSKFDHGsnCAQCmcpkFETQ/0000000000000000000000000000000000000000000000000000000000000000.png */
  img: string;
  /** @example Text */
  description: string;
  /** @example {"name":"","icon":""} */
  category: CategoryTokenDto;
  /** @example [{}] */
  properties: TokenPropertiesDto[];
  /**
   * @example {
   *     "name": "Catherine",
   *     "description": "",
   *     "image": "ipfs://QmQe9r3YJQJ7ZuACmN3qhZN1BZSKFDHGsnCAQCmcpkFETQ/0000000000000000000000000000000000000000000000000000000000000000.png",
   *     "properties": {
   *       "Type": "Avatars"
   *
   *
   *     }
   *   }
   */
  metaOriginal: string;
  /** @example {"name":"Catherine","description":"","image":"ipfs://QmQe9r3YJQJ7ZuACmN3qhZN1BZSKFDHGsnCAQCmcpkFETQ/0000000000000000000000000000000000000000000000000000000000000000.png","properties":{"Type":"Avatars"}} */
  metaPrepared: MetaPrepared;
}
export interface ProfileObj {
  /** @example 0xf26878E24980Ec90884E29694B86A4193E6f9001 */
  contractAddress: string;
  /** @example user123 */
  username: string;
  /** @example true */
  lock: boolean;
  avatar: Avatar;
}
export interface Profile {
  /** @example ZOA Starships */
  name: string;
  /** @example ZOASTARSHIP */
  symbol: string;
  /** @example 18 */
  decimal: number;
  /** @example ERC1155 */
  standard: "ERC1155" | "ERC721" | "ERC20";
  /** @example ERC1155 */
  type: "ERC1155" | "ERC721" | "ERC20" | "ERC20WRAP" | "GAMEFI" | "AVATARS" | "BOXES";
  /** @example 0xF91859002458d33E4B54622a28ceaD479AC69A20 */
  smartContract: string;
  /** @example 0 */
  tokenId: number;
  /** @example https://bold-point.mypinata.cloud/ipfs/QmeuRTHJce1q5GdmEXpoMNLjfXVPPW76UgVNXzeVM7F42P/0000000000000000000000000000000000000000000000000000000000000000.jpg */
  img: string;
  /** @example Text */
  description: string;
  category: CategoryTokenDto;
  properties: TokenPropertiesDto[];
  /**
   * @example {
   *     "name": "ZERA",
   *     "description": "Text",
   *     "image": "ipfs://QmeuRTHJce1q5GdmEXpoMNLjfXVPPW76UgVNXzeVM7F42P/0000000000000000000000000000000000000000000000000000000000000000.jpg",
   *     "properties": {
   *       "Type": "Spaceships",
   *       "Slots": "20"
   *
   *     }
   *   }
   */
  metaOriginal: string;
  metaPrepared: MetaPrepared;
  profile: ProfileObj;
  /** @example 1000000000000000000000010 */
  amount: string;
  /** @example 1000000000000000000000010 */
  preparedAmount: string;
}
export interface LootBox {
  /** @example ZOA Starships */
  name: string;
  /** @example ZOASTARSHIP */
  symbol: string;
  /** @example 18 */
  decimal: number;
  /** @example ERC1155 */
  standard: "ERC1155" | "ERC721" | "ERC20";
  /** @example ERC1155 */
  type: "ERC1155" | "ERC721" | "ERC20" | "ERC20WRAP" | "GAMEFI" | "AVATARS" | "BOXES";
  /** @example 0xF91859002458d33E4B54622a28ceaD479AC69A20 */
  smartContract: string;
  /** @example 0 */
  tokenId: number;
  /** @example https://bold-point.mypinata.cloud/ipfs/QmeuRTHJce1q5GdmEXpoMNLjfXVPPW76UgVNXzeVM7F42P/0000000000000000000000000000000000000000000000000000000000000000.jpg */
  img: string;
  /** @example Text */
  description: string;
  category: CategoryTokenDto;
  properties: TokenPropertiesDto[];
  /**
   * @example {
   *     "name": "ZERA",
   *     "description": "Text",
   *     "image": "ipfs://QmeuRTHJce1q5GdmEXpoMNLjfXVPPW76UgVNXzeVM7F42P/0000000000000000000000000000000000000000000000000000000000000000.jpg",
   *     "properties": {
   *       "Type": "Spaceships",
   *       "Slots": "20"
   *
   *     }
   *   }
   */
  metaOriginal: string;
  metaPrepared: MetaPrepared;
  /** @example 1000000000000000000000010 */
  amount: string;
  /** @example 1000000000000000000000010 */
  preparedAmount: string;
}
export interface GetAssetsResponseDto {
  ERC1155: Token[];
  ERC721: Token[];
  ERC20: Token[];
  ERC20WRAP: Token[];
  GAMEFI: Profile[];
  AVATARS: Token[];
  BOXES: LootBox[];
}
export interface SmartContract {
  /** @example 12b0196e-971e-4016-815c-c5a3e0367eef */
  id: string;
  /** @example 2022-08-08T03:50:21.725Z */
  createdAt: string;
  /** @example 2022-08-08T21:57:54.902Z */
  updatedAt: string;
  /** @example MARKETPLACE */
  typeContract: object;
  /** @example 0xf02a7de5847a5e95b3744c27aec5b6fc41c97b96 */
  address: string;
  /** @example 10162097 */
  blockInit: number;
  /** @example 12338033 */
  blockCurrent: number;
  /** @example [{"inputs":[],"stateMutability":"nonpayable","type":"constructor","signature":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":true,"internalType":"address","name":"erc20","type":"address"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"AddSettlementToken","type":"event","funcName":"AddSettlementToken(address,address,uint256)","signature":"0xb6bc68a327f69f0090d572cdeba51286846964554158ba47c6904252d18957e1"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":true,"internalType":"address","name":"erc1155","type":"address"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"AddToWhitelistErc1155","type":"event","funcName":"AddToWhitelistErc1155(address,address,uint256)","signature":"0x91d8d08c5b65a682073e8970f8a87206f043ed172a10c8b0484d3c45bc5a74c3"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":true,"internalType":"address","name":"erc721","type":"address"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"AddToWhitelistErc721","type":"event","funcName":"AddToWhitelistErc721(address,address,uint256)","signature":"0x0dc6f90db6ab4268436dcd12671715a4c5cd6e0ced8cf04dd11868e34f7ccdc6"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":true,"internalType":"uint256","name":"orderId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"CancelOrder","type":"event","funcName":"CancelOrder(address,uint256,uint256)","signature":"0x1e0e8a7901ee871b939f18e3937f188af21bf9885762ec9c84917abc9fbaf1fa"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"orderId","type":"uint256"},{"indexed":false,"internalType":"enum IGameFiMarketplaceV1.NFTStandart","name":"nftStandart","type":"uint8"},{"indexed":true,"internalType":"address","name":"tokenContract","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokenAmount","type":"uint256"},{"indexed":false,"internalType":"address","name":"mainSettlementToken","type":"address"},{"indexed":false,"internalType":"address[]","name":"otherSettlementTokens","type":"address[]"},{"indexed":false,"internalType":"uint256","name":"orderPrice","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"CreateOrder","type":"event","funcName":"CreateOrder(address,uint256,uint8,address,uint256,uint256,address,address[],uint256,uint256)","signature":"0xab7f8a7374eafcf35d52ac394fe12799c3d0bf47845b696b81a9827335290034"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":true,"internalType":"uint256","name":"orderId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"fee","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"ExecuteOrder","type":"event","funcName":"ExecuteOrder(address,uint256,uint256,uint256)","signature":"0xcc0b57fd9b31ecaaa759f5f5d2bb7eff73af8842cdc46ca66ab271ba43529c96"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event","funcName":"Initialized(uint8)","signature":"0x7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":true,"internalType":"address","name":"erc1155","type":"address"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"RemoveFromWhitelistErc1155","type":"event","funcName":"RemoveFromWhitelistErc1155(address,address,uint256)","signature":"0x1dc7d0a9561a5545f6d86645f8ac94b5f22859665ef92561ccb238907c87ed73"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":true,"internalType":"address","name":"erc721","type":"address"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"RemoveFromWhitelistErc721","type":"event","funcName":"RemoveFromWhitelistErc721(address,address,uint256)","signature":"0x9417ecf6182f4ff7fc7ee28f95c2c91e7731191d3276beffabc25b4e1c7a6891"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":true,"internalType":"address","name":"erc20","type":"address"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"RemoveSettlementToken","type":"event","funcName":"RemoveSettlementToken(address,address,uint256)","signature":"0x8c8108624bc7a19084d357f158c4cdaf68cd94d8dd3e56848af608a57d7da175"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":true,"internalType":"uint256","name":"newTradeFeePercentage","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"SetTradeFeePercentage","type":"event","funcName":"SetTradeFeePercentage(address,uint256,uint256)","signature":"0x0df6d9751872ab0851a8f185aca4bf688f930a4370b16328260e879bd667802a"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":true,"internalType":"address","name":"tokenContract","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"WithdrawERC20","type":"event","funcName":"WithdrawERC20(address,address,uint256,uint256)","signature":"0x96568b8cd8bec3b3f1734539526708d2164d43d3fc86a093a56d6b936665839e"},{"inputs":[{"internalType":"address","name":"erc20","type":"address"}],"name":"addSettlementToken","outputs":[],"stateMutability":"nonpayable","type":"function","funcName":"addSettlementToken(address)","signature":"0x37156dc3"},{"inputs":[{"internalType":"address","name":"erc1155","type":"address"}],"name":"addToWhitelistErc1155","outputs":[],"stateMutability":"nonpayable","type":"function","funcName":"addToWhitelistErc1155(address)","signature":"0xd77e8117"},{"inputs":[{"internalType":"address","name":"erc721","type":"address"}],"name":"addToWhitelistErc721","outputs":[],"stateMutability":"nonpayable","type":"function","funcName":"addToWhitelistErc721(address)","signature":"0xdba156a7"},{"inputs":[{"internalType":"uint256","name":"orderId","type":"uint256"}],"name":"cancelOrder","outputs":[],"stateMutability":"nonpayable","type":"function","funcName":"cancelOrder(uint256)","signature":"0x514fcac7"},{"inputs":[{"internalType":"address","name":"erc20","type":"address"}],"name":"containsSettlementToken","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"funcName":"containsSettlementToken(address)","signature":"0xe316784d"},{"inputs":[{"internalType":"address","name":"erc1155","type":"address"}],"name":"containsWhitelistErc1155","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"funcName":"containsWhitelistErc1155(address)","signature":"0x4135a4ef"},{"inputs":[{"internalType":"address","name":"erc721","type":"address"}],"name":"containsWhitelistErc721","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"funcName":"containsWhitelistErc721(address)","signature":"0x11c27d86"},{"inputs":[{"internalType":"enum IGameFiMarketplaceV1.NFTStandart","name":"nftStandart","type":"uint8"},{"internalType":"address","name":"tokenContract","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"tokenAmount","type":"uint256"},{"internalType":"address","name":"mainSettlementToken","type":"address"},{"internalType":"address[]","name":"otherSettlementTokens","type":"address[]"},{"internalType":"uint256","name":"orderPrice","type":"uint256"}],"name":"createOrder","outputs":[{"internalType":"uint256","name":"orderId","type":"uint256"}],"stateMutability":"nonpayable","type":"function","funcName":"createOrder(uint8,address,uint256,uint256,address,address[],uint256)","signature":"0x6c3c5753"},{"inputs":[{"internalType":"uint256","name":"orderId","type":"uint256"}],"name":"executeOrder","outputs":[],"stateMutability":"nonpayable","type":"function","funcName":"executeOrder(uint256)","signature":"0x94f61134"},{"inputs":[{"internalType":"enum IGameFiMarketplaceV1.OrderStatus","name":"byStatus","type":"uint8"},{"internalType":"uint256","name":"cursor","type":"uint256"},{"internalType":"uint256","name":"howMany","type":"uint256"}],"name":"fetchOrdersBy","outputs":[{"internalType":"uint256[]","name":"orderIds","type":"uint256[]"},{"internalType":"uint256","name":"newCursor","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"funcName":"fetchOrdersBy(uint8,uint256,uint256)","signature":"0x1b8a1325"},{"inputs":[{"internalType":"address","name":"byUser","type":"address"},{"internalType":"enum IGameFiMarketplaceV1.OrderStatus","name":"byStatus","type":"uint8"},{"internalType":"uint256","name":"cursor","type":"uint256"},{"internalType":"uint256","name":"howMany","type":"uint256"}],"name":"fetchOrdersBy","outputs":[{"internalType":"uint256[]","name":"orderIds","type":"uint256[]"},{"internalType":"uint256","name":"newCursor","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"funcName":"fetchOrdersBy(address,uint8,uint256,uint256)","signature":"0xb35444b7"},{"inputs":[],"name":"getSettlementTokens","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function","constant":true,"funcName":"getSettlementTokens()","signature":"0x9e70eb33"},{"inputs":[],"name":"getWhitelistErc1155","outputs":[{"internalType":"address[]","name":"erc1155","type":"address[]"}],"stateMutability":"view","type":"function","constant":true,"funcName":"getWhitelistErc1155()","signature":"0xce8e0ddb"},{"inputs":[],"name":"getWhitelistErc721","outputs":[{"internalType":"address[]","name":"erc721","type":"address[]"}],"stateMutability":"view","type":"function","constant":true,"funcName":"getWhitelistErc721()","signature":"0x7c34aa87"},{"inputs":[{"internalType":"address","name":"gameFiCore","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function","funcName":"initialize(address)","signature":"0xc4d66de8"},{"inputs":[{"internalType":"address","name":"forwarder","type":"address"}],"name":"isTrustedForwarder","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"funcName":"isTrustedForwarder(address)","signature":"0x572b6c05"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"onERC1155BatchReceived","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function","funcName":"onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)","signature":"0xbc197c81"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"onERC1155Received","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function","funcName":"onERC1155Received(address,address,uint256,uint256,bytes)","signature":"0xf23a6e61"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"onERC721Received","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function","funcName":"onERC721Received(address,address,uint256,bytes)","signature":"0x150b7a02"},{"inputs":[{"internalType":"uint256","name":"orderId","type":"uint256"}],"name":"orderDetails","outputs":[{"components":[{"internalType":"uint256","name":"orderId","type":"uint256"},{"internalType":"enum IGameFiMarketplaceV1.NFTStandart","name":"nftStandart","type":"uint8"},{"internalType":"address","name":"tokenContract","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"tokenAmount","type":"uint256"},{"internalType":"address","name":"mainSettlementToken","type":"address"},{"internalType":"address[]","name":"otherSettlementTokens","type":"address[]"},{"internalType":"uint256","name":"orderPrice","type":"uint256"},{"internalType":"enum IGameFiMarketplaceV1.OrderStatus","name":"status","type":"uint8"},{"internalType":"address","name":"seller","type":"address"},{"internalType":"address","name":"buyer","type":"address"}],"internalType":"struct IGameFiMarketplaceV1.Order","name":"","type":"tuple"}],"stateMutability":"view","type":"function","constant":true,"funcName":"orderDetails(uint256)","signature":"0xff22fb00"},{"inputs":[{"internalType":"uint256[]","name":"orderIds","type":"uint256[]"}],"name":"orderDetailsBatch","outputs":[{"components":[{"internalType":"uint256","name":"orderId","type":"uint256"},{"internalType":"enum IGameFiMarketplaceV1.NFTStandart","name":"nftStandart","type":"uint8"},{"internalType":"address","name":"tokenContract","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"tokenAmount","type":"uint256"},{"internalType":"address","name":"mainSettlementToken","type":"address"},{"internalType":"address[]","name":"otherSettlementTokens","type":"address[]"},{"internalType":"uint256","name":"orderPrice","type":"uint256"},{"internalType":"enum IGameFiMarketplaceV1.OrderStatus","name":"status","type":"uint8"},{"internalType":"address","name":"seller","type":"address"},{"internalType":"address","name":"buyer","type":"address"}],"internalType":"struct IGameFiMarketplaceV1.Order[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function","constant":true,"funcName":"orderDetailsBatch(uint256[])","signature":"0x6a4405ab"},{"inputs":[{"internalType":"address","name":"erc1155","type":"address"}],"name":"removeFromWhitelistErc1155","outputs":[],"stateMutability":"nonpayable","type":"function","funcName":"removeFromWhitelistErc1155(address)","signature":"0xda8a764f"},{"inputs":[{"internalType":"address","name":"erc721","type":"address"}],"name":"removeFromWhitelistErc721","outputs":[],"stateMutability":"nonpayable","type":"function","funcName":"removeFromWhitelistErc721(address)","signature":"0x5e2f8384"},{"inputs":[{"internalType":"address","name":"erc20","type":"address"}],"name":"removeSettlementToken","outputs":[],"stateMutability":"nonpayable","type":"function","funcName":"removeSettlementToken(address)","signature":"0x8e1c2a44"},{"inputs":[{"internalType":"uint256","name":"newTradeFeePercentage","type":"uint256"}],"name":"setTradeFeePercentage","outputs":[],"stateMutability":"nonpayable","type":"function","funcName":"setTradeFeePercentage(uint256)","signature":"0xf496f8b2"},{"inputs":[{"internalType":"address","name":"newTrustedForwarder","type":"address"}],"name":"setTrustedForwarder","outputs":[],"stateMutability":"nonpayable","type":"function","funcName":"setTrustedForwarder(address)","signature":"0xda742228"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true,"funcName":"supportsInterface(bytes4)","signature":"0x01ffc9a7"},{"inputs":[],"name":"totalOrders","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"funcName":"totalOrders()","signature":"0x1d834409"},{"inputs":[{"internalType":"enum IGameFiMarketplaceV1.OrderStatus","name":"byStatus","type":"uint8"}],"name":"totalOrdersBy","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"funcName":"totalOrdersBy(uint8)","signature":"0xf06ad531"},{"inputs":[],"name":"tradeFeePercentage","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true,"funcName":"tradeFeePercentage()","signature":"0x0da14a87"},{"inputs":[],"name":"trustedForwarder","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true,"funcName":"trustedForwarder()","signature":"0x7da0a877"},{"inputs":[],"name":"versionRecipient","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function","constant":true,"funcName":"versionRecipient()","signature":"0x486ff0cd"},{"inputs":[{"internalType":"address","name":"erc20","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawERC20","outputs":[],"stateMutability":"nonpayable","type":"function","funcName":"withdrawERC20(address,uint256)","signature":"0xa1db9782"}] */
  abi: string[];
}
export interface GetSettingsResponseDto {
  /** @example ZOA */
  appName: string;
  /** @example 43113 */
  blockchainId: string;
  smartContracts: SmartContract[];
}
export interface GetSCImplTypesResponseDto {
  /** @example 12b0196e-971e-4016-815c-c5a3e0367eef */
  id: string;
  /** @example 2022-08-08T03:50:21.725Z */
  createdAt: string;
  /** @example 2022-08-08T21:57:54.902Z */
  updatedAt: string;
  /** @example gameFiCoreV2Impl */
  scImplType:
    | "gameFiCoreV2Impl"
    | "gameFiProfileVaultV2Impl"
    | "gameFiTokenERC20Impl"
    | "gameFiTokenERC721Impl"
    | "gameFiTokenERC1155Impl"
    | "gameFiAvatarERC1155Impl"
    | "gameFiBoxERC1155Impl"
    | "gameFiWrapperERC20Impl"
    | "gameFiShopV1Impl"
    | "gameFiMarketplaceV1Impl"
    | "zoaRouterV1Impl"
    | "multiTransactorV2Impl";
  /** @example 43113 */
  chainId: number;
  /**
   * Smart contract address
   * @example 0xA3bA5F4C32d73Eb84364A797381172171e1D5976
   */
  address: string;
}
export interface HistoryPrice {
  /** @example 2022-08-10 */
  date: string;
  /** @example 1 */
  value: string;
}
export interface BaseToken {
  /** @example ZOA */
  name: string;
  /** @example 0xf79e8bc63cbc325bcf780caa848c044454489117 */
  smartContract: string;
  /** @example https://gameficore.s3.eu-west-2.amazonaws.com/zoa/tokens/erc20/ZOA.svg */
  icon: string;
  /** @example 18 */
  decimal: number;
  /** @example 0 */
  minPrice: string;
  /** @example 99999999 */
  maxPrice: string;
}
export interface GetHistoryPriceResponseDto {
  list: HistoryPrice[];
  token: BaseToken;
}
export interface GetCategoriesProfileResponseDto {
  /** @example 1 */
  id: number;
  /** @example icon_text */
  typeView: object;
  /** @example HEROES */
  text: string;
  /** @example https://gameficore.s3.eu-west-2.amazonaws.com/zoa/nft-marketplace/categories/heroes.svg */
  icon: string;
  /** @example 0 */
  order: number;
  /** @example ["0x6985Ce88e88373DeF7c0bAC9580Ee291E4FA9241"] */
  smartContracts: string[];
}
export interface GetPhraseRequestDto {
  /** @example 0x2144aB076F20499a6e932Bb0BBB57a4EdEdc82Ea */
  wallet: string;
  /** @example AUTH */
  requestType: "AUTH" | "ADD_OPERATOR";
}
export interface GetPhraseResponseDto {
  /** @example I want to verify my wallet ownership № 0x4a2ebc63233d160b */
  phrase: string;
  /** @example 1660774960 */
  expires_in: number;
}
export interface CheckPhraseRequestDto {
  /** @example 0x2144aB076F20499a6e932Bb0BBB57a4EdEdc82Ea */
  wallet: string;
  phrase: string;
  signedPhrase: string;
  /** @example GAME */
  source: "GAME" | "ADMIN" | "CABINET" | "MARKETPLACE";
}
export interface CheckPhraseResponseDto {
  /** @example true */
  status: boolean;
  /** @example 1660904180 */
  expires_in: number;
}
export interface GetCategoriesResponseDto {
  /** @example 1 */
  id: number;
  /** @example icon_text */
  typeView: object;
  /** @example HEROES */
  text: string;
  /** @example https://gameficore.s3.eu-west-2.amazonaws.com/zoa/nft-marketplace/categories/heroes.svg */
  icon: string;
  /** @example 0 */
  order: number;
  /** @example 0x6985Ce88e88373DeF7c0bAC9580Ee291E4FA9241 */
  smartContract: string;
}
export interface Property {
  /** @example icon_text */
  typeView: object;
  /** @example Raddans */
  name: string;
  /** @example https://gameficore.s3.eu-west-2.amazonaws.com/zoa/tokens/erc1155/heroes/Hero+race/raddans.png */
  icon: string;
}
export interface Filter {
  /** @example Hero race */
  name: string;
  /** @example true */
  viewDescription: boolean;
  /** @example text */
  description: string;
  properties: Property[];
}
export interface GetFilterResponseDto {
  /** @example 1 */
  id: number;
  /** @example 1 */
  categoryId: number;
  filters: Filter[];
  tokens: BaseToken[];
}
export interface TokenRequestDto {
  /** @example 0xf79e8bc63cbc325bcf780caa848c044454489117 */
  address: string;
  /** @example 0 */
  min: string;
  /** @example 9999999999999 */
  max: string;
}
export interface ParamMarketplaceRequestDto {
  name: string;
  values: string[];
}
export interface GetOrdersRequestDto {
  collection: string;
  mainSettlementToken: string;
  tokens: TokenRequestDto[];
  params: ParamMarketplaceRequestDto[];
  take: number;
  skip: number;
  sortBy: "LOWEST_PRICE" | "HIGHEST_PRICE" | "LATEST";
}
export interface TokenInDto {
  /** @example ZOA Starships */
  name: string;
  /** @example ZOASTARSHIP */
  symbol: string;
  /** @example 18 */
  decimal: number;
  /** @example ERC1155 */
  standard: "ERC1155" | "ERC721" | "ERC20";
  /** @example ERC1155 */
  type: "ERC1155" | "ERC721" | "ERC20" | "ERC20WRAP" | "GAMEFI" | "AVATARS" | "BOXES";
  /** @example 0xF91859002458d33E4B54622a28ceaD479AC69A20 */
  smartContract: string;
  /** @example 0 */
  tokenId: number;
  /** @example https://bold-point.mypinata.cloud/ipfs/QmeuRTHJce1q5GdmEXpoMNLjfXVPPW76UgVNXzeVM7F42P/0000000000000000000000000000000000000000000000000000000000000000.jpg */
  img: string;
  /** @example Text */
  description: string;
  category: CategoryTokenDto;
  properties: TokenPropertiesDto[];
  /**
   * @example {
   *     "name": "ZERA",
   *     "description": "Text",
   *     "image": "ipfs://QmeuRTHJce1q5GdmEXpoMNLjfXVPPW76UgVNXzeVM7F42P/0000000000000000000000000000000000000000000000000000000000000000.jpg",
   *     "properties": {
   *       "Type": "Spaceships",
   *       "Slots": "20"
   *
   *     }
   *   }
   */
  metaOriginal: string;
  metaPrepared: MetaPrepared;
  /** @example https://gameficore.s3.eu-west-2.amazonaws.com/zoa/tokens/erc20/ZOA.svg */
  icon: string;
}
export interface TokenOutDto {
  /** @example ZOA Starships */
  name: string;
  /** @example ZOASTARSHIP */
  symbol: string;
  /** @example 18 */
  decimal: number;
  /** @example ERC1155 */
  standard: "ERC1155" | "ERC721" | "ERC20";
  /** @example ERC1155 */
  type: "ERC1155" | "ERC721" | "ERC20" | "ERC20WRAP" | "GAMEFI" | "AVATARS" | "BOXES";
  /** @example 0xF91859002458d33E4B54622a28ceaD479AC69A20 */
  smartContract: string;
  /** @example 0 */
  tokenId: number;
  /** @example https://bold-point.mypinata.cloud/ipfs/QmeuRTHJce1q5GdmEXpoMNLjfXVPPW76UgVNXzeVM7F42P/0000000000000000000000000000000000000000000000000000000000000000.jpg */
  img: string;
  /** @example Text */
  description: string;
  category: CategoryTokenDto;
  properties: TokenPropertiesDto[];
  /**
   * @example {
   *     "name": "ZERA",
   *     "description": "Text",
   *     "image": "ipfs://QmeuRTHJce1q5GdmEXpoMNLjfXVPPW76UgVNXzeVM7F42P/0000000000000000000000000000000000000000000000000000000000000000.jpg",
   *     "properties": {
   *       "Type": "Spaceships",
   *       "Slots": "20"
   *
   *     }
   *   }
   */
  metaOriginal: string;
  metaPrepared: MetaPrepared;
  /** @example ERC1155 */
  standart: "ERC1155" | "ERC721" | "ERC20" | "ERC20WRAP" | "GAMEFI" | "AVATARS" | "BOXES";
  /** @example 1 */
  count: string;
}
export interface GetOrderResponseDto {
  /** @example 14 */
  orderID: number;
  /** @example 1 */
  orderStatus: "NULL" | "OPEN" | "CANCELLED" | "EXECUTED" | "ANY";
  /** @example 0x2144aB076F20499a6e932Bb0BBB57a4EdEdc82Ea */
  seller: string;
  /** @example null */
  executeUser: string | null;
  /** @example null */
  cancelUser: string | null;
  /** @example 30000000000000000000000000 */
  price: string;
  /** @example 30000000 */
  preparedPrice: string;
  tokenIn: TokenInDto;
  tokenOut: TokenOutDto;
}
export interface GetOrdersResponseDto {
  list: GetOrderResponseDto[];
  /** @example 1 */
  count: number;
}
export interface GetImplementTokensResponseDto {
  /** @example ZOA */
  name: string;
  /** @example 0xf79e8bc63cbc325bcf780caa848c044454489117 */
  smartContract: string;
  /** @example https://gameficore.s3.eu-west-2.amazonaws.com/zoa/tokens/erc20/ZOA.svg */
  icon: string;
  /** @example 18 */
  decimal: number;
}
export interface Collection {
  /** @example 1 */
  id: number;
  /** @example ZOA Heroes */
  name: string;
  /** @example 10 */
  countAssets: string;
  /** @example 0x6985Ce88e88373DeF7c0bAC9580Ee291E4FA9241 */
  addressSc: string;
  /** @example ERC1155 */
  type: "NULL" | "ERC20" | "ERC721" | "ERC1155";
}
export interface GetDetailsResponseDto {
  /** @example 10 */
  countCollections: number;
  /** @example 1000000 */
  countItems: string;
  items: Collection[];
  /** @example 0 */
  skip: number;
  /** @example 15 */
  take: number;
  /** @example 10 */
  count: number;
}
export interface MainToken {
  /** @example ZOA Testnet */
  name: string;
  /** @example ZOA */
  symbol: string;
  /** @example 0xF79e8bc63CbC325Bcf780cAA848C044454489117 */
  address: string;
}
export interface CollectionEntity {
  /** @example 1 */
  id: number;
  /** @example Draxler */
  name: string;
  /** @example 60000006000061800 */
  totalSupply: string;
  /** @example 10 */
  totalHolders: number;
  /** @example 1661837650 */
  dateOfCreation: number;
}
export interface GetCollectionResponseDto {
  /** @example 1 */
  id: number;
  /** @example ZOA Heroes */
  name: string;
  /** @example ZOAHERO */
  symbol: string;
  mainToken?: MainToken;
  /** @example ERC1155 */
  type: "NULL" | "ERC20" | "ERC721" | "ERC1155";
  /** @example 7 */
  countEntity: number;
  /** @example 60000006000061800 */
  totalSupply: string;
  /** @example 100 */
  totalHolders: number;
  /** @example 1661837650 */
  dateOfCreation: number;
  /** @example 0x6985Ce88e88373DeF7c0bAC9580Ee291E4FA9241 */
  address: string;
  entities: CollectionEntity[];
  /** @example 0 */
  skip: number;
  /** @example 15 */
  take: number;
  /** @example 10 */
  count: number;
}
export interface GetEntityResponseDto {
  /** @example Draxler */
  name: string;
  /** @example Born on Syndicate 5, Draxler was always the best of the best. Destined for greatness, he grew weary of the oppression he felt at the Syndicate military academy. After staging a riot to escape, he knew he could never return to his home on Syndicate 5. Thus he began his free life as a mercenary. */
  description: string;
  /** @example 1 */
  collectionId: number;
  /** @example 8061 */
  totalSupply: string;
  /** @example 14 */
  totalHolders: number;
  /** @example 1661837650 */
  dateOfCreation: number;
  meta: Avatar;
}
export interface GetItemResponseDto {
  /** @example Winchester */
  name: string;
  /** @example https://bold-point.mypinata.cloud/ipfs/Qmd63wbD51DXWszyNd6cZgYm5DfinXfjJukAiVw898hJCW/0000000000000000000000000000000000000000000000000000000000000000.png */
  img: string;
  /** @example 0x2144aB076F20499a6e932Bb0BBB57a4EdEdc82Ea */
  address: string;
  /** @example 100 */
  amount: string;
  /** @example USER */
  ownerType: "SC" | "USER" | "PROFILE";
  /** @example false */
  isLocked: boolean;
}
export interface GetItemsResponseDto {
  items: GetItemResponseDto[];
  /** @example 0 */
  skip: number;
  /** @example 15 */
  take: number;
  /** @example 10 */
  count: number;
}
export interface GetItemRequestBodyDto {
  /**
   * Smart contract address
   * @example 0x6985Ce88e88373DeF7c0bAC9580Ee291E4FA9241
   */
  smartContract: string;
  /** @example 0 */
  tokenId: number;
}
export interface GetPropertiesResponseDto {
  /** @example {"Type":"Heroes","Hero race":"Syndicate","Attack type":"Melee","Hero type":"Carry","Tier":"Epic"} */
  properties: object;
}
export interface LootboxEntity {
  /** @example 1 */
  id: number;
  /** @example Starter Pack */
  name: string;
  /** @example https://bold-point.mypinata.cloud/ipfs/QmXBrQei7aN3HYx2LY1BMbk4EVHdvjDvGHkJwSa7rAZY4t/0000000000000000000000000000000000000000000000000000000000000000.gif */
  img: string;
  /** @example 10000 */
  countItems: string;
  /** @example 50 */
  countOpenedBoxes: number;
  /** @example Lootbox */
  type: string;
}
export interface GetLootboxesResponseDto {
  /** @example 10 */
  countLootboxes: number;
  /** @example 100 */
  countOpenedBoxes: number;
  entities: LootboxEntity[];
  /** @example 0 */
  skip: number;
  /** @example 15 */
  take: number;
  /** @example 10 */
  count: number;
}
export interface GetBoxEntityResponseDto {
  /** @example 1 */
  id: number;
  /** @example 1 */
  collectionId: number;
  /** @example Starter Pack */
  name: string;
  /**
   * @example Drop rate:
   * HERO x10
   * SPACESHIP x1 (8 slots)
   * ITEM x1
   */
  description: string;
  /** @example 10289 */
  countAssets: string;
  /** @example 0x81aAD04b12e45734c4228FCC24D74ff14423a0f5 */
  address: string;
  /** @example Lootbox */
  type: string;
  /** @example 1661837650 */
  dateOfCreation: number;
  meta: TokenDto;
}
export interface DropDownItem {
  /** @example Heroes */
  collection: string;
  /** @example Winchester */
  entity: string;
  /** @example 10 */
  chance: number;
}
export interface GetBoxPropertiesResponseDto {
  /** @example {"Type":"Box","Box type":"Starter"} */
  properties: object;
  dropDownItems: DropDownItem[];
  /** @example 100 */
  totalDropChance: number;
}
export interface Item {
  /** @example Winchester */
  name: string;
  /** @example https://bold-point.mypinata.cloud/ipfs/Qmd63wbD51DXWszyNd6cZgYm5DfinXfjJukAiVw898hJCW/0000000000000000000000000000000000000000000000000000000000000000.png */
  img: string;
  /** @example 0x2144aB076F20499a6e932Bb0BBB57a4EdEdc82Ea */
  address: string;
  /** @example 100 */
  amount: string;
  /** @example USER */
  ownerType: "SC" | "USER" | "PROFILE";
  /** @example false */
  isLocked: boolean;
}
export interface GetBoxItemsResponseDto {
  items: Item[];
  /** @example 0 */
  skip: number;
  /** @example 15 */
  take: number;
  /** @example 10 */
  count: number;
}
export interface BoxReward {
  /** @example Scout */
  name: string;
  /** @example https://bold-point.mypinata.cloud/ipfs/Qmd63wbD51DXWszyNd6cZgYm5DfinXfjJukAiVw898hJCW/0000000000000000000000000000000000000000000000000000000000000010.png */
  img: string;
  /** @example 0x6985Ce88e88373DeF7c0bAC9580Ee291E4FA9241 */
  address: string;
  /** @example 0x6021617C52419A1D18b9588Af8bE95197885D3C0 */
  openBy: string;
  /** @example ERC1155 */
  type: string;
  /** @example 1662473499 */
  dateOfOpen: number;
  /** @example 0x2cb6c3a8848bf95da849d66d6d182da579a659bea47d4907ec965c3794932cd3 */
  txHash: string;
}
export interface OpenedBox {
  /** @example 12b0196e-971e-4016-815c-c5a3e0367eef */
  id: string;
  /** @example Starter Pack */
  name: string;
  /** @example https://bold-point.mypinata.cloud/ipfs/QmXBrQei7aN3HYx2LY1BMbk4EVHdvjDvGHkJwSa7rAZY4t/0000000000000000000000000000000000000000000000000000000000000000.gif */
  img: string;
  /** @example 0x81aAD04b12e45734c4228FCC24D74ff14423a0f5 */
  address: string;
  /** @example 0x3a5557ECE3Cb2804d649fed545d5FbAF1b667D2B */
  openBy: string;
  /** @example LootBox */
  type: string;
  /** @example 1662473499 */
  dateOfOpen: number;
  /** @example 0x2cb6c3a8848bf95da849d66d6d182da579a659bea47d4907ec965c3794932cd3 */
  txHash: string;
  rewards: BoxReward[];
}
export interface GetOpenedBoxesResponseDto {
  items: OpenedBox[];
  /** @example 0 */
  skip: number;
  /** @example 15 */
  take: number;
  /** @example 10 */
  count: number;
}
export interface GetProfilesResponseDto {
  items: Item[];
  /** @example 0 */
  skip: number;
  /** @example 15 */
  take: number;
  /** @example 10 */
  count: number;
}
export interface ProfileDto {
  /** @example ZOA Starships */
  name: string;
  /** @example ZOASTARSHIP */
  symbol: string;
  /** @example 18 */
  decimal: number;
  /** @example ERC1155 */
  standard: "ERC1155" | "ERC721" | "ERC20";
  /** @example ERC1155 */
  type: "ERC1155" | "ERC721" | "ERC20" | "ERC20WRAP" | "GAMEFI" | "AVATARS" | "BOXES";
  /** @example 0xF91859002458d33E4B54622a28ceaD479AC69A20 */
  smartContract: string;
  /** @example 0 */
  tokenId: number;
  /** @example https://bold-point.mypinata.cloud/ipfs/QmeuRTHJce1q5GdmEXpoMNLjfXVPPW76UgVNXzeVM7F42P/0000000000000000000000000000000000000000000000000000000000000000.jpg */
  img: string;
  /** @example Text */
  description: string;
  category: CategoryTokenDto;
  properties: TokenPropertiesDto[];
  /**
   * @example {
   *     "name": "ZERA",
   *     "description": "Text",
   *     "image": "ipfs://QmeuRTHJce1q5GdmEXpoMNLjfXVPPW76UgVNXzeVM7F42P/0000000000000000000000000000000000000000000000000000000000000000.jpg",
   *     "properties": {
   *       "Type": "Spaceships",
   *       "Slots": "20"
   *
   *     }
   *   }
   */
  metaOriginal: string;
  metaPrepared: MetaPrepared;
  profile: ProfileObj;
}
export interface GetProfileResponseDto {
  /** @example 1 */
  id: number;
  /** @example 0xf26878E24980Ec90884E29694B86A4193E6f9001 */
  creator: string;
  /** @example 0xf26878E24980Ec90884E29694B86A4193E6f9001 */
  owner: string;
  /** @example 1659006960 */
  dateOfCreate: number;
  meta: ProfileDto;
}
export interface ProfileAssetItem {
  /** @example ZOA Starships */
  name: string;
  /** @example ZOASTARSHIP */
  symbol: string;
  /** @example 18 */
  decimal: number;
  /** @example ERC1155 */
  standard: "ERC1155" | "ERC721" | "ERC20";
  /** @example ERC1155 */
  type: "ERC1155" | "ERC721" | "ERC20" | "ERC20WRAP" | "GAMEFI" | "AVATARS" | "BOXES";
  /** @example 0xF91859002458d33E4B54622a28ceaD479AC69A20 */
  smartContract: string;
  /** @example 0 */
  tokenId: number;
  /** @example https://bold-point.mypinata.cloud/ipfs/QmeuRTHJce1q5GdmEXpoMNLjfXVPPW76UgVNXzeVM7F42P/0000000000000000000000000000000000000000000000000000000000000000.jpg */
  img: string;
  /** @example Text */
  description: string;
  category: CategoryTokenDto;
  properties: TokenPropertiesDto[];
  /**
   * @example {
   *     "name": "ZERA",
   *     "description": "Text",
   *     "image": "ipfs://QmeuRTHJce1q5GdmEXpoMNLjfXVPPW76UgVNXzeVM7F42P/0000000000000000000000000000000000000000000000000000000000000000.jpg",
   *     "properties": {
   *       "Type": "Spaceships",
   *       "Slots": "20"
   *
   *     }
   *   }
   */
  metaOriginal: string;
  metaPrepared: MetaPrepared;
  /** @example 1 */
  collectionId: number;
}
export interface GetProfileAssetsResponseDto {
  /** @example 0xf26878E24980Ec90884E29694B86A4193E6f9001 */
  owner: string;
  meta: ProfileDto;
  items: ProfileAssetItem[];
  /** @example 0 */
  skip: number;
  /** @example 15 */
  take: number;
  /** @example 10 */
  count: number;
}
export interface ProfileLogItem {
  /** @example 1 */
  amount: string;
  /** @example MINT */
  type: "BURN" | "MINT";
  /** @example 1659006960 */
  date: number;
  meta: TokenDto;
}
export interface GetProfileLogsResponseDto {
  items: ProfileLogItem[];
  /** @example 0 */
  skip: number;
  /** @example 15 */
  take: number;
  /** @example 10 */
  count: number;
}
export interface OwnerHistoryItem {
  /** @example 0xf26878E24980Ec90884E29694B86A4193E6f9001 */
  owner: string;
  /** @example 1659006960 */
  startDate: number;
  /** @example 1659006960 */
  endDate: number | null;
}
export interface GetOwnerHistoryResponseDto {
  items: OwnerHistoryItem[];
  /** @example 0 */
  skip: number;
  /** @example 15 */
  take: number;
  /** @example 10 */
  count: number;
}
export interface PerformanceNumberString {
  /** @example 0 */
  current: string;
  /** @example 0 */
  previous: string;
}
export interface PerformanceNumber {
  /** @example 0 */
  current: number;
  /** @example 0 */
  previous: number;
}
export interface GetMarketplacePerformanceResponseDto {
  turnover: PerformanceNumberString;
  profit: PerformanceNumberString;
  sales: PerformanceNumber;
}
export interface MarketplaceSale {
  /** @example HEROES */
  name: string;
  /** @example 10 */
  count: number;
}
export interface GetMarketplaceSalesTodayResponseDto {
  sales: MarketplaceSale[];
  /** @example 10 */
  total: number;
}
export interface MarketplaceSaleItem {
  /** @example 12b0196e-971e-4016-815c-c5a3e0367eef */
  id: string;
  /** @example 1 */
  orderId: number;
  /** @example 1 */
  amount: string;
  /** @example 0x3a5557ECE3Cb2804d649fed545d5FbAF1b667D2B */
  customer: string;
  /** @example user@cdevs.solutions */
  email: string;
  /** @example ZOA */
  token: string;
  /** @example 122200000000000000 */
  turnover: string;
  /** @example 0 */
  profit: string;
  /** @example 0 */
  turnoverUsd: string;
  /** @example 0 */
  profitUsd: string;
  /** @example 1659006960 */
  date: number;
  meta: TokenDto;
}
export interface GetMarketplaceListOfSalesResponseDto {
  items: MarketplaceSaleItem[];
  /** @example 0 */
  skip: number;
  /** @example 5 */
  take: number;
  /** @example 10 */
  count: number;
}
export interface TopSeller {
  /** @example 0x3a5557ECE3Cb2804d649fed545d5FbAF1b667D2B */
  seller: string;
  /** @example 1 */
  count: number;
  /** @example 1000000000000000000 */
  turnover: string;
  /** @example 0 */
  profit: string;
  /** @example 0 */
  turnoverUsd: string;
  /** @example 0 */
  profitUsd: string;
}
export interface GetTopSellersResponseDto {
  items: TopSeller[];
  /** @example 0 */
  skip: number;
  /** @example 5 */
  take: number;
  /** @example 10 */
  count: number;
}
export interface GetTrendResponseDto {
  /**
   * @format date-time
   * @example 2022-09-01T00:00:00.000Z
   */
  start: string;
  /**
   * @format date-time
   * @example 2022-10-01T00:00:00.000Z
   */
  end: string;
  /** @example ["0"] */
  graph: string[];
}
export interface GetBookkeepingResponseDto {
  /** @example 0 */
  total: string;
  /** @example 0 */
  balance: string;
  /** @example 0 */
  withdrawn: string;
}
export interface MarketplaceBookkeepingItem {
  /** @example ZOA Starships */
  name: string;
  /** @example ZOASTARSHIP */
  symbol: string;
  /** @example 18 */
  decimal: number;
  /** @example ERC1155 */
  standard: "ERC1155" | "ERC721" | "ERC20";
  /** @example ERC1155 */
  type: "ERC1155" | "ERC721" | "ERC20" | "ERC20WRAP" | "GAMEFI" | "AVATARS" | "BOXES";
  /** @example 0xF91859002458d33E4B54622a28ceaD479AC69A20 */
  smartContract: string;
  /** @example 0 */
  tokenId: number;
  /** @example https://bold-point.mypinata.cloud/ipfs/QmeuRTHJce1q5GdmEXpoMNLjfXVPPW76UgVNXzeVM7F42P/0000000000000000000000000000000000000000000000000000000000000000.jpg */
  img: string;
  /** @example Text */
  description: string;
  category: CategoryTokenDto;
  properties: TokenPropertiesDto[];
  /**
   * @example {
   *     "name": "ZERA",
   *     "description": "Text",
   *     "image": "ipfs://QmeuRTHJce1q5GdmEXpoMNLjfXVPPW76UgVNXzeVM7F42P/0000000000000000000000000000000000000000000000000000000000000000.jpg",
   *     "properties": {
   *       "Type": "Spaceships",
   *       "Slots": "20"
   *
   *     }
   *   }
   */
  metaOriginal: string;
  metaPrepared: MetaPrepared;
  /** @example 0 */
  amount: string;
  /** @example 0 */
  preparedAmount: string;
  /** @example 0 */
  value: string;
}
export interface GetMarketplaceBookkeepingAssetsResponseDto {
  items: MarketplaceBookkeepingItem[];
  /** @example 0 */
  skip: number;
  /** @example 5 */
  take: number;
  /** @example 10 */
  count: number;
}
export interface TokenContract {
  /** @example 12b0196e-971e-4016-815c-c5a3e0367eef */
  id: string;
  /** @example 2022-08-22T08:57:31.395Z */
  createdAt: string;
  /** @example 2022-09-28T02:18:35.422Z */
  updatedAt: string;
  /** @example ERC20 */
  typeContract: "GAMEFI" | "AVATARS" | "BOXES" | "SHOPS" | "MARKETPLACE" | "ERC1155" | "ERC721" | "ERC20" | "ERC20WRAP";
  /** @example 0xF79e8bc63CbC325Bcf780cAA848C044454489117 */
  address: string;
  /** @example 12000000 */
  blockInit: number;
  /** @example 13000000 */
  blockCurrent: number;
}
export interface MarketplaceCategoryItem {
  /** @example 12b0196e-971e-4016-815c-c5a3e0367eef */
  id: string;
  /** @example 2022-08-22T08:57:31.395Z */
  createdAt: string;
  /** @example 2022-09-28T02:18:35.422Z */
  updatedAt: string;
  /** @example icon_text */
  typeView: "text" | "icon" | "icon_text";
  /** @example HEROES */
  text: string;
  /** @example https://gameficore.s3.eu-west-2.amazonaws.com/zoa/nft-marketplace/categories/heroes.svg */
  icon: string;
  /** @example 0 */
  order: number;
  tokenContract: TokenContract;
  /** @example 0 */
  countOfParameters: number;
}
export interface GetAdminCategoriesResponseDto {
  items: MarketplaceCategoryItem[];
  /** @example 0 */
  skip: number;
  /** @example 5 */
  take: number;
  /** @example 10 */
  count: number;
}
export interface GetPercentageResponseDto {
  /** @example 0 */
  percent: number;
}
export interface GetMarketplaceAssetResponseDto {
  /** @example 12b0196e-971e-4016-815c-c5a3e0367eef */
  id: string;
  /** @example ZOA */
  name: string;
  /** @example https://gameficore.s3.eu-west-2.amazonaws.com/zoa/tokens/erc20/ZOA.svg */
  icon: string;
  /** @example true */
  show: boolean;
  tokenContract: TokenContract;
  /** @example ZOA Testnet */
  nameBySC: string;
  /** @example ZOA */
  symbol: string;
}
export interface GetAdminAssetsResponseDto {
  items: GetMarketplaceAssetResponseDto[];
  /** @example 0 */
  skip: number;
  /** @example 5 */
  take: number;
  /** @example 10 */
  count: number;
}
export interface TransactionItem {
  /** @example 12b0196e-971e-4016-815c-c5a3e0367eef */
  id: string;
  /** @example Sent */
  type: string;
  /** @example 0x53d02fa86ec02877432e628726973a158290439c4b8fbc548122b7a8e17778ca */
  transactionHash: string;
  /** @example 0 */
  amount: string;
  /** @example 0 */
  value: string;
  /** @example 1659006960 */
  dateOfOperation: number;
  meta: TokenDto;
}
export interface GetTransactionsResponseDto {
  items: TransactionItem[];
  /** @example 0 */
  skip: number;
  /** @example 5 */
  take: number;
  /** @example 10 */
  count: number;
}
export interface PercentageItem {
  /** @example 10 */
  percent: string;
  /** @example 1659006960 */
  dateOfStart: number;
  /** @example null */
  dateOfEnd: number | null;
  /** @example 0x2144aB076F20499a6e932Bb0BBB57a4EdEdc82Ea */
  initiator: string;
}
export interface GetHistoryOfPercentageResponseDto {
  items: PercentageItem[];
  /** @example 0 */
  skip: number;
  /** @example 3 */
  take: number;
  /** @example 10 */
  count: number;
}
export interface AvatarEntity {
  /** @example 1 */
  id: number;
  /** @example Draxler */
  name: string;
  /** @example https://bold-point.mypinata.cloud/ipfs/QmQe9r3YJQJ7ZuACmN3qhZN1BZSKFDHGsnCAQCmcpkFETQ/0000000000000000000000000000000000000000000000000000000000000000.png */
  img: string;
  /** @example 1000000 */
  countItems: string;
  /** @example Avatar */
  type: string;
}
export interface GetAvatarsResponseDto {
  entities: AvatarEntity[];
  /** @example 0 */
  skip: number;
  /** @example 15 */
  take: number;
  /** @example 10 */
  count: number;
}
export interface GetAvatarEntityResponseDto {
  /** @example 1 */
  id: number;
  /** @example 1 */
  collectionId: number;
  /** @example Catherine */
  name: string;
  description: string;
  /** @example 10000001000000042 */
  countAssets: string;
  /** @example 0x4E1688DA51F26c1c64e3E46f780864C7Ed8dC33F */
  address: string;
  /** @example Avatar */
  type: string;
  /** @example 1661837650 */
  dateOfCreation: number;
  meta: Avatar;
}
export interface GetAvatarPropertiesResponseDto {
  /** @example {"Type":"Avatars"} */
  properties: object;
}
export interface AvatarItem {
  /** @example Catherine */
  name: string;
  /** @example https://bold-point.mypinata.cloud/ipfs/QmQe9r3YJQJ7ZuACmN3qhZN1BZSKFDHGsnCAQCmcpkFETQ/0000000000000000000000000000000000000000000000000000000000000000.png */
  img: string;
  /** @example 0x2144aB076F20499a6e932Bb0BBB57a4EdEdc82Ea */
  address: string;
  /** @example 100 */
  amount: string;
  /** @example USER */
  ownerType: "SC" | "USER" | "PROFILE";
  /** @example false */
  isLocked: boolean;
}
export interface GetAvatarItemsResponseDto {
  items: AvatarItem[];
  /** @example 0 */
  skip: number;
  /** @example 15 */
  take: number;
  /** @example 10 */
  count: number;
}
export interface GetShopPerformanceTodayResponseDto {
  revenue: PerformanceNumberString;
  sales: PerformanceNumber;
}
export interface ShopSale {
  /** @example 1 */
  shopId: number;
  /** @example 10 */
  count: number;
}
export interface GetShopSalesTodayResponseDto {
  sales: ShopSale[];
  /** @example 10 */
  total: number;
}
export interface ShopSaleItem {
  /** @example 12b0196e-971e-4016-815c-c5a3e0367eef */
  id: string;
  /** @example 1 */
  shopId: number;
  item: TokenDto;
  /** @example avatar */
  tag: string;
  /** @example 1 */
  amount: string;
  /** @example 1 */
  preparedAmount: string;
  /** @example 0x3a5557ECE3Cb2804d649fed545d5FbAF1b667D2B */
  customer: string;
  /** @example user@cdevs.solutions */
  email: string;
  /** @example 0 */
  revenue: string;
  /** @example 0 */
  preparedRevenue: string;
  /** @example ZOA */
  token: string;
  /** @example 0 */
  revenueUsd: string;
  /** @example 1661864139 */
  date: number;
}
export interface GetShopListOfSalesResponseDto {
  items: ShopSaleItem[];
  /** @example 0 */
  skip: number;
  /** @example 5 */
  take: number;
  /** @example 10 */
  count: number;
}
export interface ShopBookkeepingItem {
  /** @example ZOA Starships */
  name: string;
  /** @example ZOASTARSHIP */
  symbol: string;
  /** @example 18 */
  decimal: number;
  /** @example ERC1155 */
  standard: "ERC1155" | "ERC721" | "ERC20";
  /** @example ERC1155 */
  type: "ERC1155" | "ERC721" | "ERC20" | "ERC20WRAP" | "GAMEFI" | "AVATARS" | "BOXES";
  /** @example 0xF91859002458d33E4B54622a28ceaD479AC69A20 */
  smartContract: string;
  /** @example 0 */
  tokenId: number;
  /** @example https://bold-point.mypinata.cloud/ipfs/QmeuRTHJce1q5GdmEXpoMNLjfXVPPW76UgVNXzeVM7F42P/0000000000000000000000000000000000000000000000000000000000000000.jpg */
  img: string;
  /** @example Text */
  description: string;
  category: CategoryTokenDto;
  properties: TokenPropertiesDto[];
  /**
   * @example {
   *     "name": "ZERA",
   *     "description": "Text",
   *     "image": "ipfs://QmeuRTHJce1q5GdmEXpoMNLjfXVPPW76UgVNXzeVM7F42P/0000000000000000000000000000000000000000000000000000000000000000.jpg",
   *     "properties": {
   *       "Type": "Spaceships",
   *       "Slots": "20"
   *
   *     }
   *   }
   */
  metaOriginal: string;
  metaPrepared: MetaPrepared;
  /** @example 0 */
  amount: string;
  /** @example 0 */
  preparedAmount: string;
  /** @example 0 */
  value: string;
}
export interface GetShopBookkeepingAssetsResponseDto {
  items: ShopBookkeepingItem[];
  /** @example 0 */
  skip: number;
  /** @example 5 */
  take: number;
  /** @example 10 */
  count: number;
}
export interface HistoryTransactionItem {
  /** @example 12b0196e-971e-4016-815c-c5a3e0367eef */
  id: string;
  /** @example Sent */
  type: string;
  /** @example 0x53d02fa86ec02877432e628726973a158290439c4b8fbc548122b7a8e17778ca */
  transactionHash: string;
  item: Avatar;
  /** @example 0 */
  amount: string;
  /** @example 0 */
  value: string;
  /** @example 1659006960 */
  dateOfOperation: number;
}
export interface GetHistoryTransactionsResponseDto {
  items: HistoryTransactionItem[];
  /** @example 0 */
  skip: number;
  /** @example 5 */
  take: number;
  /** @example 10 */
  count: number;
}
export interface TokenInAmount {
  /** @example 0 */
  amount: string;
  /** @example 0 */
  preparedAmount: string;
  /** @example ZOA */
  token: string;
  /** @example 0 */
  amountUsd: string;
}
export interface TokenWithCollection {
  /** @example GameFiCore avatars (testnet) */
  name: string;
  /** @example COREAVATARS */
  symbol: string;
  /** @example 1 */
  decimal: number;
  /** @example ERC1155 */
  standard: "ERC1155" | "ERC721" | "ERC20";
  /** @example AVATARS */
  type: "ERC1155" | "ERC721" | "ERC20" | "ERC20WRAP" | "GAMEFI" | "AVATARS" | "BOXES";
  /** @example 0x4E1688DA51F26c1c64e3E46f780864C7Ed8dC33F */
  smartContract: string;
  /** @example 0 */
  tokenId: number;
  /** @example https://bold-point.mypinata.cloud/ipfs/QmQe9r3YJQJ7ZuACmN3qhZN1BZSKFDHGsnCAQCmcpkFETQ/0000000000000000000000000000000000000000000000000000000000000000.png */
  img: string;
  /** @example Text */
  description: string;
  /** @example {"name":"","icon":""} */
  category: CategoryTokenDto;
  /** @example [{}] */
  properties: TokenPropertiesDto[];
  /**
   * @example {
   *     "name": "Catherine",
   *     "description": "",
   *     "image": "ipfs://QmQe9r3YJQJ7ZuACmN3qhZN1BZSKFDHGsnCAQCmcpkFETQ/0000000000000000000000000000000000000000000000000000000000000000.png",
   *     "properties": {
   *       "Type": "Avatars"
   *
   *
   *     }
   *   }
   */
  metaOriginal: string;
  /** @example {"name":"Catherine","description":"","image":"ipfs://QmQe9r3YJQJ7ZuACmN3qhZN1BZSKFDHGsnCAQCmcpkFETQ/0000000000000000000000000000000000000000000000000000000000000000.png","properties":{"Type":"Avatars"}} */
  metaPrepared: MetaPrepared;
  /** @example 1 */
  collectionId: number;
}
export interface GetShopsResponseDto {
  /** @example 1 */
  id: number;
  /** @example avatar */
  tag: string;
  tokenIn: TokenInAmount;
  tokenOut: TokenWithCollection;
  /** @example 1 */
  assetsCount: number;
  /** @example true */
  active: boolean;
}
export interface TokenInOffer {
  /** @example ERC20 */
  standard: "ERC1155" | "ERC721" | "ERC20";
  /** @example ZOA Testnet */
  name: string;
  /** @example ZOA */
  symbol: string;
  /** @example 18 */
  decimal: number;
  /** @example ERC20 */
  type: "ERC1155" | "ERC721" | "ERC20" | "ERC20WRAP" | "GAMEFI" | "AVATARS" | "BOXES";
  /** @example 0xF79e8bc63CbC325Bcf780cAA848C044454489117 */
  smartContract: string;
  /** @example 0 */
  tokenId: string;
  /** @example https://gameficore.s3.eu-west-2.amazonaws.com/zoa/tokens/erc20/ZOA.svg */
  img: string;
  /** @example Text */
  description: string;
  category: CategoryTokenDto;
  properties: object[];
  /** @example  */
  metaOriginal: string;
  metaPrepared: object;
  /** @example 0 */
  amount: string;
  /** @example 0 */
  preparedAmount: string;
  /** @example 0xF79e8bc63CbC325Bcf780cAA848C044454489117 */
  tokenContract: string;
}
export interface TokenOutOffer {
  /** @example ERC1155 */
  standard: "ERC1155" | "ERC721" | "ERC20";
  /** @example GameFiCore avatars (testnet) */
  name: string;
  /** @example COREAVATARS */
  symbol: string;
  /** @example 1 */
  decimal: number;
  /** @example AVATARS */
  type: "ERC1155" | "ERC721" | "ERC20" | "ERC20WRAP" | "GAMEFI" | "AVATARS" | "BOXES";
  /** @example 0x4E1688DA51F26c1c64e3E46f780864C7Ed8dC33F */
  smartContract: string;
  /** @example 0 */
  tokenId: string;
  /** @example https://bold-point.mypinata.cloud/ipfs/QmQe9r3YJQJ7ZuACmN3qhZN1BZSKFDHGsnCAQCmcpkFETQ/0000000000000000000000000000000000000000000000000000000000000000.png */
  img: string;
  /** @example Text */
  description: string;
  category: CategoryTokenDto;
  properties: object[];
  /**
   * @example {
   *     "name": "Catherine",
   *     "description": "",
   *     "image": "ipfs://QmQe9r3YJQJ7ZuACmN3qhZN1BZSKFDHGsnCAQCmcpkFETQ/0000000000000000000000000000000000000000000000000000000000000000.png",
   *     "properties": {
   *       "Type": "Avatars"
   *
   *
   *     }
   *   }
   */
  metaOriginal: string;
  metaPrepared: MetaPrepared;
  /** @example 0x4E1688DA51F26c1c64e3E46f780864C7Ed8dC33F */
  tokenContract: string;
  /** @example 1 */
  amount: string;
  /** @example 1 */
  preparedAmount: string;
}
export interface GetShopResponseDto {
  /** @example 1 */
  id: number;
  /** @example avatar */
  tag: string;
  tokenIn: TokenInOffer;
  tokenOut: TokenOutOffer;
  /** @example 1 */
  assetsCount: number;
  /** @example true */
  active: boolean;
}
export interface GetAllShopsResponseDto {
  id: number;
  tokenInOffer: TokenInOffer;
  tokenOutOffer: TokenOutOffer;
  /** @example OPEN */
  status: "ALL" | "OPEN" | "CLOSED";
  /** @example avatar */
  tag: string;
}
export interface GetAvailableTagsResponseDto {
  tags: string[];
}
import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ResponseType } from "axios";
export declare type QueryParamsType = Record<string | number, any>;
export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}
export declare type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;
export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}
export declare enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}
export declare class HttpClient<SecurityDataType = unknown> {
  instance: AxiosInstance;
  private securityData;
  private securityWorker?;
  private secure?;
  private format?;
  constructor({ securityWorker, secure, format, ...axiosConfig }?: ApiConfig<SecurityDataType>);
  setSecurityData: (data: SecurityDataType | null) => void;
  private mergeRequestParams;
  private createFormData;
  request: <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams) => Promise<any>;
}
/**
 * @title GameFI Core API
 * @version 0.0.1
 * @contact
 *
 * App API description
 */
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  apiInfo: {
    /**
     * No description
     *
     * @tags Info
     * @name ApiInfoControllerAssetsByBox
     * @summary Get dropdown items by box
     * @request GET:/api-info/assets/box/{tokenId}/info
     */
    apiInfoControllerAssetsByBox: (
      tokenId: number,
      params?: RequestParams,
    ) => Promise<AxiosResponse<GetAssetByBoxResponseDto>>;
    /**
     * No description
     *
     * @tags Info
     * @name ApiInfoControllerGetBoxInfoByTxHash
     * @summary Get items by txHash
     * @request GET:/api-info/assets/box/{txHash}/result
     */
    apiInfoControllerGetBoxInfoByTxHash: (
      txHash: string,
      params?: RequestParams,
    ) => Promise<AxiosResponse<GetBoxAssetsResponseDto>>;
    /**
     * No description
     *
     * @tags Info
     * @name ApiInfoControllerInfoToken
     * @summary Get info about token
     * @request GET:/api-info/assets/token/{collection}/{tokenId}
     */
    apiInfoControllerInfoToken: (
      collection: string,
      tokenId: string,
      params?: RequestParams,
    ) => Promise<AxiosResponse<TokenDto>>;
    /**
     * No description
     *
     * @tags Info
     * @name ApiInfoControllerAssetInfo
     * @summary Get asset info
     * @request GET:/api-info/assets/info
     */
    apiInfoControllerAssetInfo: (params?: RequestParams) => Promise<AxiosResponse<GetAssetsInfoResponseDto>>;
    /**
     * No description
     *
     * @tags Info
     * @name ApiInfoControllerAssets
     * @summary Get assets by address
     * @request GET:/api-info/assets/{address}
     */
    apiInfoControllerAssets: (
      address: string,
      query?: {
        types?: string[];
      },
      params?: RequestParams,
    ) => Promise<AxiosResponse<GetAssetsResponseDto>>;
    /**
     * No description
     *
     * @tags Info
     * @name ApiInfoControllerSettings
     * @summary Get info by system
     * @request GET:/api-info/settings
     */
    apiInfoControllerSettings: (params?: RequestParams) => Promise<AxiosResponse<GetSettingsResponseDto>>;
    /**
     * No description
     *
     * @tags Info
     * @name ApiInfoControllerGetImplementationTypes
     * @summary Get SC implementation types for different networks
     * @request GET:/api-info/sc-implementation-types
     */
    apiInfoControllerGetImplementationTypes: (
      query?: {
        chainId?: string;
      },
      params?: RequestParams,
    ) => Promise<AxiosResponse<GetSCImplTypesResponseDto[]>>;
    /**
     * No description
     *
     * @tags Info
     * @name ApiInfoControllerHistoryPrice
     * @summary Get price history by token
     * @request GET:/api-info/history/{address}/{tokenId}/price
     */
    apiInfoControllerHistoryPrice: (
      address: string,
      tokenId: string,
      params?: RequestParams,
    ) => Promise<AxiosResponse<GetHistoryPriceResponseDto>>;
    /**
     * No description
     *
     * @tags Info
     * @name ApiInfoControllerCabinetFilter
     * @summary Get categories for cabinet
     * @request GET:/api-info/filter/cabinet
     */
    apiInfoControllerCabinetFilter: (
      params?: RequestParams,
    ) => Promise<AxiosResponse<GetCategoriesProfileResponseDto[]>>;
  };
  apiAuth: {
    /**
     * No description
     *
     * @tags Auth
     * @name ApiAuthControllerGetPhrase
     * @summary Request a phrase
     * @request POST:/api-auth/phrase
     */
    apiAuthControllerGetPhrase: (
      data: GetPhraseRequestDto,
      params?: RequestParams,
    ) => Promise<AxiosResponse<GetPhraseResponseDto>>;
    /**
     * No description
     *
     * @tags Auth
     * @name ApiAuthControllerCheckPhrase
     * @summary Check phrase
     * @request POST:/api-auth/phrase/check
     */
    apiAuthControllerCheckPhrase: (
      data: CheckPhraseRequestDto,
      params?: RequestParams,
    ) => Promise<AxiosResponse<CheckPhraseResponseDto>>;
  };
  apiMarketplace: {
    /**
     * No description
     *
     * @tags Nft Marketplace
     * @name ApiMarketplaceControllerGetCategories
     * @summary Get nft marketplace global categories
     * @request GET:/api-marketplace/categories
     */
    apiMarketplaceControllerGetCategories: (
      params?: RequestParams,
    ) => Promise<AxiosResponse<GetCategoriesResponseDto[]>>;
    /**
     * No description
     *
     * @tags Nft Marketplace
     * @name ApiMarketplaceControllerFilterByCategory
     * @summary Get nft marketplace filter by category
     * @request GET:/api-marketplace/filter/{address}
     */
    apiMarketplaceControllerFilterByCategory: (
      address: string,
      params?: RequestParams,
    ) => Promise<AxiosResponse<GetFilterResponseDto>>;
    /**
     * No description
     *
     * @tags Nft Marketplace
     * @name ApiMarketplaceControllerOrders
     * @summary Get orders by filter
     * @request POST:/api-marketplace/orders
     */
    apiMarketplaceControllerOrders: (data: GetOrdersRequestDto, params?: RequestParams) => Promise<AxiosResponse<any>>;
    /**
     * No description
     *
     * @tags Nft Marketplace
     * @name ApiMarketplaceControllerGetOrder
     * @summary Get order by id
     * @request GET:/api-marketplace/order/{id}
     */
    apiMarketplaceControllerGetOrder: (id: number, params?: RequestParams) => Promise<AxiosResponse<any>>;
    /**
     * No description
     *
     * @tags Nft Marketplace
     * @name ApiMarketplaceControllerGetOrdersByAddress
     * @summary Get orders by wallet
     * @request GET:/api-marketplace/info/{address}/orders
     */
    apiMarketplaceControllerGetOrdersByAddress: (
      address: string,
      query?: {
        collectionAddress?: string;
        status?: "NULL" | "OPEN" | "CANCELLED" | "EXECUTED" | "ANY";
        skip?: number;
        take?: number;
      },
      params?: RequestParams,
    ) => Promise<AxiosResponse<any>>;
    /**
     * No description
     *
     * @tags Nft Marketplace
     * @name ApiMarketplaceControllerGetLatestOrders
     * @summary Get the latest placed orders
     * @request GET:/api-marketplace/orders/latest
     */
    apiMarketplaceControllerGetLatestOrders: (
      query?: {
        take?: any;
        skip?: any;
      },
      params?: RequestParams,
    ) => Promise<AxiosResponse<any>>;
    /**
     * No description
     *
     * @tags Nft Marketplace
     * @name ApiMarketplaceControllerGetImplementTokens
     * @summary Get tokens for which you can sell NFT
     * @request GET:/api-marketplace/info/tokens
     */
    apiMarketplaceControllerGetImplementTokens: (params?: RequestParams) => Promise<AxiosResponse<any>>;
  };
  apiAdmin: {
    /**
     * No description
     *
     * @tags Admin
     * @name AssetsControllerGetDetails
     * @summary Get asset details
     * @request GET:/api-admin/assets/collections
     */
    assetsControllerGetDetails: (
      query?: {
        id?: "asc" | "desc";
        name?: "asc" | "desc";
        countAssets?: "asc" | "desc";
        address?: "asc" | "desc";
        search?: string;
        type?: "asc" | "desc";
        skip?: any;
        take?: any;
        typeOf?: "NULL" | "ERC20" | "ERC721" | "ERC1155";
      },
      params?: RequestParams,
    ) => Promise<AxiosResponse<GetDetailsResponseDto>>;
    /**
     * No description
     *
     * @tags Admin
     * @name AssetsControllerGetCollection
     * @summary Get collection
     * @request GET:/api-admin/assets/collection/{address}/base
     */
    assetsControllerGetCollection: (
      address: string,
      query?: {
        id?: "asc" | "desc";
        name?: "asc" | "desc";
        totalSupply?: "asc" | "desc";
        holders?: "asc" | "desc";
        dateOfCreation?: "asc" | "desc";
        search?: string;
        skip?: any;
        take?: any;
      },
      params?: RequestParams,
    ) => Promise<AxiosResponse<GetCollectionResponseDto>>;
    /**
     * No description
     *
     * @tags Admin
     * @name AssetsControllerGetCollectionEntity
     * @summary Get collection entity
     * @request GET:/api-admin/assets/collection/{address}/entities/{tokenId}
     */
    assetsControllerGetCollectionEntity: (
      address: string,
      tokenId: string,
      params?: RequestParams,
    ) => Promise<AxiosResponse<GetEntityResponseDto>>;
    /**
     * No description
     *
     * @tags Admin
     * @name AssetsControllerGetItems
     * @summary Get items
     * @request GET:/api-admin/assets/items/{address}/{tokenId}
     */
    assetsControllerGetItems: (
      address: string,
      tokenId: string,
      query?: {
        name?: "asc" | "desc";
        amount?: "asc" | "desc";
        owner?: "asc" | "desc";
        search?: string;
        skip?: any;
        take?: any;
      },
      params?: RequestParams,
    ) => Promise<AxiosResponse<GetItemsResponseDto>>;
    /**
     * No description
     *
     * @tags Admin
     * @name AssetsControllerGetItem
     * @summary Get item
     * @request POST:/api-admin/assets/items/{wallet}
     */
    assetsControllerGetItem: (
      wallet: string,
      data: GetItemRequestBodyDto,
      params?: RequestParams,
    ) => Promise<AxiosResponse<GetItemResponseDto>>;
    /**
     * No description
     *
     * @tags Admin
     * @name AssetsControllerGetProperties
     * @summary Get entity properties
     * @request GET:/api-admin/assets/entities/{address}/{tokenId}/properties
     */
    assetsControllerGetProperties: (
      address: string,
      tokenId: string,
      params?: RequestParams,
    ) => Promise<AxiosResponse<GetPropertiesResponseDto>>;
    /**
     * No description
     *
     * @tags Admin
     * @name LootboxesControllerGetLootboxDetails
     * @summary Get lootbox details
     * @request GET:/api-admin/lootboxes
     */
    lootboxesControllerGetLootboxDetails: (
      query?: {
        id?: "asc" | "desc";
        name?: "asc" | "desc";
        countItems?: "asc" | "desc";
        countOpenedBoxes?: "asc" | "desc";
        search?: string;
        skip?: any;
        take?: any;
        address?: "asc" | "desc";
      },
      params?: RequestParams,
    ) => Promise<AxiosResponse<GetLootboxesResponseDto>>;
    /**
     * No description
     *
     * @tags Admin
     * @name LootboxesControllerGetBoxEntity
     * @summary Get box entity
     * @request GET:/api-admin/lootboxes/{tokenId}
     */
    lootboxesControllerGetBoxEntity: (
      tokenId: string,
      params?: RequestParams,
    ) => Promise<AxiosResponse<GetBoxEntityResponseDto>>;
    /**
     * No description
     *
     * @tags Admin
     * @name LootboxesControllerGetProperties
     * @summary Get properties and dropdown items
     * @request GET:/api-admin/lootboxes/{tokenId}/properties
     */
    lootboxesControllerGetProperties: (
      tokenId: string,
      params?: RequestParams,
    ) => Promise<AxiosResponse<GetBoxPropertiesResponseDto>>;
    /**
     * No description
     *
     * @tags Admin
     * @name LootboxesControllerGetItems
     * @summary Get boxes
     * @request GET:/api-admin/lootboxes/{tokenId}/items
     */
    lootboxesControllerGetItems: (
      tokenId: string,
      query?: {
        name?: "asc" | "desc";
        amount?: "asc" | "desc";
        owner?: "asc" | "desc";
        search?: string;
        skip?: any;
        take?: any;
      },
      params?: RequestParams,
    ) => Promise<AxiosResponse<GetBoxItemsResponseDto>>;
    /**
     * No description
     *
     * @tags Admin
     * @name LootboxesControllerGetOpenedBoxes
     * @summary Get opened boxes
     * @request GET:/api-admin/lootboxes/{tokenId}/opened
     */
    lootboxesControllerGetOpenedBoxes: (
      tokenId: string,
      query?: {
        name?: "asc" | "desc";
        address?: "asc" | "desc";
        openBy?: "asc" | "desc";
        dateOfOpen?: "asc" | "desc";
        search?: string;
        skip?: any;
        take?: any;
      },
      params?: RequestParams,
    ) => Promise<AxiosResponse<GetOpenedBoxesResponseDto>>;
    /**
     * No description
     *
     * @tags Admin
     * @name ProfilesControllerGetProfiles
     * @summary Get profiles
     * @request GET:/api-admin/profiles
     */
    profilesControllerGetProfiles: (
      query?: {
        status?: boolean;
        search?: string;
        skip?: any;
        take?: any;
      },
      params?: RequestParams,
    ) => Promise<AxiosResponse<GetProfilesResponseDto>>;
    /**
     * No description
     *
     * @tags Admin
     * @name ProfilesControllerGetProfileById
     * @summary Get profile
     * @request GET:/api-admin/profiles/{id}
     */
    profilesControllerGetProfileById: (
      id: string,
      params?: RequestParams,
    ) => Promise<AxiosResponse<GetProfileResponseDto>>;
    /**
     * No description
     *
     * @tags Admin
     * @name ProfilesControllerGetErc20
     * @summary Get ERC20 assets
     * @request GET:/api-admin/profiles/{id}/assets/erc20
     */
    profilesControllerGetErc20: (
      id: string,
      query?: {
        search?: string;
        skip?: any;
        take?: any;
      },
      params?: RequestParams,
    ) => Promise<AxiosResponse<GetProfileAssetsResponseDto>>;
    /**
     * No description
     *
     * @tags Admin
     * @name ProfilesControllerGetAvatars
     * @summary Get avatar assets
     * @request GET:/api-admin/profiles/{id}/assets/avatars
     */
    profilesControllerGetAvatars: (
      id: string,
      query?: {
        search?: string;
        skip?: any;
        take?: any;
      },
      params?: RequestParams,
    ) => Promise<AxiosResponse<GetProfileAssetsResponseDto>>;
    /**
     * No description
     *
     * @tags Admin
     * @name ProfilesControllerGetItems
     * @summary Get ERC1155 assets
     * @request GET:/api-admin/profiles/{id}/assets/items
     */
    profilesControllerGetItems: (
      id: string,
      query?: {
        search?: string;
        skip?: any;
        take?: any;
      },
      params?: RequestParams,
    ) => Promise<AxiosResponse<GetProfileAssetsResponseDto>>;
    /**
     * No description
     *
     * @tags Admin
     * @name ProfilesControllerGetLogs
     * @summary Get logs
     * @request GET:/api-admin/profiles/{id}/logs
     */
    profilesControllerGetLogs: (
      id: string,
      query?: {
        amount?: "asc" | "desc";
        type?: "asc" | "desc";
        date?: "asc" | "desc";
        skip?: any;
        take?: any;
      },
      params?: RequestParams,
    ) => Promise<AxiosResponse<GetProfileLogsResponseDto>>;
    /**
     * No description
     *
     * @tags Admin
     * @name ProfilesControllerGetOwnerHistory
     * @summary Get owner history
     * @request GET:/api-admin/profiles/{id}/history
     */
    profilesControllerGetOwnerHistory: (
      id: string,
      query?: {
        owner?: "asc" | "desc";
        startDate?: "asc" | "desc";
        endDate?: "asc" | "desc";
        skip?: any;
        take?: any;
      },
      params?: RequestParams,
    ) => Promise<AxiosResponse<GetOwnerHistoryResponseDto>>;
    /**
     * No description
     *
     * @tags Admin
     * @name MarketplaceControllerGetPerformanceToday
     * @summary Get performance today
     * @request GET:/api-admin/marketplace/performance-today
     */
    marketplaceControllerGetPerformanceToday: (
      params?: RequestParams,
    ) => Promise<AxiosResponse<GetMarketplacePerformanceResponseDto>>;
    /**
     * No description
     *
     * @tags Admin
     * @name MarketplaceControllerGetSalesToday
     * @summary Get sales today
     * @request GET:/api-admin/marketplace/sales-today
     */
    marketplaceControllerGetSalesToday: (
      params?: RequestParams,
    ) => Promise<AxiosResponse<GetMarketplaceSalesTodayResponseDto>>;
    /**
     * No description
     *
     * @tags Admin
     * @name MarketplaceControllerGetListOfSales
     * @summary Get list of sales
     * @request GET:/api-admin/marketplace/list-of-sales
     */
    marketplaceControllerGetListOfSales: (
      query?: {
        skip?: any;
        take?: any;
      },
      params?: RequestParams,
    ) => Promise<AxiosResponse<GetMarketplaceListOfSalesResponseDto>>;
    /**
     * No description
     *
     * @tags Admin
     * @name MarketplaceControllerGetTopSellers
     * @summary Get top sellers
     * @request GET:/api-admin/marketplace/top-sellers
     */
    marketplaceControllerGetTopSellers: (
      query?: {
        skip?: any;
        take?: any;
      },
      params?: RequestParams,
    ) => Promise<AxiosResponse<GetTopSellersResponseDto>>;
    /**
     * No description
     *
     * @tags Admin
     * @name MarketplaceControllerGetProfitTrend
     * @summary Get profit trend
     * @request GET:/api-admin/marketplace/trend/profit
     */
    marketplaceControllerGetProfitTrend: (
      query: {
        month: number;
        year: number;
      },
      params?: RequestParams,
    ) => Promise<AxiosResponse<GetTrendResponseDto>>;
    /**
     * No description
     *
     * @tags Admin
     * @name MarketplaceControllerGetTurnoverTrend
     * @summary Get turnover trend
     * @request GET:/api-admin/marketplace/trend/turnover
     */
    marketplaceControllerGetTurnoverTrend: (
      query: {
        month: number;
        year: number;
      },
      params?: RequestParams,
    ) => Promise<AxiosResponse<GetTrendResponseDto>>;
    /**
     * No description
     *
     * @tags Admin
     * @name MarketplaceControllerGetBookkeepingInfo
     * @summary Get bookkeeping
     * @request GET:/api-admin/marketplace/bookkeeping/info
     */
    marketplaceControllerGetBookkeepingInfo: (
      params?: RequestParams,
    ) => Promise<AxiosResponse<GetBookkeepingResponseDto>>;
    /**
     * No description
     *
     * @tags Admin
     * @name MarketplaceControllerGetBookkeepingAssets
     * @summary Get bookkeeping assets
     * @request GET:/api-admin/marketplace/bookkeeping/assets
     */
    marketplaceControllerGetBookkeepingAssets: (
      query?: {
        skip?: any;
        take?: any;
      },
      params?: RequestParams,
    ) => Promise<AxiosResponse<GetMarketplaceBookkeepingAssetsResponseDto>>;
    /**
     * No description
     *
     * @tags Admin
     * @name MarketplaceControllerGetCategories
     * @summary Get categories
     * @request GET:/api-admin/marketplace/categories
     */
    marketplaceControllerGetCategories: (
      query?: {
        skip?: any;
        take?: any;
      },
      params?: RequestParams,
    ) => Promise<AxiosResponse<GetAdminCategoriesResponseDto>>;
    /**
     * No description
     *
     * @tags Admin
     * @name MarketplaceControllerGetPercentage
     * @summary Get percentage
     * @request GET:/api-admin/marketplace/percentage
     */
    marketplaceControllerGetPercentage: (params?: RequestParams) => Promise<AxiosResponse<GetPercentageResponseDto>>;
    /**
     * No description
     *
     * @tags Admin
     * @name MarketplaceControllerGetAssets
     * @summary Get assets
     * @request GET:/api-admin/marketplace/assets
     */
    marketplaceControllerGetAssets: (
      query?: {
        skip?: any;
        take?: any;
      },
      params?: RequestParams,
    ) => Promise<AxiosResponse<GetAdminAssetsResponseDto>>;
    /**
     * No description
     *
     * @tags Admin
     * @name MarketplaceControllerGetAsset
     * @summary Get token
     * @request GET:/api-admin/marketplace/assets/{address}
     */
    marketplaceControllerGetAsset: (
      address: string,
      params?: RequestParams,
    ) => Promise<AxiosResponse<GetMarketplaceAssetResponseDto>>;
    /**
     * No description
     *
     * @tags Admin
     * @name MarketplaceControllerGetTransactions
     * @summary Get history of transactions
     * @request GET:/api-admin/marketplace/history/transactions
     */
    marketplaceControllerGetTransactions: (
      query?: {
        skip?: any;
        take?: any;
      },
      params?: RequestParams,
    ) => Promise<AxiosResponse<GetTransactionsResponseDto>>;
    /**
     * No description
     *
     * @tags Admin
     * @name MarketplaceControllerGetHistoryOfPercentage
     * @summary Get history of percentage
     * @request GET:/api-admin/marketplace/history/percentage
     */
    marketplaceControllerGetHistoryOfPercentage: (
      query?: {
        skip?: any;
        take?: any;
      },
      params?: RequestParams,
    ) => Promise<AxiosResponse<GetHistoryOfPercentageResponseDto>>;
    /**
     * No description
     *
     * @tags Admin
     * @name AvatarsControllerGetAvatars
     * @summary Get avatars
     * @request GET:/api-admin/avatars
     */
    avatarsControllerGetAvatars: (
      query?: {
        id?: "asc" | "desc";
        name?: "asc" | "desc";
        countItems?: "asc" | "desc";
        search?: string;
        skip?: any;
        take?: any;
      },
      params?: RequestParams,
    ) => Promise<AxiosResponse<GetAvatarsResponseDto>>;
    /**
     * No description
     *
     * @tags Admin
     * @name AvatarsControllerGetAvatarEntity
     * @summary Get avatar entity
     * @request GET:/api-admin/avatars/{tokenId}
     */
    avatarsControllerGetAvatarEntity: (
      tokenId: string,
      params?: RequestParams,
    ) => Promise<AxiosResponse<GetAvatarEntityResponseDto>>;
    /**
     * No description
     *
     * @tags Admin
     * @name AvatarsControllerGetProperties
     * @summary Get entity properties
     * @request GET:/api-admin/avatars/{tokenId}/properties
     */
    avatarsControllerGetProperties: (
      tokenId: string,
      params?: RequestParams,
    ) => Promise<AxiosResponse<GetAvatarPropertiesResponseDto>>;
    /**
     * No description
     *
     * @tags Admin
     * @name AvatarsControllerGetItems
     * @summary Get items
     * @request GET:/api-admin/avatars/{tokenId}/items
     */
    avatarsControllerGetItems: (
      tokenId: string,
      query?: {
        name?: "asc" | "desc";
        amount?: "asc" | "desc";
        owner?: "asc" | "desc";
        search?: string;
        skip?: any;
        take?: any;
      },
      params?: RequestParams,
    ) => Promise<AxiosResponse<GetAvatarItemsResponseDto>>;
    /**
     * No description
     *
     * @tags Admin
     * @name ShopsControllerGetPerformanceToday
     * @summary Get performance today
     * @request GET:/api-admin/shops/performance-today
     */
    shopsControllerGetPerformanceToday: (
      params?: RequestParams,
    ) => Promise<AxiosResponse<GetShopPerformanceTodayResponseDto>>;
    /**
     * No description
     *
     * @tags Admin
     * @name ShopsControllerGetSalesToday
     * @summary Get sales today
     * @request GET:/api-admin/shops/sales-today
     */
    shopsControllerGetSalesToday: (params?: RequestParams) => Promise<AxiosResponse<GetShopSalesTodayResponseDto>>;
    /**
     * No description
     *
     * @tags Admin
     * @name ShopsControllerGetListOfSales
     * @summary Get list of sales
     * @request GET:/api-admin/shops/list-of-sales
     */
    shopsControllerGetListOfSales: (
      query?: {
        skip?: any;
        take?: any;
      },
      params?: RequestParams,
    ) => Promise<AxiosResponse<GetShopListOfSalesResponseDto>>;
    /**
     * No description
     *
     * @tags Admin
     * @name ShopsControllerGetRevenueTrend
     * @summary Get revenue trend
     * @request GET:/api-admin/shops/trend/revenue
     */
    shopsControllerGetRevenueTrend: (
      query: {
        month: number;
        year: number;
      },
      params?: RequestParams,
    ) => Promise<AxiosResponse<GetTrendResponseDto>>;
    /**
     * No description
     *
     * @tags Admin
     * @name ShopsControllerGetBookkeepingInfo
     * @summary Get bookkeeping
     * @request GET:/api-admin/shops/bookkeeping/info
     */
    shopsControllerGetBookkeepingInfo: (params?: RequestParams) => Promise<AxiosResponse<GetBookkeepingResponseDto>>;
    /**
     * No description
     *
     * @tags Admin
     * @name ShopsControllerGetAssetsOnSc
     * @summary Get bookkeeping assets
     * @request GET:/api-admin/shops/bookkeeping/assets
     */
    shopsControllerGetAssetsOnSc: (
      query?: {
        skip?: any;
        take?: any;
      },
      params?: RequestParams,
    ) => Promise<AxiosResponse<GetShopBookkeepingAssetsResponseDto>>;
    /**
     * No description
     *
     * @tags Admin
     * @name ShopsControllerGetTransactions
     * @summary Get history of transactions
     * @request GET:/api-admin/shops/history/transactions
     */
    shopsControllerGetTransactions: (
      query?: {
        skip?: any;
        take?: any;
      },
      params?: RequestParams,
    ) => Promise<AxiosResponse<GetHistoryTransactionsResponseDto>>;
    /**
     * No description
     *
     * @tags Admin
     * @name ShopsControllerGetShops
     * @summary Get shops
     * @request GET:/api-admin/shops
     */
    shopsControllerGetShops: (params?: RequestParams) => Promise<AxiosResponse<GetShopsResponseDto[]>>;
    /**
     * No description
     *
     * @tags Admin
     * @name ShopsControllerGetShop
     * @summary Get shop
     * @request GET:/api-admin/shops/{id}
     */
    shopsControllerGetShop: (id: string, params?: RequestParams) => Promise<AxiosResponse<GetShopResponseDto>>;
  };
  apiShops: {
    /**
     * No description
     *
     * @tags Shops
     * @name ApiShopsControllerGetAllShops
     * @summary Get all shops
     * @request GET:/api-shops
     */
    apiShopsControllerGetAllShops: (
      query?: {
        tags?: string[];
        active?: "ALL" | "OPEN" | "CLOSED";
      },
      params?: RequestParams,
    ) => Promise<AxiosResponse<GetAllShopsResponseDto[]>>;
    /**
     * No description
     *
     * @tags Shops
     * @name ApiShopsControllerGetAvailableTags
     * @summary Get available tags
     * @request GET:/api-shops/tags
     */
    apiShopsControllerGetAvailableTags: (params?: RequestParams) => Promise<AxiosResponse<GetAvailableTagsResponseDto>>;
  };
}
